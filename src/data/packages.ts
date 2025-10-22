import type { PackageConfig } from '@/types/packages';

export const packagesMap: Record<string, PackageConfig> = {
  kickstart: {
    id: 'kickstart',
    title: 'Kickstart',
    priceFromTHB: 95_000,
    priceUnit: 'one_time',
    timeline: '2',
    bullets: [
      'หนึ่ง use-case + feasibility จริง',
      'วัด KPI ชัด + แผน 90 วัน',
      'เดโมเล็กให้เห็นภาพ (ขอบเขตจำกัด)',
    ],
    inScope: [
      'Stakeholder interviews & alignment (2–3 sessions)',
      'Data/AI opportunity mapping + feasibility',
      'Success metrics + 90-Day plan',
      'Mini prototype/demo (scope เบื้องต้น)',
    ],
    outOfScope: [
      'SSO/IdP integration',
      'Production-grade CI/CD, HA hardening',
      'Data labeling/cleaning เชิงลึก',
    ],
    deliverables: [
      'Executive Brief (1p)',
      'Opportunity Map & Feasibility (1–2p)',
      '90-Day Plan (1p)',
      'Slide Deck 12–16',
    ],
    addons: ['Extra workshop / deep-dive session'],
    ctaLabel: 'Start Exploring',
  },

  poc_lab: {
    id: 'poc_lab',
    title: 'POC Lab',
    priceFromTHB: 420_000,
    priceUnit: 'one_time',
    timeline: '4–6',
    highlight: 'Most Popular',
    bullets: [
      'One scoped use-case, one sandbox datasource',
      'Baseline + scorecard with experiment tracking',
      'Demo + README + docker compose',
    ],
    inScope: [
      '1 use-case, 1 datasource (sandbox)',
      'Baseline/heuristic + metric scorecard',
      'Experiment tracking + cost guardrail (starter cloud budget)',
      'Demo (CLI/Notebook/mini FE)',
      'README + docker compose สำหรับทดลอง',
    ],
    outOfScope: [
      'หลายแหล่งข้อมูล/หลาย use-case',
      'SSO/IdP, CI/CD จริง',
      'HA/Hardening, Security audit เต็มรูปแบบ',
      'Data labeling > 500 items',
      'Production dashboard',
    ],
    deliverables: [
      'Repo + README + compose',
      'Experiment report + scorecard',
      'Demo recording',
      'POC close-out & next-step',
    ],
    addons: [
      'Extra datasource (+ ฿90k/แหล่ง)',
      'SSO/IdP (จาก + ฿120k)',
      'Data labeling (จาก + ฿60k)',
    ],
    ctaLabel: 'Validate Your Ideas',
  },

  pilot_launch: {
    id: 'pilot_launch',
    title: 'Pilot Launch',
    priceFromTHB: 720_000,
    priceUnit: 'per_env',
    timeline: '6–9',
    recommendAssurance: true,
    bullets: [
      'ปล่อยใช้งานกับผู้ใช้จริงแบบจำกัด (canary/blue-green)',
      'Monitoring + guardrails พร้อม playbook ถอยกลับ',
      'Onboarding ทีมปฏิบัติการ',
    ],
    inScope: [
      'Staging + Prod (1 env) พร้อม canary/blue-green',
      'Monitoring/Logging/Alerting + LLM guardrails พื้นฐาน',
      'Release checklist + rollback playbook',
      'Training run (limited live traffic) + onboarding',
    ],
    outOfScope: [
      '24/7 SLA, multi-region HA',
      'SOC2/ISO audit เต็มรูปแบบ',
      'Complex data pipelines, deep analytics dashboards',
    ],
    deliverables: [
      'IaC/Deploy scripts + Env runbook',
      'Monitoring dashboards + alert rules',
      'Launch notes + risk & rollback plan',
      'KB สำหรับทีมปฏิบัติการ',
    ],
    addons: [
      'Extra env (40–60% ของ base)',
      'Load/Perf deep test (จาก + ฿120k)',
      'Security hardening extra (จาก + ฿150k)',
      '⚠️ Recommended: Launch Assurance Sprint (+ ฿260k)',
    ],
    ctaLabel: 'Launch Pilot',
  },

  production_scale: {
    id: 'production_scale',
    title: 'Production Scale',
    priceFromTHB: 1_200_000,
    priceUnit: 'per_rollout',
    timeline: '8–12',
    recommendAssurance: true,
    bullets: [
      'HA multi-AZ + autoscale + backup/restore',
      'IaC เต็มชุด + FinOps budgets/alerts',
      'Runbooks 24/7 + DR drill',
    ],
    inScope: [
      'HA topology (multi-AZ), autoscaling, backup/restore',
      'Full IaC + FinOps budgets/alerts',
      'Access control/RBAC, SSO/IdP (1 ตัว), secrets mgmt',
      '24/7 runbooks + DR drill (1 ครั้ง)',
    ],
    outOfScope: [
      'SOC2/ISO docs & external audit (เต็มรูปแบบ)',
      'Multi-region DR (ทำเป็น add-on)',
      'Large BI/analytics, data labeling',
    ],
    deliverables: [
      'Infra repo + pipelines',
      'SLO/SLA & observability pack',
      'DR/failover drill report',
      'Security & hardening checklist',
    ],
    addons: [
      'SOC2/ISO readiness (+ ฿280k)',
      'Multi-region DR (+ ฿380k)',
      'DLP/PII rollout (+ ฿160k)',
      '⚠️ Recommended: Launch Assurance Sprint (+ ฿260k)',
    ],
    ctaLabel: 'Scale to Production',
  },

  assurance: {
    id: 'assurance',
    title: 'Launch Assurance Sprint',
    priceFromTHB: 260_000,
    priceUnit: 'one_time',
    timeline: '3 wks',
    crossCutting: true,
    bullets: ['Security/Compliance review', 'Perf/smoke gate', 'Backup/restore drill'],
    inScope: [
      'Security/compliance review (config & policy alignment)',
      'Backup/restore drill + recovery measurement',
      'Perf/smoke/regression gate',
      'Change management & release sign-off package',
    ],
    outOfScope: [
      'ฟีเจอร์ใหม่/รีแฟกเตอร์ใหญ่',
      'External penetration test (เต็มรูปแบบ)',
    ],
    deliverables: [
      'Assurance report + remediation list',
      'Config baseline & diffs',
      'Test reports (perf/smoke/recovery)',
      'Go-live sign-off artifacts',
    ],
    addons: ['Assurance+ (pen-test lite, chaos/failover) — ฿320k'],
    ctaLabel: 'Add Assurance',
  },

  care_plan: {
    id: 'care_plan',
    title: 'Care Plan',
    priceUnit: 'monthly',
    postLaunch: true,
    bullets: ['Shared metrics workspace', 'Model refresh cadence', 'On-demand enhancements'],
    inScope: [
      'Monitoring & health checks, patch & minor config',
      'Model refresh cadence (เบื้องต้น)',
      'Incident response ตาม SLA',
    ],
    outOfScope: [
      'Feature ใหม่ขนาดกลาง–ใหญ่',
      'Major migrations',
      'True 24/7 (เว้นแต่ตกลงเพิ่ม)',
    ],
    deliverables: [
      'Monthly ops report (uptime, incidents, actions)',
      'Backlog & roadmap suggestions',
    ],
    addons: [],
    tiers: [
      { name: 'Lite',     priceTHB: 45_000, hours: 8,  sla: 'NBD' },
      { name: 'Standard', priceTHB: 85_000, hours: 24, sla: '8h'  },
      { name: 'Plus',     priceTHB: 150_000, hours: 48, sla: '4h', bonus: '1 mini-sprint/quarter' },
    ],
    ctaLabel: 'Choose Care Plan',
  },
};

// Which to show on each page
export const pricingOrder = ['kickstart','poc_lab','pilot_launch','production_scale'] as const;
export const packagesOrder = ['kickstart','poc_lab','pilot_launch','production_scale','assurance','care_plan'] as const;

// Terms
export const globalTerms = [
  'Prices exclude 7% VAT.',
  'Cloud consumption beyond starter budget is billed to client.',
  'Payment: 50/30/20 milestone (retainers prepaid).',
  'Change Requests billed at 18,000 THB per person-day (pro-rated, with prior approval).',
];
