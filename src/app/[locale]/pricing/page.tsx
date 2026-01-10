'use client';

import { useLocale } from 'next-intl';
import { MagicHero } from '@/components/magicui';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator } from 'lucide-react';
import Link from 'next/link';
import PricingCards from '@/components/PricingCards';
import PricingCompare from '@/components/PricingCompare';
import CarePlanSection from '@/components/CarePlanSection';
import PricingTerms from '@/components/PricingTerms';
import { SeoHead, PricingSchema, FAQSchema } from '@/components/seo';
import { QuickQuote } from '@/components/lead-capture';

export default function PricingPage() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;

  const faqs = [
    {
      question: isThai ? 'ควรเริ่มจากแพ็กเกจไหน?' : 'Which package is right for my business?',
      answer: isThai
        ? 'แนะนำเริ่มจาก Kickstart เพื่อประเมินความเป็นไปได้ จากนั้นค่อยขยับไป POC Lab หรือ Pilot ตามเป้าหมาย'
        : 'We recommend starting with Kickstart to explore possibilities, then expanding to POC Lab or Pilot Launch based on your needs.',
    },
    {
      question: isThai ? 'มีค่าใช้จ่ายแฝงไหม?' : 'Are there any hidden costs?',
      answer: isThai
        ? 'ไม่มี ทุกแพ็กเกจเป็นราคาคงที่ตามขอบเขตที่ตกลง'
        : 'No, there are no hidden costs. The prices shown are final.',
    },
    {
      question: isThai ? 'ปรับแพ็กเกจตามโจทย์ได้ไหม?' : 'Can packages be customized?',
      answer: isThai
        ? 'ได้ เราสามารถปรับขอบเขตและ deliverables ให้เหมาะกับโจทย์ของคุณ'
        : 'Yes, we can customize packages to fit your specific needs.',
    },
  ];

  const starterVsScale = [
    {
      title: isThai ? 'Starter Offers' : 'Starter Offers',
      subtitle: isThai ? 'Kickstart และ POC Lab' : 'Kickstart and POC Lab',
      description: isThai
        ? 'เหมาะสำหรับยืนยัน use-case และ ROI ก่อนขยายสเกล'
        : 'Best for validating the first use-case, ROI, and direction before scaling.',
      bullets: isThai
        ? ['ขอบเขตเล็ก เห็นผลเร็ว', 'ราคาคงที่ งบชัดเจน', 'มี KPI และแผน 90 วัน']
        : ['Small scope, fast outcomes', 'Fixed price with clear budget', 'KPI + 90-day plan included'],
      cta: isThai ? 'ดู Starter Packages' : 'Explore starter packages',
    },
    {
      title: isThai ? 'Scale / Enterprise' : 'Scale / Enterprise',
      subtitle: isThai ? 'Pilot Launch และ Production Scale' : 'Pilot Launch and Production Scale',
      description: isThai
        ? 'เหมาะสำหรับ production พร้อม SLA และ compliance'
        : 'For production deployments with SLA, compliance, and enterprise-grade stability.',
      bullets: isThai
        ? [
            'Production rollout + monitoring/guardrails',
            'แผน DR/rollback + hardening',
            'ขยายด้วย Assurance และ Care Plan',
          ]
        : ['Production rollout + monitoring/guardrails', 'DR/rollback plan and hardening', 'Extend with Assurance and Care Plan'],
      cta: isThai ? 'ดูแพ็กเกจระดับองค์กร' : 'View scale packages',
    },
  ];

  const costDrivers = [
    {
      title: isThai ? 'ความพร้อมของข้อมูล' : 'Data readiness',
      description: isThai
        ? 'คุณภาพ ปริมาณ และการเข้าถึงข้อมูลส่งผลต่อเวลาและต้นทุน'
        : 'Data quality, volume, and access impact delivery time and cost.',
    },
    {
      title: isThai ? 'ความซับซ้อนของระบบ' : 'Integration complexity',
      description: isThai
        ? 'จำนวนระบบและข้อจำกัดของ API ที่ต้องเชื่อม'
        : 'Number of systems, API constraints, and legacy dependencies.',
    },
    {
      title: isThai ? 'การติดตั้งและ compliance' : 'Deployment & compliance',
      description: isThai
        ? 'On-prem/VPC, PDPA และข้อกำหนดด้านความปลอดภัย'
        : 'On-prem/VPC, PDPA, security review, and internal governance.',
    },
    {
      title: isThai ? 'สเกลและ SLA' : 'Scale & SLA',
      description: isThai
        ? 'ปริมาณผู้ใช้ ความถี่การใช้งาน และ uptime ที่ต้องการ'
        : 'User volume, traffic, uptime requirements, and monitoring.',
    },
  ];

  return (
    <>
      <SeoHead
        title={isThai ? 'ราคาแพ็กเกจ AI - เริ่มที่ ฿95,000' : 'AI Package Pricing - Starting from ฿95,000'}
        description={
          isThai
            ? 'แพ็กเกจ AI สำหรับทุกขนาดธุรกิจ เริ่มจาก Kickstart ถึง Production Scale'
            : 'Various AI packages for businesses of all sizes. Starting from ฿95,000 for Kickstart to Production Scale.'
        }
        keywords={
          isThai
            ? ['ราคาแพ็กเกจ AI', 'AI packages', 'บริการ AI', 'Machine Learning ราคา']
            : ['AI pricing', 'AI packages', 'AI Thailand', 'Machine Learning pricing', 'AI consulting pricing']
        }
        url="/pricing"
        type="website"
      />
      <PricingSchema />
      <FAQSchema faqs={faqs} />

      <div className="bg-bg">
        <MagicHero
          eyebrow={isThai ? 'ราคาแบบโปร่งใส' : 'Transparent Pricing'}
          title={isThai ? 'เลือกเส้นทาง AI ที่เหมาะกับคุณ' : 'Choose Your AI Journey'}
          description={
            isThai
              ? 'แพ็กเกจถูกออกแบบให้เริ่มได้ง่ายและขยายได้เมื่อพร้อม'
              : 'Our packages are designed to meet you where you are in your AI journey. From exploration to production, we have the right solution for your needs and budget.'
          }
          align="center"
          metrics={[
            { value: '฿95K-฿2.5M', label: isThai ? 'ช่วงราคา' : 'Price Range' },
            { value: '4-24', label: isThai ? 'สัปดาห์' : 'Weeks' },
            { value: 'Fixed', label: isThai ? 'ราคาคงที่' : 'Fixed Price' },
          ]}
        />

        {/* Pricing Model Explanation */}
        <section className="py-16 bg-surface/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-text mb-6 text-center">
                {isThai ? 'แนวคิดการตั้งราคา' : 'Our Pricing Model'}
              </h2>
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="rounded-2xl border border-white/10 bg-surface/80 p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Fixed Price</div>
                  <h3 className="font-semibold text-text mb-2">
                    {isThai ? 'ราคาคงที่' : 'Fixed Price'}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {isThai
                      ? 'ไม่มีค่าใช้จ่ายแฝง ตกลงขอบเขตชัดเจน'
                      : 'No hidden costs. What you see is what you pay.'
                    }
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-surface/80 p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">Transparent</div>
                  <h3 className="font-semibold text-text mb-2">
                    {isThai ? 'โปร่งใส' : 'Transparent'}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {isThai
                      ? 'ระบุสิ่งที่รวมไว้ชัดเจนในแพ็กเกจ'
                      : 'Everything included in the price. No add-ons required.'
                    }
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-surface/80 p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Value-based</div>
                  <h3 className="font-semibold text-text mb-2">
                    {isThai ? 'ยึดตามคุณค่า' : 'Value-based'}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {isThai
                      ? 'ราคาอ้างอิงตามผลลัพธ์ ไม่ใช่ชั่วโมงทำงาน'
                      : 'Pricing reflects the value you receive, not just time spent.'
                    }
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface/80 p-6">
                <h3 className="font-semibold text-text mb-3">
                  {isThai ? 'สิ่งที่รวมในราคา' : 'What\'s Included in the Price?'}
                </h3>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{isThai ? 'ทีมผู้เชี่ยวชาญและนักวิทยาศาสตร์ข้อมูล' : 'Expert consultants and data scientists'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{isThai ? 'พัฒนาและทดสอบระบบ' : 'Development and testing'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{isThai ? 'เอกสารและการอบรม' : 'Documentation and training'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{isThai ? 'ติดตั้งและส่งมอบ' : 'Deployment and handover'}</span>
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
                {isThai ? 'แพ็กเกจสำหรับการทำ AI' : 'AI Implementation Packages'}
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                {isThai
                  ? 'เลือกแพ็กเกจที่เหมาะกับโจทย์และงบประมาณของคุณ'
                  : 'Choose the package that best fits your current needs and budget. All packages include our core expertise and proven methodologies.'
                }
              </p>
            </div>

            <PricingCards locale={locale} />
          </div>
        </section>

        {/* Starter vs Scale */}
        <section className="py-16 bg-surface/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-text mb-3">
                {isThai ? 'Starter หรือ Scale?' : 'Starter or Scale?'}
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                {isThai
                  ? 'เลือกตามความพร้อมและผลลัพธ์ที่ต้องการ'
                  : 'Choose the right package based on your readiness and target outcomes.'}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {starterVsScale.map((tier) => (
                <div key={tier.title} className="rounded-2xl border border-white/10 bg-surface/80 p-6">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="text-xl font-semibold text-text">{tier.title}</h3>
                    <span className="text-sm text-text-muted">{tier.subtitle}</span>
                  </div>
                  <p className="text-text-muted mb-4">{tier.description}</p>
                  <ul className="space-y-2 text-sm text-text-muted mb-6">
                    {tier.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline">
                    <Link href={`${basePath}/packages` as any}>{tier.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Drivers */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-text mb-3">
                {isThai ? 'อะไรทำให้ราคาสูงขึ้น?' : 'What drives cost?'}
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                {isThai
                  ? 'ราคาขึ้นอยู่กับความซับซ้อน ความเสี่ยง และข้อกำหนดด้านระบบ'
                  : 'We price by complexity and risk, not just hours spent.'}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {costDrivers.map((driver) => (
                <div key={driver.title} className="rounded-2xl border border-white/10 bg-surface/80 p-5">
                  <h3 className="text-lg font-semibold text-text mb-2">{driver.title}</h3>
                  <p className="text-sm text-text-muted">{driver.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-surface/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-text mb-4">
                {isThai ? 'สร้างความมั่นใจด้วยผลลัพธ์จริง' : 'Trusted by Industry Leaders'}
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                {isThai
                  ? 'เราช่วยลูกค้าหลายอุตสาหกรรมยกระดับธุรกิจด้วย AI'
                  : 'Join hundreds of successful companies who have transformed their business with our AI solutions'
                }
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">9+</div>
                <div className="text-sm text-text-muted">
                  {isThai ? 'โปรเจกต์ที่ส่งมอบ' : 'Projects Delivered'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">4</div>
                <div className="text-sm text-text-muted">
                  {isThai ? 'แพ็กเกจหลัก' : 'Core Packages'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-text-muted">
                  {isThai ? 'ราคาคงที่' : 'Fixed Price'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">Mon-Fri</div>
                <div className="text-sm text-text-muted">
                  09:00-18:00
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Quote */}
        <section className="py-16 bg-surface/30">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto">
              <QuickQuote source="pricing-page" variant="default" />
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text mb-4">
                {isThai ? 'เปรียบเทียบคุณสมบัติ' : 'Compare Features'}
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                {isThai
                  ? 'เปรียบเทียบความสามารถสำคัญของแต่ละแพ็กเกจ'
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
                {isThai ? 'คำถามที่พบบ่อย' : 'Frequently Asked Questions'}
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                {isThai
                  ? 'รวมคำถามยอดนิยมเกี่ยวกับราคาและแพ็กเกจ'
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
              {isThai ? 'พร้อมเริ่มต้นหรือยัง?' : 'Ready to Get Started?'}
            </h2>
            <p className="text-text-muted mb-8 max-w-2xl mx-auto">
              {isThai
                ? 'คุยกับทีมเพื่อประเมินโจทย์และเลือกแพ็กเกจที่เหมาะสม'
                : 'Not sure which package is right for you? Let\'s discuss your needs and find the perfect solution for your AI journey.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href={`${basePath}/contact` as any}>
                  <Calculator className="mr-2 h-4 w-4" />
                  {isThai ? 'ขอคำปรึกษาฟรี' : 'Get Free Consultation'}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`${basePath}/packages` as any}>
                  {isThai ? 'ดูแพ็กเกจทั้งหมด' : 'View All Packages'}
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
