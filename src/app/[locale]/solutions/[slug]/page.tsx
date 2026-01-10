import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

import { AnimatedGradientText, MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { Card, CardContent } from '@/components/ui/card';
import { services, getLocalized } from '@/data/content';
import { CASES } from '@/data/cases';

type ServicePageProps = {
  params: { locale: string; slug: string };
};

const serviceMap = new Map(services.map((service) => [service.slug, service]));

export function generateStaticParams() {
  return services.flatMap((service) => [
    { locale: 'en', slug: service.slug },
    { locale: 'th', slug: service.slug },
  ]);
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const service = serviceMap.get(params.slug);
  if (!service) {
    return {};
  }

  const title = `${getLocalized(locale, service.title)} | Cerebratechai`;
  const description = getLocalized(locale, service.summary);

  return {
    title,
    description,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const service = serviceMap.get(params.slug);

  if (!service) {
    notFound();
  }

  const timelineLabel = locale === 'th' ? 'ระยะเวลา' : 'Timeline';
  const weeksLabel = locale === 'th' ? 'สัปดาห์' : 'weeks';
  const deliverableLabel = locale === 'th' ? 'สิ่งที่จะได้รับ' : 'What you get';
  const outcomesLabel = locale === 'th' ? 'ผลลัพธ์' : 'Outcomes';
  const featureLabel = locale === 'th' ? 'คุณสมบัติเด่น' : 'Highlights';
  const techLabel = locale === 'th' ? 'เทคโนโลยี' : 'Tech stack';

  // Get solution family mapping for related cases
  const solutionFamilyMap: Record<string, string[]> = {
    llm: ['LLM & RAG', 'Knowledge Management'],
    cv: ['Computer Vision', 'Quality Inspection'],
    ml: ['Predictive Analytics', 'Machine Learning'],
    aiot: ['Edge AI', 'IoT', 'AIoT'],
    platform: ['MLOps', 'Data Platform'],
    analytics: ['Analytics', 'Data Visualization']
  };

  const relatedCases = CASES.filter(caseItem =>
    caseItem.solutionFamily.some(family =>
      solutionFamilyMap[service.category]?.some(sf => family.includes(sf))
    )
  ).slice(0, 3);

  return (
    <div className="bg-bg">
      <MagicHero
        eyebrow={
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/60 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {locale === 'th' ? 'ย้อนกลับ' : 'Back'}
          </Link>
        }
        title={getLocalized(locale, service.title)}
        description={getLocalized(locale, service.summary)}
        metrics={[
          {
            value: `${service.timelineWeeks[0]}–${service.timelineWeeks[1]} ${weeksLabel}`,
            label: timelineLabel,
          },
          {
            value: service.category === 'llm' || service.category === 'cv' || service.category === 'ml' || service.category === 'aiot' ? 'AI Core' : 'Accelerator',
            label: locale === 'th' ? 'ประเภท' : 'Type',
          },
          {
            value: `${service.deliverables.length}`,
            label: locale === 'th' ? 'ชุดส่งมอบ' : 'Deliverables',
          },
        ]}
      >
        <div className="space-y-4 text-sm text-white/70">
          <AnimatedGradientText className="justify-center px-4 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-white/80">
            {locale === 'th' ? 'โซลูชัน' : 'Solution'}
          </AnimatedGradientText>
          <p>
            {locale === 'th'
              ? 'Blueprint นี้มาพร้อมเพลย์บุ๊ก, playbacks, และ artefacts ที่ช่วยให้การส่งมอบไปถึง production ได้เร็วขึ้น'
              : 'This blueprint ships with delivery playbooks, artefacts, and guardrails so the path to production stays predictable.'}
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
            <p className="font-semibold text-white/80">
              {locale === 'th' ? 'บริการเสริมยอดนิยม' : 'Popular add-ons'}
            </p>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li>{locale === 'th' ? 'AI Change Management Workshop' : 'AI Change Management Workshop'}</li>
              <li>{locale === 'th' ? 'Team Upskilling Sprint' : 'Team Upskilling Sprint'}</li>
            </ul>
          </div>
        </div>
      </MagicHero>

      <section className="relative py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(124,58,237,0.12),_transparent_60%)]" />
        <div className="absolute inset-0 opacity-25">
          <Particles quantity={36} staticity={24} ease={70} />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="lg:col-span-2 border border-white/10 bg-surface/80 backdrop-blur">
              <CardContent className="grid gap-8 p-8 md:grid-cols-2">
                <div>
                  <h2 className="text-xl font-semibold text-text">
                    {featureLabel}
                  </h2>
                  <ul className="mt-4 space-y-3 text-sm text-text-muted">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        <span>{getLocalized(locale, feature)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-text">
                    {outcomesLabel}
                  </h2>
                  <ul className="mt-4 space-y-3 text-sm text-text-muted">
                    {service.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-secondary" aria-hidden />
                        <span>{getLocalized(locale, outcome)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-surface/80 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold text-text">
                  {deliverableLabel}
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-text-muted">
                  {service.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <span>{getLocalized(locale, deliverable)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Card className="border border-white/10 bg-surface/80 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-text">
                  <Layers className="h-5 w-5 text-primary" />
                  {techLabel}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-text-muted">
                  {service.technologies.map((tech) => (
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

            <Card className="border border-white/10 bg-surface/80 backdrop-blur">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-xl font-semibold text-text">
                  {locale === 'th' ? 'ขั้นตอนถัดไป' : 'Next steps'}
                </h2>
                <p className="text-sm text-text-muted">
                  {locale === 'th'
                    ? 'เราจะช่วยวิเคราะห์โจทย์ ปรับชุดการส่งมอบให้ตรงกับบริบท และเชื่อมต่อกับแพ็กเกจที่เหมาะสม'
                    : 'We will validate your specific use case, tailor the deliverables, and align it with the right package tier.'}
                </p>
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4 text-sm text-text-muted">
                  <p className="font-semibold text-text">
                    {locale === 'th' ? 'สิ่งที่ควรเตรียม' : 'Bring to the call'}
                  </p>
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    <li>{locale === 'th' ? 'ข้อมูลเบื้องต้นเกี่ยวกับระบบหรือข้อมูลที่มี' : 'Existing systems/data context'}</li>
                    <li>{locale === 'th' ? 'ตัวชี้วัดความสำเร็จที่อยากเห็น' : 'Target business KPIs'}</li>
                    <li>{locale === 'th' ? 'ไทม์ไลน์และทีมที่เกี่ยวข้อง' : 'Timeline & stakeholders'}</li>
                  </ul>
                </div>
                <ShimmerButton asChild className="px-6 py-3 text-sm">
                  <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2">
                    {locale === 'th' ? 'เริ่มต้นร่วมงาน' : 'Book a working session'}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </ShimmerButton>
              </CardContent>
            </Card>
          </div>

          {/* Use Cases Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-text mb-8 text-center">
              {locale === 'th' ? 'กรณีการใช้งาน' : 'Common Use Cases'}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {service.category === 'llm' && (
                <>
                  <Card className="border border-white/10 bg-surface/80 backdrop-blur">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-text mb-3">
                        {locale === 'th' ? 'ผู้ช่วยความรู้ภายในองค์กร' : 'Internal Knowledge Assistant'}
                      </h3>
                      <p className="text-sm text-text-muted mb-4">
                        {locale === 'th'
                          ? 'ช่วยพนักงานค้นหาข้อมูลและนโยบายภายในองค์กรได้รวดเร็ว'
                          : 'Help employees quickly find internal information and policies'
                        }
                      </p>
                      <div className="flex items-center gap-2 text-xs text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{locale === 'th' ? 'ลดเวลาค้นหาข้อมูล 70%' : '70% faster information retrieval'}</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-white/10 bg-surface/80 backdrop-blur">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-text mb-3">
                        {locale === 'th' ? 'Customer Support Chatbot' : 'Customer Support Chatbot'}
                      </h3>
                      <p className="text-sm text-text-muted mb-4">
                        {locale === 'th'
                          ? 'ตอบคำถามลูกค้าอัตโนมัติ 24/7 ด้วยความแม่นยำสูง'
                          : 'Automatically answer customer questions 24/7 with high accuracy'
                        }
                      </p>
                      <div className="flex items-center gap-2 text-xs text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{locale === 'th' ? 'ลดภาระ support 60%' : '60% reduction in support load'}</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-white/10 bg-surface/80 backdrop-blur">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-text mb-3">
                        {locale === 'th' ? 'Document Intelligence' : 'Document Intelligence'}
                      </h3>
                      <p className="text-sm text-text-muted mb-4">
                        {locale === 'th'
                          ? 'วิเคราะห์และสรุปเอกสารจำนวนมากได้อย่างรวดเร็ว'
                          : 'Analyze and summarize large volumes of documents quickly'
                        }
                      </p>
                      <div className="flex items-center gap-2 text-xs text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{locale === 'th' ? 'ประหยัดเวลา 80%' : '80% time savings'}</span>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
              {service.category === 'cv' && (
                <>
                  <Card className="border border-white/10 bg-surface/80 backdrop-blur">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-text mb-3">
                        {locale === 'th' ? 'Quality Inspection' : 'Quality Inspection'}
                      </h3>
                      <p className="text-sm text-text-muted mb-4">
                        {locale === 'th'
                          ? 'ตรวจจับข้อบกพร่องในสายการผลิตอัตโนมัติ'
                          : 'Automatically detect defects in production lines'
                        }
                      </p>
                      <div className="flex items-center gap-2 text-xs text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{locale === 'th' ? 'ความแม่นยำ 99%+' : '99%+ accuracy'}</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-white/10 bg-surface/80 backdrop-blur">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-text mb-3">
                        {locale === 'th' ? 'Object Detection' : 'Object Detection'}
                      </h3>
                      <p className="text-sm text-text-muted mb-4">
                        {locale === 'th'
                          ? 'ตรวจจับและนับวัตถุอัตโนมัติจากภาพหรือวิดีโอ'
                          : 'Detect and count objects automatically from images or videos'
                        }
                      </p>
                      <div className="flex items-center gap-2 text-xs text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{locale === 'th' ? 'เรียลไทม์' : 'Real-time processing'}</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-white/10 bg-surface/80 backdrop-blur">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-text mb-3">
                        {locale === 'th' ? 'OCR & Document Processing' : 'OCR & Document Processing'}
                      </h3>
                      <p className="text-sm text-text-muted mb-4">
                        {locale === 'th'
                          ? 'แปลงเอกสารกระดาษเป็นข้อมูลดิจิทัล'
                          : 'Convert paper documents to digital data'
                        }
                      </p>
                      <div className="flex items-center gap-2 text-xs text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{locale === 'th' ? 'รองรับภาษาไทย' : 'Thai language support'}</span>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
              {(service.category === 'ml' || service.category === 'analytics') && (
                <>
                  <Card className="border border-white/10 bg-surface/80 backdrop-blur">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-text mb-3">
                        {locale === 'th' ? 'Demand Forecasting' : 'Demand Forecasting'}
                      </h3>
                      <p className="text-sm text-text-muted mb-4">
                        {locale === 'th'
                          ? 'พยากรณ์ความต้องการสินค้าและบริการ'
                          : 'Forecast product and service demand'
                        }
                      </p>
                      <div className="flex items-center gap-2 text-xs text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{locale === 'th' ? 'ลด stockout 40%' : '40% reduction in stockouts'}</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-white/10 bg-surface/80 backdrop-blur">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-text mb-3">
                        {locale === 'th' ? 'Predictive Maintenance' : 'Predictive Maintenance'}
                      </h3>
                      <p className="text-sm text-text-muted mb-4">
                        {locale === 'th'
                          ? 'คาดการณ์การชำรุดของเครื่องจักรก่อนเกิด'
                          : 'Predict equipment failures before they occur'
                        }
                      </p>
                      <div className="flex items-center gap-2 text-xs text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{locale === 'th' ? 'ลดค่าบำรุง 30%' : '30% maintenance cost reduction'}</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-white/10 bg-surface/80 backdrop-blur">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-text mb-3">
                        {locale === 'th' ? 'Anomaly Detection' : 'Anomaly Detection'}
                      </h3>
                      <p className="text-sm text-text-muted mb-4">
                        {locale === 'th'
                          ? 'ตรวจจับความผิดปกติในข้อมูลและกระบวนการ'
                          : 'Detect anomalies in data and processes'
                        }
                      </p>
                      <div className="flex items-center gap-2 text-xs text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{locale === 'th' ? 'ตรวจจับเรียลไทม์' : 'Real-time detection'}</span>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </div>

          {/* Related Case Studies */}
          {relatedCases.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-text mb-8 text-center">
                {locale === 'th' ? 'กรณีศึกษาที่เกี่ยวข้อง' : 'Related Case Studies'}
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedCases.map((caseItem) => (
                  <Card key={caseItem.slug} className="border border-white/10 bg-surface/80 backdrop-blur hover:shadow-xl transition-all group">
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
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {caseItem.outcomes.slice(0, 2).map((outcome, idx) => (
                          <div key={idx} className="text-center p-2 rounded-lg bg-primary/10">
                            <div className="text-lg font-bold text-primary">{outcome.value}</div>
                            <div className="text-xs text-text-muted">{outcome.label}</div>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={`/${locale}/cases/${caseItem.slug}`}
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        {locale === 'th' ? 'อ่านเพิ่มเติม' : 'Read more'}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
