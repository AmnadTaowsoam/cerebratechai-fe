import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { ServicesGrid } from '@/components/services/services-grid';
import { SeoHead, ServiceSchema } from '@/components/seo';

type SolutionsPageProps = {
  params: { locale: string };
};

export const metadata: Metadata = {
  title: 'Cerebratechai — Solutions',
  description: 'Explore production-ready AI, data, and software solutions from Cerebratechai.',
};

export default function SolutionsPage({ params }: SolutionsPageProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';
  const metrics = [
    { value: '19+', label: isThai ? 'Solutions' : 'Solutions' },
    { value: 'Edge→Cloud', label: isThai ? 'ครอบคลุม' : 'Coverage' },
    { value: 'SLA Ready', label: isThai ? 'พร้อมใช้งาน' : 'SLA Ready' },
  ];

  return (
    <>
      <SeoHead
        title={isThai ? 'โซลูชัน AI - Machine Learning, Computer Vision, LLM' : 'AI Solutions - Machine Learning, Computer Vision, LLM'}
        description={isThai 
          ? 'โซลูชัน AI ครบวงจรสำหรับธุรกิจ ตั้งแต่ Machine Learning, Computer Vision, LLM, AIoT ไปจนถึง Edge Computing'
          : 'Comprehensive AI solutions for businesses including Machine Learning, Computer Vision, LLM, AIoT, and Edge Computing.'
        }
        keywords={isThai 
          ? ['โซลูชัน AI', 'Machine Learning', 'Computer Vision', 'LLM', 'AIoT', 'Edge Computing']
          : ['AI solutions', 'Machine Learning', 'Computer Vision', 'LLM', 'AIoT', 'Edge Computing']
        }
        url="/solutions"
        type="website"
      />
      <ServiceSchema 
        serviceName={isThai ? 'โซลูชัน AI' : 'AI Solutions'}
        description={isThai 
          ? 'โซลูชัน AI ครบวงจรสำหรับธุรกิจทุกขนาด'
          : 'Comprehensive AI solutions for businesses of all sizes'
        }
      />
      
      <div className="bg-bg">
      <MagicHero
        eyebrow={isThai ? 'โซลูชัน AI' : 'AI Solutions'}
        title={
          isThai
            ? 'โซลูชัน AI พร้อมใช้งาน สำหรับ SME และโครงการขนาดกลาง'
            : 'Production-Ready AI Solutions for SMEs and Mid-Size Projects'
        }
        description={
          isThai
            ? 'โซลูชัน AI หลักของเรา: LLM & RAG, Computer Vision, Predictive Analytics และ Edge AI พร้อมบริการสนับสนุนด้าน MLOps และ Engineering'
            : 'Our AI Core Solutions: LLM & RAG, Computer Vision, Predictive Analytics, and Edge AI—with MLOps and Engineering support services.'
        }
        metrics={metrics}
        align="center"
      />

      {/* AI Core Solutions with Anchor Links */}
      <div id="llm-rag" className="scroll-mt-20">
        <ServicesGrid showFilters />
      </div>

      {/* Additional anchor points for navigation */}
      <div id="computer-vision" className="scroll-mt-20" />
      <div id="predictive-analytics" className="scroll-mt-20" />
      <div id="edge-ai" className="scroll-mt-20" />

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
                {isThai
                  ? 'ต้องการโซลูชันเฉพาะทางมากขึ้นหรือไม่?'
                  : 'Need a bespoke variant or new capability?'}
              </h2>
              <p className="mt-2 text-text-muted">
                {isThai
                  ? 'Blueprint ทุกชุดสามารถปรับแต่ง ขยาย หรือเชื่อมกับระบบเดิมของคุณได้ นัดคุยกับทีม Value Engineering เพื่อออกแบบเส้นทางที่เหมาะกับองค์กร'
                  : 'Each blueprint can be customised, expanded, or integrated with your existing stack. Speak with our Value Engineering team to map the right path.'}
              </p>
            </div>
            <ShimmerButton asChild className="px-8 py-4 text-sm">
              <Link href="/contact" className="inline-flex items-center gap-2">
                {isThai ? 'คุยกับทีมเรา' : 'Talk to our team'}
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
