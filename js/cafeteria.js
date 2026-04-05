// ===================================
// 簡化版 Cafeteria.js - 基於診斷頁面的成功邏輯
// ===================================

console.log('[Cafeteria] Script loaded');

// 全局 Supabase 客戶端（供 togglePin 函數使用）
let supabaseClient = null;

// 等待所有資源載入完成
window.addEventListener('DOMContentLoaded', async function () {
    console.log('[Cafeteria] DOM loaded, starting initialization...');

    const shopList = document.getElementById('shopList');
    const commentList = document.getElementById('commentList');

    // 檢查基本依賴
    const supabaseLib = window.supabase;
    if (!supabaseLib || typeof supabaseLib.createClient !== 'function') {
        console.error('[Cafeteria] Supabase library not loaded correctly:', window.supabase);
        shopList.innerHTML = '<div style="grid-column: 1/-1; padding: 20px; text-align: center; color: red; background: #ffe6e6;">錯誤：Supabase SDK 未正確載入，請重新整理頁面</div>';
        return;
    }

    if (!window.CONFIG || !window.CONFIG.SUPABASE_URL || !window.CONFIG.SUPABASE_KEY) {
        console.error('[Cafeteria] CONFIG not loaded:', window.CONFIG);
        shopList.innerHTML = '<div style="grid-column: 1/-1; padding: 20px; text-align: center; color: red; background: #ffe6e6;">錯誤：設定檔未載入</div>';
        return;
    }

    console.log('[Cafeteria] Dependencies OK, initializing Supabase...');

    // 初始化 Supabase（設為全局變量）
    try {
        supabaseClient = supabaseLib.createClient(
            window.CONFIG.SUPABASE_URL,
            window.CONFIG.SUPABASE_KEY
        );
    } catch (initErr) {
        console.error('[Cafeteria] createClient failed:', initErr);
        shopList.innerHTML = `<div style="grid-column: 1/-1; padding: 20px; text-align: center; color: red;">初始化失敗：${initErr.message}</div>`;
        return;
    }

    // 為了向後兼容，也保留局部變量
    const supabase = supabaseClient;

    console.log('[Cafeteria] Supabase initialized');

    // 載入店家
    try {
        console.log('[Cafeteria] Fetching stores...');
        const { data: stores, error } = await supabase
            .from('stores')
            .select('*')
            .order('created_at', { ascending: true });

        if (error) {
            console.error('[Cafeteria] Store fetch error:', error);
            shopList.innerHTML = `<div style="grid-column: 1/-1; padding: 20px; text-align: center; color: red;">載入失敗: ${error.message}</div>`;
            return;
        }

        console.log('[Cafeteria] Stores loaded:', stores);

        if (!stores || stores.length === 0) {
            shopList.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">目前沒有店家資料</p>';
        } else {
            // 渲染店家
            shopList.innerHTML = '';
            stores.forEach(store => {
                const rawUrl = store.image_url || '';
                // 如果是相對路徑（不以 http/https 開頭），使用相對路徑顯示本地圖片
                const imgUrl = rawUrl.startsWith('http') ? rawUrl : (rawUrl || 'https://placehold.co/600x400?text=No+Image');
                const card = document.createElement('a');
                card.href = store.link_url || `menu.html?store_id=${store.id}`;
                card.className = 'shop-card';
                card.innerHTML = `
                    <img src="${imgUrl}" alt="${store.name}" class="shop-img">
                    <div class="shop-info">
                        <h2>${store.name}</h2>
                        <p>${store.description || '暫無介紹'}</p>
                    </div>
                `;
                shopList.appendChild(card);
            });
            console.log('[Cafeteria] Stores rendered successfully');
        }

    } catch (e) {
        console.error('[Cafeteria] Exception:', e);
        shopList.innerHTML = `<div style="grid-column: 1/-1; padding: 20px; text-align: center; color: red;">發生錯誤: ${e.message}</div>`;
    }

    // 載入留言
    try {
        console.log('[Cafeteria] Fetching comments...');
        const { data: comments, error } = await supabase
            .from('美食留言')
            .select('*')
            .order('is_pinned', { ascending: false })
            .order('created_at', { ascending: false })
            .limit(50);

        if (error) {
            console.error('[Cafeteria] Comments fetch error:', error);
            commentList.innerHTML = '<div style="text-align: center; color: red;">留言載入失敗</div>';
            return;
        }

        console.log('[Cafeteria] Comments loaded:', comments);

        if (!comments || comments.length === 0) {
            commentList.innerHTML = '<div style="text-align: center; color: #999;">尚未有留言，搶頭香！</div>';
        } else {
            commentList.innerHTML = '';
            comments.forEach(c => {
                const div = document.createElement('div');
                div.className = 'comment-card' + (c.is_pinned ? ' pinned-comment' : '');
                const dateStr = new Date(c.created_at).toLocaleString('zh-TW');
                const user = c.user_name || '訪客';
                const pinIcon = c.is_pinned ? '<i class="fas fa-thumbtack pin-indicator"></i> ' : '';
                const pinButtonText = c.is_pinned ? '取消置頂' : '置頂';
                const pinButtonClass = c.is_pinned ? 'btn-unpin' : 'btn-pin';

                div.innerHTML = `
                    <div class="comment-header">
                        <span class="comment-user">${pinIcon}<i class="fas fa-user-circle"></i> ${escapeHtml(user)}</span>
                        <span class="comment-date">${dateStr}</span>
                    </div>
                    <div class="comment-content">${escapeHtml(c.content)}</div>
                    <div class="comment-actions">
                        <button class="btn-pin-toggle ${pinButtonClass}" data-id="${c.id}" data-pinned="${c.is_pinned}">
                            <i class="fas fa-thumbtack"></i> ${pinButtonText}
                        </button>
                    </div>
                `;
                commentList.appendChild(div);
            });
            console.log('[Cafeteria] Comments rendered successfully');
        }

    } catch (e) {
        console.error('[Cafeteria] Exception loading comments:', e);
    }

    // 設定置頂按鈕事件監聽（只設置一次，使用事件委託）
    setupPinButtons();

    // 設定送出留言按鈕
    const btnSubmit = document.getElementById('btnSubmitComment');
    if (btnSubmit) {
        btnSubmit.addEventListener('click', async function () {
            const userEl = document.getElementById('commentUser');
            const contentEl = document.getElementById('commentContent');

            const userName = userEl.value.trim() || '訪客';
            const content = contentEl.value.trim();

            if (!content) {
                alert('請輸入留言內容！');
                return;
            }

            btnSubmit.disabled = true;
            btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 發送中...';

            try {
                console.log('[Cafeteria] Submitting comment...');
                const { error } = await supabaseClient
                    .from('美食留言')
                    .insert([{ user_name: userName, content: content }]);

                if (error) {
                    console.error('[Cafeteria] Submit error:', error);
                    throw error;
                }

                console.log('[Cafeteria] Comment submitted successfully');
                contentEl.value = '';
                userEl.value = '';

                // 重新載入留言
                const { data: comments } = await supabaseClient
                    .from('美食留言')
                    .select('*')
                    .order('is_pinned', { ascending: false })
                    .order('created_at', { ascending: false })
                    .limit(50);

                if (comments && comments.length > 0) {
                    commentList.innerHTML = '';
                    comments.forEach(c => {
                        const div = document.createElement('div');
                        div.className = 'comment-card' + (c.is_pinned ? ' pinned-comment' : '');
                        const dateStr = new Date(c.created_at).toLocaleString('zh-TW');
                        const user = c.user_name || '訪客';
                        const pinIcon = c.is_pinned ? '<i class="fas fa-thumbtack pin-indicator"></i> ' : '';
                        const pinButtonText = c.is_pinned ? '取消置頂' : '置頂';
                        const pinButtonClass = c.is_pinned ? 'btn-unpin' : 'btn-pin';

                        div.innerHTML = `
                            <div class="comment-header">
                                <span class="comment-user">${pinIcon}<i class="fas fa-user-circle"></i> ${escapeHtml(user)}</span>
                                <span class="comment-date">${dateStr}</span>
                            </div>
                            <div class="comment-content">${escapeHtml(c.content)}</div>
                            <div class="comment-actions">
                                <button class="btn-pin-toggle ${pinButtonClass}" data-id="${c.id}" data-pinned="${c.is_pinned}">
                                    <i class="fas fa-thumbtack"></i> ${pinButtonText}
                                </button>
                            </div>
                        `;
                        commentList.appendChild(div);
                    });
                    console.log('[Cafeteria] Comments refreshed');
                } else {
                    commentList.innerHTML = '<div style="text-align: center; color: #999;">尚未有留言，搶頭香！</div>';
                }

                alert('留言發送成功！');

            } catch (e) {
                console.error('[Cafeteria] Submit exception:', e);
                alert('發送失敗: ' + e.message);
            } finally {
                btnSubmit.disabled = false;
                btnSubmit.innerHTML = '發送留言 <i class="fas fa-paper-plane"></i>';
            }
        });
        console.log('[Cafeteria] Submit button event listener attached');
    } else {
        console.error('[Cafeteria] Submit button not found!');
    }

    console.log('[Cafeteria] Initialization complete');
});

// XSS 防護
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 設定置頂按鈕事件監聽
function setupPinButtons() {
    const commentList = document.getElementById('commentList');
    if (!commentList) {
        console.error('[Cafeteria] Comment list not found for pin buttons');
        return;
    }

    console.log('[Cafeteria] Setting up pin button event delegation');

    // 使用事件委託
    commentList.addEventListener('click', async function (e) {
        console.log('[Cafeteria] Click detected on comment list', e.target);

        const button = e.target.closest('.btn-pin-toggle');
        if (!button) {
            console.log('[Cafeteria] Click not on pin button');
            return;
        }

        console.log('[Cafeteria] Pin button clicked!', button);

        const commentId = button.getAttribute('data-id');
        const isPinned = button.getAttribute('data-pinned') === 'true';

        console.log('[Cafeteria] Comment ID:', commentId, 'Current pinned:', isPinned);

        await togglePin(commentId, !isPinned);
    });

    console.log('[Cafeteria] Pin button event listener attached to commentList');
}

// 切換置頂狀態
async function togglePin(commentId, shouldPin) {
    try {
        console.log(`[Cafeteria] Toggling pin for comment ${commentId} to ${shouldPin}`);

        if (!supabaseClient) {
            console.error('[Cafeteria] Supabase client not initialized');
            alert('系統未初始化，請重新整理頁面');
            return;
        }

        const { error } = await supabaseClient
            .from('美食留言')
            .update({ is_pinned: shouldPin })
            .eq('id', commentId);

        if (error) {
            console.error('[Cafeteria] Pin toggle error:', error);
            alert('置頂操作失敗: ' + error.message);
            return;
        }

        console.log('[Cafeteria] Pin toggled successfully, reloading comments...');

        // 重新載入留言列表
        const { data: comments, error: fetchError } = await supabaseClient
            .from('美食留言')
            .select('*')
            .order('is_pinned', { ascending: false })
            .order('created_at', { ascending: false })
            .limit(50);

        if (fetchError) {
            console.error('[Cafeteria] Error reloading comments after pin:', fetchError);
            alert('重新載入留言失敗，請手動重新整理頁面');
            return;
        }

        console.log('[Cafeteria] Comments reloaded after pin toggle:', comments);

        const commentList = document.getElementById('commentList');
        if (!commentList) {
            console.error('[Cafeteria] Comment list element not found!');
            return;
        }

        if (comments && comments.length > 0) {
            commentList.innerHTML = '';
            comments.forEach(c => {
                const div = document.createElement('div');
                div.className = 'comment-card' + (c.is_pinned ? ' pinned-comment' : '');
                const dateStr = new Date(c.created_at).toLocaleString('zh-TW');
                const user = c.user_name || '訪客';
                const pinIcon = c.is_pinned ? '<i class="fas fa-thumbtack pin-indicator"></i> ' : '';
                const pinButtonText = c.is_pinned ? '取消置頂' : '置頂';
                const pinButtonClass = c.is_pinned ? 'btn-unpin' : 'btn-pin';

                div.innerHTML = `
                    <div class="comment-header">
                        <span class="comment-user">${pinIcon}<i class="fas fa-user-circle"></i> ${escapeHtml(user)}</span>
                        <span class="comment-date">${dateStr}</span>
                    </div>
                    <div class="comment-content">${escapeHtml(c.content)}</div>
                    <div class="comment-actions">
                        <button class="btn-pin-toggle ${pinButtonClass}" data-id="${c.id}" data-pinned="${c.is_pinned}">
                            <i class="fas fa-thumbtack"></i> ${pinButtonText}
                        </button>
                    </div>
                `;
                commentList.appendChild(div);
            });
            console.log('[Cafeteria] Comments re-rendered after pin toggle, total:', comments.length);
        } else {
            commentList.innerHTML = '<div style="text-align: center; color: #999;">尚未有留言</div>';
            console.log('[Cafeteria] No comments found after reload');
        }
    } catch (e) {
        console.error('[Cafeteria] Exception in togglePin:', e);
        alert('置頂操作發生錯誤: ' + e.message);
    }
}
