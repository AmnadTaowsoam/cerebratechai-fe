'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLocale } from 'next-intl';
import { cn } from '@/lib/utils';
import { FAQSchema } from './PricingSchema';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs: FAQItem[];
  className?: string;
}

export function FAQSection({
  title,
  description,
  faqs,
  className,
}: FAQSectionProps) {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const defaultTitle = isThai ? 'คำถามที่พบบ่อย' : 'Frequently Asked Questions';
  const defaultDescription =
    description ??
    (isThai
      ? 'รวมคำตอบสำหรับคำถามยอดนิยมเกี่ยวกับบริการ วิธีทำงาน และรายละเอียดที่ลูกค้าถามบ่อย'
      : 'Answers to common questions about our services and solutions');

  return (
    <>
      <FAQSchema faqs={faqs} />
      <section className={cn('py-20', className)}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">
              {title || defaultTitle}
            </h2>
            {defaultDescription ? (
              <p className="text-text-muted max-w-2xl mx-auto">
                {defaultDescription}
              </p>
            ) : null}
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-hairline rounded-xl bg-surface/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-2 transition-colors"
                >
                  <span className="text-lg font-semibold text-text pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 text-text-muted flex-shrink-0 transition-transform duration-200',
                      openIndex === index && 'transform rotate-180'
                    )}
                  />
                </button>

                {openIndex === index ? (
                  <div className="px-6 pb-6 pt-0">
                    <div className="text-text-muted leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
