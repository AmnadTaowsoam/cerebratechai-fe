'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MagicHero, Particles } from '@/components/magicui';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, Phone } from 'lucide-react';
import Link from 'next/link';
import PricingCards from '@/components/PricingCards';
import PricingCompare from '@/components/PricingCompare';
import CarePlanSection from '@/components/CarePlanSection';
import PricingTerms from '@/components/PricingTerms';
import { SeoHead, PricingSchema, FAQSchema } from '@/components/seo';

export default function PricingPage() {
  // const t = useTranslations('pricing');
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;

  const faqs = [
    {
      question: isThai ? 'แพ็กเกจไหนเหมาะกับธุรกิจของฉัน?' : 'Which package is right for my business?',
      answer: isThai ? 'เราแนะนำให้เริ่มจาก Kickstart เพื่อสำรวจความเป็นไปได้ แล้วค่อยขยายไป POC Lab หรือ Pilot Launch ตามความต้องการ' : 'We recommend starting with Kickstart to explore possibilities, then expanding to POC Lab or Pilot Launch based on your needs.'
    },
    {
      question: isThai ? 'มีค่าใช้จ่ายซ่อนเร้นหรือไม่?' : 'Are there any hidden costs?',
      answer: isThai ? 'ไม่ มีค่าใช้จ่ายซ่อนเร้น ราคาที่แสดงคือราคาสุดท้ายแล้ว' : 'No, there are no hidden costs. The prices shown are final.'
    },
    {
      question: isThai ? 'สามารถปรับแต่งแพ็กเกจได้หรือไม่?' : 'Can packages be customized?',
      answer: isThai ? 'ได้ เราสามารถปรับแต่งแพ็กเกจให้เหมาะกับความต้องการเฉพาะของคุณ' : 'Yes, we can customize packages to fit your specific needs.'
    }
  ];

  const addOns = [
    {
      name: 'Launch Assurance',
      description: 'Additional support and monitoring for critical deployments.',
      price: '180,000',
      currency: 'THB',
      duration: 'per month',
      features: [
        'Extended monitoring & support',
        'Performance optimization',
        'Incident response'
      ],
      successRate: '99.5%',
      avgROI: '300%',
      clients: '35+'
    },
    {
      name: 'Care Plan',
      description: 'Ongoing maintenance and continuous improvement.',
      price: '120,000',
      currency: 'THB',
      duration: 'per month',
      features: [
        'Regular model updates',
        'Performance monitoring',
        'Technical support'
      ],
      successRate: '98%',
      avgROI: '250%',
      clients: '60+'
    }
  ];

  return (
    <>
      <SeoHead
        title={isThai ? 'ราคาแพ็กเกจ AI - เริ่มต้นจาก ฿95,000' : 'AI Package Pricing - Starting from ฿95,000'}
        description={isThai 
          ? 'แพ็กเกจ AI หลากหลายราคาสำหรับธุรกิจทุกขนาด เริ่มต้นจาก ฿95,000 สำหรับ Kickstart ไปจนถึง ฿2,500,000 สำหรับ Production Scale'
          : 'Various AI packages for businesses of all sizes. Starting from ฿95,000 for Kickstart to ฿2,500,000 for Production Scale.'
        }
        keywords={isThai 
          ? ['ราคา AI', 'แพ็กเกจ AI', 'AI ประเทศไทย', 'Machine Learning ราคา', 'AI consulting ราคา']
          : ['AI pricing', 'AI packages', 'AI Thailand', 'Machine Learning pricing', 'AI consulting pricing']
        }
        url="/pricing"
        type="website"
      />
      <PricingSchema />
      <FAQSchema faqs={faqs} />
      
      <div className="bg-bg">
      {/* Hero Section */}
      <MagicHero
        eyebrow={locale.startsWith('th') ? 'ราคาโปร่งใส' : 'Transparent Pricing'}
        title={locale.startsWith('th') ? 'เลือกเส้นทาง AI ของคุณ' : 'Choose Your AI Journey'}
        description={locale.startsWith('th') 
          ? 'แพ็กเกจของเราออกแบบมาเพื่อตอบสนองความต้องการในทุกขั้นตอนของการเดินทาง AI ตั้งแต่การสำรวจไปจนถึงการใช้งานจริง เรามีโซลูชันที่เหมาะสมกับความต้องการและงบประมาณของคุณ'
          : 'Our packages are designed to meet you where you are in your AI journey. From exploration to production, we have the right solution for your needs and budget.'
        }
        align="center"
        metrics={[
          { value: '฿95K-฿2.5M', label: locale.startsWith('th') ? 'ช่วงราคา' : 'Price Range' },
          { value: '4-24', label: locale.startsWith('th') ? 'สัปดาห์' : 'Weeks' },
          { value: 'Fixed', label: locale.startsWith('th') ? 'ราคาคงที่' : 'Fixed Price' }
        ]}
      />

      {/* Pricing Model Explanation */}
      <section className="py-16 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-text mb-6 text-center">
              {locale.startsWith('th') ? 'โมเดลการกำหนดราคาของเรา' : 'Our Pricing Model'}
            </h2>
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="rounded-2xl border border-white/10 bg-surface/80 p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">Fixed Price</div>
                <h3 className="font-semibold text-text mb-2">
                  {locale.startsWith('th') ? 'ราคาคงที่' : 'Fixed Price'}
                </h3>
                <p className="text-sm text-text-muted">
                  {locale.startsWith('th')
                    ? 'ไม่มีค่าใช้จ่ายซ่อนเร้น ราคาที่เห็นคือราคาที่จ่าย'
                    : 'No hidden costs. What you see is what you pay.'
                  }
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface/80 p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">Transparent</div>
                <h3 className="font-semibold text-text mb-2">
                  {locale.startsWith('th') ? 'โปร่งใส' : 'Transparent'}
                </h3>
                <p className="text-sm text-text-muted">
                  {locale.startsWith('th')
                    ? 'ทุกอย่างรวมอยู่ในราคา ไม่มีค่าเพิ่มเติม'
                    : 'Everything included in the price. No add-ons required.'
                  }
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface/80 p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">Value-based</div>
                <h3 className="font-semibold text-text mb-2">
                  {locale.startsWith('th') ? 'มุ่งเน้นคุณค่า' : 'Value-based'}
                </h3>
                <p className="text-sm text-text-muted">
                  {locale.startsWith('th')
                    ? 'ราคาสะท้อนถึงคุณค่าที่คุณได้รับ ไม่ใช่แค่เวลาที่ใช้'
                    : 'Pricing reflects the value you receive, not just time spent.'
                  }
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface/80 p-6">
              <h3 className="font-semibold text-text mb-3">
                {locale.startsWith('th') ? 'ราคารวมอะไรบ้าง?' : 'What\'s Included in the Price?'}
              </h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span>{locale.startsWith('th') ? 'ที่ปรึกษาผู้เชี่ยวชาญและนักวิทยาศาสตร์ข้อมูล' : 'Expert consultants and data scientists'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span>{locale.startsWith('th') ? 'การพัฒนาและการทดสอบ' : 'Development and testing'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span>{locale.startsWith('th') ? 'เอกสารและการฝึกอบรม' : 'Documentation and training'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span>{locale.startsWith('th') ? 'การ deploy และ handover' : 'Deployment and handover'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {locale.startsWith('th') ? 'แพ็กเกจการใช้งาน AI' : 'AI Implementation Packages'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {locale.startsWith('th')
                ? 'เลือกแพ็กเกจที่เหมาะสมกับความต้องการและงบประมาณปัจจุบันของคุณ แพ็กเกจทั้งหมดรวมถึงความเชี่ยวชาญหลักและวิธีการที่ได้รับการพิสูจน์แล้ว'
                : 'Choose the package that best fits your current needs and budget. All packages include our core expertise and proven methodologies.'
              }
            </p>
          </div>

          <PricingCards locale={locale} />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-text mb-4">
              {locale.startsWith('th') ? 'เชื่อถือโดยผู้นำในอุตสาหกรรม' : 'Trusted by Industry Leaders'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {locale.startsWith('th') 
                ? 'เข้าร่วมกับบริษัทที่ประสบความสำเร็จหลายร้อยแห่งที่ได้เปลี่ยนแปลงธุรกิจด้วยโซลูชัน AI ของเรา'
                : 'Join hundreds of successful companies who have transformed their business with our AI solutions'
              }
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">9+</div>
              <div className="text-sm text-text-muted">
                {locale.startsWith('th') ? 'โครงการที่ส่งมอบ' : 'Projects Delivered'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">4</div>
              <div className="text-sm text-text-muted">
                {locale.startsWith('th') ? 'แพ็กเกจหลัก' : 'Core Packages'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-text-muted">
                {locale.startsWith('th') ? 'ราคาคงที่' : 'Fixed Price'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">Mon-Fri</div>
              <div className="text-sm text-text-muted">
                {locale.startsWith('th') ? '09:00-18:00' : '09:00-18:00'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {locale.startsWith('th') ? 'เปรียบเทียบฟีเจอร์' : 'Compare Features'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {locale.startsWith('th') 
                ? 'ดูว่าแพ็กเกจของเราเปรียบเทียบกันอย่างไรในฟีเจอร์และความสามารถหลัก'
                : 'See how our packages compare across key features and capabilities'
              }
            </p>
          </div>

          <PricingCompare locale={locale} />
        </div>
      </section>

      {/* Care Plan Section */}
      <CarePlanSection locale={locale} />

      {/* Terms */}
      <PricingTerms locale={locale} />

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {locale.startsWith('th') ? 'คำถามที่พบบ่อย' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {locale.startsWith('th') 
                ? 'รับคำตอบสำหรับคำถามทั่วไปเกี่ยวกับราคาและบริการของเรา'
                : 'Have questions about our pricing? Here are answers to the most common questions we receive.'
              }
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl border border-white/10 bg-surface/80 p-6">
                <h3 className="text-lg font-semibold text-text mb-3">
                  {faq.question}
                </h3>
                <p className="text-text-muted">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text mb-4">
            {locale.startsWith('th') ? 'พร้อมเริ่มต้นแล้วหรือยัง?' : 'Ready to Get Started?'}
          </h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            {locale.startsWith('th') 
              ? 'ติดต่อทีมของเราเพื่อหารือเกี่ยวกับความต้องการเฉพาะของคุณและรับข้อเสนอที่ปรับแต่งตามความต้องการของคุณ'
              : 'Not sure which package is right for you? Let\'s discuss your needs and find the perfect solution for your AI journey.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={`${basePath}/contact` as any}>
                <Calculator className="mr-2 h-4 w-4" />
                {locale.startsWith('th') ? 'ขอคำปรึกษาฟรี' : 'Get Free Consultation'}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`${basePath}/packages` as any}>
                {locale.startsWith('th') ? 'ดูแพ็กเกจทั้งหมด' : 'View All Packages'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}