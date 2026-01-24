'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Rocket, LineChart, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { valueCards, getLocalized } from '@/data/content';
import {
  getValueCards,
  getLocalized as getLocalizedApi,
} from '@/lib/content-api';
import { useEffect, useState } from 'react';

const iconMap = {
  rocket: Rocket,
  lineChart: LineChart,
  cpu: Cpu,
} as const;

export function ValueCardsSection() {
  const locale = useLocale();
  // const t = useTranslations('home.sections.value_cards');
  const [cards, setCards] = useState(valueCards);

  useEffect(() => {
    // Fetch dynamic content from API with fallback to static data
    getValueCards().then(data => {
      if (data && data.length > 0) {
        // Transform API data to match the expected format
        const transformed = data.map(apiCard => ({
          id: apiCard.identifier,
          icon: apiCard.icon as 'rocket' | 'lineChart' | 'cpu',
          title: apiCard.title,
          description: apiCard.description,
          bullets: apiCard.bullets,
        }));
        setCards(transformed);
      }
    });
  }, []);

  return (
    <section className="bg-surface py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full bg-surface-2 px-4 py-1 text-sm font-medium text-primary">
            {locale.startsWith('th')
              ? 'เหตุผลที่ SMEs เลือกเรา'
              : 'Why SMEs choose us'}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-text md:text-4xl">
            {locale.startsWith('th')
              ? 'รวดเร็ว คุ้มค่า เหมาะกับโครงการเล็ก-กลาง'
              : 'Fast, affordable, right-sized'}
          </h2>
          <p className="mt-3 mx-auto max-w-3xl text-text-muted">
            {locale.startsWith('th')
              ? 'ดูแลโดยทีมเล็กที่มีประสบการณ์ เน้นส่งมอบ POC และ Small Pilot ที่ใช้งานได้จริง ไม่ซับซ้อนเกินไป'
              : 'Run by a small experienced team focused on delivering POCs and Small Pilots that work—without enterprise complexity.'}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(card => {
            const Icon = iconMap[card.icon];
            return (
              <Card
                key={card.id}
                className="group border border-hairline bg-surface/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-600 p-3 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-text">
                      {getLocalized(locale, card.title)}
                    </h3>
                  </div>
                  <p className="mt-4 text-text-muted">
                    {getLocalized(locale, card.description)}
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-text-muted">
                    {card.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span
                          className="mt-1 h-2 w-2 rounded-full bg-primary"
                          aria-hidden
                        />
                        <span>{getLocalized(locale, bullet)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
