import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import AnimatedGradientText from './animated-gradient-text';
import Particles from './particles';
import SparklesText from './sparkles-text';

interface KeyMetric {
  value: string;
  label: string;
  disclaimer?: string;
}

interface MagicHeroProps {
  eyebrow?: ReactNode;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  actions?: ReactNode;
  metrics?: KeyMetric[];
  children?: ReactNode;
  containerClassName?: string;
  className?: string;
}

const defaultBackdrop =
  'absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.24),_transparent_60%)]';
const defaultOverlay =
  'absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.18),_transparent_65%)]';

const MagicHero = ({
  eyebrow,
  title,
  description,
  align = 'left',
  actions,
  metrics,
  children,
  containerClassName,
  className,
}: MagicHeroProps) => {
  const isCentered = align === 'center' && !children;
  const eyebrowNode =
    typeof eyebrow === 'string' ? (
      <AnimatedGradientText className="text-[0.65rem] uppercase tracking-[0.35em] text-white/70 md:text-xs">
        <span>{eyebrow}</span>
      </AnimatedGradientText>
    ) : (
      eyebrow
    );

  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-white/5 bg-gradient-to-br from-[rgba(8,18,32,0.85)] via-[rgba(7,16,28,0.92)] to-[rgba(5,12,20,0.92)] py-20 text-white sm:py-24',
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(160deg,_rgba(14,75,115,0.45)_0%,_rgba(53,28,117,0.35)_100%)]" />
      <div className={defaultBackdrop} />
      <div className={defaultOverlay} />
      <div className="absolute inset-0 opacity-55">
        <Particles quantity={64} staticity={36} ease={75} />
      </div>

      <div
        className={cn(
          'relative z-10 container mx-auto px-6',
          containerClassName
        )}
      >
        <div
          className={cn(
            'gap-12',
            children
              ? 'grid lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.95fr)]'
              : isCentered
                ? 'mx-auto flex max-w-3xl flex-col items-center text-center'
                : 'max-w-4xl'
          )}
        >
          <div
            className={cn(children ? 'flex flex-col space-y-8' : 'space-y-8')}
          >
            {eyebrowNode && <div>{eyebrowNode}</div>}

            <div
              className={cn(
                'space-y-6',
                isCentered && 'items-center text-center'
              )}
            >
              <h1
                className={cn(
                  'text-4xl font-bold leading-tight md:text-5xl',
                  isCentered ? 'text-balance' : 'text-left'
                )}
              >
                <SparklesText text={title} className="leading-tight" />
              </h1>
              {description && (
                <p className="max-w-3xl text-lg text-white/75 md:text-xl">
                  {description}
                </p>
              )}
            </div>

            {actions && (
              <div className="flex flex-wrap items-center gap-4">{actions}</div>
            )}

            {metrics && metrics.length > 0 && (
              <div
                className={cn(
                  'grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur',
                  metrics.length > 1
                    ? 'sm:grid-cols-2 md:grid-cols-3'
                    : 'sm:grid-cols-1'
                )}
              >
                {metrics.map(metric => (
                  <div
                    key={`${metric.label}-${metric.value}`}
                    className={cn(
                      'space-y-1',
                      isCentered ? 'text-center' : 'text-left'
                    )}
                  >
                    <div className="text-3xl font-semibold md:text-4xl">
                      {metric.value}
                    </div>
                    <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {metric.label}
                    </div>
                    {metric.disclaimer && (
                      <div className="text-[0.65rem] text-white/40 mt-1 normal-case tracking-normal">
                        {metric.disclaimer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {children && (
            <div className="flex flex-col justify-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_64px_rgba(6,19,35,0.45)] backdrop-blur">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MagicHero;
