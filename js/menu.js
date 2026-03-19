// ===================================
// Menu.js - 通用店家菜單頁面
// ===================================

console.log('[Menu] Script loaded');

// Initialize Supabase (使用不與全局衝突的變數名)
let supabaseClient;

// Get Store ID from URL
const urlParams = new URLSearchParams(window.location.search);
const STORE_ID = urlParams.get('store_id');

// 使用立即執行的初始化函數，避免 DOMContentLoaded 競態條件
function init() {
    console.log('[Menu] Initializing...');
    const errorContainer = document.getElementById('menuContainer');

    // 1. Check Dependencies
    if (!window.supabase || typeof window.supabase.createClient !== 'function') {
        console.error('[Menu] Supabase SDK not loaded');
        if (errorContainer) errorContainer.innerHTML = '<p style="text-align:center; color:red;">系統錯誤：無法載入核心元件 (Supabase SDK)</p>';
        return;
    }

    if (!window.CONFIG || !window.CONFIG.SUPABASE_URL || !window.CONFIG.SUPABASE_KEY) {
        console.error('[Menu] CONFIG not loaded');
        if (errorContainer) errorContainer.innerHTML = '<p style="text-align:center; color:red;">系統錯誤：設定檔未載入</p>';
        return;
    }

    // 2. Initialize Supabase Client
    try {
        const { SUPABASE_URL, SUPABASE_KEY } = window.CONFIG;
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        console.log('[Menu] Supabase client initialized successfully');
    } catch (e) {
        console.error('[Menu] createClient failed:', e);
        if (errorContainer) errorContainer.innerHTML = `<p style="text-align:center; color:red;">初始化失敗: ${e.message}</p>`;
        return;
    }

    // 3. Check store_id
    if (!STORE_ID) {
        console.error('[Menu] No store_id in URL');
        alert('無效的店家連結');
        window.location.href = 'cafeteria.html';
        return;
    }

    console.log('[Menu] Store ID:', STORE_ID);

    // 4. Fetch data
    fetchStoreInfo();
    fetchMenu();
}

// 確保 DOM 準備好後再初始化（處理競態條件）
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM 已經準備好了，直接執行
    init();
}

async function fetchStoreInfo() {
    try {
        console.log('[Menu] Fetching store info for:', STORE_ID);
        const { data, error } = await supabaseClient
            .from('店家')
            .select('*')
            .eq('id', STORE_ID)
            .single();

        if (error) {
            console.error('[Menu] Store info fetch error:', error);
            return;
        }

        if (data) {
            console.log('[Menu] Store info loaded:', data.name);
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
        console.error('[Menu] Exception fetching store info:', e);
    }
}

async function fetchMenu() {
    const container = document.getElementById('menuContainer');

    try {
        console.log('[Menu] Fetching menu items for store:', STORE_ID);

        const { data: items, error } = await supabaseClient
            .from('通用備用表1')
            .select('*')
            .eq('store_id', STORE_ID)
            .eq('is_available', true);

        if (error) {
            console.error('[Menu] Menu fetch error:', error);
            container.innerHTML = `<p style="text-align:center; color:red;">載入失敗：${error.message}</p>`;
            return;
        }

        console.log('[Menu] Menu items loaded:', items ? items.length : 0);

        if (!items || items.length === 0) {
            container.innerHTML = '<p style="text-align:center; color:#666;">目前沒有餐點資料。</p>';
            return;
        }

        renderMenu(items);

    } catch (e) {
        console.error('[Menu] Exception fetching menu:', e);
        container.innerHTML = '<p style="text-align:center; color:red;">載入失敗：' + e.message + '</p>';
    }
}

function renderMenu(items) {
    const container = document.getElementById('menuContainer');
    container.innerHTML = '';

    const grid = document.createElement('div');
    grid.className = 'menu-items-grid';

    items.forEach(item => {
        const imgUrl = item.image_url || 'https://placehold.co/300x200?text=No+Image';

        const card = document.createElement('div');
        card.className = 'menu-item';
        card.innerHTML = `
            <img src="${escapeHtml(imgUrl)}" alt="${escapeHtml(item.name)}">
            <div class="menu-item-details">
                <div class="menu-item-name">${escapeHtml(item.name)}</div>
                <div class="menu-item-desc">${escapeHtml(item.description || '')}</div>
            </div>
            <div class="menu-item-price">$${item.price}</div>
        `;

        grid.appendChild(card);
    });

    container.appendChild(grid);
    console.log('[Menu] Menu rendered,', items.length, 'items');
}

// XSS 防護
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
