// Initialize Supabase
let supabase;

// Get Store ID from URL
const urlParams = new URLSearchParams(window.location.search);
const STORE_ID = urlParams.get('store_id');

document.addEventListener('DOMContentLoaded', () => {
    const errorContainer = document.getElementById('menuContainer');

    // 1. Check Dependencies
    if (!window.supabase || !window.CONFIG) {
        console.error('Dependencies missing');
        if (errorContainer) errorContainer.innerHTML = '<p style="text-align:center; color:red;">系統錯誤：無法載入核心元件 (Supabase/Config)</p>';
        return;
    }

    // 2. Initialize
    try {
        const { SUPABASE_URL, SUPABASE_KEY } = window.CONFIG;
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    } catch (e) {
        if (errorContainer) errorContainer.innerHTML = `<p style="text-align:center; color:red;">初始化失敗: ${e.message}</p>`;
        return;
    }

    if (!STORE_ID) {
        alert('無效的店家連結');
        window.location.href = 'cafeteria.html';
        return;
    }

    fetchStoreInfo();
    fetchMenu();
});

async function fetchStoreInfo() {
    try {
        const { data, error } = await supabase
            .from('stores')
            .select('*')
            .eq('id', STORE_ID)
            .single();

        if (error) throw error;
        if (data) {
            document.getElementById('storeName').textContent = data.name;
            document.title = data.name + ' - 菜單';
            document.getElementById('storeDesc').textContent = data.description || '';

            if (data.image_url) {
                const img = document.getElementById('storeImage');
                img.src = data.image_url;
                img.style.display = 'block';
            }
        }
    } catch (e) {
        console.error('Error fetching store info:', e);
    }
}

async function fetchMenu() {
    const container = document.getElementById('menuContainer');

    try {
        // Fetch items joined with categories
        // We'll just fetch items and group by category_id manually since we might not need join for simple display
        // Or better: fetch items and categories separately or rely on sorted items
        // Let's keep it simple: fetch items

        const { data: items, error } = await supabase
            .from('menu_items')
            .select('*')
            .eq('store_id', STORE_ID)
            .eq('is_available', true);

        if (error) throw error;

        if (!items || items.length === 0) {
            container.innerHTML = '<p style="text-align:center;">目前沒有餐點。</p>';
            return;
        }

        renderMenu(items);

    } catch (e) {
        console.error('Error fetching menu:', e);
        container.innerHTML = '<p style="text-align:center; color:red;">載入失敗</p>';
    }
}

function renderMenu(items) {
    const container = document.getElementById('menuContainer');
    container.innerHTML = '';

    // Group items? Or just list them.
    // Let's just grid them for now. 

    const grid = document.createElement('div');
    grid.className = 'menu-items-grid';

    items.forEach(item => {
        const imgUrl = item.image_url || 'https://placehold.co/300x200?text=No+Image';

        const card = document.createElement('div');
        card.className = 'menu-item';
        card.innerHTML = `
            <img src="${imgUrl}" alt="${item.name}">
            <div class="menu-item-details">
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-desc">${item.description || ''}</div>
                
            </div>
            <div class="menu-item-price">$${item.price}</div>
        `;
        // Removed Add to Cart for now as requested complexity is low, focus on display first.

        grid.appendChild(card);
    });

    container.appendChild(grid);
}
