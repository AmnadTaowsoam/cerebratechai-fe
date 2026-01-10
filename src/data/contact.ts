// FAQ data for contact page
export const contactFAQs = {
  th: [
    {
      id: 'services',
      question: 'มีบริการอะไรบ้าง?',
      answer: `เรารับงาน AI Consulting, Machine Learning Development, Data Engineering, RAG และ ChatGPT Apps
รวมถึงโซลูชัน AI แบบกำหนดเองสำหรับธุรกิจทุกขนาด`,
    },
    {
      id: 'pricing',
      question: 'ราคาเริ่มต้นเท่าไหร่?',
      answer: `Kickstart เริ่มที่ ฿95,000 สำหรับวางกลยุทธ์และประเมินความเป็นไปได้
POC Lab, Pilot Launch และ Production Scale เริ่มที่ ฿420,000 ขึ้นไป`,
    },
    {
      id: 'timeline',
      question: 'ระยะเวลาทำโปรเจกต์ประมาณเท่าไหร่?',
      answer: `ขึ้นอยู่กับความซับซ้อนของโปรเจกต์
โดยทั่วไป Kickstart ~2 สัปดาห์, POC Lab 4-6 สัปดาห์, Pilot Launch 6-9 สัปดาห์ และ Production Scale 8-12 สัปดาห์`,
    },
    {
      id: 'support',
      question: 'มีบริการดูแลหลังส่งมอบไหม?',
      answer: `มีแพ็กเกจ Care & Support สำหรับดูแลระบบ อัปเดต และซัพพอร์ตหลังส่งมอบงาน
สามารถเลือกแพ็กเกจที่เหมาะกับทีมของคุณได้`,
    },
    {
      id: 'nda',
      question: 'สามารถเซ็น NDA ได้ไหม?',
      answer: 'ได้ เราเข้าใจความสำคัญของความลับทางธุรกิจและยินดีเซ็น NDA ก่อนเริ่มงาน',
    },
  ],
  en: [
    {
      id: 'services',
      question: 'What services do you offer?',
      answer:
        'We offer AI Consulting, Machine Learning Development, Data Engineering, RAG (Retrieval-Augmented Generation), ChatGPT Apps, and Custom AI Solutions for businesses of all sizes.',
    },
    {
      id: 'pricing',
      question: 'What is your starting price?',
      answer:
        'Kickstart starts at ฿95,000 for strategy planning and feasibility assessment. POC Lab, Pilot Launch, and Production Scale start from ฿420,000 and above.',
    },
    {
      id: 'timeline',
      question: 'How long does a project take?',
      answer:
        'It depends on the project complexity. Kickstart takes about 2 weeks, POC Lab 4-6 weeks, Pilot Launch 6-9 weeks, and Production Scale 8-12 weeks.',
    },
    {
      id: 'support',
      question: 'Do you provide post-launch support?',
      answer:
        'Yes, we offer Care & Support packages for ongoing maintenance, updates, and technical support after project delivery.',
    },
    {
      id: 'nda',
      question: 'Can you sign an NDA?',
      answer:
        'Yes, we understand the importance of business confidentiality and are happy to sign an NDA (Non-Disclosure Agreement) before starting a project.',
    },
  ],
};

// Social proof data
export const contactSocialProof = {
  stats: [
    {
      value: '24+',
      labelTh: 'POC ที่ส่งมอบแล้ว',
      labelEn: 'POCs Delivered',
    },
    {
      value: '4.9/5',
      labelTh: 'ความพึงพอใจลูกค้า',
      labelEn: 'Client Satisfaction',
    },
    {
      value: '6',
      labelTh: 'เฉลี่ย 6 สัปดาห์',
      labelEn: 'Avg. Weeks',
    },
    {
      value: '100%',
      labelTh: 'ข้อมูลเป็นความลับ',
      labelEn: 'Confidential',
    },
  ],
  trustBadges: [
    {
      icon: 'shield',
      labelTh: 'ความปลอดภัยของข้อมูล',
      labelEn: 'Data Security',
    },
    {
      icon: 'lock',
      labelTh: 'มี NDA ให้เซ็น',
      labelEn: 'NDA Available',
    },
    {
      icon: 'check-circle',
      labelTh: 'การันตีคุณภาพงาน',
      labelEn: 'Quality Guaranteed',
    },
    {
      icon: 'clock',
      labelTh: 'ตอบกลับภายใน 24 ชม.',
      labelEn: '24h Response',
    },
  ],
};

export const useCaseOptions = [
  { value: 'llm_rag', labelEn: 'LLM / RAG assistant', labelTh: 'ผู้ช่วย LLM / RAG' },
  { value: 'computer_vision', labelEn: 'Computer vision inspection', labelTh: 'ตรวจสอบด้วย Computer Vision' },
  { value: 'predictive', labelEn: 'Predictive analytics / forecasting', labelTh: 'วิเคราะห์เชิงคาดการณ์ / พยากรณ์' },
  { value: 'aiot_edge', labelEn: 'Edge AI / AIoT', labelTh: 'Edge AI / AIoT' },
  { value: 'data_platform', labelEn: 'Data platform / MLOps', labelTh: 'Data Platform / MLOps' },
  { value: 'automation', labelEn: 'Process automation', labelTh: 'ทำงานอัตโนมัติ' },
  { value: 'other', labelEn: 'Other', labelTh: 'อื่น ๆ' },
];

export const dataReadinessOptions = [
  { value: 'none', labelEn: 'No data yet', labelTh: 'ยังไม่มีข้อมูล' },
  { value: 'scattered', labelEn: 'Scattered data', labelTh: 'ข้อมูลกระจัดกระจาย' },
  { value: 'partial', labelEn: 'Some cleaned data', labelTh: 'มีข้อมูลที่ทำความสะอาดแล้วบางส่วน' },
  { value: 'ready', labelEn: 'Ready to use', labelTh: 'พร้อมใช้งาน' },
];

export const preferredContactOptions = [
  { value: 'email', labelEn: 'Email', labelTh: 'อีเมล' },
  { value: 'phone', labelEn: 'Phone', labelTh: 'โทรศัพท์' },
  { value: 'line', labelEn: 'LINE', labelTh: 'LINE' },
  { value: 'either', labelEn: 'Either', labelTh: 'ได้ทั้งสองทาง' },
];

export const packageInterestOptions = [
  { value: 'kickstart', labelEn: 'Kickstart', labelTh: 'Kickstart' },
  { value: 'poc', labelEn: 'POC Lab', labelTh: 'POC Lab' },
  { value: 'pilot', labelEn: 'Pilot Launch', labelTh: 'Pilot Launch' },
  { value: 'production', labelEn: 'Production Scale', labelTh: 'Production Scale' },
  { value: 'care', labelEn: 'Care Plan', labelTh: 'Care Plan' },
];
