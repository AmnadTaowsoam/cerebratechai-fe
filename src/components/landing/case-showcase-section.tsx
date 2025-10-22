'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { FolderOpen, ShieldCheck, Sparkles, Globe2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CASES } from '@/data/cases';

export function CaseShowcaseSection() {
  const locale = useLocale();
  // const t = useTranslations('home.sections.case_showcase');
  const isThai = locale.startsWith('th');
  const basePath = `/${isThai ? 'th' : 'en'}`;
  const featured = CASES.slice(0, 3);

  const tagLabels = {
    anonymized: isThai ? 'Anonymised' : 'Anonymised',
    synthetic: isThai ? 'Synthetic data' : 'Synthetic data',
    publicData: isThai ? 'Public data' : 'Public data',
  };

  return (
    <section className="bg-surface py-24" id="featured-demo">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full bg-surface-2 px-4 py-1 text-sm font-medium text-primary">
              {isThai ? 'ตัวอย่างเคส' : 'Case showcase'}
            </span>
            <h2 className="mt-4 text-3xl font-bold text-text md:text-4xl">
              {isThai ? 'เห็นผลลัพธ์จริงพร้อมปกป้องความลับลูกค้า' : 'See the outcomes while protecting client privacy'}
            </h2>
            <p className="mt-3 max-w-3xl text-text-muted">
              {isThai 
                ? 'ผสานบทเรียนจากโปรเจ็กต์จริงกับข้อมูลนิรนามและสังเคราะห์ เพื่อให้เห็นวิธีการและผลกระทบอย่างชัดเจน'
                : 'We combine lessons from production projects with anonymised and synthetic datasets so you can understand the process and impact.'
              }
            </p>
          </div>
          <Button asChild variant="secondary">
            <Link href={`${basePath}/cases` as any}>{isThai ? 'ดูเคสทั้งหมด' : 'Browse all case studies'}</Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((item) => (
            <Card
              key={item.slug}
              className="flex h-full flex-col border border-hairline bg-surface-2/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <CardHeader>
                <CardTitle className="flex items-start justify-between gap-4 text-lg font-semibold text-text">
                  <span>{item.title}</span>
                  <FolderOpen className="h-5 w-5 text-primary" />
                </CardTitle>
                <p className="text-sm text-text-muted">{item.subtitle || item.sector}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4 text-sm text-text-muted">
                <div>
                  <p className="font-semibold text-text">
                    {isThai ? 'ความท้าทาย' : 'Challenge'}
                  </p>
                  <p className="line-clamp-2">{item.challenge}</p>
                </div>
                <div>
                  <p className="font-semibold text-text">
                    {isThai ? 'แนวทางแก้ไข' : 'Solution'}
                  </p>
                  <p className="line-clamp-2">{item.solution}</p>
                </div>
                <ul className="space-y-1">
                  {item.outcomes.slice(0, 3).map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Sparkles className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-xs">
                        <strong className="text-text">{outcome.label}:</strong> {outcome.value}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 text-xs">
                  <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 ${
                    item.dataSensitivity === 'Public' 
                      ? 'bg-primary/10 text-primary' 
                      : item.dataSensitivity === 'Anonymised'
                      ? 'bg-secondary/10 text-secondary'
                      : 'bg-accent/10 text-accent'
                  }`}>
                    {item.dataSensitivity === 'Public' && <Globe2 className="h-3.5 w-3.5" />}
                    {item.dataSensitivity === 'Anonymised' && <ShieldCheck className="h-3.5 w-3.5" />}
                    {item.dataSensitivity === 'Synthetic' && <Sparkles className="h-3.5 w-3.5" />}
                    {item.dataSensitivity === 'Public' ? tagLabels.publicData : 
                     item.dataSensitivity === 'Anonymised' ? tagLabels.anonymized : 
                     tagLabels.synthetic}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="justify-start px-0 text-sm text-primary"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).gtag) {
                        (window as any).gtag('event', 'case_view_story', {
                          case_slug: item.slug,
                        });
                      }
                    }}
                  >
                    <Link href={`${basePath}/cases/${item.slug}` as any}>
                      {isThai ? 'อ่านเรื่องเต็ม' : 'View full story'}
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm"
                    className="text-xs"
                  >
                    <Link href={`${basePath}/contact?case=${item.slug}` as any}>
                      {isThai ? 'ขอโซลูชันแบบนี้' : 'Request similar solution'}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-sm text-text-muted">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-text">
                {isThai ? 'หมายเหตุด้านข้อมูลและความเป็นส่วนตัว' : 'Data & privacy note'}
              </p>
              <p>
                {isThai 
                  ? 'เคสทั้งหมดปฏิบัติตามแนวทางใน docs/09-Anonymization-&-NDA-Policy.md และ docs/19-Demo-Data-&-Mock-Assets.md เพื่อรักษาความลับและให้ข้อมูลที่เป็นประโยชน์'
                  : 'Stories follow our anonymization and synthetic data playbooks so you can learn from outcomes without exposing client data.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
