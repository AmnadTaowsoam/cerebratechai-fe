'use client';

import { useLocale } from 'next-intl';
import { MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Cpu,
  Code,
  Settings,
  TestTube,
  Zap,
  Database,
  GitBranch,
} from 'lucide-react';
import Link from 'next/link';
import { SeoHead, ServiceSchema, FAQSection } from '@/components/seo';
import TLDRBlock from '@/components/TLDRBlock';
import KeyFactsBlock from '@/components/KeyFactsBlock';
import { SECTION_SPACING } from '@/lib/constants/spacing';

export default function DevelopmentPage() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;
  const schemaLocale: 'en' | 'th' = isThai ? 'th' : 'en';

  const t = (th: string, en: string) => (isThai ? th : en);

  const services = [
    {
      icon: Cpu,
      title: t('การพัฒนาโมเดล AI', 'AI Model Development'),
      description: t(
        'พัฒนาสร้างและฝึกอบรมโมเดล AI ที่เหมาะกับธุรกิจของคุณ รวมถึงการ fine-tuning และการปรับแต่ง',
        'Develop, build, and train AI models tailored to your business including fine-tuning and customization.'
      ),
    },
    {
      icon: Code,
      title: t('การรวมเข้ากับระบบเดิม', 'System Integration'),
      description: t(
        'รวมระบบ AI เข้ากับระบบเดิมของคุณอย่างราบรื่น รวมถึง API integration และ data pipeline',
        'Integrate AI systems seamlessly with your existing infrastructure including API integration and data pipelines.'
      ),
    },
    {
      icon: Settings,
      title: t('การฝึกอบรมและ Fine-tuning', 'Training & Fine-tuning'),
      description: t(
        'ฝึกอบรมโมเดล AI ด้วยข้อมูลของคุณและ fine-tuning เพื่อให้ได้ผลลัพธ์ที่ดีที่สุด',
        'Train AI models with your data and fine-tune for optimal performance.'
      ),
    },
    {
      icon: TestTube,
      title: t('การทดสอบและ QA', 'Testing & QA'),
      description: t(
        'ทดสอบระบบ AI อย่างครอบคลุมเพื่อให้แน่ใจว่ามีความแม่นยำและประสิทธิภาพตามที่ต้องการ',
        'Comprehensive AI system testing to ensure accuracy and performance meet requirements.'
      ),
    },
  ];

  const technologies = [
    t(
      'Machine Learning (TensorFlow, PyTorch)',
      'Machine Learning (TensorFlow, PyTorch)'
    ),
    t('Computer Vision (OpenCV, YOLO)', 'Computer Vision (OpenCV, YOLO)'),
    t('LLM & RAG (LangChain, LlamaIndex)', 'LLM & RAG (LangChain, LlamaIndex)'),
    t('Edge AI (TensorFlow Lite, ONNX)', 'Edge AI (TensorFlow Lite, ONNX)'),
    t('MLOps (Kubeflow, MLflow)', 'MLOps (Kubeflow, MLflow)'),
  ];

  const deliverables = [
    t('โมเดล AI ที่ฝึกอบรมแล้ว', 'Trained AI models'),
    t('ระบบที่รวมเข้ากับระบบเดิม', 'Integrated systems'),
    t('API และ documentation', 'APIs and documentation'),
    t('Test reports และ quality metrics', 'Test reports and quality metrics'),
    t('Training materials และ handover', 'Training materials and handover'),
  ];

  const faqs = [
    {
      question: t(
        'AI Development ใช้เวลานานแค่ไหน?',
        'How long does AI Development take?'
      ),
      answer: t(
        'ระยะเวลาขึ้นอยู่กับความซับซ้อนของโครงการ โดยทั่วไปใช้เวลา 6-16 สัปดาห์ สำหรับการพัฒนาและทดสอบ',
        'Duration depends on project complexity. Typically 6-16 weeks for development and testing.'
      ),
    },
    {
      question: t(
        'AI Development มีค่าใช้จ่ายเท่าไหร่?',
        'How much does AI Development cost?'
      ),
      answer: t(
        'ค่าใช้จ่ายขึ้นอยู่กับความซับซ้อนและขอบเขตของโครงการ เริ่มต้นที่ ฿260,000 สำหรับ Computer Vision และ ฿420,000 สำหรับ Predictive/ML',
        'Cost depends on complexity and scope. Starting from ฿260,000 for Computer Vision and ฿420,000 for Predictive/ML.'
      ),
    },
    {
      question: t('จะได้อะไรจากการพัฒนา?', 'What do I get from development?'),
      answer: t(
        'คุณจะได้รับระบบ AI ที่พร้อมใช้งาน โมเดลที่ฝึกอบรมแล้ว ระบบที่รวมเข้ากับระบบเดิม และ documentation ครบถ้วน',
        'You will receive a production-ready AI system, trained models, integrated systems, and comprehensive documentation.'
      ),
    },
  ];

  return (
    <>
      <SeoHead
        title={t(
          'AI Development - พัฒนาระบบ AI แบบกำหนดเอง',
          'AI Development - Custom AI System Development'
        )}
        description={t(
          'บริการพัฒนา AI ครบวงจร: การพัฒนาโมเดล การรวมเข้ากับระบบเดิม การฝึกอบรม และการทดสอบ',
          'Comprehensive AI development services: model development, system integration, training, and testing.'
        )}
        keywords={
          isThai
            ? ['AI Development', 'พัฒนาระบบ AI', 'Custom AI', 'AI Integration']
            : ['AI Development', 'Custom AI', 'AI Integration', 'AI Training']
        }
        url="/services/development"
        type="website"
      />

      <ServiceSchema
        serviceName={t('AI Development', 'AI Development')}
        description={t(
          'บริการพัฒนาระบบ AI แบบกำหนดเองสำหรับธุรกิจ',
          'Custom AI system development services for businesses'
        )}
      />

      <div className="bg-bg">
        <MagicHero
          eyebrow={t('AI Development', 'AI Development')}
          title={t('พัฒนาระบบ AI แบบกำหนดเอง', 'Custom AI System Development')}
          description={t(
            'เราพัฒนาระบบ AI ที่เหมาะกับธุรกิจของคุณ รวมถึงการพัฒนาโมเดล การรวมเข้ากับระบบเดิม และการฝึกอบรม',
            'We develop AI systems tailored to your business including model development, system integration, and training.'
          )}
          metrics={[
            { value: '6-16', label: t('สัปดาห์', 'Weeks') },
            { value: '100%', label: t('Custom Solution', 'Custom Solution') },
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
                  'เรามอบบริการพัฒนา AI ครบวงจรเพื่อให้คุณได้ระบบที่เหมาะกับธุรกิจ',
                  'We provide comprehensive AI development services to deliver systems tailored to your business.'
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
                  'AI Development ช่วยคุณพัฒนาระบบ AI ที่เหมาะกับธุรกิจของคุณ รวมถึงการพัฒนาโมเดล การรวมเข้ากับระบบเดิม และการฝึกอบรมเพื่อให้ได้ผลลัพธ์ที่ดีที่สุด',
                  'AI Development helps you build AI systems tailored to your business including model development, system integration, and training for optimal results.'
                )}
                locale={schemaLocale}
              />
              <KeyFactsBlock
                facts={[
                  {
                    label: t('ระยะเวลา', 'Duration'),
                    value: t('6-16 สัปดาห์', '6-16 weeks'),
                  },
                  {
                    label: t('ราคาเริ่มต้น', 'Starting Price'),
                    value: t('฿260,000 - ฿420,000', '฿260,000 - ฿420,000'),
                  },
                  {
                    label: t('เทคโนโลยี', 'Technologies'),
                    value: technologies,
                  },
                  {
                    label: t('สิ่งที่ได้รับ', 'Deliverables'),
                    value: deliverables,
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
                  {t('พร้อมเริ่มพัฒนา AI?', 'Ready to develop your AI?')}
                </h2>
                <p className="mt-2 text-text-muted">
                  {t(
                    'ติดต่อเราวันนี้เพื่อรับการประเมินและใบเสนอราคา',
                    'Contact us today for an assessment and quote.'
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
