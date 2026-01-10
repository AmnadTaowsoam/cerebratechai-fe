import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Download, ExternalLink, Video } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { MagicHero } from '@/components/magicui';
import { ArticleSchema } from '@/components/seo';
import { getResourceBySlug } from '@/data/resources';

type ResourceDetailPageProps = {
  params: Promise<{ locale: string; slug: string }> | { locale: string; slug: string };
};

export async function generateStaticParams() {
  // keep minimal; resources are few
  const slugs = [
    'ai-implementation-roadmap',
    'mlops-best-practices',
    'computer-vision-webinar',
    'llm-thai-optimization',
    'ai-roi-guide',
    'ai-project-template',
    'mlops-templates',
    'edge-ai-deployment',
  ];
  return slugs.flatMap((slug) => [{ locale: 'en', slug }, { locale: 'th', slug }]);
}

export async function generateMetadata({ params }: ResourceDetailPageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);

  if (!resolvedParams || !resolvedParams.locale || !resolvedParams.slug) {
    return {
      title: 'Resource | CerebraTechAI',
      description: 'AI resources and materials',
    };
  }

  const locale = resolvedParams.locale.startsWith('th') ? 'th' : 'en';
  const resource = getResourceBySlug(resolvedParams.slug);
  if (!resource) return {};

  const title = locale === 'th' ? resource.title.th : resource.title.en;
  const description = locale === 'th' ? resource.description.th : resource.description.en;

  return { title: `${title} | CerebraTechAI`, description };
}

export default async function ResourceDetailPage({ params }: ResourceDetailPageProps) {
  const resolvedParams = await Promise.resolve(params);

  if (!resolvedParams || !resolvedParams.locale || !resolvedParams.slug) {
    notFound();
  }

  const locale = resolvedParams.locale.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';
  const basePath = `/${locale}`;

  const resource = getResourceBySlug(resolvedParams.slug);
  if (!resource) notFound();

  const title = isThai ? resource.title.th : resource.title.en;
  const description = isThai ? resource.description.th : resource.description.en;

  return (
    <div className="bg-bg">
      <ArticleSchema headline={title} articleBody={description} author="CerebraTechAI" />

      <MagicHero
        eyebrow={
          <Link
            href={`${basePath}/resources` as any}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/60 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {isThai ? 'กลับไปแหล่งความรู้' : 'Back to resources'}
          </Link>
        }
        title={title}
        description={description}
        align="center"
      />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <Card className="border border-hairline bg-surface/80">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                  {isThai ? resource.category.th : resource.category.en}
                </span>
                <span>•</span>
                <span className="capitalize">{resource.type}</span>
                {resource.date ? (
                  <>
                    <span>•</span>
                    <span>{new Date(resource.date).toLocaleDateString(locale)}</span>
                  </>
                ) : null}
                {resource.duration ? (
                  <>
                    <span>•</span>
                    <span>{resource.duration}</span>
                  </>
                ) : null}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {resource.downloadUrl ? (
                  <a
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition"
                    href={resource.downloadUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {isThai ? 'ดาวน์โหลดไฟล์ (ตัวอย่าง)' : 'Download (placeholder)'}
                  </a>
                ) : null}

                {resource.externalUrl ? (
                  <a
                    className="inline-flex items-center justify-center rounded-lg border border-hairline bg-surface px-4 py-2 text-sm font-semibold text-text hover:bg-surface-2 transition"
                    href={resource.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Video className="mr-2 h-4 w-4" />
                    {isThai ? 'เปิดลิงก์เว็บบินาร์' : 'Open webinar link'}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                ) : null}
              </div>

              <div className="mt-8 text-sm text-text-muted leading-relaxed">
                {isThai ? (
                  <p>
                    หมายเหตุ: ในสภาพแวดล้อม dev เราใส่ไฟล์ตัวอย่างแบบข้อความไว้ก่อน เพื่อกันลิงก์เสีย (404). เมื่อพร้อมใช้งานจริง
                    สามารถแทนที่ด้วยไฟล์ PDF/ZIP จริงใน `public/resources/` แล้วอัปเดต `src/data/resources.ts` ได้ทันที
                  </p>
                ) : (
                  <p>
                    Note: In dev we use small placeholder files to avoid broken links (404). Replace them with real PDF/ZIP
                    assets in `public/resources/` and update `src/data/resources.ts` when ready.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

