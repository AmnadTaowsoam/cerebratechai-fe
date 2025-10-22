import { globalTerms } from '@/data/packages';

interface PricingTermsProps {
  locale?: string;
}

const termsTranslation = {
  th: {
    title: 'เงื่อนไขทั่วไป',
    terms: [
      'ราคาไม่รวม VAT 7%',
      'ไม่รวมค่า Cloud เกินงบตั้งต้น',
      'ชำระเงิน 50-30-20 ตาม milestone',
      'Change Request 18,000 THB/คน-วัน (ต้องขออนุมัติล่วงหน้า)'
    ]
  },
  en: {
    title: 'Terms & Conditions',
    terms: globalTerms
  }
};

export default function PricingTerms({ locale = 'en' }: PricingTermsProps) {
  const isThai = locale === 'th';
  const content = isThai ? termsTranslation.th : termsTranslation.en;

  return (
    <section className="py-12 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-surface/60 p-6">
            <h3 className="text-lg font-semibold text-text mb-4">{content.title}</h3>
            <ul className="grid gap-3 md:grid-cols-2 text-sm text-text-muted">
              {content.terms.map((term, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

