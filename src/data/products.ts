

// Re-export interfaces:
export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: 'consumer' | 'agtech' | 'edtech' | 'deeptech';
  industries: string[];
  external?: boolean; // Mark external products
  externalUrl?: string; // External URL if external
  hero: {
    gradient: string;
    visualType: 'image' | 'video' | 'animation';
    visualSrc?: string;
  };
  features: Feature[];
  howItWorks?: {
    title: string;
    description: string;
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
  techStack: string[];
  pricing: PricingConfig;
  faq: FAQItem[];
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface PricingConfig {
  model: 'token' | 'subscription' | 'usage' | 'hardware' | 'license';
  tiers: PricingTier[];
}

export interface PricingTier {
  name: string;
  price: number | string;
  period?: string;
  features: string[];
  highlighted?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const products: Product[] = [
  {
    slug: 'phitiai',
    name: 'Phitiai',
    tagline: 'AI Marketplace งานประเพณี',
    category: 'consumer',
    industries: ['culture', 'events'],
    external: true,
    externalUrl: 'https://www.phithiai.com',
    hero: {
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      visualType: 'animation',
    },
    howItWorks: {
      title: 'How Phitiai Works',
      description: 'สร้างการ์ดอวยพรในไม่กี่วินาที',
      steps: [
        { step: 1, title: 'เลือกเทศกาล', description: 'เลือกเทศกาลที่ต้องการ' },
        { step: 2, title: 'ใส่ข้อความ', description: 'พิมพ์คำอวยพรที่ต้องการ' },
        { step: 3, title: 'AI สร้างการ์ด', description: 'รอ AI สร้างการ์ดให้' },
        { step: 4, title: 'ดาวน์โหลด', description: 'ดาวน์โหลดการ์ดที่สำเร็จ' },
      ],
    },
    features: [
      {
        title: 'AI Card Generator',
        description: 'สร้างการ์ดอวยพรใน 3 วินาที',
        icon: 'Sparkles',
      },
      {
        title: 'Event Planner',
        description: 'ผู้ช่วยวางแผนงานบุญ คำนวณฤกษ์ยามด้วย AI',
        icon: 'Calendar',
      },
      {
        title: 'Marketplace',
        description: 'ซื้อ-ขาย Prompt สำหรับงานประเพณี',
        icon: 'ShoppingBag',
      },
    ],
    techStack: ['Next.js', 'OpenAI', 'PostgreSQL', 'Redis', 'LINE'],
    pricing: {
      model: 'token',
      tiers: [
        { name: 'Free', price: 0, features: ['5 cards/month', 'Watermark'] },
        { name: 'Standard', price: 99, period: '/เดือน', features: ['50 cards', 'No watermark', 'Priority'] },
        { name: 'Premium', price: 299, period: '/เดือน', features: ['Unlimited', 'AI Avatar', 'API Access'], highlighted: true },
      ],
    },
    faq: [
      { question: 'Phitiai ใช้งานอย่างไร?', answer: 'เพียงเลือกเทศกาล กรอกชื่อผู้รับ และรอ AI สร้างการ์ดให้ในไม่กี่วินาที' },
      { question: 'รองรับเทศกาลอะไรบ้าง?', answer: 'รองรับทุกเทศกาลไทย ทั้งสงกรานต์ ลอยกระทง ปีใหม่ และงานบุญทั่วไป' },
    ],
  },
  {
    slug: 'sookwai',
    name: 'Sookwai',
    tagline: 'Wellness Platform ผู้สูงอายุ',
    category: 'consumer',
    industries: ['healthcare', 'senior-care'],
    external: true,
    externalUrl: 'https://www.sookwei.com',
    hero: {
      gradient: 'from-teal-500 via-cyan-500 to-blue-500',
      visualType: 'image',
    },
    howItWorks: {
      title: 'How Sookwai Works',
      description: 'เริ่มต้นใช้งานได้ภายในไม่กี่วินาที',
      steps: [
        { step: 1, title: 'สมัครสมาชิก', description: 'ลงทะเบียนและเริ่มใช้งานได้ทันที' },
        { step: 2, title: 'ติดตั้งอุปกรณ์', description: 'ตั้งค่า IoT และการแจ้งเตือน' },
        { step: 3, title: 'เชื่อมต่อ', description: 'ผู้สูงอายุเชื่อมต่อกับครอบครัวและแพทย์' },
        { step: 4, title: 'ดูแล', description: 'ครอบครัวและแพทย์ดูแลสุขภาพตลอดเวลา' },
      ],
    },
    features: [
      {
        title: 'Smart Billing',
        description: 'ระบบสมาชิกอัตโนมัติ พร้อม Trial และ Grace Period',
        icon: 'CreditCard',
      },
      {
        title: 'PDPA Compliant',
        description: 'ระบบ Audit Log 100% และความปลอดภัยระดับธนาคาร',
        icon: 'Shield',
      },
      {
        title: 'Care Circle',
        description: 'เชื่อมต่อผู้สูงอายุกับครอบครัวและผู้ดูแล',
        icon: 'Heart',
      },
    ],
    techStack: ['Next.js 14', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    pricing: {
      model: 'subscription',
      tiers: [
        { name: 'Family', price: 399, period: '/เดือน', features: ['1 ผู้สูงอายุ', 'สมาชิกครอบครัว 5 คน', 'Fall Detection'] },
        { name: 'Business', price: 'Custom', features: ['Per-bed pricing', 'Dashboard', 'API Access'], highlighted: true },
      ],
    },
    faq: [
      { question: 'Sookwai ปลอดภัยหรือไม่?', answer: 'ใช่ เราใช้มาตรฐาน PDPA และระบบ Audit Log 100% เพื่อความปลอดภัยระดับธนาคาร' },
      { question: 'สามารถเชื่อมต่อกับอุปกรณ์ IoT ได้ไหม?', answer: 'ใช่ รองรับอุปกรณ์ IoT สำหรับตรวจจับการล้มและติดตามสุขภาพ' },
    ],
  },
  {
    slug: 'pluktunraka',
    name: 'ปลูกทันราคา',
    tagline: 'วางแผนปลูกพืชด้วย AI',
    category: 'agtech',
    industries: ['agriculture', 'farming'],
    external: true,
    externalUrl: 'https://www.pluktunraka.com',
    hero: {
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      visualType: 'image',
    },
    howItWorks: {
      title: 'How ปลูกทันราคา Works',
      description: 'วางแผนย้อนหลังด้วย AI',
      steps: [
        { step: 1, title: 'เลือกจังหวัด', description: 'เลือกจังหวัดที่ต้องการปลูก' },
        { step: 2, title: 'ตรวจสอบราคา', description: 'ดูราคาพืชที่คาดว่าจะไปทิศทะไร' },
        { step: 3, title: 'วิเคราะห์', description: 'วิเคราะห์ต้นทุนและกำได้' },
        { step: 4, title: 'ปลูก', description: 'เริ่มปลูกตามแผนที่เหมาะสมกับสภาพ' },
      ],
    },
    features: [
      {
        title: 'Price Prediction',
        description: 'พยากรณ์ราคาพืชล่วงหน้า 3-6 เดือน',
        icon: 'BarChart',
      },
      {
        title: 'Crop Recommendation',
        description: 'แนะนำพืชที่เหมาะสมกับสภาพดินและฤดูกาล',
        icon: 'Leaf',
      },
      {
        title: 'Market Analysis',
        description: 'วิเคราะห์ตลาดและแนวโน้มราคา',
        icon: 'Brain',
      },
    ],
    techStack: ['Python', 'TensorFlow', 'PostgreSQL', 'FastAPI', 'React Native'],
    pricing: {
      model: 'subscription',
      tiers: [
        { name: 'Farmer', price: 299, period: '/เดือน', features: ['1 plot', 'Basic predictions', 'Weather data'] },
        { name: 'Cooperative', price: 999, period: '/เดือน', features: ['10 plots', 'Advanced analytics', 'API Access'], highlighted: true },
        { name: 'Enterprise', price: 'Custom', features: ['Unlimited plots', 'White-label', 'Custom models'] },
      ],
    },
    faq: [
      { question: 'ความแม่นยำของการพยากรณ์ราคา?', answer: 'ความแม่นยำเฉลี่ย 85-90% ขึ้นอยู่กับประเภทพืชและข้อมูลที่มี' },
      { question: 'รองรับพืชชนิดใดบ้าง?', answer: 'รองรับพืชเศรษฐกิจหลักของไทย ทั้งข้าว ข้าวโพด มันสำปะหลัง และผักสวนครบวงจร' },
    ],
  },
  {
    slug: 'smartfarm',
    name: 'SmartFarm',
    tagline: 'IoT Platform สำหรับฟาร์ม',
    category: 'agtech',
    industries: ['agriculture', 'iot'],
    hero: {
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      visualType: 'image',
    },
    howItWorks: {
      title: 'How SmartFarm Works',
      description: 'ติดตั้งและเริ่มใช้งานได้ทันที',
      steps: [
        { step: 1, title: 'ติดตั้งเซนเซอร์', description: 'ติดตั้งเซนเซอร์ IoT ที่ฟาร์ม' },
        { step: 2, title: 'เชื่อมต่อ Cloud', description: 'เชื่อมต่อ Cloud เพื่อซิงค์ข้อมูล' },
        { step: 3, title: 'ตรวจสอบข้อมูล', description: 'ดูข้อมูลและกราฟิกใน Dashboard' },
        { step: 4, title: 'รับแจ้งเตือน', description: 'รับแจ้งเตือนอัตโนมัติ' },
      ],
    },
    features: [
      {
        title: 'Edge Computing',
        description: 'ทำงานได้แม้ไม่มีอินเทอร์เน็ต ด้วย Edge AI',
        icon: 'Cpu',
      },
      {
        title: 'Real-time Monitoring',
        description: 'ตรวจสอบค่าอุณหภูมิ ความชื้น และสภาพแวดล้อมแบบ Real-time',
        icon: 'Wifi',
      },
      {
        title: 'Cloud Sync',
        description: 'ซิงค์ข้อมูลไปยัง Cloud เมื่อมีอินเทอร์เน็ต',
        icon: 'Database',
      },
    ],
    techStack: ['ESP32', 'MQTT', 'InfluxDB', 'Grafana', 'Node.js'],
    pricing: {
      model: 'hardware',
      tiers: [
        { name: 'Starter Kit', price: 4990, features: ['1 sensor node', 'Basic dashboard', 'Mobile app'] },
        { name: 'Farm Kit', price: 14990, features: ['5 sensor nodes', 'Advanced analytics', 'Alert system'], highlighted: true },
        { name: 'Enterprise', price: 'Custom', features: ['Custom deployment', 'White-label', 'API Integration'] },
      ],
    },
    faq: [
      { question: 'ทำงานได้แม้ไม่มีอินเทอร์เน็ต?', answer: 'ใช่ ระบบ Edge Computing ทำให้ทำงานได้แม้ไม่มีอินเทอร์เน็ต และจะซิงค์ข้อมูลเมื่อมีอินเทอร์เน็ต' },
      { question: 'รองรับเซนเซอร์ประเภทใดบ้าง?', answer: 'รองรับเซนเซอร์อุณหภูมิ ความชื้น ความเข้มแสง ความเป็นกรดของดิน และเซนเซอร์ก๊าซ' },
    ],
  },
  {
    slug: 'cerebraforge',
    name: 'CerebraForge',
    tagline: 'Enterprise RAG Platform',
    category: 'deeptech',
    industries: ['enterprise', 'ai'],
    hero: {
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      visualType: 'image',
    },
    howItWorks: {
      title: 'How CerebraForge Works',
      description: 'สร้าง RAG แอปพลิเคชันที่พร้อมใช้งาน',
      steps: [
        { step: 1, title: 'Ingestion', description: 'อัปโหลดและประมวลเอกสาร' },
        { step: 2, title: 'Vector Search', description: 'สร้าง Vector Embeddings และจัดเก็บ' },
        { step: 3, title: 'RAG Pipeline', description: 'รวม Vector Search กับ LLM' },
        { step: 4, title: 'Deployment', description: 'Deploy ไปยัง Production' },
      ],
    },
    features: [
      {
        title: 'RAG Infrastructure',
        description: 'Infrastructure สำหรับ RAG ที่พร้อมใช้งาน',
        icon: 'Layers',
      },
      {
        title: 'Multi-Model Support',
        description: 'รองรับหลาย LLM Models ในแพลตฟอร์มเดียว',
        icon: 'Brain',
      },
      {
        title: 'Enterprise Security',
        description: 'Security ระดับองค์กร พร้อม RBAC และ Audit Log',
        icon: 'Shield',
      },
    ],
    techStack: ['LangChain', 'Vector DB', 'OpenAI', 'Anthropic', 'FastAPI'],
    pricing: {
      model: 'license',
      tiers: [
        { name: 'Starter', price: 49000, period: '/ปี', features: ['1M tokens/month', 'Basic support', 'Self-hosted'] },
        { name: 'Business', price: 149000, period: '/ปี', features: ['10M tokens/month', 'Priority support', 'SLA 99.9%'], highlighted: true },
        { name: 'Enterprise', price: 'Custom', features: ['Unlimited tokens', 'Dedicated support', 'Custom deployment'] },
      ],
    },
    faq: [
      { question: 'CerebraForge คืออะไร?', answer: 'CerebraForge เป็น Enterprise RAG Platform ที่รวม Infrastructure สำหรับ RAG ไว้ในที่เดียว ช่วยลดเวลาพัฒนาจากเดือนเป็นสัปดาห์' },
      { question: 'รองรับ LLM Models ใดบ้าง?', answer: 'รองรับ OpenAI GPT-4, Anthropic Claude, และ Local LLMs ผ่าน Ollama หรือ vLLM' },
    ],
  },
  {
    slug: 'chartsentinel',
    name: 'ChartSentinel',
    tagline: 'AI-SPC Platform',
    category: 'deeptech',
    industries: ['manufacturing', 'quality'],
    hero: {
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      visualType: 'image',
    },
    howItWorks: {
      title: 'How ChartSentinel Works',
      description: 'ตรวจจับสัญญาณผิดปกติแบบ Real-time',
      steps: [
        { step: 1, title: 'ติดตั้ง', description: 'ติดตั้งเซนเซอร์ AI' },
        { step: 2, title: 'Lab Integration', description: 'เชื่อมต่อ Lab Quality' },
        { step: 3, title: 'Alert System', description: 'ระบบแจ้งเตือนอัตโนมัติ' },
        { step: 4, title: 'Analytics', description: 'วิเคราะห์ข้อมูลและกราฟิก' },
      ],
    },
    features: [
      {
        title: 'Real-Time Signals',
        description: 'ตรวจจับสัญญาณผิดปกติแบบ Real-time ด้วย AI',
        icon: 'BarChart',
      },
      {
        title: 'Lab Quality Integration',
        description: 'เชื่อมต่อข้อมูล Lab Quality เข้ากับ Process Data',
        icon: 'Microscope',
      },
      {
        title: 'Dual-Mode Intelligence',
        description: 'รวม Real-Time Signals และ Lab Quality ในแพลตฟอร์มเดียว',
        icon: 'Brain',
      },
    ],
    techStack: ['Python', 'TensorFlow', 'InfluxDB', 'Grafana', 'React'],
    pricing: {
      model: 'license',
      tiers: [
        { name: 'Pilot', price: 99000, features: ['1 production line', 'Basic analytics', 'Email support'] },
        { name: 'Production', price: 249000, features: ['5 production lines', 'Advanced analytics', 'Priority support'], highlighted: true },
        { name: 'Enterprise', price: 'Custom', features: ['Unlimited lines', 'Custom integrations', 'On-premise deployment'] },
      ],
    },
    faq: [
      { question: 'ChartSentinel ช่วยลดความผิดพลาดได้อย่างไร?', answer: 'ระบบ AI ตรวจจับสัญญาณผิดปกติแบบ Real-time ช่วยแจ้งเตือนก่อนเกิดปัญหา ลดความผิดพลาดได้ถึง 40%' },
      { question: 'รองรับระบบ MES ใดบ้าง?', answer: 'รองรับ MES ทั่วไปผ่าน API และสามารถ Custom Integration ได้' },
    ],
  },
  {
    slug: 'vetpath',
    name: 'VetPath AI',
    tagline: 'Digital Pathology สำหรับสัตวแพทย์',
    category: 'deeptech',
    industries: ['healthcare', 'veterinary'],
    hero: {
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      visualType: 'image',
    },
    howItWorks: {
      title: 'How VetPath AI Works',
      description: 'วินิจฉัยโรคด้วย AI แบบ Cloud-based',
      steps: [
        { step: 1, title: 'อัปโหลด', description: 'อัปโหลด Digital Slides' },
        { step: 2, title: 'AI Diagnosis', description: 'วินิจฉัยโรคด้วย AI' },
        { step: 3, title: 'Collaboration', description: 'แชร์และปรึกษากับสัตวแพทย์คนอื่น' },
        { step: 4, title: 'Report', description: 'สร้างรายงานวินิจฉัย' },
      ],
    },
    features: [
      {
        title: 'AI Diagnosis',
        description: 'วินิจฉัยโรคด้วย AI ความแม่นยำสูง',
        icon: 'Eye',
      },
      {
        title: 'Digital Slides',
        description: 'จัดการ Digital Slides แบบ Cloud-based',
        icon: 'Database',
      },
      {
        title: 'Collaboration',
        description: 'แชร์และปรึกษากับสัตวแพทย์คนอื่น',
        icon: 'Users',
      },
    ],
    techStack: ['Python', 'PyTorch', 'OpenCV', 'React', 'AWS S3'],
    pricing: {
      model: 'subscription',
      tiers: [
        { name: 'Clinic', price: 5990, period: '/เดือน', features: ['100 slides/month', 'AI diagnosis', 'Basic support'] },
        { name: 'Hospital', price: 19990, period: '/เดือน', features: ['500 slides/month', 'Advanced features', 'Priority support'], highlighted: true },
        { name: 'Enterprise', price: 'Custom', features: ['Unlimited slides', 'Custom models', 'On-premise deployment'] },
      ],
    },
    faq: [
      { question: 'ความแม่นยำของ AI Diagnosis?', answer: 'ความแม่นยำเฉลี่ย 92-95% ขึ้นอยู่กับประเภทโรคและคุณภาพของสไลด์' },
      { question: 'รองรับรูปแบบไฟล์ใดบ้าง?', answer: 'รองรับ SVS, TIFF, NDPI และรูปแบบ Digital Slide ทั่วไป' },
    ],
  },
  // Skill 400++ removed - it's a GitHub repo, not a product
  {
    slug: 'cerebra-api',
    name: 'Cerebra API',
    tagline: 'Unified AI API Platform',
    category: 'deeptech',
    industries: ['enterprise', 'developer'],
    hero: {
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      visualType: 'image',
    },
    howItWorks: {
      title: 'How Cerebra API Works',
      description: 'API เดียวสำหรับ AI Models ทุกประเภท',
      steps: [
        { step: 1, title: 'Get API Key', description: 'ลงทะเบียนและรับ API Key' },
        { step: 2, title: 'Make Request', description: 'เรียก API ด้วย SDK' },
        { step: 3, title: 'Process Response', description: 'ประมวลผลลัพธ์' },
        { step: 4, title: 'Monitor Usage', description: 'ติดตามการใช้งานใน Dashboard' },
      ],
    },
    features: [
      {
        title: 'Unified API',
        description: 'API เดียวเข้าถึงหลาย AI Models',
        icon: 'Database',
      },
      {
        title: 'Rate Limiting',
        description: 'จัดการ Rate Limit อัตโนมัติ',
        icon: 'Shield',
      },
      {
        title: 'Analytics',
        description: 'ติดตามการใช้งานและค่าใช้จ่าย',
        icon: 'BarChart',
      },
    ],
    techStack: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    pricing: {
      model: 'usage',
      tiers: [
        { name: 'Free', price: 0, features: ['10K requests/month', 'Basic models', 'Community support'] },
        { name: 'Pro', price: 990, period: '/เดือน', features: ['1M requests/month', 'All models', 'Priority support'], highlighted: true },
        { name: 'Enterprise', price: 'Custom', features: ['Unlimited requests', 'Custom models', 'Dedicated support'] },
      ],
    },
    faq: [
      { question: 'รองรับ AI Models ใดบ้าง?', answer: 'รองรับ OpenAI GPT, Anthropic Claude, Google Gemini และ Local LLMs ผ่าน Ollama' },
      { question: 'มี SDK สำหรับภาษาใดบ้าง?', answer: 'มี SDK สำหรับ Python, JavaScript/TypeScript, Go และ Java' },
    ],
  },
];
