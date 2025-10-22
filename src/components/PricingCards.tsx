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

  const getPriceUnit = (unit?: string) => {
    if (!unit || unit === 'one_time') return '';
    if (unit === 'per_env') return isThai ? ' / สภาพแวดล้อม' : ' / environment';
    if (unit === 'per_rollout') return isThai ? ' / รอบการปล่อยใช้งาน' : ' / rollout';
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
          {pkg.highlight && (
            <div className="mb-4 -mt-2 text-center">
              <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                {pkg.highlight}
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
            <h3 className="text-xl font-bold text-text mb-2">{pkg.title}</h3>
            <div className="mb-2">
              <div className="text-sm text-text-muted mb-1">
                {isThai ? 'จาก' : 'From'}
              </div>
              <span className="text-3xl font-bold text-text">
                ฿{pkg.priceFromTHB?.toLocaleString('th-TH')}
              </span>
              <span className="text-sm text-text-muted ml-1">
                {getPriceUnit(pkg.priceUnit)}
              </span>
            </div>
            <p className="text-sm text-text-muted">{getTimeline(pkg.timeline)}</p>
          </div>

          <div className="space-y-3 mb-6">
            {pkg.id === 'kickstart' ? (
              isThai ? [
                'หนึ่ง use-case + feasibility จริง',
                'วัด KPI ชัด + แผน 90 วัน',
                'เดโมเล็กให้เห็นภาพ (ขอบเขตจำกัด)',
              ] : [
                'One use-case + real feasibility',
                'Clear KPI measurement + 90-day plan',
                'Small demo to visualize (limited scope)',
              ]
            ) : pkg.id === 'poc_lab' ? [
              'One scoped use-case, one sandbox datasource',
              'Baseline + scorecard with experiment tracking',
              'Demo + README + docker compose',
            ] : pkg.id === 'pilot_launch' ? (
              isThai ? [
                'ปล่อยใช้งานกับผู้ใช้จริงแบบจำกัด (canary/blue-green)',
                'Monitoring + guardrails พร้อม playbook ถอยกลับ',
                'Onboarding ทีมปฏิบัติการ',
              ] : [
                'Deploy to limited real users (canary/blue-green)',
                'Monitoring + guardrails with rollback playbook',
                'Operations team onboarding',
              ]
            ) : pkg.id === 'production_scale' ? (
              isThai ? [
                'HA multi-AZ + autoscale + backup/restore',
                'IaC เต็มชุด + FinOps budgets/alerts',
                'Runbooks 24/7 + DR drill',
              ] : [
                'HA multi-AZ + autoscale + backup/restore',
                'Full IaC + FinOps budgets/alerts',
                'Runbooks 24/7 + DR drill',
              ]
            ) : (pkg.bullets ?? []).map((bullet, index) => (
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
              {pkg.ctaLabel ?? (isThai ? 'ดูรายละเอียด' : 'View details')}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}