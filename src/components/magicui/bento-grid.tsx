import { ComponentType, ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-3',
        className
      )}
      role="grid"
      aria-label="Content grid"
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  name: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
  href: string;
  cta: string;
  background?: ReactNode;
  className?: string;
  badge?: ReactNode;
  children?: ReactNode;
  onCtaClick?: () => void;
  colSpan?: string;
  rowSpan?: string;
}

const BentoCard = ({
  name,
  description,
  Icon,
  href,
  cta,
  background,
  className,
  badge,
  children,
  onCtaClick,
  colSpan = 'col-span-1',
  rowSpan = 'row-span-1',
}: BentoCardProps) => (
  <article
    className={cn(
      'group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-surface/60',
      'shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_12px_32px_rgba(8,25,47,0.35)]',
      'transform-gpu transition-all duration-500 hover:scale-[1.02] hover:border-primary/40 hover:shadow-[0_0_0_1px_rgba(14,165,233,0.25),0_18px_48px_rgba(8,25,47,0.55)] active:scale-[0.98]',
      colSpan,
      rowSpan,
      className
    )}
    role="article"
  >
    {background && (
      <div className="absolute inset-0 opacity-70" aria-hidden="true">
        {background}
      </div>
    )}

    <div className="relative z-10 flex flex-1 flex-col gap-4 p-6">
      <div className="flex items-center justify-between">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white"
          aria-hidden="true"
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        {badge}
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white">{name}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
      </div>

      {children}
    </div>

    <div className="relative z-10 border-t border-white/5 p-6">
      <a
        href={href}
        className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
        onClick={onCtaClick}
        aria-label={`${cta} for ${name}`}
      >
        {cta}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>

    <div
      className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      aria-hidden="true"
    />
  </article>
);

export { BentoGrid, BentoCard };
