-- 奇奇自助餐菜單資料表
-- 請在 Supabase SQL Editor 執行此腳本

-- 建立資料表
CREATE TABLE IF NOT EXISTS qiqi_menu (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('single', 'combo')),
    category TEXT,
    description TEXT,
    image_url TEXT,
    is_available BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 新增單點菜品
INSERT INTO qiqi_menu (name, price, type, category, description, is_available) VALUES
-- 主菜
('宮保雞丁', 80, 'single', '主菜', '辣度適中，雞肉鮮嫩香酥可口', true),
('糖醋排骨', 90, 'single', '主菜', '酸甜開胃，排骨軟嫩入味', true),
('紅燒獅子頭', 85, 'single', '主菜', '傳統家常菜，肉質鮮美多汁', true),
('麻婆豆腐', 70, 'single', '主菜', '麻辣鮮香，下飯好選擇', true),
('咖哩雞肉', 75, 'single', '主菜', '濃郁咖哩香，微辣順口', true),
('三杯雞', 85, 'single', '主菜', '九層塔香氣十足，台灣經典', true),
('炸雞腿', 95, 'single', '主菜', '外酥內嫩，學生最愛', true),
('蔥爆牛肉', 100, 'single', '主菜', '牛肉嫩滑，蔥香四溢', true),

-- 副菜
('炒青菜', 40, 'single', '副菜', '新鮮時蔬，清爽健康', true),
('滷蛋', 15, 'single', '副菜', '滷得入味，香Q可口', true),
('炒高麗菜', 40, 'single', '副菜', '清脆爽口，營養豐富', true),
('涼拌小黃瓜', 35, 'single', '副菜', '清涼解膩，夏日必備', true),
('炒豆干', 45, 'single', '副菜', '豆干香Q，配料豐富', true),
('滷海帶', 30, 'single', '副菜', '滷汁香濃，口感Q彈', true),

-- 湯品
('玉米濃湯', 25, 'single', '湯品', '香濃可口，料多實在', true),
('紫菜蛋花湯', 20, 'single', '湯品', '清淡鮮美，營養滿分', true),
('酸辣湯', 30, 'single', '湯品', '酸辣開胃，暖心暖胃', true),
('味噌湯', 25, 'single', '湯品', '日式風味，清香回甘', true),

-- 主食
('白飯', 15, 'single', '主食', '香Q米飯，粒粒分明', true),
('滷肉飯', 35, 'single', '主食', '滷汁香濃，經典美味', true),
('炒飯', 50, 'single', '主食', '粒粒分明，香氣撲鼻', true);

-- 新增套餐
INSERT INTO qiqi_menu (name, price, type, category, description, is_available) VALUES
('經典雙主菜套餐', 120, 'combo', '套餐', '2道主菜 + 2道副菜 + 白飯 + 湯品', true),
('豪華三主菜套餐', 150, 'combo', '套餐', '3道主菜 + 3道副菜 + 白飯 + 湯品', true),
('素食健康套餐', 100, 'combo', '套餐', '3道素食副菜 + 豆腐 + 白飯 + 湯品', true),
('學生超值套餐', 90, 'combo', '套餐', '1道主菜 + 2道副菜 + 滷肉飯 + 湯品', true),
('午間特惠套餐', 110, 'combo', '套餐', '2道主菜 + 1道副菜 + 白飯 + 湯品 + 滷蛋', true);

-- 查詢所有菜品
SELECT * FROM qiqi_menu ORDER BY type, category, name;
