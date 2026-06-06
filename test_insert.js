const url = 'https://xodnrtfnzblgxupfbmka.supabase.co/rest/v1';
const headers = {
    'apikey': 'sb_publishable_cgLu4SOQhHgYzJmbgRbkYg_fE3_cRz9',
    'Authorization': 'Bearer sb_publishable_cgLu4SOQhHgYzJmbgRbkYg_fE3_cRz9',
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal'
};

async function test() {
    const res = await fetch(`${url}/store_categories`, {
        method: 'POST',
        headers,
        body: JSON.stringify([{ name: '測試', sort_order: 99 }])
    });
    console.log('Status:', res.status);
    if (!res.ok) console.log(await res.text());
}
test();
