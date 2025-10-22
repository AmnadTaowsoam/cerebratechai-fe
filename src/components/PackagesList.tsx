import { packagesMap, packagesOrder, globalTerms } from '@/data/packages';
import { pkgPath } from '@/lib/urls';
import Link from 'next/link';
import { CheckCircle, XCircle, Package, Plus } from 'lucide-react';

function Section({ title, children, icon: Icon }: { title: string; children: React.ReactNode; icon?: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="rounded-xl border border-white/10 bg-surface/50 p-4">
      <h4 className="flex items-center gap-2 text-lg font-semibold text-text mb-3">
        {Icon && <Icon className="h-5 w-5" />}
        {title}
      </h4>
      <div className="text-text-muted">{children}</div>
    </div>
  );
}

interface PackagesListProps {
  locale?: string;
}

export default function PackagesList({ locale = 'en' }: PackagesListProps) {
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
    <div className="space-y-8">
      {packagesOrder.map(id => {
        const p = packagesMap[id];
        const isCare = p.postLaunch;
        const isAssurance = p.crossCutting;

        return (
          <div key={id} className="rounded-2xl border border-white/10 bg-surface/60 p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-text">{p.title}</h3>
                <p className="mt-1 text-text-muted">
                  {p.priceFromTHB
                    ? `${isThai ? 'จาก' : 'From'} ฿${p.priceFromTHB.toLocaleString('th-TH')}${getPriceUnit(p.priceUnit)}`
                    : (isThai ? 'ดูแพ็กเกจด้านล่าง' : 'See tiers below')}
                  {p.timeline ? ` · ${getTimeline(p.timeline)}` : ''}
                </p>
                {isAssurance && (
                  <p className="mt-1 text-xs text-amber-300">⚠️ Recommended before go-live (Pilot/Production)</p>
                )}
                {isCare && (
                  <p className="mt-1 text-xs text-emerald-300">📈 Post-launch optimization & enhancements</p>
                )}
              </div>

              <Link href={pkgPath(p.id, locale) as any} className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm text-white hover:from-blue-700 hover:to-purple-700 transition-all">
                {p.ctaLabel ?? 'View details'}
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {p.inScope && (
                <Section title="In scope" icon={CheckCircle}>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {p.inScope.map((x, i) => <li key={i}>{x}</li>)}
                  </ul>
                </Section>
              )}
              {p.outOfScope && (
                <Section title="Out of scope" icon={XCircle}>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {p.outOfScope.map((x, i) => <li key={i}>{x}</li>)}
                  </ul>
                </Section>
              )}
              {p.deliverables && (
                <Section title="Deliverables" icon={Package}>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {p.deliverables.map((x, i) => <li key={i}>{x}</li>)}
                  </ul>
                </Section>
              )}
              {p.addons && p.addons.length > 0 && (
                <Section title="Add-ons" icon={Plus}>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {p.addons.map((x, i) => <li key={i}>{x}</li>)}
                  </ul>
                </Section>
              )}
            </div>

            {p.tiers && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-text mb-4">Care Plan Tiers</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  {p.tiers.map(t => (
                    <div key={t.name} className="rounded-xl border border-white/10 bg-surface/40 p-4">
                      <div className="flex items-baseline justify-between mb-2">
                        <div className="text-text font-semibold">{t.name}</div>
                        <div className="text-text font-bold">{t.priceTHB.toLocaleString()} THB</div>
                      </div>
                      <div className="text-sm text-text-muted">{t.hours} hrs / mo · SLA {t.sla}</div>
                      {t.bonus && <div className="mt-1 text-xs text-primary">{t.bonus}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div className="rounded-2xl border border-white/10 bg-surface/60 p-6">
        <h3 className="text-xl font-semibold text-text mb-4">Global Terms</h3>
        <ul className="list-disc space-y-1 pl-5 text-text-muted">
          {globalTerms.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </div>
    </div>
  );
}
