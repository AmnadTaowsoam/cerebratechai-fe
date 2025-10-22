'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  AnimatedGradientText,
  Particles,
  ShimmerButton,
  SparklesText,
} from '@/components/magicui';
import { useAnalytics } from '@/lib/hooks/use-analytics';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { homeStats, heroCtas, formatMetric } from '@/data/home';

export function HeroSection() {
  const locale = useLocale();
  const router = useRouter();
  const { trackCtaClick } = useAnalytics();
  const isThai = locale.startsWith('th');
  const basePath = `/${isThai ? 'th' : 'en'}`;

  const handleCtaClick = (ctaId: string, href: string) => {
    trackCtaClick(`hero-${ctaId}`, `Hero CTA ${ctaId}`);
    router.push(`${basePath}${href}` as any);
  };

  const heroTitle = isThai
    ? 'เปลี่ยนปัญหาเป็นระบบ AI พร้อมใช้งานจริง'
    : 'Turn Your Pain Points into Production-Ready AI Systems';
  
  const heroSubtitle = isThai
    ? 'เราสร้างระบบ AI และ full-stack จาก Edge ถึง Cloud ที่พร้อมปล่อยใช้งานจริง พร้อม guardrails และ playbooks ครบชุด'
    : 'We build AI & full-stack solutions from Edge to Cloud with guardrails and playbooks, ready for production deployment.';
  
  const kpiChips = [
    {
      value: `${homeStats.pocsDelivered}+`,
      label: isThai ? 'POCs ส่งมอบ' : 'POCs Delivered',
    },
    {
      value: `${homeStats.avgWeeks}`,
      label: isThai ? 'สัปดาห์เฉลี่ย' : 'Weeks Avg',
    },
    {
      value: formatMetric(homeStats.startingTHB, 'currency', isThai ? 'th' : 'en'),
      label: isThai ? 'เริ่มต้น' : 'Starting',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-bg text-white min-h-[85vh] flex items-center">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(8,25,47,0.98)] via-[rgba(12,18,32,0.95)] to-[rgba(9,17,30,0.98)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(14,165,233,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(99,102,241,0.12),_transparent_50%)]" />
      
      {/* Mesh grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
      
      <div className="absolute inset-0 opacity-40">
        <Particles quantity={60} staticity={40} ease={70} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="mx-auto flex max-w-5xl flex-col items-center space-y-8">
          {/* Badge */}
          <AnimatedGradientText className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <CheckCircle className="h-4 w-4 flex-shrink-0 text-cyan-400" />
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-white/90 md:text-xs">
              {isThai ? 'Boutique AI Studio' : 'Boutique AI Studio'}
            </span>
          </AnimatedGradientText>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-[1.15] text-white md:text-6xl lg:text-7xl">
            <SparklesText 
              text={heroTitle} 
              className="block text-balance leading-[1.15]" 
              sparklesCount={8}
            />
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl lg:text-2xl">
            {heroSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-6 pt-4 sm:flex-row">
            {heroCtas.map((cta, index) => (
              index === 0 ? (
                <ShimmerButton
                  key={cta.id}
                  type="button"
                  className="px-6 py-5 text-lg font-semibold shadow-2xl shadow-primary/20"
                  onClick={() => handleCtaClick(cta.id, cta.href)}
                >
                  <span>{isThai ? cta.labelTh : cta.labelEn}</span>
                  <ArrowRight className="ml-3 h-6 w-6" />
                </ShimmerButton>
              ) : (
                <Button
                  key={cta.id}
                  variant="outline"
                  size="lg"
                  className="group rounded-xl border-white/20 bg-white/5 px-12 py-5 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-white/10"
                  onClick={() => handleCtaClick(cta.id, cta.href)}
                >
                  {isThai ? cta.labelTh : cta.labelEn}
                  <ArrowRight className="ml-3 inline h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              )
            ))}
          </div>

          {/* KPI Chips - More premium look */}
          <div className="grid w-full max-w-4xl grid-cols-1 gap-6 pt-8 sm:grid-cols-3">
            {kpiChips.map((chip, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 transition-opacity group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-transparent group-hover:opacity-100" />
                
                <div className="relative space-y-2">
                  <div className="text-4xl font-bold text-white transition-all group-hover:scale-105 md:text-5xl">
                    {chip.value}
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition-colors group-hover:text-white/80">
                    {chip.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Small trust note */}
          <p className="pt-4 text-xs text-white/40">
            {isThai ? '* ข้อมูลจากโครงการที่ส่งมอบแล้ว' : '* Based on delivered projects'}
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
    </section>
  );
}
