-- 刪除重複的雪杯工坊記錄，只保留一筆
-- 請在 Supabase SQL Editor 執行此腳本

-- 使用 ctid 刪除重複記錄（保留第一筆）
DELETE FROM stores
WHERE name = '雪杯工坊'
AND ctid NOT IN (
    SELECT MIN(ctid)
    FROM stores
    WHERE name = '雪杯工坊'
);

-- 更新保留的記錄的連結
UPDATE stores 
SET link_url = 'xuebei_restaurant.html'
WHERE name = '雪杯工坊';

-- 確認結果（應該只剩一筆）
SELECT id, name, description, link_url FROM stores WHERE name = '雪杯工坊';
