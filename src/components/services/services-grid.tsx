'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {
  Brain,
  Scan,
  Satellite,
  Bot,
  Layers,
  BarChart3,
  ArrowUpRight,
} from 'lucide-react';

import {
  AnimatedGradientText,
  Particles,
  ShimmerButton,
  SparklesText,
} from '@/components/magicui';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services, getLocalized, type ServiceItem } from '@/data/content';

const categoryLabels: Record<ServiceItem['category'], { en: string; th: string }> = {
  ml: { en: 'Machine Learning', th: 'การเรียนรู้ของเครื่อง' },
  cv: { en: 'Computer Vision', th: 'คอมพิวเตอร์วิทัศน์' },
  aiot: { en: 'AIoT', th: 'AIoT' },
  llm: { en: 'LLM & RAG', th: 'LLM & RAG' },
  platform: { en: 'Platforms', th: 'แพลตฟอร์ม' },
  analytics: { en: 'Analytics', th: 'การวิเคราะห์ข้อมูล' },
};

const iconMap = {
  brain: Brain,
  scan: Scan,
  satellite: Satellite,
  bot: Bot,
  layers: Layers,
  barChart: BarChart3,
} as const;

type ServicesGridProps = {
  limit?: number;
  showFilters?: boolean;
};

export function ServicesGrid({ limit, showFilters = false }: ServicesGridProps) {
  const locale = useLocale();
  const t = useTranslations('services');
  const [selectedCategory, setSelectedCategory] = useState<ServiceItem['category'] | 'all'>('all');
  const basePath = `/${locale.startsWith('th') ? 'th' : 'en'}`;

  const filteredServices = useMemo(() => {
    const list =
      selectedCategory === 'all'
        ? services
        : services.filter((service) => service.category === selectedCategory);
    return typeof limit === 'number' ? list.slice(0, limit) : list;
  }, [limit, selectedCategory]);

  const title = locale.startsWith('th') ? 'โซลูชัน' : 'Solutions';
  const subtitle = locale.startsWith('th') 
    ? 'โซลูชันแบบแพ็กเกจพร้อมส่งมอบ' 
    : 'Productized solutions ready to ship';
  const filterAllLabel = locale.startsWith('th') ? 'ทั้งหมด' : 'All';
  const pricingLabel = locale.startsWith('th') ? 'เริ่มต้นที่' : 'Starting from';
  const timelineLabel = locale.startsWith('th') ? 'ระยะเวลา' : 'Timeline';
  const weeksLabel = locale.startsWith('th') ? 'สัปดาห์' : 'weeks';
  const viewSolutionLabel = locale.startsWith('th') ? 'ดูรายละเอียดโซลูชัน' : 'View solution';

  return (
    <section className="relative overflow-hidden bg-bg py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_60%)]" />
      <div className="absolute inset-0 opacity-30">
        <Particles quantity={56} staticity={28} ease={80} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <AnimatedGradientText className="px-4 py-2 text-[0.6rem] uppercase tracking-[0.35em] text-white/80">
            {locale.startsWith('th') ? 'แคตตาล็อกโซลูชัน' : 'SOLUTIONS CATALOG'}
          </AnimatedGradientText>
          <h2 className="text-3xl font-bold text-text md:text-4xl">
            <SparklesText text={title} className="block text-balance" />
          </h2>
          <p className="mx-auto max-w-3xl text-text-muted">{subtitle}</p>
        </div>

        {showFilters && (
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition backdrop-blur ${
                selectedCategory === 'all'
                  ? 'border-primary/40 bg-primary/20 text-white'
                  : 'border-white/10 bg-white/5 text-white/60 hover:text-white'
              }`}
            >
              {filterAllLabel}
            </button>
            {Object.entries(categoryLabels).map(([category, label]) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as ServiceItem['category'])}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition backdrop-blur ${
                  selectedCategory === category
                    ? 'border-primary/40 bg-primary/20 text-white'
                    : 'border-white/10 bg-white/5 text-white/60 hover:text-white'
                }`}
              >
                {locale.startsWith('th') ? label.th : label.en}
              </button>
            ))}
          </div>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card
                key={service.slug}
                className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-surface/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_64px_rgba(8,23,45,0.45)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-600 p-3 text-white shadow-[0_10px_25px_rgba(12,18,32,0.45)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-text">
                          {getLocalized(locale, service.title)}
                        </CardTitle>
                        <AnimatedGradientText className="mt-2 px-3 py-1 text-[0.55rem] uppercase tracking-[0.3em] text-white/70">
                          {locale.startsWith('th')
                            ? categoryLabels[service.category].th
                            : categoryLabels[service.category].en}
                        </AnimatedGradientText>
                      </div>
                    </div>
                    {service.badges?.map((badge, index) => (
                      <AnimatedGradientText
                        key={`${badge.en}-${index}`}
                        className="px-3 py-1 text-[0.55rem] uppercase tracking-[0.3em] text-white/80"
                      >
                        {getLocalized(locale, badge)}
                      </AnimatedGradientText>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="relative flex flex-1 flex-col gap-4 text-sm text-text-muted">
                  <p>{getLocalized(locale, service.summary)}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        <span>{getLocalized(locale, feature)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-xs text-white/70">
                    <span>
                      {pricingLabel} ฿{service.pricing.starting.toLocaleString('en-US')}
                    </span>
                    <span>
                      {timelineLabel} {service.timelineWeeks[0]}–{service.timelineWeeks[1]} {weeksLabel}
                    </span>
                  </div>
                  <ShimmerButton asChild className="mt-4 justify-start gap-2 px-8 py-4 text-sm">
                    <Link href={`${basePath}/solutions/${service.slug}` as any} className="flex items-center gap-2">
                      {viewSolutionLabel}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </ShimmerButton>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
