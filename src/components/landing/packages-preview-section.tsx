'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';
import { packagesMap, pricingOrder } from '@/data/packages';
import { Button } from '@/components/ui/button';

export function PackagesPreviewSection() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${isThai ? 'th' : 'en'}`;
  
  // Show Pilot and Production packages
  const featuredPackages = ['pilot_launch', 'production_scale'].map(id => packagesMap[id]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface-3 via-surface to-surface-2 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_60%)]" aria-hidden />
      <div className="relative container mx-auto px-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              {locale.startsWith('th') ? 'แพ็กเกจบริการ' : 'Packages'}
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-text">
              {isThai
                ? 'เลือกแพ็กเกจที่ตรงกับเป้าหมายของคุณ'
                : 'Choose the package that fits your goals'}
            </h2>
            <p className="mt-3 max-w-2xl text-text-muted">
              {isThai
                ? 'จาก Kickstart ที่วางแผนกลยุทธ์ ไปจนถึง Production Scale ที่พร้อมใช้งานจริง แต่ละแพ็กเกจรวม deliverables และ support ที่คุณต้องการ'
                : 'From Kickstart strategy planning to Production Scale deployment, each package includes the deliverables and support you need.'}
            </p>
          </div>
          <Button asChild variant="secondary" className="group">
            <Link href={`${basePath}/packages` as any}>
              {locale.startsWith('th') ? 'ดูแพ็กเกจทั้งหมด' : 'Explore all packages'}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredPackages.map((pkg) => {
            const priceText = pkg.priceFromTHB 
              ? `${isThai ? 'จาก ' : 'From '}฿${pkg.priceFromTHB.toLocaleString('th-TH')}`
              : isThai ? 'ติดต่อสอบถาม' : 'Contact us';
            
            const unitText = pkg.priceUnit 
              ? isThai 
                ? pkg.priceUnit === 'per_env' ? '/สภาพแวดล้อม' 
                  : pkg.priceUnit === 'per_rollout' ? '/รอบการปล่อย'
                  : pkg.priceUnit === 'monthly' ? '/เดือน'
                  : ''
                : pkg.priceUnit === 'per_env' ? '/env' 
                  : pkg.priceUnit === 'per_rollout' ? '/rollout'
                  : pkg.priceUnit === 'monthly' ? '/month'
                  : ''
              : '';

            return (
              <div
                key={pkg.id}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:border-primary/40 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col gap-2 mb-3">
                      {pkg.highlight && (
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary w-fit">
                          {pkg.highlight}
                        </span>
                      )}
                      {pkg.recommendAssurance && (
                        <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary w-fit">
                          {isThai ? 'แนะนำ: Launch Assurance Sprint (+฿260k)' : 'Recommended: Launch Assurance Sprint (+฿260k)'}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-semibold text-text">
                      {pkg.title}
                    </h3>
                    {pkg.timeline && (
                      <p className="mt-2 text-sm text-text-muted">
                        {isThai ? `${pkg.timeline} สัปดาห์` : `${pkg.timeline} weeks`}
                      </p>
                    )}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">
                    <div className="text-xl font-bold text-text whitespace-nowrap">
                      {priceText}
                    </div>
                    {unitText && (
                      <div className="text-xs text-text-muted">{unitText}</div>
                    )}
                  </div>
                </div>

                <ul className="mt-6 space-y-2 text-sm text-text-muted">
                  {pkg.bullets?.slice(0, 3).map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="mt-8 w-full" variant="outline">
                  <Link href={`${basePath}/packages/${pkg.id}` as any}>
                    {isThai ? 'ดูรายละเอียด' : 'View details'}
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

