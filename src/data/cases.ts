export type CaseItem = {
  slug: string;
  title: string;                // "Edge AI Computer with LLM"
  subtitle?: string;            // "Edge Computing & IoT"
  sector: string;               // "Manufacturing"
  solutionFamily: ('Edge CV' | 'RAG/LLM' | 'Analytics' | 'OCR' | 'IoT' | 'Machine Learning' | 'Quality Intelligence' | 'Document Intelligence')[];
  dataSensitivity: 'Public' | 'Anonymised' | 'Synthetic';
  challenge: string;
  solution: string;
  outcomes: { label: string; value: string }[]; // e.g. [{label:'Accuracy', value:'+95%'}]
  metricsFooter?: { label: string; value: string }[]; // e.g. [{label:'Latency', value:'<500ms'}]
  measurementNotes?: string;    // Additional notes about measurements
  heroImage?: string;           // for OG/preview
  lang: 'en' | 'th';
};

export const CASES: CaseItem[] = [
  {
    slug: 'ai-spc-anomaly-investigation-production-qc',
    title: 'AI-SPC & Anomaly Investigation for Production Quality Control',
    subtitle: 'Standardised SPC Monitoring and RCA Workflow',
    sector: 'Manufacturing',
    solutionFamily: ['Analytics', 'Machine Learning', 'Quality Intelligence'],
    dataSensitivity: 'Anonymised',
    challenge:
      'Quality teams relied on manual SPC chart reviews and fragmented root-cause workflows. Out-of-control signals were detected late, investigations varied by team, and audit trails were difficult to reconstruct across production lines.',
    solution:
      'An AI-SPC workflow combining rule-based SPC, anomaly detection, and guided investigation steps. The system standardises escalation logic, records decision trails, and supports human-in-the-loop reviews for regulated production environments.',
    outcomes: [
      { label: 'SPC signal review time', value: 'Reduced (pilot)' },
      { label: 'RCA consistency across lines', value: 'Improved (pilot)' },
      { label: 'Audit traceability', value: 'Strengthened' }
    ],
    measurementNotes:
      'Outcomes measured during pilot deployment using internal QA benchmarks over a limited evaluation period.',
    heroImage: '/images/cases/ai-spc-production-qc/og.jpg',
    lang: 'en'
  },
  {
    slug: 'ocr-rag-quality-documents-sop-search',
    title: 'OCR & RAG System for Quality Documents and SOP Search',
    subtitle: 'Document Intelligence for QA and Production Teams',
    sector: 'Manufacturing',
    solutionFamily: ['OCR', 'RAG/LLM', 'Document Intelligence'],
    dataSensitivity: 'Anonymised',
    challenge:
      'Quality and production teams needed fast, reliable access to SOPs, specifications, and audit evidence. Documents were distributed across multiple formats, versions, and shared repositories, increasing the risk of outdated or incorrect usage.',
    solution:
      'An OCR ingestion pipeline with structured extraction and a RAG-based search layer over controlled document versions. The workflow enforces access control, review checkpoints, and clear source citations to support audit and compliance use cases.',
    outcomes: [
      { label: 'Document retrieval time', value: 'Reduced (pilot)' },
      { label: 'Controlled SOP coverage', value: 'Expanded (pilot)' },
      { label: 'Compliance confidence for audits', value: 'Improved' }
    ],
    measurementNotes:
      'Results observed during pilot usage with anonymised internal documents and limited user groups.',
    heroImage: '/images/cases/ocr-rag-quality-docs/og.jpg',
    lang: 'en'
  }
  ,
  {
    slug: 'cerebrakm-ai-knowledge-management',
    title: 'CerebraForge - AI Knowledge Management',
    subtitle: 'Enterprise Software',
    sector: 'Enterprise',
    solutionFamily: ['RAG/LLM', 'Analytics'],
    dataSensitivity: 'Public',
    challenge: 'Organizations struggled to capture, organize, and retrieve institutional knowledge efficiently across departments, leading to information silos, duplicate work, and difficulty finding relevant expertise.',
    solution: 'RAG + LLM powered knowledge management system with AI-powered search, intelligent document processing, and personalized recommendations based on user roles and project contexts.',
    outcomes: [
      { label: 'Knowledge retrieval', value: '+70%' },
      { label: 'Employee adoption', value: '85%' },
      { label: 'Search accuracy', value: '90%' },
    ],
    metricsFooter: [
      { label: 'Documents indexed', value: '50K+' },
      { label: 'Daily queries', value: '3,000+' },
    ],
    heroImage: '/images/cases/cerebrakm/og.jpg',
    lang: 'en'
  },
  {
    slug: 'edge-ai-computer-llm',
    title: 'Edge AI Computer with LLM',
    subtitle: 'Edge Computing & IoT',
    sector: 'Manufacturing',
    solutionFamily: ['Edge CV', 'RAG/LLM'],
    dataSensitivity: 'Public',
    challenge: 'Cloud-dependent AI had latency and privacy issues.',
    solution: 'Jetson/RPi edge with on-device LLM; secure offline-capable pipeline.',
    outcomes: [
      { label: 'Uptime', value: '99%+' },
      { label: 'On-device capability', value: '100%' },
      { label: 'Analytics depth', value: 'Enhanced' },
    ],
    metricsFooter: [
      { label: 'Response time', value: '<500ms' },
      { label: 'Deployments', value: '80+' },
    ],
    heroImage: '/images/cases/edge-llm/og.jpg',
    lang: 'en'
  },
  {
    slug: 'vision-quality-inspection',
    title: 'Vision Quality Inspection System',
    subtitle: 'Computer Vision',
    sector: 'Manufacturing',
    solutionFamily: ['Edge CV'],
    dataSensitivity: 'Anonymised',
    challenge: 'Manual quality inspection was slow, inconsistent, and prone to human error, leading to defective products reaching customers and high inspection costs.',
    solution: 'AI-powered vision system with real-time defect detection, automated sorting, and quality analytics dashboard for production line optimization.',
    outcomes: [
      { label: 'Inspection accuracy', value: '+92%' },
      { label: 'False alarms', value: '-75%' },
      { label: 'Response time', value: '<2s' },
    ],
    metricsFooter: [
      { label: 'Items inspected', value: '10K+/day' },
      { label: 'Production lines', value: '5' },
    ],
    heroImage: '/images/cases/vision-inspection/og.jpg',
    lang: 'en'
  },
  {
    slug: 'predictive-maintenance-iot',
    title: 'Predictive Maintenance IoT Platform',
    subtitle: 'Industrial IoT',
    sector: 'Manufacturing',
    solutionFamily: ['IoT', 'Analytics'],
    dataSensitivity: 'Synthetic',
    challenge: 'Unplanned equipment failures caused production downtime and maintenance costs, with reactive maintenance approaches being inefficient and expensive.',
    solution: 'IoT sensor network with machine learning models for predictive maintenance, automated alerting, and maintenance scheduling optimization.',
    outcomes: [
      { label: 'Downtime reduction', value: '-45%' },
      { label: 'Maintenance cost', value: '-30%' },
      { label: 'Prediction accuracy', value: '88%' },
    ],
    metricsFooter: [
      { label: 'Sensors deployed', value: '200+' },
      { label: 'Equipment monitored', value: '50+' },
    ],
    heroImage: '/images/cases/predictive-maintenance/og.jpg',
    lang: 'en'
  },
  {
    slug: 'computer-vision-defect-detection',
    title: 'Computer Vision Defect Detection System',
    subtitle: 'Automated Quality Control',
    sector: 'Manufacturing',
    solutionFamily: ['Edge CV'],
    dataSensitivity: 'Anonymised',
    challenge: 'Manual quality inspection was slow, inconsistent, and prone to human error, leading to defective products reaching customers and high inspection costs.',
    solution: 'AI-powered computer vision system using tacit knowledge transfer from expert inspectors to automatically detect defects and sort products with 90%+ time reduction.',
    outcomes: [
      { label: 'Inspection time', value: '-90%' },
      { label: 'Detection accuracy', value: '+95%' },
      { label: 'False reject rate', value: '-75%' },
    ],
    metricsFooter: [
      { label: 'Items inspected', value: '15K+/day' },
      { label: 'Production lines', value: '8' },
      { label: 'Expert knowledge', value: '100+ rules' },
    ],
    heroImage: '/images/cases/cv-defect-detection/og.jpg',
    lang: 'en'
  },
  {
    slug: 'time-series-environmental-control',
    title: 'Time-Series Environmental Control System',
    subtitle: 'Smart Environment Management',
    sector: 'Manufacturing',
    solutionFamily: ['Analytics', 'IoT'],
    dataSensitivity: 'Public',
    challenge: 'Environmental conditions in manufacturing facilities needed precise control, but manual monitoring and adjustment was inefficient and often reactive rather than predictive.',
    solution: 'Time-series analysis system that collects environmental data at specified intervals, performs anomaly detection, and automatically controls devices to maintain optimal conditions.',
    outcomes: [
      { label: 'Environmental stability', value: '+85%' },
      { label: 'Energy efficiency', value: '+25%' },
      { label: 'Anomaly detection', value: '99.2%' },
    ],
    metricsFooter: [
      { label: 'Data points collected', value: '1M+/day' },
      { label: 'Controlled devices', value: '150+' },
      { label: 'Response time', value: '<30s' },
    ],
    heroImage: '/images/cases/time-series-env/og.jpg',
    lang: 'en'
  },
  {
    slug: 'predictive-analytics-ml',
    title: 'Predictive Analytics & Recommendation System',
    subtitle: 'Data Analytics & Machine Learning',
    sector: 'Cross-Industry',
    solutionFamily: ['Analytics', 'Machine Learning'],
    dataSensitivity: 'Anonymised',
    challenge: 'Lack of proactive insights and timely anomaly detection from complex data, leading to reactive decision-making.',
    solution: 'Machine Learning-driven data analysis to identify variable relationships, enabling predictive recommendations and proactive anomaly detection for improved operational management.',
    outcomes: [
      { label: 'Proactive management', value: 'Enabled' },
      { label: 'Anomaly detection', value: 'Timely' },
      { label: 'Decision making', value: 'Enhanced' },
    ],
    metricsFooter: [
      { label: 'Prediction accuracy', value: '90%+' },
      { label: 'Data points analyzed', value: '5M+/day' },
    ],
    heroImage: '/images/cases/predictive-analytics-ml/og.jpg',
    lang: 'en'
  },
  {
    slug: 'pluktunraka-khon-kaen-farmer',
    title: 'เกษตรกรขอนแก่นลดค่าปุ๋ยได้ 30%',
    subtitle: 'AI Crop Planning Success Story',
    sector: 'Agriculture',
    solutionFamily: ['Machine Learning', 'Analytics'],
    dataSensitivity: 'Public',
    challenge: 'เกษตรกรในขอนแก่นต้องเผชิญกับความไม่แน่นอนของราคาพืช ทำให้การวางแผนการเก็บเกี่ยวและการใช้ปุ๋ยไม่เหมาะสม ส่งผลให้เกิดต้นทุนสูงและผลผลิตต่ำ',
    solution: 'ใช้ระบบปลูกทันราคาที่ใช้ AI วิเคราะห์และพยากรณ์ราคาพืชล่วงหน้า 3-6 เดือน ช่วยให้เกษตรกรวางแผนการปลูกที่เหมาะสมกับสภาพตลาดและเพิ่มผลผลิต',
    outcomes: [
      { label: 'ลดต้นทุนปุ๋ย', value: '30%' },
      { label: 'ROI', value: '3x' },
      { label: 'ระยะเวลา', value: '1 ฤดูกาล' }
    ],
    metricsFooter: [
      { label: 'พื้นที่เกษตร', value: '50 ไร่' },
      { label: 'พืชที่ปลูก', value: 'ข้าวนาปี' }
    ],
    heroImage: '/images/cases/pluktunraka/og.jpg',
    lang: 'th'
  },
  {
    slug: 'chartsentinel-auto-parts-defect',
    title: 'โรงงานชิ้นส่วนยานยนต์ลด Defect 85%',
    subtitle: 'AI-SPC Platform Success Story',
    sector: 'Manufacturing',
    solutionFamily: ['Analytics', 'Machine Learning', 'Quality Intelligence'],
    dataSensitivity: 'Public',
    challenge: 'โรงงานผลิตชิ้นส่วนยานยนต์ต้องเผชิญกับปัญหาของเสียที่สูง การตรวจสอบคุณภาพด้วยมนุษย์ทำให้เกิดความผิดพลาดและไม่สามารถตรวจจับข้อบกพร่องได้ทันเวลา',
    solution: 'ใช้ ChartSentinel ที่มีระบบ AI-SPC ตรวจจับสัญญาณผิดปกติแบบ Real-time ร่วมกับ Lab Quality Data ช่วยลดของเสียและปรับปรุงกระบวนการควบคุมคุณภาพ',
    outcomes: [
      { label: 'ลดของเสีย', value: '85%' },
      { label: 'ROI', value: '6 เดือน' },
      { label: 'ความแม่นยำ', value: '99.5%' }
    ],
    metricsFooter: [
      { label: 'Production Lines', value: '3' },
      { label: 'Inspections/day', value: '1,000+' }
    ],
    heroImage: '/images/cases/chartsentinel/og.jpg',
    lang: 'th'
  },
  {
    slug: 'sookwai-elderly-care-efficiency',
    title: 'ศูนย์ดูแลผู้สูงอายุลดภาระพยาบาล 40%',
    subtitle: 'Wellness Platform Success Story',
    sector: 'Healthcare',
    solutionFamily: ['IoT', 'Analytics'],
    dataSensitivity: 'Public',
    challenge: 'ศูนย์ดูแลผู้สูงอายุมีจำนวนเตียงมาก ทำให้พยาบาลต้องตรวจสอบสุขภาพผู้สูงอายุทีละคน ใช้เวลานานและไม่สามารถตรวจจับเหตุฉุกเฉินทางการแพทย์ได้ทันท่วงที',
    solution: 'ใช้ Sookwai ที่มี Dashboard สำหรับตรวจสอบสุขภาพผู้สูงอายุ 50 เตียงพร้อมกัน พร้อมระบบแจ้งเตือนอัตโนมัติเมื่อมีความผิดปกติ ช่วยลดภาระงานของพยาบาลและเพิ่มประสิทธิภาพการดูแล',
    outcomes: [
      { label: 'ลดภาระพยาบาล', value: '+40%' },
      { label: 'เตียงที่ดูแล', value: '50 เตียง' },
      { label: 'เวลาตอบสนอง', value: '<200ms' }
    ],
    metricsFooter: [
      { label: 'ผู้สูงอายุ', value: '50 คน' },
      { label: 'พยาบาล', value: '5 คน' }
    ],
    heroImage: '/images/cases/sookwai/og.jpg',
    lang: 'th'
  }
];

// Helper functions
export const getCaseBySlug = (slug: string): CaseItem | undefined => {
  return CASES.find(caseItem => caseItem.slug === slug);
};

export const getCasesBySector = (sector: string): CaseItem[] => {
  return CASES.filter(caseItem => caseItem.sector === sector);
};

export const getCasesBySolutionFamily = (family: string): CaseItem[] => {
  return CASES.filter(caseItem => caseItem.solutionFamily.includes(family as any));
};

export const getCasesByDataSensitivity = (sensitivity: string): CaseItem[] => {
  return CASES.filter(caseItem => caseItem.dataSensitivity === sensitivity);
};

export const getAllSectors = (): string[] => {
  return [...new Set(CASES.map(caseItem => caseItem.sector))];
};

export const getAllSolutionFamilies = (): string[] => {
  return [...new Set(CASES.flatMap(caseItem => caseItem.solutionFamily))];
};

export const getAllDataSensitivities = (): string[] => {
  return [...new Set(CASES.map(caseItem => caseItem.dataSensitivity))];
};
