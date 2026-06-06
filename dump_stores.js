const url = 'https://xodnrtfnzblgxupfbmka.supabase.co/rest/v1';
const headers = {
    'apikey': 'sb_publishable_cgLu4SOQhHgYzJmbgRbkYg_fE3_cRz9',
    'Authorization': 'Bearer sb_publishable_cgLu4SOQhHgYzJmbgRbkYg_fE3_cRz9'
};

async function run() {
    const r1 = await fetch(`${url}/store_categories?select=*`, { headers });
    const cats = await r1.json();
    console.log('Categories:', cats);
    
    const r2 = await fetch(`${url}/stores?select=*`, { headers });
    const stores = await r2.json();
    console.log('Stores:', stores.map(s => ({ id: s.id, name: s.name, cat: s.category_id })));
}
run();
