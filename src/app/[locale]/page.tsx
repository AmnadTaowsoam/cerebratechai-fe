import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Brain,
  Cpu,
  Layers,
  BarChart,
  Sparkles,
  Heart,
  Leaf,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import {
  SeoHead,
  OrganizationJsonLd,
  WebsiteJsonLd,
  ServiceJsonLd,
  LocalBusinessJsonLd,
} from '@/components/seo';
import { WebVitalsClient } from '@/components/metrics/web-vitals-client';
import { StatsSection } from '@/components/landing/stats-section';
import { SocialProofSection } from '@/components/landing/social-proof-section';
import { SECTION_SPACING } from '@/lib/constants/spacing';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isThai = params.locale.startsWith('th');

  return {
    title: isThai
      ? 'พาร์ทเนอร์ AI สำหรับธุรกิจไทย - CerebraTechAI'
      : 'AI Solutions Partner for Thai Enterprises - CerebraTechAI',
    description: isThai
      ? 'จาก POC สู่ Production - เราสร้าง AI ที่ใช้งานได้จริง'
      : 'From POC to Production - We Build AI That Works',
    openGraph: {
      title: isThai
        ? 'พาร์ทเนอร์ AI สำหรับธุรกิจไทย'
        : 'AI Solutions Partner for Thai Enterprises',
      description: isThai
        ? 'จาก POC สู่ Production - เราสร้าง AI ที่ใช้งานได้จริง'
        : 'From POC to Production - We Build AI That Works',
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'home' });
  const ctaT = await getTranslations({
    locale: params.locale,
    namespace: 'cta',
  });
  const isThai = params.locale.startsWith('th');

  const heroContent = {
    en: {
      title: 'AI Solutions Partner for Thai Enterprises',
      subtitle: 'From POC to Production - We Build AI That Works',
      description:
        "Ready to transform your business with AI? Let's discuss your project and create a custom solution that delivers real results.",
      cta1: { label: 'Start Your AI Project', href: '/contact' },
      cta2: {
        label: 'Get Free Consultation',
        href: '/contact?type=consultation',
      },
    },
    th: {
      title: 'พาร์ทเนอร์ AI สำหรับธุรกิจไทย',
      subtitle: 'จาก POC สู่ Production - เราสร้าง AI ที่ใช้งานได้จริง',
      description:
        'พร้อมเปลี่ยนธุรกิจของคุณด้วย AI หรือยัง? มาคุยกันเกี่ยวกับโปรเจกต์ของคุณและสร้างโซลูชันที่ให้ผลลัพธ์จริง',
      cta1: { label: 'เริ่มโปรเจกต์ AI', href: '/contact' },
      cta2: { label: 'ปรึกษาฟรี', href: '/contact?type=consultation' },
    },
  };

  const content = isThai ? heroContent.th : heroContent.en;

  const services = [
    {
      title: isThai ? 'AI Consulting' : 'AI Consulting',
      description: isThai
        ? 'POC/Pilot, Assessment, Strategy'
        : 'POC/Pilot, Assessment, Strategy',
      icon: Brain,
      href: `/${params.locale}/services`,
    },
    {
      title: isThai ? 'AI Development' : 'AI Development',
      description: isThai
        ? 'Custom AI, Integration, Training'
        : 'Custom AI, Integration, Training',
      icon: Cpu,
      href: `/${params.locale}/services`,
    },
    {
      title: isThai ? 'AI Deployment' : 'AI Deployment',
      description: isThai
        ? 'MLOps, Maintenance, Support'
        : 'MLOps, Maintenance, Support',
      icon: Layers,
      href: `/${params.locale}/services`,
    },
  ];

  const featuredSolutions = [
    {
      name: 'ChartSentinel',
      description: isThai
        ? 'AI-SPC Quality Control - ลดของเสีย 85%'
        : 'AI-SPC Quality Control - Reduce waste by 85%',
      icon: BarChart,
      href: `/${params.locale}/products/chartsentinel`,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
    },
    {
      name: 'CerebraForge',
      description: isThai
        ? 'Enterprise RAG Platform - Document AI'
        : 'Enterprise RAG Platform - Document AI',
      icon: Layers,
      href: `/${params.locale}/products/cerebraforge`,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
    },
  ];

  const externalProducts = [
    {
      name: 'Phitiai',
      description: isThai ? 'AI Festival Platform' : 'AI Festival Platform',
      icon: Sparkles,
      href: 'https://www.phithiai.com',
    },
    {
      name: 'Sookwai',
      description: isThai ? 'Elderly Wellness' : 'Elderly Wellness',
      icon: Heart,
      href: 'https://www.sookwei.com',
    },
    {
      name: 'PlukTunRaka',
      description: isThai ? 'AgTech Platform' : 'AgTech Platform',
      icon: Leaf,
      href: 'https://www.pluktunraka.com',
    },
  ];

  return (
    <>
      <SeoHead
        title={content.title}
        description={content.subtitle}
        keywords={
          isThai
            ? [
                'AI สำหรับธุรกิจไทย',
                'POC AI',
                'Production AI',
                'AI Solutions',
                'CerebraTechAI',
              ]
            : [
                'AI for Thai Enterprises',
                'AI POC',
                'AI Production',
                'AI Solutions',
                'CerebraTechAI',
              ]
        }
        url="/"
        type="website"
      />
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <ServiceJsonLd />
      <LocalBusinessJsonLd />

      <WebVitalsClient />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bg via-surface to-bg">
        <div className="container mx-auto px-4 text-center py-24 md:py-20 lg:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {content.title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto mb-4">
            {content.subtitle}
          </p>
          <p className="text-lg text-text-muted/80 max-w-2xl mx-auto mb-8">
            {content.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`/${params.locale}${content.cta1.href}`}
              className="btn-primary"
            >
              {content.cta1.label}
            </Link>
            <Link
              href={`/${params.locale}${content.cta2.href}`}
              className="btn-secondary"
            >
              {content.cta2.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION (3 cards) */}
      <section className={`${SECTION_SPACING.FEATURES} bg-bg`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isThai ? 'บริการ AI ที่เรามอบให้' : 'AI Services We Provide'}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              {isThai
                ? 'เราช่วยคุณตั้งแต่เริ่มต้นจนถึงการใช้งานจริง ครบวงจรในที่เดียว'
                : 'We help you from start to finish - complete AI solutions in one place'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(service => (
              <Link
                key={service.title}
                href={service.href as any}
                className="group bg-surface p-8 rounded-xl border border-surface-3 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted mb-4">{service.description}</p>
                <span className="text-primary text-sm font-medium group-hover:underline">
                  {isThai ? 'เรียนรู้เพิ่มเติม →' : 'Learn More →'}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href={`/${params.locale}/contact`}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              {isThai
                ? 'ต้องการบริการแบบครบวงจร? ติดต่อเรา'
                : 'Need end-to-end service? Contact Us'}
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ECOSYSTEM OVERVIEW */}
      <section className={`${SECTION_SPACING.FEATURES} bg-surface`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              {isThai ? 'ภาพรวม Ecosystem' : 'Ecosystem Overview'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isThai
                ? 'Cerebra: แพลตฟอร์ม AI และ IoT แบบ Private-First'
                : 'Cerebra: The Private-First AI & IoT Platform'}
            </h2>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              {isThai
                ? 'ระบบที่ออกแบบมาเพื่อความเป็นส่วนตัว ยืดหยุ่น และพร้อมใช้งานจริง'
                : 'A system designed for privacy, flexibility, and production-ready deployment'}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-surface-3 bg-bg p-4 shadow-xl">
            <Image
              src="/cerebra-ecosystem-pitch.png"
              alt={
                isThai
                  ? 'Cerebra Ecosystem Overview - แพลตฟอร์ม AI และ IoT'
                  : 'Cerebra Ecosystem Overview - AI & IoT Platform'
              }
              width={1200}
              height={675}
              className="w-full rounded-xl"
              priority
            />
          </div>

          <div className="text-center mt-8">
            <Link
              href={`/${params.locale}/solutions` as any}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              {isThai
                ? 'ดูรายละเอียด Solutions เพิ่มเติม'
                : 'Explore Solutions in Detail'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SOLUTIONS (2 cards - Highlight) */}
      <section className={`${SECTION_SPACING.FEATURES} bg-bg`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              ⭐ {isThai ? 'โซลูชันแนะนำ' : 'Featured Solutions'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              {isThai ? 'โซลูชันที่โดดเด่น' : 'Featured Solutions'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredSolutions.map(solution => (
              <Link
                key={solution.name}
                href={solution.href as any}
                className="group relative overflow-hidden bg-bg p-8 rounded-xl border border-surface-3 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
                />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        ⭐ {solution.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-text-muted mb-4">{solution.description}</p>
                  <span className="text-primary font-semibold group-hover:underline">
                    {isThai ? 'เรียนรู้เพิ่มเติม →' : 'Learn More →'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VERTICAL PLATFORMS (External - Proof of Work) */}
      <section className={`${SECTION_SPACING.FEATURES} bg-surface`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isThai
                ? 'Products เราสร้างและเปิดใช้งานจริง'
                : 'Products We Built and Deployed'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {isThai
                ? 'ผลิตภัณฑ์ที่เราพัฒนาและเปิดใช้งานจริงในตลาด'
                : 'Products we developed and deployed in the market'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {externalProducts.map(product => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface p-6 rounded-xl border border-surface-3 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <product.icon className="w-5 h-5 text-primary" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-text-muted">{product.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRUST SIGNALS */}
      <section className={`${SECTION_SPACING.FEATURES} bg-bg`}>
        <StatsSection />
        <SocialProofSection />
      </section>

      {/* 7. CTA SECTION */}
      <section
        className={`${SECTION_SPACING.CTA} bg-gradient-to-r from-primary to-secondary`}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isThai
              ? 'พร้อมเริ่มโปรเจกต์ AI ของคุณ?'
              : 'Ready to Start Your AI Project?'}
          </h2>
          <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            {isThai
              ? 'มาคุยกันเกี่ยวกับโจทย์ของคุณ เราจะช่วยออกแบบและพัฒนาโซลูชัน AI ที่เหมาะกับธุรกิจของคุณ'
              : "Let's discuss your challenge. We'll help design and develop an AI solution tailored to your business"}
          </p>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
            {isThai
              ? 'ตอบกลับภายใน 24 ชั่วโมง พร้อมแผนเบื้องต้นและขั้นตอนถัดไป'
              : 'Response within 24 hours with initial plan and next steps'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`/${params.locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-opacity-90 transition shadow-lg"
            >
              {isThai ? 'เริ่มโปรเจกต์' : 'Start Project'}
            </Link>
            <Link
              href={`/${params.locale}/contact?type=consultation`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
            >
              {isThai ? 'ปรึกษาฟรี' : 'Free Consultation'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
