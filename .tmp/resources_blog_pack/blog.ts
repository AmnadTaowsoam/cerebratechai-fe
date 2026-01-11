export type BlogPost = {
  slug: string;
  title: { en: string; th: string };
  excerpt: { en: string; th: string };
  author: string;
  date: string; // ISO yyyy-mm-dd
  readTime: { en: string; th: string };
  category: string;
  content: { en: string[]; th: string[] };
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'ai-implementation-best-practices',
    title: {
      en: 'AI Implementation Best Practices: From Pilot to Production',
      th: 'แนวทางทำ AI ให้ใช้งานจริง: จาก Pilot สู่ Production',
    },
    excerpt: {
      en: 'A practical checklist to deliver AI projects end-to-end: scope, data readiness, evaluation, rollout, and operations.',
      th: 'เช็กลิสต์แบบใช้งานจริงสำหรับส่งมอบโปรเจกต์ AI ตั้งแต่สโคป ข้อมูล การประเมินผล ไปจนถึงการปล่อยใช้งานและการดูแล',
    },
    author: 'CerebraTechAI Team',
    date: '2024-01-12',
    readTime: { en: '8 min read', th: 'อ่าน 8 นาที' },
    category: 'Implementation',
    content: {
      en: [
        'Shipping AI is as much about product, data, and operations as it is about models.',
        'Start with a narrow use case, define success metrics, and validate data readiness early.',
        'Design for integration, monitoring, and safe rollout to avoid “POC purgatory”.',
      ],
      th: [
        'การทำ AI ให้ “ใช้งานจริง” เป็นเรื่องของ product + data + operations พอ ๆ กับตัวโมเดล',
        'เริ่มจาก use-case ที่แคบพอ วัดผลได้ และตรวจความพร้อมของข้อมูลตั้งแต่ต้น',
        'ออกแบบ integration, monitoring และการทยอยปล่อยใช้งานอย่างปลอดภัย เพื่อลดโอกาสติดหล่ม POC',
      ],
    },
  },
  {
    slug: 'mlops-production-guide',
    title: {
      en: 'MLOps in Production: A Practical Guide to Scaling AI Systems',
      th: 'MLOps ในโปรดักชัน: แนวทางขยายระบบ AI ให้เสถียรและดูแลได้จริง',
    },
    excerpt: {
      en: 'An end-to-end overview of MLOps: versioning, deployment, monitoring, and continuous improvement.',
      th: 'ภาพรวมการทำ MLOps ตั้งแต่ versioning, deployment, monitoring ไปจนถึงการปรับปรุงต่อเนื่อง',
    },
    author: 'CerebraTechAI Team',
    date: '2024-01-10',
    readTime: { en: '12 min read', th: 'อ่าน 12 นาที' },
    category: 'MLOps',
    content: {
      en: [
        'Version everything: data, code, models, and configuration.',
        'Monitor system health and quality signals, not just latency and errors.',
        'Treat releases like software: canary, rollback, and runbooks.',
      ],
      th: [
        'ทำเวอร์ชันให้ทุกอย่าง: ข้อมูล โค้ด โมเดล และคอนฟิก',
        'ติดตามทั้งสุขภาพระบบและสัญญาณคุณภาพ ไม่ใช่แค่ latency/error',
        'ปล่อยโมเดลแบบซอฟต์แวร์: canary, rollback และมี runbook',
      ],
    },
  },
  {
    slug: 'computer-vision-manufacturing',
    title: {
      en: 'Computer Vision in Manufacturing: Practical Quality Inspection',
      th: 'Computer Vision ในโรงงาน: แนวทางตรวจคุณภาพแบบใช้งานจริง',
    },
    excerpt: {
      en: 'A practical approach to vision-based inspection: data collection, labeling, evaluation, and deployment considerations.',
      th: 'แนวทางทำ vision สำหรับตรวจคุณภาพ: การเก็บข้อมูล ติดป้าย ประเมินผล และประเด็นตอน deploy',
    },
    author: 'CerebraTechAI Team',
    date: '2024-01-05',
    readTime: { en: '10 min read', th: 'อ่าน 10 นาที' },
    category: 'Case Study',
    content: {
      en: [
        'Most inspection value comes from reducing rework, preventing escapes, and improving throughput.',
        'Dataset quality and clear acceptance criteria matter more than “fancy models”.',
        'Plan for lighting, camera placement, and change management from day one.',
      ],
      th: [
        'มูลค่าหลักของงานตรวจคุณภาพมักมาจากการลด rework ลดของหลุด และเพิ่ม throughput',
        'คุณภาพ dataset และ acceptance criteria ที่ชัด สำคัญกว่า “โมเดลเทพ”',
        'วางแผนเรื่องแสง ตำแหน่งกล้อง และการปรับ process ตั้งแต่วันแรก',
      ],
    },
  },
  {
    slug: 'llm-thai-language-optimization',
    title: {
      en: 'Optimizing LLMs for Thai Language: Challenges and Solutions',
      th: 'ปรับ LLM ให้เข้าใจภาษาไทย: ปัญหาที่เจอบ่อยและแนวทางแก้',
    },
    excerpt: {
      en: 'Thai has unique tokenization and ambiguity issues. Learn practical evaluation and mitigation patterns.',
      th: 'ภาษาไทยมีความกำกวมและรายละเอียดเฉพาะทาง เรียนรู้วิธีประเมินผลและแนวทางแก้แบบใช้งานจริง',
    },
    author: 'CerebraTechAI Team',
    date: '2024-01-03',
    readTime: { en: '9 min read', th: 'อ่าน 9 นาที' },
    category: 'LLM',
    content: {
      en: [
        'Create Thai-first evaluation sets based on your real tasks and documents.',
        'Use retrieval + grounding checks to reduce hallucinations in enterprise contexts.',
        'Prefer simple, testable prompt patterns over complex “prompt spaghetti”.',
      ],
      th: [
        'สร้างชุดทดสอบภาษาไทยจากงานจริงและเอกสารจริงของคุณ',
        'ใช้ retrieval + grounding checks เพื่อลดการหลอนในบริบทธุรกิจ',
        'ใช้ prompt ที่เรียบง่ายและทดสอบได้ แทนการซ้อน prompt ซับซ้อนเกินจำเป็น',
      ],
    },
  },
  {
    slug: 'ai-roi-measurement',
    title: {
      en: 'Measuring AI ROI: Beyond Technical Metrics',
      th: 'วัด ROI ของ AI: มากกว่าแค่ metric ทางเทคนิค',
    },
    excerpt: {
      en: 'How to connect AI performance to business outcomes, with baselines, guardrails, and realistic targets.',
      th: 'วิธีผูกผลลัพธ์ AI กับตัวเลขธุรกิจ พร้อม baseline, guardrails และเป้าหมายที่สมจริง',
    },
    author: 'CerebraTechAI Team',
    date: '2024-01-02',
    readTime: { en: '7 min read', th: 'อ่าน 7 นาที' },
    category: 'Business',
    content: {
      en: [
        'Start with a baseline and measure improvement against it.',
        'Define “cost per outcome” and track it alongside quality.',
        'Avoid over-optimizing a single metric that breaks real operations.',
      ],
      th: [
        'เริ่มจาก baseline แล้ววัดการเปลี่ยนแปลงเทียบ baseline',
        'นิยาม “ต้นทุนต่อผลลัพธ์” และติดตามควบคู่คุณภาพ',
        'อย่าปรับให้เก่งที่ metric เดียวจนกระทบงานจริง',
      ],
    },
  },
  {
    slug: 'edge-ai-deployment',
    title: {
      en: 'Edge AI Deployment: Practical Playbook',
      th: 'Edge AI Deployment: คู่มือแบบ practical',
    },
    excerpt: {
      en: 'A checklist for deploying AI at the edge: hardware, reliability, monitoring, and security basics.',
      th: 'เช็กลิสต์การ deploy AI ที่หน้างาน: ฮาร์ดแวร์ ความเสถียร monitoring และความปลอดภัย',
    },
    author: 'CerebraTechAI Team',
    date: '2024-01-01',
    readTime: { en: '8 min read', th: 'อ่าน 8 นาที' },
    category: 'Edge AI',
    content: {
      en: [
        'Design for offline mode, buffering, and retry in real environments.',
        'Plan remote updates with version pinning and rollback.',
        'Instrument logs and health checks early to reduce on-site downtime.',
      ],
      th: [
        'ออกแบบให้รองรับ offline mode, buffering และ retry สำหรับหน้างานจริง',
        'วางแผน remote update พร้อม version pinning และ rollback',
        'ใส่ logging และ health checks ตั้งแต่ต้น เพื่อลด downtime หน้างาน',
      ],
    },
  },

  // --- New posts (added as structured, non-exaggerated, practical guides) ---
  {
    slug: 'rag-in-production-playbook',
    title: {
      en: 'RAG in Production: A Practical Playbook',
      th: 'RAG ในโปรดักชัน: แนวทางทำให้ใช้งานได้จริง',
    },
    excerpt: {
      en: 'How to build and evaluate RAG systems with realistic expectations, governance, and regression testing.',
      th: 'วิธีทำ RAG แบบคุมคุณภาพได้จริง: ตั้งแต่เอกสาร การประเมินผล ไปจนถึง governance และ regression test',
    },
    author: 'CerebraTechAI Team',
    date: '2025-08-01',
    readTime: { en: '11 min read', th: 'อ่าน 11 นาที' },
    category: 'LLM & RAG',
    content: {
      en: [
        'Start with a “golden set” of real questions and expected references.',
        'Control access to documents and add redaction where needed.',
        'Run regression tests before each prompt/retrieval change.',
      ],
      th: [
        'เริ่มด้วย “golden set” จากคำถามจริงและแหล่งอ้างอิงที่ควรได้',
        'คุมสิทธิ์เข้าถึงเอกสาร และทำ redaction เมื่อจำเป็น',
        'ทำ regression tests ทุกครั้งก่อนเปลี่ยน prompt/retrieval',
      ],
    },
  },
  {
    slug: 'pdpa-gdpr-for-ai-projects',
    title: {
      en: 'PDPA/GDPR for AI Projects: Operational Checklist',
      th: 'PDPA/GDPR สำหรับโปรเจกต์ AI: เช็กลิสต์เชิงปฏิบัติการ',
    },
    excerpt: {
      en: 'A practical alignment checklist for Legal/Compliance and Engineering (not legal advice).',
      th: 'เช็กลิสต์เพื่อให้ทีมกฎหมาย/คอมพลายแอนซ์และทีมเทคนิคร่วมกันทำงานได้ (ไม่ใช่คำแนะนำทางกฎหมาย)',
    },
    author: 'CerebraTechAI Team',
    date: '2025-07-15',
    readTime: { en: '9 min read', th: 'อ่าน 9 นาที' },
    category: 'Governance',
    content: {
      en: [
        'Document data purpose, retention, and access controls early.',
        'Minimize sensitive data and log access for auditability.',
        'Define an incident and data-subject request process in advance.',
      ],
      th: [
        'ระบุ purpose/retention/สิทธิ์เข้าถึงข้อมูลตั้งแต่ต้น',
        'ลดข้อมูลอ่อนไหวเท่าที่ทำได้ และเก็บ log การเข้าถึงเพื่อ audit',
        'เตรียมกระบวนการ incident และ data-subject request ไว้ล่วงหน้า',
      ],
    },
  },
  {
    slug: 'fine-tune-vs-rag',
    title: {
      en: 'Fine-tuning vs RAG: How to Choose (Practical Criteria)',
      th: 'Fine-tune vs RAG: เลือกยังไงให้คุ้ม (เกณฑ์แบบใช้งานจริง)',
    },
    excerpt: {
      en: 'Decision criteria: data quality, update frequency, cost, latency, and governance constraints.',
      th: 'เกณฑ์ตัดสินใจ: คุณภาพข้อมูล ความถี่การอัปเดต ต้นทุน latency และข้อจำกัดด้าน governance',
    },
    author: 'CerebraTechAI Team',
    date: '2025-06-20',
    readTime: { en: '8 min read', th: 'อ่าน 8 นาที' },
    category: 'LLM',
    content: {
      en: [
        'Use RAG when knowledge changes frequently or must be traceable to sources.',
        'Fine-tune when behavior/style must be consistent and data is stable and high-quality.',
        'Often the best answer is hybrid: small fine-tune + RAG + strong evaluation.',
      ],
      th: [
        'ใช้ RAG เมื่อความรู้เปลี่ยนบ่อย หรือจำเป็นต้อง trace กลับไปที่เอกสาร',
        'ใช้ fine-tune เมื่ออยากได้ behavior ที่คงที่ และข้อมูลมีคุณภาพ/นิ่งพอ',
        'หลายเคสคำตอบที่คุ้มคือแบบผสม: fine-tune เล็ก ๆ + RAG + evaluation ที่ดี',
      ],
    },
  },
  {
    slug: 'ai-spc-practical',
    title: {
      en: 'AI + SPC: Practical Quality Intelligence for Factories',
      th: 'AI + SPC: Quality Intelligence แบบใช้งานจริงในโรงงาน',
    },
    excerpt: {
      en: 'How to combine control charts with AI signals and operational workflows for QA/QC teams.',
      th: 'วิธีผสาน control chart กับสัญญาณจาก AI และ workflow ของทีม QA/QC ให้ทำงานได้จริง',
    },
    author: 'CerebraTechAI Team',
    date: '2025-05-28',
    readTime: { en: '10 min read', th: 'อ่าน 10 นาที' },
    category: 'Manufacturing',
    content: {
      en: [
        'Start with stable baselines and clear rules for investigation.',
        'Use AI to prioritize and summarize context, not to replace ownership.',
        'Track corrective actions and verify effectiveness over time.',
      ],
      th: [
        'เริ่มจาก baseline ที่นิ่ง และกติกา investigation ที่ชัด',
        'ใช้ AI เพื่อช่วยจัดลำดับ/สรุปบริบท ไม่ใช่แทนความรับผิดชอบของทีม',
        'ติดตาม corrective action และตรวจสอบผลในระยะถัดไป',
      ],
    },
  },
  {
    slug: 'incident-response-for-ai',
    title: {
      en: 'Incident Response for AI Systems: A Starter Runbook',
      th: 'Incident Response สำหรับระบบ AI: Runbook ฉบับเริ่มต้น',
    },
    excerpt: {
      en: 'A practical runbook structure for outages, quality regressions, and data pipeline issues.',
      th: 'โครง runbook สำหรับเหตุระบบล่ม คุณภาพตก หรือปัญหา data pipeline',
    },
    author: 'CerebraTechAI Team',
    date: '2025-05-01',
    readTime: { en: '9 min read', th: 'อ่าน 9 นาที' },
    category: 'Operations',
    content: {
      en: [
        'Define severity levels and owners before the first incident.',
        'Prepare rollback and fallback modes to keep operations running.',
        'Write postmortems and add regression tests for repeated issues.',
      ],
      th: [
        'กำหนดระดับความรุนแรงและผู้รับผิดชอบก่อนเกิดเหตุจริง',
        'เตรียม rollback และ fallback เพื่อให้งานเดินต่อได้',
        'ทำ postmortem และเพิ่ม regression tests กันปัญหาซ้ำ',
      ],
    },
  },
  {
    slug: 'ai-vendor-selection',
    title: {
      en: 'Choosing an AI Partner: A Practical Vendor Scorecard',
      th: 'เลือกทีม/ผู้ให้บริการ AI: Scorecard แบบใช้งานจริง',
    },
    excerpt: {
      en: 'A scorecard to evaluate vendors on delivery, security, MLOps readiness, and measurable outcomes.',
      th: 'ตารางให้คะแนนเพื่อคัดเลือกผู้ให้บริการจากการส่งมอบจริง ความปลอดภัย MLOps และผลลัพธ์ที่วัดได้',
    },
    author: 'CerebraTechAI Team',
    date: '2025-04-10',
    readTime: { en: '7 min read', th: 'อ่าน 7 นาที' },
    category: 'Business',
    content: {
      en: [
        'Ask for evidence: evaluation plans, runbooks, and deployment practices.',
        'Prefer clarity over hype: scope, acceptance criteria, and cost transparency.',
        'Check governance: access control, logging, and privacy handling.',
      ],
      th: [
        'ขอดูหลักฐาน: แผนประเมินผล runbook และแนวทาง deployment',
        'เลือกความชัดมากกว่าคำโฆษณา: สโคป เกณฑ์ผ่าน และต้นทุนโปร่งใส',
        'ดู governance: คุมสิทธิ์ log และการจัดการข้อมูลส่วนบุคคล',
      ],
    },
  },
];
