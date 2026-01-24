import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import PackagesList from '@/components/PackagesList';
import PricingTerms from '@/components/PricingTerms';
import { SeoHead, PricingSchema } from '@/components/seo';

type PackagesPageProps = {
  params: { locale: string };
};

export const metadata: Metadata = {
  title: 'CerebraTechAI - Packages',
  description:
    'AI and software delivery packages covering strategy, pilots, production and care plans.',
};

export default function PackagesPage({ params }: PackagesPageProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const basePath = `/${locale}`;
  const isThai = locale === 'th';
  const metrics = [
    { value: '6', label: isThai ? 'แพ็กเกจ' : 'Packages' },
    { value: '14+', label: isThai ? 'เพลย์บุ๊ก' : 'Playbooks' },
    { value: '100%', label: isThai ? 'พร้อมใช้งานจริง' : 'Production Ready' },
  ];
  const starterOffers = [
    {
      name: isThai ? 'AI Kickstart' : 'AI Kickstart',
      timeline: isThai ? '1-2 สัปดาห์' : '1-2 weeks',
      price: isThai ? '฿39,000-฿79,000' : '฿39,000-฿79,000',
      description: isThai
        ? 'เริ่มสำรวจ use-case แรก พร้อมตั้ง KPI ที่ชัดเจน'
        : 'Explore the first use-case and define clear KPIs.',
    },
    {
      name: isThai ? 'POC Sprint' : 'POC Sprint',
      timeline: isThai ? '3-6 สัปดาห์' : '3-6 weeks',
      price: isThai ? '฿120,000-฿290,000' : '฿120,000-฿290,000',
      description: isThai
        ? 'พัฒนาต้นแบบที่วัดผลได้ พร้อมรายงาน ROI'
        : 'Build a measurable prototype with ROI report.',
    },
    {
      name: isThai ? 'Pilot' : 'Pilot',
      timeline: isThai ? '6-10 สัปดาห์' : '6-10 weeks',
      price: isThai ? '฿290,000-฿650,000' : '฿290,000-฿650,000',
      description: isThai
        ? 'ทดลองใช้งานจริงแบบจำกัด พร้อม monitoring'
        : 'Limited real-user rollout with monitoring.',
    },
    {
      name: isThai ? 'Production Scale' : 'Production Scale',
      timeline: isThai ? 'ตามขอบเขตงาน' : 'Scope-based',
      price: isThai ? 'ขอใบเสนอราคา' : 'Request quote',
      description: isThai
        ? 'ขึ้นระบบจริงระดับองค์กร พร้อม compliance และ SLA'
        : 'Enterprise-grade deployment with compliance and SLA.',
    },
  ];
  const costDrivers = [
    {
      title: isThai ? 'ความพร้อมของข้อมูล' : 'Data readiness',
      description: isThai
        ? 'คุณภาพและการเข้าถึงข้อมูลส่งผลต่อเวลาและต้นทุน'
        : 'Data quality and access impact time and cost.',
    },
    {
      title: isThai ? 'ความซับซ้อนของระบบ' : 'Integration complexity',
      description: isThai
        ? 'จำนวนระบบและข้อจำกัดทางเทคนิคที่ต้องเชื่อมต่อ'
        : 'Number of systems and technical constraints.',
    },
    {
      title: isThai ? 'สภาพแวดล้อมการติดตั้ง' : 'Deployment environment',
      description: isThai
        ? 'ข้อกำหนด on-prem/VPC และนโยบายความปลอดภัย'
        : 'On-prem/VPC requirements and security policies.',
    },
    {
      title: isThai ? 'สเกลและ SLA' : 'Scale & SLA',
      description: isThai
        ? 'ปริมาณผู้ใช้ ความถี่การใช้งาน และระดับ SLA'
        : 'User volume, usage frequency, and SLA needs.',
    },
  ];

  return (
    <>
      <SeoHead
        title={
          isThai
            ? 'แพ็กเกจ AI - เริ่มที่ ฿95,000'
            : 'AI Packages - Starting from ฿95,000'
        }
        description={
          isThai
            ? 'แพ็กเกจ AI ตั้งแต่ Kickstart จนถึง Production Scale พร้อมบริการดูแลต่อเนื่อง'
            : 'Various AI packages for every need from Kickstart to Production Scale.'
        }
        keywords={
          isThai
            ? [
                'แพ็กเกจ AI',
                'AI packages',
                'บริการ AI',
                'Machine Learning packages',
              ]
            : [
                'AI packages',
                'AI Thailand',
                'Machine Learning packages',
                'AI consulting packages',
              ]
        }
        url="/packages"
        type="website"
      />
      <PricingSchema />

      <div className="bg-bg">
        <MagicHero
          eyebrow={isThai ? 'แพ็กเกจ' : 'Packages'}
          title={
            isThai
              ? 'แพ็กเกจยืดหยุ่น ตั้งแต่เริ่มต้นจนถึงดูแลหลังเปิดใช้งาน'
              : 'Flexible packages from strategy to post-launch care'
          }
          description={
            isThai
              ? 'เริ่มจาก Kickstart, พิสูจน์ด้วย POC Lab, ขยายด้วย Pilot/Production และดูแลต่อเนื่องด้วย Care Plan'
              : 'Start with a Kickstart workshop, prove value in the POC Lab, roll out with Pilot or Production Scale, and stay sharp with the Care Plan.'
          }
          metrics={metrics}
          align="center"
        />

        <section className="relative py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(124,58,237,0.12),_transparent_60%)]" />
          <div className="absolute inset-0 opacity-25">
            <Particles quantity={48} staticity={22} ease={70} />
          </div>

          <div className="relative z-10 container mx-auto px-6">
            <PackagesList locale={locale} />
          </div>
        </section>

        <section className="py-16 bg-surface/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-semibold text-text mb-3">
                {isThai ? 'Starter Offers' : 'Starter Offers'}
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                {isThai
                  ? 'เหมาะกับทีมที่ต้องการเริ่มเร็ว พร้อมงบและผลลัพธ์ที่วัดได้'
                  : 'Designed for teams who want to start fast with a clear budget and measurable outcomes.'}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {starterOffers.map(offer => (
                <div
                  key={offer.name}
                  className="rounded-2xl border border-white/10 bg-surface/80 p-5"
                >
                  <h3 className="text-lg font-semibold text-text mb-1">
                    {offer.name}
                  </h3>
                  <p className="text-xs text-text-muted mb-3">
                    {offer.timeline}
                  </p>
                  <div className="text-2xl font-bold text-text mb-2">
                    {offer.price}
                  </div>
                  <p className="text-sm text-text-muted">{offer.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-semibold text-text mb-3">
                {isThai ? 'อะไรคือปัจจัยด้านราคา?' : 'What drives cost?'}
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                {isThai
                  ? 'ราคาแปรผันตามความซับซ้อน ความเสี่ยง และข้อกำหนดด้านระบบ'
                  : 'Pricing reflects complexity and risk, not just hours.'}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {costDrivers.map(driver => (
                <div
                  key={driver.title}
                  className="rounded-2xl border border-white/10 bg-surface/80 p-5"
                >
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {driver.title}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {driver.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PricingTerms locale={locale} />

        <section className="bg-surface py-16">
          <div className="container mx-auto px-6">
            <div className="rounded-3xl border border-hairline bg-surface-2/80 p-8 backdrop-blur">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-3xl space-y-3">
                  <h2 className="text-2xl font-semibold text-text">
                    {isThai
                      ? 'ยังไม่แน่ใจว่าแพ็กเกจไหนเหมาะ?'
                      : 'Not sure which package fits?'}
                  </h2>
                  <p className="text-text-muted">
                    {isThai
                      ? 'ทีมของเราจะช่วยประเมินบริบทและแนะนำแพ็กเกจที่เหมาะกับคุณ'
                      : 'Our team will review your context and recommend the right package or add-ons.'}
                  </p>
                </div>
                <ShimmerButton asChild className="px-8 py-4 text-sm">
                  <Link
                    href={`${basePath}/contact` as any}
                    className="flex items-center gap-2"
                  >
                    {isThai ? 'คุยกับทีมเรา' : 'Talk to our team'}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </ShimmerButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
