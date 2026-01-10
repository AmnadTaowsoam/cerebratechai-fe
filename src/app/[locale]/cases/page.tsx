'use client';
import type { Metadata } from 'next';
import { MagicHero } from '@/components/magicui';
import CaseFilters from '@/components/CaseFilters';
import CaseCard from '@/components/CaseCard';
import StickyCTA from '@/components/StickyCTA';
import { CASES } from '@/data/cases';
import { useState } from 'react';
import { SeoHead, ServiceSchema } from '@/components/seo';

type CasesPageProps = {
  params: { locale: string };
};

export default function CasesPage({ params }: CasesPageProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';
  const basePath = `/${locale}`;
  const [filteredCases, setFilteredCases] = useState(CASES);

  const metrics = [
    { value: '9+', label: isThai ? 'โครงการ' : 'PROJECTS' },
    { value: '9', label: isThai ? 'อุตสาหกรรม' : 'SECTORS' },
    { value: '4.9/5', label: isThai ? 'คะแนนลูกค้า' : 'CLIENT SCORE' },
  ];

  const handleFilterChange = (filters: any) => {
    let filtered = [...CASES];

    // Apply filters
    if (filters.sector) {
      filtered = filtered.filter(caseItem => caseItem.sector === filters.sector);
    }
    if (filters.solutionFamily) {
      filtered = filtered.filter(caseItem => 
        caseItem.solutionFamily.includes(filters.solutionFamily)
      );
    }
    if (filters.dataSensitivity) {
      filtered = filtered.filter(caseItem => 
        caseItem.dataSensitivity === filters.dataSensitivity
      );
    }
    if (filters.outcomeType) {
      filtered = filtered.filter(caseItem => 
        caseItem.outcomes.some(outcome => 
          outcome.label.toLowerCase().includes(filters.outcomeType.toLowerCase())
        )
      );
    }

    // Apply sorting
    if (filters.sort === 'Newest') {
      // Keep original order for now
    } else if (filters.sort === 'Highest impact') {
      filtered.sort((a, b) => {
        const aImpact = a.outcomes.reduce((sum, outcome) => {
          const value = parseFloat(outcome.value.replace(/[^\d.-]/g, ''));
          return sum + Math.abs(value);
        }, 0);
        const bImpact = b.outcomes.reduce((sum, outcome) => {
          const value = parseFloat(outcome.value.replace(/[^\d.-]/g, ''));
          return sum + Math.abs(value);
        }, 0);
        return bImpact - aImpact;
      });
    }

    setFilteredCases(filtered);
  };

  return (
    <>
      <SeoHead
        title={isThai ? 'เคสศึกษา AI - โครงการจริงที่ประสบความสำเร็จ' : 'AI Case Studies - Real Successful Projects'}
        description={isThai 
          ? 'ดูเคสศึกษา AI จริงที่เราได้ทำสำเร็จ ครอบคลุมหลายอุตสาหกรรมและโซลูชันที่หลากหลาย'
          : 'Explore real AI case studies we have successfully completed across various industries and solutions.'
        }
        keywords={isThai 
          ? ['เคสศึกษา AI', 'โครงการ AI', 'AI ประเทศไทย', 'Machine Learning ตัวอย่าง']
          : ['AI case studies', 'AI projects', 'AI Thailand', 'Machine Learning examples']
        }
        url="/cases"
        type="website"
      />
      <ServiceSchema 
        serviceName={isThai ? 'เคสศึกษา AI' : 'AI Case Studies'}
        description={isThai 
          ? 'เคสศึกษา AI จริงที่ประสบความสำเร็จ'
          : 'Real successful AI case studies'
        }
      />
      
      <div className="bg-bg">
      <MagicHero
        eyebrow={isThai ? 'Case studies' : 'Case studies'}
        title={
          isThai
            ? 'เรื่องราวที่สมดุลระหว่างข้อมูลเชิงลึกกับความลับ'
            : 'Stories that balance insight with confidentiality'
        }
        description={
          isThai
            ? 'เราใช้ข้อมูลที่ไม่ระบุตัวตน ข้อมูลสังเคราะห์ และข้อมูลสาธารณะเพื่ออธิบายกระบวนการ การป้องกัน และผลกระทบที่วัดได้ โดยปฏิบัติตามแนวทางใน docs/09 และ docs/19'
            : 'We balance measurable impact with strict confidentiality. Case stories use anonymised, synthetic, and public datasets where needed.'
        }
        metrics={metrics}
        align="center"
      />

      {/* Similar Challenges Section */}
      <section className="py-16 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold text-text mb-4">
              {isThai ? 'เผชิญกับความท้าทายคล้ายกันหรือไม่?' : 'Facing Similar Challenges?'}
            </h2>
            <p className="text-text-muted">
              {isThai
                ? 'ดูว่าเราช่วยองค์กรอื่นๆ แก้ปัญหาที่คล้ายกับคุณอย่างไร ใช้ตัวกรองด้านล่างเพื่อค้นหากรณีศึกษาที่ตรงกับความต้องการของคุณ'
                : 'See how we have helped other organizations solve challenges similar to yours. Use filters below to find case studies that match your needs.'
              }
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-surface/80 p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {isThai ? 'ลดต้นทุน' : 'Cost Reduction'}
              </div>
              <p className="text-sm text-text-muted">
                {isThai ? 'ค้นหากรณีที่ช่วยลดต้นทุนการดำเนินงาน' : 'Find cases that reduced operational costs'}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface/80 p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {isThai ? 'เพิ่มประสิทธิภาพ' : 'Efficiency Gains'}
              </div>
              <p className="text-sm text-text-muted">
                {isThai ? 'ดูวิธีปรับปรุงกระบวนการทำงาน' : 'See how processes were improved'}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface/80 p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {isThai ? 'Scale ธุรกิจ' : 'Business Growth'}
              </div>
              <p className="text-sm text-text-muted">
                {isThai ? 'เรียนรู้วิธี Scale ธุรกิจด้วย AI' : 'Learn how AI enabled growth'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <CaseFilters locale={locale} onFilterChange={handleFilterChange} />

      {/* Cases Grid */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(124,58,237,0.12),_transparent_65%)]" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCases.map((caseItem) => (
              <CaseCard
                key={caseItem.slug}
                caseItem={caseItem}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <StickyCTA locale={locale} />
      </div>
    </>
  );
}