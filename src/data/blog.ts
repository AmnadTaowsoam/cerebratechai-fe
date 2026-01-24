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
      th: 'ทำ AI ให้ไปถึง Production: แนวทางจาก Pilot สู่ระบบจริง',
    },
    excerpt: {
      en: 'A practical checklist to deliver AI projects end-to-end: scope, data readiness, evaluation, rollout, and operations.',
      th: 'เช็กลิสต์แบบใช้งานได้จริงสำหรับทำโปรเจกต์ AI ตั้งแต่ต้นจนจบ: scope, data readiness, evaluation, rollout และ operations',
    },
    author: 'CerebraTechAI Team',
    date: '2024-01-12',
    readTime: { en: '8 min read', th: 'อ่าน 8 นาที' },
    category: 'Implementation',
    content: {
      en: [
        'Shipping AI is as much about product, data, and operations as it is about models.',
        'Start with a narrow use case, define success metrics, and validate data readiness early.',
        'Design for integration, monitoring, and safe rollout to avoid POC purgatory.',
      ],
      th: [
        'การส่งมอบ AI ให้ใช้ได้จริง เป็นเรื่องของ product + data + operations พอ ๆ กับเรื่องโมเดล',
        'เริ่มจาก use case ที่แคบพอ วัดผลได้ชัด และตรวจความพร้อมของข้อมูลตั้งแต่ต้น',
        'ออกแบบการเชื่อมต่อ ระบบติดตาม และการ rollout แบบปลอดภัย เพื่อไม่ติดอยู่ใน “POC วนลูป”',
      ],
    },
  },
  {
    slug: 'mlops-production-guide',
    title: {
      en: 'MLOps in Production: A Practical Guide to Scaling AI Systems',
      th: 'MLOps ใน Production: คู่มือขยายระบบ AI แบบใช้งานจริง',
    },
    excerpt: {
      en: 'An end-to-end overview of MLOps: versioning, deployment, monitoring, and continuous improvement.',
      th: 'ภาพรวม MLOps ตั้งแต่ต้นจนจบ: versioning, deployment, monitoring และการปรับปรุงอย่างต่อเนื่อง',
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
        'ทำ version ให้ครบ: data, code, model และ configuration',
        'monitor ทั้งสุขภาพระบบและสัญญาณคุณภาพ ไม่ใช่แค่ latency กับ error',
        'ปล่อยเวอร์ชันแบบซอฟต์แวร์: canary, rollback และมี runbook ให้ทีมใช้ได้จริง',
      ],
    },
  },
  {
    slug: 'computer-vision-manufacturing',
    title: {
      en: 'Computer Vision in Manufacturing: Practical Quality Inspection',
      th: 'Computer Vision ในโรงงาน: ตรวจคุณภาพแบบใช้งานจริง',
    },
    excerpt: {
      en: 'A practical approach to vision-based inspection: data collection, labeling, evaluation, and deployment considerations.',
      th: 'แนวทางทำ inspection ด้วย vision: เก็บข้อมูล ทำ label ประเมินผล และข้อควรคำนึงก่อน deploy',
    },
    author: 'CerebraTechAI Team',
    date: '2024-01-05',
    readTime: { en: '10 min read', th: 'อ่าน 10 นาที' },
    category: 'Computer Vision',
    content: {
      en: [
        'Define defect taxonomy and acceptance criteria early; it drives data and labeling.',
        'Build a balanced dataset (normal vs defect) and keep a clean “golden set” for evaluation.',
        'Plan for lighting, camera stability, and edge constraints before scaling.',
      ],
      th: [
        'นิยามชนิด defect และเกณฑ์รับได้ให้ชัดตั้งแต่ต้น เพราะจะกำหนดทั้ง data และการทำ label',
        'ทำ dataset ให้สมดุล (ปกติ vs defect) และกัน “golden set” ไว้ประเมินผลแบบสม่ำเสมอ',
        'คิดเรื่องแสง ความนิ่งของกล้อง และข้อจำกัดที่หน้างาน (edge) ก่อนขยายผล',
      ],
    },
  },
  {
    slug: 'llm-thai-language-optimization',
    title: {
      en: 'LLM for Thai: Practical Optimization & Evaluation',
      th: 'LLM ภาษาไทย: ปรับจูนและประเมินผลแบบลงมือทำ',
    },
    excerpt: {
      en: 'Thai tokenization, spacing, retrieval quality, and evaluation pitfalls—plus practical tips.',
      th: 'ประเด็นสำคัญของภาษาไทยที่กระทบ RAG/LLM: tokenization, เว้นวรรค, retrieval และหลุมพรางตอนประเมินผล',
    },
    author: 'CerebraTechAI Team',
    date: '2024-01-03',
    readTime: { en: '15 min read', th: 'อ่าน 15 นาที' },
    category: 'LLM',
    content: {
      en: [
        'Thai tokenization and spacing can affect retrieval and evaluation significantly.',
        'Use task-specific evaluation sets, not just generic benchmarks.',
        'Treat prompts and retrieval configs as versioned artifacts—test regressions.',
      ],
      th: [
        'ภาษาไทยมีผลต่อ retrieval และ evaluation มาก (การตัดคำ/การเว้นวรรค/การ normalize)',
        'ใช้ evaluation set ที่ตรงกับงานจริง มากกว่าอาศัย benchmark ทั่วไปอย่างเดียว',
        'ทำ version ให้ prompt และ retrieval config และมี regression test ก่อนปล่อย',
      ],
    },
  },
  {
    slug: 'ai-roi-measurement',
    title: {
      en: 'Measuring AI ROI: Beyond Technical Metrics',
      th: 'วัด ROI ของ AI: ให้เกินกว่าตัวเลขทางเทคนิค',
    },
    excerpt: {
      en: 'How to measure and communicate business value of AI investments to stakeholders and executives.',
      th: 'วิธีวัดและสื่อสารมูลค่าทางธุรกิจของ AI ให้ผู้เกี่ยวข้องและผู้บริหารเข้าใจตรงกัน',
    },
    author: 'CerebraTechAI Team',
    date: '2024-01-02',
    readTime: { en: '7 min read', th: 'อ่าน 7 นาที' },
    category: 'Business',
    content: {
      en: [
        'Tie metrics to business levers: yield, cycle time, churn, cost to serve.',
        'Measure before/after with clear guardrails and a realistic baseline.',
        'Plan ownership: who monitors, who responds, and how improvements ship.',
      ],
      th: [
        'ผูก metric เข้ากับตัวขับเคลื่อนธุรกิจ: yield, cycle time, churn, cost to serve',
        'วัดก่อน/หลัง โดยมี baseline ที่สมจริง และ guardrail กันหลุดคุณภาพ',
        'กำหนดเจ้าของงานให้ชัด: ใคร monitor ใครรับมือ incident และแพตเทิร์นการปรับปรุง',
      ],
    },
  },
  {
    slug: 'edge-ai-deployment',
    title: {
      en: 'Edge AI Deployment: Bringing Intelligence to the Edge',
      th: 'Edge AI Deployment: นำความฉลาดไปอยู่ที่หน้างาน',
    },
    excerpt: {
      en: 'Deploying AI at the edge: hardware constraints, latency, privacy, connectivity, and optimization techniques.',
      th: 'แนวทาง deploy AI ที่ edge: ข้อจำกัดฮาร์ดแวร์ ความหน่วง ความเป็นส่วนตัว การเชื่อมต่อ และการ optimize',
    },
    author: 'CerebraTechAI Team',
    date: '2024-01-01',
    readTime: { en: '11 min read', th: 'อ่าน 11 นาที' },
    category: 'Edge AI',
    content: {
      en: [
        'Edge constraints are about latency, privacy, and connectivity—not just compute.',
        'Choose the simplest model that meets accuracy and latency targets.',
        'Plan updates and monitoring: logging, rollbacks, and drift checks.',
      ],
      th: [
        'ข้อจำกัดของ edge คือ latency, privacy และการเชื่อมต่อ ไม่ใช่แค่ compute',
        'เลือกโมเดลที่ “ง่ายที่สุด” แต่ยังผ่านเป้าความแม่นยำและเวลา',
        'วางแผนการอัปเดตและการติดตาม: logging, rollback และตรวจ drift',
      ],
    },
  },
  {
    slug: 'rag-in-production-playbook',
    title: {
      en: 'RAG in Production: A Practical Playbook',
      th: 'RAG ใน Production: เพลย์บุ๊กแบบใช้งานจริง',
    },
    excerpt: {
      en: 'A set of practical practices for RAG: data governance, evaluation, regression tests, and safe rollout.',
      th: 'แนวทางทำ RAG ให้พร้อม production: governance, evaluation, regression test และ rollout แบบปลอดภัย',
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
        'เริ่มจาก “golden set” ของคำถามจริง และ reference ที่ควรตอบอ้างอิงได้',
        'ควบคุมสิทธิ์เข้าถึงเอกสาร และทำ redaction เมื่อต้องเกี่ยวข้องข้อมูลอ่อนไหว',
        'รัน regression test ทุกครั้งก่อนเปลี่ยน prompt หรือ retrieval',
      ],
    },
  },
  {
    slug: 'pdpa-gdpr-for-ai-projects',
    title: {
      en: 'PDPA/GDPR for AI Projects: Operational Checklist',
      th: 'PDPA/GDPR สำหรับโปรเจกต์ AI: เช็กลิสต์การทำงาน',
    },
    excerpt: {
      en: 'A practical alignment checklist for Legal/Compliance and Engineering (not legal advice).',
      th: 'เช็กลิสต์ทำงานร่วมกันระหว่าง Legal/Compliance และทีมวิศวกรรม (ไม่ใช่คำปรึกษากฎหมาย)',
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
        'ระบุ purpose/retention/access control ของข้อมูลให้ชัดตั้งแต่ต้น',
        'ลดการใช้ข้อมูลอ่อนไหว และบันทึกการเข้าถึงเพื่อรองรับ audit',
        'กำหนดกระบวนการ incident และคำขอเจ้าของข้อมูล (DSR) ล่วงหน้า',
      ],
    },
  },
  {
    slug: 'fine-tune-vs-rag',
    title: {
      en: 'Fine-tuning vs RAG: How to Choose (Practical Criteria)',
      th: 'Fine-tune vs RAG: เลือกอย่างไร (เกณฑ์แบบใช้งานจริง)',
    },
    excerpt: {
      en: 'Decision criteria: data quality, update frequency, cost, latency, and governance constraints.',
      th: 'เกณฑ์ตัดสินใจ: คุณภาพข้อมูล ความถี่การเปลี่ยนแปลง ต้นทุน latency และข้อจำกัดด้าน governance',
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
        'ใช้ RAG เมื่อความรู้เปลี่ยนบ่อย หรือต้องอ้างอิงแหล่งข้อมูลได้',
        'ทำ fine-tune เมื่ออยากให้พฤติกรรม/สไตล์คงที่ และมีข้อมูลคุณภาพสูงที่นิ่งพอ',
        'หลายครั้งคำตอบที่ดีที่สุดคือ hybrid: fine-tune เล็กน้อย + RAG + evaluation ที่เข้ม',
      ],
    },
  },
  {
    slug: 'ai-spc-practical',
    title: {
      en: 'AI-SPC: Practical Guide for Manufacturing Teams',
      th: 'AI-SPC: คู่มือแบบใช้งานจริงสำหรับทีมโรงงาน',
    },
    excerpt: {
      en: 'How to add AI-assisted SPC in real lines: data, thresholds, false alarms, and rollout steps.',
      th: 'แนวทางเพิ่ม SPC แบบมี AI ช่วย: data, threshold, false alarm และขั้นตอน rollout',
    },
    author: 'CerebraTechAI Team',
    date: '2025-05-28',
    readTime: { en: '9 min read', th: 'อ่าน 9 นาที' },
    category: 'Manufacturing',
    content: {
      en: [
        'Start with one critical metric and one line; keep scope tight.',
        'Make alarms actionable: define owners, response steps, and escalation.',
        'Track false alarms and drift; improve thresholds and models iteratively.',
      ],
      th: [
        'เริ่มจาก metric สำคัญ 1 ตัว และไลน์ผลิต 1 ไลน์ก่อน เพื่อคุม scope',
        'ทำให้ alarm “ทำงานต่อได้จริง”: ระบุเจ้าของ ขั้นตอนตอบสนอง และการ escalate',
        'ติดตาม false alarm และ drift แล้วปรับ threshold/โมเดลแบบเป็นรอบ',
      ],
    },
  },
  {
    slug: 'incident-response-for-ai',
    title: {
      en: 'Incident Response for AI Systems: A Practical Runbook',
      th: 'Incident Response สำหรับระบบ AI: Runbook แบบใช้งานจริง',
    },
    excerpt: {
      en: 'Runbooks, alerting, and triage patterns for AI incidents: data, model, infra, and product behaviors.',
      th: 'runbook, alerting และ triage สำหรับ incident ของ AI: data, model, infra และพฤติกรรมสินค้า',
    },
    author: 'CerebraTechAI Team',
    date: '2025-05-01',
    readTime: { en: '10 min read', th: 'อ่าน 10 นาที' },
    category: 'Operations',
    content: {
      en: [
        'Define severities and SLOs; decide what “broken” means for your AI feature.',
        'Separate failure modes: data pipeline, model serving, retrieval, or UI/product behavior.',
        'Keep a rollback plan and a communication template for stakeholders.',
      ],
      th: [
        'กำหนด severity และ SLO ให้ชัด ว่า “พัง” ของฟีเจอร์ AI หมายถึงอะไร',
        'แยก failure mode ให้ได้: data pipeline, model serving, retrieval หรือพฤติกรรม UI/product',
        'มีแผน rollback และเทมเพลตสื่อสารกับผู้เกี่ยวข้องไว้เสมอ',
      ],
    },
  },
  {
    slug: 'ai-vendor-selection',
    title: {
      en: 'Selecting an AI Vendor: A Practical Scorecard',
      th: 'เลือกเวนเดอร์ AI: scorecard แบบใช้งานจริง',
    },
    excerpt: {
      en: 'How to compare vendors by delivery risk, security posture, cost, and long-term maintainability.',
      th: 'วิธีเทียบเวนเดอร์ด้วยความเสี่ยงการส่งมอบ ความปลอดภัย ต้นทุน และการดูแลระยะยาว',
    },
    author: 'CerebraTechAI Team',
    date: '2025-04-10',
    readTime: { en: '8 min read', th: 'อ่าน 8 นาที' },
    category: 'Strategy',
    content: {
      en: [
        'Ask for evidence: a small pilot plan, measurable acceptance criteria, and clear ownership.',
        'Review security and data handling: access controls, logging, and retention policies.',
        'Price beyond day-1: include ops cost, monitoring, updates, and incident response.',
      ],
      th: [
        'ขอหลักฐานการทำงาน: แผน pilot ที่เล็กพอ เกณฑ์รับงานที่วัดได้ และ owner ชัดเจน',
        'ตรวจเรื่องความปลอดภัยและข้อมูล: access control, logging และ policy retention',
        'คิดราคาให้เกิน day-1: รวมค่า ops, monitoring, update และ incident response',
      ],
    },
  },
];

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find(post => post.slug === slug);
}
