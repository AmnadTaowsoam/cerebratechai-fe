'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, Clock, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { accelerators } from '@/data/home';
import { useAnalytics } from '@/lib/hooks/use-analytics';

export function AcceleratorsSection() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${isThai ? 'th' : 'en'}`;
  const { trackCtaClick } = useAnalytics();

  const handleCardClick = (acceleratorId: string) => {
    trackCtaClick(`accelerator-${acceleratorId}`, `Accelerator ${acceleratorId}`);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bg via-surface to-bg py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(124,58,237,0.08),_transparent_60%)]" />
      
      <div className="relative container mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            {isThai ? 'Accelerators' : 'Accelerators'}
          </div>
          <h2 className="mb-4 text-3xl font-bold text-text md:text-5xl">
            {isThai ? 'เร่งความเร็วโครงการของคุณ' : 'Accelerate Your Project'}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-muted md:text-xl">
            {isThai 
              ? 'แพ็กเกจที่ออกแบบมาเพื่อลดเวลา ลดความเสี่ยง และเพิ่มโอกาสความสำเร็จ'
              : 'Packages designed to reduce time, minimize risk, and maximize success'}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {accelerators.map((accelerator) => (
            <div
              key={accelerator.id}
              className="group relative overflow-hidden rounded-2xl border border-hairline/50 bg-surface/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 opacity-0 transition-opacity group-hover:from-primary/5 group-hover:to-secondary/5 group-hover:opacity-100" />
              
              <div className="relative p-6">
                {/* Icon badge */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Package className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xl font-bold text-text">
                  {isThai ? accelerator.titleTh : accelerator.titleEn}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm text-text-muted">
                  {isThai ? accelerator.descriptionTh : accelerator.descriptionEn}
                </p>

                {/* Price & Duration */}
                <div className="mb-4 flex items-center justify-between rounded-lg bg-surface-2/50 p-3">
                  <div>
                    <p className="text-xs text-text-muted">
                      {isThai ? 'เริ่มต้น' : 'Starting'}
                    </p>
                    <p className="text-lg font-bold text-text">
                      ฿{accelerator.startingPrice.toLocaleString('th-TH')}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-text-muted">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">
                      {accelerator.duration} {isThai ? 'สัปดาห์' : 'wks'}
                    </span>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text">
                    {isThai ? 'Deliverables' : 'Deliverables'}
                  </p>
                  <ul className="space-y-2 text-sm text-text-muted">
                    {(isThai ? accelerator.deliverables : accelerator.deliverablesEn).slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  variant="ghost"
                  className="group/btn w-full justify-between text-primary hover:bg-primary/10"
                  onClick={() => handleCardClick(accelerator.id)}
                >
                  <Link href={`${basePath}/packages/${accelerator.id}` as any}>
                    {isThai ? 'ดูรายละเอียด' : 'View details'}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-text-muted">
            {isThai 
              ? '* ราคาไม่รวม VAT 7% และค่า Cloud เกินงบตั้งต้น | ชำระ 50/30/20 ตาม milestone'
              : '* Prices exclude VAT 7% and Cloud consumption beyond starter budget | Payment 50/30/20 milestones'}
          </p>
        </div>
      </div>
    </section>
  );
}

