import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShimmerButton } from '@/components/magicui';
import CaseSchema from '@/components/CaseSchema';
import { getCaseBySlug, CASES } from '@/data/cases';

type CaseDetailProps = {
  params: { locale: string; slug: string };
};

export function generateStaticParams() {
  return CASES.map((caseItem) => ({
    slug: caseItem.slug,
  }));
}

export function generateMetadata({ params }: CaseDetailProps): Metadata {
  const caseItem = getCaseBySlug(params.slug);
  
  if (!caseItem) {
    return {};
  }

  return {
    title: `${caseItem.title} | Cerebratechai Case Study`,
    description: caseItem.solution,
    openGraph: {
      title: caseItem.title,
      description: caseItem.solution,
      images: caseItem.heroImage ? [caseItem.heroImage] : [],
    },
  };
}

export default function CaseDetailPage({ params }: CaseDetailProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const caseItem = getCaseBySlug(params.slug);
  const isThai = locale === 'th';
  const basePath = `/${locale}`;

  if (!caseItem) {
    notFound();
  }

  // Get related cases (same sector or solution family)
  const relatedCases = CASES
    .filter(c => c.slug !== caseItem.slug && 
      (c.sector === caseItem.sector || 
       c.solutionFamily.some(family => caseItem.solutionFamily.includes(family))))
    .slice(0, 3);

  const getDataSensitivityBadge = () => {
    const sensitivity = caseItem.dataSensitivity;
    const badges = {
      'Public': { text: isThai ? 'ข้อมูลสาธารณะ' : 'PUBLIC DATA', color: 'text-sky-300 bg-sky-500/20' },
      'Anonymised': { text: isThai ? 'ข้อมูลไม่ระบุตัวตน' : 'ANONYMISED', color: 'text-cyan-300 bg-cyan-500/20' },
      'Synthetic': { text: isThai ? 'ข้อมูลสังเคราะห์' : 'SYNTHETIC DATA', color: 'text-purple-300 bg-purple-500/20' }
    };
    
    const badge = badges[sensitivity];
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${badge.color}`}>
        {badge.text}
      </span>
    );
  };

  return (
    <div className="bg-bg">
      {/* JSON-LD Schema */}
      <CaseSchema caseItem={caseItem} locale={locale} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-surface via-surface-2 to-surface-3 py-20">
        <div className="container mx-auto px-6">
          <Link
            href={`${basePath}/cases` as any}
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
          >
            <ArrowLeft className="h-4 w-4" />
            {isThai ? 'กลับไปดู Case Studies' : 'Back to Case Studies'}
          </Link>

          <div className="max-w-4xl space-y-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                  {caseItem.sector}
                </span>
                <h1 className="text-4xl font-bold text-text md:text-5xl mb-4">
                  {caseItem.title}
                </h1>
                <p className="text-lg text-text-muted mb-6">
                  {caseItem.subtitle}
                </p>
                
                {/* Solution Family Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseItem.solutionFamily.map((family, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary/20 text-secondary"
                    >
                      {family}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="ml-6">
                {getDataSensitivityBadge()}
              </div>
            </div>

            {/* KPI Chips */}
            <div className="flex flex-wrap gap-3">
              {caseItem.outcomes.map((outcome, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/20 text-primary font-medium"
                >
                  {outcome.value} {outcome.label.toLowerCase()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              {/* Summary */}
              <Card className="border border-hairline bg-surface">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold text-text mb-4">
                    {isThai ? 'สรุป' : 'Summary'}
                  </h2>
                  <p className="text-text-muted leading-relaxed">
                    {caseItem.solution}
                  </p>
                </CardContent>
              </Card>

              {/* Challenge */}
              <Card className="border border-hairline bg-surface">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold text-text mb-4">
                    {isThai ? 'ความท้าทาย' : 'Challenge'}
                  </h2>
                  <p className="text-text-muted leading-relaxed">
                    {caseItem.challenge}
                  </p>
                </CardContent>
              </Card>

              {/* Architecture */}
              <Card className="border border-hairline bg-surface">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold text-text mb-4">
                    {isThai ? 'สถาปัตยกรรม' : 'Architecture'}
                  </h2>
                  <div className="space-y-4 text-text-muted">
                    <p>{isThai ? 'ระบบใช้เทคโนโลยีหลักดังนี้:' : 'Key technologies used:'}</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>{isThai ? 'Edge Computing Platform (Jetson/RPi)' : 'Edge Computing Platform (Jetson/RPi)'}</li>
                      <li>{isThai ? 'On-device LLM Processing' : 'On-device LLM Processing'}</li>
                      <li>{isThai ? 'Secure Offline Pipeline' : 'Secure Offline Pipeline'}</li>
                      <li>{isThai ? 'Real-time Analytics Dashboard' : 'Real-time Analytics Dashboard'}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Data & Privacy */}
              <Card className="border border-hairline bg-surface">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold text-text mb-4">
                    {isThai ? 'ข้อมูลและความเป็นส่วนตัว' : 'Data & Privacy'}
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      {getDataSensitivityBadge()}
                    </div>
                    <p className="text-text-muted">
                      {isThai 
                        ? 'ข้อมูลที่ใช้ในการศึกษาเคสนี้ได้รับการจัดการตามมาตรฐานความเป็นส่วนตัวและความปลอดภัยที่เข้มงวด'
                        : 'Data used in this case study follows strict privacy and security standards'
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Impact */}
              <Card className="border border-hairline bg-surface">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold text-text mb-4">
                    {isThai ? 'ผลกระทบ' : 'Impact'}
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {caseItem.outcomes.map((outcome, index) => (
                      <div key={index} className="p-4 rounded-lg bg-primary/10">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {outcome.value}
                        </div>
                        <div className="text-sm text-text-muted">
                          {outcome.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {caseItem.metricsFooter && (
                    <div className="mt-6 pt-6 border-t border-hairline">
                      <h3 className="text-lg font-semibold text-text mb-4">
                        {isThai ? 'ตัวชี้วัดเพิ่มเติม' : 'Additional Metrics'}
                      </h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        {caseItem.metricsFooter.map((metric, index) => (
                          <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-surface/50">
                            <span className="text-text-muted">{metric.label}</span>
                            <span className="font-semibold text-text">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <Card className="border border-hairline bg-surface">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-text mb-4">
                    {isThai ? 'สนใจโซลูชันคล้ายกัน?' : 'Interested in Similar Solutions?'}
                  </h3>
                  <p className="text-sm text-text-muted mb-6">
                    {isThai 
                      ? 'พูดคุยกับทีมผู้เชี่ยวชาญของเราเพื่อหารือเกี่ยวกับความต้องการของคุณ'
                      : 'Talk to our expert team to discuss your specific needs'
                    }
                  </p>
                  
                  <div className="space-y-3">
                    <ShimmerButton
                      asChild
                      className="w-full justify-center px-4 py-3 text-sm"
                      background="linear-gradient(135deg, rgba(14,165,233,0.9) 0%, rgba(99,102,241,0.9) 45%, rgba(124,58,237,0.9) 100%)"
                    >
                      <Link href={`${basePath}/contact?case=${caseItem.slug}` as any} className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        {isThai ? 'พูดคุยกับผู้เชี่ยวชาญ' : 'Talk to an expert'}
                      </Link>
                    </ShimmerButton>

                    <Button
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <Link href={`${basePath}/packages/kickstart` as any} className="flex items-center gap-2">
                        {isThai ? 'เริ่มต้นด้วย Kickstart' : 'Start with Kickstart'}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Cases */}
              {relatedCases.length > 0 && (
                <Card className="border border-hairline bg-surface">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-text mb-4">
                      {isThai ? 'เคสที่เกี่ยวข้อง' : 'Related Cases'}
                    </h3>
                    <div className="space-y-3">
                      {relatedCases.map((relatedCase) => (
                        <Link
                          key={relatedCase.slug}
                          href={`${basePath}/cases/${relatedCase.slug}` as any}
                          className="block p-3 rounded-lg border border-white/10 hover:border-primary/40 transition-colors"
                        >
                          <div className="font-medium text-text text-sm mb-1">
                            {relatedCase.title}
                          </div>
                          <div className="text-xs text-text-muted">
                            {relatedCase.sector}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}