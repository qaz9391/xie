-- 0. 啟用 UUID 與建立基礎表格 (如果尚未建立)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS public.categories (
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    sort_order int default 0
);

CREATE TABLE IF NOT EXISTS public.menu_items (
    id uuid default uuid_generate_v4() primary key,
    store_id uuid references public.stores(id),
    name text not null,
    description text,
    price decimal(10,2) not null,
    category_id uuid references public.categories(id),
    image_url text,
    is_available boolean default true,
    created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 1. 建立餐廳分類表 (Store Categories)
CREATE TABLE IF NOT EXISTS public.store_categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    sort_order INT DEFAULT 0
);

-- 插入預設餐廳分類
INSERT INTO public.store_categories (name, sort_order) 
VALUES 
('早餐', 1),
('中餐', 2),
('早午餐', 3),
('晚餐', 4),
('點心/飲料', 5)
ON CONFLICT (name) DO NOTHING;

-- 2. 修改 stores 表，加上 category_id
ALTER TABLE public.stores 
ADD COLUMN IF NOT EXISTS category_id UUID REFERENCES public.store_categories(id);

-- 試著將現有餐廳分配分類 (這邊預設為：雪杯=早午餐，奇奇=中餐，焗奶奶=中餐)
UPDATE public.stores SET category_id = (SELECT id FROM public.store_categories WHERE name = '早午餐') WHERE name LIKE '%雪杯%';
UPDATE public.stores SET category_id = (SELECT id FROM public.store_categories WHERE name = '中餐') WHERE name LIKE '%奇奇%';
UPDATE public.stores SET category_id = (SELECT id FROM public.store_categories WHERE name = '中餐') WHERE name LIKE '%焗奶奶%';

-- 3. 修改 categories 表 (菜單分類)
-- 加上 store_id (因為各家餐廳分類不同) 以及 type (單點/套餐)
ALTER TABLE public.categories 
ADD COLUMN IF NOT EXISTS store_id UUID REFERENCES public.stores(id),
ADD COLUMN IF NOT EXISTS type TEXT DEFAULT 'single' CHECK (type IN ('single', 'combo'));

-- 4. 修改 menu_items 表 (為了相容舊資料結構，加上 type)
ALTER TABLE public.menu_items
ADD COLUMN IF NOT EXISTS type TEXT DEFAULT 'single' CHECK (type IN ('single', 'combo'));

-- 5. 資料轉移腳本 (將 xuebei_menu 轉入標準關聯表)
DO $$
DECLARE
    v_store_id UUID;
    rec RECORD;
    v_category_id UUID;
BEGIN
    -- 取得雪杯工坊的 ID
    SELECT id INTO v_store_id FROM public.stores WHERE name = '雪杯工坊' LIMIT 1;
    
    IF v_store_id IS NOT NULL THEN
        -- 刪除該店舊有的關聯資料，避免重複執行時資料無限增加
        DELETE FROM public.menu_items WHERE store_id = v_store_id;
        DELETE FROM public.categories WHERE store_id = v_store_id;
        
        -- 從 xuebei_menu 抓出所有不重複的 (category, type) 來建立 categories
        FOR rec IN (SELECT DISTINCT category, type FROM public.xuebei_menu WHERE category IS NOT NULL)
        LOOP
            INSERT INTO public.categories (store_id, name, type) 
            VALUES (v_store_id, rec.category, rec.type)
            RETURNING id INTO v_category_id;
            
            -- 將 xuebei_menu 裡面屬於這個分類的餐點，寫入 menu_items
            INSERT INTO public.menu_items (store_id, name, description, price, category_id, image_url, is_available, type)
            SELECT v_store_id, m.name, m.description, m.price, v_category_id, m.image_url, m.is_available, m.type
            FROM public.xuebei_menu m
            WHERE m.category = rec.category AND m.type = rec.type;
        END LOOP;
        
        -- 處理沒有 category 的餐點 (如果有)
        INSERT INTO public.menu_items (store_id, name, description, price, image_url, is_available, type)
        SELECT v_store_id, m.name, m.description, m.price, m.image_url, m.is_available, m.type
        FROM public.xuebei_menu m
        WHERE m.category IS NULL;
    END IF;
END $$;


-- 6. 資料轉移腳本 (將 qiqi_menu 轉入標準關聯表)
DO $$
DECLARE
    v_store_id UUID;
    rec RECORD;
    v_category_id UUID;
BEGIN
    -- 取得奇奇自助餐的 ID
    SELECT id INTO v_store_id FROM public.stores WHERE name LIKE '%奇奇%' LIMIT 1;
    
    IF v_store_id IS NOT NULL THEN
        -- 刪除該店舊有的關聯資料
        DELETE FROM public.menu_items WHERE store_id = v_store_id;
        DELETE FROM public.categories WHERE store_id = v_store_id;
        
        -- 從 qiqi_menu 建立 categories 並轉移資料
        FOR rec IN (SELECT DISTINCT category, type FROM public.qiqi_menu WHERE category IS NOT NULL)
        LOOP
            INSERT INTO public.categories (store_id, name, type) 
            VALUES (v_store_id, rec.category, rec.type)
            RETURNING id INTO v_category_id;
            
            INSERT INTO public.menu_items (store_id, name, description, price, category_id, image_url, is_available, type)
            SELECT v_store_id, m.name, m.description, m.price, v_category_id, m.image_url, m.is_available, m.type
            FROM public.qiqi_menu m
            WHERE m.category = rec.category AND m.type = rec.type;
        END LOOP;
    END IF;
END $$;

-- Enable RLS for new table and ensure policies allow reading
ALTER TABLE public.store_categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read store_categories" ON public.store_categories;
CREATE POLICY "Public read store_categories" ON public.store_categories FOR SELECT USING (true);
