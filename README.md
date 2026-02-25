# MUST Campus VR Tour & Cafeteria System
(明新科技大學 校園導覽與線上點餐系統)

這是一個結合 **3D 虛擬校園導覽** 與 **模擬學生餐廳點餐** 的全端網頁專案。
前端使用 HTML5/CSS3/JavaScript，後端與資料庫採用 **Supabase** (PostgreSQL-based)。

## 🔗 快速連結 (Quick Links)
請確認您的 Apache/XAMPP 伺服器已啟動。

- **🏠 前台首頁 (導覽+點餐)**:  
  [http://localhost/myvr/home.html](http://localhost/myvr/home.html)

- **📋 後台管理 (訂單查看)**:  
  [http://localhost/myvr/orders.html](http://localhost/myvr/orders.html)

- **⚡ Supabase 後台 (資料庫管理)**:  
  [https://supabase.com/dashboard/project/xodnrtfnzblgxupfbmka](https://supabase.com/dashboard/project/xodnrtfnzblgxupfbmka)

## ✨ 功能特色 (Features)

### 1. 🏫 虛擬校園導覽 (VR Tour)
- **360° 全景導覽**：整合 Pano2VR 輸出的全景地圖。
- **地點搜尋**：支援依照大樓、處室、教師名稱進行搜尋。
- **即時資訊**：串接行事曆、最新公告跑馬燈。

### 2. 🍱 線上點餐模擬 (Cafeteria ordering)
- **Supabase 資料庫串接**：菜單資料與訂單皆儲存於雲端資料庫。
- **動態菜單**：從資料庫即時讀取分類與餐點資訊。
- **購物車系統**：支援新增、數量增減與結帳功能。
- **訂單送出 (Create)**：將顧客訂單寫入資料庫 (`orders` & `order_items` tables)。

### 3. 📊 後台訂單管理 (Admin Dashboard)
- **即時看板 (Read)**：讀取資料庫中的訂單列表。
- **狀態管理**：查看訂單明細、統計今日營收。
- **訂單詳情**：查詢每一筆訂單的詳細餐點內容。

## 🛠️ 技術架構 (Tech Stack)

- **Frontend**: Standard HTML, CSS (Custom & FontAwesome), Vanilla JavaScript.
- **Backend/Database**: [Supabase](https://supabase.com/) (PostgreSQL + RESTful API).
- **Library**: `supabase-js` (Client SDK).

## 🚀 安裝與設定 (Installation & Setup)

### 1. 環境準備
此專案適合透過 Apache (XAMPP) 或一般的 Static Server 執行。
將所有檔案放置於 Web Root (如 `htdocs/myvr`) 即可。

### 2. Supabase 資料庫設定
1. 至 [Supabase](https://supabase.com/) 建立一個新專案。
2. 進入 **SQL Editor**，複製本專案 `backend/schema.sql` 的內容並執行，以建立資料表。
3. 進入 **Project Settings -> API**，取得以下資訊：
    - `Project URL`
    - `anon public key`

### 3. 專案設定 (Config)
請開啟以下兩個檔案，將 `SUPABASE_URL` 與 `SUPABASE_KEY` 替換為您的實際金鑰：
- 前台邏輯：`js/cafeteria.js`
- 後台邏輯：`js/orders.js`

```javascript
const SUPABASE_URL = '您的 URL';
const SUPABASE_KEY = '您的 anon key';
```

## 📂 檔案結構 (File Structure)

```
myvr/
├── home.html           # 前台首頁 (導覽 + 點餐)
├── orders.html         # 後台管理 (訂單讀取)
├── backend/
│   └── schema.sql      # 資料庫 SQL 建表腳本
├── css/
│   ├── cafeteria.css   # 點餐介面樣式
│   └── orders.css      # 後台介面樣式
├── js/
│   ├── cafeteria.js    # 前台點餐邏輯 (Supabase Create)
│   └── orders.js       # 後台讀取邏輯 (Supabase Read)
├── images/             # 圖片資源
└── output/             # VR 全景輸出檔 (Pano2VR)
```

## 📝 開發團隊
- 校園導覽專題小組 (謝嘉哲、陳亭蓁、陳俊安)
- 2026 明新科技大學
