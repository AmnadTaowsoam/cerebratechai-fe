'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowUpRight, BarChart3, Bot, Brain, Layers, Satellite, Scan } from 'lucide-react';

import { AnimatedGradientText, Particles, ShimmerButton, SparklesText } from '@/components/magicui';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type ServiceItem, getLocalized, services } from '@/data/content';

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
  showTypeSections?: boolean;
};

const currencySymbol = '฿';

const aiCoreAnchors: Array<{ id: string; category: ServiceItem['category'] }> = [
  { id: 'llm-rag', category: 'llm' },
  { id: 'computer-vision', category: 'cv' },
  { id: 'machine-learning', category: 'ml' },
  { id: 'aiot', category: 'aiot' },
];

const acceleratorAnchors: Array<{ id: string; category: ServiceItem['category'] }> = [
  { id: 'platforms', category: 'platform' },
  { id: 'analytics', category: 'analytics' },
];

function groupByCategory(list: ServiceItem[]) {
  const byCategory: Record<ServiceItem['category'], ServiceItem[]> = {
    llm: [],
    cv: [],
    ml: [],
    aiot: [],
    platform: [],
    analytics: [],
  };

  for (const item of list) {
    byCategory[item.category].push(item);
  }

  return byCategory;
}

export function ServicesGrid({ limit, showFilters = false, showTypeSections = false }: ServicesGridProps) {
  const t = useTranslations('services');
  const locale = useLocale();
  const numberLocale = locale.startsWith('th') ? 'th-TH' : 'en-US';
  const basePath = `/${locale.startsWith('th') ? 'th' : 'en'}`;

  const [selectedCategory, setSelectedCategory] = useState<ServiceItem['category'] | 'all'>('all');

  const filteredServices = useMemo(() => {
    let list = services;

    if (!showTypeSections) {
      list = selectedCategory === 'all' ? services : services.filter((service) => service.category === selectedCategory);
    }

    return typeof limit === 'number' ? list.slice(0, limit) : list;
  }, [limit, selectedCategory, showTypeSections]);

  const title = t('title');
  const subtitle = t('subtitle');
  const filterAllLabel = t('filters.all');
  const timelineLabel = t('timeline_label');
  const weeksLabel = t('weeks');
  const viewSolutionLabel = t('view_solution');
  const viewDetailsLabel = t('view_details');
  const startingLabel = t('pricing_label');
  const catalogBadge = t('catalog_badge');

  const getCategoryLabel = (category: ServiceItem['category']) => t(`service_category_labels.${category}` as any);

  const aiCoreServices = useMemo(() => services.filter((s) => s.solutionType === 'ai-core'), []);
  const engineeringAcceleratorsServices = useMemo(
    () => services.filter((s) => s.solutionType === 'engineering-accelerators'),
    []
  );

  const aiCoreByCategory = useMemo(() => groupByCategory(aiCoreServices), [aiCoreServices]);
  const acceleratorsByCategory = useMemo(
    () => groupByCategory(engineeringAcceleratorsServices),
    [engineeringAcceleratorsServices]
  );

  const renderServiceCard = (service: ServiceItem) => {
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
                <CardTitle className="text-xl text-text">{getLocalized(locale, service.title)}</CardTitle>
                <AnimatedGradientText className="mt-2 px-3 py-1 text-[0.55rem] uppercase tracking-[0.3em] text-white/70">
                  {getCategoryLabel(service.category)}
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
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
            <span className="text-xs uppercase tracking-wide text-white/50">{startingLabel}</span>
            <div className="mt-1 text-lg font-semibold text-text">
              {currencySymbol}
              {service.pricing.starting.toLocaleString(numberLocale)}
              <span className="ml-2 text-xs text-white/60">{getLocalized(locale, service.pricing.unit)}</span>
            </div>
          </div>
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
              {timelineLabel} {service.timelineWeeks[0]}-{service.timelineWeeks[1]} {weeksLabel}
            </span>
            <span className="text-primary/80">{viewDetailsLabel}</span>
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
  };

  const renderCategorySection = (id: string, category: ServiceItem['category'], list: ServiceItem[]) => {
    if (list.length === 0) return null;

    return (
      <div id={id} className="scroll-mt-24">
        <div className="mb-6 flex items-center justify-between gap-6">
          <h4 className="text-xl font-semibold text-text md:text-2xl">{getCategoryLabel(category)}</h4>
          <span className="text-xs text-text-muted">{list.length} items</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{list.map(renderServiceCard)}</div>
      </div>
    );
  };

  const renderSolutionTypeSection = (typeKey: 'ai_core' | 'engineering_accelerators') => {
    const isAICore = typeKey === 'ai_core';
    const anchors = isAICore ? aiCoreAnchors : acceleratorAnchors;
    const grouped = isAICore ? aiCoreByCategory : acceleratorsByCategory;

    return (
      <div className="mb-16">
        <div className="mb-8 flex flex-col items-center gap-4 text-center">
          <AnimatedGradientText className="px-4 py-2 text-[0.6rem] uppercase tracking-[0.35em] text-white/80">
            {t(`solution_types.${typeKey}`)}
          </AnimatedGradientText>
          <h3 className="text-2xl font-bold text-text md:text-3xl">
            <SparklesText text={t(`solution_types.${typeKey}`)} className="block text-balance" />
          </h3>
          <p className="mx-auto max-w-3xl text-text-muted">{t(`${typeKey}_description`)}</p>
        </div>

        <div className="space-y-16">
          {anchors.map((a) => {
            const section = renderCategorySection(a.id, a.category, grouped[a.category]);
            return section ? <div key={a.id}>{section}</div> : null;
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-bg py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_60%)]" />
      <div className="absolute inset-0 opacity-30">
        <Particles quantity={56} staticity={28} ease={80} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <AnimatedGradientText className="px-4 py-2 text-[0.6rem] uppercase tracking-[0.35em] text-white/80">
            {catalogBadge}
          </AnimatedGradientText>
          <h2 className="text-3xl font-bold text-text md:text-4xl">
            <SparklesText text={title} className="block text-balance" />
          </h2>
          <p className="mx-auto max-w-3xl text-text-muted">{subtitle}</p>
        </div>

        {showFilters && !showTypeSections && (
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
            {(Object.keys(groupByCategory(services)) as Array<ServiceItem['category']>).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition backdrop-blur ${
                  selectedCategory === category
                    ? 'border-primary/40 bg-primary/20 text-white'
                    : 'border-white/10 bg-white/5 text-white/60 hover:text-white'
                }`}
              >
                {getCategoryLabel(category)}
              </button>
            ))}
          </div>
        )}

        {showTypeSections ? (
          <>
            {renderSolutionTypeSection('ai_core')}
            {renderSolutionTypeSection('engineering_accelerators')}
          </>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filteredServices.map(renderServiceCard)}</div>
        )}
      </div>
    </section>
  );
}
