// DMS Natsumatsuri Party Planner & Budget Tracker - app.js

// // Global State
const state = {
    guestCount: 7,
    baseBudget: 30000,
    perGuestContribution: 1000,
    lanternsActive: true,
    activeDishFilter: 'all',
    guestCostumes: [
        { id: 'c-1', guestName: 'Matthew', costumeName: 'Retro Jinbei & Kitsune Mask', votes: 2 },
        { id: 'c-2', guestName: 'Kenji', costumeName: 'DMS Matsuri Happi Coat', votes: 1 },
        { id: 'c-3', guestName: 'Yuka', costumeName: 'Colorful Summer Yukata', votes: 3 }
    ],
    shoppingItems: [
        // Gyomu Super Items
        { id: 'g-chix', name: 'Frozen Chicken Thighs (Momo-niku)', desc: '2kg bag for Karaage', estPrice: 1500, actualPrice: 1500, store: 'gyomu', checked: false, tags: ['karaage'] },
        { id: 'g-oil', name: 'Frying Oil', desc: '1.5L - 2L bottle for Karaage/Fries deep frying', estPrice: 600, actualPrice: 600, store: 'gyomu', checked: false, tags: ['karaage', 'fries'] },
        { id: 'g-dry', name: 'Dry Ingredients (Katakuriko & Garlic/Ginger Paste)', desc: 'Potato starch & tubes for Karaage', estPrice: 400, actualPrice: 400, store: 'gyomu', checked: false, tags: ['karaage'] },
        { id: 'g-yaki', name: 'Frozen Yakitori Momo Skewers', desc: '50-skewers box, precooked', estPrice: 1500, actualPrice: 1500, store: 'gyomu', checked: false, tags: ['yakitori'] },
        { id: 'g-soba', name: 'Yakisoba Noodles & Sauce', desc: 'Bulk noodle packs + bottle sauce', estPrice: 800, actualPrice: 800, store: 'gyomu', checked: false, tags: ['yakisoba'] },
        { id: 'g-tako', name: 'Takoyaki & Okonomiyaki Flour Mix', desc: 'flour bags for live teppan/crepes cooking', estPrice: 600, actualPrice: 600, store: 'gyomu', checked: false, tags: ['takoyaki', 'hashimaki', 'crepes'] },
        { id: 'g-cond', name: 'Matsuri Condiments', desc: 'Aonori, bonito flakes, Kewpie mayo, pickled ginger', estPrice: 1200, actualPrice: 1200, store: 'gyomu', checked: false, tags: ['takoyaki', 'hashimaki', 'yakisoba'] },
        { id: 'g-cucumber', name: 'Japanese Cucumbers (Kyuuri)', desc: '8-10 fresh cucumbers for Kyuuri no Ippon-zuke', estPrice: 400, actualPrice: 400, store: 'gyomu', checked: false, tags: ['cucumber'] },
        { id: 'g-cabbage', name: 'Cabbage (Kyabetsu)', desc: '2 whole cabbages, shredded for Hashimaki & Yakisoba', estPrice: 400, actualPrice: 400, store: 'gyomu', checked: false, tags: ['hashimaki', 'yakisoba'] },
        { id: 'g-negi', name: 'Green Onions (Negi)', desc: '3-4 stalks for Takoyaki topping & Somen condiments', estPrice: 300, actualPrice: 300, store: 'gyomu', checked: false, tags: ['takoyaki', 'somen'] },
        { id: 'g-somen', name: 'Dry Somen Noodles', desc: 'Bulk somen pack for Nagashi Somen machine', estPrice: 400, actualPrice: 400, store: 'gyomu', checked: false, tags: ['somen'] },
        { id: 'g-tsuyu', name: 'Somen Dipping Sauce (Tsuyu)', desc: 'Large bottle mentsuyu', estPrice: 300, actualPrice: 300, store: 'gyomu', checked: false, tags: ['somen'] },
        { id: 'g-soda', name: 'Carbonated Water (Soda)', desc: '3-4 bottles of 1.5L for Lemon Sours', estPrice: 600, actualPrice: 600, store: 'gyomu', checked: false, tags: ['drinks'] },
        { id: 'g-soft', name: 'Non-Alcoholic Soft Drinks', desc: '1.5L Coke & Oolong/Green Tea', estPrice: 500, actualPrice: 500, store: 'gyomu', checked: false, tags: ['drinks'] },
        { id: 'g-fries', name: 'Frozen French Fries (1kg)', desc: 'Shoestring or wedge cut bag', estPrice: 300, actualPrice: 300, store: 'gyomu', checked: false, tags: ['fries'] },
        { id: 'g-crepe-whip', name: 'Whipped Cream Spray', desc: 'Can of whipped cream for crepe filling', estPrice: 400, actualPrice: 400, store: 'gyomu', checked: false, tags: ['crepes'] },
        { id: 'g-crepe-topping', name: 'Crepe Fillings (Bananas & Choco Syrup)', desc: 'Fresh bananas + chocolate squeeze bottle', estPrice: 500, actualPrice: 500, store: 'gyomu', checked: false, tags: ['crepes'] },
        { id: 'g-crepe-milk', name: 'Milk & Butter', desc: 'Liquid ingredients for crepe batter', estPrice: 400, actualPrice: 400, store: 'gyomu', checked: false, tags: ['crepes'] },

        // A-Price Items
        { id: 'a-oct', name: 'Frozen Octopus Cuts (Takobutsu)', desc: 'Large commercial pack for Takoyaki', estPrice: 1800, actualPrice: 1800, store: 'aprice', checked: false, tags: ['takoyaki'] },
        { id: 'a-pork', name: 'Pork Belly Slices (Frozen)', desc: 'For Yakisoba & Hashimaki griddle cooking', estPrice: 1500, actualPrice: 1500, store: 'aprice', checked: false, tags: ['hashimaki', 'yakisoba'] },
        { id: 'a-tsauce', name: 'Premium Yakitori Sauce (Tare)', desc: 'Commercial grade yakitori brush sauce', estPrice: 500, actualPrice: 500, store: 'aprice', checked: false, tags: ['yakitori'] },
        { id: 'a-scond', name: 'Somen Condiments', desc: 'Toasted sesame seeds & fresh ginger to grate', estPrice: 400, actualPrice: 400, store: 'aprice', checked: false, tags: ['somen'] },

        // MEGA Donki Items
        { id: 'd-sour', name: 'Suntory Lemon Sour Concentrate', desc: '1.8L bottle/pack for bar mixing', estPrice: 2200, actualPrice: 2200, store: 'donki', checked: false, tags: ['drinks'] },
        { id: 'd-vod', name: 'Vodka ( Wilkinson / Smirnoff )', desc: '1L cheap bottle for Jello shots', estPrice: 1400, actualPrice: 1400, store: 'donki', checked: false, tags: ['jello'] },
        { id: 'd-jello', name: 'Gelatin & Sweet Neon Juices', desc: 'Fanta Melon & Grape for shot colors', estPrice: 800, actualPrice: 800, store: 'donki', checked: false, tags: ['jello'] },
        { id: 'd-syrup', name: 'Kakigori Syrups & Condensed Milk', desc: 'Strawberry/melon syrups + milk squeeze tube', estPrice: 1000, actualPrice: 1000, store: 'donki', checked: false, tags: ['kakigori'] },
        { id: 'd-ice', name: 'Lock Ice Bags', desc: 'Bags of rock ice for Kakigori and drinks', estPrice: 800, actualPrice: 800, store: 'donki', checked: false, tags: ['kakigori', 'drinks'] },
        { id: 'd-disp', name: 'Disposable Plates, Bowls, Cups, Chopsticks', desc: 'Bamboo skewers for cucumbers, chopsticks for Hashimaki rolling', estPrice: 1200, actualPrice: 1200, store: 'donki', checked: false, tags: ['decorations', 'cucumber', 'hashimaki', 'yakitori'] },
        { id: 'd-cups', name: 'Small Plastic Portion Jello Cups', desc: 'Shot cups with lids to set in fridge', estPrice: 500, actualPrice: 500, store: 'donki', checked: false, tags: ['jello'] },
        { id: 'd-dec', name: 'Matsuri Paper Lanterns & Lights', desc: 'Festive red/white lanterns & string lighting', estPrice: 3000, actualPrice: 3000, store: 'donki', checked: false, tags: ['decorations'] }
    ]
};

// DOM Elements
const elements = {
    guestInput: document.getElementById('guest-count-input'),
    btnGuestDec: document.getElementById('btn-guest-dec'),
    btnGuestInc: document.getElementById('btn-guest-inc'),
    budgetTotal: document.getElementById('budget-total'),
    budgetSpent: document.getElementById('budget-spent'),
    budgetRemaining: document.getElementById('budget-remaining'),
    budgetProgressBar: document.getElementById('budget-progress-bar'),
    budgetStatusMsg: document.getElementById('budget-status-msg'),
    countdownVal: document.getElementById('countdown-val'),
    tabBtnGyomu: document.getElementById('tab-btn-gyomu'),
    tabBtnAprice: document.getElementById('tab-btn-aprice'),
    tabBtnDonki: document.getElementById('tab-btn-donki'),
    tabBtnOther: document.getElementById('tab-btn-other'),
    listGyomu: document.getElementById('gyomu-items'),
    listAprice: document.getElementById('aprice-items'),
    listDonki: document.getElementById('donki-items'),
    listOther: document.getElementById('other-items'),
    lanternsBg: document.getElementById('lanterns'),
    fireworksBg: document.getElementById('fireworks'),
    btnToggleLanterns: document.getElementById('btn-toggle-lanterns'),
    btnToggleAddForm: document.getElementById('btn-toggle-add-form'),
    addItemForm: document.getElementById('add-item-form'),
    newItemName: document.getElementById('new-item-name'),
    newItemDesc: document.getElementById('new-item-desc'),
    newItemPrice: document.getElementById('new-item-price'),
    newItemStore: document.getElementById('new-item-store'),
    dishFiltersContainer: document.getElementById('dish-filters-container')
};

// Initialize Application
function init() {
    loadState();
    setupEventListeners();
    renderShoppingLists();
    filterRecipes();
    updateBudgetCalculations();
    renderCostumes();
    startCountdown();
    generateLanterns();
    setupFireworksInterval();
}

// Event Listeners setup
function setupEventListeners() {
    // Guest stepper events
    elements.btnGuestDec.addEventListener('click', () => {
        let val = parseInt(elements.guestInput.value, 10);
        if (val > 0) {
            elements.guestInput.value = val - 1;
            state.guestCount = val - 1;
            updateBudgetCalculations();
            saveState();
        }
    });

    elements.btnGuestInc.addEventListener('click', () => {
        let val = parseInt(elements.guestInput.value, 10);
        elements.guestInput.value = val + 1;
        state.guestCount = val + 1;
        updateBudgetCalculations();
        saveState();
    });

    elements.guestInput.addEventListener('change', (e) => {
        let val = parseInt(e.target.value, 10);
        if (isNaN(val) || val < 0) {
            val = 0;
            e.target.value = 0;
        }
        state.guestCount = val;
        updateBudgetCalculations();
        saveState();
    });

    // Store Tab toggling
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const store = e.target.dataset.store;
            document.querySelectorAll('.store-list-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            document.getElementById(`list-${store}`).classList.add('active');
        });
    });

    // Toggle Floating Lanterns
    elements.btnToggleLanterns.addEventListener('click', () => {
        state.lanternsActive = !state.lanternsActive;
        if (state.lanternsActive) {
            elements.btnToggleLanterns.classList.remove('inactive');
            generateLanterns();
        } else {
            elements.btnToggleLanterns.classList.add('inactive');
            elements.lanternsBg.innerHTML = '';
        }
        saveState();
    });

    // Toggle Add Item Form
    elements.btnToggleAddForm.addEventListener('click', () => {
        elements.addItemForm.classList.toggle('hidden');
        if (elements.addItemForm.classList.contains('hidden')) {
            elements.btnToggleAddForm.textContent = '➕ Add Custom Item';
        } else {
            elements.btnToggleAddForm.textContent = '➖ Hide Add Form';
        }
    });

    // Add Custom Item Form Submit
    elements.addItemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = elements.newItemName.value.trim();
        const desc = elements.newItemDesc.value.trim();
        const price = parseInt(elements.newItemPrice.value, 10);
        const store = elements.newItemStore.value;

        if (!name || isNaN(price)) return;

        const newItem = {
            id: `custom-${Date.now()}`,
            name: name,
            desc: desc || 'Custom Item',
            estPrice: price,
            actualPrice: price,
            store: store,
            checked: false,
            tags: state.activeDishFilter !== 'all' ? [state.activeDishFilter] : ['other']
        };

        state.shoppingItems.push(newItem);
        
        // Auto-switch to the tab of the store where the item was added
        const activeTab = document.querySelector(`.tab-btn[data-store="${store}"]`);
        if (activeTab) {
            activeTab.click();
        }

        renderShoppingLists();
        updateBudgetCalculations();
        saveState();

        // Reset and hide form
        elements.addItemForm.reset();
        elements.addItemForm.classList.add('hidden');
        elements.btnToggleAddForm.textContent = '➕ Add Custom Item';
    });

    // Dish Filters toggling
    const filterBtns = elements.dishFiltersContainer.querySelectorAll('.dish-filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            state.activeDishFilter = e.target.dataset.dish;
            renderShoppingLists();
            filterRecipes();
            saveState();
        });
    });

    // Toggle Cost Breakdown Panel
    const btnToggleBreakdown = document.getElementById('btn-toggle-breakdown');
    const breakdownPanel = document.getElementById('cost-breakdown-panel');
    if (btnToggleBreakdown && breakdownPanel) {
        btnToggleBreakdown.addEventListener('click', () => {
            breakdownPanel.classList.toggle('hidden');
            const chevron = btnToggleBreakdown.querySelector('.chevron');
            if (breakdownPanel.classList.contains('hidden')) {
                chevron.textContent = '▼';
            } else {
                chevron.textContent = '▲';
            }
        });
    }

    // Costume Registration Form Submission
    const costumeForm = document.getElementById('costume-reg-form');
    if (costumeForm) {
        costumeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const guestName = document.getElementById('costume-guest-name').value.trim();
            const costumeDesc = document.getElementById('costume-desc').value.trim();
            if (!guestName || !costumeDesc) return;

            const newCostume = {
                id: `costume-${Date.now()}`,
                guestName: guestName,
                costumeName: costumeDesc,
                votes: 0
            };

            state.guestCostumes.push(newCostume);
            renderCostumes();
            saveState();
            costumeForm.reset();
            
            // Celebration bursts!
            createFireworkBurst();
            setTimeout(createFireworkBurst, 200);
        });
    }
}

// Update Budget Calculations
function updateBudgetCalculations() {
    const totalBudget = state.baseBudget + (state.guestCount * state.perGuestContribution);
    
    // Calculate total spent based on checked items
    let spent = 0;
    state.shoppingItems.forEach(item => {
        if (item.checked) {
            spent += item.actualPrice;
        }
    });

    const remaining = totalBudget - spent;
    const progressPercent = Math.min((spent / totalBudget) * 100, 100);

    // Update readouts
    elements.budgetTotal.textContent = `${totalBudget.toLocaleString()} JPY`;
    elements.budgetSpent.textContent = `${spent.toLocaleString()} JPY`;
    elements.budgetRemaining.textContent = `${remaining.toLocaleString()} JPY`;
    
    // Apply styling to Remaining budget depending on status
    if (remaining < 0) {
        elements.budgetRemaining.className = "readout-value negative";
        elements.budgetStatusMsg.innerHTML = "⚠️ You have exceeded the budget! Review items or actual prices.";
        elements.budgetStatusMsg.style.color = "#d32f2f";
        elements.budgetProgressBar.style.background = "#d32f2f";
    } else if (remaining < 5000) {
        elements.budgetRemaining.className = "readout-value positive";
        elements.budgetRemaining.style.color = "#ffb300";
        elements.budgetStatusMsg.innerHTML = "💡 Getting close! Remaining surplus is under 5,000 JPY.";
        elements.budgetStatusMsg.style.color = "#ffb300";
        elements.budgetProgressBar.style.background = "linear-gradient(90deg, #4caf50 0%, #ffb300 100%)";
    } else {
        elements.budgetRemaining.className = "readout-value positive";
        elements.budgetRemaining.style.color = "#4caf50";
        elements.budgetStatusMsg.innerHTML = `🏮 Surplus remaining: ${remaining.toLocaleString()} JPY (great for extra drinks or meat upgrades!)`;
        elements.budgetStatusMsg.style.color = "#4caf50";
        elements.budgetProgressBar.style.background = "linear-gradient(90deg, #4caf50 0%, #ffb300 100%)";
    }

    elements.budgetProgressBar.style.width = `${progressPercent}%`;
    updateCostBreakdown();
}

// Render Shopping Lists by Store
function renderShoppingLists() {
    // Clear list items first
    elements.listGyomu.innerHTML = '';
    elements.listAprice.innerHTML = '';
    elements.listDonki.innerHTML = '';
    elements.listOther.innerHTML = '';

    let renderedCounts = { gyomu: 0, aprice: 0, donki: 0, other: 0 };

    state.shoppingItems.forEach(item => {
        // Skip item if it doesn't match the active dish filter
        if (state.activeDishFilter !== 'all' && (!item.tags || !item.tags.includes(state.activeDishFilter))) {
            return;
        }

        const itemEl = document.createElement('li');
        itemEl.className = `shopping-item ${item.checked ? 'checked' : ''}`;
        itemEl.id = `item-row-${item.id}`;
        
        itemEl.innerHTML = `
            <input type="checkbox" id="check-${item.id}" class="item-checkbox" ${item.checked ? 'checked' : ''}>
            <div class="item-details">
                <span class="item-name">${item.name}</span>
                <span class="item-desc">${item.desc} (Est: ${item.estPrice.toLocaleString()} JPY)</span>
            </div>
            <div class="item-pricing">
                <div class="price-input-container">
                    <input type="number" id="price-input-${item.id}" class="item-price-input" value="${item.actualPrice}">
                </div>
            </div>
        `;

        // Checkbox event listener
        const checkbox = itemEl.querySelector('.item-checkbox');
        checkbox.addEventListener('change', (e) => {
            item.checked = e.target.checked;
            if (item.checked) {
                itemEl.classList.add('checked');
            } else {
                itemEl.classList.remove('checked');
            }
            updateBudgetCalculations();
            saveState();
        });

        // Price input event listener (updates actualPrice in real-time)
        const priceInput = itemEl.querySelector('.item-price-input');
        priceInput.addEventListener('input', (e) => {
            let price = parseInt(e.target.value, 10);
            if (isNaN(price) || price < 0) {
                price = 0;
            }
            item.actualPrice = price;
            updateBudgetCalculations();
            saveState();
        });

        // Focus out fallback
        priceInput.addEventListener('blur', (e) => {
            if (e.target.value === '') {
                e.target.value = item.estPrice;
                item.actualPrice = item.estPrice;
                updateBudgetCalculations();
                saveState();
            }
        });

        // Append to appropriate list
        if (item.store === 'gyomu') {
            elements.listGyomu.appendChild(itemEl);
            renderedCounts.gyomu++;
        } else if (item.store === 'aprice') {
            elements.listAprice.appendChild(itemEl);
            renderedCounts.aprice++;
        } else if (item.store === 'donki') {
            elements.listDonki.appendChild(itemEl);
            renderedCounts.donki++;
        } else if (item.store === 'other') {
            elements.listOther.appendChild(itemEl);
            renderedCounts.other++;
        }
    });

    // Render empty placeholders if no items match
    Object.keys(renderedCounts).forEach(store => {
        if (renderedCounts[store] === 0) {
            const placeholder = document.createElement('div');
            placeholder.className = 'empty-list-placeholder';
            
            const categoryName = state.activeDishFilter === 'all' 
                ? 'items' 
                : state.activeDishFilter === 'jello'
                    ? 'Jello Shot items'
                    : `${state.activeDishFilter.charAt(0).toUpperCase() + state.activeDishFilter.slice(1)} items`;

            placeholder.textContent = `No ${categoryName} planned at this store.`;
            
            if (store === 'gyomu') elements.listGyomu.appendChild(placeholder);
            else if (store === 'aprice') elements.listAprice.appendChild(placeholder);
            else if (store === 'donki') elements.listDonki.appendChild(placeholder);
            else if (store === 'other') elements.listOther.appendChild(placeholder);
        }
    });
}

// Countdown Timer to May 30, 2026 at 7:00 PM
function startCountdown() {
    // Set target date: May 30, 2026, 19:00:00 JPY time
    const targetDate = new Date('2026-05-30T19:00:00+09:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            elements.countdownVal.innerHTML = "✨ FESTIVAL IN PROGRESS! 🏮";
            elements.countdownVal.style.color = "var(--color-matsuri-gold)";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let countdownStr = '';
        if (days > 0) {
            countdownStr += `${days}d `;
        }
        countdownStr += `${hours}h ${minutes}m ${seconds}s`;
        
        elements.countdownVal.textContent = countdownStr;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Generate animated floating lanterns
function generateLanterns() {
    const numLanterns = 15;
    for (let i = 0; i < numLanterns; i++) {
        createLantern(true);
    }
}

function createLantern(isInitial = false) {
    if (!state.lanternsActive) return;
    const lantern = document.createElement('div');
    lantern.className = 'lantern';
    
    // Randomize positioning and speed
    const startX = Math.random() * 100; // Left offset %
    const scale = 0.5 + Math.random() * 0.8; // scale size
    const duration = 15 + Math.random() * 15; // float duration
    const swayDistance = -80 + Math.random() * 160; // sway px
    const rotation = -30 + Math.random() * 60; // rotation deg
    const delay = isInitial ? Math.random() * -30 : 0; // Negative delay to start immediately at different positions

    lantern.style.left = `${startX}%`;
    lantern.style.transform = `scale(${scale})`;
    lantern.style.animationDuration = `${duration}s`;
    lantern.style.animationDelay = `${delay}s`;
    
    // Pass properties to CSS via variables
    lantern.style.setProperty('--lantern-sway', `${swayDistance}px`);
    lantern.style.setProperty('--lantern-rot', `${rotation}deg`);

    elements.lanternsBg.appendChild(lantern);

    // Recreate lantern once it floats out of screen
    lantern.addEventListener('animationend', () => {
        lantern.remove();
        createLantern(false);
    });
}

// Setup periodic fireworks burst
function setupFireworksInterval() {
    setInterval(() => {
        // Only trigger fireworks occasionally
        if (Math.random() > 0.4) {
            createFireworkBurst();
        }
    }, 4000);
}

function createFireworkBurst() {
    const x = Math.random() * window.innerWidth;
    const y = 100 + Math.random() * 200; // upper screen area
    const colors = ['#fff176', '#e57373', '#64b5f6', '#81c784', '#ba68c8', '#ffb74d'];
    const burstColor = colors[Math.floor(Math.random() * colors.length)];
    const numParticles = 20;

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-sparkle';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.background = burstColor;
        particle.style.boxShadow = `0 0 8px ${burstColor}`;
        
        // Calculate explosion angle and distance
        const angle = (i / numParticles) * 2 * Math.PI;
        const speed = 40 + Math.random() * 80;
        const dx = Math.cos(angle) * speed;
        const dy = Math.sin(angle) * speed;

        particle.style.setProperty('--x', `${dx}px`);
        particle.style.setProperty('--y', `${dy}px`);

        elements.fireworksBg.appendChild(particle);

        // Remove particle after animation ends
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }
}

// LocalStorage Persistence functions
function saveState() {
    localStorage.setItem('dms_matsuri_planner_state', JSON.stringify({
        guestCount: state.guestCount,
        shoppingItems: state.shoppingItems,
        lanternsActive: state.lanternsActive,
        activeDishFilter: state.activeDishFilter,
        guestCostumes: state.guestCostumes
    }));
}

function loadState() {
    const saved = localStorage.getItem('dms_matsuri_planner_state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state.guestCount = parsed.guestCount ?? 7;
            state.shoppingItems = parsed.shoppingItems ?? state.shoppingItems;
            state.lanternsActive = parsed.lanternsActive ?? true;
            state.activeDishFilter = parsed.activeDishFilter ?? 'all';
            state.guestCostumes = parsed.guestCostumes ?? state.guestCostumes;
            
            // Sync UI values
            elements.guestInput.value = state.guestCount;
            if (!state.lanternsActive) {
                elements.btnToggleLanterns.classList.add('inactive');
            }

            // Sync active filter button UI
            const filterBtns = elements.dishFiltersContainer.querySelectorAll('.dish-filter-btn');
            filterBtns.forEach(btn => {
                if (btn.dataset.dish === state.activeDishFilter) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            
            filterRecipes();
            renderCostumes();
        } catch (e) {
            console.error("Failed to load saved state", e);
        }
    }
}

// Filter recipes in Section 3 based on active dish filter
function filterRecipes() {
    const filter = state.activeDishFilter;
    const cards = document.querySelectorAll('.recipe-card');
    cards.forEach(card => {
        if (filter === 'all' || card.id === `recipe-${filter}`) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Render Costume Leaderboard
function renderCostumes() {
    const container = document.getElementById('costume-leaderboard');
    if (!container) return;
    container.innerHTML = '';
    
    // Sort costumes by votes descending
    const sorted = [...state.guestCostumes].sort((a, b) => b.votes - a.votes);
    const maxVotes = sorted.length > 0 ? Math.max(...sorted.map(c => c.votes)) : 0;
    
    sorted.forEach((c, index) => {
        const row = document.createElement('div');
        const isLeading = maxVotes > 0 && c.votes === maxVotes;
        row.className = `leaderboard-row ${isLeading ? 'leading' : ''}`;
        
        // Calculate percentage of votes for the bar
        const totalVotes = state.guestCostumes.reduce((sum, item) => sum + item.votes, 0);
        const percent = totalVotes > 0 ? (c.votes / totalVotes) * 100 : 0;
        
        row.innerHTML = `
            <div class="leaderboard-rank">${index + 1}</div>
            <div class="leaderboard-info">
                <div class="leaderboard-guest">${c.guestName}</div>
                <div class="leaderboard-costume">${c.costumeName}</div>
                <div class="leaderboard-bar-container">
                    <div class="leaderboard-bar-fill" style="width: ${percent}%; background: ${isLeading ? 'var(--color-matsuri-gold)' : 'var(--color-text-muted)'}"></div>
                </div>
            </div>
            <div class="leaderboard-votes-control">
                <span class="vote-count">${c.votes} ${c.votes === 1 ? 'vote' : 'votes'}</span>
                <button type="button" class="vote-btn" data-id="${c.id}">🗳️ Vote</button>
            </div>
        `;
        
        row.querySelector('.vote-btn').addEventListener('click', () => {
            c.votes++;
            renderCostumes();
            saveState();
            
            // Firework burst for fun!
            createFireworkBurst();
        });
        
        container.appendChild(row);
    });
}

// Calculate and Render Cost Breakdown by Category
function updateCostBreakdown() {
    const categories = {
        yakitori: { name: '🍢 Yakitori', color: '#ff7043' },
        takoyaki: { name: '🐙 Takoyaki', color: '#ec407a' },
        hashimaki: { name: '🥢 Hashimaki', color: '#ab47bc' },
        yakisoba: { name: '🍝 Yakisoba', color: '#7e57c2' },
        karaage: { name: '🍗 Karaage', color: '#ffa726' },
        somen: { name: '🌊 Somen', color: '#29b6f6' },
        kakigori: { name: '🍧 Kakigori', color: '#26a69a' },
        jello: { name: '🧪 Jello Shots', color: '#66bb6a' },
        crepes: { name: '🥞 Crepes', color: '#ffca28' },
        fries: { name: '🍟 French Fries', color: '#d4e157' },
        cucumber: { name: '🥒 Cucumbers', color: '#9ccc65' },
        drinks: { name: '🍹 Drinks', color: '#26c6da' },
        decorations: { name: '🏮 Decor', color: '#ef5350' },
        other: { name: '📦 Other', color: '#8d6e63' }
    };

    const breakdown = {};
    Object.keys(categories).forEach(key => {
        breakdown[key] = { spent: 0, planned: 0 };
    });

    state.shoppingItems.forEach(item => {
        const itemTags = item.tags && item.tags.length > 0 ? item.tags : ['other'];
        const numTags = itemTags.length;
        
        itemTags.forEach(tag => {
            const tagKey = categories[tag] ? tag : 'other';
            const propPlanned = item.actualPrice / numTags;
            breakdown[tagKey].planned += propPlanned;
            
            if (item.checked) {
                const propSpent = item.actualPrice / numTags;
                breakdown[tagKey].spent += propSpent;
            }
        });
    });

    const container = document.getElementById('breakdown-list-container');
    if (!container) return;
    container.innerHTML = '';

    const sortedTags = Object.keys(categories).sort((a, b) => breakdown[b].planned - breakdown[a].planned);
    const maxPlanned = Math.max(...Object.keys(categories).map(k => breakdown[k].planned), 1);

    sortedTags.forEach(tag => {
        const data = breakdown[tag];
        const info = categories[tag];
        if (data.planned === 0 && data.spent === 0) return;

        const row = document.createElement('div');
        row.className = 'breakdown-row';
        
        const spentPercent = (data.spent / maxPlanned) * 100;
        const plannedPercent = ((data.planned - data.spent) / maxPlanned) * 100;

        row.innerHTML = `
            <span class="breakdown-label">${info.name}</span>
            <div class="breakdown-bar-bg">
                <div class="breakdown-bar-fill spent" style="width: ${spentPercent}%; background: ${info.color}"></div>
                <div class="breakdown-bar-fill planned" style="width: ${plannedPercent}%; background: ${info.color}80"></div>
            </div>
            <div class="breakdown-price">
                <span class="spent-text">${Math.round(data.spent).toLocaleString()}</span>
                <span class="sep">/</span>
                <span class="planned-text">${Math.round(data.planned).toLocaleString()} 円</span>
            </div>
        `;
        container.appendChild(row);
    });
}

// Start Application on load
window.addEventListener('DOMContentLoaded', init);
