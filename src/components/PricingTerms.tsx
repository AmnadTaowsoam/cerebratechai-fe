import { globalTerms } from '@/data/packages';

interface PricingTermsProps {
  locale?: string;
}

export default function PricingTerms({ locale = 'en' }: PricingTermsProps) {
  const isThai = locale === 'th';
  const title = isThai ? 'เงื่อนไขและรายละเอียด' : 'Terms & Conditions';

  return (
    <section className="py-12 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-surface/60 p-6">
            <h3 className="text-lg font-semibold text-text mb-4">{title}</h3>
            <ul className="grid gap-3 md:grid-cols-2 text-sm text-text-muted">
              {globalTerms.map((term, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{isThai ? term.th : term.en}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
