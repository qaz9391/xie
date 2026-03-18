-- 1. Create Grandma's Pasta Menu Table
CREATE TABLE IF NOT EXISTS public.juna_menu (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price INTEGER NOT NULL,
    image_url VARCHAR(255),
    category VARCHAR(50),
    type VARCHAR(20) DEFAULT 'single' CHECK (type IN ('single', 'combo')),
    is_available BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Add sample menu items for Grandma's Pasta
INSERT INTO public.juna_menu (name, description, price, category, type, image_url) VALUES
('焗烤奶油培根義大利麵', '濃郁奶油白醬搭配香酥烤起司，經典首選', 120, '義大利麵', 'single', 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'),
('瑪格麗特披薩', '新鮮番茄、羅勒與莫札瑞拉起司', 150, '手工披薩', 'single', 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002'),
('肉醬起司焗烤麵', '秘製番茄肉醬鋪滿牽絲起司', 130, '義大利麵', 'single', 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'),
('蒜香白酒蛤蜊麵', '清炒蒜香結合新鮮蛤蜊的海洋風味', 140, '義大利麵', 'single', 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8'),
('焗奶奶超值單人套餐', '主餐任選1 + 濃湯 + 飲料', 180, '組合餐', 'combo', 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85'),
('雙人分享披薩餐', '披薩任選1 + 炸物拼盤 + 飲料2杯', 320, '組合餐', 'combo', 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3');

-- 3. Update the `stores` table to ensure "焗奶奶義式料理" points to the new page
UPDATE public.stores
SET link_url = 'juna_restaurant.html'
WHERE name = '焗奶奶義式料理';

-- Note: If '焗奶奶義式料理' does not exist in the stores table, you can insert it:
-- INSERT INTO public.stores (name, description, link_url) VALUES ('焗奶奶義式料理', '正宗焗烤與義式麵食', 'juna_restaurant.html');
