export type CaseItem = {
  slug: string;
  title: string;                // "Edge AI Computer with LLM"
  subtitle?: string;            // "Edge Computing & IoT"
  sector: string;               // "Manufacturing"
  solutionFamily: ('Edge CV'|'RAG/LLM'|'Analytics'|'OCR'|'IoT'|'Machine Learning')[];
  dataSensitivity: 'Public'|'Anonymised'|'Synthetic';
  challenge: string;
  solution: string;
  outcomes: { label: string; value: string }[]; // e.g. [{label:'Accuracy', value:'+95%'}]
  metricsFooter?: { label: string; value: string }[]; // e.g. [{label:'Latency', value:'<500ms'}]
  heroImage?: string;           // for OG/preview
  lang: 'en'|'th';
};

export const CASES: CaseItem[] = [
  {
    slug: 'malai-thai-ceremony-management',
    title: 'malAI — Thai Ceremony Management Platform',
    subtitle: 'Event Management & Services',
    sector: 'Event Management',
    solutionFamily: ['RAG/LLM', 'Analytics'],
    dataSensitivity: 'Public',
    challenge: 'Thai ceremonies involve complex vendor coordination, budget tracking, and auspicious timing selection. Traditional methods lead to fragmented communication, budget overruns, and missed cultural requirements.',
    solution: 'AI-powered platform connecting ceremony buyers with verified vendors, featuring automated planning workflows, budget calculator with cultural considerations, and Thai auspicious timing selection based on traditional calendars.',
    outcomes: [
      {label:'Planning time', value:'–40%'},
      {label:'User satisfaction', value:'95%'},
      {label:'Vendor onboarding', value:'80%'},
    ],
    metricsFooter: [
      {label:'Active users', value:'1,200+'},
      {label:'Vendors', value:'350+'},
    ],
    heroImage: '/images/cases/malai/og.jpg',
    lang: 'en'
  },
  {
    slug: 'dulaedee-dual-mode-wellness',
    title: 'DulaeDee — Dual-Mode Wellness Platform',
    subtitle: 'Healthcare & Wellness',
    sector: 'Healthcare',
    solutionFamily: ['Analytics', 'IoT'],
    dataSensitivity: 'Public',
    challenge: 'Healthcare providers needed separate platforms for clinical care and wellness programs, leading to fragmented user experience, duplicate billing systems, and difficulty tracking patient journey across care modalities.',
    solution: 'Unified platform with dual UI modes (Clinical Care and Wellness) sharing backend infrastructure, user accounts, and billing system with entitlement-based feature access and cross-modal analytics.',
    outcomes: [
      {label:'User onboarding', value:'+60%'},
      {label:'User retention', value:'80%'},
      {label:'Operational cost', value:'–45%'},
    ],
    metricsFooter: [
      {label:'Active users', value:'2,500+'},
      {label:'Platform uptime', value:'99.8%'},
    ],
    heroImage: '/images/cases/dulaedee/og.jpg',
    lang: 'en'
  },
  {
    slug: 'cerebrakm-ai-knowledge-management',
    title: 'CereBraKM — AI Knowledge Management',
    subtitle: 'Enterprise Software',
    sector: 'Enterprise',
    solutionFamily: ['RAG/LLM', 'Analytics'],
    dataSensitivity: 'Public',
    challenge: 'Organizations struggled to capture, organize, and retrieve institutional knowledge efficiently across departments, leading to information silos, duplicate work, and difficulty finding relevant expertise.',
    solution: 'RAG + LLM powered knowledge management system with AI-powered search, intelligent document processing, and personalized recommendations based on user roles and project contexts.',
    outcomes: [
      {label:'Knowledge retrieval', value:'+70%'},
      {label:'Employee adoption', value:'85%'},
      {label:'Search accuracy', value:'90%'},
    ],
    metricsFooter: [
      {label:'Documents indexed', value:'50K+'},
      {label:'Daily queries', value:'3,000+'},
    ],
    heroImage: '/images/cases/cerebrakm/og.jpg',
    lang: 'en'
  },
  {
    slug: 'edge-ai-computer-llm',
    title: 'Edge AI Computer with LLM',
    subtitle: 'Edge Computing & IoT',
    sector: 'Manufacturing',
    solutionFamily: ['Edge CV','RAG/LLM'],
    dataSensitivity: 'Public',
    challenge: 'Cloud-dependent AI had latency and privacy issues.',
    solution: 'Jetson/RPi edge with on-device LLM; secure offline-capable pipeline.',
    outcomes: [
      {label:'Uptime', value:'99%+'},
      {label:'On-device capability', value:'100%'},
      {label:'Analytics depth', value:'Enhanced'},
    ],
    metricsFooter: [
      {label:'Response time', value:'<500ms'},
      {label:'Deployments', value:'80+'},
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
      {label:'Inspection accuracy', value:'+92%'},
      {label:'False alarms', value:'–75%'},
      {label:'Response time', value:'<2s'},
    ],
    metricsFooter: [
      {label:'Items inspected', value:'10K+/day'},
      {label:'Production lines', value:'5'},
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
      {label:'Downtime reduction', value:'–45%'},
      {label:'Maintenance cost', value:'–30%'},
      {label:'Prediction accuracy', value:'88%'},
    ],
    metricsFooter: [
      {label:'Sensors deployed', value:'200+'},
      {label:'Equipment monitored', value:'50+'},
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
      {label:'Inspection time', value:'–90%'},
      {label:'Detection accuracy', value:'+95%'},
      {label:'False reject rate', value:'–75%'},
    ],
    metricsFooter: [
      {label:'Items inspected', value:'15K+/day'},
      {label:'Production lines', value:'8'},
      {label:'Expert knowledge', value:'100+ rules'},
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
      {label:'Environmental stability', value:'+85%'},
      {label:'Energy efficiency', value:'+25%'},
      {label:'Anomaly detection', value:'99.2%'},
    ],
    metricsFooter: [
      {label:'Data points collected', value:'1M+/day'},
      {label:'Controlled devices', value:'150+'},
      {label:'Response time', value:'<30s'},
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
      {label:'Proactive management', value:'Enabled'},
      {label:'Anomaly detection', value:'Timely'},
      {label:'Decision making', value:'Enhanced'},
    ],
    metricsFooter: [
      {label:'Prediction accuracy', value:'90%+'},
      {label:'Data points analyzed', value:'5M+/day'},
    ],
    heroImage: '/images/cases/predictive-analytics-ml/og.jpg',
    lang: 'en'
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
