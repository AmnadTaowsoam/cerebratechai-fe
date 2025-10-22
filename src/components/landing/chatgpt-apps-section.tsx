'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileCheck, Camera } from 'lucide-react';

type AppCardProps = {
  id: string;
  icon: 'fileCheck' | 'camera';
  title: { th: string; en: string };
  description: { th: string; en: string };
  deepLink: string;
  fallbackUrl: string;
};

const iconMap = {
  fileCheck: FileCheck,
  camera: Camera,
};

const apps: AppCardProps[] = [
  {
    id: 'rag-readiness',
    icon: 'fileCheck',
    title: {
      th: 'RAG Readiness Checker',
      en: 'RAG Readiness Checker',
    },
    description: {
      th: 'ตรวจสอบความพร้อมเอกสารและโครงสร้างความรู้สำหรับระบบ RAG',
      en: 'Check files/permissions/knowledge structure readiness for RAG systems',
    },
    deepLink: 'chatgpt://app/cerebratechai.rag-readiness',
    fallbackUrl: '/contact?utm_source=apps&utm_campaign=rag-readiness',
  },
  {
    id: 'edge-vision',
    icon: 'camera',
    title: {
      th: 'Edge Vision Feasibility',
      en: 'Edge Vision Feasibility Estimator',
    },
    description: {
      th: 'ประเมินความเป็นไปได้สำหรับกล้อง FOV ระยะทาง ความเร็ว บน Edge devices',
      en: 'Estimate feasibility for camera/FOV/distance/speed on edge devices',
    },
    deepLink: 'chatgpt://app/cerebratechai.edge-vision-feasibility',
    fallbackUrl: '/contact?utm_source=apps&utm_campaign=edge-vision',
  },
];

export function ChatGPTAppsSection() {
  const locale = useLocale();
  // const t = useTranslations('home.sections.chatgpt_apps');

  return (
    <section className="bg-bg py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full bg-surface-2 px-4 py-1 text-sm font-medium text-primary">
            {locale.startsWith('th') ? 'ตัวอย่าง' : 'Preview'}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-text md:text-4xl">
            {locale.startsWith('th') ? 'ทดลองใน ChatGPT' : 'Try in ChatGPT'}
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-text-muted">
            {locale.startsWith('th') 
              ? 'เช็คความเป็นไปได้และความพร้อมแบบรวดเร็ว ทุกเดโมใช้ข้อมูล synthetic/public เท่านั้น'
              : 'Quick feasibility checks and readiness estimators. All demos use synthetic/public data only.'
            }
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {apps.map((app) => {
            const Icon = iconMap[app.icon];
            const title = locale.startsWith('th') ? app.title.th : app.title.en;
            const description = locale.startsWith('th') ? app.description.th : app.description.en;

            return (
              <Card
                key={app.id}
                className="group border border-hairline bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-gradient-to-tr from-teal-400 to-violet-600 p-2.5 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-text">{title}</h3>
                  </div>

                  <p className="mb-6 text-sm text-text-muted">{description}</p>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Button
                      asChild
                      className="flex-1 bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-600 text-white hover:opacity-90"
                    >
                      <a href={app.deepLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {locale.startsWith('th') ? 'เปิดใน ChatGPT' : 'Try in ChatGPT'}
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="border-hairline">
                      <a href={app.fallbackUrl}>
                        {locale.startsWith('th') ? 'นัดคุย' : 'Book consult'}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-text-subtle">
            {locale.startsWith('th')
              ? '* ทุกเดโมใช้ข้อมูล synthetic/public เท่านั้น'
              : '* All demos use synthetic/public data only'}
          </p>
        </div>
      </div>
    </section>
  );
}

