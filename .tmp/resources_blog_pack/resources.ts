import { FileText, Video, BookOpen, Wrench } from 'lucide-react';

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
  externalUrl?: string; // external link
};

export const RESOURCE_TYPE_ICON: Record<ResourceType, any> = {
  whitepaper: FileText,
  webinar: Video,
  ebook: BookOpen,
  template: Wrench,
};

export const RESOURCES: ResourceItem[] = [
  // --- Upgraded to real downloadable assets (more premium than TXT placeholders) ---
  {
    slug: 'ai-implementation-roadmap',
    type: 'whitepaper',
    title: {
      en: 'AI Implementation Roadmap: From Strategy to Production',
      th: 'โรดแมปการทำ AI: จากกลยุทธ์สู่ระบบที่ใช้งานจริง',
    },
    description: {
      en: 'A practical roadmap with milestones and deployment considerations (no hype, realistic steps).',
      th: 'โรดแมปแบบใช้งานจริง พร้อม milestone และข้อควรคิดเรื่องการ deploy (ไม่ขายฝัน)',
    },
    category: { en: 'Strategy', th: 'กลยุทธ์' },
    downloadUrl: '/resources/ai-implementation-roadmap.pdf',
    size: '≈ 250 KB',
    pages: '6 pages',
    format: 'PDF',
    date: '2025-01-11',
  },
  {
    slug: 'mlops-best-practices',
    type: 'whitepaper',
    title: { en: 'MLOps Best Practices: Scaling AI Operations', th: 'แนวปฏิบัติ MLOps: ขยายระบบ AI ให้ดูแลได้จริง' },
    description: {
      en: 'Best practices for reliable AI operations: versioning, monitoring, releases, and governance.',
      th: 'แนวปฏิบัติสำหรับระบบ AI ที่เสถียร: versioning, monitoring, การปล่อยใช้งาน และ governance',
    },
    category: { en: 'Technical', th: 'เชิงเทคนิค' },
    downloadUrl: '/resources/mlops-best-practices.pdf',
    size: '≈ 280 KB',
    pages: '8 pages',
    format: 'PDF',
    date: '2025-01-11',
  },

  // Webinars (external)
  {
    slug: 'computer-vision-webinar',
    type: 'webinar',
    title: { en: 'Computer Vision in Manufacturing: Real-World Case Studies', th: 'Computer Vision ในโรงงาน: กรณีศึกษาจริง' },
    description: {
      en: 'Watch a practical discussion on vision projects in factories: data, evaluation, and deployment.',
      th: 'ฟังประสบการณ์การทำ vision ในโรงงาน ตั้งแต่ data ไปจนถึงการประเมินผลและ deployment',
    },
    category: { en: 'Case Study', th: 'กรณีศึกษา' },
    externalUrl: 'https://www.youtube.com/@cerebratechai',
    duration: '45 min',
    date: '2024-01-15',
  },
  {
    slug: 'llm-thai-optimization',
    type: 'webinar',
    title: { en: 'LLM Optimization for Thai Language Processing', th: 'ปรับ LLM สำหรับภาษาไทย' },
    description: {
      en: 'Technical deep dive into practical evaluation and optimization patterns for Thai language.',
      th: 'เจาะลึกการประเมินผลและเทคนิคทำให้ LLM ทำงานกับภาษาไทยได้ดีขึ้นแบบใช้งานจริง',
    },
    category: { en: 'Technical', th: 'เชิงเทคนิค' },
    externalUrl: 'https://www.youtube.com/@cerebratechai',
    duration: '60 min',
    date: '2024-01-10',
  },

  // --- Existing premium resources (already PDF/ZIP) ---
  {
    slug: 'ai-roi-guide',
    type: 'ebook',
    title: { en: 'The Complete Guide to AI ROI Measurement', th: 'คู่มือวัด ROI ของ AI แบบใช้งานได้จริง' },
    description: {
      en: 'How to measure and communicate AI business value with baselines, guardrails, and realistic targets.',
      th: 'วิธีวัดและสื่อสารคุณค่าทางธุรกิจของ AI ด้วย baseline, guardrails และเป้าหมายที่สมจริง',
    },
    category: { en: 'Strategy', th: 'กลยุทธ์' },
    downloadUrl: '/resources/ai-roi-guide.pdf',
    size: '≈ 320 KB',
    pages: '6 pages',
    format: 'PDF',
    date: '2025-01-11',
  },
  {
    slug: 'ai-project-template',
    type: 'template',
    title: { en: 'AI Project Plan Template (Kickstart → Production)', th: 'เทมเพลตแผนโปรเจกต์ AI (Kickstart → Production)' },
    description: {
      en: 'A lightweight spreadsheet template for scope, milestones, risks, and acceptance criteria.',
      th: 'เทมเพลตแบบสเปรดชีตสำหรับสโคป milestone ความเสี่ยง และ acceptance criteria',
    },
    category: { en: 'Templates', th: 'เทมเพลต' },
    downloadUrl: '/resources/ai-project-template.xlsx',
    size: '≈ 40 KB',
    format: 'XLSX',
    date: '2025-01-11',
  },
  {
    slug: 'mlops-templates',
    type: 'template',
    title: { en: 'MLOps Templates: Monitoring + Runbook', th: 'เทมเพลต MLOps: Monitoring + Runbook' },
    description: {
      en: 'Starter templates for monitoring checklist, alert matrix, and incident runbooks.',
      th: 'เทมเพลตเริ่มต้นสำหรับ monitoring checklist, alert matrix และ incident runbook',
    },
    category: { en: 'Templates', th: 'เทมเพลต' },
    downloadUrl: '/resources/mlops-templates.zip',
    size: '≈ 35 KB',
    format: 'ZIP',
    date: '2025-01-11',
  },
  {
    slug: 'edge-ai-deployment',
    type: 'ebook',
    title: { en: 'Edge AI Deployment: Practical Playbook', th: 'คู่มือ Edge AI Deployment แบบ practical' },
    description: {
      en: 'Hardware selection, optimization, and deployment checklist for Edge AI.',
      th: 'เลือกฮาร์ดแวร์ + optimization + เช็กลิสต์ deploy สำหรับ Edge AI',
    },
    category: { en: 'Edge AI', th: 'Edge AI' },
    downloadUrl: '/resources/edge-ai-deployment.pdf',
    size: '≈ 300 KB',
    pages: '8 pages',
    format: 'PDF',
    date: '2025-01-11',
  },
  {
    slug: 'ai-project-checklist',
    type: 'whitepaper',
    title: { en: 'AI Project Checklist', th: 'เช็กลิสต์โปรเจกต์ AI' },
    description: {
      en: 'Comprehensive checklist covering data readiness, team skills, infrastructure, and success criteria for AI projects.',
      th: 'เช็กลิสต์ครอบคลุมทุกด้าน: ข้อมูล ทีมงาน โครงสร้าง และเกณฑ์วัดความสำเร็จของโปรเจกต์ AI',
    },
    category: { en: 'Strategy', th: 'กลยุทธ์' },
    downloadUrl: '/resources/ai-project-checklist.pdf',
    size: '≈ 350 KB',
    pages: '12 pages',
    format: 'PDF',
    date: '2025-01-11',
  },
  {
    slug: 'rag-readiness-assessment',
    type: 'template',
    title: { en: 'RAG Readiness Assessment', th: 'การประเมินความพร้อมสำหรับ RAG' },
    description: {
      en: 'Assess readiness for RAG: document quality, use cases, and infrastructure requirements.',
      th: 'ประเมินว่าองค์กรพร้อมทำ RAG หรือไม่: คุณภาพเอกสาร กรณีใช้งาน และความต้องการด้านโครงสร้าง',
    },
    category: { en: 'LLM & RAG', th: 'LLM & RAG' },
    downloadUrl: '/resources/rag-readiness-assessment.pdf',
    size: '≈ 320 KB',
    pages: '8 pages',
    format: 'PDF',
    date: '2025-01-11',
  },
  {
    slug: 'computer-vision-dataset-guide',
    type: 'ebook',
    title: { en: 'Computer Vision Dataset Guide', th: 'คู่มือจัดการ Dataset สำหรับ Computer Vision' },
    description: {
      en: 'Best practices for collecting, labeling, and managing computer vision datasets for quality and production readiness.',
      th: 'แนวปฏิบัติที่ดีในการเก็บ ติดป้าย และจัดการ dataset สำหรับ computer vision ให้มีคุณภาพและพร้อมใช้งาน',
    },
    category: { en: 'Computer Vision', th: 'คอมพิวเตอร์วิชัน' },
    downloadUrl: '/resources/computer-vision-dataset-guide.pdf',
    size: '≈ 520 KB',
    pages: '16 pages',
    format: 'PDF',
    date: '2025-01-11',
  },
  {
    slug: 'ai-spc-starter-kit',
    type: 'template',
    title: { en: 'AI-SPC Starter Kit', th: 'ชุดเริ่มต้น AI-SPC' },
    description: {
      en: 'Templates and guidelines for implementing AI-assisted SPC workflows (starter kit).',
      th: 'เทมเพลตและแนวทางสำหรับเริ่มทำ workflow AI-assisted SPC (ชุดเริ่มต้น)',
    },
    category: { en: 'Manufacturing', th: 'การผลิต' },
    downloadUrl: '/resources/ai-spc-starter-kit.zip',
    size: '≈ 8 KB',
    format: 'ZIP',
    date: '2025-01-11',
  },
  {
    slug: 'cost-of-llm-in-production-thai',
    type: 'whitepaper',
    title: { en: 'Cost of LLM in Production (Thai Edition)', th: 'ต้นทุนการใช้ LLM ในโปรดักชัน (ฉบับภาษาไทย)' },
    description: {
      en: 'A practical cost framework for LLM systems in production: measurement and optimization levers (Thai language).',
      th: 'กรอบคิดต้นทุน LLM ในโปรดักชันแบบใช้งานจริง: วิธีวัดผลและจุดลดต้นทุน (ภาษาไทย)',
    },
    category: { en: 'LLM & RAG', th: 'LLM & RAG' },
    downloadUrl: '/resources/cost-of-llm-in-production-thai.pdf',
    size: '≈ 450 KB',
    pages: '14 pages',
    format: 'PDF',
    date: '2025-01-11',
  },

  // --- New resources (added; non-exaggerated, template-style) ---
  {
    slug: 'security-posture-overview',
    type: 'whitepaper',
    title: { en: 'AI Security Posture Overview', th: 'สรุป Security Posture สำหรับงาน AI' },
    description: {
      en: 'Best-practice security controls overview for AI services (not certification claims).',
      th: 'สรุปมาตรการความปลอดภัยที่ควรมีสำหรับบริการ AI (เป็น best-practice ไม่ใช่การอ้างใบรับรอง)',
    },
    category: { en: 'Trust & Security', th: 'ความน่าเชื่อถือและความปลอดภัย' },
    downloadUrl: '/resources/security-posture-overview.pdf',
    size: '≈ 260 KB',
    pages: '6 pages',
    format: 'PDF',
    date: '2025-01-11',
  },
  {
    slug: 'pdpa-data-handling-checklist',
    type: 'whitepaper',
    title: { en: 'PDPA Data Handling Checklist for AI', th: 'เช็กลิสต์ PDPA สำหรับการใช้ข้อมูลทำ AI' },
    description: {
      en: 'Operational checklist to align Legal/Compliance with Engineering (not legal advice).',
      th: 'เช็กลิสต์เชิงปฏิบัติการเพื่อคุยให้ตรงกันระหว่างกฎหมาย/คอมพลายแอนซ์และทีมเทคนิค (ไม่ใช่คำแนะนำทางกฎหมาย)',
    },
    category: { en: 'Governance', th: 'ธรรมาภิบาล' },
    downloadUrl: '/resources/pdpa-data-handling-checklist.pdf',
    size: '≈ 260 KB',
    pages: '6 pages',
    format: 'PDF',
    date: '2025-01-11',
  },
  {
    slug: 'rag-evaluation-kit',
    type: 'template',
    title: { en: 'RAG Evaluation Kit', th: 'ชุดทดสอบ RAG (Evaluation Kit)' },
    description: {
      en: 'Starter kit: evaluation questions, scoring rubric, and templates for groundedness checks.',
      th: 'ชุดเริ่มต้น: คำถามทดสอบ เกณฑ์ให้คะแนน และเทมเพลตตรวจ groundedness',
    },
    category: { en: 'LLM & RAG', th: 'LLM & RAG' },
    downloadUrl: '/resources/rag-evaluation-kit.zip',
    size: '≈ 6 KB',
    format: 'ZIP',
    date: '2025-01-11',
  },
  {
    slug: 'vendor-selection-scorecard',
    type: 'template',
    title: { en: 'AI Vendor Selection Scorecard', th: 'ตารางให้คะแนนเลือกผู้ให้บริการ AI' },
    description: {
      en: 'A practical spreadsheet scorecard for evaluating AI partners: delivery, security, MLOps, and measurable outcomes.',
      th: 'สเปรดชีตให้คะแนนคัดเลือกผู้ให้บริการ: การส่งมอบจริง ความปลอดภัย MLOps และผลลัพธ์ที่วัดได้',
    },
    category: { en: 'Business', th: 'ธุรกิจ' },
    downloadUrl: '/resources/vendor-selection-scorecard.xlsx',
    size: '≈ 18 KB',
    format: 'XLSX',
    date: '2025-01-11',
  },
  {
    slug: 'ai-slo-sla-template',
    type: 'template',
    title: { en: 'AI SLO/SLA Template', th: 'เทมเพลต SLO/SLA สำหรับระบบ AI' },
    description: {
      en: 'Template to define reliability and quality expectations for AI systems (not legal advice).',
      th: 'เทมเพลตนิยามความเสถียรและคุณภาพของระบบ AI (ไม่ใช่คำแนะนำทางกฎหมาย)',
    },
    category: { en: 'Operations', th: 'การปฏิบัติการ' },
    downloadUrl: '/resources/ai-slo-sla-template.pdf',
    size: '≈ 240 KB',
    pages: '5 pages',
    format: 'PDF',
    date: '2025-01-11',
  },
];

export function getResourceBySlug(slug: string) {
  return RESOURCES.find((r) => r.slug === slug);
}
