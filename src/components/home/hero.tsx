'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { AnimatedStats } from '@/components/landing/animated-stats';
import { useAnalytics } from '@/lib/hooks/use-analytics';

const heroStats = [
  { value: 50, suffix: '+', label: 'POCs Delivered' },
  { value: 8, suffix: ' weeks', label: 'Average Delivery' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

export function Hero() {
  const locale = useLocale();
  const router = useRouter();
  const { trackCtaClick } = useAnalytics();
  const isThai = locale.startsWith('th');
  const basePath = `/${isThai ? 'th' : 'en'}`;

  const handleCtaClick = (ctaId: string, href: string) => {
    trackCtaClick(`hero-${ctaId}`, `Hero CTA ${ctaId}`);
    router.push(`${basePath}${href}` as any);
  };

  return (
    <section className="relative overflow-hidden bg-bg text-white min-h-[90vh] flex items-center">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(8,25,47,0.98)] via-[rgba(12,18,32,0.95)] to-[rgba(9,17,30,0.98)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(14,165,233,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(99,102,241,0.12),_transparent_50%)]" />
      
      {/* Mesh grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="mx-auto flex max-w-5xl flex-col items-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-white/90 md:text-xs">
              {isThai ? 'Boutique AI Studio' : 'Boutique AI Studio'}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-[1.15] text-white md:text-6xl lg:text-7xl">
            Building Intelligence for Thailand's Future
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl lg:text-2xl">
            {isThai
              ? 'เราสร้างระบบ AI และ full-stack จาก Edge ถึง Cloud ที่พร้อมปล่อยใช้งานจริง พร้อม guardrails และ playbooks ครบชุด'
              : 'We build AI & full-stack solutions from Edge to Cloud with guardrails and playbooks, ready for production deployment.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-6 pt-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-2xl px-8 py-6 text-lg font-semibold shadow-2xl shadow-primary/20"
              onClick={() => handleCtaClick('explore', '/solutions')}
            >
              {isThai ? 'สำรวจโซลูชัน' : 'Explore Solutions'}
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-2xl border-white/20 bg-white/5 px-8 py-6 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-white/10"
              onClick={() => handleCtaClick('contact', '/contact')}
            >
              {isThai ? 'ติดต่อเรา' : 'Contact Us'}
            </Button>
          </div>

          {/* Animated Stats Section */}
          <div className="w-full pt-12">
            <AnimatedStats stats={heroStats} />
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
