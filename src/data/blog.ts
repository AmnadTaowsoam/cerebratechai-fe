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
      en: 'AI Implementation Best Practices: Lessons from 50+ Production Deployments',
      th: 'แนวทางทำ AI ให้ใช้งานจริง: บทเรียนจาก 50+ ระบบที่ขึ้นโปรดักชัน',
    },
    excerpt: {
      en: 'Learn from our experience deploying AI solutions across industries, including common pitfalls and how to avoid them.',
      th: 'สรุปบทเรียนสำคัญจากการนำ AI ไปใช้งานจริงในหลายอุตสาหกรรม พร้อม pitfalls ที่เจอบ่อยและวิธีหลีกเลี่ยง',
    },
    author: 'CerebraTechAI Team',
    date: '2024-01-15',
    readTime: { en: '8 min read', th: 'อ่าน 8 นาที' },
    category: 'Implementation',
    content: {
      en: [
        'Shipping AI is mostly about product, data, and operations—not just models.',
        'Start with a narrow use-case, define success metrics, and validate data readiness early.',
        'Design for integration, monitoring, and retraining from day one to avoid “POC purgatory”.',
      ],
      th: [
        'การทำ AI ให้ “ใช้งานจริง” เป็นเรื่องของ product + data + operations มากพอ ๆ กับตัวโมเดล',
        'เริ่มจาก use-case ที่แคบพอ วัดผลได้ และตรวจความพร้อมของข้อมูลตั้งแต่ต้น',
        'ออกแบบเรื่อง integration, monitoring และ retraining ตั้งแต่วันแรก เพื่อลดโอกาสติดหล่ม POC',
      ],
    },
  },
  {
    slug: 'mlops-production-guide',
    title: {
      en: 'MLOps in Production: A Complete Guide to Scaling AI Systems',
      th: 'MLOps ในโปรดักชัน: แนวทางขยายระบบ AI ให้เสถียรและดูแลได้จริง',
    },
    excerpt: {
      en: 'Everything you need to know about implementing MLOps practices for reliable, scalable AI systems in production environments.',
      th: 'สรุปภาพรวมการทำ MLOps ตั้งแต่ versioning, deployment, monitoring ไปจนถึง retraining เพื่อให้ระบบ AI เสถียรและขยายได้',
    },
    author: 'CerebraTechAI Team',
    date: '2024-01-10',
    readTime: { en: '12 min read', th: 'อ่าน 12 นาที' },
    category: 'MLOps',
    content: {
      en: [
        'A production AI system is an end-to-end pipeline: data → training → evaluation → deployment → monitoring.',
        'Automate the boring parts: CI/CD, model registry, and repeatable deployments.',
        'Define alerting and drift checks so the system doesn’t silently degrade.',
      ],
      th: [
        'ระบบ AI ที่ใช้งานจริงต้องมองเป็น pipeline: data → training → evaluation → deployment → monitoring',
        'ทำ CI/CD + model registry + deployment ให้ทำซ้ำได้ เพื่อลดความเสี่ยงระยะยาว',
        'มีระบบแจ้งเตือนและตรวจ drift เพื่อไม่ให้คุณภาพค่อย ๆ ตกแบบไม่รู้ตัว',
      ],
    },
  },
  {
    slug: 'computer-vision-manufacturing',
    title: {
      en: 'Computer Vision in Manufacturing: Reducing Defects by 60%',
      th: 'Computer Vision ในโรงงาน: ลดของเสียและ defect ได้ถึง 60%',
    },
    excerpt: {
      en: 'Case study on implementing computer vision for quality inspection, including technical details and ROI analysis.',
      th: 'กรณีศึกษาการทำ vision สำหรับตรวจคุณภาพ พร้อมแนวคิดการวัดผลและ ROI แบบใช้งานได้จริง',
    },
    author: 'CerebraTechAI Team',
    date: '2024-01-05',
    readTime: { en: '10 min read', th: 'อ่าน 10 นาที' },
    category: 'Case Study',
    content: {
      en: [
        'Most vision ROI comes from reducing rework, preventing escapes, and improving throughput.',
        'Good labeling strategy and clear acceptance criteria matter more than model complexity.',
      ],
      th: [
        'ROI ของงาน vision มักมาจากการลด rework, กัน defect หลุด, และเพิ่ม throughput',
        'การทำ label/ground truth ให้ดี และนิยาม acceptance criteria ให้ชัด สำคัญกว่า “โมเดลเทพ”',
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
      en: 'Technical deep dive into optimizing large language models for Thai language processing, including practical evaluation tips.',
      th: 'สรุปเทคนิคปรับ LLM ให้ทำงานกับภาษาไทยได้ดีขึ้น พร้อมแนวทางวัดผลแบบ practical',
    },
    author: 'CerebraTechAI Team',
    date: '2024-01-01',
    readTime: { en: '15 min read', th: 'อ่าน 15 นาที' },
    category: 'Technical',
    content: {
      en: [
        'Thai tokenization and spacing can affect retrieval and evaluation significantly.',
        'Use task-specific evaluation sets, not just generic benchmarks.',
      ],
      th: [
        'ภาษาไทยมีเรื่องการตัดคำ/เว้นวรรค ที่กระทบ retrieval และการประเมินผลมากกว่าที่คิด',
        'ควรมี evaluation set เฉพาะงานของคุณ ไม่อิง benchmark ทั่วไปอย่างเดียว',
      ],
    },
  },
  {
    slug: 'ai-roi-measurement',
    title: { en: 'Measuring AI ROI: Beyond Technical Metrics', th: 'วัด ROI ของ AI: มากกว่าแค่ metric ทางเทคนิค' },
    excerpt: {
      en: 'How to measure and communicate business value of AI investments to stakeholders and executives.',
      th: 'แนวทางวัดผลและสื่อสาร “มูลค่าทางธุรกิจ” ของ AI ให้ผู้บริหารและ stakeholder เข้าใจตรงกัน',
    },
    author: 'CerebraTechAI Team',
    date: '2023-12-28',
    readTime: { en: '7 min read', th: 'อ่าน 7 นาที' },
    category: 'Business',
    content: {
      en: [
        'Tie metrics to business levers: yield, cycle time, churn, cost to serve.',
        'Measure before/after with clear guardrails and a realistic baseline.',
      ],
      th: [
        'ผูก metric กับตัวขับเคลื่อนธุรกิจ เช่น yield, cycle time, churn, cost to serve',
        'วัดแบบ before/after พร้อม baseline ที่สมจริง และ guardrails ที่ชัด',
      ],
    },
  },
  {
    slug: 'edge-ai-deployment',
    title: { en: 'Edge AI Deployment: Bringing Intelligence to the Edge', th: 'Edge AI Deployment: นำความฉลาดไปไว้ที่หน้างาน' },
    excerpt: {
      en: 'Guide to deploying AI models at the edge, including hardware considerations and optimization techniques.',
      th: 'คู่มือ deploy โมเดลบน edge พร้อมแนวทางเลือกฮาร์ดแวร์และเทคนิค optimization ที่ใช้ได้จริง',
    },
    author: 'CerebraTechAI Team',
    date: '2023-12-25',
    readTime: { en: '11 min read', th: 'อ่าน 11 นาที' },
    category: 'Technical',
    content: {
      en: [
        'Edge constraints are about latency, privacy, and connectivity—not just compute.',
        'Choose the simplest model that meets accuracy and latency targets.',
      ],
      th: [
        'โจทย์ของ edge คือ latency, privacy และความต่อเนื่องของการเชื่อมต่อ ไม่ใช่แค่แรง compute',
        'เลือกโมเดลที่ “ง่ายพอ” แต่ผ่านเป้าความแม่นและ latency เพื่อความเสถียรระยะยาว',
      ],
    },
  },
];

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
