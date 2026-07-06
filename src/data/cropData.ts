export interface CropData {
  name: string;
  daysToYieldStart: number;
  daysToHarvest: number;
  soilTypes: string[];
  pesticides: string[];
  fertilizers: string[];
  temperature: string;
  rainfall: string;
  tips: string[];
}

export const CROP_DATA: Record<string, CropData> = {
  wheat: {
    name: "Wheat",
    daysToYieldStart: 90,
    daysToHarvest: 120,
    soilTypes: ["Loamy", "Clay Loam", "Silty Clay"],
    pesticides: ["Chlorpyrifos", "Imidacloprid", "Thiamethoxam", "Carbaryl"],
    fertilizers: ["Urea (120 kg/ha)", "DAP (100 kg/ha)", "Potash (60 kg/ha)", "Zinc Sulphate (25 kg/ha)"],
    temperature: "15-25°C",
    rainfall: "400-600mm",
    tips: [
      "Sow seeds at 2-3 cm depth for optimal germination",
      "Apply first irrigation 20-25 days after sowing",
      "Monitor for rust and aphid infestations regularly",
      "Harvest when moisture content is 14-16%"
    ]
  },
  rice: {
    name: "Rice",
    daysToYieldStart: 80,
    daysToHarvest: 110,
    soilTypes: ["Clay", "Clay Loam", "Silty Clay"],
    pesticides: ["Fipronil", "Thiamethoxam", "Chlorantraniliprole", "Imidacloprid"],
    fertilizers: ["Urea (150 kg/ha)", "DAP (75 kg/ha)", "Potash (50 kg/ha)", "Zinc Sulphate (25 kg/ha)"],
    temperature: "20-35°C",
    rainfall: "1000-2000mm",
    tips: [
      "Maintain 2-3 cm water level in fields during growing season",
      "Transplant seedlings at 21-25 days old",
      "Apply nitrogen in 3 splits: basal, tillering, and panicle stage",
      "Drain fields 2 weeks before harvest"
    ]
  },
  corn: {
    name: "Corn",
    daysToYieldStart: 70,
    daysToHarvest: 100,
    soilTypes: ["Loamy", "Sandy Loam", "Clay Loam"],
    pesticides: ["Atrazine", "Glyphosate", "Chlorpyrifos", "Carbaryl"],
    fertilizers: ["Urea (200 kg/ha)", "DAP (125 kg/ha)", "Potash (75 kg/ha)", "Zinc Sulphate (20 kg/ha)"],
    temperature: "21-30°C",
    rainfall: "500-800mm",
    tips: [
      "Plant seeds 2-3 cm deep with 20-25 cm spacing",
      "Side-dress with nitrogen at 6-8 leaf stage",
      "Monitor for corn borer and armyworm",
      "Harvest when kernels reach 20-25% moisture"
    ]
  },
  tomato: {
    name: "Tomato",
    daysToYieldStart: 60,
    daysToHarvest: 90,
    soilTypes: ["Loamy", "Sandy Loam", "Well-drained"],
    pesticides: ["Chlorothalonil", "Mancozeb", "Imidacloprid", "Spinosad"],
    fertilizers: ["Urea (100 kg/ha)", "DAP (150 kg/ha)", "Potash (100 kg/ha)", "Calcium Nitrate (50 kg/ha)"],
    temperature: "20-30°C",
    rainfall: "400-600mm",
    tips: [
      "Transplant seedlings at 4-6 leaf stage",
      "Provide support stakes for indeterminate varieties",
      "Mulch around plants to retain moisture",
      "Harvest when fruits show first color change"
    ]
  },
  potato: {
    name: "Potato",
    daysToYieldStart: 70,
    daysToHarvest: 90,
    soilTypes: ["Sandy Loam", "Loamy", "Well-drained"],
    pesticides: ["Mancozeb", "Chlorothalonil", "Imidacloprid", "Abamectin"],
    fertilizers: ["Urea (120 kg/ha)", "DAP (100 kg/ha)", "Potash (150 kg/ha)", "Sulphur (30 kg/ha)"],
    temperature: "15-25°C",
    rainfall: "400-600mm",
    tips: [
      "Plant seed tubers 6-8 cm deep",
      "Hill soil around plants as they grow",
      "Monitor for late blight and Colorado potato beetle",
      "Harvest when foliage begins to yellow"
    ]
  },
  soybean: {
    name: "Soybean",
    daysToYieldStart: 85,
    daysToHarvest: 115,
    soilTypes: ["Loamy", "Clay Loam", "Well-drained"],
    pesticides: ["Chlorpyrifos", "Imidacloprid", "Glyphosate", "Pendimethalin"],
    fertilizers: ["DAP (75 kg/ha)", "Potash (60 kg/ha)", "Sulphur (20 kg/ha)", "Rhizobium Inoculant"],
    temperature: "20-30°C",
    rainfall: "450-700mm",
    tips: [
      "Inoculate seeds with rhizobium bacteria",
      "Maintain proper row spacing of 30-45 cm",
      "Monitor for pod borer and aphids",
      "Harvest when pods are fully mature and dry"
    ]
  },
  cotton: {
    name: "Cotton",
    daysToYieldStart: 100,
    daysToHarvest: 180,
    soilTypes: ["Clay Loam", "Sandy Loam", "Black Cotton Soil"],
    pesticides: ["Imidacloprid", "Chlorpyrifos", "Profenofos", "Emamectin Benzoate"],
    fertilizers: ["Urea (150 kg/ha)", "DAP (100 kg/ha)", "Potash (75 kg/ha)", "Zinc Sulphate (25 kg/ha)"],
    temperature: "21-30°C",
    rainfall: "500-1000mm",
    tips: [
      "Maintain plant population of 1-1.5 lakh per hectare",
      "Apply growth regulators during square formation",
      "Monitor for bollworm and whitefly",
      "Harvest when bolls are fully opened and fibers are dry"
    ]
  },
  sugarcane: {
    name: "Sugarcane",
    daysToYieldStart: 180,
    daysToHarvest: 365,
    soilTypes: ["Clay Loam", "Loamy", "Well-drained"],
    pesticides: ["Chlorpyrifos", "Imidacloprid", "Thiamethoxam", "Fipronil"],
    fertilizers: ["Urea (280 kg/ha)", "DAP (125 kg/ha)", "Potash (115 kg/ha)", "Zinc Sulphate (25 kg/ha)"],
    temperature: "20-35°C",
    rainfall: "1000-1500mm",
    tips: [
      "Plant setts with 2-3 buds at 30 cm spacing",
      "Maintain adequate moisture throughout growing season",
      "Apply fertilizers in multiple splits",
      "Harvest when cane reaches 12-18 months maturity"
    ]
  },
  onion: {
    name: "Onion",
    daysToYieldStart: 90,
    daysToHarvest: 120,
    soilTypes: ["Sandy Loam", "Loamy", "Clay Loam"],
    pesticides: ["Mancozeb", "Chlorothalonil", "Imidacloprid", "Thiamethoxam"],
    fertilizers: ["Urea (100 kg/ha)", "DAP (125 kg/ha)", "Potash (100 kg/ha)", "Sulphur (40 kg/ha)"],
    temperature: "15-25°C",
    rainfall: "400-600mm",
    tips: [
      "Transplant seedlings at 6-8 weeks old",
      "Maintain consistent soil moisture",
      "Stop irrigation 2-3 weeks before harvest",
      "Harvest when 50% of tops have fallen over"
    ]
  },
  cabbage: {
    name: "Cabbage",
    daysToYieldStart: 60,
    daysToHarvest: 80,
    soilTypes: ["Loamy", "Clay Loam", "Well-drained"],
    pesticides: ["Chlorpyrifos", "Imidacloprid", "Bacillus thuringiensis", "Spinosad"],
    fertilizers: ["Urea (120 kg/ha)", "DAP (100 kg/ha)", "Potash (80 kg/ha)", "Boron (2 kg/ha)"],
    temperature: "15-25°C",
    rainfall: "400-600mm",
    tips: [
      "Transplant seedlings at 4-6 leaf stage",
      "Maintain consistent moisture for head formation",
      "Monitor for cabbage worm and aphids",
      "Harvest when heads are firm and compact"
    ]
  }
};

export const CROP_OPTIONS = [
  { value: 'wheat', label: 'Wheat' },
  { value: 'rice', label: 'Rice' },
  { value: 'corn', label: 'Corn (Maize)' },
  { value: 'tomato', label: 'Tomato' },
  { value: 'potato', label: 'Potato' },
  { value: 'soybean', label: 'Soybean' },
  { value: 'cotton', label: 'Cotton' },
  { value: 'sugarcane', label: 'Sugarcane' },
  { value: 'onion', label: 'Onion' },
  { value: 'cabbage', label: 'Cabbage' }
];

export const getCropData = (cropType: string): CropData | null => {
  return CROP_DATA[cropType] || null;
};