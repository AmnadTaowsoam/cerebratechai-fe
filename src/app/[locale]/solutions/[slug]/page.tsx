import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, Layers } from 'lucide-react';

import {
  AnimatedGradientText,
  MagicHero,
  ShimmerButton,
} from '@/components/magicui';
import { Card, CardContent } from '@/components/ui/card';
import { services, getLocalized } from '@/data/content';
import { CASES } from '@/data/cases';
import { routes } from '@/lib/routes';

type ServicePageProps = {
  params: { locale: string; slug: string };
};

const serviceMap = new Map(services.map(service => [service.slug, service]));

export async function generateStaticParams() {
  return services.flatMap(service => [
    { locale: 'en', slug: service.slug },
    { locale: 'th', slug: service.slug },
  ]);
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { locale, slug } = params;

  if (!locale || !slug) {
    return {
      title: 'Solution | CerebraTechAI',
      description: 'AI solutions and services',
    };
  }

  const normalizedLocale = locale.startsWith('th') ? 'th' : 'en';
  const service = serviceMap.get(slug);
  if (!service) return {};

  return {
    title: `${getLocalized(normalizedLocale, service.title)} | CerebraTechAI`,
    description: getLocalized(normalizedLocale, service.summary),
  };
}

type UseCaseItem = {
  title: { th: string; en: string };
  description: { th: string; en: string };
  metric: { th: string; en: string };
};

const USE_CASES: Record<string, UseCaseItem[]> = {
  llm: [
    {
      title: {
        th: 'ผู้ช่วยค้นความรู้ภายในองค์กร',
        en: 'Internal Knowledge Assistant',
      },
      description: {
        th: 'ค้นเอกสาร/นโยบาย/คู่มือได้เร็วขึ้น พร้อมอ้างอิงแหล่งที่มา',
        en: 'Help teams find internal information with citations and guardrails.',
      },
      metric: {
        th: 'ค้นข้อมูลเร็วขึ้น ~70%',
        en: '~70% faster information retrieval',
      },
    },
    {
      title: { th: 'แชตบอทซัพพอร์ตลูกค้า', en: 'Customer Support Chatbot' },
      description: {
        th: 'ตอบคำถามซ้ำ ๆ และคัดกรองเคสได้ 24/7 เชื่อมต่อฐานความรู้และ ticket',
        en: 'Automate FAQs and triage with integrations to your knowledge base and ticketing.',
      },
      metric: { th: 'ลดงานซ้ำ + เพิ่ม SLA', en: 'Reduced load, improved SLA' },
    },
    {
      title: {
        th: 'RAG สำหรับงานขาย/พรีเซลส์',
        en: 'Sales & Presales Copilot',
      },
      description: {
        th: 'ดึงข้อมูลจากเอกสารสินค้า/ราคา/สัญญา ช่วยตอบและสรุปแบบมีหลักฐาน',
        en: 'Ground answers in product docs, pricing, and contracts with traceability.',
      },
      metric: {
        th: 'สรุปเอกสารเร็วขึ้น',
        en: 'Faster summaries and responses',
      },
    },
  ],
  cv: [
    {
      title: {
        th: 'ตรวจคุณภาพแบบเรียลไทม์',
        en: 'Real-time Quality Inspection',
      },
      description: {
        th: 'ตรวจ defect บนไลน์ ลดของเสียและกัน defect หลุด',
        en: 'Detect defects on the line to reduce rework and prevent escapes.',
      },
      metric: { th: 'ลด defect หลุด', en: 'Fewer escapes' },
    },
    {
      title: { th: 'OCR เอกสาร/ฟอร์ม', en: 'Document OCR' },
      description: {
        th: 'แยกเลย์เอาต์ + ดึงข้อมูลจากเอกสาร ลดงานกรอกมือ',
        en: 'Extract structured data from documents with layout-aware OCR.',
      },
      metric: { th: 'ลดเวลาคีย์ข้อมูล', en: 'Less manual entry' },
    },
    {
      title: { th: 'นับ/วัด/ตรวจความครบถ้วน', en: 'Counting & Compliance' },
      description: {
        th: 'นับชิ้นงาน ตรวจความครบชุด ตรวจสภาพบรรจุภัณฑ์',
        en: 'Count items, verify completeness, and check packaging conditions.',
      },
      metric: { th: 'ตรวจได้สม่ำเสมอขึ้น', en: 'More consistent checks' },
    },
  ],
  ml: [
    {
      title: { th: 'พยากรณ์ยอดขาย/ดีมานด์', en: 'Forecasting' },
      description: {
        th: 'พยากรณ์เวลา-ซีรีส์สำหรับวางแผนการผลิต/สต็อก',
        en: 'Time-series forecasting for production and inventory planning.',
      },
      metric: { th: 'วางแผนได้แม่นขึ้น', en: 'Better planning accuracy' },
    },
    {
      title: { th: 'ตรวจจับความผิดปกติ', en: 'Anomaly Detection' },
      description: {
        th: 'จับสัญญาณผิดปกติในข้อมูล/กระบวนการแบบเรียลไทม์',
        en: 'Detect anomalies in data and processes in near real-time.',
      },
      metric: { th: 'แจ้งเตือนเร็วขึ้น', en: 'Faster alerts' },
    },
    {
      title: { th: 'Predictive Maintenance', en: 'Predictive Maintenance' },
      description: {
        th: 'คาดการณ์การเสียหายของเครื่องจักร เพื่อลด downtime',
        en: 'Predict failures early to reduce downtime and maintenance cost.',
      },
      metric: { th: 'ลดค่า maintenance', en: 'Lower maintenance cost' },
    },
  ],
  aiot: [
    {
      title: { th: 'Edge inference หน้างาน', en: 'On-device Inference' },
      description: {
        th: 'รันโมเดลบนอุปกรณ์หน้างาน เพื่อลด latency และเพิ่ม privacy',
        en: 'Run models on the edge for latency and privacy constraints.',
      },
      metric: { th: 'latency ต่ำลง', en: 'Lower latency' },
    },
    {
      title: { th: 'สตรีมข้อมูลเซนเซอร์', en: 'Sensor Streaming' },
      description: {
        th: 'เก็บ/ส่งข้อมูล IoT เข้าแดชบอร์ดและระบบแจ้งเตือน',
        en: 'Stream IoT data into dashboards and alerting pipelines.',
      },
      metric: { th: 'มองเห็นปัญหาเร็ว', en: 'Faster visibility' },
    },
    {
      title: { th: 'แจ้งเตือนอัตโนมัติ', en: 'Automated Alerts' },
      description: {
        th: 'ตั้งกฎ + โมเดลเพื่อแจ้งเตือนเหตุการณ์สำคัญ',
        en: 'Rules + ML alerts for critical events and anomalies.',
      },
      metric: { th: 'ลดเหตุหลุด', en: 'Fewer missed events' },
    },
  ],
  platform: [
    {
      title: {
        th: 'MLOps/Deployment pipeline',
        en: 'MLOps & Deployment Pipeline',
      },
      description: {
        th: 'ทำให้ deploy ได้ซ้ำ มี registry/monitoring',
        en: 'Repeatable deployments with registry and monitoring.',
      },
      metric: { th: 'ลดความเสี่ยง prod', en: 'Lower prod risk' },
    },
    {
      title: {
        th: 'Data platform พร้อมใช้งาน',
        en: 'Production Data Platform',
      },
      description: {
        th: 'จัดโครงสร้างข้อมูลเพื่อ analytics และ ML',
        en: 'Prepare data foundations for analytics and ML.',
      },
      metric: { th: 'ทำงานเร็วขึ้น', en: 'Faster delivery' },
    },
    {
      title: { th: 'Observability', en: 'Observability' },
      description: {
        th: 'ติดตามระบบ/โมเดล/คุณภาพข้อมูลแบบ end-to-end',
        en: 'End-to-end visibility for system, model, and data health.',
      },
      metric: { th: 'แก้ปัญหาไว', en: 'Faster debugging' },
    },
  ],
  analytics: [
    {
      title: { th: 'แดชบอร์ดผู้บริหาร', en: 'Executive Dashboards' },
      description: {
        th: 'สรุป KPI และแนวโน้ม พร้อม drill-down ได้',
        en: 'KPI dashboards with drill-down analysis.',
      },
      metric: { th: 'ตัดสินใจเร็วขึ้น', en: 'Faster decisions' },
    },
    {
      title: { th: 'วิเคราะห์ต้นทุน/กำไร', en: 'Cost & Margin Analytics' },
      description: {
        th: 'มองเห็น cost driver และโอกาสปรับปรุง',
        en: 'Understand cost drivers and improvement opportunities.',
      },
      metric: { th: 'คุมต้นทุนดีขึ้น', en: 'Better cost control' },
    },
    {
      title: { th: 'คุณภาพข้อมูล', en: 'Data Quality' },
      description: {
        th: 'ตรวจ/แจ้งเตือนคุณภาพข้อมูลและ pipeline',
        en: 'Detect and alert on data quality issues.',
      },
      metric: { th: 'ลดปัญหา data', en: 'Fewer data issues' },
    },
  ],
};

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { locale, slug } = params;

  if (!locale || !slug) {
    notFound();
  }

  const normalizedLocale = locale.startsWith('th') ? 'th' : 'en';
  const isThai = normalizedLocale === 'th';

  const service = serviceMap.get(slug);
  if (!service) notFound();

  const t = (th: string, en: string) => (isThai ? th : en);

  const labels = {
    timeline: t('ไทม์ไลน์', 'Timeline'),
    weeks: t('สัปดาห์', 'weeks'),
    deliverables: t('สิ่งส่งมอบ', 'Deliverables'),
    whatYouGet: t('สิ่งที่จะได้รับ', 'What you get'),
    outcomes: t('ผลลัพธ์', 'Outcomes'),
    tech: t('เทคสแต็ก', 'Tech stack'),
    type: t('ประเภท', 'Type'),
    startingFrom: t('เริ่มต้น', 'Starting from'),
    nextSteps: t('ขั้นตอนถัดไป', 'Next steps'),
    bringToCall: t('เตรียมข้อมูลสำหรับคุย', 'Bring to the call'),
    commonUseCases: t('Use case ที่พบบ่อย', 'Common Use Cases'),
    relatedCases: t('กรณีศึกษาที่เกี่ยวข้อง', 'Related Case Studies'),
    readMore: t('อ่านต่อ', 'Read more'),
    back: t('กลับ', 'Back'),
  };

  const timelineValue = `${service.timelineWeeks[0]}–${service.timelineWeeks[1]} ${labels.weeks}`;
  const typeValue =
    service.category === 'llm' ||
    service.category === 'cv' ||
    service.category === 'ml' ||
    service.category === 'aiot'
      ? 'AI Core'
      : 'Accelerator';

  const relatedCases = CASES.filter(caseItem =>
    caseItem.solutionFamily.some(family =>
      (family || '').toLowerCase().includes(service.category)
    )
  ).slice(0, 3);

  const useCases = USE_CASES[service.category] ?? [];

  return (
    <div className="bg-bg">
      <MagicHero
        eyebrow={
          <Link
            href={routes.solutions(locale)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/60 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {labels.back}
          </Link>
        }
        title={getLocalized(normalizedLocale, service.title)}
        description={getLocalized(normalizedLocale, service.summary)}
        metrics={[
          { value: timelineValue, label: labels.timeline },
          { value: typeValue, label: labels.type },
          {
            value: `${service.deliverables.length}`,
            label: labels.deliverables,
          },
          {
            value: `฿${service.pricing.starting.toLocaleString(isThai ? 'th-TH' : 'en-US')}`,
            label: `${labels.startingFrom} ${getLocalized(locale, service.pricing.unit)}`,
          },
        ]}
      >
        <div className="space-y-4 text-sm text-white/70">
          <AnimatedGradientText className="justify-center px-4 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-white/80">
            {t('โซลูชัน', 'Solution')}
          </AnimatedGradientText>
          <p>
            {t(
              'Blueprint นี้มาพร้อม playbook, artefacts และ guardrails เพื่อให้เดินจากการทดลองไปสู่ production ได้เร็วขึ้น (และคุมความเสี่ยงได้)',
              'This blueprint ships with delivery playbooks, artefacts, and guardrails so the path to production stays predictable.'
            )}
          </p>
        </div>
      </MagicHero>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold text-text">
                  {labels.outcomes}
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-text-muted">
                  {service.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span
                        className="mt-1 h-2 w-2 rounded-full bg-secondary"
                        aria-hidden
                      />
                      <span>{getLocalized(normalizedLocale, outcome)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold text-text">
                  {labels.whatYouGet}
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-text-muted">
                  {service.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span
                        className="mt-1 h-2 w-2 rounded-full bg-primary"
                        aria-hidden
                      />
                      <span>{getLocalized(normalizedLocale, deliverable)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-8">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-text">
                  <Layers className="h-5 w-5 text-primary" />
                  {labels.tech}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-text-muted">
                  {service.technologies.map(tech => (
                    <span
                      key={tech}
                      className="rounded-full bg-surface-2 px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-xl font-semibold text-text">
                  {labels.nextSteps}
                </h2>
                <p className="text-sm text-text-muted">
                  {t(
                    'เราจะช่วยยืนยัน use-case ของคุณ ปรับ deliverables ให้เข้ากับบริบท และแนะนำแพ็กเกจ/เฟสที่เหมาะที่สุด',
                    'We will validate your use case, tailor deliverables, and align it with the right package tier.'
                  )}
                </p>
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4 text-sm text-text-muted">
                  <p className="font-semibold text-text">
                    {labels.bringToCall}
                  </p>
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    <li>
                      {t(
                        'ระบบ/ข้อมูลที่มีอยู่ในปัจจุบัน',
                        'Existing systems/data context'
                      )}
                    </li>
                    <li>
                      {t(
                        'ตัวชี้วัดธุรกิจที่อยากให้ดีขึ้น (KPI)',
                        'Target business KPIs'
                      )}
                    </li>
                    <li>
                      {t(
                        'ข้อจำกัดด้านเวลาและผู้เกี่ยวข้อง',
                        'Timeline & stakeholders'
                      )}
                    </li>
                  </ul>
                </div>
                <ShimmerButton asChild className="px-6 py-3 text-sm">
                  <Link
                    href={routes.contact(locale)}
                    className="inline-flex items-center gap-2"
                  >
                    {t('จองเวลาคุยงาน', 'Book a working session')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </ShimmerButton>
              </CardContent>
            </Card>
          </div>

          {useCases.length > 0 ? (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-text mb-8 text-center">
                {labels.commonUseCases}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {useCases.map((item, idx) => (
                  <Card
                    key={idx}
                    className="border border-hairline bg-surface/80 hover:shadow-xl transition-all"
                  >
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-text mb-3">
                        {t(item.title.th, item.title.en)}
                      </h3>
                      <p className="text-sm text-text-muted mb-4">
                        {t(item.description.th, item.description.en)}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{t(item.metric.th, item.metric.en)}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : null}

          {relatedCases.length > 0 ? (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-text mb-8 text-center">
                {labels.relatedCases}
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedCases.map(caseItem => (
                  <Card
                    key={caseItem.slug}
                    className="border border-hairline bg-surface/80 hover:shadow-xl transition-all group"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                          {caseItem.sector}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                        {caseItem.title}
                      </h3>
                      <p className="text-sm text-text-muted mb-4 line-clamp-2">
                        {caseItem.subtitle}
                      </p>
                      <Link
                        href={routes.caseDetail(locale, caseItem.slug)}
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        {labels.readMore}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
