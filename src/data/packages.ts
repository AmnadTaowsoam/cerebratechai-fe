import type { PackageConfig } from '@/types/packages';

export const packagesMap: Record<string, PackageConfig> = {
  kickstart: {
    id: 'kickstart',
    title: 'Kickstart',
    titleTh: 'AI Kickstart',
    priceFromTHB: 95_000,
    priceUnit: 'one_time',
    timeline: '2',
    bullets: [
      'Define use-case and feasibility',
      'Set success metrics + 90-day plan',
      'Mini prototype to validate direction'
    ],
    bulletsTh: [
      'กำหนด use-case และความเป็นไปได้',
      'ตั้งตัวชี้วัดและแผน 90 วัน',
      'ทำต้นแบบเล็กเพื่อยืนยันแนวทาง'
    ],
    inScope: [
      'Stakeholder interviews & alignment (2-3 sessions)',
      'Data/AI opportunity mapping + feasibility',
      'Success metrics + 90-day plan',
      'Mini prototype/demo (bounded scope)'
    ],
    inScopeTh: [
      'สัมภาษณ์ผู้เกี่ยวข้องและสรุปทิศทาง (2-3 ครั้ง)',
      'ทำแผนที่โอกาสและความเป็นไปได้ของ AI',
      'กำหนดตัวชี้วัดความสำเร็จ + แผน 90 วัน',
      'ต้นแบบ/เดโมขนาดเล็กในขอบเขตที่กำหนด'
    ],
    outOfScope: [
      'SSO/IdP integration',
      'Production-grade CI/CD, HA hardening',
      'Large-scale data labeling/cleaning'
    ],
    outOfScopeTh: [
      'เชื่อมต่อ SSO/IdP',
      'งาน production เต็มรูปแบบ (CI/CD, HA hardening)',
      'งานติดป้ายข้อมูล/ทำความสะอาดข้อมูลขนาดใหญ่'
    ],
    deliverables: [
      'Executive Brief (1 page)',
      'Opportunity & Feasibility (1-2 pages)',
      '90-Day Plan (1 page)',
      'Slide deck 12-16 pages'
    ],
    deliverablesTh: [
      'Executive Brief (1 หน้า)',
      'Opportunity & Feasibility (1-2 หน้า)',
      'แผน 90 วัน (1 หน้า)',
      'สไลด์สรุป 12-16 หน้า'
    ],
    addons: ['Extra workshop / deep-dive session'],
    addonsTh: ['เวิร์กช็อปเพิ่มเติม / deep-dive session'],
    ctaLabel: 'Start Exploring',
    ctaLabelTh: 'เริ่มสำรวจ'
  },

  poc_lab: {
    id: 'poc_lab',
    title: 'POC Lab',
    titleTh: 'POC Lab',
    priceFromTHB: 420_000,
    priceUnit: 'one_time',
    timeline: '4-6',
    highlight: 'Most Popular',
    highlightTh: 'ยอดนิยม',
    bullets: [
      'One scoped use-case, one sandbox datasource',
      'Baseline + scorecard with experiment tracking',
      'Demo + README + docker compose'
    ],
    bulletsTh: [
      '1 use-case ชัดเจน + 1 แหล่งข้อมูล sandbox',
      'มี baseline และ scorecard พร้อมติดตามผล',
      'เดโมพร้อม README และ docker compose'
    ],
    inScope: [
      '1 use-case, 1 datasource (sandbox)',
      'Baseline/heuristic + metric scorecard',
      'Experiment tracking + cost guardrail (starter cloud budget)',
      'Demo (CLI/Notebook/mini FE)',
      'README + docker compose for handoff'
    ],
    inScopeTh: [
      '1 use-case, 1 datasource (sandbox)',
      'Baseline/heuristic + metric scorecard',
      'ติดตามการทดลอง + คุมค่าใช้จ่ายคลาวด์เบื้องต้น',
      'เดโม (CLI/Notebook/mini FE)',
      'README + docker compose สำหรับส่งมอบ'
    ],
    outOfScope: [
      'Multiple production-grade datasources',
      'SSO/IdP, CI/CD hardening',
      'HA/Hardening, security audit',
      'Data labeling > 500 items',
      'Full production dashboard'
    ],
    outOfScopeTh: [
      'เชื่อมหลายแหล่งข้อมูลระดับ production',
      'SSO/IdP, งาน CI/CD เต็มรูปแบบ',
      'HA/Hardening หรือ security audit',
      'งานติดป้ายข้อมูล > 500 รายการ',
      'แดชบอร์ด production แบบเต็มระบบ'
    ],
    deliverables: [
      'Repo + README + compose',
      'Experiment report + scorecard',
      'Demo recording',
      'POC close-out & next steps'
    ],
    deliverablesTh: [
      'Repo + README + compose',
      'รายงานการทดลอง + scorecard',
      'วิดีโอเดโม',
      'สรุป POC และขั้นตอนถัดไป'
    ],
    addons: [
      'Extra datasource (+ ฿90k / datasource)',
      'SSO/IdP (+ ฿120k)',
      'Data labeling (+ ฿60k)'
    ],
    addonsTh: [
      'เพิ่มแหล่งข้อมูล (+ ฿90k / แหล่งข้อมูล)',
      'SSO/IdP (+ ฿120k)',
      'ติดป้ายข้อมูล (+ ฿60k)'
    ],
    ctaLabel: 'Validate Your Ideas',
    ctaLabelTh: 'ยืนยันความเป็นไปได้'
  },

  pilot_launch: {
    id: 'pilot_launch',
    title: 'Pilot Launch',
    titleTh: 'Pilot Launch',
    priceFromTHB: 720_000,
    priceUnit: 'per_env',
    timeline: '6-9',
    recommendAssurance: true,
    bullets: [
      'Controlled rollout (canary/blue-green)',
      'Monitoring + guardrails with playbook',
      'User onboarding and feedback loop'
    ],
    bulletsTh: [
      'ปล่อยใช้งานแบบควบคุม (canary/blue-green)',
      'ตั้ง monitoring + guardrails พร้อม playbook',
      'ทำ onboarding และเก็บ feedback'
    ],
    inScope: [
      'Staging + Prod (1 env) with canary/blue-green',
      'Monitoring/Logging/Alerting + guardrails',
      'Release checklist + rollback playbook',
      'Limited live traffic + onboarding'
    ],
    inScopeTh: [
      'Staging + Prod (1 env) พร้อม canary/blue-green',
      'Monitoring/Logging/Alerting + guardrails',
      'เช็กลิสต์ปล่อยงาน + rollback playbook',
      'ทดลองใช้งานจริงแบบจำกัด + onboarding'
    ],
    outOfScope: [
      '24/7 SLA, multi-region HA',
      'SOC2/ISO audit',
      'Complex data pipelines, deep analytics'
    ],
    outOfScopeTh: [
      'SLA 24/7 หรือ multi-region HA',
      'SOC2/ISO audit',
      'งาน data pipeline ซับซ้อน/analytics เชิงลึก'
    ],
    deliverables: [
      'IaC/Deploy scripts + runbook',
      'Monitoring dashboards + alert rules',
      'Launch notes + risk & rollback plan',
      'KB for ops team'
    ],
    deliverablesTh: [
      'สคริปต์ IaC/Deploy + runbook',
      'แดชบอร์ดมอนิเตอร์ + กฎแจ้งเตือน',
      'บันทึกการปล่อยงาน + แผน rollback',
      'ฐานความรู้สำหรับทีม ops'
    ],
    addons: [
      'Extra env (+40-60% of base)',
      'Load/perf deep test (+ ฿120k)',
      'Security hardening (+ ฿150k)',
      'Recommended: Launch Assurance Sprint (+ ฿260k)'
    ],
    addonsTh: [
      'เพิ่ม env (+40-60% ของราคาเริ่มต้น)',
      'Load/perf deep test (+ ฿120k)',
      'Security hardening (+ ฿150k)',
      'แนะนำ: Launch Assurance Sprint (+ ฿260k)'
    ],
    ctaLabel: 'Launch Pilot',
    ctaLabelTh: 'เริ่ม Pilot'
  },

  production_scale: {
    id: 'production_scale',
    title: 'Production Scale',
    titleTh: 'Production Scale',
    priceFromTHB: 1_200_000,
    priceUnit: 'per_rollout',
    timeline: '8-12',
    recommendAssurance: true,
    bullets: [
      'HA multi-AZ + autoscale + backup/restore',
      'IaC + FinOps budgets/alerts',
      'Runbooks + DR drill'
    ],
    bulletsTh: [
      'HA multi-AZ + autoscale + backup/restore',
      'IaC + FinOps budgets/alerts',
      'Runbooks + DR drill'
    ],
    inScope: [
      'HA topology (multi-AZ), autoscaling, backup/restore',
      'Full IaC + FinOps budgets/alerts',
      'Access control/RBAC, SSO/IdP (1 integration), secrets mgmt',
      'Runbooks + DR drill (1 iteration)'
    ],
    inScopeTh: [
      'HA topology (multi-AZ), autoscaling, backup/restore',
      'Full IaC + FinOps budgets/alerts',
      'Access control/RBAC, SSO/IdP (1 integration), secrets mgmt',
      'Runbooks + DR drill (1 ครั้ง)'
    ],
    outOfScope: [
      'SOC2/ISO documentation & external audit',
      'Multi-region DR (add-on)',
      'Large BI/analytics, data labeling'
    ],
    outOfScopeTh: [
      'SOC2/ISO documentation & external audit',
      'Multi-region DR (add-on)',
      'Large BI/analytics, data labeling'
    ],
    deliverables: [
      'Infra repo + pipelines',
      'SLO/SLA & observability pack',
      'DR/failover drill report',
      'Security & hardening checklist'
    ],
    deliverablesTh: [
      'Infra repo + pipelines',
      'SLO/SLA + ชุด observability',
      'รายงาน DR/failover drill',
      'เช็กลิสต์ด้านความปลอดภัย'
    ],
    addons: [
      'SOC2/ISO readiness (+ ฿280k)',
      'Multi-region DR (+ ฿380k)',
      'DLP/PII rollout (+ ฿160k)',
      'Recommended: Launch Assurance Sprint (+ ฿260k)'
    ],
    addonsTh: [
      'SOC2/ISO readiness (+ ฿280k)',
      'Multi-region DR (+ ฿380k)',
      'DLP/PII rollout (+ ฿160k)',
      'แนะนำ: Launch Assurance Sprint (+ ฿260k)'
    ],
    ctaLabel: 'Scale to Production',
    ctaLabelTh: 'ขยายสู่ Production'
  },

  assurance: {
    id: 'assurance',
    title: 'Launch Assurance Sprint',
    titleTh: 'Launch Assurance Sprint',
    priceFromTHB: 260_000,
    priceUnit: 'one_time',
    timeline: '3',
    crossCutting: true,
    bullets: [
      'Security/compliance review',
      'Perf/smoke gate',
      'Backup/restore drill'
    ],
    bulletsTh: [
      'ตรวจสอบ security/compliance',
      'Perf/smoke gate',
      'ทดสอบ backup/restore'
    ],
    inScope: [
      'Security/compliance review (config & policy alignment)',
      'Backup/restore drill + recovery measurement',
      'Perf/smoke/regression gate',
      'Change management & release sign-off package'
    ],
    inScopeTh: [
      'รีวิว security/compliance (config & policy)',
      'ทดสอบ backup/restore + วัดเวลาฟื้นคืน',
      'Perf/smoke/regression gate',
      'ชุดเอกสารอนุมัติปล่อยงาน'
    ],
    outOfScope: [
      'External penetration test',
      'Audit documentation pack'
    ],
    outOfScopeTh: [
      'External penetration test',
      'Audit documentation pack'
    ],
    deliverables: [
      'Assurance report + remediation list',
      'Config baseline & diffs',
      'Test reports (perf/smoke/recovery)',
      'Go-live sign-off artifacts'
    ],
    deliverablesTh: [
      'รายงาน assurance + รายการแก้ไข',
      'Config baseline & diffs',
      'รายงานทดสอบ (perf/smoke/recovery)',
      'เอกสารอนุมัติ go-live'
    ],
    addons: ['Assurance+ (pen-test lite, chaos/failover) - ฿320k'],
    addonsTh: ['Assurance+ (pen-test lite, chaos/failover) - ฿320k'],
    ctaLabel: 'Add Assurance',
    ctaLabelTh: 'เพิ่ม Assurance'
  },

  care_plan: {
    id: 'care_plan',
    title: 'Care Plan',
    titleTh: 'Care Plan',
    priceUnit: 'monthly',
    postLaunch: true,
    bullets: ['Shared metrics workspace', 'Model refresh cadence', 'On-demand enhancements'],
    bulletsTh: ['พื้นที่ติดตามตัวชี้วัดร่วมกัน', 'รอบการรีเฟรชโมเดล', 'ปรับปรุงตามการใช้งานจริง'],
    inScope: [
      'Monitoring & health checks, patch & minor config',
      'Model refresh cadence (as scoped)',
      'Incident response per SLA'
    ],
    inScopeTh: [
      'Monitoring & health checks, patch & minor config',
      'รอบการรีเฟรชโมเดลตามขอบเขต',
      'Incident response ตาม SLA'
    ],
    outOfScope: [
      'Major feature development',
      'Major migrations',
      'True 24/7 (add-on)'
    ],
    outOfScopeTh: [
      'ฟีเจอร์ขนาดใหญ่',
      'Migration ขนาดใหญ่',
      'True 24/7 (add-on)'
    ],
    deliverables: [
      'Monthly ops report (uptime, incidents, actions)',
      'Backlog & roadmap suggestions'
    ],
    deliverablesTh: [
      'รายงานปฏิบัติการรายเดือน (uptime/incident/action)',
      'ข้อเสนอแนะ backlog และ roadmap'
    ],
    addons: [],
    tiers: [
      { name: 'Lite', nameTh: 'Lite', priceTHB: 45_000, hours: 8, sla: 'NBD' },
      { name: 'Standard', nameTh: 'Standard', priceTHB: 85_000, hours: 24, sla: '8h' },
      { name: 'Plus', nameTh: 'Plus', priceTHB: 150_000, hours: 48, sla: '4h', bonus: '1 mini-sprint/quarter', bonusTh: '1 mini-sprint/ไตรมาส' },
    ],
    ctaLabel: 'Choose Care Plan',
    ctaLabelTh: 'เลือก Care Plan'
  },
};

export const pricingOrder = ['kickstart','poc_lab','pilot_launch','production_scale'] as const;
export const packagesOrder = ['kickstart','poc_lab','pilot_launch','production_scale','assurance','care_plan'] as const;

export const globalTerms = [
  {
    en: 'Prices exclude 7% VAT.',
    th: 'ราคายังไม่รวม VAT 7%'
  },
  {
    en: 'Cloud consumption beyond starter budget is billed to client.',
    th: 'ค่าใช้จ่ายคลาวด์นอกเหนือจากงบเริ่มต้น ลูกค้ารับผิดชอบตามจริง'
  },
  {
    en: 'Payment: 50/30/20 milestone (retainers prepaid).',
    th: 'การชำระเงิน: 50/30/20 ตาม milestone (ชำระล่วงหน้า)'
  },
  {
    en: 'Change Requests billed at ฿18,000 per person-day (pro-rated, with prior approval).',
    th: 'Change Request คิดที่ ฿18,000 ต่อคน-วัน (คิดตามจริง และต้องอนุมัติล่วงหน้า)'
  },
];
