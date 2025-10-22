import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { AnimatedGradientText, MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PackagesList from '@/components/PackagesList';
import PricingTerms from '@/components/PricingTerms';
import { SeoHead, PricingSchema } from '@/components/seo';

type PackagesPageProps = {
  params: { locale: string };
};

export const metadata: Metadata = {
  title: 'Cerebratechai — Packages',
  description: 'AI and software delivery packages covering strategy, pilots, production and care plans.',
};

export default function PackagesPage({ params }: PackagesPageProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const basePath = `/${locale}`;
  const isThai = locale === 'th';
  const metrics = [
    { value: '6', label: isThai ? 'แพ็กเกจ' : 'Packages' },
    { value: '14+', label: isThai ? 'เพลย์บุ๊ก' : 'Playbooks' },
    { value: '100%', label: isThai ? 'Production Ready' : 'Production Ready' },
  ];

  return (
    <>
      <SeoHead
        title={isThai ? 'แพ็กเกจ AI - เริ่มต้นจาก ฿95,000' : 'AI Packages - Starting from ฿95,000'}
        description={isThai 
          ? 'แพ็กเกจ AI หลากหลายสำหรับทุกความต้องการ ตั้งแต่ Kickstart ไปจนถึง Production Scale'
          : 'Various AI packages for every need from Kickstart to Production Scale.'
        }
        keywords={isThai 
          ? ['แพ็กเกจ AI', 'AI packages', 'AI ประเทศไทย', 'Machine Learning packages']
          : ['AI packages', 'AI Thailand', 'Machine Learning packages', 'AI consulting packages']
        }
        url="/packages"
        type="website"
      />
      <PricingSchema />
      
      <div className="bg-bg">
      <MagicHero
        eyebrow={isThai ? 'Packages' : 'Packages'}
        title={
          isThai
            ? 'แพ็กเกจที่ยืดหยุ่น ครอบคลุมตั้งแต่จุดเริ่มต้นจนถึงการดูแลหลังเปิดใช้'
            : 'Flexible packages from strategy to post-launch care'
        }
        description={
          isThai
            ? 'เลือกจังหวะที่เหมาะกับทีม: เริ่มต้นจากเวิร์กช็อป Kickstart, ทดลองใน POC Lab, เปิดใช้ผ่าน Pilot หรือ Production Scale และดูแลต่อด้วย Care Plan'
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

      {/* Terms */}
      <PricingTerms locale={locale} />

      <section className="bg-surface py-16">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-hairline bg-surface-2/80 p-8 backdrop-blur">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl space-y-3">
                <h2 className="text-2xl font-semibold text-text">
                  {isThai
                    ? 'ไม่แน่ใจว่าควรเริ่มแพ็กเกจไหน?'
                    : 'Not sure which package fits?'}
                </h2>
                <p className="text-text-muted">
                  {isThai
                    ? 'ทีม Value Engineering จะช่วยตรวจสอบบริบท ปรับชุดการส่งมอบ และแนะนำแพ็กเกจหรือบริการเพิ่มเติมที่เหมาะสมที่สุด'
                    : 'Our Value Engineering team will review your context, tailor the deliverables, and advise on the right package or add-on services.'}
                </p>
              </div>
              <ShimmerButton asChild className="px-8 py-4 text-sm">
                <Link href={`${basePath}/contact` as any} className="flex items-center gap-2">
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