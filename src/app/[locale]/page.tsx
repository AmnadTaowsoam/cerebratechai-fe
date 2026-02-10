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
  Zap,
  Shield,
  Globe,
  CheckCircle2,
  Eye,
  Wifi,
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
import {
  MagicHero,
  Particles,
  ShimmerButton,
  AnimatedGradientText,
} from '@/components/magicui';
import { EcosystemVisualization } from '@/components/landing/ecosystem-visualization';
import { ScenarioMarquee } from '@/components/landing/scenario-marquee';
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
  const locale = isThai ? 'th' : 'en';

  const heroContent = {
    en: {
      title: 'AI Solutions Partner for Thai Enterprises',
      subtitle: 'From POC to Production — We Build AI That Works',
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
      subtitle: 'จาก POC สู่ Production — เราสร้าง AI ที่ใช้งานได้จริง',
      description:
        'พร้อมเปลี่ยนธุรกิจของคุณด้วย AI หรือยัง? มาคุยกันเกี่ยวกับโปรเจกต์ของคุณและสร้างโซลูชันที่ให้ผลลัพธ์จริง',
      cta1: { label: 'เริ่มโปรเจกต์ AI', href: '/contact' },
      cta2: { label: 'ปรึกษาฟรี', href: '/contact?type=consultation' },
    },
  };

  const content = isThai ? heroContent.th : heroContent.en;

  const services = [
    {
      title: 'AI Consulting',
      description: isThai
        ? 'ประเมินความพร้อม วางกลยุทธ์ และสร้าง POC/Pilot อย่างมืออาชีพ'
        : 'Assess readiness, build strategy, and deliver professional POC/Pilot',
      icon: Brain,
      href: `/${locale}/services`,
      gradient: 'from-violet-500/20 to-purple-500/20',
      iconGradient: 'from-violet-400 to-purple-500',
    },
    {
      title: 'AI Development',
      description: isThai
        ? 'พัฒนา AI เฉพาะทาง เชื่อมต่อระบบเดิม พร้อมฝึกอบรมทีม'
        : 'Build custom AI, integrate with existing systems, and train your team',
      icon: Cpu,
      href: `/${locale}/services`,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconGradient: 'from-blue-400 to-cyan-500',
    },
    {
      title: 'AI Deployment',
      description: isThai
        ? 'MLOps, บำรุงรักษา, Support ระยะยาว พร้อม SLA'
        : 'MLOps, maintenance, long-term support with SLA guarantee',
      icon: Layers,
      href: `/${locale}/services`,
      gradient: 'from-emerald-500/20 to-teal-500/20',
      iconGradient: 'from-emerald-400 to-teal-500',
    },
  ];

  const featuredSolutions = [
    {
      name: 'ChartSentinel',
      description: isThai
        ? 'AI-SPC Quality Control — ลดของเสีย 85%, ตรวจจับ OOC เรียลไทม์'
        : 'AI-SPC Quality Control — Reduce waste by 85%, real-time OOC detection',
      icon: BarChart,
      href: `/${locale}/products/chartsentinel`,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      stats: [
        { value: '-85%', label: isThai ? 'ของเสีย' : 'Waste' },
        { value: '<1s', label: isThai ? 'ตรวจจับ' : 'Detection' },
      ],
    },
    {
      name: 'CerebraForge',
      description: isThai
        ? 'Enterprise RAG Platform — Document AI, Knowledge Management ครบวงจร'
        : 'Enterprise RAG Platform — Full Document AI & Knowledge Management',
      icon: Layers,
      href: `/${locale}/products/cerebraforge`,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      stats: [
        { value: '99%', label: isThai ? 'ความแม่นยำ' : 'Accuracy' },
        { value: '30+', label: isThai ? 'ฟอร์แมต' : 'Formats' },
      ],
    },
  ];

  const specializedModules = [
    {
      name: 'CerebraLoLM',
      description: isThai
        ? 'Private Local LLM Inference Engine — รัน AI ภาษาไทยในองค์กร ปลอดภัย 100%'
        : 'Private Local LLM Inference Engine — Run secure AI on-premise',
      icon: Brain,
      href: `/${locale}/products/cerebralolm`,
      color: 'from-blue-400 to-indigo-500',
    },
    {
      name: 'CerebraCV',
      description: isThai
        ? 'Advanced Computer Vision Suite — ตรวจจับความปลอดภัยและวิเคราะห์วิดีโอ'
        : 'Advanced Computer Vision Suite — Safety detection & video analytics',
      icon: Eye,
      href: `/${locale}/products/cerebracv`,
      color: 'from-emerald-400 to-teal-500',
    },
    {
      name: 'CerebraIoT',
      description: isThai
        ? 'Industrial IoT Mesh — เชื่อมต่อเครื่องจักรและเซ็นเซอร์นับพันตัว'
        : 'Industrial IoT Mesh — Connect thousands of devices & sensors',
      icon: Wifi,
      href: `/${locale}/solutions`,
      color: 'from-cyan-400 to-sky-500',
    },
  ];

  const capabilities = [
    {
      icon: Globe,
      title: isThai ? 'Private-First' : 'Private-First',
      desc: isThai ? 'ข้อมูลอยู่ในมือคุณ' : 'Your data stays yours',
    },
    {
      icon: Zap,
      title: isThai ? 'Edge + Cloud' : 'Edge + Cloud',
      desc: isThai ? 'ยืดหยุ่นทุกสถาปัตยกรรม' : 'Flexible architecture',
    },
    {
      icon: Shield,
      title: isThai ? 'Production-Ready' : 'Production-Ready',
      desc: isThai ? 'ไม่ใช่แค่ Demo' : 'Not just a demo',
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

      {/* ─── 1. HERO ─── */}
      <section className="relative overflow-hidden bg-bg">
        {/* ambient glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(14,165,233,0.12),transparent)]" />
        <div className="absolute inset-0 opacity-20">
          <Particles quantity={50} staticity={25} ease={80} />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-28 md:py-32 lg:py-40 text-center">
          <AnimatedGradientText className="mb-8 inline-flex px-5 py-2 text-xs font-medium uppercase tracking-widest text-white/80 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            {isThai
              ? '575+ Scenarios ทดสอบแล้ว • 30+ Microservices'
              : '575+ Proven Scenarios • 30+ Microservices'}
          </AnimatedGradientText>

          <h1 className="mx-auto max-w-5xl text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent drop-shadow-sm">
              {content.title}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl sm:text-2xl font-light text-text-muted leading-relaxed">
            {content.subtitle}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-text-muted/70 leading-relaxed">
            {content.description}
          </p>

          {/* capability chips */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {capabilities.map(cap => (
              <div
                key={cap.title}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-text-muted backdrop-blur hover:bg-white/10 transition-colors"
              >
                <cap.icon className="h-4 w-4 text-primary" />
                <span className="font-semibold text-text">{cap.title}</span>
                <span className="text-text-muted/40 hidden sm:inline">|</span>
                <span className="hidden sm:inline opacity-80">{cap.desc}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-5">
            <ShimmerButton
              asChild
              className="px-8 py-3.5 text-sm font-semibold sm:text-base w-full sm:w-auto min-w-[200px]"
            >
              <Link
                href={`/${locale}${content.cta1.href}` as any}
                className="inline-flex items-center justify-center gap-2"
              >
                {content.cta1.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </ShimmerButton>
            <Link
              href={`/${locale}${content.cta2.href}` as any}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold sm:text-base text-text backdrop-blur transition hover:bg-white/10 hover:border-white/25 w-full sm:w-auto min-w-[200px]"
            >
              {content.cta2.label}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. SERVICES (3 premium cards) ─── */}
      <section className={`${SECTION_SPACING.FEATURES} relative bg-bg`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.06),transparent_50%)]" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">
              {isThai ? 'บริการ AI ครบวงจร' : 'End-to-End AI Services'}
            </h2>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              {isThai
                ? 'เราช่วยคุณตั้งแต่เริ่มต้นจนถึงการใช้งานจริง ครบวงจรในที่เดียว'
                : 'We help you from start to finish — complete AI solutions in one place'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(service => (
              <Link
                key={service.title}
                href={service.href as any}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                {/* hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition duration-500 group-hover:opacity-100`}
                />
                <div className="relative z-10">
                  <div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.iconGradient} shadow-lg ring-1 ring-white/20`}
                  >
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base text-text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors">
                    {isThai ? 'เรียนรู้เพิ่มเติม' : 'Learn More'}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. ECOSYSTEM OVERVIEW ─── */}
      <section className={`${SECTION_SPACING.FEATURES} relative bg-surface`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.08),transparent_60%)]" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
              {isThai ? 'ECOSYSTEM' : 'ECOSYSTEM'}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">
              {isThai
                ? 'Cerebra: แพลตฟอร์ม AI และ IoT แบบ Private-First'
                : 'Cerebra: The Private-First AI & IoT Platform'}
            </h2>
            <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
              {isThai
                ? '30+ โมดูลเชื่อมต่อกันแบบ Lego Blocks — เลือกเฉพาะที่ต้องการ ไม่ต้องสร้างใหม่ทั้งหมด'
                : '30+ modules that connect like Lego Blocks — pick only what you need, no rebuilding'}
            </p>
          </div>

          <EcosystemVisualization />
          <div className="mt-10 text-center">
            <Link
              href={`/${locale}/solutions` as any}
              className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-8 py-4 font-semibold text-primary transition hover:bg-primary/20"
            >
              {isThai
                ? 'ดู Solutions ทั้งหมด 575+ Scenarios'
                : 'Explore All 575+ Solution Scenarios'}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <ScenarioMarquee />

      {/* ─── 4. FEATURED PRODUCTS (premium cards) ─── */}
      <section className={`${SECTION_SPACING.FEATURES} relative bg-bg`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(14,165,233,0.06),transparent_50%)]" />
        <div className="absolute inset-0 opacity-15">
          <Particles quantity={25} staticity={40} ease={90} />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text">
              {isThai ? 'ผลิตภัณฑ์เด่นของเรา' : 'Our Flagship Products'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredSolutions.map(solution => (
              <Link
                key={solution.name}
                href={solution.href as any}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_24px_64px_rgba(8,23,45,0.45)]"
              >
                {/* gradient stripe top */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${solution.gradient}`}
                />
                {/* hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-500`}
                />
                <div className="relative p-8 md:p-10">
                  <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.gradient} shadow-lg ring-1 ring-white/10`}
                    >
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-text group-hover:text-primary transition-colors mb-2">
                        {solution.name}
                      </h3>
                      <p className="text-lg text-text-muted leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  {/* stats row */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {solution.stats.map(stat => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-white/5 bg-white/5 px-6 py-4 text-center"
                      >
                        <div className="text-2xl font-bold text-primary mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 text-base font-semibold text-primary/80 group-hover:text-primary transition-colors">
                    {isThai ? 'ดูรายละเอียด' : 'View Details'}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. DEPLOYED PRODUCTS (proof-of-work) ─── */}
      <section className={`${SECTION_SPACING.FEATURES} relative bg-surface`}>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              {isThai
                ? 'โมดูลเสริมประสิทธิภาพ'
                : 'Specialized AI Modules'}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              {isThai
                ? 'ต่อยอดขีดความสามารถด้วยโมดูลเฉพาะทางสำหรับทุกโจทย์ธุรกิจ'
                : 'Extend capabilities with specialized modules for every business challenge'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specializedModules.map(product => (
              <Link
                key={product.name}
                href={product.href as any}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg/60 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${product.color} shadow-md`}
                  >
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-text-muted/40 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors mb-2">
                  {product.name}
                </h3>
                <p className="text-base text-text-muted leading-relaxed">
                  {product.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. TRUST SIGNALS ─── */}
      <section className={`${SECTION_SPACING.FEATURES} bg-bg`}>
        <StatsSection />
        <SocialProofSection />
      </section>

      {/* ─── 7. CTA ─── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 opacity-20">
          <Particles quantity={30} staticity={30} ease={70} />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {isThai
              ? 'พร้อมเริ่มโปรเจกต์ AI ของคุณ?'
              : 'Ready to Start Your AI Project?'}
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-4 max-w-3xl mx-auto font-light">
            {isThai
              ? 'มาคุยกันเกี่ยวกับโจทย์ของคุณ เราจะช่วยออกแบบและพัฒนาโซลูชัน AI ที่เหมาะกับธุรกิจของคุณ'
              : "Let's discuss your challenge. We'll help design and develop an AI solution tailored to your business"}
          </p>
          <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto">
            {isThai
              ? 'ตอบกลับภายใน 24 ชั่วโมง พร้อมแผนเบื้องต้นและขั้นตอนถัดไป'
              : 'Response within 24 hours with initial plan and next steps'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-base font-bold text-primary shadow-xl transition transform hover:scale-105 hover:bg-white/90"
            >
              <CheckCircle2 className="h-5 w-5" />
              {isThai ? 'เริ่มโปรเจกต์' : 'Start Project'}
            </Link>
            <Link
              href={`/${locale}/contact?type=consultation`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-10 py-4 text-base font-bold text-white transition hover:bg-white/10 hover:border-white/50"
            >
              {isThai ? 'ปรึกษาฟรี' : 'Free Consultation'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
