/**
 * Solution Showcase Data — Curated from 575 Cerebra Ecosystem Scenarios
 *
 * ~30 proven solutions grouped into 12 industry verticals.
 * Each solution shows which Cerebra "Lego Blocks" compose it,
 * along with real business-value metrics from scenario testing.
 */

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type LegoBlock = {
  id: string;
  name: string;
  color: string;          // tailwind gradient pair
};

export type BusinessMetric = {
  value: string;
  label: { en: string; th: string };
};

export type ShowcaseSolution = {
  slug: string;
  title: { en: string; th: string };
  subtitle: { en: string; th: string };
  description: { en: string; th: string };
  industryGroup: string;  // key into industryGroups
  legoBlocks: LegoBlock[];
  businessValue: BusinessMetric[];
  highlightFeatures: { en: string; th: string }[];
  gradient: string;
};

export type IndustryGroup = {
  key: string;
  label: { en: string; th: string };
  icon: string;           // emoji
  color: string;          // tailwind accent
  solutionCount: number;  // total scenarios in this vertical
};

/* ------------------------------------------------------------------ */
/*  Lego Block Registry                                                */
/* ------------------------------------------------------------------ */

const L: Record<string, LegoBlock> = {
  ocr: { id: 'ocr', name: 'CerebraOCR', color: 'from-amber-400 to-orange-500' },
  lolm: { id: 'lolm', name: 'CerebraLoLM', color: 'from-violet-400 to-purple-600' },
  ml: { id: 'ml', name: 'CerebraML', color: 'from-emerald-400 to-teal-600' },
  cv: { id: 'cv', name: 'CerebraCV', color: 'from-sky-400 to-blue-600' },
  iot: { id: 'iot', name: 'CerebraIoT', color: 'from-lime-400 to-green-600' },
  edge: { id: 'edge', name: 'CerebraEdge', color: 'from-slate-400 to-zinc-600' },
  flow: { id: 'flow', name: 'CerebraFlow', color: 'from-pink-400 to-rose-600' },
  agent: { id: 'agent', name: 'CerebraAgent', color: 'from-cyan-400 to-blue-500' },
  forge: { id: 'forge', name: 'CerebraForge', color: 'from-orange-400 to-red-500' },
  spc: { id: 'spc', name: 'ChartSentinel', color: 'from-indigo-400 to-violet-600' },
  compliance: { id: 'compliance', name: 'CerebraCompliance', color: 'from-yellow-400 to-amber-600' },
  audit: { id: 'audit', name: 'CerebraAudit', color: 'from-stone-400 to-stone-600' },
  gateway: { id: 'gateway', name: 'CerebraGateway', color: 'from-teal-400 to-cyan-600' },
  aiops: { id: 'aiops', name: 'CerebraAIOps', color: 'from-red-400 to-rose-600' },
};

/* ------------------------------------------------------------------ */
/*  Industry Groups                                                    */
/* ------------------------------------------------------------------ */

export const industryGroups: IndustryGroup[] = [
  { key: 'all', label: { en: 'All Industries', th: 'ทุกอุตสาหกรรม' }, icon: '🌐', color: 'primary', solutionCount: 575 },
  { key: 'manufacturing', label: { en: 'Manufacturing', th: 'การผลิต' }, icon: '🏭', color: 'blue', solutionCount: 12 },
  { key: 'healthcare', label: { en: 'Healthcare', th: 'สุขภาพ' }, icon: '🏥', color: 'emerald', solutionCount: 10 },
  { key: 'retail', label: { en: 'Retail & E-commerce', th: 'ค้าปลีกและอีคอมเมิร์ซ' }, icon: '🛒', color: 'orange', solutionCount: 9 },
  { key: 'agriculture', label: { en: 'Agriculture', th: 'เกษตรกรรม' }, icon: '🌾', color: 'green', solutionCount: 5 },
  { key: 'food', label: { en: 'Food & Beverage', th: 'อาหารและเครื่องดื่ม' }, icon: '🍔', color: 'rose', solutionCount: 4 },
  { key: 'finance', label: { en: 'Financial Services', th: 'การเงิน' }, icon: '🏦', color: 'violet', solutionCount: 18 },
  { key: 'telecom', label: { en: 'Telecom', th: 'โทรคมนาคม' }, icon: '📡', color: 'cyan', solutionCount: 4 },
  { key: 'logistics', label: { en: 'Logistics', th: 'โลจิสติกส์' }, icon: '🚛', color: 'amber', solutionCount: 8 },
  { key: 'energy', label: { en: 'Energy & Utilities', th: 'พลังงาน' }, icon: '⚡', color: 'yellow', solutionCount: 6 },
  { key: 'construction', label: { en: 'Construction', th: 'การก่อสร้าง' }, icon: '🏗️', color: 'stone', solutionCount: 4 },
  { key: 'it', label: { en: 'IT Operations', th: 'ปฏิบัติการ IT' }, icon: '💻', color: 'indigo', solutionCount: 8 },
  { key: 'crossindustry', label: { en: 'Cross-Industry', th: 'ทุกอุตสาหกรรม' }, icon: '📄', color: 'slate', solutionCount: 49 },
];

/* ------------------------------------------------------------------ */
/*  Curated Solutions (~30)                                            */
/* ------------------------------------------------------------------ */

export const showcaseSolutions: ShowcaseSolution[] = [
  /* ── Manufacturing ───────────────────────────────────────────────── */
  {
    slug: 'smart-factory-twin',
    industryGroup: 'manufacturing',
    title: { en: 'Smart Factory Digital Twin', th: 'Digital Twin โรงงานอัจฉริยะ' },
    subtitle: { en: 'Industry 4.0 real-time factory replica', th: 'แบบจำลองโรงงานแบบเรียลไทม์ ระดับ Industry 4.0' },
    description: {
      en: 'Create a real-time digital replica of your factory floor with predictive maintenance, automated quality control, and production orchestration.',
      th: 'สร้างแบบจำลองดิจิทัลของโรงงานแบบเรียลไทม์ พร้อม predictive maintenance และควบคุมคุณภาพอัตโนมัติ',
    },
    legoBlocks: [L.iot, L.cv, L.ml, L.edge, L.spc, L.agent],
    businessValue: [
      { value: '-40%', label: { en: 'Unplanned downtime', th: 'ลดหยุดเครื่องฉุกเฉิน' } },
      { value: '+25%', label: { en: 'OEE improvement', th: 'เพิ่ม OEE' } },
      { value: '<100ms', label: { en: 'Twin sync', th: 'ความเร็ว sync' } },
    ],
    highlightFeatures: [
      { en: 'Real-time sensor-to-twin synchronisation', th: 'Sync เซ็นเซอร์-Twin แบบเรียลไทม์' },
      { en: 'ML-powered predictive maintenance', th: 'บำรุงรักษาเชิงคาดการณ์ด้วย ML' },
      { en: 'Closed-loop quality control with SPC', th: 'ควบคุมคุณภาพ closed-loop พร้อม SPC' },
    ],
    gradient: 'from-blue-500/15 to-cyan-500/15',
  },
  {
    slug: 'manufacturing-quality',
    industryGroup: 'manufacturing',
    title: { en: 'AI Quality Control', th: 'ควบคุมคุณภาพด้วย AI' },
    subtitle: { en: 'Automated visual inspection & SPC', th: 'ตรวจสอบด้วยภาพและ SPC อัตโนมัติ' },
    description: {
      en: 'Automate quality inspection using computer vision and statistical process control to catch defects early and reduce waste.',
      th: 'ตรวจสอบคุณภาพอัตโนมัติด้วย Computer Vision และ SPC เพื่อตรวจจับข้อบกพร่องเร็วและลดของเสีย',
    },
    legoBlocks: [L.cv, L.ml, L.spc, L.edge, L.flow],
    businessValue: [
      { value: '99.5%', label: { en: 'Detection accuracy', th: 'ความแม่นยำ' } },
      { value: '-60%', label: { en: 'Scrap rate', th: 'ลดของเสีย' } },
    ],
    highlightFeatures: [
      { en: 'Multi-camera defect detection', th: 'ตรวจจับข้อบกพร่องหลายกล้อง' },
      { en: 'SPC control charts & trend alerts', th: 'SPC control chart และแจ้งเตือนแนวโน้ม' },
      { en: 'Edge processing for line-speed QC', th: 'ประมวลผล Edge ทำงานเร็วทันสายการผลิต' },
    ],
    gradient: 'from-blue-500/15 to-indigo-500/15',
  },
  {
    slug: 'production-planning',
    industryGroup: 'manufacturing',
    title: { en: 'AI Production Planning', th: 'วางแผนการผลิตด้วย AI' },
    subtitle: { en: 'Demand-driven production scheduling', th: 'จัดตารางการผลิตตามอุปสงค์' },
    description: {
      en: 'Optimise production schedules using ML demand forecasting, resource availability, and constraint-based planning.',
      th: 'เพิ่มประสิทธิภาพตารางการผลิตด้วย ML พยากรณ์อุปสงค์และวางแผนตามข้อจำกัด',
    },
    legoBlocks: [L.ml, L.agent, L.flow, L.forge],
    businessValue: [
      { value: '+20%', label: { en: 'Throughput', th: 'เพิ่มกำลังผลิต' } },
      { value: '-35%', label: { en: 'Schedule changes', th: 'ลดแก้ตาราง' } },
    ],
    highlightFeatures: [
      { en: 'ML demand forecasting', th: 'พยากรณ์อุปสงค์ด้วย ML' },
      { en: 'Constraint-based scheduling', th: 'จัดตารางตามข้อจำกัด' },
      { en: 'Real-time resource rebalancing', th: 'ปรับสมดุลทรัพยากรเรียลไทม์' },
    ],
    gradient: 'from-sky-500/15 to-blue-500/15',
  },

  /* ── Healthcare ──────────────────────────────────────────────────── */
  {
    slug: 'remote-patient-monitoring',
    industryGroup: 'healthcare',
    title: { en: 'Remote Patient Monitoring', th: 'ติดตามผู้ป่วยทางไกล' },
    subtitle: { en: 'IoT-powered continuous health tracking', th: 'ติดตามสุขภาพต่อเนื่องด้วย IoT' },
    description: {
      en: 'Monitor patients remotely with IoT wearables, ML anomaly detection, and automated alerts to healthcare providers.',
      th: 'ติดตามผู้ป่วยทางไกลด้วย IoT wearable, ตรวจจับความผิดปกติด้วย ML และแจ้งเตือนแพทย์อัตโนมัติ',
    },
    legoBlocks: [L.iot, L.ml, L.agent, L.edge, L.flow],
    businessValue: [
      { value: '-50%', label: { en: 'ER visits', th: 'ลดฉุกเฉิน' } },
      { value: '24/7', label: { en: 'Monitoring', th: 'ติดตามตลอดเวลา' } },
    ],
    highlightFeatures: [
      { en: 'IoT vital sign monitoring', th: 'ติดตามสัญญาณชีพด้วย IoT' },
      { en: 'ML-based anomaly alerts', th: 'แจ้งเตือนความผิดปกติด้วย ML' },
      { en: 'Provider dashboard & mobile app', th: 'Dashboard และแอปสำหรับแพทย์' },
    ],
    gradient: 'from-emerald-500/15 to-green-500/15',
  },
  {
    slug: 'clinical-decision-support',
    industryGroup: 'healthcare',
    title: { en: 'Clinical Decision Support', th: 'ระบบสนับสนุนการตัดสินใจทางคลินิก' },
    subtitle: { en: 'AI-assisted diagnosis & treatment paths', th: 'AI ช่วยวินิจฉัยและวางแผนการรักษา' },
    description: {
      en: 'Assist clinicians with AI-powered diagnosis suggestions, treatment pathway recommendations, and evidence-based decision support.',
      th: 'ช่วยแพทย์ด้วย AI แนะนำการวินิจฉัย แนวทางการรักษา และการตัดสินใจตามหลักฐาน',
    },
    legoBlocks: [L.lolm, L.ml, L.forge, L.agent, L.compliance],
    businessValue: [
      { value: '+30%', label: { en: 'Diagnosis speed', th: 'วินิจฉัยเร็วขึ้น' } },
      { value: '95%', label: { en: 'Recommendation accuracy', th: 'ความแม่นยำคำแนะนำ' } },
    ],
    highlightFeatures: [
      { en: 'Medical knowledge base integration', th: 'เชื่อมต่อฐานความรู้แพทย์' },
      { en: 'Evidence-based recommendations', th: 'คำแนะนำตามหลักฐาน' },
      { en: 'Regulatory compliance checks', th: 'ตรวจสอบ compliance อัตโนมัติ' },
    ],
    gradient: 'from-emerald-500/15 to-teal-500/15',
  },

  /* ── Retail & E-commerce ─────────────────────────────────────────── */
  {
    slug: 'retail-inventory',
    industryGroup: 'retail',
    title: { en: 'Retail Inventory Optimization', th: 'เพิ่มประสิทธิภาพสินค้าคงคลัง' },
    subtitle: { en: 'AI demand forecasting & auto-replenishment', th: 'พยากรณ์อุปสงค์และเติมสินค้าอัตโนมัติ' },
    description: {
      en: 'Reduce stockouts and overstock with ML demand forecasting, IoT shelf sensors, and automated PO generation.',
      th: 'ลดสินค้าขาดและสินค้าเกินด้วย ML พยากรณ์อุปสงค์ เซ็นเซอร์ชั้นวาง IoT และสร้าง PO อัตโนมัติ',
    },
    legoBlocks: [L.ml, L.iot, L.cv, L.agent, L.forge],
    businessValue: [
      { value: '-40%', label: { en: 'Stockouts', th: 'ลดสินค้าขาด' } },
      { value: '-30%', label: { en: 'Overstock', th: 'ลดสินค้าเกิน' } },
    ],
    highlightFeatures: [
      { en: 'AI demand forecasting by SKU/store', th: 'พยากรณ์อุปสงค์รายสินค้า/สาขา' },
      { en: 'CV-based shelf monitoring', th: 'ตรวจสอบชั้นวางด้วย CV' },
      { en: 'Auto-generated purchase orders', th: 'สร้าง PO อัตโนมัติ' },
    ],
    gradient: 'from-orange-500/15 to-amber-500/15',
  },
  {
    slug: 'personalized-marketing',
    industryGroup: 'retail',
    title: { en: 'Personalized Marketing AI', th: 'การตลาดเฉพาะบุคคลด้วย AI' },
    subtitle: { en: 'Customer segmentation & targeting', th: 'แบ่งกลุ่มลูกค้าและกำหนดเป้า' },
    description: {
      en: 'Deliver hyper-personalized campaigns using ML customer segmentation, behavioral analysis, and real-time recommendation engines.',
      th: 'สร้างแคมเปญเฉพาะบุคคลด้วย ML แบ่งกลุ่มลูกค้า วิเคราะห์พฤติกรรม และระบบแนะนำเรียลไทม์',
    },
    legoBlocks: [L.ml, L.lolm, L.forge, L.agent, L.flow],
    businessValue: [
      { value: '+35%', label: { en: 'Conversion rate', th: 'เพิ่ม conversion' } },
      { value: '+50%', label: { en: 'Engagement', th: 'เพิ่ม engagement' } },
    ],
    highlightFeatures: [
      { en: 'ML customer segmentation', th: 'แบ่งกลุ่มลูกค้าด้วย ML' },
      { en: 'Real-time product recommendations', th: 'แนะนำสินค้าเรียลไทม์' },
      { en: 'Multi-channel campaign automation', th: 'แคมเปญอัตโนมัติหลายช่องทาง' },
    ],
    gradient: 'from-orange-500/15 to-rose-500/15',
  },

  /* ── Agriculture ─────────────────────────────────────────────────── */
  {
    slug: 'smart-agriculture',
    industryGroup: 'agriculture',
    title: { en: 'Smart Agriculture', th: 'เกษตรอัจฉริยะ' },
    subtitle: { en: 'Precision farming with AI & IoT', th: 'เกษตรแม่นยำด้วย AI และ IoT' },
    description: {
      en: 'Monitor crops, soil, and weather; automate irrigation; detect diseases; predict yields — all from a single platform.',
      th: 'ติดตามพืช ดิน สภาพอากาศ ให้น้ำอัตโนมัติ ตรวจจับโรค พยากรณ์ผลผลิต — ทั้งหมดบนแพลตฟอร์มเดียว',
    },
    legoBlocks: [L.iot, L.cv, L.ml, L.edge, L.lolm, L.spc],
    businessValue: [
      { value: '+25%', label: { en: 'Yield increase', th: 'เพิ่มผลผลิต' } },
      { value: '-30%', label: { en: 'Water usage', th: 'ลดการใช้น้ำ' } },
      { value: 'Early', label: { en: 'Disease detection', th: 'ตรวจพบโรคเร็ว' } },
    ],
    highlightFeatures: [
      { en: 'Soil & weather IoT monitoring', th: 'ติดตามดินและสภาพอากาศด้วย IoT' },
      { en: 'Drone-based crop health assessment', th: 'ประเมินสุขภาพพืชด้วยโดรน' },
      { en: 'Automated precision irrigation', th: 'ให้น้ำอัตโนมัติแบบแม่นยำ' },
    ],
    gradient: 'from-green-500/15 to-emerald-500/15',
  },
  {
    slug: 'vertical-farming',
    industryGroup: 'agriculture',
    title: { en: 'Vertical Farming AI', th: 'ฟาร์มแนวตั้งอัจฉริยะ' },
    subtitle: { en: 'Controlled environment agriculture', th: 'เกษตรแบบควบคุมสภาพแวดล้อม' },
    description: {
      en: 'Optimise vertical farm environments using IoT climate control, CV plant health monitoring, and ML growth prediction.',
      th: 'เพิ่มประสิทธิภาพฟาร์มแนวตั้งด้วย IoT ควบคุมสภาพอากาศ CV ตรวจสุขภาพพืช และ ML พยากรณ์การเจริญเติบโต',
    },
    legoBlocks: [L.iot, L.cv, L.ml, L.edge, L.agent],
    businessValue: [
      { value: '-90%', label: { en: 'Water vs open field', th: 'ลดน้ำเทียบกลางแจ้ง' } },
      { value: '+40%', label: { en: 'Yield per m²', th: 'เพิ่มผลผลิตต่อ m²' } },
    ],
    highlightFeatures: [
      { en: 'IoT climate & nutrient control', th: 'ควบคุมสภาพอากาศและสารอาหารด้วย IoT' },
      { en: 'CV plant health assessment', th: 'ตรวจสุขภาพพืชด้วย CV' },
      { en: 'ML growth cycle optimisation', th: 'เพิ่มประสิทธิภาพรอบการเจริญเติบโตด้วย ML' },
    ],
    gradient: 'from-lime-500/15 to-green-500/15',
  },

  /* ── Food & Beverage ─────────────────────────────────────────────── */
  {
    slug: 'food-safety-traceability',
    industryGroup: 'food',
    title: { en: 'Food Safety Traceability', th: 'ตรวจสอบย้อนกลับความปลอดภัยอาหาร' },
    subtitle: { en: 'Farm-to-table tracking & compliance', th: 'ติดตามจากฟาร์มถึงโต๊ะอาหาร' },
    description: {
      en: 'Track food from farm to table with IoT cold-chain monitoring, AI contamination detection, automated recall workflows, and compliance reporting.',
      th: 'ติดตามอาหารจากฟาร์มถึงโต๊ะ ด้วย IoT ควบคุมความเย็น AI ตรวจจับการปนเปื้อน ระบบเรียกคืนอัตโนมัติ',
    },
    legoBlocks: [L.iot, L.cv, L.ml, L.ocr, L.compliance, L.agent],
    businessValue: [
      { value: '90%', label: { en: 'Faster recalls', th: 'เรียกคืนเร็วขึ้น' } },
      { value: '100%', label: { en: 'FSMA/HACCP', th: 'ผ่าน FSMA/HACCP' } },
      { value: 'QR', label: { en: 'Consumer traceability', th: 'ผู้บริโภคตรวจสอบได้' } },
    ],
    highlightFeatures: [
      { en: 'End-to-end supply chain traceability', th: 'ติดตาม supply chain ตั้งแต่ต้นจนจบ' },
      { en: 'Continuous cold-chain monitoring', th: 'ติดตามอุณหภูมิ cold chain ตลอดเวลา' },
      { en: 'Automated recall workflow', th: 'ระบบเรียกคืนอัตโนมัติ' },
    ],
    gradient: 'from-rose-500/15 to-pink-500/15',
  },

  /* ── Financial Services ──────────────────────────────────────────── */
  {
    slug: 'insurance-claims',
    industryGroup: 'finance',
    title: { en: 'Insurance Claims Automation', th: 'อัตโนมัติสำหรับเคลมประกัน' },
    subtitle: { en: 'AI-powered claims lifecycle', th: 'จัดการวงจรเคลมด้วย AI' },
    description: {
      en: 'Automate the entire claims lifecycle — submission, damage assessment, fraud detection, policy verification, and settlement — with 70% faster processing.',
      th: 'ทำให้วงจรเคลมเป็นอัตโนมัติ ตั้งแต่ยื่นเรื่อง ประเมินความเสียหาย ตรวจจับทุจริต จนถึงการจ่ายชดเชย — เร็วขึ้น 70%',
    },
    legoBlocks: [L.ocr, L.cv, L.lolm, L.ml, L.flow, L.agent],
    businessValue: [
      { value: '70%', label: { en: 'Faster processing', th: 'ลดเวลาประมวลผล' } },
      { value: '95%', label: { en: 'Fraud detection', th: 'ตรวจจับทุจริต' } },
      { value: '-50%', label: { en: 'Operational costs', th: 'ลดค่าดำเนินการ' } },
    ],
    highlightFeatures: [
      { en: 'AI-based damage assessment from photos', th: 'ประเมินความเสียหายจากรูปภาพด้วย AI' },
      { en: 'ML fraud detection with 95% accuracy', th: 'ตรวจจับทุจริตด้วย ML แม่นยำ 95%' },
      { en: 'Automated approval & settlement workflow', th: 'อนุมัติและจ่ายชดเชยอัตโนมัติ' },
    ],
    gradient: 'from-purple-500/15 to-violet-500/15',
  },
  {
    slug: 'portfolio-optimization',
    industryGroup: 'finance',
    title: { en: 'Portfolio Optimization', th: 'เพิ่มประสิทธิภาพพอร์ตการลงทุน' },
    subtitle: { en: 'ML-driven asset allocation', th: 'จัดสรรสินทรัพย์ด้วย ML' },
    description: {
      en: 'Optimise investment portfolios using ML-based risk modelling, market signal analysis, and constraint-aware allocation strategies.',
      th: 'เพิ่มประสิทธิภาพพอร์ตลงทุนด้วย ML วิเคราะห์ความเสี่ยง สัญญาณตลาด และจัดสรรตามข้อจำกัด',
    },
    legoBlocks: [L.ml, L.lolm, L.forge, L.agent, L.compliance],
    businessValue: [
      { value: '+12%', label: { en: 'Risk-adjusted return', th: 'เพิ่มผลตอบแทน' } },
      { value: 'Real-time', label: { en: 'Market analysis', th: 'วิเคราะห์ตลาดเรียลไทม์' } },
    ],
    highlightFeatures: [
      { en: 'ML risk modelling & forecasting', th: 'โมเดลความเสี่ยงและพยากรณ์ด้วย ML' },
      { en: 'Real-time market signal analysis', th: 'วิเคราะห์สัญญาณตลาดเรียลไทม์' },
      { en: 'Regulatory compliance checks', th: 'ตรวจสอบ compliance อัตโนมัติ' },
    ],
    gradient: 'from-violet-500/15 to-purple-500/15',
  },

  /* ── Telecom ─────────────────────────────────────────────────────── */
  {
    slug: 'telecom-network',
    industryGroup: 'telecom',
    title: { en: 'Telecom Network Optimization', th: 'เพิ่มประสิทธิภาพเครือข่ายโทรคมนาคม' },
    subtitle: { en: 'AI-driven network planning & healing', th: 'วางแผนและซ่อมเครือข่ายด้วย AI' },
    description: {
      en: 'Optimise telecom network performance using ML traffic prediction, anomaly detection, automated capacity planning, and self-healing capabilities.',
      th: 'เพิ่มประสิทธิภาพเครือข่ายด้วย ML พยากรณ์ traffic ตรวจจับความผิดปกติ วางแผนความจุ และ self-healing',
    },
    legoBlocks: [L.ml, L.iot, L.aiops, L.agent, L.flow],
    businessValue: [
      { value: '-35%', label: { en: 'Network incidents', th: 'ลดเหตุการณ์เครือข่าย' } },
      { value: '+20%', label: { en: 'Capacity utilisation', th: 'เพิ่มใช้งานความจุ' } },
    ],
    highlightFeatures: [
      { en: 'ML traffic prediction', th: 'พยากรณ์ traffic ด้วย ML' },
      { en: 'AIOps self-healing', th: 'AIOps ซ่อมตัวเองอัตโนมัติ' },
      { en: 'Automated capacity planning', th: 'วางแผนความจุอัตโนมัติ' },
    ],
    gradient: 'from-cyan-500/15 to-sky-500/15',
  },
  {
    slug: 'churn-prediction',
    industryGroup: 'telecom',
    title: { en: 'Customer Churn Prediction', th: 'พยากรณ์ลูกค้าจะยกเลิก' },
    subtitle: { en: 'ML-powered retention analytics', th: 'วิเคราะห์การรักษาลูกค้าด้วย ML' },
    description: {
      en: 'Predict and prevent customer churn using ML behavioural analytics, sentiment analysis, and personalised retention campaigns.',
      th: 'พยากรณ์และป้องกันลูกค้ายกเลิกด้วย ML วิเคราะห์พฤติกรรม วิเคราะห์ sentiment และแคมเปญเฉพาะบุคคล',
    },
    legoBlocks: [L.ml, L.lolm, L.forge, L.agent, L.flow],
    businessValue: [
      { value: '-25%', label: { en: 'Churn rate', th: 'ลด churn rate' } },
      { value: '+15%', label: { en: 'Retention ROI', th: 'ROI การรักษาลูกค้า' } },
    ],
    highlightFeatures: [
      { en: 'ML behavioural churn signals', th: 'สัญญาณ churn จากพฤติกรรมด้วย ML' },
      { en: 'NLP sentiment analysis', th: 'วิเคราะห์ sentiment ด้วย NLP' },
      { en: 'Automated retention campaigns', th: 'แคมเปญรักษาลูกค้าอัตโนมัติ' },
    ],
    gradient: 'from-cyan-500/15 to-teal-500/15',
  },

  /* ── Logistics & Supply Chain ────────────────────────────────────── */
  {
    slug: 'fleet-management',
    industryGroup: 'logistics',
    title: { en: 'Smart Fleet Management', th: 'จัดการกองยานอัจฉริยะ' },
    subtitle: { en: 'AI-powered fleet & route optimisation', th: 'เพิ่มประสิทธิภาพกองยานด้วย AI' },
    description: {
      en: 'Optimise fleet operations using IoT vehicle tracking, ML route optimisation, driver behaviour analysis, and predictive maintenance.',
      th: 'เพิ่มประสิทธิภาพกองยานด้วย IoT ติดตามยานพาหนะ ML วางเส้นทาง วิเคราะห์พฤติกรรมคนขับ และ predictive maintenance',
    },
    legoBlocks: [L.iot, L.ml, L.agent, L.edge, L.flow],
    businessValue: [
      { value: '-20%', label: { en: 'Fuel costs', th: 'ลดค่าเชื้อเพลิง' } },
      { value: '+15%', label: { en: 'On-time delivery', th: 'เพิ่มส่งตรงเวลา' } },
    ],
    highlightFeatures: [
      { en: 'IoT real-time vehicle tracking', th: 'ติดตามยานพาหนะเรียลไทม์ด้วย IoT' },
      { en: 'ML route optimisation', th: 'วางเส้นทางเพิ่มประสิทธิภาพด้วย ML' },
      { en: 'Predictive vehicle maintenance', th: 'บำรุงรักษายานพาหนะเชิงคาดการณ์' },
    ],
    gradient: 'from-amber-500/15 to-yellow-500/15',
  },
  {
    slug: 'supply-chain-risk',
    industryGroup: 'logistics',
    title: { en: 'Supply Chain Risk Management', th: 'บริหารความเสี่ยง Supply Chain' },
    subtitle: { en: 'Predictive disruption detection', th: 'ตรวจจับ disruption เชิงคาดการณ์' },
    description: {
      en: 'Monitor global supply chain risks using ML disruption prediction, multi-source intelligence, and automated contingency planning.',
      th: 'ติดตามความเสี่ยง supply chain ทั่วโลกด้วย ML พยากรณ์ disruption และวางแผนฉุกเฉินอัตโนมัติ',
    },
    legoBlocks: [L.ml, L.lolm, L.forge, L.agent, L.flow],
    businessValue: [
      { value: '-45%', label: { en: 'Disruption impact', th: 'ลดผลกระทบ disruption' } },
      { value: '72h', label: { en: 'Early warning', th: 'แจ้งเตือนล่วงหน้า' } },
    ],
    highlightFeatures: [
      { en: 'ML disruption prediction', th: 'พยากรณ์ disruption ด้วย ML' },
      { en: 'Multi-source risk intelligence', th: 'ข่าวกรองความเสี่ยงจากหลายแหล่ง' },
      { en: 'Automated contingency planning', th: 'วางแผนฉุกเฉินอัตโนมัติ' },
    ],
    gradient: 'from-amber-500/15 to-orange-500/15',
  },

  /* ── Energy & Utilities ──────────────────────────────────────────── */
  {
    slug: 'grid-management',
    industryGroup: 'energy',
    title: { en: 'Smart Grid Management', th: 'ระบบจัดการ Smart Grid' },
    subtitle: { en: 'AI-powered energy grid optimisation', th: 'เพิ่มประสิทธิภาพ grid ด้วย AI' },
    description: {
      en: 'Optimise energy grid operations with ML demand forecasting, fault detection, load balancing, and renewable integration.',
      th: 'เพิ่มประสิทธิภาพ grid ด้วย ML พยากรณ์ความต้องการ ตรวจจับความผิดพลาด สมดุล load และรวมพลังงานหมุนเวียน',
    },
    legoBlocks: [L.iot, L.ml, L.edge, L.agent, L.flow],
    businessValue: [
      { value: '-15%', label: { en: 'Energy waste', th: 'ลดพลังงานสูญเปล่า' } },
      { value: '+30%', label: { en: 'Renewable usage', th: 'เพิ่มใช้พลังงานหมุนเวียน' } },
    ],
    highlightFeatures: [
      { en: 'ML demand forecasting', th: 'พยากรณ์ความต้องการด้วย ML' },
      { en: 'IoT fault detection on grid', th: 'ตรวจจับความผิดพลาดบน grid ด้วย IoT' },
      { en: 'Renewable energy integration', th: 'รวมพลังงานหมุนเวียนเข้าระบบ' },
    ],
    gradient: 'from-yellow-500/15 to-amber-500/15',
  },

  /* ── Construction ────────────────────────────────────────────────── */
  {
    slug: 'construction-safety',
    industryGroup: 'construction',
    title: { en: 'Construction Safety Monitoring', th: 'ตรวจสอบความปลอดภัยไซต์ก่อสร้าง' },
    subtitle: { en: 'CV & IoT-powered site safety', th: 'ความปลอดภัยไซต์ด้วย CV และ IoT' },
    description: {
      en: 'Monitor construction site safety using CV-powered PPE detection, IoT hazard sensors, and automated safety alert systems.',
      th: 'ติดตามความปลอดภัยไซต์ก่อสร้างด้วย CV ตรวจจับ PPE เซ็นเซอร์อันตราย IoT และระบบแจ้งเตือนอัตโนมัติ',
    },
    legoBlocks: [L.cv, L.iot, L.ml, L.edge, L.agent],
    businessValue: [
      { value: '-60%', label: { en: 'Safety incidents', th: 'ลดเหตุการณ์อันตราย' } },
      { value: '24/7', label: { en: 'Site monitoring', th: 'ติดตามตลอดเวลา' } },
    ],
    highlightFeatures: [
      { en: 'CV PPE & hazard detection', th: 'ตรวจจับ PPE และอันตรายด้วย CV' },
      { en: 'IoT environmental sensors', th: 'เซ็นเซอร์สิ่งแวดล้อม IoT' },
      { en: 'Automated safety alerts', th: 'แจ้งเตือนความปลอดภัยอัตโนมัติ' },
    ],
    gradient: 'from-stone-500/15 to-zinc-500/15',
  },

  /* ── IT Operations ───────────────────────────────────────────────── */
  {
    slug: 'it-service-desk',
    industryGroup: 'it',
    title: { en: 'AI IT Service Desk', th: 'IT Service Desk อัจฉริยะ' },
    subtitle: { en: 'Autonomous IT support & resolution', th: 'แก้ปัญหา IT อัตโนมัติ' },
    description: {
      en: 'AI-powered service desk that understands tickets in natural language, auto-categorises them, suggests solutions, and resolves common issues autonomously.',
      th: 'Service Desk ขับเคลื่อนด้วย AI เข้าใจ ticket ด้วยภาษาธรรมชาติ จัดหมวดหมู่ แนะนำวิธีแก้ และแก้ปัญหาทั่วไปเองได้',
    },
    legoBlocks: [L.lolm, L.agent, L.flow, L.ml, L.forge],
    businessValue: [
      { value: '60%', label: { en: 'Auto-resolved', th: 'แก้อัตโนมัติ' } },
      { value: '-45%', label: { en: 'Resolution time', th: 'ลดเวลาแก้ปัญหา' } },
      { value: '24/7', label: { en: 'Always-on support', th: 'ให้บริการตลอดเวลา' } },
    ],
    highlightFeatures: [
      { en: 'Natural language ticket understanding', th: 'เข้าใจ ticket ด้วยภาษาธรรมชาติ' },
      { en: 'Auto-categorisation & smart routing', th: 'จัดหมวดหมู่และส่งต่ออัจฉริยะ' },
      { en: 'KB-powered solution suggestions', th: 'แนะนำวิธีแก้จาก knowledge base' },
    ],
    gradient: 'from-indigo-500/15 to-blue-500/15',
  },
  {
    slug: 'incident-response',
    industryGroup: 'it',
    title: { en: 'Incident Response System', th: 'ระบบตอบสนองเหตุการณ์' },
    subtitle: { en: 'AI-accelerated incident management', th: 'จัดการเหตุการณ์ด้วย AI' },
    description: {
      en: 'Detect, triage, and resolve incidents faster with ML anomaly detection, automated runbook execution, and intelligent escalation.',
      th: 'ตรวจจับ คัดแยก และแก้ไขเหตุการณ์เร็วขึ้นด้วย ML ตรวจจับความผิดปกติ รัน runbook อัตโนมัติ และ escalation อัจฉริยะ',
    },
    legoBlocks: [L.ml, L.aiops, L.agent, L.flow, L.lolm],
    businessValue: [
      { value: '-65%', label: { en: 'MTTR', th: 'ลด MTTR' } },
      { value: '+40%', label: { en: 'Auto-remediation', th: 'แก้ไขอัตโนมัติ' } },
    ],
    highlightFeatures: [
      { en: 'ML anomaly detection', th: 'ตรวจจับความผิดปกติด้วย ML' },
      { en: 'Automated runbook execution', th: 'รัน runbook อัตโนมัติ' },
      { en: 'Intelligent escalation routing', th: 'Escalation routing อัจฉริยะ' },
    ],
    gradient: 'from-indigo-500/15 to-violet-500/15',
  },

  /* ── Cross-Industry ──────────────────────────────────────────────── */
  {
    slug: 'intelligent-invoice',
    industryGroup: 'crossindustry',
    title: { en: 'Intelligent Invoice Processing', th: 'ประมวลผลใบแจ้งหนี้อัจฉริยะ' },
    subtitle: { en: 'End-to-end automated invoicing', th: 'ระบบอัตโนมัติครบวงจรสำหรับใบแจ้งหนี้' },
    description: {
      en: 'Automate invoice ingestion, extraction, validation, anomaly detection, and ERP posting — reducing manual processing by 90%.',
      th: 'รับเข้า ดึงข้อมูล ตรวจสอบ ตรวจจับความผิดปกติ และส่งเข้า ERP อัตโนมัติ — ลดงาน manual 90%',
    },
    legoBlocks: [L.ocr, L.lolm, L.ml, L.flow, L.agent],
    businessValue: [
      { value: '90%', label: { en: 'Less manual work', th: 'ลดงาน manual' } },
      { value: '0', label: { en: 'Data entry errors', th: 'ข้อผิดพลาดกรอกข้อมูล' } },
      { value: '24/7', label: { en: 'Processing uptime', th: 'ทำงานตลอดเวลา' } },
    ],
    highlightFeatures: [
      { en: 'Multi-format support (PDF, image, email)', th: 'รองรับหลายรูปแบบ' },
      { en: 'ML anomaly & fraud detection', th: 'ตรวจจับความผิดปกติด้วย ML' },
      { en: 'Seamless ERP integration', th: 'เชื่อมต่อ ERP ได้ทันที' },
    ],
    gradient: 'from-amber-500/15 to-orange-500/15',
  },
  {
    slug: 'document-management',
    industryGroup: 'crossindustry',
    title: { en: 'Intelligent Document Management', th: 'จัดการเอกสารอัจฉริยะ' },
    subtitle: { en: 'AI-powered document lifecycle', th: 'วงจรชีวิตเอกสารด้วย AI' },
    description: {
      en: 'Capture, classify, extract, and search documents intelligently using OCR, NLP, and RAG-powered knowledge retrieval.',
      th: 'จับภาพ จัดหมวดหมู่ ดึงข้อมูล และค้นหาเอกสารอัจฉริยะด้วย OCR, NLP และ RAG',
    },
    legoBlocks: [L.ocr, L.lolm, L.forge, L.ml, L.flow],
    businessValue: [
      { value: '-70%', label: { en: 'Search time', th: 'ลดเวลาค้นหา' } },
      { value: '+80%', label: { en: 'Data accuracy', th: 'เพิ่มความถูกต้อง' } },
    ],
    highlightFeatures: [
      { en: 'OCR + NLP document extraction', th: 'ดึงข้อมูลเอกสารด้วย OCR + NLP' },
      { en: 'RAG-powered semantic search', th: 'ค้นหาเชิงความหมายด้วย RAG' },
      { en: 'Automated classification & routing', th: 'จัดหมวดหมู่และส่งต่ออัตโนมัติ' },
    ],
    gradient: 'from-slate-500/15 to-zinc-500/15',
  },
  {
    slug: 'workflow-automation',
    industryGroup: 'crossindustry',
    title: { en: 'AI Workflow Automation', th: 'อัตโนมัติ Workflow ด้วย AI' },
    subtitle: { en: 'Intelligent process orchestration', th: 'จัดการกระบวนการอัจฉริยะ' },
    description: {
      en: 'Design and run intelligent workflows that combine human tasks with AI-powered decision points, approvals, and automated actions.',
      th: 'ออกแบบและรัน workflow อัจฉริยะที่รวมงานคนกับ AI ในการตัดสินใจ อนุมัติ และดำเนินการอัตโนมัติ',
    },
    legoBlocks: [L.flow, L.agent, L.lolm, L.ml, L.forge],
    businessValue: [
      { value: '-55%', label: { en: 'Process time', th: 'ลดเวลากระบวนการ' } },
      { value: '+40%', label: { en: 'Throughput', th: 'เพิ่มปริมาณงาน' } },
    ],
    highlightFeatures: [
      { en: 'Visual workflow builder', th: 'สร้าง workflow แบบ visual' },
      { en: 'AI decision points', th: 'จุดตัดสินใจด้วย AI' },
      { en: 'Human-in-the-loop approvals', th: 'การอนุมัติโดยคน' },
    ],
    gradient: 'from-gray-500/15 to-slate-500/15',
  },
];

/* ------------------------------------------------------------------ */
/*  Helper Functions                                                   */
/* ------------------------------------------------------------------ */

export function getFilteredSolutions(groupKey: string): ShowcaseSolution[] {
  if (groupKey === 'all') return showcaseSolutions;
  return showcaseSolutions.filter(s => s.industryGroup === groupKey);
}

export function getIndustryGroup(key: string): IndustryGroup | undefined {
  return industryGroups.find(g => g.key === key);
}
