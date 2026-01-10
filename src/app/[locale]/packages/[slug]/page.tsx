import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { packagesMap } from '@/data/packages';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const copy = {
  en: {
    back: 'Back to packages',
    timeline: 'Timeline',
    weeks: 'weeks',
    deliverables: 'Deliverables',
    inScope: 'In scope',
    outOfScope: 'Out of scope',
    addOns: 'Add-ons',
    pricing: 'Pricing & kickoff',
    disclaimer:
      'Looking for a variant? Our Value Engineering team can tailor scope, add accelerators, or coordinate with your internal squads.',
    cta: 'Discuss this package',
  },
  th: {
    back: 'กลับหน้าแพ็กเกจ',
    timeline: 'ระยะเวลา',
    weeks: 'สัปดาห์',
    deliverables: 'สิ่งที่ส่งมอบ',
    inScope: 'รวมในแพ็กเกจ',
    outOfScope: 'ไม่รวม',
    addOns: 'ส่วนเสริม',
    pricing: 'ราคาและการเริ่มงาน',
    disclaimer:
      'หากต้องการปรับขอบเขต ทีม Value Engineering ของเราสามารถช่วยออกแบบให้เหมาะกับทีมของคุณได้',
    cta: 'คุยรายละเอียดแพ็กเกจ',
  },
} as const;

type PackageParams = {
  params: Promise<{ locale: string; slug: string }> | { locale: string; slug: string };
};

export async function generateStaticParams() {
  return Object.keys(packagesMap).flatMap((id) => [
    { locale: 'en', slug: id },
    { locale: 'th', slug: id },
  ]);
}

export async function generateMetadata({ params }: PackageParams): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);

  if (!resolvedParams || !resolvedParams.locale || !resolvedParams.slug) {
    return {
      title: 'Package | CerebraTechAI',
      description: 'AI package details',
    };
  }

  const locale = resolvedParams.locale.startsWith('th') ? 'th' : 'en';
  const pkg = packagesMap[resolvedParams.slug];

  if (!pkg) {
    return {};
  }

  const title = locale === 'th' ? (pkg.titleTh ?? pkg.title) : pkg.title;
  const summary = pkg.bullets?.[0] || 'AI package details';

  return {
    title: `${title} | CerebraTechAI packages`,
    description: summary,
  };
}

export default async function PackageDetailPage({ params }: PackageParams) {
  const resolvedParams = await Promise.resolve(params);

  if (!resolvedParams || !resolvedParams.locale || !resolvedParams.slug) {
    notFound();
  }

  const locale = resolvedParams.locale.startsWith('th') ? 'th' : 'en';
  const pkg = packagesMap[resolvedParams.slug];

  if (!pkg) {
    notFound();
  }

  const messages = copy[locale];
  const basePath = `/${locale}`;
  const isThai = locale === 'th';
  const priceAmount = pkg.priceFromTHB ? pkg.priceFromTHB.toLocaleString(isThai ? 'th-TH' : 'en-US') : (isThai ? 'ติดต่อทีม' : 'Contact us');

  const getText = (value?: string, valueTh?: string) => {
    if (isThai && valueTh) return valueTh;
    return value ?? '';
  };

  const getList = (value?: string[], valueTh?: string[]) => {
    if (isThai && valueTh && valueTh.length > 0) return valueTh;
    return value ?? [];
  };

  const getPriceUnit = () => {
    const unit = pkg.priceUnit;
    if (!unit || unit === 'one_time') return '';
    if (unit === 'per_env') return isThai ? ' / สภาพแวดล้อม' : ' / environment';
    if (unit === 'per_rollout') return isThai ? ' / rollout' : ' / rollout';
    if (unit === 'monthly') return isThai ? ' / เดือน' : ' / month';
    return '';
  };

  const getTimeline = () => {
    if (!pkg.timeline) return isThai ? 'ติดต่อทีม' : 'Contact us';
    return isThai ? `${pkg.timeline} สัปดาห์` : `${pkg.timeline} weeks`;
  };

  return (
    <div className="bg-bg">
      <section className="bg-gradient-to-br from-surface via-surface-2 to-surface-3 py-20">
        <div className="container mx-auto px-6">
          <Link
            href={`${basePath}/packages` as any}
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
          >
            <ArrowLeft className="h-4 w-4" />
            {messages.back}
          </Link>

          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-primary">
              {pkg.id}
            </span>
            <h1 className="text-4xl font-bold text-text md:text-5xl">
              {getText(pkg.title, pkg.titleTh)}
            </h1>
            <p className="text-lg text-text-muted">
              {getList(pkg.bullets, pkg.bulletsTh)[0] || 'AI package details'}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                {messages.timeline}: {getTimeline()}
              </span>
              {pkg.priceFromTHB && (
                <span className="inline-flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  {isThai ? 'เริ่มที่' : 'From'} ฿{priceAmount}{getPriceUnit()}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              {pkg.inScope && (
                <Card className="border border-hairline bg-surface">
                  <CardContent className="space-y-6 p-8">
                    <div>
                      <h2 className="text-xl font-semibold text-text">{messages.inScope}</h2>
                      <ul className="mt-4 space-y-3 text-sm text-text-muted">
                        {getList(pkg.inScope, pkg.inScopeTh).map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-green-500" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}

              {pkg.outOfScope && (
                <Card className="border border-hairline bg-surface">
                  <CardContent className="space-y-6 p-8">
                    <div>
                      <h2 className="text-xl font-semibold text-text">{messages.outOfScope}</h2>
                      <ul className="mt-4 space-y-3 text-sm text-text-muted">
                        {getList(pkg.outOfScope, pkg.outOfScopeTh).map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-red-500" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}

              {pkg.deliverables && (
                <Card className="border border-hairline bg-surface">
                  <CardContent className="space-y-6 p-8">
                    <div>
                      <h2 className="text-xl font-semibold text-text">{messages.deliverables}</h2>
                      <ul className="mt-4 space-y-3 text-sm text-text-muted">
                        {getList(pkg.deliverables, pkg.deliverablesTh).map((deliverable, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}

              {pkg.addons && pkg.addons.length > 0 && (
                <Card className="border border-hairline bg-surface">
                  <CardContent className="space-y-6 p-8">
                    <div>
                      <h2 className="text-xl font-semibold text-text">{messages.addOns}</h2>
                      <ul className="mt-4 space-y-3 text-sm text-text-muted">
                        {getList(pkg.addons, pkg.addonsTh).map((addon, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-secondary" aria-hidden />
                            <span>{addon}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}

              {pkg.tiers && (
                <Card className="border border-hairline bg-surface">
                  <CardContent className="space-y-6 p-8">
                    <div>
                      <h2 className="text-xl font-semibold text-text">
                        {isThai ? 'ระดับบริการดูแล' : 'Care Plan Tiers'}
                      </h2>
                      <div className="mt-4 grid gap-4 md:grid-cols-3">
                        {pkg.tiers.map(tier => (
                          <div key={tier.name} className="rounded-xl border border-white/10 bg-surface/40 p-4">
                            <div className="flex items-baseline justify-between mb-2">
                              <div className="text-text font-semibold">{isThai ? (tier.nameTh ?? tier.name) : tier.name}</div>
                              <div className="text-text font-bold">฿{tier.priceTHB.toLocaleString(isThai ? 'th-TH' : 'en-US')}</div>
                            </div>
                            <div className="text-sm text-text-muted">
                              {isThai ? `${tier.hours} ชม./เดือน • SLA ${tier.sla}` : `${tier.hours} hrs / mo • SLA ${tier.sla}`}
                            </div>
                            {(isThai ? tier.bonusTh : tier.bonus) && (
                              <div className="mt-1 text-xs text-primary">{isThai ? tier.bonusTh : tier.bonus}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <Card className="border border-hairline bg-surface">
              <CardContent className="space-y-6 p-8">
                <div>
                  <h2 className="text-xl font-semibold text-text">{messages.pricing}</h2>
                  <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right text-sm text-text-muted">
                    <div className="text-3xl font-bold text-text">
                      {pkg.priceFromTHB ? (
                        <>
                          {isThai ? 'เริ่มที่' : 'From'} ฿{priceAmount}
                        </>
                      ) : (
                        isThai ? 'ติดต่อทีม' : 'Contact us'
                      )}
                    </div>
                    <div>{getPriceUnit() || (isThai ? 'ราคาแบบครั้งเดียว' : 'One-time')}</div>
                  </div>
                </div>

                <p className="text-sm text-text-muted">{messages.disclaimer}</p>

                <Button asChild>
                  <Link href={`${basePath}/contact` as any} className="inline-flex items-center gap-2">
                    {messages.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
