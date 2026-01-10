export type FAQItem = {
  question: string;
  answer: string;
};

// Predefined FAQ sets for common pages (used for UI + FAQPage schema)
export const HomeFAQs = {
  en: [
    {
      question: 'What types of AI solutions does CerebraTechAI provide?',
      answer:
        'We specialize in production-ready AI solutions including LLM & RAG systems, Computer Vision for quality inspection and OCR, Predictive Analytics for forecasting and anomaly detection, and Edge AI for on-device inference. We also provide MLOps and full-stack engineering support.',
    },
    {
      question: 'How long does it typically take to deliver an AI project?',
      answer:
        'Project timelines vary based on scope:\n- Kickstart (Discovery): 1-2 weeks\n- POC Lab: 3-6 weeks\n- Pilot Launch: 6-10 weeks\n- Production Scale: 12-24 weeks\n\nWe work in phases with clear deliverables at each stage.',
    },
    {
      question: 'Do you work with SMEs or only large enterprises?',
      answer:
        'We specialize in SME and mid-size projects. Our boutique approach allows us to provide personalized attention and production-ready solutions tailored to your specific needs and budget, without the overhead of large consultancies.',
    },
    {
      question: 'What is included in your fixed-price packages?',
      answer:
        'All packages include:\n- Expert consultants and data scientists\n- Development and testing\n- Documentation and training\n- Deployment and handover\n\nNo hidden costs. Everything needed to get your AI system into production is included.',
    },
    {
      question: 'Can you integrate AI into our existing systems?',
      answer:
        'Yes. We specialize in practical AI integration with existing tech stacks. We assess your current systems during the Discovery phase and design solutions that work with your infrastructure, whether on-premises, cloud, or hybrid.',
    },
    {
      question: 'Do you provide ongoing support after deployment?',
      answer:
        'Yes. We offer ongoing support and maintenance packages. This includes monitoring, performance optimization, retraining models as needed, and technical support. Support terms are defined during project scoping.',
    },
  ],
  th: [
    {
      question: 'CerebraTechAI ให้บริการด้านไหนบ้าง?',
      answer:
        'เรารับทำโซลูชัน AI ที่พร้อมใช้งานจริง (production-ready) เช่น LLM & RAG, Computer Vision (ตรวจคุณภาพ/OCR), Machine Learning & Predictive Analytics, AIoT/Edge AI รวมถึงงาน Platform/Full-stack และ MLOps เพื่อให้ระบบ deploy และดูแลต่อได้อย่างมั่นใจ',
    },
    {
      question: 'โดยทั่วไปใช้เวลากี่สัปดาห์ในการทำโปรเจกต์?',
      answer:
        'ระยะเวลาขึ้นกับขอบเขตงาน โดยมักแบ่งเป็นเฟสดังนี้:\n- Kickstart (Discovery): 1–2 สัปดาห์\n- POC Lab: 3–6 สัปดาห์\n- Pilot Launch: 6–10 สัปดาห์\n- Production Scale: 12–24 สัปดาห์\n\nทุกเฟสมี deliverables ชัดเจน และสื่อสารความคืบหน้าเป็นรอบ ๆ',
    },
    {
      question: 'รับงาน SME อย่างเดียว หรือทำให้ Enterprise ด้วย?',
      answer:
        'เราถนัดงาน SME และองค์กรขนาดกลาง แต่สามารถทำให้ Enterprise ได้เช่นกัน จุดเด่นคือทีมเล็กคล่องตัว เน้นผลลัพธ์ใช้งานจริง และคุมงบ/คุมสโคปได้ดี',
    },
    {
      question: 'แพ็กเกจแบบราคาตายตัว (fixed-price) รวมอะไรบ้าง?',
      answer:
        'โดยทั่วไปแพ็กเกจจะรวม:\n- ผู้เชี่ยวชาญ (AI/ML/Engineering)\n- พัฒนา + ทดสอบ\n- เอกสาร + การถ่ายทอด/เทรนนิ่ง\n- ช่วย deploy และส่งมอบงาน\n\nเราพยายามทำให้ “สิ่งที่ต้องมีเพื่อใช้งานจริง” อยู่ในแพ็กเกจให้ครบ และบอกสิ่งที่อยู่นอกสโคปตั้งแต่ต้น',
    },
    {
      question: 'ทำ AI ให้ทำงานร่วมกับระบบเดิมได้ไหม?',
      answer:
        'ได้ เราโฟกัสการเชื่อมต่อแบบใช้งานจริงกับระบบเดิม (API/DB/ETL/ERP/Line/OCR pipeline ฯลฯ) โดยประเมินสภาพแวดล้อมตั้งแต่เฟส Discovery และออกแบบให้เหมาะกับ on-prem / cloud / hybrid',
    },
    {
      question: 'มีบริการดูแลหลังส่งมอบไหม?',
      answer:
        'มี เช่น monitoring, ปรับประสิทธิภาพ, retrain model ตามความจำเป็น และ support ทางเทคนิค เงื่อนไขการดูแลจะกำหนดร่วมกันตั้งแต่ช่วงวางแผนโปรเจกต์',
    },
  ],
};

export const PricingFAQs = {
  en: [
    {
      question: 'Why are your packages fixed-price?',
      answer:
        'Fixed-price packages help teams plan budgets and timelines with confidence. We scope work into phases and define clear acceptance criteria, so you know exactly what you get before we start.',
    },
    {
      question: 'What affects pricing the most?',
      answer:
        'Pricing is primarily driven by scope and complexity:\n- Data readiness and data volume\n- Model complexity and evaluation requirements\n- Integration scope (APIs, systems, security)\n- Deployment target (cloud, on-prem, edge)\n- Compliance needs and documentation',
    },
    {
      question: 'Do you offer custom pricing?',
      answer:
        'Yes. If your requirements don’t fit a package, we’ll propose a custom plan with milestones and a clear cost structure.',
    },
    {
      question: 'Are there hidden costs?',
      answer:
        'No. We clarify what’s included and what’s excluded during scoping. Infrastructure costs (e.g., cloud) are typically owned by the client unless otherwise agreed.',
    },
  ],
  th: [
    {
      question: 'ทำไมแพ็กเกจถึงเป็นแบบราคาตายตัว (fixed-price)?',
      answer:
        'เพื่อให้ลูกค้าวางแผนงบและเวลาได้มั่นใจ เราแบ่งงานเป็นเฟส กำหนด deliverables/acceptance criteria ให้ชัด และล็อกสโคปให้เหมาะสมตั้งแต่ต้น',
    },
    {
      question: 'อะไรเป็นปัจจัยที่ทำให้ราคาแตกต่างมากที่สุด?',
      answer:
        'โดยหลักจะมาจากสโคปและความซับซ้อน เช่น:\n- ความพร้อมของข้อมูล/ปริมาณข้อมูล\n- ความยากของโมเดลและการประเมินผล\n- ขอบเขตการเชื่อมต่อระบบ (API/ความปลอดภัย)\n- เป้าหมายการ deploy (cloud / on-prem / edge)\n- ข้อกำหนดด้านเอกสาร/คอมพลายแอนซ์',
    },
    {
      question: 'ถ้าความต้องการไม่ตรงกับแพ็กเกจ มีทำราคาแบบ custom ไหม?',
      answer:
        'มี เราสามารถทำแผนงานแบบ custom โดยกำหนด milestone และโครงสร้างค่าใช้จ่ายให้ชัดเจน เพื่อให้คุมสโคปและคุมงบได้',
    },
    {
      question: 'มีค่าใช้จ่ายแอบแฝงไหม?',
      answer:
        'ไม่มี เราจะระบุสิ่งที่ “รวม” และ “ไม่รวม” ให้ชัดเจนตั้งแต่ช่วงสโคป โดยค่า infrastructure (เช่น cloud) มักเป็นค่าใช้จ่ายฝั่งลูกค้า ยกเว้นมีข้อตกลงอื่น',
    },
  ],
};

export const TrustFAQs = {
  en: [
    {
      question: 'How do you protect sensitive business data?',
      answer:
        'We follow least-privilege access, encryption in transit and at rest, and clear data handling procedures. We can also support NDAs, DPAs, and security addendums when needed.',
    },
    {
      question: 'Can you deploy on-premises?',
      answer:
        'Yes. We can deploy on-prem, in the cloud, or hybrid depending on your constraints.',
    },
    {
      question: 'Do you comply with PDPA?',
      answer:
        'We support PDPA-aligned workflows and data handling practices, and can work with your legal/security teams on requirements.',
    },
  ],
  th: [
    {
      question: 'CerebraTechAI ปกป้องข้อมูลที่อ่อนไหวอย่างไร?',
      answer:
        'เรายึดหลัก least privilege, เข้ารหัสข้อมูลระหว่างส่งและขณะจัดเก็บ (ตามบริบทที่เหมาะสม) และมีแนวทางการจัดการข้อมูลที่ชัดเจน นอกจากนี้สามารถทำ NDA/DPA และ security addendum ร่วมกับทีมกฎหมาย/ความปลอดภัยของลูกค้าได้',
    },
    {
      question: 'รองรับการ deploy แบบ on-premises ไหม?',
      answer:
        'รองรับ เราทำได้ทั้ง on-prem, cloud หรือ hybrid ตามข้อจำกัดด้านความปลอดภัยและโครงสร้างพื้นฐานของลูกค้า',
    },
    {
      question: 'รองรับ PDPA ไหม?',
      answer:
        'รองรับในเชิงกระบวนการทำงาน (workflow) และแนวทางการจัดการข้อมูล (data handling) ตามข้อกำหนดที่ลูกค้าต้องการ และพร้อมทำงานร่วมกับทีมกฎหมาย/ความปลอดภัยเพื่อให้สอดคล้องกับนโยบายองค์กร',
    },
  ],
};
