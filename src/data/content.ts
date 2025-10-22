export type LocaleValue = {
  en: string;
  th: string;
};

export const getLocalized = (locale: string, value: LocaleValue): string => {
  return locale.startsWith('th') ? value.th : value.en;
};

const enTh = (text: string): LocaleValue => ({ en: text, th: text });

export type ValueCard = {
  id: string;
  icon: 'rocket' | 'lineChart' | 'cpu';
  title: LocaleValue;
  description: LocaleValue;
  bullets: LocaleValue[];
};

export const valueCards: ValueCard[] = [
  {
    id: 'edge-ready',
    icon: 'rocket',
    title: enTh('Edge-ready delivery'),
    description: enTh('Hardened deployments with remote management, OT integration, and staged rollouts.'),
    bullets: [
      enTh('Edge orchestrators and secure tunnelling'),
      enTh('Failover playbooks with monitoring hooks'),
    ],
  },
  {
    id: 'roi',
    icon: 'lineChart',
    title: enTh('ROI you can track'),
    description: enTh('Business casing, KPI trees, and dashboards so stakeholders see value from POC to production.'),
    bullets: [enTh('KPI instrumentation from sprint one'), enTh('Executive ready progress updates')],
  },
  {
    id: 'poc-to-prod',
    icon: 'cpu',
    title: enTh('POC to production'),
    description: enTh('Reusable accelerators, infrastructure as code, and quality gates that shorten the jump to launch.'),
    bullets: [enTh('Starter kits and component library'), enTh('Security and compliance baked in')],
  },
];

export type ProcessStep = {
  id: string;
  title: LocaleValue;
  description: LocaleValue;
};

export const processSteps: ProcessStep[] = [
  { id: 'discover', title: enTh('Discover & align'), description: enTh('Stakeholder interviews, data review, and success criteria mapped to KPIs.') },
  { id: 'design', title: enTh('Design & prototype'), description: enTh('Solution architecture, UX states, model baselines, and synthetic datasets.') },
  { id: 'validate', title: enTh('Validate'), description: enTh('User acceptance labs, security reviews, and MLOps smoke tests in staging.') },
  { id: 'deploy', title: enTh('Deploy'), description: enTh('Blue/green or canary rollout with observability dashboards and incident guides.') },
  { id: 'enable', title: enTh('Enable the team'), description: enTh('Playbooks, train-the-trainer workshops, and change management assets.') },
  { id: 'handover', title: enTh('Scale & handover'), description: enTh('Future roadmap, backlog grooming, and success metric reviews.') },
];

export type ServiceItem = {
  slug: string;
  category: 'ml' | 'cv' | 'aiot' | 'llm' | 'platform' | 'analytics';
  icon: 'brain' | 'scan' | 'satellite' | 'bot' | 'layers' | 'barChart';
  title: LocaleValue;
  summary: LocaleValue;
  features: LocaleValue[];
  outcomes: LocaleValue[];
  deliverables: LocaleValue[];
  technologies: string[];
  timelineWeeks: [number, number];
  pricing: { starting: number; unit: LocaleValue };
  badges?: LocaleValue[];
};

const service = (params: Omit<ServiceItem, 'pricing'> & { pricing: ServiceItem['pricing'] }): ServiceItem => params;

export const services: ServiceItem[] = [
  service({
    slug: 'ocr-workbench',
    category: 'cv',
    icon: 'scan',
    title: enTh('Document OCR workbench'),
    summary: enTh('High-accuracy OCR pipelines with layout detection, human-in-the-loop review, and export automations.'),
    features: [enTh('Template and free-form document support'), enTh('Reviewer UI with feedback capture')],
    outcomes: [enTh('Cut manual entry time by 60%'), enTh('Audit-ready extraction history')],
    deliverables: [enTh('OCR pipeline templates and deployment scripts'), enTh('Reviewer console with role-based access')],
    technologies: ['Azure AI Vision', 'Textract', 'Tesseract', 'Next.js'],
    timelineWeeks: [5, 9],
    pricing: { starting: 260000, unit: enTh('THB / deployment') },
  }),
  service({
    slug: 'predictive-maintenance',
    category: 'ml',
    icon: 'brain',
    title: enTh('Predictive maintenance AI'),
    summary: enTh('Sensor fusion, anomaly detection, and automated alerting tuned for OT environments.'),
    features: [
      enTh('Time-series forecasting and anomaly models'),
      enTh('Maintenance cockpit with drill-down analytics'),
    ],
    outcomes: [
      enTh('Cut unexpected downtime by 30-45%'),
      enTh('SOP playbooks for technicians'),
    ],
    deliverables: [
      enTh('Edge-to-cloud pipelines with alert routing'),
      enTh('Model registry and retraining recipes'),
    ],
    technologies: ['Azure IoT', 'Kafka', 'Databricks', 'TensorFlow'],
    timelineWeeks: [8, 12],
    pricing: { starting: 420000, unit: enTh('THB / project') },
    badges: [enTh('Edge ready')],
  }),
  service({
    slug: 'frontend-starter',
    category: 'platform',
    icon: 'layers',
    title: enTh('Frontend delivery starter'),
    summary: enTh('Design system and frontend pipeline setup with accessibility, testing, and CI/CD baked in.'),
    features: [enTh('Component library with storybook and tokens'), enTh('E2E and visual regression testing harness')],
    outcomes: [enTh('Faster UI delivery with shared foundations'), enTh('Consistent accessibility and performance guardrails')],
    deliverables: [enTh('Design token pack and component docs'), enTh('CI/CD pipeline with quality gates')],
    technologies: ['Next.js', 'Storybook', 'Playwright', 'Tailwind CSS'],
    timelineWeeks: [4, 6],
    pricing: { starting: 210000, unit: enTh('THB / rollout') },
  }),
  service({
    slug: 'backend-modernization',
    category: 'platform',
    icon: 'layers',
    title: enTh('Backend modernization sprint'),
    summary: enTh('API and service hardening with observability, testing, and deployment automation for legacy stacks.'),
    features: [enTh('Service decomposition & API design'), enTh('Observability and incident response patterns')],
    outcomes: [enTh('Reduced production incidents and runtime costs'), enTh('Clear upgrade path for future features')],
    deliverables: [enTh('Refactored services and migration guides'), enTh('Playbooks for deployment, monitoring, rollback')],
    technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'Kubernetes'],
    timelineWeeks: [6, 10],
    pricing: { starting: 340000, unit: enTh('THB / transformation') },
  }),
  service({
    slug: 'vision-quality-inspection',
    category: 'cv',
    icon: 'scan',
    title: enTh('Vision quality inspection'),
    summary: enTh('High-accuracy defect detection for manufacturing lines with explainable overlays and SPC reporting.'),
    features: [enTh('Multi-camera ingestion and calibration'), enTh('Explainable overlays for operators')],
    outcomes: [enTh('Reduce false rejects by up to 60%'), enTh('Regulatory aligned audit trail')],
    deliverables: [enTh('On-prem inference pipeline with MLOps hooks'), enTh('Operator handbook and SOP visuals')],
    technologies: ['NVIDIA Triton', 'OpenCV', 'PyTorch', 'PostgreSQL'],
    timelineWeeks: [6, 10],
    pricing: { starting: 380000, unit: enTh('THB / production line') },
  }),
  service({
    slug: 'aiot-pipeline',
    category: 'aiot',
    icon: 'satellite',
    title: enTh('AIoT telemetry pipeline'),
    summary: enTh('Unified sensor pipelines from devices to dashboards with device provisioning and alert management.'),
    features: [enTh('Provisioning workflow and firmware updates'), enTh('Real-time dashboards with geo awareness')],
    outcomes: [enTh('Single pane of glass for distributed assets'), enTh('Alert routing playbooks for OT and IT')],
    deliverables: [enTh('Device templates, provisioning scripts, and IaC'), enTh('Operations dashboard and runbook')],
    technologies: ['AWS IoT Core', 'Grafana', 'TimescaleDB', 'Kubernetes'],
    timelineWeeks: [8, 14],
    pricing: { starting: 450000, unit: enTh('THB / deployment') },
  }),
  service({
    slug: 'llm-knowledge-assistant',
    category: 'llm',
    icon: 'bot',
    title: enTh('LLM knowledge assistant'),
    summary: enTh('Retrieval-augmented assistant with guardrails, Thai-language optimisation, and usage analytics.'),
    features: [enTh('Guardrails for sensitive content'), enTh('Usage analytics and feedback loops')],
    outcomes: [enTh('Reduce document lookup time by 70%'), enTh('Visibility on adoption and questions')],
    deliverables: [enTh('Vector index with ingestion pipelines'), enTh('Prompt templates and governance checklist')],
    technologies: ['Azure OpenAI', 'LangChain', 'Qdrant', 'Next.js'],
    timelineWeeks: [5, 8],
    pricing: { starting: 320000, unit: enTh('THB / assistant') },
    badges: [enTh('Thai language optimised')],
  }),
  service({
    slug: 'data-foundation',
    category: 'platform',
    icon: 'layers',
    title: enTh('Data & MLOps foundation'),
    summary: enTh('Modern data stack blueprints with lineage, quality checks, and model CI/CD ready for scale.'),
    features: [enTh('Lakehouse patterns with governance controls'), enTh('Model CI/CD with automated evaluation gates')],
    outcomes: [enTh('Developer onboarding guides week one'), enTh('Foundation for future AI workloads')],
    deliverables: [enTh('IaC repositories and reference implementations'), enTh('Security and compliance documentation')],
    technologies: ['Terraform', 'dbt', 'Dagster', 'MLflow'],
    timelineWeeks: [6, 9],
    pricing: { starting: 390000, unit: enTh('THB / rollout') },
  }),
  service({
    slug: 'analytics-cockpit',
    category: 'analytics',
    icon: 'barChart',
    title: enTh('Executive analytics cockpit'),
    summary: enTh('Story-driven dashboards with alerts, scenario planning, and CRM/ERP integrations for one source of truth.'),
    features: [enTh('Scenario planning and goal tracking modules'), enTh('Mobile friendly executive briefings')],
    outcomes: [enTh('Faster decision cycles with trusted numbers'), enTh('Shared scorecards across teams')],
    deliverables: [enTh('BI models, semantic layer, and dashboard pack'), enTh('Alert and governance runbooks')],
    technologies: ['Power BI', 'Looker', 'Snowflake', 'Fivetran'],
    timelineWeeks: [5, 7],
    pricing: { starting: 280000, unit: enTh('THB / implementation') },
  }),
  service({
    slug: 'edge-computer-solution',
    category: 'aiot',
    icon: 'satellite',
    title: enTh('Edge AI Computer (Jetson/Raspberry Pi + LLM)'),
    summary: enTh('On-device AI processing with LLM for fast, secure, offline-capable applications at the edge.'),
    features: [enTh('Offline LLM processing capability'), enTh('Low latency edge inference'), enTh('Secure on-device data processing')],
    outcomes: [enTh('90% latency reduction vs cloud'), enTh('100% offline operation capability'), enTh('Enhanced data privacy and security')],
    deliverables: [enTh('Configured edge device with LLM'), enTh('Deployment and update scripts'), enTh('Monitoring and management tools')],
    technologies: ['NVIDIA Jetson', 'Raspberry Pi', 'LLaMA', 'TensorRT'],
    timelineWeeks: [4, 7],
    pricing: { starting: 290000, unit: enTh('THB / device deployment') },
    badges: [enTh('Edge ready')],
  }),
  service({
    slug: 'depth-camera-solution',
    category: 'cv',
    icon: 'scan',
    title: enTh('Depth Camera Weight & Size Prediction'),
    summary: enTh('Non-contact measurement system for accurate weight prediction and size classification using depth cameras.'),
    features: [enTh('3D depth sensing and analysis'), enTh('Real-time weight prediction'), enTh('Automated size classification')],
    outcomes: [enTh('95% accuracy in weight prediction'), enTh('3x faster than manual process'), enTh('Zero product damage from handling')],
    deliverables: [enTh('Calibrated depth camera system'), enTh('Prediction models and API'), enTh('Integration documentation')],
    technologies: ['Intel RealSense', 'PyTorch', 'OpenCV', 'FastAPI'],
    timelineWeeks: [5, 8],
    pricing: { starting: 310000, unit: enTh('THB / station') },
  }),
  service({
    slug: 'ocr-dashboard-solution',
    category: 'cv',
    icon: 'scan',
    title: enTh('OCR Dashboard System'),
    summary: enTh('Intelligent document processing with OCR, real-time monitoring dashboard, and automated workflow integration.'),
    features: [enTh('Multi-format document OCR'), enTh('Real-time processing dashboard'), enTh('Workflow automation integration')],
    outcomes: [enTh('98% OCR accuracy'), enTh('85% time savings vs manual entry'), enTh('Real-time visibility into processing')],
    deliverables: [enTh('OCR processing pipeline'), enTh('Monitoring dashboard'), enTh('API and webhook integrations')],
    technologies: ['Tesseract', 'Azure AI Vision', 'React', 'PostgreSQL'],
    timelineWeeks: [4, 6],
    pricing: { starting: 240000, unit: enTh('THB / deployment') },
  }),
  service({
    slug: 'knowledge-management-solution',
    category: 'llm',
    icon: 'bot',
    title: enTh('CereBraKM — Knowledge Management System'),
    summary: enTh('RAG + LLM powered knowledge management with AI search, recommendations, and document intelligence.'),
    features: [enTh('RAG-based document retrieval'), enTh('AI-powered search and recommendations'), enTh('Multi-language support')],
    outcomes: [enTh('70% faster knowledge retrieval'), enTh('85% employee adoption rate'), enTh('90% search accuracy')],
    deliverables: [enTh('Knowledge base with vector index'), enTh('Search and chat interface'), enTh('Admin dashboard and analytics')],
    technologies: ['Azure OpenAI', 'LangChain', 'Qdrant', 'Next.js'],
    timelineWeeks: [6, 9],
    pricing: { starting: 350000, unit: enTh('THB / deployment') },
    badges: [enTh('Thai language optimised')],
  }),
  service({
    slug: 'nvr-cctv-solution',
    category: 'cv',
    icon: 'scan',
    title: enTh('Intelligent CCTV with NVR + Raspberry Pi'),
    summary: enTh('AI-powered surveillance system with real-time image analysis, anomaly detection, and automated alerting.'),
    features: [enTh('Real-time image analysis'), enTh('Anomaly detection and alerts'), enTh('Multi-camera management')],
    outcomes: [enTh('92% incident detection accuracy'), enTh('75% reduction in false alarms'), enTh('Instant alert delivery')],
    deliverables: [enTh('Configured NVR and edge devices'), enTh('Analysis and alerting system'), enTh('Monitoring dashboard')],
    technologies: ['Raspberry Pi', 'OpenCV', 'PyTorch', 'MQTT'],
    timelineWeeks: [5, 8],
    pricing: { starting: 280000, unit: enTh('THB / site') },
    badges: [enTh('Edge ready')],
  }),
];

export type PackageItem = {
  slug: string;
  tier: 'kickstart' | 'poc' | 'pilot' | 'production' | 'assurance' | 'care';
  label: LocaleValue;
  summary: LocaleValue;
  price: { amount: number; currency: 'THB'; note: LocaleValue; unit?: string };
  timelineWeeks: string;
  deliverables: LocaleValue[];
  bestFor: LocaleValue;
  highlights: LocaleValue[];
  inScope: LocaleValue[];
  outOfScope: LocaleValue[];
  addOns: LocaleValue[];
};

const packageItem = (item: PackageItem): PackageItem => item;

export const packages: PackageItem[] = [
  packageItem({
    slug: 'kickstart',
    tier: 'kickstart',
    label: enTh('Kickstart'),
    summary: enTh('Strategy sprint to validate feasibility, align stakeholders, and map a data/AI roadmap.'),
    price: { amount: 95000, currency: 'THB', note: enTh('Fixed sprint (2 weeks)') },
    timelineWeeks: '2',
    deliverables: [
      enTh('Executive Brief (1 หน้า)'),
      enTh('Opportunity Map & Feasibility Note (1–2 หน้า)'),
      enTh('90-Day Plan + Roadmap (1 หน้า)'),
      enTh('Slide Deck 12–16 หน้า (PDF)')
    ],
    bestFor: enTh('Teams validating their first AI initiative'),
    highlights: [
      enTh('Stakeholder interview & alignment (2–3 session)'),
      enTh('Data/AI opportunity mapping + feasibility check'),
      enTh('Success metrics (biz & tech) + 90-Day Plan'),
      enTh('Risk register (เบื้องต้น) + next-step backlog')
    ],
    inScope: [
      enTh('Stakeholder interview & alignment (2–3 session)'),
      enTh('Data/AI opportunity mapping + feasibility check'),
      enTh('Success metrics (biz & tech) + 90-Day Plan'),
      enTh('Risk register (เบื้องต้น) + next-step backlog')
    ],
    outOfScope: [
      enTh('พัฒนาโค้ด/ต้นแบบ, ติดตั้งระบบ, เชื่อม SSO/IdP'),
      enTh('Data labeling/cleaning เชิงลึก, PII/DLP rollout')
    ],
    addOns: [enTh('Workshop เพิ่ม/Deep-dive domain (+฿15k/ครั้ง)')]
  }),
  packageItem({
    slug: 'poc-lab',
    tier: 'poc',
    label: enTh('POC Lab'),
    summary: enTh('Hands-on experimentation with synthetic datasets, model baselines, and success metrics.'),
    price: { amount: 420000, currency: 'THB', note: enTh('Includes starter cloud budget') },
    timelineWeeks: '4–6',
    deliverables: [
      enTh('Repo ต้นแบบ + README + docker compose'),
      enTh('Experiment report + metric scorecard'),
      enTh('Demo video/recording'),
      enTh('POC Close-out & Next-step (1 หน้า)')
    ],
    bestFor: enTh('Validating value before committing production spend'),
    highlights: [
      enTh('1 use-case, 1 datasource (sandbox); Experiment tracking'),
      enTh('Baseline model/heuristic + metric scorecard'),
      enTh('Demo (CLI/Notebook/mini FE) + cost guardrail (cloud เริ่มต้น)'),
      enTh('Readme/compose สำหรับรันทดลอง')
    ],
    inScope: [
      enTh('1 use-case, 1 datasource (sandbox); Experiment tracking'),
      enTh('Baseline model/heuristic + metric scorecard'),
      enTh('Demo (CLI/Notebook/mini FE) + cost guardrail (cloud เริ่มต้น)'),
      enTh('Readme/compose สำหรับรันทดลอง')
    ],
    outOfScope: [
      enTh('หลาย use-case/หลายแหล่งข้อมูล, SSO, CI/CD จริง'),
      enTh('HA/Hardening, Security audit, Data labeling >500 ภาพ/เอกสาร'),
      enTh('Dashboard ระดับ production')
    ],
    addOns: [
      enTh('แหล่งข้อมูลเพิ่ม (+฿90k/แหล่ง)'),
      enTh('SSO/IdP (จาก +฿120k)'),
      enTh('Data labeling ชุดเล็ก (จาก +฿60k)')
    ]
  }),
  packageItem({
    slug: 'pilot-launch',
    tier: 'pilot',
    label: enTh('Pilot Launch'),
    summary: enTh('Limited-traffic release with monitoring, training, and rollback guardrails.'),
    price: { amount: 720000, currency: 'THB', note: enTh('Per environment'), unit: 'per_env' },
    timelineWeeks: '6–9',
    deliverables: [
      enTh('IaC/Deploy scripts, Env runbook'),
      enTh('Monitoring dashboards + alert rules'),
      enTh('Launch notes + risk & rollback plan'),
      enTh('Knowledge base สำหรับทีมปฏิบัติการ')
    ],
    bestFor: enTh('Teams moving from POC to first live users'),
    highlights: [
      enTh('Staging + Prod (1 env) พร้อม canary/blue-green'),
      enTh('Monitoring/Logging/Alerting + LLM guardrails พื้นฐาน'),
      enTh('Release checklist + rollback playbook'),
      enTh('Training run (limited live traffic) + user onboarding เบื้องต้น')
    ],
    inScope: [
      enTh('Staging + Prod (1 env) พร้อม canary/blue-green'),
      enTh('Monitoring/Logging/Alerting + LLM guardrails พื้นฐาน'),
      enTh('Release checklist + rollback playbook'),
      enTh('Training run (limited live traffic) + user onboarding เบื้องต้น')
    ],
    outOfScope: [
      enTh('24/7 SLA, Multi-region HA, SOC2/ISO audit เต็มรูปแบบ'),
      enTh('Analytics/Dashboard เชิงลึก, Data pipeline ซับซ้อน')
    ],
    addOns: [
      enTh('Env เพิ่มเติม (40–60% ของราคา base)'),
      enTh('Load/Perf test เชิงลึก (จาก +฿120k)'),
      enTh('Security hardening extra (จาก +฿150k)')
    ]
  }),
  packageItem({
    slug: 'production-scale',
    tier: 'production',
    label: enTh('Production Scale'),
    summary: enTh('Battle-tested production deployments with SLA design, security hardening, and 24/7 runbooks.'),
    price: { amount: 1200000, currency: 'THB', note: enTh('Starting price — scoped per rollout') },
    timelineWeeks: '8–12',
    deliverables: [
      enTh('Infra repo (IaC) + pipelines'),
      enTh('SLO/SLA & Observability pack'),
      enTh('DR/Failover drill report'),
      enTh('Security & Hardening checklist')
    ],
    bestFor: enTh('Enterprises requiring uptime guarantees'),
    highlights: [
      enTh('HA topology (multi-AZ), autoscaling, backup/restore'),
      enTh('IaC เต็มชุด + FinOps budgets/alerts'),
      enTh('Access control/RBAC, SSO/IdP (1 ตัว), secrets & key mgmt'),
      enTh('24/7 runbooks + DR drill (1 ครั้ง)')
    ],
    inScope: [
      enTh('HA topology (multi-AZ), autoscaling, backup/restore'),
      enTh('IaC เต็มชุด + FinOps budgets/alerts'),
      enTh('Access control/RBAC, SSO/IdP (1 ตัว), secrets & key mgmt'),
      enTh('24/7 runbooks + DR drill (1 ครั้ง)')
    ],
    outOfScope: [
      enTh('SOC2/ISO เอกสารครบเซ็ต/External audit'),
      enTh('Multi-region DR (ทำได้เป็น Add-on)'),
      enTh('Custom BI/Analytics ขนาดใหญ่, Data labeling')
    ],
    addOns: [
      enTh('SOC2/ISO readiness pack (จาก +฿280k)'),
      enTh('Multi-region DR (จาก +฿380k)'),
      enTh('DLP/PII redaction policy rollout (จาก +฿160k)')
    ]
  }),
  packageItem({
    slug: 'launch-assurance',
    tier: 'assurance',
    label: enTh('Launch Assurance Sprint'),
    summary: enTh('Security, compliance, and reliability hardening before major go-lives.'),
    price: { amount: 260000, currency: 'THB', note: enTh('Fixed 3-week engagement') },
    timelineWeeks: '3',
    deliverables: [
      enTh('Assurance report + remediation list'),
      enTh('Config baseline & diffs'),
      enTh('Test reports (perf/smoke/recovery)'),
      enTh('Go-live sign-off artifacts')
    ],
    bestFor: enTh('Teams preparing for production sign-off'),
    highlights: [
      enTh('Security/compliance review (config & policy alignment)'),
      enTh('Backup/restore drill + recovery time measurement'),
      enTh('Load/perf smoke test + regression gate'),
      enTh('Change management & release sign-off package')
    ],
    inScope: [
      enTh('Security/compliance review (config & policy alignment)'),
      enTh('Backup/restore drill + recovery time measurement'),
      enTh('Load/perf smoke test + regression gate'),
      enTh('Change management & release sign-off package')
    ],
    outOfScope: [
      enTh('ฟีเจอร์ใหม่/รีแฟกเตอร์ครั้งใหญ่'),
      enTh('External penetration test เต็มรูปแบบ')
    ],
    addOns: [enTh('Assurance+ (Pen-test lite, Chaos/failover drill เพิ่มเติม)')]
  }),
  packageItem({
    slug: 'care-plan',
    tier: 'care',
    label: enTh('Care Plan'),
    summary: enTh('Post-launch optimisation, model refresh cadence, and on-demand enhancements.'),
    price: { amount: 85000, currency: 'THB', note: enTh('Monthly retainer') },
    timelineWeeks: '4',
    deliverables: [
      enTh('Ops report (uptime, incidents, actions)'),
      enTh('Backlog & roadmap suggestions (สั้น ๆ)')
    ],
    bestFor: enTh('Organisations scaling adoption post-launch'),
    highlights: [
      enTh('Monitoring & health checks, patch & config minor'),
      enTh('Model refresh cadence (เบื้องต้น), small enhancements'),
      enTh('Incident response ตาม SLA ของแพ็กเกจ')
    ],
    inScope: [
      enTh('Monitoring & health checks, patch & config minor'),
      enTh('Model refresh cadence (เบื้องต้น), small enhancements'),
      enTh('Incident response ตาม SLA ของแพ็กเกจ')
    ],
    outOfScope: [
      enTh('ฟีเจอร์ใหม่ขนาดกลาง–ใหญ่, Migration ครั้งใหญ่'),
      enTh('24/7 on-call (ยกเว้นตกลงเพิ่ม)'),
      enTh('ค่า cloud consumption จริง')
    ],
    addOns: [enTh('Overage rate: ฿18,000/คน-วัน (คิดตามจริง, ต้องขออนุมัติล่วงหน้า)')]
  }),
];

export type CaseStudyItem = {
  slug: string;
  title: LocaleValue;
  industry: LocaleValue;
  challenge: LocaleValue;
  solution: LocaleValue;
  results: LocaleValue[];
  technologies: string[];
  anonymized: boolean;
  synthetic: boolean;
  publicData: boolean;
  metrics: { label: LocaleValue; value: string }[];
};

const caseItem = (item: CaseStudyItem): CaseStudyItem => item;

export const caseStudies: CaseStudyItem[] = [
  caseItem({
    slug: 'malai-platform',
    title: enTh('malAI — Thai Ceremony Management Platform'),
    industry: enTh('Event Management & Services'),
    challenge: enTh('Organizing Thai ceremonies was complex with fragmented vendor communication, budget tracking issues, and no auspicious timing guidance.'),
    solution: enTh('AI-powered platform connecting buyers and vendors with automated planning, budget calculator, and Thai auspicious timing selection system.'),
    results: [enTh('40% reduction in event planning time'), enTh('95% user satisfaction rate'), enTh('80% vendor onboarding success')],
    technologies: ['Next.js', 'PostgreSQL', 'Azure OpenAI', 'Node.js'],
    anonymized: false,
    synthetic: false,
    publicData: true,
    metrics: [
      { label: enTh('Active users'), value: '1,200+' },
      { label: enTh('Vendors'), value: '350+' },
    ],
  }),
  caseItem({
    slug: 'duelaedee-wellness',
    title: enTh('DulaeDee — Dual-Mode Wellness Platform'),
    industry: enTh('Healthcare & Wellness'),
    challenge: enTh('Healthcare providers needed separate platforms for care and wellness services, leading to fragmented user experience and billing complexity.'),
    solution: enTh('Unified platform with two UI modes (Care and Wellness) sharing backend, account, and billing with entitlement-based feature access.'),
    results: [enTh('60% faster user onboarding'), enTh('80% user retention rate'), enTh('45% operational cost savings')],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    anonymized: false,
    synthetic: false,
    publicData: true,
    metrics: [
      { label: enTh('Active users'), value: '2,500+' },
      { label: enTh('Platform uptime'), value: '99.8%' },
    ],
  }),
  caseItem({
    slug: 'cerebrakm-knowledge',
    title: enTh('CereBraKM — AI Knowledge Management'),
    industry: enTh('Enterprise Software'),
    challenge: enTh('Organizations struggled to capture, organize, and retrieve institutional knowledge efficiently across departments.'),
    solution: enTh('RAG + LLM powered knowledge management system with AI search, recommendations, and intelligent document processing.'),
    results: [enTh('70% faster knowledge retrieval'), enTh('85% employee adoption'), enTh('90% search accuracy')],
    technologies: ['Azure OpenAI', 'LangChain', 'Qdrant', 'Next.js'],
    anonymized: false,
    synthetic: false,
    publicData: true,
    metrics: [
      { label: enTh('Documents indexed'), value: '50K+' },
      { label: enTh('Daily queries'), value: '3,000+' },
    ],
  }),
  caseItem({
    slug: 'nvr-cctv-surveillance',
    title: enTh('Intelligent CCTV Surveillance'),
    industry: enTh('Security & Surveillance'),
    challenge: enTh('Manual CCTV monitoring was time-consuming and prone to missing critical events with limited analytics.'),
    solution: enTh('NVR + Raspberry Pi solution with real-time image analysis, anomaly detection, and automated alerting system.'),
    results: [enTh('92% incident detection accuracy'), enTh('75% reduction in false alarms'), enTh('Real-time alert response')],
    technologies: ['Raspberry Pi', 'OpenCV', 'PyTorch', 'MQTT'],
    anonymized: false,
    synthetic: false,
    publicData: true,
    metrics: [
      { label: enTh('Cameras monitored'), value: '150+' },
      { label: enTh('Detection latency'), value: '<2 sec' },
    ],
  }),
  caseItem({
    slug: 'edge-computer-llm',
    title: enTh('Edge AI Computer with LLM'),
    industry: enTh('Edge Computing & IoT'),
    challenge: enTh('Cloud-dependent AI solutions had latency issues, privacy concerns, and required constant connectivity.'),
    solution: enTh('Jetson/Raspberry Pi edge computer with on-device LLM for fast, secure, offline-capable AI processing.'),
    results: [enTh('90% latency reduction'), enTh('100% offline capability'), enTh('Enhanced data privacy')],
    technologies: ['NVIDIA Jetson', 'Raspberry Pi', 'LLaMA', 'TensorRT'],
    anonymized: false,
    synthetic: false,
    publicData: true,
    metrics: [
      { label: enTh('Response time'), value: '<500ms' },
      { label: enTh('Deployments'), value: '80+' },
    ],
  }),
  caseItem({
    slug: 'depth-camera-weight',
    title: enTh('Depth Camera Weight Prediction'),
    industry: enTh('Logistics & Agriculture'),
    challenge: enTh('Manual weighing and sizing was slow, labor-intensive, and prone to errors in high-volume operations.'),
    solution: enTh('Depth camera system with AI-powered weight prediction and size classification for non-contact measurement.'),
    results: [enTh('95% accuracy in weight prediction'), enTh('3x faster processing'), enTh('Zero product damage')],
    technologies: ['Intel RealSense', 'PyTorch', 'OpenCV', 'FastAPI'],
    anonymized: false,
    synthetic: false,
    publicData: true,
    metrics: [
      { label: enTh('Items processed'), value: '10K+/day' },
      { label: enTh('Accuracy'), value: '±2%' },
    ],
  }),
  caseItem({
    slug: 'ocr-dashboard',
    title: enTh('OCR Dashboard System'),
    industry: enTh('Document Processing'),
    challenge: enTh('Manual document entry was error-prone and time-consuming with no visibility into processing status.'),
    solution: enTh('Advanced OCR system with real-time dashboard for image-to-text conversion, monitoring, and analytics.'),
    results: [enTh('98% OCR accuracy'), enTh('85% time savings'), enTh('Real-time processing visibility')],
    technologies: ['Tesseract', 'Azure AI Vision', 'React', 'PostgreSQL'],
    anonymized: false,
    synthetic: false,
    publicData: true,
    metrics: [
      { label: enTh('Documents/day'), value: '5,000+' },
      { label: enTh('Processing time'), value: '<3 sec' },
    ],
  }),
  caseItem({
    slug: 'vision-assembly-anon',
    title: enTh('Automotive vision QA — anonymised'),
    industry: enTh('Automotive manufacturing'),
    challenge: enTh('Legacy inspection rejected 12% of parts, causing rework and shipment delays.'),
    solution: enTh('Computer-vision pipeline with explainable overlays, SPC dashboards, and OT integration.'),
    results: [enTh('55% reduction in false rejects within six weeks'), enTh('Operator trust improved via explainable insights')],
    technologies: ['Edge GPU', 'Triton', 'Kafka', 'Power BI'],
    anonymized: true,
    synthetic: false,
    publicData: false,
    metrics: [
      { label: enTh('Downtime savings'), value: '35%' },
      { label: enTh('Pilot duration'), value: '8 weeks' },
    ],
  }),
  caseItem({
    slug: 'finance-llm-synthetic',
    title: enTh('Financial ops assistant — synthetic data'),
    industry: enTh('Banking operations'),
    challenge: enTh('Agents spent minutes searching policy documents and escalation rules.'),
    solution: enTh('Thai tuned LLM with retrieval guardrails and analytics to monitor compliance.'),
    results: [enTh('Average handling time down by 42%'), enTh('Compliance violations dropped to zero incidents')],
    technologies: ['Azure OpenAI', 'LangChain', 'Elastic', 'Next.js'],
    anonymized: false,
    synthetic: true,
    publicData: false,
    metrics: [
      { label: enTh('Pilot agents'), value: '35' },
      { label: enTh('Satisfaction score'), value: '4.6/5' },
    ],
  }),
  caseItem({
    slug: 'supply-public',
    title: enTh('Supply analytics — public benchmark'),
    industry: enTh('Retail and logistics'),
    challenge: enTh('Fragmented spreadsheets caused stockouts and overstock at regional hubs.'),
    solution: enTh('Modern data stack with semantic layer, realtime alerts, and scenario planning toolkit.'),
    results: [enTh('Inventory turns improved by 18%'), enTh('Executive dashboard adopted organisation-wide')],
    technologies: ['Snowflake', 'dbt', 'Looker', 'Airflow'],
    anonymized: false,
    synthetic: false,
    publicData: true,
    metrics: [
      { label: enTh('Regional hubs'), value: '12' },
      { label: enTh('Integration sources'), value: '18' },
    ],
  }),
];
