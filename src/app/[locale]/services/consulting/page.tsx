'use client';

import { useLocale } from 'next-intl';
import { MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Brain, Search, Lightbulb, Target, CheckCircle2, Users, BarChart } from 'lucide-react';
import Link from 'next/link';
import { SeoHead, ServiceSchema, FAQSection } from '@/components/seo';
import TLDRBlock from '@/components/TLDRBlock';
import KeyFactsBlock from '@/components/KeyFactsBlock';
import { SECTION_SPACING } from '@/lib/constants/spacing';

export default function ConsultingPage() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;
  const schemaLocale: 'en' | 'th' = isThai ? 'th' : 'en';

  const t = (th: string, en: string) => (isThai ? th : en);

  const services = [
    {
      icon: Search,
      title: t('การประเมินความพร้อม', 'Readiness Assessment'),
      description: t(
        'ประเมินความพร้อมขององค์กรในการนำ AI มาใช้ รวมถึงการประเมินข้อมูล ระบบ และทีมงาน',
        'Assess organizational readiness for AI adoption including data, systems, and team evaluation.'
      ),
    },
    {
      icon: Lightbulb,
      title: t('การวางแผนกลยุทธ์', 'Strategy Planning'),
      description: t(
        'วางแผนกลยุทธ์ AI ที่เหมาะกับธุรกิจของคุณ รวมถึงการกำหนดเป้าหมาย และแผนการดำเนินงาน',
        'Develop AI strategies tailored to your business including goal setting and implementation plans.'
      ),
    },
    {
      icon: Target,
      title: t('การออกแบบ POC/Pilot', 'POC/Pilot Design'),
      description: t(
        'ออกแบบและวางแผนโครงการ POC/Pilot เพื่อทดสอบความเป็นไปได้และผลลัพธ์ก่อนลงทุนเต็มรูปแบบ',
        'Design and plan POC/Pilot projects to test feasibility and outcomes before full investment.'
      ),
    },
    {
      icon: BarChart,
      title: t('การประเมินผลและ ROI', 'Evaluation & ROI'),
      description: t(
        'ประเมินผลลัพธ์ของโครงการ AI และคำนวณ ROI เพื่อตัดสินใจขยายโครงการหรือปรับปรุง',
        'Evaluate AI project outcomes and calculate ROI to decide on expansion or improvements.'
      ),
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: t('การสำรวจและวิเคราะห์', 'Discovery & Analysis'),
      description: t(
        'ทำความเข้าใจธุรกิจ เป้าหมาย และความท้าทายของคุณ',
        'Understand your business, goals, and challenges'
      ),
    },
    {
      step: 2,
      title: t('การประเมินความพร้อม', 'Readiness Assessment'),
      description: t(
        'ประเมินข้อมูล ระบบ และทีมงานเพื่อระบุจุดแข็งและจุดที่ต้องปรับปรุง',
        'Assess data, systems, and teams to identify strengths and improvement areas'
      ),
    },
    {
      step: 3,
      title: t('การวางแผนกลยุทธ์', 'Strategy Development'),
      description: t(
        'พัฒนาแผนกลยุทธ์ AI ที่เหมาะกับธุรกิจของคุณ',
        'Develop AI strategies tailored to your business'
      ),
    },
    {
      step: 4,
      title: t('การนำเสนอและอนุมัติ', 'Presentation & Approval'),
      description: t(
        'นำเสนอแผนและรับการอนุมัติจากผู้บริหาร',
        'Present plans and get executive approval'
      ),
    },
  ];

  const deliverables = [
    t('รายงานประเมินความพร้อม', 'Readiness assessment report'),
    t('แผนกลยุทธ์ AI', 'AI strategy plan'),
    t('แผนการดำเนินงาน POC/Pilot', 'POC/Pilot implementation plan'),
    t('การประเมิน ROI และความคุ้มค่า', 'ROI and value assessment'),
    t('คำแนะนำและแนวทางปฏิบัติ', 'Recommendations and best practices'),
  ];

  const faqs = [
    {
      question: t('AI Consulting ใช้เวลานานแค่ไหน?', 'How long does AI Consulting take?'),
      answer: t(
        'ระยะเวลาขึ้นอยู่กับขอบเขตของโครงการ โดยทั่วไปใช้เวลา 2-6 สัปดาห์ สำหรับการประเมินและวางแผนกลยุทธ์',
        'Duration depends on project scope. Typically 2-6 weeks for assessment and strategy planning.'
      ),
    },
    {
      question: t('AI Consulting มีค่าใช้จ่ายเท่าไหร่?', 'How much does AI Consulting cost?'),
      answer: t(
        'ค่าใช้จ่ายขึ้นอยู่กับขอบเขตและความซับซ้อนของโครงการ เริ่มต้นที่ ฿80,000 สำหรับการประเมินเบื้องต้น',
        'Cost depends on scope and complexity. Starting from ฿80,000 for initial assessment.'
      ),
    },
    {
      question: t('จะได้อะไรจากการให้คำปรึกษา?', 'What do I get from consulting?'),
      answer: t(
        'คุณจะได้รับรายงานประเมิน แผนกลยุทธ์ แผนการดำเนินงาน และคำแนะนำที่สามารถนำไปปฏิบัติได้จริง',
        'You will receive assessment reports, strategy plans, implementation plans, and actionable recommendations.'
      ),
    },
  ];

  return (
    <>
      <SeoHead
        title={t('AI Consulting - ให้คำปรึกษาและวางแผนกลยุทธ์ AI', 'AI Consulting - Strategic AI Planning & Advisory')}
        description={t(
          'บริการให้คำปรึกษา AI ครบวงจร: การประเมินความพร้อม การวางแผนกลยุทธ์ การออกแบบ POC/Pilot และการประเมิน ROI',
          'Comprehensive AI consulting services: readiness assessment, strategy planning, POC/Pilot design, and ROI evaluation.'
        )}
        keywords={
          isThai
            ? ['AI Consulting', 'ให้คำปรึกษา AI', 'วางแผนกลยุทธ์ AI', 'POC Pilot']
            : ['AI Consulting', 'AI advisory', 'AI strategy', 'POC Pilot']
        }
        url="/services/consulting"
        type="website"
      />

      <ServiceSchema
        serviceName={t('AI Consulting', 'AI Consulting')}
        description={t('บริการให้คำปรึกษาและวางแผนกลยุทธ์ AI สำหรับธุรกิจ', 'AI consulting and strategy planning services for businesses')}
      />

      <div className="bg-bg">
        <MagicHero
          eyebrow={t('AI Consulting', 'AI Consulting')}
          title={t('ให้คำปรึกษาและวางแผนกลยุทธ์ AI', 'Strategic AI Consulting & Planning')}
          description={t(
            'เราช่วยคุณประเมินความพร้อม วางแผนกลยุทธ์ และออกแบบโครงการ POC/Pilot เพื่อให้คุณเริ่มต้นด้วย AI อย่างมั่นใจ',
            'We help you assess readiness, plan strategies, and design POC/Pilot projects to start your AI journey with confidence.'
          )}
          metrics={[
            { value: '2-6', label: t('สัปดาห์', 'Weeks') },
            { value: '100%', label: t('ครอบคลุมทุกขั้นตอน', 'End-to-End') },
            { value: 'ROI', label: t('การประเมิน ROI', 'ROI Analysis') },
          ]}
          align="center"
        />

        <section className={SECTION_SPACING.FEATURES}>
          <div className="container mx-auto px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-text">{t('บริการของเรา', 'Our Services')}</h2>
              <p className="mx-auto max-w-2xl text-text-muted">
                {t(
                  'เรามอบบริการให้คำปรึกษา AI ครบวงจรเพื่อช่วยคุณเริ่มต้นด้วย AI อย่างถูกต้อง',
                  'We provide comprehensive AI consulting services to help you start your AI journey right.'
                )}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card key={service.title} className="border border-hairline bg-surface/80">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-text">{service.title}</h3>
                      <p className="text-sm text-text-muted leading-relaxed">{service.description}</p>
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
                  'AI Consulting ช่วยคุณประเมินความพร้อม วางแผนกลยุทธ์ และออกแบบโครงการ POC/Pilot เพื่อให้คุณเริ่มต้นด้วย AI อย่างมั่นใจและมีประสิทธิภาพ',
                  'AI Consulting helps you assess readiness, plan strategies, and design POC/Pilot projects to start your AI journey confidently and effectively.'
                )}
                locale={schemaLocale}
              />
              <KeyFactsBlock
                facts={[
                  { label: t('ระยะเวลา', 'Duration'), value: t('2-6 สัปดาห์', '2-6 weeks') },
                  { label: t('ราคาเริ่มต้น', 'Starting Price'), value: '฿80,000' },
                  { label: t('สิ่งที่ได้รับ', 'Deliverables'), value: deliverables },
                  { label: t('รูปแบบการทำงาน', 'Working Style'), value: t('On-site / Remote', 'On-site / Remote') },
                ]}
                locale={schemaLocale}
              />
            </div>
          </div>
        </section>

        <section className={SECTION_SPACING.FEATURES}>
          <div className="container mx-auto px-6">
            <h2 className="mb-8 text-center text-3xl font-bold text-text">{t('กระบวนการทำงาน', 'Our Process')}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <Card key={step.step} className="border border-hairline bg-surface/80">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-lg font-bold text-primary">
                      {step.step}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-text">{step.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <FAQSection
          title={t('คำถามที่พบบ่อย', 'Frequently Asked Questions')}
          faqs={faqs.map((faq) => ({
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
                  {t('พร้อมเริ่มโครงการ AI ของคุณ?', 'Ready to start your AI project?')}
                </h2>
                <p className="mt-2 text-text-muted">
                  {t(
                    'ติดต่อเราวันนี้เพื่อรับการประเมินและคำแนะนำฟรี',
                    'Contact us today for a free assessment and consultation.'
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
