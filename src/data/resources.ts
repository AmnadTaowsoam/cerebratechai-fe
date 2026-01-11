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
  downloadUrl?: string; // public asset (/resources/*.txt)
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
    slug: 'ai-implementation-roadmap',
    type: 'whitepaper',
    title: {
      en: 'AI Implementation Roadmap: From Strategy to Production',
      th: 'โรดแมปการทำ AI: จากกลยุทธ์สู่ระบบที่ใช้งานจริง',
    },
    description: {
      en: 'A practical guide to plan and execute AI initiatives with clear milestones and deployment considerations.',
      th: 'คู่มือวางแผนงาน AI แบบเป็นขั้นตอน พร้อม milestone และข้อควรคิดเรื่องการ deploy',
    },
    category: { en: 'Strategy', th: 'กลยุทธ์' },
    downloadUrl: '/resources/ai-implementation-roadmap.txt',
    size: '≈ 1 KB',
    pages: 'Outline',
  },
  {
    slug: 'mlops-best-practices',
    type: 'whitepaper',
    title: { en: 'MLOps Best Practices: Scaling AI Operations', th: 'แนวปฏิบัติ MLOps: ขยายระบบ AI ให้ดูแลได้จริง' },
    description: {
      en: 'Learn how to implement robust MLOps practices for reliable AI system operations.',
      th: 'แนวทางทำ MLOps ให้ระบบเสถียร มี monitoring และ deployment ที่ทำซ้ำได้',
    },
    category: { en: 'Technical', th: 'เชิงเทคนิค' },
    downloadUrl: '/resources/mlops-best-practices.txt',
    size: '≈ 1 KB',
    pages: 'Outline',
  },
  {
    slug: 'computer-vision-webinar',
    type: 'webinar',
    title: { en: 'Computer Vision in Manufacturing: Real-World Case Studies', th: 'Computer Vision ในโรงงาน: กรณีศึกษาจริง' },
    description: {
      en: 'Watch our experts discuss successful computer vision implementations in manufacturing.',
      th: 'ฟังประสบการณ์การทำ vision ในโรงงาน ตั้งแต่ data ไปจนถึง deployment',
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
      en: 'Technical deep dive into optimizing large language models for Thai language.',
      th: 'เจาะลึกเทคนิคทำให้ LLM ทำงานกับภาษาไทยได้ดีขึ้น พร้อมแนวทางวัดผล',
    },
    category: { en: 'Technical', th: 'เชิงเทคนิค' },
    externalUrl: 'https://www.youtube.com/@cerebratechai',
    duration: '60 min',
    date: '2024-01-10',
  },
  {
    slug: 'ai-roi-guide',
    type: 'ebook',
    title: { en: 'The Complete Guide to AI ROI Measurement', th: 'คู่มือวัด ROI ของ AI แบบใช้งานได้จริง' },
    description: {
      en: 'How to measure and communicate AI business values: a practical ROI checklist.',
      th: 'เช็กลิสต์วัดผล AI ที่ผูกกับตัวเลขธุรกิจ และสื่อสารกับผู้บริหารได้ชัดเจน',
    },
    category: { en: 'Business', th: 'ธุรกิจ' },
    downloadUrl: '/resources/ai-roi-guide.txt',
    size: '≈ 1 KB',
    pages: 'Outline',
  },
  {
    slug: 'ai-project-template',
    type: 'template',
    title: { en: 'AI Project Plan Template (Kickstart → Production)', th: 'เทมเพลตแผนโปรเจกต์ AI (Kickstart → Production)' },
    description: {
      en: 'A lightweight template for scoping, milestones, risks, and acceptance criteria.',
      th: 'เทมเพลตสโคปงาน, milestone, ความเสี่ยง และ acceptance criteria แบบใช้งานเร็ว',
    },
    category: { en: 'Templates', th: 'เทมเพลต' },
    downloadUrl: '/resources/ai-project-template.txt',
    size: '≈ 1 KB',
    format: 'TXT',
  },
  {
    slug: 'mlops-templates',
    type: 'template',
    title: { en: 'MLOps Templates: Monitoring + Runbook', th: 'เทมเพลต MLOps: Monitoring + Runbook' },
    description: {
      en: 'Templates for monitoring checklist, alerting, and incident runbooks.',
      th: 'เทมเพลตตรวจ monitoring, แนวทาง alerting และ runbook สำหรับ incident',
    },
    category: { en: 'Templates', th: 'เทมเพลต' },
    downloadUrl: '/resources/mlops-templates.txt',
    size: '≈ 1 KB',
    format: 'TXT',
  },
  {
    slug: 'edge-ai-deployment',
    type: 'ebook',
    title: { en: 'Edge AI Deployment: Practical Playbook', th: 'คู่มือ Edge AI Deployment แบบ practical' },
    description: {
      en: 'Hardware selection, optimization, and deployment checklist for Edge AI.',
      th: 'แนวทางเลือกฮาร์ดแวร์, เทคนิค optimization และเช็กลิสต์ deploy สำหรับ Edge AI',
    },
    category: { en: 'Technical', th: 'เชิงเทคนิค' },
    downloadUrl: '/resources/edge-ai-deployment.txt',
    size: '≈ 1 KB',
    pages: 'Outline',
  },
  {
    slug: 'ai-project-checklist',
    type: 'template',
    title: { en: 'AI Project Checklist', th: 'เช็กลิสต์โปรเจกต์ AI' },
    description: {
      en: 'Comprehensive checklist covering data readiness, team skills, infrastructure, and success criteria for AI projects.',
      th: 'เช็กลิสต์ครอบคลุมทุกด้าน: ข้อมูล ทีมงาน โครงสร้าง และเกณฑ์วัดความสำเร็จของโปรเจกต์ AI',
    },
    category: { en: 'Strategy', th: 'กลยุทธ์' },
    downloadUrl: '/resources/ai-project-checklist.pdf',
    size: '850 KB',
    pages: '12 pages',
    format: 'PDF',
    date: '2025-01-11',
  },
  {
    slug: 'rag-readiness-assessment',
    type: 'template',
    title: { en: 'RAG Readiness Assessment', th: 'การประเมินความพร้อมสำหรับ RAG' },
    description: {
      en: 'Assess if your organization is ready for RAG implementation: document quality, use cases, and infrastructure requirements.',
      th: 'ประเมินว่าองค์กรพร้อมทำ RAG หรือไม่: คุณภาพเอกสาร กรณีใช้งาน และความต้องการด้านโครงสร้าง',
    },
    category: { en: 'LLM & RAG', th: 'LLM & RAG' },
    downloadUrl: '/resources/rag-readiness-assessment.pdf',
    size: '720 KB',
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
    size: '1.2 MB',
    pages: '16 pages',
    format: 'PDF',
    date: '2025-01-11',
  },
  {
    slug: 'ai-spc-starter-kit',
    type: 'template',
    title: { en: 'AI-SPC Starter Kit', th: 'ชุดเริ่มต้น AI-SPC' },
    description: {
      en: 'Templates and guidelines for implementing AI-powered Statistical Process Control in manufacturing environments.',
      th: 'เทมเพลตและแนวทางการทำ Statistical Process Control ด้วย AI ในสภาพแวดล้อมการผลิต',
    },
    category: { en: 'Manufacturing', th: 'การผลิต' },
    downloadUrl: '/resources/ai-spc-starter-kit.zip',
    size: '2.5 MB',
    format: 'ZIP',
    date: '2025-01-11',
  },
  {
    slug: 'cost-of-llm-in-production-thai',
    type: 'whitepaper',
    title: { en: 'Cost of LLM in Production (Thai Edition)', th: 'ต้นทุนการใช้ LLM ในโปรดักชัน (ฉบับภาษาไทย)' },
    description: {
      en: 'Detailed breakdown of LLM costs in production: API costs, hosting, fine-tuning, and optimization strategies (Thai language).',
      th: 'แยกต้นทุน LLM ในโปรดักชันอย่างละเอียด: ค่า API, hosting, fine-tuning และกลยุทธ์ลดต้นทุน',
    },
    category: { en: 'LLM & RAG', th: 'LLM & RAG' },
    downloadUrl: '/resources/cost-of-llm-in-production-thai.pdf',
    size: '980 KB',
    pages: '14 pages',
    format: 'PDF',
    date: '2025-01-11',
  },
];

export function getResourceBySlug(slug: string) {
  return RESOURCES.find((r) => r.slug === slug);
}
