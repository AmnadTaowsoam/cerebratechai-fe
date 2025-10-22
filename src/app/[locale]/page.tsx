'use client';

import { useLocale } from 'next-intl';
import { HeroSection } from '@/components/landing/hero-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { ContactForm } from '@/components/landing/contact-form';
import { ValueCardsSection } from '@/components/landing/value-cards-section';
import { ProcessStepsSection } from '@/components/landing/process-steps-section';
import { PackagesPreviewSection } from '@/components/landing/packages-preview-section';
import { CaseShowcaseSection } from '@/components/landing/case-showcase-section';
import { SocialProofSection } from '@/components/landing/social-proof-section';
import { ChatGPTAppsSection } from '@/components/landing/chatgpt-apps-section';
import { StatsSection } from '@/components/landing/stats-section';
import { ServicesGrid } from '@/components/services/services-grid';
import { WebVitalsClient } from '@/components/metrics/web-vitals-client';
import { RAGDemoSection } from '@/components/rag/rag-demo-section';
import { SeoHead, OrganizationJsonLd, WebsiteJsonLd, ServiceJsonLd, LocalBusinessJsonLd } from '@/components/seo';

export default function Home() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const readinessItems = [
    {
      title: 'Quick Consultation',
      titleTh: 'ปรึกษาเบื้องต้น',
      description: '30-minute chat to understand your AI idea and see if we can help.',
      descriptionTh: 'พูดคุย 30 นาทีเพื่อทำความเข้าใจไอเดีย AI ของคุณและดูว่าเราช่วยได้หรือไม่',
    },
    {
      title: 'POC Proposal',
      titleTh: 'ข้อเสนอ POC',
      description: 'Get a clear scope, timeline (4-8 weeks), and budget for your POC.',
      descriptionTh: 'รับขอบเขตงาน ระยะเวลา (4-8 สัปดาห์) และงบประมาณที่ชัดเจนสำหรับ POC',
    },
    {
      title: 'Build & Test',
      titleTh: 'สร้างและทดสอบ',
      description: 'We build a working prototype you can test with real scenarios.',
      descriptionTh: 'เราสร้างต้นแบบที่ใช้งานได้จริงให้คุณทดสอบกับสถานการณ์จริง',
    },
  ];

  return (
    <>
      <SeoHead
        title={isThai ? 'เปลี่ยนปัญหาเป็นระบบ AI พร้อมใช้งานจริง' : 'Turn Pain Points into Production-Ready AI Systems'}
        description={isThai 
          ? 'เปลี่ยนปัญหาเป็นระบบ AI พร้อมใช้งานจริง เราสร้างโซลูชัน AI และ full-stack จาก Edge ถึง Cloud ที่พร้อมปล่อยใช้งานจริง สตูดิโอ AI แบบบูติกในกรุงเทพฯ'
          : 'Transform your pain points into production-ready AI systems. We build AI & full-stack solutions from Edge to Cloud with guardrails and playbooks, ready for production deployment. Boutique AI Studio in Bangkok, Thailand.'
        }
        keywords={isThai 
          ? ['AI ประเทศไทย', 'Machine Learning', 'Computer Vision', 'การพัฒนา AI', 'ระบบ AI พร้อมใช้งาน', 'AI consulting', 'Bangkok AI', 'Thailand AI company']
          : ['AI solutions Thailand', 'Machine Learning services', 'Computer Vision development', 'AI consulting Bangkok', 'Production-ready AI', 'Full-stack AI development', 'Edge Computing', 'AI system integration']
        }
        url="/"
        type="website"
      />
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <ServiceJsonLd />
      <LocalBusinessJsonLd />
      
      <WebVitalsClient />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <ValueCardsSection />
      <ServicesGrid limit={6} />
      <ProcessStepsSection />
      <ChatGPTAppsSection />
      <RAGDemoSection />
      <PackagesPreviewSection />
      <CaseShowcaseSection />
      <SocialProofSection />
      <section className="relative overflow-hidden bg-gradient-to-br from-bg via-surface to-bg py-24">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.08),_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(99,102,241,0.06),_transparent_40%)]" />
        
        <div className="relative container mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              {locale.startsWith('th') ? 'เริ่มต้นการเดินทาง' : 'Start Your Journey'}
            </div>
            <h2 className="mb-4 text-3xl font-bold text-text md:text-5xl">
              {locale.startsWith('th') ? 'พร้อมทดลองไอเดีย AI แล้วหรือยัง?' : 'Ready to try your AI ideas?'}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-muted md:text-xl">
              {locale.startsWith('th') 
                ? 'เริ่มต้นง่ายๆ ด้วย POC ที่ทดสอบได้จริง ไม่มีค่าใช้จ่ายซ่อนเร้น'
                : 'Start easily with a real testable POC, no hidden costs.'
              }
            </p>
          </div>
          
          <div className="mb-14 grid gap-8 md:grid-cols-3">
            {readinessItems.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-hairline/50 bg-surface/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Step number */}
                <div className="absolute -right-4 -top-4 text-8xl font-bold text-primary/5 transition-all group-hover:text-primary/10">
                  {index + 1}
                </div>
                
                <div className="relative">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-text">
                    {locale.startsWith('th') ? item.titleTh : item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {locale.startsWith('th') ? item.descriptionTh : item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <ContactForm />
        </div>
      </section>
    </>
  );
}
