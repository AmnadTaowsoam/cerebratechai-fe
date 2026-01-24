import { packagesMap } from './packages';

// Home page statistics
export const homeStats = {
  pocsDelivered: 24,
  avgWeeks: 6,
  startingTHB: 95000, // Kickstart package
  clientSatisfaction: 4.9,
};

// Hero CTAs
export const heroCtas = [
  {
    id: 'explore_packages',
    labelTh: 'ดูแพ็กเกจทั้งหมด',
    labelEn: 'Explore Packages',
    href: '/packages',
    variant: 'primary' as const,
    gaEvent: 'hero_cta_click',
  },
  {
    id: 'book_consult',
    labelTh: 'ปรึกษาฟรี',
    labelEn: 'Book Free Consult',
    href: '/contact',
    variant: 'secondary' as const,
    gaEvent: 'hero_cta_click',
  },
];

// Format metric helper
export function formatMetric(
  value: number,
  type: 'percent' | 'latency' | 'currency' | 'time',
  locale: 'th' | 'en' = 'th'
): string {
  switch (type) {
    case 'percent':
      return `${value > 0 ? '+' : ''}${value}%`;
    case 'latency':
      return `${value < 1000 ? '<' : ''}${value}ms`;
    case 'currency':
      return `฿${value.toLocaleString(locale === 'th' ? 'th-TH' : 'en-US')}`;
    case 'time':
      return `${value} ${locale === 'th' ? 'สัปดาห์' : 'weeks'}`;
    default:
      return String(value);
  }
}

// Real Impact metrics
export const realImpactMetrics = [
  {
    id: 'accuracy',
    labelTh: 'ความแม่นยำเฉลี่ย',
    labelEn: 'Average Accuracy',
    value: 92,
    type: 'percent' as const,
  },
  {
    id: 'time_reduction',
    labelTh: 'ลดเวลา',
    labelEn: 'Time Reduction',
    value: -65,
    type: 'percent' as const,
  },
  {
    id: 'response_time',
    labelTh: 'เวลาตอบสนอง',
    labelEn: 'Response Time',
    value: 500,
    type: 'latency' as const,
  },
  {
    id: 'projects_delivered',
    labelTh: 'โครงการที่ส่งมอบ',
    labelEn: 'Projects Delivered',
    value: 24,
    type: 'count' as const,
  },
];

// Accelerators data
export const accelerators = [
  {
    id: 'kickstart',
    titleTh: 'Kickstart',
    titleEn: 'Kickstart',
    descriptionTh: 'สปรินต์วางกลยุทธ์และประเมินความเป็นไปได้',
    descriptionEn: 'Strategy planning and feasibility assessment',
    startingPrice: packagesMap.kickstart.priceFromTHB || 95000,
    duration: '2',
    deliverables: [
      'Executive Brief & Opportunity Map',
      '90-Day Plan + Roadmap',
      'Risk Register + Next Steps',
    ],
    deliverablesEn: [
      'Executive Brief & Opportunity Map',
      '90-Day Plan + Roadmap',
      'Risk Register + Next Steps',
    ],
  },
  {
    id: 'poc_lab',
    titleTh: 'POC Lab',
    titleEn: 'POC Lab',
    descriptionTh: 'ทำต้นแบบที่ทดสอบได้ พร้อมรายงานผล',
    descriptionEn: 'Build testable prototype',
    startingPrice: packagesMap.poc_lab.priceFromTHB || 420000,
    duration: '4-6',
    deliverables: [
      'Working Prototype + Documentation',
      'Experiment Report + Metrics',
      'Demo Video + Next Steps',
    ],
    deliverablesEn: [
      'Working Prototype + Documentation',
      'Experiment Report + Metrics',
      'Demo Video + Next Steps',
    ],
  },
  {
    id: 'pilot_launch',
    titleTh: 'Pilot Launch',
    titleEn: 'Pilot Launch',
    descriptionTh: 'เปิดใช้งานกับผู้ใช้จริงในขอบเขตจำกัด',
    descriptionEn: 'Launch with limited real users',
    startingPrice: packagesMap.pilot_launch.priceFromTHB || 720000,
    duration: '6-9',
    deliverables: [
      'Staging + Production Environment',
      'Monitoring & Alerting Setup',
      'Release & Rollback Playbooks',
    ],
    deliverablesEn: [
      'Staging + Production Environment',
      'Monitoring & Alerting Setup',
      'Release & Rollback Playbooks',
    ],
  },
  {
    id: 'production_scale',
    titleTh: 'Production Scale',
    titleEn: 'Production Scale',
    descriptionTh: 'ระบบระดับองค์กร พร้อม SLA และความเสถียรสูง',
    descriptionEn: 'Enterprise-ready production system',
    startingPrice: packagesMap.production_scale.priceFromTHB || 1200000,
    duration: '8-12',
    deliverables: [
      'HA Multi-AZ + Autoscaling',
      'Full IaC + FinOps Setup',
      'DR Drill + Security Hardening',
    ],
    deliverablesEn: [
      'HA Multi-AZ + Autoscaling',
      'Full IaC + FinOps Setup',
      'DR Drill + Security Hardening',
    ],
  },
];

// Contact form options
export const budgetRanges = [
  {
    value: 'under_100k',
    labelTh: 'ต่ำกว่า ฿100,000',
    labelEn: 'Under ฿100,000',
  },
  {
    value: '100k_500k',
    labelTh: '฿100,000 - ฿500,000',
    labelEn: '฿100,000 - ฿500,000',
  },
  {
    value: '500k_1m',
    labelTh: '฿500,000 - ฿1,000,000',
    labelEn: '฿500,000 - ฿1,000,000',
  },
  {
    value: 'over_1m',
    labelTh: 'มากกว่า ฿1,000,000',
    labelEn: 'Over ฿1,000,000',
  },
];

export const timelineTargets = [
  {
    value: 'urgent',
    labelTh: 'เร่งด่วน (2-4 สัปดาห์)',
    labelEn: 'Urgent (2-4 weeks)',
  },
  {
    value: 'standard',
    labelTh: 'ปกติ (1-2 เดือน)',
    labelEn: 'Standard (1-2 months)',
  },
  {
    value: 'flexible',
    labelTh: 'ยืดหยุ่น (3+ เดือน)',
    labelEn: 'Flexible (3+ months)',
  },
];

// Terms
export const globalTerms = [
  {
    keyTh: 'ราคายังไม่รวม VAT 7%',
    keyEn: 'Prices exclude VAT 7%',
  },
  {
    keyTh: 'ค่า Cloud เกินงบเริ่มต้น คิดตามจริง',
    keyEn: 'Cloud consumption beyond starter budget billed to client',
  },
  {
    keyTh: 'ชำระ 50/30/20 ตาม milestone',
    keyEn: 'Payment 50/30/20 milestones',
  },
  {
    keyTh: 'Change Request ฿18,000/คน-วัน',
    keyEn: 'Change Request ฿18,000/person-day',
  },
];
