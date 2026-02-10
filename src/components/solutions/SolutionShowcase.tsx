'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Factory,
  FileText,
  Headphones,
  Leaf,
  MessageSquare,
  Shield,
  Utensils,
  Zap,
} from 'lucide-react';

import {
  AnimatedGradientText,
  Particles,
  SparklesText,
} from '@/components/magicui';
import {
  type IndustryGroup,
  type ShowcaseSolution,
  getFilteredSolutions,
  industryGroups,
} from '@/data/solutions-showcase';

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function loc(locale: string, v: { en: string; th: string }) {
  return locale.startsWith('th') ? v.th : v.en;
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function IndustryTabs({
  groups,
  active,
  onSelect,
}: {
  groups: IndustryGroup[];
  active: string;
  onSelect: (key: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: dir === 'left' ? -200 : 200,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative mt-10">
      {/* scroll arrows – desktop */}
      <button
        onClick={() => scroll('left')}
        className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/10 bg-surface/80 p-1.5 text-white/60 backdrop-blur hover:text-white md:flex"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/10 bg-surface/80 p-1.5 text-white/60 backdrop-blur hover:text-white md:flex"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-2 overflow-x-auto px-1 py-2 md:flex-wrap md:justify-center md:overflow-visible"
      >
        {groups.map((g) => (
          <button
            key={g.key}
            onClick={() => onSelect(g.key)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition backdrop-blur ${
              active === g.key
                ? 'border-primary/40 bg-primary/20 text-white shadow-lg shadow-primary/10'
                : 'border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white'
            }`}
          >
            <span className="mr-1.5">{g.icon}</span>
            {loc('en', g.label)}
          </button>
        ))}
      </div>
    </div>
  );
}

function LegoBlockBadge({ block }: { block: { id: string; name: string; color: string } }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md bg-gradient-to-r ${block.color} px-2 py-0.5 text-[0.65rem] font-semibold text-white shadow-sm`}
    >
      {block.name}
    </span>
  );
}

function SolutionCard({
  solution,
  locale,
}: {
  solution: ShowcaseSolution;
  locale: string;
}) {
  const basePath = `/${locale.startsWith('th') ? 'th' : 'en'}`;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_64px_rgba(8,23,45,0.45)]`}
    >
      {/* gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 transition duration-500 group-hover:opacity-100`}
      />

      <div className="relative flex flex-1 flex-col gap-4 p-6">
        {/* industry badge */}
        <div className="flex items-center justify-between">
          <AnimatedGradientText className="px-3 py-1 text-[0.55rem] uppercase tracking-[0.3em] text-white/70">
            {loc(locale, industryGroups.find((g) => g.key === solution.industryGroup)?.label ?? { en: '', th: '' })}
          </AnimatedGradientText>
        </div>

        {/* title */}
        <div>
          <h3 className="text-lg font-bold text-text md:text-xl">
            {loc(locale, solution.title)}
          </h3>
          <p className="mt-1 text-sm text-text-muted">
            {loc(locale, solution.subtitle)}
          </p>
        </div>

        {/* description */}
        <p className="text-sm leading-relaxed text-text-muted/80">
          {loc(locale, solution.description)}
        </p>

        {/* lego blocks */}
        <div>
          <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-white/40">
            {locale.startsWith('th') ? 'Cerebra Lego Blocks' : 'Built with Lego Blocks'}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {solution.legoBlocks.map((block) => (
              <LegoBlockBadge key={block.id} block={block} />
            ))}
          </div>
        </div>

        {/* business value */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {solution.businessValue.map((metric, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/5 bg-white/5 px-3 py-2 text-center"
            >
              <div className="text-lg font-bold text-primary">{metric.value}</div>
              <div className="text-[0.65rem] text-white/50">
                {loc(locale, metric.label)}
              </div>
            </div>
          ))}
        </div>

        {/* features */}
        <ul className="space-y-1.5">
          {solution.highlightFeatures.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {loc(locale, f)}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-auto pt-2">
          <Link
            href={`${basePath}/contact` as any}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary/80 transition hover:text-primary"
          >
            {locale.startsWith('th') ? 'ปรึกษาทีม' : 'Talk to our team'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export function SolutionShowcase() {
  const locale = useLocale();
  const [activeGroup, setActiveGroup] = useState('all');

  const solutions = useMemo(
    () => getFilteredSolutions(activeGroup),
    [activeGroup]
  );

  const activeIndustry = industryGroups.find((g) => g.key === activeGroup);
  const totalScenarios = activeIndustry?.solutionCount ?? 575;

  const isThai = locale.startsWith('th');

  return (
    <section className="relative overflow-hidden bg-bg py-24">
      {/* background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08),_transparent_60%)]" />
      <div className="absolute inset-0 opacity-20">
        <Particles quantity={40} staticity={30} ease={80} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <AnimatedGradientText className="px-4 py-2 text-[0.6rem] uppercase tracking-[0.35em] text-white/80">
            {isThai
              ? `${totalScenarios}+ Scenarios ที่ทดสอบแล้ว`
              : `${totalScenarios}+ Proven Scenarios`}
          </AnimatedGradientText>

          <h2 className="text-3xl font-bold text-text md:text-4xl">
            <SparklesText
              text={
                isThai
                  ? 'Solutions สร้างจาก Cerebra Lego Blocks'
                  : 'Solutions Built with Cerebra Lego Blocks'
              }
              className="block text-balance"
            />
          </h2>

          <p className="mx-auto max-w-3xl text-text-muted">
            {isThai
              ? 'แต่ละ solution ประกอบจากโมดูล Cerebra ที่เชื่อมต่อกันแบบ plug-and-play — เลือกอุตสาหกรรมที่สนใจ'
              : 'Each solution is composed of Cerebra modules that connect plug-and-play — select an industry to explore'}
          </p>
        </div>

        {/* filter tabs */}
        <IndustryTabs
          groups={industryGroups}
          active={activeGroup}
          onSelect={setActiveGroup}
        />

        {/* solutions grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((s) => (
            <SolutionCard key={s.slug} solution={s} locale={locale} />
          ))}
        </div>

        {/* bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-text-muted">
            {isThai
              ? 'ต้องการ solution ที่ออกแบบเฉพาะสำหรับธุรกิจของคุณ?'
              : 'Need a solution tailored for your business?'}
          </p>
          <Link
            href={`/${locale.startsWith('th') ? 'th' : 'en'}/contact` as any}
            className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-primary/30 bg-primary/10 px-8 py-3 font-semibold text-primary transition hover:bg-primary/20"
          >
            <MessageSquare className="h-5 w-5" />
            {isThai ? 'ปรึกษาทีม Cerebra' : 'Talk to Cerebra Team'}
          </Link>
        </div>
      </div>
    </section>
  );
}
