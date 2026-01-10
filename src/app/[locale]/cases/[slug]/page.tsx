import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { MagicHero } from '@/components/magicui';
import { Card, CardContent } from '@/components/ui/card';
import TLDRBlock from '@/components/TLDRBlock';
import KeyFactsBlock from '@/components/KeyFactsBlock';
import { ArticleSchema } from '@/components/seo';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CASES, getCaseBySlug } from '@/data/cases';

type CasePageProps = {
  params: Promise<{ locale: string; slug: string }> | { locale: string; slug: string };
};

const dataSensitivityLabels = {
  Public: { th: 'ข้อมูลสาธารณะ', en: 'Public data' },
  Anonymised: { th: 'ข้อมูลนิรนาม', en: 'Anonymised' },
  Synthetic: { th: 'ข้อมูลสังเคราะห์', en: 'Synthetic data' },
};

export async function generateStaticParams() {
  return CASES.flatMap((caseItem) => [
    { locale: 'en', slug: caseItem.slug },
    { locale: 'th', slug: caseItem.slug },
  ]);
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  // Await params to ensure it's resolved
  const resolvedParams = await Promise.resolve(params);

  // Validate params
  if (!resolvedParams || !resolvedParams.locale || !resolvedParams.slug) {
    return {
      title: 'Case Study | CerebraTechAI',
      description: 'View our AI case studies and successful projects',
    };
  }

  const locale = resolvedParams.locale.startsWith('th') ? 'th' : 'en';
  const slug = resolvedParams.slug;

  const caseItem = getCaseBySlug(slug);
  if (!caseItem) {
    return {
      title: locale === 'th' ? 'ไม่พบเคสตัวอย่าง | CerebraTechAI' : 'Case Study Not Found | CerebraTechAI',
      description: locale === 'th' ? 'ไม่พบเคสตัวอย่างที่ค้นหา' : 'The case study you are looking for was not found',
    };
  }

  const title = locale === 'th'
    ? `กรณีศึกษา: ${caseItem.title} | CerebraTechAI`
    : `${caseItem.title} | CerebraTechAI`;
  const description = caseItem.subtitle || caseItem.challenge;

  return {
    title,
    description,
  };
}

export default async function CaseDetailPage({ params }: CasePageProps) {
  // Resolve params if it's a Promise
  const resolvedParams = await Promise.resolve(params);

  // Validate params exist
  if (!resolvedParams || !resolvedParams.locale || !resolvedParams.slug) {
    notFound();
  }

  const locale = resolvedParams.locale.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';
  const basePath = `/${locale}`;
  const schemaLocale: 'en' | 'th' = isThai ? 'th' : 'en';
  const slug = resolvedParams.slug;

  const caseItem = getCaseBySlug(slug);

  if (!caseItem) {
    notFound();
  }

  const t = (th: string, en: string) => (isThai ? th : en);

  const relatedCases = CASES.filter((item) =>
    item.slug !== caseItem.slug &&
    item.solutionFamily.some(family => caseItem.solutionFamily.includes(family))
  ).slice(0, 3);

  const breadcrumbItems = [
    { label: t('กรณีศึกษา', 'Case Studies'), href: `${basePath}/cases` },
    { label: caseItem.title },
  ];

  return (
    <div className="bg-bg">
      <ArticleSchema headline={caseItem.title} articleBody={caseItem.subtitle || caseItem.challenge} author="CerebraTechAI" />

      <div className="container mx-auto px-6 pt-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <MagicHero
        eyebrow={
          <Link
            href={`${basePath}/cases` as any}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/60 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('กลับ', 'Back')}
          </Link>
        }
        title={caseItem.title}
        description={caseItem.subtitle || caseItem.challenge}
        metrics={[
          {
            value: caseItem.sector,
            label: t('อุตสาหกรรม', 'Industry'),
          },
          {
            value: isThai
              ? dataSensitivityLabels[caseItem.dataSensitivity].th
              : dataSensitivityLabels[caseItem.dataSensitivity].en,
            label: t('ข้อมูล', 'Data'),
          },
          {
            value: caseItem.outcomes[0]?.value || '—',
            label: caseItem.outcomes[0]?.label || t('ผลลัพธ์หลัก', 'Key outcome'),
          },
        ]}
        align="center"
      />

      <section className="py-12 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <TLDRBlock
              summary={
                isThai
                  ? 'สรุป: ปัญหา/เป้าหมาย แนวทางแก้ และผลลัพธ์ที่วัดได้ (ข้อมูลที่ใช้เป็นไปตามประเภทข้อมูลที่ระบุ)'
                  : `Summary: ${caseItem.solution}`
              }
              locale={schemaLocale}
            />
            <KeyFactsBlock
              facts={[
                { label: t('อุตสาหกรรม', 'Industry'), value: caseItem.sector },
                { label: t('กลุ่มโซลูชัน', 'Solution family'), value: caseItem.solutionFamily.join(', ') },
                {
                  label: t('ข้อมูล', 'Data'),
                  value: isThai
                    ? dataSensitivityLabels[caseItem.dataSensitivity].th
                    : dataSensitivityLabels[caseItem.dataSensitivity].en,
                },
                {
                  label: t('ผลลัพธ์หลัก', 'Key outcomes'),
                  value: caseItem.outcomes.slice(0, 3).map((o) => `${o.label}: ${o.value}`),
                },
                ...(caseItem.metricsFooter?.length
                  ? [
                      {
                        label: t('ตัวชี้วัดเพิ่มเติม', 'Extra metrics'),
                        value: caseItem.metricsFooter.map((m) => `${m.label}: ${m.value}`),
                      },
                    ]
                  : []),
              ]}
              locale={schemaLocale}
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border border-white/10 bg-surface/80 backdrop-blur">
              <CardContent className="p-8 space-y-3">
                <h2 className="text-xl font-semibold text-text">
                  {t('ความท้าทาย', 'Challenge')}
                </h2>
                <p className="text-text-muted leading-relaxed">
                  {caseItem.challenge}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-surface/80 backdrop-blur">
              <CardContent className="p-8 space-y-3">
                <h2 className="text-xl font-semibold text-text">
                  {t('โซลูชัน', 'Solution')}
                </h2>
                <p className="text-text-muted leading-relaxed">
                  {caseItem.solution}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border border-white/10 bg-surface/80 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold text-text mb-4">
                  {t('ผลลัพธ์ที่ได้', 'Outcomes')}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {caseItem.outcomes.map((outcome, index) => (
                    <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-2xl font-bold text-primary">{outcome.value}</div>
                      <div className="text-sm text-text-muted">{outcome.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-surface/80 backdrop-blur">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-xl font-semibold text-text">
                  {t('ข้อมูลประกอบ', 'Supporting metrics')}
                </h2>
                {caseItem.metricsFooter ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {caseItem.metricsFooter.map((metric, index) => (
                      <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-lg font-semibold text-text">{metric.value}</div>
                        <div className="text-sm text-text-muted">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-text-muted">
                    {t('ยังไม่มีข้อมูลเพิ่มเติมสำหรับเคสนี้', 'No additional metrics available for this case.')}
                  </p>
                )}
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4 text-sm text-text-muted">
                  <p className="font-semibold text-text">
                    {t('ระดับข้อมูล', 'Data sensitivity')}
                  </p>
                  <p className="mt-2">
                    {isThai ? dataSensitivityLabels[caseItem.dataSensitivity].th : dataSensitivityLabels[caseItem.dataSensitivity].en}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <Card className="border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-semibold text-text mb-3">
                {t('อยากทำเคสคล้ายกัน?', 'Want a similar outcome?')}
              </h2>
              <p className="text-text-muted mb-6">
                {t('แชร์โจทย์ของคุณเพื่อประเมินแนวทางและงบประมาณที่เหมาะสม', 'Share your context to receive a scoped plan and estimate.')}
              </p>
              <Link
                href={`${basePath}/contact?case=${caseItem.slug}` as any}
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                {t('คุยกับทีมเรา', 'Talk to our team')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {relatedCases.length > 0 && (
        <section className="py-12 bg-surface/30">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-text mb-6 text-center">
              {t('เคสที่เกี่ยวข้อง', 'Related Case Studies')}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedCases.map((item) => (
                <Card key={item.slug} className="border border-white/10 bg-surface/80 backdrop-blur hover:shadow-xl transition-all group">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                        {item.sector}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-muted mb-4 line-clamp-2">
                      {item.subtitle}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {item.outcomes.slice(0, 2).map((outcome, idx) => (
                        <div key={idx} className="text-center p-2 rounded-lg bg-primary/10">
                          <div className="text-lg font-bold text-primary">{outcome.value}</div>
                          <div className="text-xs text-text-muted">{outcome.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/${locale}/cases/${item.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      {t('อ่านต่อ', 'Read more')}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
