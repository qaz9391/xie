// ==========================================
// Admin Orders Manager - Supabase Read Operation
// ==========================================

const { SUPABASE_URL, SUPABASE_KEY } = window.CONFIG;

let supabase;

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    if (!window.supabase) {
        alert('Supabase client not loaded');
        return;
    }

    // Quick check if configured
    if (SUPABASE_URL.includes('YOUR_SUPABASE_URL')) {
        document.getElementById('orderList').innerHTML = '<tr><td colspan="7" style="text-align:center; color:red;">Please configure Supabase Credentials in js/orders.js</td></tr>';
        return;
    }

    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    await fetchOrders();
});

// Fetch Data
async function fetchOrders() {
    const listEl = document.getElementById('orderList');
    listEl.innerHTML = '<tr><td colspan="7" class="loading-row"><i class="fas fa-spinner fa-spin"></i> 載入中...</td></tr>';

    try {
        // Fetch Orders
        const { data: orders, error } = await supabase
            .from('orders')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        renderStats(orders);
        renderTable(orders);

    } catch (e) {
        console.error("Fetch error", e);
        listEl.innerHTML = `<tr><td colspan="7" style="text-align:center; color:red;">讀取失敗: ${e.message}</td></tr>`;
    }
}

function renderStats(orders) {
    const total = orders.length;
    const pending = orders.filter(o => o.status === 'pending').length;
    const revenue = orders.reduce((sum, o) => sum + (o.total_amount || 0), 0);

    document.getElementById('statTodayCount').innerText = total;
    document.getElementById('statPending').innerText = pending;
    document.getElementById('statRevenue').innerText = `$${revenue}`;
}

function renderTable(orders) {
    const listEl = document.getElementById('orderList');
    if (orders.length === 0) {
        listEl.innerHTML = '<tr><td colspan="7" class="loading-row">目前沒有任何訂單</td></tr>';
        return;
    }

    listEl.innerHTML = '';

    orders.forEach(order => {
        const tr = document.createElement('tr');
        const dateStr = new Date(order.created_at).toLocaleString('zh-TW');
        const statusClass = `status-${order.status}`;
        const statusText = order.status === 'pending' ? '待處理' : (order.status === 'completed' ? '已完成' : '已取消');

        tr.innerHTML = `
            <td>#${order.id.slice(0, 8)}...</td>
            <td>${dateStr}</td>
            <td>${order.customer_name || 'Guest'}</td>
            <td><button class="btn-view" onclick="viewDetails('${order.id}')">查看明細</button></td>
            <td>$${order.total_amount}</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>
                ${order.status === 'pending' ? `<button onclick="updateStatus('${order.id}', 'completed')" style="color:green; border:1px solid green; background:none; padding:2px 5px; cursor:pointer;">完成</button>` : ''}
            </td>
        `;
        listEl.appendChild(tr);
    });
}

// View Details
async function viewDetails(orderId) {
    const modal = document.getElementById('orderModal');

    // Fetch Items for this order
    // We need to join with menu_items to get names
    // Supabase JS allows relational queries if setup, but simple manual join is safer if PKs missing

    const { data: items, error } = await supabase
        .from('order_items')
        .select(`
            quantity,
            unit_price,
            menu_items ( name )
        `)
        .eq('order_id', orderId);

    if (error) {
        alert('無法讀取明細');
        return;
    }

    const modalItems = document.getElementById('modalItems');
    modalItems.innerHTML = '';

    let totalCalc = 0;

    items.forEach(i => {
        const name = i.menu_items ? i.menu_items.name : 'Unknown Item';
        const subtotal = i.quantity * i.unit_price;
        totalCalc += subtotal;

        modalItems.innerHTML += `
            <div class="order-item-row">
                <span>${name} x ${i.quantity}</span>
                <span>$${subtotal}</span>
            </div>
        `;
    });

    document.getElementById('modalTotal').innerText = `Total: $${totalCalc}`;
    document.getElementById('modalMeta').innerText = `訂單 ID: ${orderId}`;

    modal.classList.add('show');
}

function closeModal() {
    document.getElementById('orderModal').classList.remove('show');
}

async function updateStatus(id, status) {
    if (!confirm('確定要更新訂單狀態嗎？')) return;

    const { error } = await supabase
        .from('orders')
        .update({ status: status })
        .eq('id', id);

    if (error) alert('更新失敗');
    else fetchOrders();
}

// Expose checks
window.fetchOrders = fetchOrders;
window.viewDetails = viewDetails;
window.closeModal = closeModal;
window.updateStatus = updateStatus;
