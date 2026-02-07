-- 老師資料表
-- 請在 Supabase SQL Editor 執行此腳本

-- 建立資料表
CREATE TABLE IF NOT EXISTS teachers (
    id BIGINT PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    type_name TEXT NOT NULL,
    department TEXT,
    description TEXT,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 插入工業工程管理系老師資料
INSERT INTO teachers (id, name, type, type_name, department, description, image_url) VALUES
(101, '李得盛 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 805 室\njeff@must.edu.tw\n分機 3234', 'images/李得盛.jpg'),
(102, '林於杏 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 826 室\nbrianlin@must.edu.tw\n分機 3229', 'images/林於杏.jpg'),
(103, '王妙伶 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 833 室\nwml@must.edu.tw\n分機 3228', 'images/王妙伶.jpg'),
(104, '馬心怡 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 834 室\nhsma@must.edu.tw\n分機 3230', 'images/馬心怡.jpg'),
(105, '許耀文 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 813 室\navinhsu@must.edu.tw\n分機 3217', 'images/許耀文.jpg'),
(106, '王彥文 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 821 室\nywwang@must.edu.tw\n分機 3224', 'images/王彥文.jpg'),
(107, '張子筠 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 837 室\ntychang@must.edu.tw\n分機 3215', 'images/張子筠.jpg'),
(108, '鍾宜展 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 823 室\nycchung@must.edu.tw\n分機 3226', 'images/鍾宜展.jpg'),
(109, '楊昌哲 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 816 室\ncjyang@must.edu.tw\n分機 3227', 'images/楊昌哲.jpg'),
(110, '吳庭瑜 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 831 室\ntywu@must.edu.tw\n分機 3218', 'images/吳庭瑜.jpg'),
(111, '江支璋 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 818 室\nsmjoseph@must.edu.tw\n分機 3219', 'images/江支璋.jpg'),
(112, '林伶恩 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 836 室\nlillian@must.edu.tw\n分機 3235', 'images/林伶恩.jpg'),
(113, '許世洲 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 835 室\nfate@must.edu.tw\n分機 3214', 'images/許世洲.jpg'),
(114, '薄有為 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 825 室\npoyuway@must.edu.tw\n分機 3220', 'images/薄有為.jpg'),
(115, '張民昌 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 838 室\ncmc@must.edu.tw\n分機 3236', 'images/張民昌.jpg'),
(116, '馬珊蒂 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 830 室\nmashanti1980@gmail.com\n分機 3213', 'images/馬珊蒂.jpg'),
(117, '彭晟瑋 老師', 'teacher', '教師', '工業工程管理系', '工業工程管理系\n管院 805 室', 'images/彭晟瑋.jpg');

-- 插入資訊管理系老師資料
INSERT INTO teachers (id, name, type, type_name, department, description, image_url) VALUES
(201, '葉慈章 老師', 'teacher', '教師', '資訊管理系', '資訊管理系\n管院 412 / 3 樓\ncheer@must.edu.tw\n分機 3430 / 3447', 'images/葉慈章.jpg'),
(202, '帥嘉珍 老師', 'teacher', '教師', '資訊管理系', '資訊管理系\n管院 3 樓 R322\njjshuai@must.edu.tw\n分機 3451', 'images/帥嘉珍.jpg'),
(203, '應大中 老師', 'teacher', '教師', '資訊管理系', '資訊管理系\n管院 3 樓 R323\ntcying@must.edu.tw\n分機 3452', 'images/應大中.jpg'),
(204, '陳玉專 老師', 'teacher', '教師', '資訊管理系', '資訊管理系\n管院 3 樓 R327\ncardy@must.edu.tw\n分機 3456', 'images/陳玉專.jpg'),
(205, '李政穎 老師', 'teacher', '教師', '資訊管理系', '資訊管理系\n管院 3 樓 R320\nalvin@must.edu.tw\n分機 3449', 'images/李政穎.jpg'),
(206, '陳建志 老師', 'teacher', '教師', '資訊管理系', '資訊管理系\n管院 3 樓 R319\nchencc@must.edu.tw\n分機 3448', 'images/陳建志.jpg'),
(207, '邱川峰 老師', 'teacher', '教師', '資訊管理系', '資訊管理系\n管院 3 樓 R326\ncfchiu@must.edu.tw\n分機 3455', 'images/邱川峰.jpg'),
(208, '詹森仁 老師', 'teacher', '教師', '資訊管理系', '資訊管理系\n管院 4 樓 R418\nsrchan@must.edu.tw\n分機 3586', 'images/詹森仁.jpg'),
(209, '李佩君 老師', 'teacher', '教師', '資訊管理系', '資訊管理系\n管院 3 樓 R328\npjlee@must.edu.tw\n分機 3457', 'images/李佩君.jpg'),
(210, '黃夙賢 老師', 'teacher', '教師', '資訊管理系', '資訊管理系\n管院 3 樓 R325\nshhuang@must.edu.tw\n分機 3454', 'images/黃夙賢.jpg'),
(211, '鄭姍姍 老師', 'teacher', '教師', '資訊管理系', '資訊管理系\n管院 4 樓 R415\nyes5433@must.edu.tw\n分機 3580', 'images/鄭姍姍.jpg'),
(212, '彭美惠 老師', 'teacher', '教師', '資訊管理系', '資訊管理系\n管院 3 樓 R329\nclare@must.edu.tw\n分機 3458', 'images/彭美惠.jpg'),
(213, '賴彥如 老師', 'teacher', '教師', '資訊管理系', '資訊管理系\n管理大樓 4 樓 R417\npeng1204@must.edu.tw\n分機 3232', 'images/賴彥如.jpg'),
(214, '陳奎伯 老師', 'teacher', '教師', '資訊管理系', '資訊管理系\n管院 4 樓 R428\nkbchen@must.edu.tw\n分機 3576', 'images/陳奎伯.jpg'),
(215, '張東文 老師', 'teacher', '教師', '資訊管理系', '資訊管理系\n管院 3 樓 R324\ntungwen@must.edu.tw\n分機 3453', 'images/張東文.jpg'),
(216, '林思蘭 老師', 'teacher', '系辦公室', '資訊管理系', '資訊管理系 系辦\n管院 4 樓 R411\nshih@must.edu.tw\n分機 3431', 'images/林思蘭.jpg'),
(217, '莊杰茹 老師', 'teacher', '系辦公室', '資訊管理系', '資訊管理系 系辦\n管院 4 樓 R411\nruby@must.edu.tw\n分機 3433', 'images/莊杰茹.jpg');

-- 插入行銷與流通系老師資料
INSERT INTO teachers (id, name, type, type_name, department, description, image_url) VALUES
(301, '鍾政偉 老師', 'teacher', '系辦公室', '行銷與流通系', '行銷與流通系 系辦\n管理學院 6 樓\nalexccw@must.edu.tw\n分機 3500', 'images/鍾政偉.jpg'),
(302, '沈聰益 老師', 'teacher', '教師', '行銷與流通系', '行銷與流通系\n管理學院大樓 631 室\ntsungyi@must.edu.tw\n分機 3521', 'images/沈聰益.jpg'),
(303, '朱希亮 老師', 'teacher', '教師', '行銷與流通系', '行銷與流通系\n管理學院大樓 622 室\nchu@must.edu.tw\n分機 3509', 'images/朱希亮.jpg'),
(304, '楊明錞 老師', 'teacher', '教師', '行銷與流通系', '行銷與流通系\n管理學院大樓 623 室\nyang@must.edu.tw\n分機 3519', 'images/楊明錞.jpg'),
(305, '蔡瑤玉 老師', 'teacher', '教師', '行銷與流通系', '行銷與流通系\n管理學院大樓 628 室\nyauyuh@must.edu.tw\n分機 3510', 'images/蔡瑤玉.jpg'),
(306, '杜怡嫻 老師', 'teacher', '教師', '行銷與流通系', '行銷與流通系\n管理學院大樓 630 室\ntna838@hotmail.com\n分機 3511', 'images/杜怡嫻.jpg'),
(307, '湯寶裳 老師', 'teacher', '教師', '行銷與流通系', '行銷與流通系\n管理學院大樓 625 室\nps.tang@must.edu.tw\n分機 1871', 'images/湯寶裳.jpg'),
(308, '高國檳 老師', 'teacher', '教師', '行銷與流通系', '行銷與流通系\n管理學院大樓 633 室\nbenny@must.edu.tw\n分機 3506', 'images/高國檳.jpg'),
(309, '張哲維 老師', 'teacher', '教師', '行銷與流通系', '行銷與流通系\n管理學院 636 室\ndavychang0327@must.edu.tw\n分機 3520', 'images/張哲維.jpg'),
(310, '邱勇嘉 老師', 'teacher', '教師', '行銷與流通系', '行銷與流通系\n管理學院大樓 634 室\nmk04271@must.edu.tw\n分機 3515', 'images/邱勇嘉.jpg'),
(311, '何庭瑜 老師', 'teacher', '系辦公室', '行銷與流通系', '行銷與流通系 系辦\n管理學院 6 樓\ntingyu@must.edu.tw\n分機 3501', 'images/何庭瑜.jpg');

-- 插入企業管理系老師資料
INSERT INTO teachers (id, name, type, type_name, department, description, image_url) VALUES
(401, '吳芸嫻 老師', 'teacher', '教師', '企業管理系', '企業管理系\n管理學院 6 樓 626\nj1414@must.edu.tw\n分機 1702', 'images/吳芸嫻.jpg'),
(402, '張敏玟 老師', 'teacher', '教師', '企業管理系', '企業管理系\n管理學院大樓 533 室\nsophie.chang@must.edu.tw\n分機 1828', 'images/張敏玟.jpg'),
(403, '陳建志 老師', 'teacher', '教師', '企業管理系', '企業管理系\n管理學院 319 室\nchencc@must.edu.tw\n分機 3448', 'images/陳建志_企管.jpg'),
(404, '林淑瑛 老師', 'teacher', '教師', '企業管理系', '企業管理系\n管理學院 732 室\nsylin@must.edu.tw\n分機 1892', 'images/林淑瑛.jpg'),
(405, '林淑芬 老師', 'teacher', '教師', '企業管理系', '企業管理系\n管理學院 717 室\nlsf@must.edu.tw\n分機 1887', 'images/林淑芬.jpg'),
(406, '李明煌 老師', 'teacher', '教師', '企業管理系', '企業管理系\n管理學院 731 室\nminglee@must.edu.tw\n分機 1891', 'images/李明煌.jpg'),
(407, '范芝萍 老師', 'teacher', '教師', '企業管理系', '企業管理系\n管理學院 729 室\ncpfan@must.edu.tw\n分機 1889', 'images/范芝萍.jpg'),
(408, '詹雅娟 老師', 'teacher', '教師', '企業管理系', '企業管理系\n管理學院 726 室\nya100@must.edu.tw\n分機 1878', 'images/詹雅娟.jpg'),
(409, '郭釗安 老師', 'teacher', '教師', '企業管理系', '企業管理系\n管理學院 728 室\ncakuo@must.edu.tw\n分機 1876', 'images/郭釗安.jpg'),
(410, '洪瑩書 老師', 'teacher', '教師', '企業管理系', '企業管理系\n管理學院 733 室\nyingshu@must.edu.tw\n分機 1893', 'images/洪瑩書.jpg'),
(411, '陳淑芬 老師', 'teacher', '教師', '企業管理系', '企業管理系\n管理大樓 713 室\nlita@must.edu.tw\n03-621-7879', 'images/陳淑芬.jpg');

-- 啟用 Row Level Security (RLS)
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;

-- 創建允許所有人讀取的策略（老師資料是公開資訊）
CREATE POLICY "允許所有人讀取老師資料"
ON teachers
FOR SELECT
TO public
USING (true);

-- 查詢所有老師資料
SELECT * FROM teachers ORDER BY department, id;
