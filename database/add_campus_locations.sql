-- 建立 campus_locations 資料表
CREATE TABLE IF NOT EXISTS public.campus_locations (
    id BIGINT PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    type_name TEXT,
    description TEXT,
    image_url TEXT,
    building TEXT,
    vr_node TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 清空舊資料
TRUNCATE TABLE public.campus_locations;

-- 寫入原始大樓資料
INSERT INTO public.campus_locations (id, name, type, type_name, description, image_url, building, vr_node) VALUES
(1, '管理學院', 'building', '大樓', '本院以期落實「培育跨域協作、務實創新、全人學習之管理專業人才」為教育目標。', 'images/management_building.jpg?v=2', '管理學院', 'glxy'),
(2, '圖書館', 'building', '大樓', '圖書館不僅是藏書的地方，更是您探索知識、激發創意與放鬆身心的空間。', 'images/library.jpg?v=2', '圖書館', 'book'),
(7, '行政大樓', 'building', '大樓', '校園行政中心，各處室辦公所在地。', 'images/campus_gate.jpg?v=2', '行政大樓', 'node2'),
(9, '鴻超樓', 'building', '大樓', '半導體學院與相關實驗室所在。', 'images/campus_gate.jpg?v=2', '鴻超樓', 'hcl'),
(12, '學生活動中心', 'building', '大樓', '學生社團活動與集會場所。', 'images/campus_gate.jpg?v=2', '學生活動中心', 'sac'),
(31, '行政二館', 'building', '大樓', '校園第二行政中心，提供教學與辦公空間。', 'images/campus_gate.jpg?v=2', '行政二館', 'node10'),
(25, '資訊大樓', 'building', '大樓', '資訊學院教學大樓，配備先進電腦實驗室。', 'images/campus_gate.jpg?v=2', '資訊大樓', 'cc'),
(26, '明明樓', 'building', '大樓', '通識教育與多元選修課程大樓。', 'images/building_1.jpg', '明明樓', 'mml'),
(27, '明光樓', 'building', '大樓', '多元功能教學大樓。', 'images/campus_gate.jpg?v=2', '明光樓', 'mgl'),
(28, '明學樓', 'building', '大樓', '跨領域學習與研究大樓。', 'images/campus_gate.jpg?v=2', '明學樓', 'mxl'),
(30, '宗山樓', 'building', '大樓', '學生住宿服務、衛保組及諮商輔導中心所在地。', 'images/campus_gate.jpg?v=2', '宗山樓', 'zsl');

-- 寫入新增的學院與科系資料 (800+)
INSERT INTO public.campus_locations (id, name, type, type_name, description, image_url, building, vr_node) VALUES
(801, '資訊管理系', 'dept', '系所', '管理學院 3 樓與 4 樓\n包含系辦公室及多間電腦網路教室。', 'images/management_building.jpg?v=2', '管理學院', 'glxy'),
(802, '運動事業管理系', 'dept', '系所', '管理學院 2 樓', 'images/management_building.jpg?v=2', '管理學院', 'glxy'),
(803, '企業管理系', 'dept', '系所', '管理學院 5 樓', 'images/management_building.jpg?v=2', '管理學院', 'glxy'),
(804, '行銷與流通管理系', 'dept', '系所', '管理學院 6 樓', 'images/management_building.jpg?v=2', '管理學院', 'glxy'),
(805, '財務金融系', 'dept', '系所', '管理學院 7 樓\n管院院辦公室也在此層。', 'images/management_building.jpg?v=2', '管理學院', 'glxy'),
(806, '工業工程與管理系', 'dept', '系所', '管理學院 8 樓', 'images/management_building.jpg?v=2', '管理學院', 'glxy'),
(810, '半導體學院', 'building', '學院', '位於逢喜樓 (鴻超樓)\n致力於培育半導體產業專業人才。', 'images/campus_gate.jpg?v=2', '鴻超樓', 'hcl'),
(811, '半導體與光電科技系', 'dept', '系所', '逢喜樓 (鴻超樓) 2 樓', 'images/campus_gate.jpg?v=2', '鴻超樓', 'hcl'),
(812, '半導體工程與材料系', 'dept', '系所', '逢喜樓 (鴻超樓) 3 樓\n半導體學院辦公室也在此層。', 'images/campus_gate.jpg?v=2', '鴻超樓', 'hcl'),
(813, '資訊工程系', 'dept', '系所', '逢喜樓 (鴻超樓) 4 樓', 'images/campus_gate.jpg?v=2', '鴻超樓', 'hcl'),
(814, '工程學院辦公室', 'admin', '處室', '逢喜樓 (鴻超樓) 5 樓', 'images/campus_gate.jpg?v=2', '鴻超樓', 'hcl'),
(820, '電機工程系 (電機館)', 'dept', '系所', '電機館 (分為一館、二館、三館)', 'images/campus_gate.jpg?v=2', '電機館', NULL),
(821, '電子工程系 (電子館)', 'dept', '系所', '電子館', 'images/campus_gate.jpg?v=2', '電子館', NULL),
(822, '機械工程系 (機械館)', 'dept', '系所', '機械大樓 / 機械館', 'images/campus_gate.jpg?v=2', '機械館', NULL),
(823, '土木工程與環境資源管理系', 'dept', '系所', '土環館', 'images/campus_gate.jpg?v=2', '土環館', NULL),
(824, '半導體工程與材料系 (實驗室)', 'dept', '系所', '部分實驗室位於半材館', 'images/campus_gate.jpg?v=2', '半材館', NULL),
(830, '旅館管理與廚藝創意系', 'dept', '系所', '立緒樓 2 樓\n1 樓設有廚藝教室。', 'images/campus_gate.jpg?v=2', '立緒樓', NULL),
(831, '幼兒保育系', 'dept', '系所', '立緒樓 3 樓', 'images/campus_gate.jpg?v=2', '立緒樓', NULL),
(832, '休閒事業管理系', 'dept', '系所', '明學樓 4 樓', 'images/campus_gate.jpg?v=2', '明學樓', 'mxl'),
(833, '樂齡服務產業管理系', 'dept', '系所', '明學樓 6 樓', 'images/campus_gate.jpg?v=2', '明學樓', 'mxl'),
(840, '國際商務外語系', 'dept', '系所', '明德樓 5 樓與 6 樓', 'images/campus_gate.jpg?v=2', '明德樓', NULL),
(841, '時尚造型與設計系', 'dept', '系所', '行政二館 3 樓', 'images/campus_gate.jpg?v=2', '行政二館', 'node10'),
(842, '多媒體與遊戲發展系', 'dept', '系所', '人文與設計學院', 'images/campus_gate.jpg?v=2', '明學樓', 'mxl'),
(844, '化妝品應用學士學位學程', 'dept', '系所', '人文與設計學院 (民生/人設相關)', 'images/campus_gate.jpg?v=2', '立緒樓', NULL);
