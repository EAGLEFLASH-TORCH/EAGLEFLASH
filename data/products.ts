export interface Product {
  id: string;
  name: string;
  model: string;
  description: string;
  image: string;
  size: string;
  weight: string;
  material: string;
  batteryCapacity: string;
  colors: string[];
  lumens?: string;
  waterproof?: string;
  category: string;
}

export interface ProductDetailSections {
  highlights: string[];
  applications: string[];
  packageItems: string[];
  oemOptions: string[];
}

export interface ProductFilterOption {
  value: string;
  label: string;
}

export interface ProductFilterGroups {
  lumens: ProductFilterOption[];
  waterproof: ProductFilterOption[];
  battery: ProductFilterOption[];
}

type Locale = "zh" | "en" | "fr" | "es" | "ar" | "ru";

export const products: Product[] = [
  { id: "ef-001", name: "Eagle Flash Pro 1000", model: "EF-1000", description: "高亮度专业手电筒，适合户外探险和应急使用", image: "/images/flashlight-placeholder.jpg", size: "150 × 38mm", weight: "180g", material: "航空铝合金", batteryCapacity: "3000mAh / 18650", lumens: "1000lm", waterproof: "IPX6", colors: ["黑色", "银色"], category: "专业户外" },
  { id: "ef-002", name: "Eagle Flash Mini 500", model: "EF-500M", description: "小巧便携，随身携带的口袋手电筒", image: "/images/flashlight-placeholder.jpg", size: "98 × 25mm", weight: "65g", material: "铝合金", batteryCapacity: "1200mAh / 16340", lumens: "500lm", waterproof: "IPX5", colors: ["黑色", "红色", "蓝色"], category: "迷你便携" },
  { id: "ef-003", name: "Eagle Flash Tactical 2000", model: "EF-2000T", description: "战术级手电筒，超强亮度适合执法和安保", image: "/images/flashlight-placeholder.jpg", size: "195 × 45mm", weight: "280g", material: "军用铝合金", batteryCapacity: "5000mAh / 21700", lumens: "2000lm", waterproof: "IPX8", colors: ["黑色"], category: "战术系列" },
  { id: "ef-004", name: "Eagle Flash Zoom 800", model: "EF-800Z", description: "变焦手电筒，远近光一体，多场景适用", image: "/images/flashlight-placeholder.jpg", size: "165 × 40mm", weight: "210g", material: "铝合金", batteryCapacity: "4000mAh / 18650", lumens: "800lm", waterproof: "IPX5", colors: ["黑色", "军绿色"], category: "变焦系列" },
  { id: "ef-005", name: "Eagle Flash Head Lamp 600", model: "EF-600H", description: "头戴式手电筒，解放双手，适合夜跑和登山", image: "/images/flashlight-placeholder.jpg", size: "65 × 40mm", weight: "95g", material: "工程塑料+铝合金", batteryCapacity: "2600mAh / 18650", lumens: "600lm", waterproof: "IPX6", colors: ["黑色", "橙色"], category: "头灯系列" },
  { id: "ef-006", name: "Eagle Flash UV 365", model: "EF-365UV", description: "紫外线手电筒，365nm波长，适合验钞和荧光检测", image: "/images/flashlight-placeholder.jpg", size: "130 × 32mm", weight: "120g", material: "铝合金", batteryCapacity: "2000mAh / 18650", lumens: "365nm UV", waterproof: "IPX5", colors: ["黑色", "紫色"], category: "UV紫外线" },
  { id: "ef-007", name: "Eagle Flash Red Light 300", model: "EF-300R", description: "红光手电筒，保护夜视，天文观测首选", image: "/images/flashlight-placeholder.jpg", size: "110 × 28mm", weight: "85g", material: "铝合金", batteryCapacity: "1500mAh / 14500", lumens: "300lm", waterproof: "IPX4", colors: ["黑色", "红色"], category: "特殊光源" },
  { id: "ef-008", name: "Eagle Flash Rechargeable 1500", model: "EF-1500R", description: "内置充电手电筒，USB-C直充，方便实用", image: "/images/flashlight-placeholder.jpg", size: "158 × 42mm", weight: "200g", material: "航空铝合金", batteryCapacity: "4500mAh 内置", lumens: "1500lm", waterproof: "IPX6", colors: ["黑色", "银色", "蓝色"], category: "充电系列" },
  { id: "ef-009", name: "Eagle Flash COB Work Light", model: "EF-COB01", description: "COB工作灯，大面积泛光，适合维修和工地作业", image: "/images/flashlight-placeholder.jpg", size: "140 × 55mm", weight: "250g", material: "工程塑料", batteryCapacity: "6000mAh 内置", lumens: "1200lm", waterproof: "IPX4", colors: ["黑色", "黄色"], category: "工作灯" },
  { id: "ef-010", name: "Eagle Flash Solar 400", model: "EF-400S", description: "太阳能充电手电筒，环保节能，应急必备", image: "/images/flashlight-placeholder.jpg", size: "155 × 38mm", weight: "175g", material: "铝合金", batteryCapacity: "2500mAh + 太阳能", lumens: "400lm", waterproof: "IPX5", colors: ["黑色", "军绿色"], category: "太阳能系列" },
  { id: "ef-011", name: "Eagle Flash Ultra 3000", model: "EF-3000X", description: "旗舰超亮手电筒，3000流明极致亮度", image: "/images/flashlight-placeholder.jpg", size: "210 × 55mm", weight: "380g", material: "军用铝合金", batteryCapacity: "10000mAh / 双21700", lumens: "3000lm", waterproof: "IPX8", colors: ["黑色"], category: "旗舰系列" },
  { id: "ef-012", name: "Eagle Flash Pen Light", model: "EF-PEN01", description: "笔形手电筒，医用/检修两用", image: "/images/flashlight-placeholder.jpg", size: "140 × 15mm", weight: "35g", material: "不锈钢", batteryCapacity: "AAA × 2", lumens: "150lm", waterproof: "IPX4", colors: ["银色", "黑色", "金色"], category: "笔形手电" },
  { id: "ef-013", name: "Eagle Flash Camping Lantern", model: "EF-CAMP01", description: "露营灯，360°泛光，可充电，附带挂钩", image: "/images/flashlight-placeholder.jpg", size: "90 × 90mm", weight: "320g", material: "ABS工程塑料", batteryCapacity: "8000mAh 内置", lumens: "1000lm", waterproof: "IPX5", colors: ["绿色", "橙色", "白色"], category: "露营灯" },
  { id: "ef-014", name: "Eagle Flash Magnetic 700", model: "EF-700M", description: "磁吸尾部设计，可吸附金属表面，维修必备", image: "/images/flashlight-placeholder.jpg", size: "145 × 35mm", weight: "160g", material: "铝合金", batteryCapacity: "3000mAh / 18650", lumens: "700lm", waterproof: "IPX5", colors: ["黑色", "红色"], category: "工业维修" },
  { id: "ef-015", name: "Eagle Flash Kids 200", model: "EF-200K", description: "儿童安全手电筒，防跌落设计，柔和亮度", image: "/images/flashlight-placeholder.jpg", size: "110 × 30mm", weight: "75g", material: "环保ABS塑料", batteryCapacity: "AA × 2", lumens: "200lm", waterproof: "IPX3", colors: ["粉色", "蓝色", "黄色"], category: "儿童系列" },
  { id: "ef-016", name: "Eagle Flash Emergency SOS", model: "EF-SOS01", description: "应急SOS手电筒，内置警报，含SOS频闪模式", image: "/images/flashlight-placeholder.jpg", size: "130 × 33mm", weight: "140g", material: "铝合金", batteryCapacity: "2800mAh / 18650", lumens: "600lm", waterproof: "IPX6", colors: ["橙色", "黄色"], category: "应急系列" },
  { id: "ef-017", name: "Eagle Flash Dive 500", model: "EF-500D", description: "潜水手电筒，水下100米防水，专业潜水装备", image: "/images/flashlight-placeholder.jpg", size: "175 × 42mm", weight: "240g", material: "硬质铝合金", batteryCapacity: "4000mAh / 18650", lumens: "500lm", waterproof: "IPX8 100m", colors: ["黑色", "黄色"], category: "潜水系列" },
  { id: "ef-018", name: "Eagle Flash RGB Multi", model: "EF-RGB01", description: "多彩RGB手电筒，7色可切换，户外趣味照明", image: "/images/flashlight-placeholder.jpg", size: "128 × 30mm", weight: "110g", material: "铝合金", batteryCapacity: "2000mAh / 18650", lumens: "400lm + RGB", waterproof: "IPX4", colors: ["银色"], category: "特殊光源" },
  { id: "ef-019", name: "Eagle Flash Long Range 1800", model: "EF-1800LR", description: "超远射程手电筒，有效射程达1000米", image: "/images/flashlight-placeholder.jpg", size: "220 × 52mm", weight: "350g", material: "航空铝合金", batteryCapacity: "6000mAh / 26650", lumens: "1800lm", waterproof: "IPX6", colors: ["黑色", "军绿色"], category: "远射系列" },
  { id: "ef-020", name: "Eagle Flash Bike Light", model: "EF-BIKE01", description: "自行车手电筒，带车把固定架，骑行安全", image: "/images/flashlight-placeholder.jpg", size: "95 × 28mm", weight: "80g", material: "铝合金", batteryCapacity: "2000mAh 内置", lumens: "800lm", waterproof: "IPX5", colors: ["黑色", "红色"], category: "骑行系列" },
];

const categoryTranslations: Record<string, Record<Locale, string>> = {
  "专业户外": { zh: "专业户外", en: "Outdoor Pro", fr: "Outdoor Pro", es: "Outdoor Pro", ar: "احترافي خارجي", ru: "Outdoor Pro" },
  "迷你便携": { zh: "迷你便携", en: "Mini Portable", fr: "Mini portable", es: "Mini portátil", ar: "صغير ومحمول", ru: "Мини-портативные" },
  "战术系列": { zh: "战术系列", en: "Tactical", fr: "Tactique", es: "Táctica", ar: "تكتيكي", ru: "Тактические" },
  "变焦系列": { zh: "变焦系列", en: "Zoom", fr: "Zoom", es: "Zoom", ar: "زوم", ru: "С зумом" },
  "头灯系列": { zh: "头灯系列", en: "Headlamps", fr: "Lampes frontales", es: "Frontales", ar: "مصابيح رأس", ru: "Налобные" },
  "UV紫外线": { zh: "UV紫外线", en: "UV", fr: "UV", es: "UV", ar: "أشعة فوق بنفسجية", ru: "УФ" },
  "特殊光源": { zh: "特殊光源", en: "Special Light", fr: "Éclairage spécial", es: "Luz especial", ar: "إضاءة خاصة", ru: "Спецсвет" },
  "充电系列": { zh: "充电系列", en: "Rechargeable", fr: "Rechargeable", es: "Recargable", ar: "قابلة للشحن", ru: "Аккумуляторные" },
  "工作灯": { zh: "工作灯", en: "Work Lights", fr: "Lampes de travail", es: "Luces de trabajo", ar: "مصابيح عمل", ru: "Рабочие фонари" },
  "太阳能系列": { zh: "太阳能系列", en: "Solar", fr: "Solaire", es: "Solar", ar: "طاقة شمسية", ru: "Солнечные" },
  "旗舰系列": { zh: "旗舰系列", en: "Flagship", fr: "Haut de gamme", es: "Insignia", ar: "رائدة", ru: "Флагманские" },
  "笔形手电": { zh: "笔形手电", en: "Pen Lights", fr: "Lampes stylo", es: "Linternas tipo bolígrafo", ar: "مصابيح قلمية", ru: "Фонари-ручки" },
  "露营灯": { zh: "露营灯", en: "Camping Lanterns", fr: "Lanternes de camping", es: "Faroles de camping", ar: "فوانيس تخييم", ru: "Кемпинговые фонари" },
  "工业维修": { zh: "工业维修", en: "Industrial Repair", fr: "Maintenance industrielle", es: "Mantenimiento industrial", ar: "صيانة صناعية", ru: "Промремонт" },
  "儿童系列": { zh: "儿童系列", en: "Kids", fr: "Enfants", es: "Infantil", ar: "للأطفال", ru: "Детские" },
  "应急系列": { zh: "应急系列", en: "Emergency", fr: "Urgence", es: "Emergencia", ar: "طوارئ", ru: "Аварийные" },
  "潜水系列": { zh: "潜水系列", en: "Diving", fr: "Plongée", es: "Buceo", ar: "غوص", ru: "Дайвинг" },
  "远射系列": { zh: "远射系列", en: "Long Range", fr: "Longue portée", es: "Largo alcance", ar: "مدى بعيد", ru: "Дальнобойные" },
  "骑行系列": { zh: "骑行系列", en: "Bike Lights", fr: "Éclairage vélo", es: "Luces de bicicleta", ar: "مصابيح دراجة", ru: "Велофонари" },
};

const colorTranslations: Record<string, Record<Locale, string>> = {
  "黑色": { zh: "黑色", en: "Black", fr: "Noir", es: "Negro", ar: "أسود", ru: "Черный" },
  "银色": { zh: "银色", en: "Silver", fr: "Argent", es: "Plateado", ar: "فضي", ru: "Серебристый" },
  "红色": { zh: "红色", en: "Red", fr: "Rouge", es: "Rojo", ar: "أحمر", ru: "Красный" },
  "蓝色": { zh: "蓝色", en: "Blue", fr: "Bleu", es: "Azul", ar: "أزرق", ru: "Синий" },
  "军绿色": { zh: "军绿色", en: "Army Green", fr: "Vert militaire", es: "Verde militar", ar: "أخضر عسكري", ru: "Армейский зеленый" },
  "橙色": { zh: "橙色", en: "Orange", fr: "Orange", es: "Naranja", ar: "برتقالي", ru: "Оранжевый" },
  "紫色": { zh: "紫色", en: "Purple", fr: "Violet", es: "Morado", ar: "بنفسجي", ru: "Фиолетовый" },
  "黄色": { zh: "黄色", en: "Yellow", fr: "Jaune", es: "Amarillo", ar: "أصفر", ru: "Желтый" },
  "金色": { zh: "金色", en: "Gold", fr: "Or", es: "Dorado", ar: "ذهبي", ru: "Золотой" },
  "绿色": { zh: "绿色", en: "Green", fr: "Vert", es: "Verde", ar: "أخضر", ru: "Зеленый" },
  "白色": { zh: "白色", en: "White", fr: "Blanc", es: "Blanco", ar: "أبيض", ru: "Белый" },
  "粉色": { zh: "粉色", en: "Pink", fr: "Rose", es: "Rosa", ar: "وردي", ru: "Розовый" },
};

const materialTranslations: Record<string, Record<Locale, string>> = {
  "航空铝合金": { zh: "航空铝合金", en: "Aircraft-grade aluminum", fr: "Aluminium aéronautique", es: "Aluminio aeronáutico", ar: "ألمنيوم بدرجة الطيران", ru: "Авиационный алюминий" },
  "铝合金": { zh: "铝合金", en: "Aluminum alloy", fr: "Alliage d'aluminium", es: "Aleación de aluminio", ar: "سبائك الألومنيوم", ru: "Алюминиевый сплав" },
  "军用铝合金": { zh: "军用铝合金", en: "Military-grade aluminum", fr: "Aluminium de qualité militaire", es: "Aluminio de grado militar", ar: "ألمنيوم عسكري", ru: "Военный алюминиевый сплав" },
  "工程塑料+铝合金": { zh: "工程塑料+铝合金", en: "Engineering plastic + aluminum alloy", fr: "Plastique technique + aluminium", es: "Plástico técnico + aluminio", ar: "بلاستيك هندسي + ألومنيوم", ru: "Инженерный пластик + алюминий" },
  "工程塑料": { zh: "工程塑料", en: "Engineering plastic", fr: "Plastique technique", es: "Plástico técnico", ar: "بلاستيك هندسي", ru: "Инженерный пластик" },
  "不锈钢": { zh: "不锈钢", en: "Stainless steel", fr: "Acier inoxydable", es: "Acero inoxidable", ar: "فولاذ مقاوم للصدأ", ru: "Нержавеющая сталь" },
  "ABS工程塑料": { zh: "ABS工程塑料", en: "ABS engineering plastic", fr: "Plastique technique ABS", es: "Plástico técnico ABS", ar: "بلاستيك ABS هندسي", ru: "Инженерный пластик ABS" },
  "环保ABS塑料": { zh: "环保ABS塑料", en: "Eco-friendly ABS plastic", fr: "Plastique ABS écologique", es: "Plástico ABS ecológico", ar: "بلاستيك ABS صديق للبيئة", ru: "Экологичный ABS-пластик" },
  "硬质铝合金": { zh: "硬质铝合金", en: "Hard aluminum alloy", fr: "Alliage d'aluminium dur", es: "Aleación de aluminio duro", ar: "سبيكة ألومنيوم صلبة", ru: "Твердый алюминиевый сплав" },
};

const productDescriptions: Record<string, Record<Exclude<Locale, "zh">, string>> = {
  "ef-001": { en: "High-brightness professional flashlight for outdoor adventures and emergencies", fr: "Lampe torche professionnelle haute luminosité pour l'aventure et les urgences", es: "Linterna profesional de alto brillo para aventura y emergencias", ar: "مصباح احترافي عالي السطوع للمغامرات والطوارئ", ru: "Профессиональный яркий фонарь для активного отдыха и экстренных ситуаций" },
  "ef-002": { en: "Compact pocket flashlight for everyday carry", fr: "Lampe de poche compacte à emporter partout", es: "Linterna compacta de bolsillo para llevar a diario", ar: "مصباح جيب صغير للحمل اليومي", ru: "Компактный карманный фонарь на каждый день" },
  "ef-003": { en: "Tactical flashlight with powerful output for security and law enforcement", fr: "Lampe tactique puissante pour la sécurité et l'intervention", es: "Linterna táctica de gran potencia para seguridad y uso profesional", ar: "مصباح تكتيكي قوي للأمن والاستخدام المهني", ru: "Тактический фонарь высокой мощности для охраны и служб" },
  "ef-004": { en: "Zoom flashlight with adjustable beam for near and far use", fr: "Lampe zoom à faisceau réglable pour courte et longue distance", es: "Linterna con zoom y haz ajustable para cerca y lejos", ar: "مصباح زوم بشعاع قابل للتعديل للمسافات القريبة والبعيدة", ru: "Фонарь с зумом и регулируемым лучом для ближнего и дальнего света" },
  "ef-005": { en: "Hands-free headlamp for night running, hiking, and work", fr: "Lampe frontale mains libres pour course de nuit, randonnée et travail", es: "Linterna frontal manos libres para correr, senderismo y trabajo", ar: "مصباح رأس يحرر اليدين للجري الليلي والتنزه والعمل", ru: "Налобный фонарь для бега, походов и работы без рук" },
  "ef-006": { en: "365nm UV flashlight for banknote checks and fluorescence inspection", fr: "Lampe UV 365 nm pour billets et inspection fluorescente", es: "Linterna UV de 365 nm para billetes e inspección fluorescente", ar: "مصباح UV بطول 365 نانومتر لفحص العملات والفلورة", ru: "УФ-фонарь 365 нм для проверки банкнот и флуоресценции" },
  "ef-007": { en: "Red-light flashlight that preserves night vision for astronomy", fr: "Lampe rouge préservant la vision nocturne pour l'astronomie", es: "Linterna de luz roja que protege la visión nocturna para astronomía", ar: "مصباح أحمر يحافظ على الرؤية الليلية للرصد الفلكي", ru: "Красный фонарь для сохранения ночного зрения и астрономии" },
  "ef-008": { en: "Built-in rechargeable flashlight with convenient USB-C charging", fr: "Lampe rechargeable intégrée avec charge USB-C pratique", es: "Linterna recargable integrada con carga USB-C", ar: "مصباح قابل للشحن مدمج مع شحن USB-C مريح", ru: "Аккумуляторный фонарь с удобной зарядкой USB-C" },
  "ef-009": { en: "COB work light with wide flood beam for repairs and job sites", fr: "Lampe de travail COB à large faisceau pour réparation et chantier", es: "Luz de trabajo COB de haz amplio para reparaciones y obra", ar: "مصباح عمل COB بإضاءة واسعة للصيانة ومواقع العمل", ru: "Рабочий COB-фонарь с широким светом для ремонта и стройплощадок" },
  "ef-010": { en: "Solar rechargeable flashlight for eco-friendly emergency lighting", fr: "Lampe solaire rechargeable pour éclairage d'urgence écologique", es: "Linterna solar recargable para emergencias ecológicas", ar: "مصباح شمسي قابل للشحن للإضاءة الطارئة الصديقة للبيئة", ru: "Солнечный аккумуляторный фонарь для экологичного аварийного света" },
  "ef-011": { en: "Flagship ultra-bright flashlight with 3000-lumen output", fr: "Lampe torche phare ultra-lumineuse de 3000 lumens", es: "Linterna insignia ultra brillante de 3000 lúmenes", ar: "مصباح رائد فائق السطوع بقوة 3000 لومن", ru: "Флагманский сверхяркий фонарь на 3000 люмен" },
  "ef-012": { en: "Pen light for medical checks and maintenance inspections", fr: "Lampe stylo pour examens médicaux et maintenance", es: "Linterna tipo bolígrafo para uso médico y mantenimiento", ar: "مصباح قلمي للفحص الطبي والصيانة", ru: "Фонарь-ручка для медицины и техосмотра" },
  "ef-013": { en: "360-degree rechargeable camping lantern with hanging hook", fr: "Lanterne de camping rechargeable à 360 degrés avec crochet", es: "Farol de camping recargable de 360 grados con gancho", ar: "فانوس تخييم قابل للشحن بإضاءة 360 درجة وخطاف", ru: "Кемпинговый фонарь 360 градусов с зарядкой и крючком" },
  "ef-014": { en: "Magnetic tail design attaches to metal surfaces for repairs", fr: "Base magnétique pour fixation aux surfaces métalliques en réparation", es: "Cola magnética para fijarse a superficies metálicas durante reparaciones", ar: "ذيل مغناطيسي يثبت على الأسطح المعدنية للصيانة", ru: "Магнитный хвост крепится к металлу при ремонте" },
  "ef-015": { en: "Child-safe flashlight with drop-resistant design and soft brightness", fr: "Lampe sûre pour enfants, résistante aux chutes et à lumière douce", es: "Linterna infantil segura, anticaídas y de brillo suave", ar: "مصباح آمن للأطفال بتصميم مقاوم للسقوط وسطوع لطيف", ru: "Безопасный детский фонарь с мягким светом и защитой от падений" },
  "ef-016": { en: "Emergency SOS flashlight with built-in alarm and strobe mode", fr: "Lampe SOS d'urgence avec alarme intégrée et mode stroboscope", es: "Linterna SOS de emergencia con alarma y modo estroboscópico", ar: "مصباح طوارئ SOS مع إنذار مدمج ووضع وميض", ru: "Аварийный SOS-фонарь со встроенной сиреной и стробоскопом" },
  "ef-017": { en: "Dive flashlight rated for 100 meters underwater", fr: "Lampe de plongée étanche jusqu'à 100 mètres", es: "Linterna de buceo resistente hasta 100 metros", ar: "مصباح غوص مقاوم للماء حتى عمق 100 متر", ru: "Дайвинговый фонарь для глубины до 100 метров" },
  "ef-018": { en: "RGB flashlight with seven switchable colors for outdoor fun", fr: "Lampe RGB à sept couleurs commutables pour l'extérieur", es: "Linterna RGB con siete colores conmutables para exterior", ar: "مصباح RGB بسبعة ألوان قابلة للتبديل للأنشطة الخارجية", ru: "RGB-фонарь с семью цветами для активного отдыха" },
  "ef-019": { en: "Long-range flashlight with an effective beam distance up to 1000 meters", fr: "Lampe longue portée avec faisceau efficace jusqu'à 1000 mètres", es: "Linterna de largo alcance con distancia efectiva de hasta 1000 metros", ar: "مصباح بعيد المدى يصل مداه الفعال إلى 1000 متر", ru: "Дальнобойный фонарь с эффективной дальностью до 1000 метров" },
  "ef-020": { en: "Bike light with handlebar mount for safer riding", fr: "Éclairage vélo avec support de guidon pour rouler en sécurité", es: "Luz de bicicleta con soporte para manillar para mayor seguridad", ar: "مصباح دراجة مع حامل للمقود لركوب أكثر أمانًا", ru: "Велофонарь с креплением на руль для безопасной езды" },
};

function normalizeLocale(locale: string): Locale {
  return ["zh", "en", "fr", "es", "ar", "ru"].includes(locale) ? (locale as Locale) : "en";
}

function translateMap(source: string, locale: Locale, translations: Record<string, Record<Locale, string>>) {
  return translations[source]?.[locale] ?? translations[source]?.en ?? source;
}

function translateBattery(source: string, locale: Locale) {
  if (locale === "zh") return source;
  return source.replace("内置", "built-in").replace("太阳能", "solar").replace("双", "dual ");
}

export function getLocalizedProducts(locale: string): Product[] {
  const resolvedLocale = normalizeLocale(locale);

  return products.map((product) => ({
    ...product,
    description: resolvedLocale === "zh" ? product.description : productDescriptions[product.id]?.[resolvedLocale] ?? productDescriptions[product.id]?.en ?? product.description,
    material: translateMap(product.material, resolvedLocale, materialTranslations),
    batteryCapacity: translateBattery(product.batteryCapacity, resolvedLocale),
    colors: product.colors.map((color) => translateMap(color, resolvedLocale, colorTranslations)),
    category: translateMap(product.category, resolvedLocale, categoryTranslations),
  }));
}

export function getLocalizedCategories(locale: string) {
  const resolvedLocale = normalizeLocale(locale);
  return [...new Set(products.map((p) => translateMap(p.category, resolvedLocale, categoryTranslations)))];
}

const detailCopy: Record<Locale, {
  highlights: (product: Product) => string[];
  applications: string[];
  packageItems: (product: Product) => string[];
  oemOptions: string[];
}> = {
  zh: {
    highlights: (product) => [
      `${product.lumens ?? "多档亮度"} 输出，适合稳定长时间照明`,
      `${product.waterproof ?? "日常防水"} 防护，适应户外、作业等复杂环境`,
      `${product.material} 机身，兼顾耐用性与手感`,
      `${product.batteryCapacity} 供电方案，满足日常与专业使用`,
    ],
    applications: ["户外露营", "夜间巡检", "应急备用", "工程维修", "批量采购", "OEM / ODM 定制"],
    packageItems: (product) => [product.name, "说明书", "包装盒", "合格证", "可选充电线/电池"],
    oemOptions: ["Logo 丝印/激光雕刻", "外壳颜色定制", "包装盒定制", "说明书语言定制", "来样/来图打样"],
  },
  en: {
    highlights: (product) => [
      `${product.lumens ?? "Multi-mode"} output for stable everyday and professional lighting`,
      `${product.waterproof ?? "Daily waterproof"} protection for outdoor and work environments`,
      `${product.material} body balances durability and handling comfort`,
      `${product.batteryCapacity} power solution for regular and demanding use`,
    ],
    applications: ["Camping", "Night inspection", "Emergency backup", "Repair work", "Bulk orders", "OEM / ODM customization"],
    packageItems: (product) => [product.name, "User manual", "Retail box", "Certificate", "Optional cable / battery"],
    oemOptions: ["Logo printing / laser engraving", "Custom housing colors", "Custom packaging", "Manual language options", "Sample development"],
  },
  fr: {
    highlights: (product) => [
      `${product.lumens ?? "Éclairage multi-mode"} pour un usage stable et professionnel`,
      `Protection ${product.waterproof ?? "étanche au quotidien"} pour l'extérieur et le travail`,
      `Corps en ${product.material} durable et agréable en main`,
      `Alimentation ${product.batteryCapacity} pour les usages courants et exigeants`,
    ],
    applications: ["Camping", "Inspection de nuit", "Secours", "Maintenance", "Commandes en gros", "Personnalisation OEM / ODM"],
    packageItems: (product) => [product.name, "Manuel", "Boîte", "Certificat", "Câble / batterie en option"],
    oemOptions: ["Logo imprimé / gravé", "Couleurs personnalisées", "Emballage personnalisé", "Langue du manuel", "Échantillonnage"],
  },
  es: {
    highlights: (product) => [
      `Salida ${product.lumens ?? "multimodo"} para iluminación estable y profesional`,
      `Protección ${product.waterproof ?? "impermeable diaria"} para exterior y trabajo`,
      `Cuerpo de ${product.material} con buena durabilidad y agarre`,
      `Solución de energía ${product.batteryCapacity} para usos diarios y exigentes`,
    ],
    applications: ["Camping", "Inspección nocturna", "Emergencias", "Reparaciones", "Pedidos al por mayor", "OEM / ODM"],
    packageItems: (product) => [product.name, "Manual", "Caja", "Certificado", "Cable / batería opcional"],
    oemOptions: ["Logo impreso / grabado", "Colores personalizados", "Empaque personalizado", "Idioma del manual", "Muestras"],
  },
  ar: {
    highlights: (product) => [
      `خرج ${product.lumens ?? "متعدد الأوضاع"} لإضاءة مستقرة واحترافية`,
      `حماية ${product.waterproof ?? "مقاومة يومية للماء"} للبيئات الخارجية والعمل`,
      `هيكل ${product.material} يجمع بين المتانة والراحة`,
      `حل طاقة ${product.batteryCapacity} للاستخدام اليومي والمهني`,
    ],
    applications: ["تخييم", "فحص ليلي", "طوارئ", "صيانة", "طلبات بالجملة", "تخصيص OEM / ODM"],
    packageItems: (product) => [product.name, "دليل المستخدم", "علبة", "شهادة", "كابل / بطارية اختيارية"],
    oemOptions: ["طباعة / نقش الشعار", "ألوان مخصصة", "تغليف مخصص", "لغة الدليل", "تطوير عينات"],
  },
  ru: {
    highlights: (product) => [
      `${product.lumens ?? "Много режимов"} для стабильного профессионального освещения`,
      `Защита ${product.waterproof ?? "от влаги"} для улицы и работы`,
      `Корпус из ${product.material} сочетает прочность и удобство`,
      `Питание ${product.batteryCapacity} для обычных и сложных задач`,
    ],
    applications: ["Кемпинг", "Ночной осмотр", "Аварийный запас", "Ремонт", "Оптовые заказы", "OEM / ODM"],
    packageItems: (product) => [product.name, "Инструкция", "Коробка", "Сертификат", "Кабель / батарея опционально"],
    oemOptions: ["Печать / гравировка логотипа", "Цвет корпуса", "Упаковка", "Язык инструкции", "Образцы"],
  },
};

export function getProductDetailSections(product: Product, locale: string): ProductDetailSections {
  const resolvedLocale = normalizeLocale(locale);
  const copy = detailCopy[resolvedLocale];

  return {
    highlights: copy.highlights(product),
    applications: copy.applications,
    packageItems: copy.packageItems(product),
    oemOptions: copy.oemOptions,
  };
}

export function getProductLumensValue(product: Product) {
  const match = product.lumens?.match(/\d+/);
  return match ? Number(match[0]) : 0;
}

export function getProductBatteryGroup(product: Product) {
  const battery = product.batteryCapacity.toLowerCase();

  if (battery.includes("内置") || battery.includes("built-in")) return "built-in";
  if (battery.includes("solar") || battery.includes("太阳能")) return "solar";
  if (battery.includes("aa") || battery.includes("aaa")) return "aa";
  if (battery.includes("21700") || battery.includes("26650")) return "large-cell";
  return "18650";
}

export function getProductWaterproofGroup(product: Product) {
  const waterproof = product.waterproof ?? "";

  if (waterproof.includes("IPX8")) return "ipx8";
  if (waterproof.includes("IPX6")) return "ipx6";
  return "daily";
}

export function getLocalizedFilterGroups(locale: string): ProductFilterGroups {
  const resolvedLocale = normalizeLocale(locale);
  const labels: Record<Locale, ProductFilterGroups> = {
    zh: {
      lumens: [
        { value: "under-500", label: "500lm 以下" },
        { value: "500-999", label: "500-999lm" },
        { value: "1000-1999", label: "1000-1999lm" },
        { value: "2000-plus", label: "2000lm 以上" },
      ],
      waterproof: [
        { value: "daily", label: "日常防水" },
        { value: "ipx6", label: "IPX6 户外防护" },
        { value: "ipx8", label: "IPX8 深水防护" },
      ],
      battery: [
        { value: "18650", label: "18650 电池" },
        { value: "large-cell", label: "21700 / 26650" },
        { value: "built-in", label: "内置充电" },
        { value: "aa", label: "AA / AAA" },
        { value: "solar", label: "太阳能" },
      ],
    },
    en: {
      lumens: [
        { value: "under-500", label: "Under 500lm" },
        { value: "500-999", label: "500-999lm" },
        { value: "1000-1999", label: "1000-1999lm" },
        { value: "2000-plus", label: "2000lm+" },
      ],
      waterproof: [
        { value: "daily", label: "Daily waterproof" },
        { value: "ipx6", label: "IPX6 outdoor" },
        { value: "ipx8", label: "IPX8 deep water" },
      ],
      battery: [
        { value: "18650", label: "18650 battery" },
        { value: "large-cell", label: "21700 / 26650" },
        { value: "built-in", label: "Built-in rechargeable" },
        { value: "aa", label: "AA / AAA" },
        { value: "solar", label: "Solar" },
      ],
    },
    fr: {
      lumens: [
        { value: "under-500", label: "Moins de 500lm" },
        { value: "500-999", label: "500-999lm" },
        { value: "1000-1999", label: "1000-1999lm" },
        { value: "2000-plus", label: "2000lm+" },
      ],
      waterproof: [
        { value: "daily", label: "Étanchéité quotidienne" },
        { value: "ipx6", label: "IPX6 extérieur" },
        { value: "ipx8", label: "IPX8 eau profonde" },
      ],
      battery: [
        { value: "18650", label: "Batterie 18650" },
        { value: "large-cell", label: "21700 / 26650" },
        { value: "built-in", label: "Recharge intégrée" },
        { value: "aa", label: "AA / AAA" },
        { value: "solar", label: "Solaire" },
      ],
    },
    es: {
      lumens: [
        { value: "under-500", label: "Menos de 500lm" },
        { value: "500-999", label: "500-999lm" },
        { value: "1000-1999", label: "1000-1999lm" },
        { value: "2000-plus", label: "2000lm+" },
      ],
      waterproof: [
        { value: "daily", label: "Impermeable diario" },
        { value: "ipx6", label: "IPX6 exterior" },
        { value: "ipx8", label: "IPX8 agua profunda" },
      ],
      battery: [
        { value: "18650", label: "Batería 18650" },
        { value: "large-cell", label: "21700 / 26650" },
        { value: "built-in", label: "Recargable integrada" },
        { value: "aa", label: "AA / AAA" },
        { value: "solar", label: "Solar" },
      ],
    },
    ar: {
      lumens: [
        { value: "under-500", label: "أقل من 500 لومن" },
        { value: "500-999", label: "500-999 لومن" },
        { value: "1000-1999", label: "1000-1999 لومن" },
        { value: "2000-plus", label: "+2000 لومن" },
      ],
      waterproof: [
        { value: "daily", label: "مقاومة يومية للماء" },
        { value: "ipx6", label: "IPX6 خارجي" },
        { value: "ipx8", label: "IPX8 مياه عميقة" },
      ],
      battery: [
        { value: "18650", label: "بطارية 18650" },
        { value: "large-cell", label: "21700 / 26650" },
        { value: "built-in", label: "شحن مدمج" },
        { value: "aa", label: "AA / AAA" },
        { value: "solar", label: "شمسي" },
      ],
    },
    ru: {
      lumens: [
        { value: "under-500", label: "До 500lm" },
        { value: "500-999", label: "500-999lm" },
        { value: "1000-1999", label: "1000-1999lm" },
        { value: "2000-plus", label: "2000lm+" },
      ],
      waterproof: [
        { value: "daily", label: "Базовая влагозащита" },
        { value: "ipx6", label: "IPX6 для улицы" },
        { value: "ipx8", label: "IPX8 глубокая вода" },
      ],
      battery: [
        { value: "18650", label: "Аккумулятор 18650" },
        { value: "large-cell", label: "21700 / 26650" },
        { value: "built-in", label: "Встроенная зарядка" },
        { value: "aa", label: "AA / AAA" },
        { value: "solar", label: "Солнечная" },
      ],
    },
  };

  return labels[resolvedLocale];
}

export const categories = [...new Set(products.map((p) => p.category))];
export const allColors = [...new Set(products.flatMap((p) => p.colors))];
export const allMaterials = [...new Set(products.map((p) => p.material))];
