const API_BASE_URL = 'http://localhost:3001';

const recipes = [
    {
        id: 1,
        title: "Black Forest Cake with Cream Filling and Cherries",
        prepTime: "20 MINS",
        cookTime: "45 MINS",
        totalTime: "1:05 MINS",
        servings: "N/A",
        image: "./images/black-forest-cake.png",
        ingredients: [
            { category: "Cake", items: ["2⅛ cups (225g) all-purpose flour", "3 cups white sugar", "¾ cup cocoa powder", "1½ tsp (5g) baking powder", "¾ tsp (5g) baking soda", "A pinch of Salt", "3 eggs", "1 cup milk", "½ cup vegetable oil"] },
            { category: "Cream Filling", items: ["1 tbsp vanilla extract", "2 (20 oz) cans pitted sour cherries", "¼ cup corn flour", "1 tsp vanilla extract", "3 cups heavy whipping cream", "⅓ cup icing sugar"] }
        ],
        steps: [
            "Preheat oven to 350 degrees F (175 degrees C). Grease and flour two 9 inch, round, cake pans; cover bottoms with waxed paper.",
            "In a large bowl, combine flour, 2 cups sugar, cocoa, baking powder, baking soda, and salt. Add eggs, milk, oil, and 1 tablespoon vanilla; beat until well blended. Pour batter into prepared pans.",
            "Bake for 35 minutes, or until wooden toothpick inserted in centers comes out clean. Cool layers in pans on wire racks 10 minutes. Loosen edges, and remove to racks to cool completely.",
            "Drain cherries, reserving 1/2 cup juice. Combine reserved juice, cherries, 1 cup sugar and cornstarch in a 2 quart saucepan. Cook over low heat until thickened, stirring constantly. Stir in 1 teaspoon vanilla. Cool before using.",
            "Combine whipping cream and confectioner's sugar in a chilled medium bowl. Beat with an electric mixer at high speed until stiff peaks form.",
            "With long serrated knife, split each cake layer horizontally in half. Tear one split layer into crumbs; set aside. Reserve 1 1/2 cups Frosting for decorating cake; set aside. Gently brush loose crumbs off top and side of each cake layer with pastry brush or hands. Assemble layers placing frosting and cherry topping in between. Frost outside, pat crumbs, pipe edges, and top with cherries."
        ]
    },
    {
        id: 2,
        title: "Pineapple Upside-Down Cake",
        prepTime: "15 MINS",
        cookTime: "60 MINS",
        totalTime: "1:15 MINS",
        servings: "N/A",
        image: "./images/pineapple-upside-down.png",
        ingredients: [
            { category: "Base & Topping", items: ["½ cup unsalted butter, melted", "⅔ cup packed brown sugar", "3 cups fresh pineapple – peeled"] },
            { category: "Batter", items: ["1½ cups all-purpose flour", "1½ tsp baking powder", "½ tsp salt", "½ tsp ground cinnamon", "½ cup unsalted butter, softened", "⅔ cups Icing sugar", "2 eggs", "1 tsp vanilla extract", "¾ cup milk"] }
        ],
        steps: [
            "Preheat the oven to 350 degrees F (175 degrees C).",
            "In a small bowl stir together the melted butter and the brown sugar; spread the mixture evenly in a well buttered 9 inch round cake pan. Pat the pineapple very dry and arrange it evenly on top.",
            "Sift together flour, baking powder, salt, and cinnamon.",
            "In a large mixing bowl, cream the softened butter with the sugar until light and fluffy. Add the eggs, one at a time. Stir in the vanilla. Add the flour mixture alternately with the milk. Spread batter over pineapple.",
            "Bake for 45 to 55 minutes, or until a tester comes out clean. Cool for 15 minutes, run a knife around edge, invert onto plate. Serve warm."
        ]
    },
    {
        id: 3,
        title: "Strawberry Cake",
        prepTime: "25 MINS",
        cookTime: "20 MINS",
        totalTime: "45 MINS",
        servings: "8",
        image: "./images/strawberry-cake.png",
        ingredients: [
            { category: "Cake", items: ["2 cups icing sugar", "1 (3 oz) package strawberry flavored Jell-O®", "1 cup butter, softened", "4 eggs (room temperature)", "2¾ cups sifted cake flour", "2½ tsp baking powder", "1 cup whole milk, room temperature", "1 tbsp vanilla extract", "½ cup strawberry puree (from frozen sweetened strawberries)"] }
        ],
        steps: [
            "Preheat the oven to 350 degrees F (175 degrees C). Grease and flour two 9 inch round cake pans.",
            "In a large bowl, cream together the butter, sugar and dry strawberry gelatin until light and fluffy. Beat in eggs one at a time. Combine flour and baking powder; stir into batter alternately with milk. Blend in vanilla and strawberry puree. Divide batter evenly.",
            "Bake for 25 to 30 minutes. Allow cakes to cool in pans over a wire rack for at least 10 minutes, before tapping out to cool completely."
        ]
    },
    {
        id: 4,
        title: "Lemon Cake",
        prepTime: "15 MINS",
        cookTime: "30 MINS",
        totalTime: "45 MINS",
        servings: "12",
        image: "./images/lemon-cake.png",
        ingredients: [
            { category: "Cake", items: ["1 cup unsalted butter", "2½ cups all-purpose flour", "½ tsp baking powder", "½ tsp baking soda", "1 tsp salt", "1 tbsp lemon zest", "2 cups sugar", "2 large eggs + 3 large egg yolks", "¼ cup + 2 tbsp fresh lemon juice", "1 cup low-fat buttermilk", "1 lemon, thinly sliced", "Whipped Frosting"] }
        ],
        steps: [
            "Preheat oven to 350 degrees. Butter and flour two 8-by-2-inch cake pans. Whisk flour, baking powder, baking soda, salt, and lemon zest.",
            "Beat butter and 1 1/2 cups sugar until light and fluffy. Beat in eggs and yolks, one at a time. Beat in 2 tbsp lemon juice. Alternately beat in flour mixture and buttermilk.",
            "Divide batter between pans. Bake 32 to 35 minutes. Cool in pans 10 minutes, then invert onto a wire rack.",
            "Bring remaining 1/2 cup sugar and 1/2 cup water to a boil. Add lemon slices and simmer 25 minutes. Transfer slices to plate. Stir remaining 1/4 cup lemon juice into syrup.",
            "Poke holes in warm cakes, brush with lemon syrup. Cool completely, frost, and top with candied lemons."
        ]
    },
    {
        id: 5,
        title: "Red Velvet with Cream Cheese Frosting",
        prepTime: "15 MINS",
        cookTime: "20 MINS",
        totalTime: "35 MINS",
        servings: "8",
        image: "./images/red-velvet.png",
        ingredients: [
            { category: "Cake", items: ["½ cup Butter", "1½ cups granulated sugar", "2 eggs", "2 tbsp Cocoa Powder", "4 tbsp red food coloring", "1 tsp salt", "1 tsp vanilla extract", "1 cup buttermilk", "2½ cups sifted All-purpose flour", "1½ tsp Baking soda", "1 tbsp distilled white vinegar"] }
        ],
        steps: [
            "Preheat oven to 350 degrees F (175 degrees C). Grease two 9-inch round pans.",
            "Beat Butter and sugar until very light and fluffy. Add eggs and beat well.",
            "Make a paste of cocoa and red food coloring; add to creamed mixture.",
            "Mix salt, vanilla, and buttermilk together.",
            "Add the flour to the Mixture. Mix soda and vinegar and gently pour into the cake batter. Don't beat or stir the batter after this point.",
            "Pour batter into prepared pans. Bake about 30 minutes. Cool completely."
        ]
    },
    {
        id: 6,
        title: "Chocolate Fudge Cake with Chocolate Curl",
        prepTime: "30 MINS",
        cookTime: "100 MINS",
        totalTime: "3:45 MINS",
        servings: "12",
        image: "./images/chocolate-fudge-cake.png",
        ingredients: [
            { category: "Cake", items: ["250g butter, chopped", "½ cup Liquid milk", "180g block dark chocolate", "2 cups raw caster sugar", "312.5g Flour", "29.5g cocoa powder", "2 eggs", "1 Cup Cold Water", "Dark chocolate curls"] },
            { category: "Ganache", items: ["400g chocolate, chopped", "⅔ cup thickened cream"] }
        ],
        steps: [
            "Preheat oven to 160°/140°C. Grease and line a 22cm round cake pan.",
            "Place butter, cold water, milk, chocolate and sugar in a saucepan over medium heat. Cook for 8-10 mins until smooth. Set aside for 20 mins.",
            "Mix flour and cocoa into chocolate mixture. Whisk in eggs. Spoon into pan.",
            "Bake for 1 hour 40 minutes. Cool cake in pan.",
            "Make ganache: Microwave chocolate and cream for 1-2 mins. Refrigerate 15 mins to thicken.",
            "Cut cake into 3 layers. Spread ganache between layers and on top/sides. Decorate with chocolate curls. Set aside 1 hr."
        ]
    },
    {
        id: 7,
        title: "Zebra Marble Cake",
        prepTime: "30 MINS",
        cookTime: "45 MINS",
        totalTime: "1:20 MINS",
        servings: "N/A",
        image: "./images/zebra-marble-cake.png",
        ingredients: [
            { category: "Cake", items: ["5 Eggs", "Sugar (amount varies per step)", "Butter; room temperature", "Sour Cream", "Baking Soda", "Baking Powder", "Cocoa Powder", "1 Cup Cold Water", "2 cups Flour"] }
        ],
        steps: [
            "Combine softened butter with 3/4 cup of sugar.",
            "In a separate bowl, whisk eggs together with 1 cup of sugar.",
            "Add butter to whisked eggs.",
            "To sour cream, add baking powder and baking soda. Add it all to the cake batter.",
            "Add flour to the batter. Split batter into two separate bowls, add cacao powder to one. Whisk well.",
            "Spray a cake pan. Taking turns, place two table spoons of each color on top of each other to create the zebra effect. Bake at 350F for 40 mins."
        ]
    },
    {
        id: 8,
        title: "Banana Cake",
        prepTime: "15 MINS",
        cookTime: "40 MINS",
        totalTime: "55 MINS",
        servings: "8-10",
        image: "./images/banana-cake.png",
        ingredients: [
            { category: "Cake", items: ["140g butter, softened", "140g caster sugar", "2 large eggs", "140g flour", "1 tsp baking powder", "2 very ripe, mashed bananas", "50g icing sugar", "handful dried chips"] }
        ],
        steps: [
            "Heat oven to 180C/160C fan. Butter and line your tin.",
            "Mix butter and sugar until light, slowly add eggs with a little flour. Fold in remaining flour, baking powder, and bananas.",
            "Pour into tin and bake for about 30 mins. Cool in tin 10 mins, remove to rack.",
            "Mix icing sugar with water to make a runny icing. Drizzle over cake and decorate with chips."
        ]
    },
    {
        id: 9,
        title: "Apple and Almond Dessert Cake",
        prepTime: "25 MINS",
        cookTime: "30 MINS",
        totalTime: "1:45 MINS",
        servings: "N/A",
        image: "./images/apple-almond-cake.png",
        ingredients: [
            { category: "Cake", items: ["melted butter for greasing", "180g butter, chopped", "140g caster sugar", "1 tsp vanilla extract", "3 eggs", "100g ground almonds", "150g flour", "80ml milk", "2 small red or green apples, quartered & sliced"] }
        ],
        steps: [
            "Preheat oven to 170 C. Grease and line tin.",
            "Beat butter, caster sugar & vanilla for 8 mins till pale. Add eggs one at a time.",
            "Stir in ground almonds. Alternate adding flour and milk, stirring well.",
            "Arrange apple slices over base of tin. Spoon mixture on top and smooth.",
            "Bake 30-35 mins. Cool in pan 10 mins before turning onto plate. Serve warm."
        ]
    },
    {
        id: 10,
        title: "Soufflé Cheesecake",
        prepTime: "25 MINS",
        cookTime: "60 MINS",
        totalTime: "2:10 MINS",
        servings: "N/A",
        image: "./images/japanese-souffle-cheesecake.png",
        ingredients: [
            { category: "Cake", items: ["3½ Tbsp unsalted butter (50g)", "4 oz. (113g) sliced cheddar cheese", "½ cup Condensed Milk", "1 Tbsp honey", "3 Eggs, separated", "3 Tbsp flour", "½ cup granulated sugar", "Vanilla extract to taste"] }
        ],
        steps: [
            "Place parchment on a 7-inch pan. Sift flour. Preheat oven to 320F (160C). Prepare boiling water for water bath.",
            "Melt cheese in milk. Turn off heat, add butter and honey, stir till melted. Set aside.",
            "Beat egg whites to dense foam. Add sugar, beat until stiff.",
            "Add yolks into cheese mixture a third at a time. Add flour and vanilla until well mixed.",
            "Fold egg whites into mixture gently. Pour into pan, drop pan on counter to pop bubbles.",
            "Bake in water bath 20 mins. Reduce heat to 280F (140C), bake another 40 mins. (Cover with foil if browning fast).",
            "Cool in oven 30 mins, remove from pan. Sprinkle with icing sugar. Chill for a day before serving."
        ]
    }
];

let currentActiveRecipe = null;

const conversationHistory = {
    'global-chat-window': [],
    'contextual-chat-window': []
};

let contextualSelectedImage = null;
let contextualSelectedImageDataUrl = null;

let globalSelectedImage = null;
let globalSelectedImageDataUrl = null;

const markdownRenderOptions = {
    breaks: true,
    gfm: true
};

function renderAssistantMarkdown(text) {
    const input = String(text ?? '');
    return window.marked ? marked.parse(input, markdownRenderOptions) : input;
}

function renderRecipes() {
    const grid = document.getElementById('recipe-grid');
    grid.innerHTML = '';

    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer border border-gray-100 hover:border-bakery-accent/30";
        card.addEventListener('click', () => openRecipeModal(recipe.id));

        card.innerHTML = `
            <div class="relative h-56 overflow-hidden bg-gray-100">
                <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-white/50">
                    <i data-lucide="clock" class="w-3.5 h-3.5 text-bakery-accent"></i>
                    <span class="text-xs font-bold text-gray-700">${recipe.totalTime}</span>
                </div>
            </div>
            <div class="p-6 flex flex-col flex-grow relative bg-white">
                <h4 class="font-serif font-bold text-xl text-gray-800 mb-2 leading-tight group-hover:text-bakery-accent transition-colors">${recipe.title}</h4>

                <div class="flex gap-4 mt-auto pt-4 text-sm text-gray-500 mb-6">
                    <div class="flex flex-col">
                        <span class="text-[10px] uppercase tracking-wider font-semibold text-gray-400">Prep</span>
                        <span>${recipe.prepTime}</span>
                    </div>
                    <div class="w-px bg-gray-200"></div>
                    <div class="flex flex-col">
                        <span class="text-[10px] uppercase tracking-wider font-semibold text-gray-400">Cook</span>
                        <span>${recipe.cookTime}</span>
                    </div>
                </div>

                <button class="w-full py-3 bg-bakery-light text-bakery-accent font-semibold rounded-xl group-hover:bg-bakery-accent group-hover:text-white transition-colors flex justify-center items-center gap-2">
                    View Recipe & AI
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    lucide.createIcons();
}

function openRecipeModal(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;
    currentActiveRecipe = recipe;
    conversationHistory['contextual-chat-window'] = [];
    clearContextualImage();

    const chatPanel = document.getElementById('contextual-chat-panel');
    if (chatPanel && chatPanel.classList.contains('expanded-chat')) {
        chatPanel.classList.remove('expanded-chat');
        updateExpandChatIcon(false);
    }

    const contentDiv = document.getElementById('modal-recipe-content');

    let ingredientsHTML = '';
    recipe.ingredients.forEach(group => {
        ingredientsHTML += `<h6 class="font-bold text-gray-800 mt-4 mb-2">${group.category}</h6><ul class="space-y-1">`;
        group.items.forEach(item => {
            ingredientsHTML += `<li class="flex items-start gap-2 text-gray-600"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-bakery-accent flex-shrink-0"></div><span>${item}</span></li>`;
        });
        ingredientsHTML += `</ul>`;
    });

    let stepsHTML = '<ol class="space-y-4">';
    recipe.steps.forEach((step, index) => {
        stepsHTML += `
        <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-bakery-light text-bakery-accent flex items-center justify-center font-bold flex-shrink-0">${index + 1}</div>
            <p class="text-gray-600 leading-relaxed pt-1">${step}</p>
        </li>`;
    });
    stepsHTML += '</ol>';

    contentDiv.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-64 object-cover rounded-2xl mb-6 shadow-sm">

        <h2 class="text-3xl font-serif font-bold text-gray-800 mb-4">${recipe.title}</h2>

        <div class="flex flex-wrap gap-4 mb-8">
            <div class="bg-orange-50 px-4 py-2 rounded-xl border border-orange-100 flex items-center gap-2">
                <i data-lucide="clock" class="w-4 h-4 text-bakery-accent"></i>
                <div class="flex flex-col">
                    <span class="text-[10px] uppercase font-bold text-gray-500 leading-none">Total Time</span>
                    <span class="text-sm font-bold text-gray-800">${recipe.totalTime}</span>
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 flex items-center gap-2">
                <i data-lucide="chef-hat" class="w-4 h-4 text-gray-500"></i>
                <div class="flex flex-col">
                    <span class="text-[10px] uppercase font-bold text-gray-500 leading-none">Prep</span>
                    <span class="text-sm font-bold text-gray-800">${recipe.prepTime}</span>
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 flex items-center gap-2">
                <i data-lucide="flame" class="w-4 h-4 text-gray-500"></i>
                <div class="flex flex-col">
                    <span class="text-[10px] uppercase font-bold text-gray-500 leading-none">Cook</span>
                    <span class="text-sm font-bold text-gray-800">${recipe.cookTime}</span>
                </div>
            </div>
            ${recipe.servings !== 'N/A' ? `
            <div class="bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 flex items-center gap-2">
                <i data-lucide="users" class="w-4 h-4 text-gray-500"></i>
                <div class="flex flex-col">
                    <span class="text-[10px] uppercase font-bold text-gray-500 leading-none">Servings</span>
                    <span class="text-sm font-bold text-gray-800">${recipe.servings}</span>
                </div>
            </div>` : ''}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div class="md:col-span-5 bg-gray-50 p-6 rounded-2xl border border-gray-100 h-fit">
                <h3 class="text-xl font-serif font-bold text-gray-800 mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                    <i data-lucide="shopping-bag" class="w-5 h-5 text-bakery-accent"></i>
                    Ingredients
                </h3>
                ${ingredientsHTML}
            </div>
            <div class="md:col-span-7">
                <h3 class="text-xl font-serif font-bold text-gray-800 mb-6 flex items-center gap-2 border-b border-gray-200 pb-2">
                    <i data-lucide="list-ordered" class="w-5 h-5 text-bakery-accent"></i>
                    Directions
                </h3>
                ${stepsHTML}
            </div>
        </div>
    `;

    document.getElementById('contextual-ai-subtitle').innerText = `Asking about ${recipe.title}`;
    const chatWindow = document.getElementById('contextual-chat-window');
    chatWindow.innerHTML = `
        <div class="flex gap-3">
            <div class="w-8 h-8 rounded-full bg-bakery-accent flex-shrink-0 flex items-center justify-center text-white mt-1 shadow-sm">
                <i data-lucide="bot" class="w-4 h-4"></i>
            </div>
            <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 border border-gray-100">
                Hi! I'm ready to help you with the <strong>${recipe.title}</strong>. Having trouble or missing an ingredient? Let me know!
            </div>
        </div>
    `;

    lucide.createIcons();

    const modal = document.getElementById('recipe-modal');
    const modalContent = document.getElementById('recipe-modal-content');

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95', 'translate-y-10');
    }, 10);

    document.body.style.overflow = 'hidden';
}

function closeRecipeModal() {
    const modal = document.getElementById('recipe-modal');
    const modalContent = document.getElementById('recipe-modal-content');

    modal.classList.add('opacity-0');
    modalContent.classList.add('scale-95', 'translate-y-10');

    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
        currentActiveRecipe = null;
    }, 300);
}

let globalAIActive = false;

function toggleGlobalAI() {
    const modal = document.getElementById('global-ai-modal');
    const modalContent = document.getElementById('global-ai-modal-content');
    globalAIActive = !globalAIActive;

    if (globalAIActive) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
        }, 10);
        document.getElementById('global-chat-input').focus();
    } else {
        modal.classList.add('opacity-0');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
        }, 300);
    }
}

function updateExpandChatIcon(isExpanded) {
    const btn = document.getElementById('toggle-expand-chat-btn');
    if (!btn) return;
    btn.innerHTML = `<i data-lucide="${isExpanded ? 'minimize-2' : 'maximize-2'}" class="w-4 h-4"></i>`;
    btn.title = isExpanded ? 'Minimize chat' : 'Expand chat';
    lucide.createIcons({ root: btn });
}

function toggleExpandChat() {
    const chatPanel = document.getElementById('contextual-chat-panel');
    if (!chatPanel) return;
    const isExpanded = chatPanel.classList.toggle('expanded-chat');
    updateExpandChatIcon(isExpanded);
}

const MODAL_RESIZER_MIN_PANE_PX = 280;
const MODAL_RESIZER_BREAKPOINT_PX = 768;

function initModalResizer() {
    const resizer = document.getElementById('modal-resizer');
    const leftPane = document.getElementById('modal-left-panel');
    const rightPane = document.getElementById('contextual-chat-panel');
    const container = document.getElementById('recipe-modal-content');
    if (!resizer || !leftPane || !rightPane || !container) return;

    let dragging = false;
    let dragStartX = 0;
    let dragStartLeftWidth = 0;

    const isDesktopLayout = () => window.innerWidth >= MODAL_RESIZER_BREAKPOINT_PX;

    function startDrag(clientX) {
        if (!isDesktopLayout() || rightPane.classList.contains('expanded-chat')) return;
        dragging = true;
        dragStartX = clientX;
        dragStartLeftWidth = leftPane.getBoundingClientRect().width;
        document.body.classList.add('is-resizing');
    }

    function drag(clientX) {
        if (!dragging) return;

        const containerWidth = container.getBoundingClientRect().width;
        const resizerWidth = resizer.getBoundingClientRect().width;
        const maxLeftWidth = containerWidth - resizerWidth - MODAL_RESIZER_MIN_PANE_PX;

        let newLeftWidth = dragStartLeftWidth + (clientX - dragStartX);
        newLeftWidth = Math.max(MODAL_RESIZER_MIN_PANE_PX, Math.min(newLeftWidth, maxLeftWidth));
        const newRightWidth = containerWidth - resizerWidth - newLeftWidth;

        leftPane.style.flex = `0 0 ${newLeftWidth}px`;
        rightPane.style.flex = `0 0 ${newRightWidth}px`;
    }

    function endDrag() {
        if (!dragging) return;
        dragging = false;
        document.body.classList.remove('is-resizing');
    }

    resizer.addEventListener('mousedown', (e) => {
        e.preventDefault();
        startDrag(e.clientX);
    });
    document.addEventListener('mousemove', (e) => drag(e.clientX));
    document.addEventListener('mouseup', endDrag);

    resizer.addEventListener('touchstart', (e) => {
        if (e.touches[0]) startDrag(e.touches[0].clientX);
    }, { passive: true });
    document.addEventListener('touchmove', (e) => {
        if (dragging && e.touches[0]) drag(e.touches[0].clientX);
    }, { passive: true });
    document.addEventListener('touchend', endDrag);

    window.addEventListener('resize', () => {
        if (!isDesktopLayout()) {
            leftPane.style.flex = '';
            rightPane.style.flex = '';
        }
    });
}

function insertGlobalPrompt(text) {
    document.getElementById('global-chat-input').value = text;
    document.getElementById('global-chat-input').focus();
}

function insertContextualPrompt(text) {
    document.getElementById('contextual-chat-input').value = text;
    document.getElementById('contextual-chat-input').focus();
}

function appendMessage(windowId, type, message, imageDataUrl) {
    const chatWindow = document.getElementById(windowId);
    const msgDiv = document.createElement('div');
    msgDiv.className = "flex gap-3 w-full " + (type === 'user' ? "justify-end" : "justify-start");

    if (type === 'user') {
        const imageHTML = imageDataUrl
            ? `<img src="${imageDataUrl}" alt="Attached photo" class="chat-message-image">`
            : '';
        msgDiv.innerHTML = `
            <div class="bg-bakery-accent text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm max-w-[85%]">
                ${imageHTML}
                ${message}
            </div>
        `;
    } else if (type === 'ai') {
        msgDiv.innerHTML = `
            <div class="w-8 h-8 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-bakery-accent shadow-sm mt-1 border border-gray-100">
                <i data-lucide="bot" class="w-4 h-4"></i>
            </div>
            <div class="chat-content bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 border border-gray-100 max-w-[85%]">
                ${renderAssistantMarkdown(message)}
            </div>
        `;
    } else if (type === 'typing') {
        msgDiv.id = `typing-${windowId}`;
        msgDiv.innerHTML = `
            <div class="w-8 h-8 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-bakery-accent shadow-sm mt-1 border border-gray-100">
                <i data-lucide="bot" class="w-4 h-4"></i>
            </div>
            <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-500 border border-gray-100 flex items-center gap-1 w-16 h-10">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
            </div>
        `;
    }

    chatWindow.appendChild(msgDiv);
    if (type !== 'user') lucide.createIcons({ root: msgDiv });
    chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: 'smooth' });
}

function removeTyping(windowId) {
    const typingEl = document.getElementById(`typing-${windowId}`);
    if (typingEl) typingEl.remove();
}

function offlineFallbackMessage() {
    return "Hmm, I can't reach the BatterDoctor AI kitchen right now. The server might be offline. In the meantime, check your ingredient measurements and oven temperature. That fixes most baking hiccups. Try again in a moment.";
}

function handleContextualImageSelected(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    contextualSelectedImage = file;

    const reader = new FileReader();
    reader.onload = () => {
        contextualSelectedImageDataUrl = reader.result;
        const previewContainer = document.getElementById('contextual-image-preview');
        const previewImg = document.getElementById('contextual-image-preview-img');
        previewImg.src = contextualSelectedImageDataUrl;
        previewContainer.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
}

function clearContextualImage() {
    contextualSelectedImage = null;
    contextualSelectedImageDataUrl = null;

    const fileInput = document.getElementById('contextual-image-input');
    const previewContainer = document.getElementById('contextual-image-preview');
    const previewImg = document.getElementById('contextual-image-preview-img');

    if (fileInput) fileInput.value = '';
    if (previewImg) previewImg.src = '';
    if (previewContainer) previewContainer.classList.add('hidden');
}

function handleGlobalImageSelected(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    globalSelectedImage = file;

    const reader = new FileReader();
    reader.onload = () => {
        globalSelectedImageDataUrl = reader.result;
        const previewContainer = document.getElementById('global-image-preview');
        const previewImg = document.getElementById('global-image-preview-img');
        previewImg.src = globalSelectedImageDataUrl;
        previewContainer.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
}

function clearGlobalImage() {
    globalSelectedImage = null;
    globalSelectedImageDataUrl = null;

    const fileInput = document.getElementById('global-image-input');
    const previewContainer = document.getElementById('global-image-preview');
    const previewImg = document.getElementById('global-image-preview-img');

    if (fileInput) fileInput.value = '';
    if (previewImg) previewImg.src = '';
    if (previewContainer) previewContainer.classList.add('hidden');
}

async function extractErrorMessage(response) {
    try {
        const body = await response.json();
        return body?.error || body?.message || response.statusText;
    } catch {
        return response.statusText;
    }
}

async function callGeneralChat(conversation) {
    const response = await fetch(`${API_BASE_URL}/api/chat/general`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conversation })
    });
    if (!response.ok) {
        throw new Error(`Server responded with ${response.status}: ${await extractErrorMessage(response)}`);
    }
    const data = await response.json();
    return data.result;
}

async function callRecipeChat(recipeTitle, conversation, prompt) {
    const response = await fetch(`${API_BASE_URL}/api/chat/recipe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipeTitle, conversation, prompt })
    });
    if (!response.ok) {
        throw new Error(`Server responded with ${response.status}: ${await extractErrorMessage(response)}`);
    }
    const data = await response.json();
    return data.result;
}

async function callGenerateFromImage(imageFile, prompt, recipeTitle) {
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('prompt', prompt || '');
    if (recipeTitle) formData.append('recipeTitle', recipeTitle);

    const response = await fetch(`${API_BASE_URL}/api/generate-from-image`, {
        method: 'POST',
        body: formData
    });
    if (!response.ok) {
        throw new Error(`Server responded with ${response.status}: ${await extractErrorMessage(response)}`);
    }
    const data = await response.json();
    return data.result;
}

async function handleGlobalSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('global-chat-input');
    const message = input.value.trim();

    const hasImage = !!globalSelectedImage;
    if (!message && !hasImage) return;

    const imageToSend = globalSelectedImage;
    const imageDataUrlForBubble = globalSelectedImageDataUrl;

    appendMessage('global-chat-window', 'user', message || 'Photo attached', imageDataUrlForBubble);
    input.value = '';
    conversationHistory['global-chat-window'].push({ role: 'user', content: message || '[Image attached]' });
    clearGlobalImage();

    appendMessage('global-chat-window', 'typing', '');

    try {
        let result;
        if (hasImage) {
            result = await callGenerateFromImage(imageToSend, message, null);
        } else {
            result = await callGeneralChat(conversationHistory['global-chat-window']);
        }
        removeTyping('global-chat-window');
        appendMessage('global-chat-window', 'ai', result);
        conversationHistory['global-chat-window'].push({ role: 'assistant', content: result });
    } catch (err) {
        console.error(`General chat request to ${API_BASE_URL} failed. Is the Express server running? Details:`, err);
        removeTyping('global-chat-window');
        appendMessage('global-chat-window', 'ai', offlineFallbackMessage());
    }
}

async function handleContextualSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('contextual-chat-input');
    const message = input.value.trim();
    if (!currentActiveRecipe) return;

    const hasImage = !!contextualSelectedImage;
    if (!message && !hasImage) return;

    const imageToSend = contextualSelectedImage;
    const imageDataUrlForBubble = contextualSelectedImageDataUrl;

    appendMessage('contextual-chat-window', 'user', message || 'Photo attached', imageDataUrlForBubble);
    input.value = '';
    conversationHistory['contextual-chat-window'].push({ role: 'user', content: message || '[Image attached]' });
    clearContextualImage();

    appendMessage('contextual-chat-window', 'typing', '');

    try {
        let result;
        if (hasImage) {
            result = await callGenerateFromImage(imageToSend, message, currentActiveRecipe.title);
        } else {
            result = await callRecipeChat(
                currentActiveRecipe.title,
                conversationHistory['contextual-chat-window'],
                message
            );
        }
        removeTyping('contextual-chat-window');
        appendMessage('contextual-chat-window', 'ai', result);
        conversationHistory['contextual-chat-window'].push({ role: 'assistant', content: result });
    } catch (err) {
        console.error(`Recipe chat request to ${API_BASE_URL} failed. Is the Express server running? Details:`, err);
        removeTyping('contextual-chat-window');
        appendMessage('contextual-chat-window', 'ai', offlineFallbackMessage());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    renderRecipes();

    document.getElementById('explore-menu-btn').addEventListener('click', () => {
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('open-global-ai-btn').addEventListener('click', toggleGlobalAI);
    document.getElementById('global-ai-fab').addEventListener('click', toggleGlobalAI);
    document.getElementById('close-global-ai-btn').addEventListener('click', toggleGlobalAI);
    document.getElementById('close-recipe-modal-btn').addEventListener('click', closeRecipeModal);

    document.getElementById('global-chat-form').addEventListener('submit', handleGlobalSubmit);
    document.getElementById('contextual-chat-form').addEventListener('submit', handleContextualSubmit);

    document.getElementById('toggle-expand-chat-btn').addEventListener('click', toggleExpandChat);

    initModalResizer();

    const contextualImageInput = document.getElementById('contextual-image-input');
    document.getElementById('contextual-image-upload-btn').addEventListener('click', () => contextualImageInput.click());
    contextualImageInput.addEventListener('change', handleContextualImageSelected);
    document.getElementById('contextual-remove-image-btn').addEventListener('click', clearContextualImage);

    const globalImageInput = document.getElementById('global-image-input');
    document.getElementById('global-image-upload-btn').addEventListener('click', () => globalImageInput.click());
    globalImageInput.addEventListener('change', handleGlobalImageSelected);
    document.getElementById('global-remove-image-btn').addEventListener('click', clearGlobalImage);

    document.querySelectorAll('.global-quick-prompt').forEach(btn => {
        btn.addEventListener('click', () => insertGlobalPrompt(btn.dataset.prompt));
    });
    document.querySelectorAll('.contextual-quick-prompt').forEach(btn => {
        btn.addEventListener('click', () => insertContextualPrompt(btn.dataset.prompt));
    });
});