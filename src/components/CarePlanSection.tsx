import { packagesMap } from '@/data/packages';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CarePlanSectionProps {
  locale?: string;
}

export default function CarePlanSection({
  locale = 'en',
}: CarePlanSectionProps) {
  const carePlan = packagesMap.care_plan;
  const isThai = locale === 'th';

  if (!carePlan || !carePlan.tiers) return null;

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-4 py-1 text-sm font-semibold text-emerald-300 mb-4">
              {isThai ? 'ดูแลหลังเปิดใช้งาน' : 'Post-Launch'}
            </span>
            <h2 className="text-3xl font-bold text-text mb-4">
              {isThai
                ? 'เลือก Care Plan สำหรับการดูแลต่อเนื่อง'
                : 'Choose a Care Plan for Ongoing Support'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {isThai
                ? 'ดูแลระบบ AI ให้เสถียรด้วย monitoring, model refresh และการสนับสนุนทางเทคนิค'
                : 'Keep your AI system running smoothly with monitoring, model refresh, and technical support'}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {carePlan.tiers.map(tier => (
              <div
                key={tier.name}
                className="rounded-2xl border border-white/10 bg-surface/80 p-6 hover:border-emerald-500/40 transition-all"
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-text mb-2">
                    {isThai ? (tier.nameTh ?? tier.name) : tier.name}
                  </h3>
                  <div className="mb-2">
                    <div className="text-sm text-text-muted mb-1">
                      {isThai ? 'เริ่มที่' : 'From'}
                    </div>
                    <span className="text-3xl font-bold text-text">
                      ฿
                      {tier.priceTHB.toLocaleString(isThai ? 'th-TH' : 'en-US')}
                    </span>
                    <span className="text-sm text-text-muted ml-1">
                      {isThai ? '/ เดือน' : '/ month'}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted">
                    {isThai
                      ? `${tier.hours} ชม./เดือน • SLA ${tier.sla}`
                      : `${tier.hours} hrs/month • SLA ${tier.sla}`}
                  </p>
                  {(isThai ? tier.bonusTh : tier.bonus) && (
                    <p className="mt-2 text-xs text-emerald-300">
                      {isThai ? tier.bonusTh : tier.bonus}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/packages/care_plan` as any}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-sm font-medium text-white transition-all hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg"
            >
              {isThai ? 'ดูรายละเอียด Care Plan' : 'View Care Plan Details'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
