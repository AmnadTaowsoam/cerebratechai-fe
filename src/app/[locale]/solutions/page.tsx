import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { ServicesGrid } from '@/components/services/services-grid';
import { SeoHead, ServiceSchema } from '@/components/seo';

type SolutionsPageProps = {
  params: { locale: string };
};

export const metadata: Metadata = {
  title: 'CerebraTechAI - Solutions',
  description:
    'Explore production-ready AI, data, and software solutions from CerebraTechAI.',
};

export default function SolutionsPage({ params }: SolutionsPageProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';

  const t = (th: string, en: string) => (isThai ? th : en);

  const metrics = [
    { value: '19+', label: t('โซลูชันพร้อมใช้งาน', 'Solutions') },
    { value: 'Edge + Cloud', label: t('ครอบคลุม Edge + Cloud', 'Coverage') },
    { value: 'SLA Ready', label: t('พร้อมใช้งานระดับ SLA', 'SLA Ready') },
  ];

  const pricingHighlights = [
    {
      value: '฿260,000',
      note: t(
        'จุดเริ่มต้นสำหรับงาน Computer Vision',
        'Starting point for Computer Vision'
      ),
    },
    {
      value: '฿420,000',
      note: t(
        'จุดเริ่มต้นสำหรับงาน Predictive/ML',
        'Starting point for Predictive/ML'
      ),
    },
  ];

  return (
    <>
      <SeoHead
        title={t(
          'โซลูชัน AI - Machine Learning, Computer Vision, LLM',
          'AI Solutions - Machine Learning, Computer Vision, LLM'
        )}
        description={t(
          'โซลูชัน AI สำหรับธุรกิจ: Machine Learning, Computer Vision, LLM & RAG, AIoT และ Edge AI พร้อมบริการ MLOps และ Engineering',
          'Comprehensive AI solutions for businesses including Machine Learning, Computer Vision, LLM, AIoT, and Edge AI with MLOps and Engineering support.'
        )}
        keywords={
          isThai
            ? [
                'โซลูชัน AI',
                'Machine Learning',
                'Computer Vision',
                'LLM',
                'AIoT',
                'Edge AI',
              ]
            : [
                'AI solutions',
                'Machine Learning',
                'Computer Vision',
                'LLM',
                'AIoT',
                'Edge AI',
              ]
        }
        url="/solutions"
        type="website"
      />

      <ServiceSchema
        serviceName={t('โซลูชัน AI', 'AI Solutions')}
        description={t(
          'โซลูชัน AI สำหรับธุรกิจทุกขนาด',
          'Comprehensive AI solutions for businesses of all sizes'
        )}
      />

      <div className="bg-bg">
        <MagicHero
          eyebrow={t('โซลูชัน AI', 'AI Solutions')}
          title={t(
            'โซลูชัน AI พร้อมส่งมอบสำหรับ SME และโปรเจกต์ขนาดกลาง',
            'Production-Ready AI Solutions for SMEs and Mid-Size Projects'
          )}
          description={t(
            'โซลูชันหลักของเรา: LLM & RAG, Computer Vision, Predictive Analytics และ Edge AI พร้อมบริการ MLOps และ Engineering เพื่อใช้งานจริงได้เร็ว',
            'Our AI Core Solutions: LLM & RAG, Computer Vision, Predictive Analytics, and Edge AI—with MLOps and Engineering support services.'
          )}
          metrics={metrics}
          align="center"
        />

        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="rounded-3xl border border-white/10 bg-surface/80 p-6 backdrop-blur">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-text">
                    {t('ราคาเริ่มต้นโดยประมาณ', 'Where pricing starts')}
                  </h2>
                  <p className="text-text-muted">
                    {t(
                      'ราคาขึ้นอยู่กับความซับซ้อนและความพร้อมของข้อมูล ตัวเลขนี้ช่วยตั้งความคาดหวังเบื้องต้น (ทีมงานจะประเมินแบบมีขอบเขตเมื่อทราบบริบทเพิ่มเติม)',
                      'Pricing depends on complexity and data readiness. These starting points set expectations.'
                    )}
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {pricingHighlights.map(item => (
                    <div
                      key={item.value}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                    >
                      <div className="text-2xl font-bold text-text">
                        {item.value}
                      </div>
                      <div className="text-xs text-text-muted">{item.note}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="text-xs text-text-muted">
                  {t(
                    'ต้องการใบเสนอราคาแบบเจาะจง? ส่งบริบทคร่าว ๆ เพื่อประเมินขอบเขตงาน',
                    'Need a tailored quote? Share your context for a scoped estimate.'
                  )}
                </span>
                <Link
                  href={`/${locale}/contact` as any}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary"
                >
                  {t('ขอใบเสนอราคา', 'Request a quote')}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="mb-12 text-center">
              <span className="inline-flex items-center rounded-full bg-surface-2 px-4 py-1 text-sm font-medium text-primary">
                {t('ภาพรวม Ecosystem', 'Ecosystem Overview')}
              </span>
              <h2 className="mt-4 text-3xl font-bold text-text md:text-4xl">
                {t(
                  'Cerebra: แพลตฟอร์ม AI และ IoT แบบ Private-First',
                  'Cerebra: The Private-First AI & IoT Platform'
                )}
              </h2>
              <p className="mt-3 mx-auto max-w-3xl text-text-muted">
                {t(
                  'ระบบที่ออกแบบมาเพื่อความเป็นส่วนตัว ยืดหยุ่น และพร้อมใช้งานจริง',
                  'A system designed for privacy, flexibility, and production-ready deployment'
                )}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-1">
              {/* Main Ecosystem Diagram */}
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-4 backdrop-blur">
                <Image
                  src="/cerebra-ecosystem-pitch.png"
                  alt={t(
                    'Cerebra Ecosystem Overview - แพลตฟอร์ม AI และ IoT',
                    'Cerebra Ecosystem Overview - AI & IoT Platform'
                  )}
                  width={1200}
                  height={675}
                  className="w-full rounded-2xl"
                  priority
                />
                <p className="mt-4 text-center text-sm text-text-muted">
                  {t(
                    'CerebraLoLM, CerebraForge & Agent, CerebraCV & IoT และ Solution Packages',
                    'CerebraLoLM, CerebraForge & Agent, CerebraCV & IoT and Solution Packages'
                  )}
                </p>
              </div>

              {/* Value Propositions & Metrics */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-4 backdrop-blur">
                  <Image
                    src="/cerebra-ecosystem-training-2.png"
                    alt={t(
                      'Core Value Propositions และ Success Metrics',
                      'Core Value Propositions and Success Metrics'
                    )}
                    width={800}
                    height={600}
                    className="w-full rounded-2xl"
                  />
                  <p className="mt-4 text-center text-sm text-text-muted">
                    {t(
                      'Core Value Propositions: Private-First, Modular Design, Local LLM',
                      'Core Value Propositions: Private-First, Modular Design, Local LLM'
                    )}
                  </p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-4 backdrop-blur">
                  <Image
                    src="/cerebra-ecosystem-training.png"
                    alt={t(
                      'Platform Overview และ Solution Packages',
                      'Platform Overview and Solution Packages'
                    )}
                    width={800}
                    height={600}
                    className="w-full rounded-2xl"
                  />
                  <p className="mt-4 text-center text-sm text-text-muted">
                    {t(
                      'Solution Packages: Smart Document, Smart Factory, Smart Farm',
                      'Solution Packages: Smart Document, Smart Factory, Smart Farm'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesGrid showTypeSections />

        <section className="relative py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.12),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.12),_transparent_60%)]" />
          <div className="absolute inset-0 opacity-25">
            <Particles quantity={38} staticity={24} ease={70} />
          </div>

          <div className="relative z-10 container mx-auto px-6">
            <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-surface-2/80 p-8 backdrop-blur md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold text-text">
                  {t(
                    'ต้องการเวอร์ชันเฉพาะหรือเพิ่มความสามารถใหม่?',
                    'Need a bespoke variant or new capability?'
                  )}
                </h2>
                <p className="mt-2 text-text-muted">
                  {t(
                    'ทุกโซลูชันสามารถปรับให้เข้ากับระบบเดิม เพิ่มโมดูล หรือเชื่อมต่อกับสแต็กของคุณได้ คุยกับทีมเพื่อประเมินเส้นทางที่เหมาะสม',
                    'Each blueprint can be customised, expanded, or integrated with your existing stack. Speak with our team to map the right path.'
                  )}
                </p>
              </div>
              <ShimmerButton asChild className="px-8 py-4 text-sm">
                <Link
                  href={`/${locale}/contact` as any}
                  className="inline-flex items-center gap-2"
                >
                  {t('คุยกับทีม', 'Talk to our team')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </ShimmerButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
