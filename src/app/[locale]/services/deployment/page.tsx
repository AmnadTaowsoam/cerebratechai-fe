'use client';

import { useLocale } from 'next-intl';
import { MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Rocket,
  Settings,
  Activity,
  RefreshCw,
  LifeBuoy,
  GitBranch,
  Shield,
} from 'lucide-react';
import Link from 'next/link';
import { SeoHead, ServiceSchema, FAQSection } from '@/components/seo';
import TLDRBlock from '@/components/TLDRBlock';
import KeyFactsBlock from '@/components/KeyFactsBlock';
import { SECTION_SPACING } from '@/lib/constants/spacing';

export default function DeploymentPage() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;
  const schemaLocale: 'en' | 'th' = isThai ? 'th' : 'en';

  const t = (th: string, en: string) => (isThai ? th : en);

  const services = [
    {
      icon: Rocket,
      title: t('MLOps และ CI/CD', 'MLOps & CI/CD'),
      description: t(
        'ตั้งค่า MLOps pipeline และ CI/CD สำหรับการ deploy และอัปเดตโมเดล AI อย่างอัตโนมัติ',
        'Set up MLOps pipelines and CI/CD for automated AI model deployment and updates.'
      ),
    },
    {
      icon: Activity,
      title: t('การติดตามและตรวจสอบ', 'Monitoring & Observability'),
      description: t(
        'ติดตามและตรวจสอบประสิทธิภาพของระบบ AI ใน production รวมถึง model drift และ performance metrics',
        'Monitor and observe AI system performance in production including model drift and performance metrics.'
      ),
    },
    {
      icon: RefreshCw,
      title: t('การบำรุงรักษาและอัปเดต', 'Maintenance & Updates'),
      description: t(
        'บำรุงรักษาและอัปเดตระบบ AI อย่างสม่ำเสมอ รวมถึง model retraining และ system optimization',
        'Regularly maintain and update AI systems including model retraining and system optimization.'
      ),
    },
    {
      icon: LifeBuoy,
      title: t('การสนับสนุน 24/7', '24/7 Support'),
      description: t(
        'ให้การสนับสนุนทางเทคนิคตลอด 24/7 เพื่อให้แน่ใจว่าระบบทำงานได้อย่างราบรื่น',
        'Provide 24/7 technical support to ensure systems run smoothly.'
      ),
    },
  ];

  const features = [
    t('Automated deployment pipelines', 'Automated deployment pipelines'),
    t('Model versioning และ rollback', 'Model versioning and rollback'),
    t('Real-time monitoring และ alerting', 'Real-time monitoring and alerting'),
    t('Auto-scaling และ load balancing', 'Auto-scaling and load balancing'),
    t('Security และ compliance', 'Security and compliance'),
  ];

  const deliverables = [
    t('Production-ready deployment', 'Production-ready deployment'),
    t('Monitoring dashboard', 'Monitoring dashboard'),
    t('Documentation และ runbooks', 'Documentation and runbooks'),
    t('Support และ maintenance plan', 'Support and maintenance plan'),
    t('Training สำหรับทีม operations', 'Training for operations team'),
  ];

  const faqs = [
    {
      question: t(
        'AI Deployment ใช้เวลานานแค่ไหน?',
        'How long does AI Deployment take?'
      ),
      answer: t(
        'ระยะเวลาขึ้นอยู่กับความซับซ้อนของระบบ โดยทั่วไปใช้เวลา 2-4 สัปดาห์ สำหรับการ deploy และ setup',
        'Duration depends on system complexity. Typically 2-4 weeks for deployment and setup.'
      ),
    },
    {
      question: t(
        'AI Deployment มีค่าใช้จ่ายเท่าไหร่?',
        'How much does AI Deployment cost?'
      ),
      answer: t(
        'ค่าใช้จ่ายขึ้นอยู่กับ infrastructure และความซับซ้อนของระบบ รวมถึงค่าใช้จ่ายรายเดือนสำหรับ maintenance และ support',
        'Cost depends on infrastructure and system complexity, including monthly costs for maintenance and support.'
      ),
    },
    {
      question: t('จะได้การสนับสนุนอะไรบ้าง?', 'What support do I get?'),
      answer: t(
        'คุณจะได้รับการสนับสนุนทางเทคนิค 24/7 monitoring dashboard documentation และ regular updates',
        'You will receive 24/7 technical support, monitoring dashboard, documentation, and regular updates.'
      ),
    },
  ];

  return (
    <>
      <SeoHead
        title={t(
          'AI Deployment - นำระบบ AI ไปใช้งานจริง',
          'AI Deployment - Production AI Deployment'
        )}
        description={t(
          'บริการนำระบบ AI ไปใช้งานจริง: MLOps, Monitoring, Maintenance และ 24/7 Support',
          'Production AI deployment services: MLOps, Monitoring, Maintenance, and 24/7 Support.'
        )}
        keywords={
          isThai
            ? ['AI Deployment', 'MLOps', 'AI Production', 'AI Maintenance']
            : ['AI Deployment', 'MLOps', 'AI Production', 'AI Maintenance']
        }
        url="/services/deployment"
        type="website"
      />

      <ServiceSchema
        serviceName={t('AI Deployment', 'AI Deployment')}
        description={t(
          'บริการนำระบบ AI ไปใช้งานจริงพร้อม MLOps และการสนับสนุน',
          'Production AI deployment services with MLOps and support'
        )}
      />

      <div className="bg-bg">
        <MagicHero
          eyebrow={t('AI Deployment', 'AI Deployment')}
          title={t('นำระบบ AI ไปใช้งานจริง', 'Production AI Deployment')}
          description={t(
            'เราช่วยคุณนำระบบ AI ไปใช้งานจริงพร้อม MLOps การติดตาม และการสนับสนุนอย่างต่อเนื่อง',
            'We help you deploy AI systems to production with MLOps, monitoring, and ongoing support.'
          )}
          metrics={[
            { value: '2-4', label: t('สัปดาห์', 'Weeks') },
            { value: '24/7', label: t('Support', 'Support') },
            { value: 'SLA', label: t('พร้อมใช้งาน', 'Production Ready') },
          ]}
          align="center"
        />

        <section className={SECTION_SPACING.FEATURES}>
          <div className="container mx-auto px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-text">
                {t('บริการของเรา', 'Our Services')}
              </h2>
              <p className="mx-auto max-w-2xl text-text-muted">
                {t(
                  'เรามอบบริการ deployment ครบวงจรเพื่อให้ระบบ AI ของคุณทำงานได้อย่างราบรื่นใน production',
                  'We provide comprehensive deployment services to ensure your AI systems run smoothly in production.'
                )}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map(service => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={service.title}
                    className="border border-hairline bg-surface/80"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-text">
                        {service.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className={SECTION_SPACING.FEATURES}>
          <div className="container mx-auto px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              <TLDRBlock
                summary={t(
                  'AI Deployment ช่วยคุณนำระบบ AI ไปใช้งานจริงพร้อม MLOps การติดตาม และการสนับสนุนอย่างต่อเนื่องเพื่อให้แน่ใจว่าระบบทำงานได้อย่างราบรื่นและมีประสิทธิภาพ',
                  'AI Deployment helps you deploy AI systems to production with MLOps, monitoring, and ongoing support to ensure smooth and efficient operation.'
                )}
                locale={schemaLocale}
              />
              <KeyFactsBlock
                facts={[
                  {
                    label: t('ระยะเวลา', 'Duration'),
                    value: t('2-4 สัปดาห์', '2-4 weeks'),
                  },
                  { label: t('คุณสมบัติ', 'Features'), value: features },
                  {
                    label: t('สิ่งที่ได้รับ', 'Deliverables'),
                    value: deliverables,
                  },
                  {
                    label: t('การสนับสนุน', 'Support'),
                    value: t(
                      '24/7 Technical Support',
                      '24/7 Technical Support'
                    ),
                  },
                ]}
                locale={schemaLocale}
              />
            </div>
          </div>
        </section>

        <FAQSection
          title={t('คำถามที่พบบ่อย', 'Frequently Asked Questions')}
          faqs={faqs.map(faq => ({
            question: faq.question,
            answer: faq.answer,
          }))}
        />

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
                  {t('พร้อม deploy AI ของคุณ?', 'Ready to deploy your AI?')}
                </h2>
                <p className="mt-2 text-text-muted">
                  {t(
                    'ติดต่อเราวันนี้เพื่อรับการประเมินและแผน deployment',
                    'Contact us today for an assessment and deployment plan.'
                  )}
                </p>
              </div>
              <ShimmerButton asChild className="px-8 py-4 text-sm">
                <Link
                  href={`/${locale}/contact` as any}
                  className="inline-flex items-center gap-2"
                >
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
