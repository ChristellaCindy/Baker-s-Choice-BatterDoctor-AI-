import express from "express";
import multer from "multer";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const app = express();
const upload = multer();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const MODEL = "gemini-3.5-flash-lite";

const SYSTEM_INSTRUCTION = `You are BatterDoctor AI, an encouraging, witty, expert baking assistant and kitchen savior.

Guidelines for your responses:
1. Tone: Warm, supportive, slightly witty, concise, and easy to read.
2. Formatting: ALWAYS use clear Markdown formatting. Use short bullet points, bold key terms, and empty line breaks between paragraphs.
3. Conciseness: Keep solutions quick and actionable. Bakers in trouble need direct, step-by-step solutions without fluff.
4. Context awareness: If helping with a specific recipe, tailor ingredient proportions directly to that recipe.
5. No symbols or emoji: Never use emoji or decorative symbols anywhere in your reply, including in error or fallback style messages. If you need to quote or emphasize a word, use plain single (') or double (") quotes only. Never use backticks.`;

function buildRecipeSystemInstruction(recipeTitle, prompt) {
    return `${SYSTEM_INSTRUCTION}

Additional recipe context:
The user is currently viewing the recipe: '${recipeTitle}'. Answer questions specifically focused on troubleshooting or modifying this particular recipe. Their latest message is: "${prompt || ""}". Keep the advice anchored to this recipe when relevant.`;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function isNetworkFetchError(error) {
    if (!error) return false;

    const message = String(error.message || "");
    const causeMessage = String(error.cause?.message || "");
    const code = error.code || error.cause?.code;
    const retryableCodes = new Set([
        "ECONNRESET",
        "ENETUNREACH",
        "EHOSTUNREACH",
        "ETIMEDOUT",
        "UND_ERR_SOCKET",
        "UND_ERR_CONNECT_TIMEOUT",
        "UND_ERR_HEADERS_TIMEOUT"
    ]);

    return (
        error instanceof TypeError && /fetch failed/i.test(message)
    ) ||
        /fetch failed/i.test(message) ||
        /fetch failed/i.test(causeMessage) ||
        retryableCodes.has(code);
}

async function withRetry(apiCallFunc, maxRetries = 3, delayMs = 1000) {
    let lastError;

    for (let attempt = 0; attempt < maxRetries; attempt += 1) {
        try {
            return await apiCallFunc();
        } catch (error) {
            lastError = error;

            if (!isNetworkFetchError(error) || attempt === maxRetries - 1) {
                throw error;
            }

            await sleep(delayMs);
        }
    }

    throw lastError;
}

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

function toGeminiContents(conversation) {
    if (!Array.isArray(conversation)) return [];
    return conversation.map(turn => ({
        role: turn.role === "assistant" ? "model" : "user",
        parts: [{ text: turn.content }]
    }));
}

async function generateReply(contents, systemInstruction) {
    const response = await withRetry(() => ai.models.generateContent({
        model: MODEL,
        contents,
        config: { systemInstruction }
    }));
    return response.text;
}

function handleGeminiFailure(res, error, logLabel) {
    if (isNetworkFetchError(error)) {
        console.error(`Network fetch failed in ${logLabel}:`, error.message);
        if (error.stack) {
            console.error(error.stack);
        }
        return res.status(503).json({
            error: "Network unstable. BatterDoctor AI is having trouble connecting to the kitchen. Please try again."
        });
    }

    console.error(`Error in ${logLabel}:`, error.message);
    if (error.stack) {
        console.error(error.stack);
    }
    return res.status(500).json({ error: error.message || `Server error handling ${logLabel}.` });
}

app.get("/", (req, res) => {
    res.json({ message: "BatterDoctor AI Server Running" });
});

app.post("/api/chat/general", async (req, res) => {
    const { conversation } = req.body;
    console.log(`  - /api/chat/general: ${Array.isArray(conversation) ? conversation.length : 0} turn(s) in conversation`);

    if (!Array.isArray(conversation)) {
        return res.status(400).json({ error: "Conversation must be an array" });
    }

    try {
        const contents = toGeminiContents(conversation);
        const result = await generateReply(
            contents,
            SYSTEM_INSTRUCTION
        );
        return res.status(200).json({ result });
    } catch (e) {
        return handleGeminiFailure(res, e, "/api/chat/general");
    }
});

app.post("/api/chat/recipe", async (req, res) => {
    const { recipeTitle, conversation, prompt } = req.body;
    console.log(`  - /api/chat/recipe: recipe='${recipeTitle}', ${Array.isArray(conversation) ? conversation.length : 0} turn(s), prompt="${prompt || ""}"`);

    if (!Array.isArray(conversation)) {
        return res.status(400).json({ error: "Conversation must be an array" });
    }

    try {
        const contents = toGeminiContents(conversation);
        const result = await generateReply(
            contents,
            buildRecipeSystemInstruction(recipeTitle, prompt)
        );
        return res.status(200).json({ result });
    } catch (e) {
        return handleGeminiFailure(res, e, "/api/chat/recipe");
    }
});

app.post("/api/generate-from-image", upload.single("image"), async (req, res) => {
    const { prompt, recipeTitle } = req.body;
    const base64Image = req.file?.buffer.toString("base64");
    const imageMimeType = req.file?.mimetype;

    console.log(`  - /api/generate-from-image: recipe='${recipeTitle || "(none)"}', mimeType=${imageMimeType || "(missing)"}, size=${req.file?.size || 0} bytes, prompt="${prompt || ""}"`);

    if (!base64Image) {
        console.error("/api/generate-from-image called with no image file in the request.");
        return res.status(400).json({ error: "No image file provided." });
    }

    const baseInstruction = "You are BatterDoctor AI. Diagnose the baking photo the user uploaded. Identify likely issues such as underbaked, overmixed, collapsed, or burnt cakes, and give clear, encouraging, actionable advice. Never use emoji or decorative symbols. If you need to quote or emphasize a word, use plain single (') or double (\") quotes only, never backticks.";
    const systemInstruction = recipeTitle
        ? `${baseInstruction} The user is currently viewing the recipe: '${recipeTitle}'. Use that recipe's ingredients and method as context when diagnosing the photo, and tailor your advice specifically to that recipe where relevant.`
        : baseInstruction;

    try {
        const response = await withRetry(() => ai.models.generateContent({
            model: MODEL,
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: prompt || "Analyze this baking issue or dish and give advice." },
                        { inlineData: { mimeType: imageMimeType, data: base64Image } }
                    ]
                }
            ],
            config: { systemInstruction }
        }));
        return res.status(200).json({ result: response.text });
    } catch (e) {
        console.error(`Details:`, e);
        return handleGeminiFailure(res, e, "/api/generate-from-image");
    }
});

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`BatterDoctor AI Server running on Port: ${PORT}`);
// });

export default app;