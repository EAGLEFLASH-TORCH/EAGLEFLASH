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

export const categories = [...new Set(products.map((p) => p.category))];
export const allColors = [...new Set(products.flatMap((p) => p.colors))];
export const allMaterials = [...new Set(products.map((p) => p.material))];
