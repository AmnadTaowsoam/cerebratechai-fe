import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Brain, Cpu, Rocket } from 'lucide-react';

import { MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { Card, CardContent } from '@/components/ui/card';
import { SeoHead, ServiceSchema } from '@/components/seo';
import { SECTION_SPACING } from '@/lib/constants/spacing';

type ServicesPageProps = {
  params: { locale: string };
};

export const metadata: Metadata = {
  title: 'CerebraTechAI - AI Services',
  description: 'Comprehensive AI services: Consulting, Development, and Deployment for your business.',
};

export default function ServicesPage({ params }: ServicesPageProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';
  const basePath = `/${locale}`;

  const t = (th: string, en: string) => (isThai ? th : en);

  const services = [
    {
      icon: Brain,
      title: t('AI Consulting', 'AI Consulting'),
      description: t(
        'ให้คำปรึกษาและประเมินความพร้อมขององค์กรในการนำ AI มาใช้ รวมถึงการวางแผนกลยุทธ์ POC/Pilot และการประเมินผล',
        'Strategic AI consulting including organizational readiness assessment, strategy planning, POC/Pilot design, and evaluation.'
      ),
      href: `${basePath}/services/consulting`,
      features: [
        t('การประเมินความพร้อมของข้อมูล', 'Data readiness assessment'),
        t('การวางแผนกลยุทธ์ AI', 'AI strategy planning'),
        t('การออกแบบ POC/Pilot', 'POC/Pilot design'),
        t('การประเมินผลและ ROI', 'Evaluation & ROI analysis'),
      ],
    },
    {
      icon: Cpu,
      title: t('AI Development', 'AI Development'),
      description: t(
        'พัฒนาระบบ AI ที่เหมาะกับธุรกิจของคุณ รวมถึงการพัฒนาโมเดลแบบกำหนดเอง การรวมเข้ากับระบบเดิม และการฝึกอบรม',
        'Custom AI system development including tailored model creation, integration with existing systems, and training.'
      ),
      href: `${basePath}/services/development`,
      features: [
        t('การพัฒนาโมเดล AI แบบกำหนดเอง', 'Custom AI model development'),
        t('การรวมเข้ากับระบบเดิม', 'System integration'),
        t('การฝึกอบรมและ fine-tuning', 'Training & fine-tuning'),
        t('การทดสอบและ QA', 'Testing & QA'),
      ],
    },
    {
      icon: Rocket,
      title: t('AI Deployment', 'AI Deployment'),
      description: t(
        'การนำระบบ AI ไปใช้งานจริง รวมถึง MLOps, การบำรุงรักษา และการสนับสนุนอย่างต่อเนื่อง',
        'Production AI deployment including MLOps, maintenance, and ongoing support services.'
      ),
      href: `${basePath}/services/deployment`,
      features: [
        t('MLOps และ CI/CD', 'MLOps & CI/CD'),
        t('การติดตามและตรวจสอบ', 'Monitoring & observability'),
        t('การบำรุงรักษาและอัปเดต', 'Maintenance & updates'),
        t('การสนับสนุน 24/7', '24/7 support'),
      ],
    },
  ];

  const metrics = [
    { value: '3', label: t('บริการหลัก', 'Core Services') },
    { value: '100%', label: t('ครอบคลุมทุกขั้นตอน', 'End-to-End Coverage') },
    { value: 'SLA', label: t('พร้อมใช้งานระดับ SLA', 'SLA Ready') },
  ];

  return (
    <>
      <SeoHead
        title={t('บริการ AI - Consulting, Development, Deployment', 'AI Services - Consulting, Development, Deployment')}
        description={t(
          'บริการ AI ครบวงจร: ให้คำปรึกษา พัฒนา และนำไปใช้งานจริง พร้อม MLOps และการสนับสนุนอย่างต่อเนื่อง',
          'Comprehensive AI services: Consulting, Development, and Deployment with MLOps and ongoing support.'
        )}
        keywords={
          isThai
            ? ['บริการ AI', 'AI Consulting', 'AI Development', 'AI Deployment', 'MLOps']
            : ['AI services', 'AI Consulting', 'AI Development', 'AI Deployment', 'MLOps']
        }
        url="/services"
        type="website"
      />

      <ServiceSchema
        serviceName={t('บริการ AI', 'AI Services')}
        description={t('บริการ AI ครบวงจรสำหรับธุรกิจทุกขนาด', 'Comprehensive AI services for businesses of all sizes')}
      />

      <div className="bg-bg">
        <MagicHero
          eyebrow={t('บริการ AI', 'AI Services')}
          title={t('บริการ AI ครบวงจร: จากแนวคิดสู่การใช้งานจริง', 'End-to-End AI Services: From Concept to Production')}
          description={t(
            'เราให้บริการครบวงจรตั้งแต่การให้คำปรึกษา การพัฒนา ไปจนถึงการนำไปใช้งานจริง พร้อม MLOps และการสนับสนุนอย่างต่อเนื่อง',
            'We provide comprehensive services from consulting and development to production deployment, with MLOps and ongoing support.'
          )}
          metrics={metrics}
          align="center"
        />

        <section className={SECTION_SPACING.FEATURES}>
          <div className="container mx-auto px-6">
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={service.href}
                    className="group border border-hairline bg-surface/80 hover:border-primary/30 hover:shadow-xl transition-all"
                  >
                    <CardContent className="p-8">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="mb-3 text-xl font-semibold text-text">{service.title}</h3>
                      <p className="mb-6 text-text-muted leading-relaxed">{service.description}</p>
                      <ul className="mb-6 space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-text-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <ShimmerButton asChild className="w-full">
                        <Link href={service.href as any} className="inline-flex items-center justify-center gap-2">
                          {t('เรียนรู้เพิ่มเติม', 'Learn more')}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </ShimmerButton>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

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
                  {t('พร้อมเริ่มโครงการ AI ของคุณ?', 'Ready to start your AI project?')}
                </h2>
                <p className="mt-2 text-text-muted">
                  {t(
                    'ติดต่อเราวันนี้เพื่อรับการประเมินและคำแนะนำฟรี เราจะช่วยคุณวางแผนเส้นทางสู่ความสำเร็จด้วย AI',
                    "Contact us today for a free assessment and consultation. We'll help you plan your path to AI success."
                  )}
                </p>
              </div>
              <ShimmerButton asChild className="px-8 py-4 text-sm">
                <Link href={`/${locale}/contact` as any} className="inline-flex items-center gap-2">
                  {t('ติดต่อเรา', 'Contact us')}
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
