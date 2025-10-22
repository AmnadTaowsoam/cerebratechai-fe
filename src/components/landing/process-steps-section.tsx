'use client';

import { useLocale, useTranslations } from 'next-intl';
import { processSteps, getLocalized } from '@/data/content';
import { getProcessSteps, getLocalized as getLocalizedApi } from '@/lib/content-api';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function ProcessStepsSection() {
  const locale = useLocale();
  // const t = useTranslations('home.sections.process');
  const [steps, setSteps] = useState(processSteps);

  useEffect(() => {
    // Fetch process steps from API
    getProcessSteps().then((data) => {
      if (data && data.length > 0) {
        const transformed = data.map((apiStep) => ({
          id: apiStep.identifier,
          title: apiStep.title,
          description: apiStep.description,
        }));
        setSteps(transformed);
      }
    });
  }, []);

  return (
    <section className="bg-surface-2 py-24" id="process">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center rounded-full bg-surface-3 px-4 py-1 text-sm font-medium text-primary">
            {locale.startsWith('th') ? 'กระบวนการทำงาน' : 'Delivery playbook'}
          </span>
        </div>
        <div className="mx-auto max-w-5xl">
          <ol className="grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <li
                key={step.id}
                className={cn(
                  'relative rounded-2xl border border-hairline bg-surface/70 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-soft',
                )}
              >
                <div className="mb-3 flex items-center gap-3 text-primary">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-lg font-semibold">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold text-text">
                    {getLocalized(locale, step.title)}
                  </h3>
                </div>
                <p className="text-text-muted">{getLocalized(locale, step.description)}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
