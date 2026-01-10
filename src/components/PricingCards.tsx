'use client';
import { packagesMap, pricingOrder } from '@/data/packages';
import { pkgPath } from '@/lib/urls';
import Link from 'next/link';
import { Check } from 'lucide-react';

interface PricingCardsProps {
  locale?: string;
}

export default function PricingCards({ locale = 'en' }: PricingCardsProps) {
  const items = pricingOrder.map(id => packagesMap[id]);
  const isThai = locale === 'th';
  const priceLocale = isThai ? 'th-TH' : 'en-US';

  const getText = (value?: string, valueTh?: string) => {
    if (isThai && valueTh) return valueTh;
    return value ?? '';
  };

  const getList = (value?: string[], valueTh?: string[]) => {
    if (isThai && valueTh && valueTh.length > 0) return valueTh;
    return value ?? [];
  };

  const getPriceUnit = (unit?: string) => {
    if (!unit || unit === 'one_time') return '';
    if (unit === 'per_env') return isThai ? ' / สภาพแวดล้อม' : ' / environment';
    if (unit === 'per_rollout') return isThai ? ' / rollout' : ' / rollout';
    if (unit === 'monthly') return isThai ? ' / เดือน' : ' / month';
    return '';
  };

  const getTimeline = (timeline?: string) => {
    if (!timeline) return '';
    return isThai ? `${timeline} สัปดาห์` : `${timeline} weeks`;
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map(pkg => (
        <div
          key={pkg.id}
          className={`rounded-2xl border border-white/10 bg-surface/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_64px_rgba(8,23,45,0.45)] relative ${
            pkg.highlight ? 'ring-2 ring-primary/50' : ''
          }`}
        >
          {(pkg.highlight || pkg.highlightTh) && (
            <div className="mb-4 -mt-2 text-center">
              <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                {getText(pkg.highlight, pkg.highlightTh)}
              </span>
            </div>
          )}

          {pkg.recommendAssurance && (
            <div className="mb-4 -mt-2 text-center">
              <span className="inline-block rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-300">
                {isThai ? 'แนะนำ: Assurance Sprint (+฿260k)' : 'Recommended: Assurance Sprint (+฿260k)'}
              </span>
            </div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-text mb-2">{getText(pkg.title, pkg.titleTh)}</h3>
            <div className="mb-2">
              <div className="text-sm text-text-muted mb-1">
                {isThai ? 'เริ่มที่' : 'From'}
              </div>
              <span className="text-3xl font-bold text-text">
                ฿{pkg.priceFromTHB?.toLocaleString(priceLocale)}
              </span>
              <span className="text-sm text-text-muted ml-1">
                {getPriceUnit(pkg.priceUnit)}
              </span>
            </div>
            <p className="text-sm text-text-muted">{getTimeline(pkg.timeline)}</p>
          </div>

          <div className="space-y-3 mb-6">
            {getList(pkg.bullets, pkg.bulletsTh).map((bullet, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-text-muted">{bullet}</span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href={pkgPath(pkg.id, locale) as any}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-medium text-white transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
            >
              {getText(pkg.ctaLabel, pkg.ctaLabelTh) || (isThai ? 'ดูรายละเอียด' : 'View details')}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
