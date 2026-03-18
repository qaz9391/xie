# 明新科大住宿服務中心網站 — 搬移說明

## 📁 檔案結構
```
dorm/
└── index.html   ← 整個網站（單一檔案，可直接開啟）
```

## 🚀 如何搬移到家用電腦

1. **複製整個 `dorm` 資料夾**到隨身碟或雲端（Google Drive / OneDrive）
2. 貼到家用電腦任意位置
3. 直接用瀏覽器（Chrome / Edge）開啟 `index.html` 即可

> ✅ 不需要安裝任何軟體，不需要伺服器，離線也能瀏覽。

---

## 🗄️ 連接 Supabase（未來）

在 `index.html` 找到 `// 資料來源` 的區塊，依以下步驟替換：

### 1. 在 `<head>` 加入 SDK
```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
```

### 2. 初始化 Supabase
```js
const { createClient } = supabase;
const sb = createClient('YOUR_PROJECT_URL', 'YOUR_ANON_KEY');
```

### 3. 建立資料表 `dorm_rooms`
| 欄位 | 型別 |
|------|------|
| id | int8 PK |
| name | text |
| campus | text |
| gender | text |
| beds | int4 |
| dorm | text |
| size | text |
| bed_size | text |
| bed_type | text |
| price | text |
| status | text |
| emoji | text |
| desc | text |

### 4. 替換 `renderRooms` 資料來源
```js
const { data: rooms } = await sb.from('dorm_rooms').select('*');
dormData.rooms = rooms;
renderRooms(rooms);
```

---

## 🎨 主色調修改

在 `index.html` 開頭的 `:root { }` 修改 CSS 變數即可：
- `--green` 主綠色（預設 `#2d9e6b`）
- `--green-dark` 深綠色
- `--green-light` 淺綠背景
