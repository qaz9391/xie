-- 更新奇奇自助餐的連結設定
-- 請在 Supabase SQL Editor 執行此腳本

-- 步驟1：確保 link_url 欄位存在
ALTER TABLE stores 
ADD COLUMN IF NOT EXISTS link_url TEXT;

-- 步驟2：更新奇奇自助餐的連結
UPDATE stores 
SET link_url = 'qiqi_restaurant.html'
WHERE name = '奇奇自助餐';

-- 步驟3：確認更新成功
SELECT name, description, link_url FROM stores WHERE name = '奇奇自助餐';
