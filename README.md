# MUST Campus VR Tour & Cafeteria System
(明新科技大學 校園導覽與線上點餐系統)

這是一個結合 **3D 虛擬校園導覽** 與 **模擬學生餐廳點餐** 的全端網頁專案。
前端使用 HTML5/CSS3/JavaScript，後端與資料庫採用 **Supabase** (PostgreSQL-based)。

## 🔗 快速連結 (Quick Links)
請確認您的 Apache/XAMPP 伺服器已啟動。

- **🏠 前台首頁 (導覽+點餐)**:  
  [http://localhost/myvr/home.html](http://localhost/myvr/home.html)

- **🍜 學生餐廳 (奇奇點餐)**:  
  [http://localhost/myvr/qiqi_restaurant.html](http://localhost/myvr/qiqi_restaurant.html)

- **📋 後台管理 (訂單查看)**:  
  [http://localhost/myvr/orders.html](http://localhost/myvr/orders.html)

- **⚡ Supabase 後台 (資料庫管理)**:  
  [https://supabase.com/dashboard/project/xodnrtfnzblgxupfbmka](https://supabase.com/dashboard/project/xodnrtfnzblgxupfbmka)

## ✨ 功能特色 (Features)

### 1. 🏫 虛擬校園導覽 (VR Tour)
- **360° 全景導覽**：整合 Pano2VR 輸出的全景地圖
- **動態教師資料庫**：45位教師資料存放於 Supabase，支援即時更新
- **地點搜尋**：支援依照大樓、處室、教師名稱進行搜尋
- **即時資訊**：串接行事曆、最新公告跑馬燈
- **VR 導覽論壇**：使用者可分享體驗、留言討論，支援置頂功能

### 2. 🍱 線上點餐模擬 (Cafeteria Ordering)
- **Supabase 資料庫串接**：菜單資料與訂單皆儲存於雲端資料庫
- **動態菜單**：從資料庫即時讀取分類與餐點資訊
- **購物車系統**：支援新增、數量增減與結帳功能
- **訂單送出 (Create)**：將顧客訂單寫入資料庫 (`orders` & `order_items` tables)
- **統計功能**：顯示餐點統計、營收計算

### 3. 📊 後台訂單管理 (Admin Dashboard)
- **即時看板 (Read)**：讀取資料庫中的訂單列表
- **狀態管理**：查看訂單明細、統計今日營收
- **訂單詳情**：查詢每一筆訂單的詳細餐點內容

## 🛠️ 技術架構 (Tech Stack)

- **Frontend**: HTML5, CSS3 (Custom & FontAwesome), Vanilla JavaScript
- **Backend/Database**: [Supabase](https://supabase.com/) (PostgreSQL + RESTful API)
- **VR Technology**: Pano2VR (360° Panorama)
- **Library**: `supabase-js` (Client SDK v2.x)

## 🚀 安裝與設定 (Installation & Setup)

### 1. 環境準備
此專案適合透過 Apache (XAMPP) 或一般的 Static Server 執行。
將所有檔案放置於 Web Root (如 `htdocs/myvr`) 即可。

### 2. Supabase 資料庫設定
1. 至 [Supabase](https://supabase.com/) 建立一個新專案
2. 進入 **SQL Editor**，依序執行以下 SQL 檔案：
    - `backend/schema.sql` - 基本資料表結構
    - `database/teachers.sql` - 教師資料表與資料
    - `database/qiqi_menu.sql` - 餐廳菜單資料
3. 進入 **Project Settings -> API**，取得以下資訊：
    - `Project URL`
    - `anon public key`

### 3. 專案設定 (Config)
請開啟 `js/config.js`，將 `SUPABASE_URL` 與 `SUPABASE_KEY` 替換為您的實際金鑰：

```javascript
const CONFIG = {
    SUPABASE_URL: '您的 Supabase URL',
    SUPABASE_KEY: '您的 anon key'
};
```

### 4. 啟動專案
1. 確保 Apache/XAMPP 已啟動
2. 訪問 `http://localhost/myvr/home.html`
3. 開始探索虛擬校園！

## 📂 檔案結構 (File Structure)

```
myvr/
├── home.html              # 前台首頁 (導覽 + 搜尋)
├── cafeteria.html         # 學生餐廳入口
├── qiqi_restaurant.html   # 奇奇餐廳點餐系統
├── orders.html            # 後台管理 (訂單讀取)
├── backend/
│   └── schema.sql         # 資料庫 SQL 建表腳本
├── database/
│   ├── teachers.sql       # 教師資料表與資料
│   └── qiqi_menu.sql      # 餐廳菜單資料
├── css/
│   ├── cafeteria.css      # 點餐介面樣式
│   └── orders.css         # 後台介面樣式
├── js/
│   ├── config.js          # Supabase 配置檔
│   ├── cafeteria.js       # 前台點餐邏輯
│   └── orders.js          # 後台讀取邏輯
├── images/                # 圖片資源 (校園照片、教師照片)
└── output/                # VR 全景輸出檔 (Pano2VR)
```

## 📊 資料庫結構 (Database Schema)

### 主要資料表
- `teachers` - 教師資訊 (姓名、系所、聯絡方式、照片)
- `qiqi_menu` - 餐廳菜單 (餐點名稱、價格、分類、圖片)
- `orders` - 訂單主表
- `order_items` - 訂單明細
- `comments` - 學生餐廳留言
- `vr_comments` - VR導覽論壇留言

## 🎯 最新更新 (Recent Updates)

### 2026-02-07
- ✅ 將教師資料從前端硬編碼遷移至 Supabase 資料庫
- ✅ 新增 45 位教師完整資料（工管、資管、行銷、企管系）
- ✅ 實作 Row Level Security (RLS) 政策
- ✅ 調整首頁版面：3D 導覽區塊移至熱門景點上方
- ✅ 修復教師資料描述換行顯示問題
- ✅ 優化 Email 自動轉換為可點擊連結
- ✅ 專案上傳至 GitHub (qaz9391/xie)

## 💡 使用說明 (User Guide)

1. **瀏覽校園**：點擊首頁的 3D 導覽視窗開始虛擬漫遊
2. **搜尋地點/教師**：使用右上角搜尋按鈕，輸入關鍵字查找
3. **查看教師資訊**：搜尋教師後可查看照片、辦公室位置、聯絡方式
4. **模擬點餐**：進入學生餐廳頁面，選擇餐點並送出訂單
5. **查看訂單**：後台管理頁面可查看所有訂單記錄

## 🔐 資料庫安全 (Security)

- 已啟用 Row Level Security (RLS)
- 公開資料（教師、菜單）設定為 SELECT 權限
- 訂單資料設定為 INSERT 權限，防止惡意刪改

## 📝 開發團隊 (Development Team)

**校園導覽專題小組**
- 謝嘉哲 (Hsieh Chia-Che)
- 陳亭蓁 (Chen Ting-Chen)
- 陳俊安 (Chen Chun-An)

**指導單位**：明新科技大學 管理學院  
**開發年份**：2026

## 📄 授權 (License)

© 2026 校園導覽專題小組. All Rights Reserved.

---

**GitHub Repository**: [qaz9391/xie](https://github.com/qaz9391/xie)
