import { BookOpen, FileText, Video, Wrench } from 'lucide-react';

export type ResourceType = 'whitepaper' | 'webinar' | 'ebook' | 'template';

export type ResourceItem = {
  slug: string;
  type: ResourceType;
  title: { en: string; th: string };
  description: { en: string; th: string };
  category: { en: string; th: string };
  date?: string; // ISO yyyy-mm-dd
  duration?: string; // e.g. "45 min"
  pages?: string; // e.g. "24 pages"
  size?: string; // e.g. "2.3 MB"
  format?: string; // e.g. "ZIP"
  downloadUrl?: string; // public asset (/resources/*)
  externalUrl?: string; // e.g. YouTube link
};

export const RESOURCE_ICON: Record<ResourceType, any> = {
  whitepaper: FileText,
  webinar: Video,
  ebook: BookOpen,
  template: Wrench,
};

export const RESOURCES: ResourceItem[] = [
  {
    slug: 'ai-for-manufacturing',
    type: 'whitepaper',
    title: {
      en: 'AI in Manufacturing: Zero Defect Production Guide',
      th: 'AI ในโรงงานอุตสาหกรรม: คู่มือสู่การผลิตแบบ Zero Defect',
    },
    description: {
      en: 'How to implement Computer Vision and IoT for 100% quality control and predictive maintenance.',
      th: 'แนวทางการใช้ Computer Vision และ IoT เพื่อควบคุมคุณภาพ 100% และการทำ Predictive Maintenance',
    },
    category: { en: 'Manufacturing', th: 'การผลิต' },
    downloadUrl: '/resources/ai-manufacturing-guide.pdf',
    format: 'PDF',
    size: '12 KB',
    pages: '15 pages',
    date: '2025-02-15',
  },
  {
    slug: 'ai-for-healthcare',
    type: 'whitepaper',
    title: {
      en: 'AI in Healthcare: Enhancing Diagnostic Precision',
      th: 'AI ทางการแพทย์: ยกระดับความแม่นยำในการวินิจฉัย',
    },
    description: {
      en: 'Case studies on using AI for medical imaging analysis and patient data triaging.',
      th: 'กรณีศึกษาการใช้ AI วิเคราะห์ภาพถ่ายทางการแพทย์และการคัดกรองผู้ป่วย',
    },
    category: { en: 'Healthcare', th: 'การแพทย์' },
    downloadUrl: '/resources/ai-healthcare-guide.pdf',
    format: 'PDF',
    size: '9 KB',
    pages: '12 pages',
    date: '2025-02-12',
  },
  {
    slug: 'gen-ai-retail',
    type: 'ebook',
    title: {
      en: 'Generative AI for Retail: Hyper-Personalization',
      th: 'Generative AI สำหรับค้าปลีก: การสร้างประสบการณ์เฉพาะบุคคล',
    },
    description: {
      en: 'Strategies to use GenAI for personalized marketing, virtual assistants, and inventory planning.',
      th: 'กลยุทธ์การใช้ GenAI ทำการตลาดเฉพาะบุคคล, ผู้ช่วยเสมือน และวางแผนสต็อกสินค้า',
    },
    category: { en: 'Retail', th: 'ค้าปลีก' },
    downloadUrl: '/resources/gen-ai-retail.pdf',
    format: 'PDF',
    size: '15 KB',
    pages: '20 pages',
    date: '2025-02-10',
  },
  {
    slug: 'ai-implementation-roadmap',
    type: 'whitepaper',
    title: {
      en: 'AI Implementation Roadmap: From Strategy to Production',
      th: 'แผนงานนำ AI ไปใช้งานจริง: จากกลยุทธ์สู่ระบบ Production',
    },
    description: {
      en: 'A practical roadmap with milestones and deployment considerations (realistic, no hype).',
      th: 'Roadmap แบบใช้งานได้จริง พร้อม milestone และข้อควรคำนึงเรื่องการ deploy (โทนจริงจัง ไม่ขายฝัน)',
    },
    category: { en: 'Strategy', th: 'กลยุทธ์' },
    downloadUrl: '/resources/ai-implementation-roadmap.pdf',
    format: 'PDF',
    size: '6 KB',
    pages: '6 pages',
    date: '2025-01-11',
  },
  {
    slug: 'mlops-best-practices',
    type: 'whitepaper',
    title: {
      en: 'MLOps Best Practices: Scaling AI Operations',
      th: 'แนวทางปฏิบัติที่ดีของ MLOps: ขยายระบบ AI ให้ดูแลง่ายและเสถียร',
    },
    description: {
      en: 'Best practices for reliable AI operations: versioning, monitoring, releases, and governance.',
      th: 'สรุป best practices สำหรับการทำงานจริง: versioning, monitoring, release/rollback และ governance',
    },
    category: { en: 'Technical', th: 'เทคนิค' },
    downloadUrl: '/resources/mlops-best-practices.pdf',
    format: 'PDF',
    size: '8 KB',
    pages: '8 pages',
    date: '2025-01-11',
  },

  // Webinars (external)
  {
    slug: 'computer-vision-webinar',
    type: 'webinar',
    title: {
      en: 'Computer Vision in Manufacturing: Real-World Case Studies',
      th: 'Computer Vision ในโรงงาน: เคสจริงและบทเรียนจากการใช้งาน',
    },
    description: {
      en: 'Watch a practical discussion on vision projects in factories: data, evaluation, and deployment.',
      th: 'คุยแบบลงมือทำจริงเกี่ยวกับงาน vision ในโรงงาน: data, evaluation และการ deploy',
    },
    category: { en: 'Case Study', th: 'กรณีศึกษา' },
    externalUrl: 'https://www.youtube.com/@cerebratechai',
    duration: '45 min',
    date: '2024-01-15',
  },
  {
    slug: 'llm-thai-optimization',
    type: 'webinar',
    title: {
      en: 'LLM Optimization for Thai Language Processing',
      th: 'ปรับ LLM ให้เข้าใจภาษาไทย: เทคนิคและแนวทางประเมินผล',
    },
    description: {
      en: 'Technical deep dive into practical evaluation and optimization patterns for Thai language.',
      th: 'เจาะลึกการประเมิน (evaluation) และการปรับจูนให้เหมาะกับภาษาไทยแบบใช้งานจริง',
    },
    category: { en: 'Technical', th: 'เทคนิค' },
    externalUrl: 'https://www.youtube.com/@cerebratechai',
    duration: '60 min',
    date: '2024-01-10',
  },

  {
    slug: 'ai-roi-guide',
    type: 'ebook',
    title: {
      en: 'The Complete Guide to AI ROI Measurement',
      th: 'คู่มือวัดผล ROI ของ AI แบบครบถ้วน',
    },
    description: {
      en: 'How to measure and communicate AI business value: a practical ROI checklist.',
      th: 'แนวทางวัดผลและสื่อสารมูลค่าทางธุรกิจของ AI พร้อม checklist ที่นำไปใช้ได้จริง',
    },
    category: { en: 'Business', th: 'ธุรกิจ' },
    downloadUrl: '/resources/ai-roi-guide.pdf',
    format: 'PDF',
    size: '7 KB',
    pages: '10 pages',
    date: '2025-01-11',
  },
  {
    slug: 'edge-ai-deployment',
    type: 'whitepaper',
    title: {
      en: 'Edge AI Deployment: Bringing Intelligence to the Edge',
      th: 'การ Deploy Edge AI: นำความฉลาดไปอยู่ที่หน้างาน',
    },
    description: {
      en: 'Guide to deploying AI models at the edge, including hardware constraints and optimization techniques.',
      th: 'แนวทาง deploy โมเดลที่ edge รวมข้อจำกัดด้านฮาร์ดแวร์ ความหน่วง และการ optimize ให้เหมาะกับหน้างาน',
    },
    category: { en: 'Technical', th: 'เทคนิค' },
    downloadUrl: '/resources/edge-ai-deployment.pdf',
    format: 'PDF',
    size: '8 KB',
    pages: '10 pages',
    date: '2025-01-11',
  },
  {
    slug: 'ai-project-checklist',
    type: 'template',
    title: { en: 'AI Project Checklist', th: 'เช็กลิสต์เริ่มโปรเจกต์ AI' },
    description: {
      en: 'Comprehensive checklist covering data readiness, team skills, infrastructure, and success criteria for AI projects.',
      th: 'เช็กลิสต์ครอบคลุม data readiness, ทักษะทีม, โครงสร้างพื้นฐาน และเกณฑ์ความสำเร็จของโปรเจกต์ AI',
    },
    category: { en: 'Strategy', th: 'กลยุทธ์' },
    downloadUrl: '/resources/ai-project-checklist.pdf',
    format: 'PDF',
    size: '13 KB',
    pages: '12 pages',
    date: '2025-01-11',
  },
  {
    slug: 'ai-project-template',
    type: 'template',
    title: {
      en: 'AI Project Template',
      th: 'เทมเพลตโปรเจกต์ AI (ขอบเขต งานส่งมอบ และแผนงาน)',
    },
    description: {
      en: 'A ready-to-use project template: scope, requirements, milestones, and deliverables.',
      th: 'เทมเพลตเริ่มโปรเจกต์: scope, requirement, milestone และ deliverable ที่ชัดเจน',
    },
    category: { en: 'Strategy', th: 'กลยุทธ์' },
    downloadUrl: '/resources/ai-project-template.xlsx',
    format: 'XLSX',
    size: '6 KB',
    date: '2025-01-11',
  },
  {
    slug: 'vendor-selection-scorecard',
    type: 'template',
    title: {
      en: 'AI Vendor Selection Scorecard',
      th: 'ตารางให้คะแนนเลือกผู้ให้บริการ/เวนเดอร์ AI',
    },
    description: {
      en: 'A scorecard template to compare AI vendors: delivery risk, security, cost, and capability fit.',
      th: 'เทมเพลตเปรียบเทียบเวนเดอร์ AI: ความเสี่ยงการส่งมอบ ความปลอดภัย ค่าใช้จ่าย และความเหมาะสม',
    },
    category: { en: 'Strategy', th: 'กลยุทธ์' },
    downloadUrl: '/resources/vendor-selection-scorecard.xlsx',
    format: 'XLSX',
    size: '6 KB',
    date: '2025-01-11',
  },
  {
    slug: 'rag-readiness-assessment',
    type: 'template',
    title: {
      en: 'RAG Readiness Assessment',
      th: 'แบบประเมินความพร้อมสำหรับทำ RAG',
    },
    description: {
      en: 'Assess if your organization is ready for RAG implementation: document quality, use cases, and infrastructure requirements.',
      th: 'ประเมินความพร้อมก่อนทำ RAG: คุณภาพเอกสาร use case ที่ชัด และความต้องการด้าน infra',
    },
    category: { en: 'LLM & RAG', th: 'LLM & RAG' },
    downloadUrl: '/resources/rag-readiness-assessment.pdf',
    format: 'PDF',
    size: '9 KB',
    pages: '8 pages',
    date: '2025-01-11',
  },
  {
    slug: 'rag-evaluation-kit',
    type: 'template',
    title: {
      en: 'RAG Evaluation Kit',
      th: 'ชุดเครื่องมือประเมิน RAG (Evaluation Kit)',
    },
    description: {
      en: 'A starter kit to evaluate RAG quality: datasets, scoring rubric, and regression checklist.',
      th: 'ชุดเริ่มต้นสำหรับประเมินคุณภาพ RAG: ชุดคำถาม, rubric ให้คะแนน และเช็กลิสต์ regression',
    },
    category: { en: 'LLM & RAG', th: 'LLM & RAG' },
    downloadUrl: '/resources/rag-evaluation-kit.zip',
    format: 'ZIP',
    size: '1 KB',
    date: '2025-01-11',
  },
  {
    slug: 'computer-vision-dataset-guide',
    type: 'ebook',
    title: {
      en: 'Computer Vision Dataset Guide',
      th: 'คู่มือทำ Dataset สำหรับ Computer Vision',
    },
    description: {
      en: 'Best practices for collecting, labeling, and managing computer vision datasets for quality and production readiness.',
      th: 'แนวทางเก็บข้อมูล ตีกรอบ label และจัดการ dataset สำหรับงาน vision ให้พร้อมขึ้น production',
    },
    category: { en: 'Computer Vision', th: 'Computer Vision' },
    downloadUrl: '/resources/computer-vision-dataset-guide.pdf',
    format: 'PDF',
    size: '16 KB',
    pages: '16 pages',
    date: '2025-01-11',
  },
  {
    slug: 'ai-spc-starter-kit',
    type: 'template',
    title: {
      en: 'AI-SPC Starter Kit',
      th: 'ชุดเริ่มต้น AI-SPC (เทมเพลตและแนวทาง)',
    },
    description: {
      en: 'Templates and guidelines for implementing AI-powered Statistical Process Control in manufacturing environments.',
      th: 'เทมเพลตและแนวทางทำ SPC แบบใช้ AI ช่วย (เหมาะกับสภาพแวดล้อมโรงงาน)',
    },
    category: { en: 'Manufacturing', th: 'การผลิต' },
    downloadUrl: '/resources/ai-spc-starter-kit.zip',
    format: 'ZIP',
    size: '1 KB',
    date: '2025-01-11',
  },
  {
    slug: 'cost-of-llm-in-production-thai',
    type: 'whitepaper',
    title: {
      en: 'Cost of LLM in Production (Thai Edition)',
      th: 'ต้นทุน LLM ใน Production (ฉบับภาษาไทย)',
    },
    description: {
      en: 'A practical cost framework for LLM systems in production: measurement and optimization levers (Thai language).',
      th: 'เฟรมเวิร์กคำนวณต้นทุน LLM ในระบบจริง: วิธีวัด และตัวคันโยกสำหรับ optimize (ภาษาไทย)',
    },
    category: { en: 'LLM & RAG', th: 'LLM & RAG' },
    downloadUrl: '/resources/cost-of-llm-in-production-thai.pdf',
    format: 'PDF',
    size: '14 KB',
    pages: '14 pages',
    date: '2025-01-11',
  },
  {
    slug: 'security-posture-overview',
    type: 'whitepaper',
    title: {
      en: 'AI Security Posture Overview',
      th: 'ภาพรวมความปลอดภัยของระบบ AI (Security Posture)',
    },
    description: {
      en: 'Best-practice security controls overview for AI services (no certification claims).',
      th: 'ภาพรวม control ด้านความปลอดภัยที่ควรมีสำหรับบริการ AI (ไม่ใช่การรับรองมาตรฐาน)',
    },
    category: { en: 'Trust & Security', th: 'ความปลอดภัย' },
    downloadUrl: '/resources/security-posture-overview.pdf',
    format: 'PDF',
    size: '7 KB',
    pages: '6 pages',
    date: '2025-01-11',
  },
  {
    slug: 'pdpa-data-handling-checklist',
    type: 'whitepaper',
    title: {
      en: 'PDPA Data Handling Checklist for AI',
      th: 'เช็กลิสต์ PDPA สำหรับการจัดการข้อมูลในโปรเจกต์ AI',
    },
    description: {
      en: 'Operational checklist to align Legal/Compliance with Engineering (not legal advice).',
      th: 'เช็กลิสต์สำหรับทำงานร่วมกันระหว่าง Legal/Compliance และทีมวิศวกรรม (ไม่ใช่คำปรึกษากฎหมาย)',
    },
    category: { en: 'Governance', th: 'ธรรมาภิบาล' },
    downloadUrl: '/resources/pdpa-data-handling-checklist.pdf',
    format: 'PDF',
    size: '7 KB',
    pages: '6 pages',
    date: '2025-01-11',
  },
  {
    slug: 'ai-slo-sla-template',
    type: 'template',
    title: { en: 'AI SLO/SLA Template', th: 'เทมเพลต SLO/SLA สำหรับระบบ AI' },
    description: {
      en: 'Template for defining AI service SLOs/SLAs: latency, quality, uptime, and incident response.',
      th: 'เทมเพลตกำหนด SLO/SLA: latency, quality, uptime และแนวทาง incident response',
    },
    category: { en: 'Operations', th: 'การปฏิบัติการ' },
    downloadUrl: '/resources/ai-slo-sla-template.pdf',
    format: 'PDF',
    size: '6 KB',
    date: '2025-01-11',
  },
  {
    slug: 'mlops-templates',
    type: 'template',
    title: {
      en: 'MLOps Templates Pack',
      th: 'แพ็กเทมเพลต MLOps (monitoring / CI-CD / registry)',
    },
    description: {
      en: 'Starter templates for model registry, monitoring dashboards, and CI/CD workflows.',
      th: 'ชุดเทมเพลตเริ่มต้นสำหรับ model registry, monitoring dashboard และ workflow CI/CD',
    },
    category: { en: 'Technical', th: 'เทคนิค' },
    downloadUrl: '/resources/mlops-templates.zip',
    format: 'ZIP',
    size: '1 KB',
    date: '2025-01-11',
  },
];

export function getResourceBySlug(slug: string) {
  return RESOURCES.find(r => r.slug === slug);
}
