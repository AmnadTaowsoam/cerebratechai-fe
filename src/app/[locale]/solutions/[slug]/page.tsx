import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, Layers, Sparkles } from 'lucide-react';

import { AnimatedGradientText, MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { Card, CardContent } from '@/components/ui/card';
import { services, getLocalized } from '@/data/content';

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
            value: `฿${service.pricing.starting.toLocaleString('en-US')}`,
            label: locale === 'th' ? 'ราคาเริ่มต้น' : 'Starting at',
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
        </div>
      </section>
    </div>
  );
}
