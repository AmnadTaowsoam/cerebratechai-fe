import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShimmerButton } from '@/components/magicui';
import type { CaseItem } from '@/data/cases';

interface CaseCardProps {
  caseItem: CaseItem;
  locale?: string;
}

export default function CaseCard({ caseItem, locale = 'en' }: CaseCardProps) {
  const isThai = locale === 'th';
  const basePath = `/${locale}`;

  const getDataSensitivityBadge = () => {
    const sensitivity = caseItem.dataSensitivity;
    const badges = {
      'Public': { text: isThai ? 'ข้อมูลสาธารณะ' : 'PUBLIC DATA', color: 'text-sky-300 bg-sky-500/20' },
      'Anonymised': { text: isThai ? 'ข้อมูลไม่ระบุตัวตน' : 'ANONYMISED', color: 'text-cyan-300 bg-cyan-500/20' },
      'Synthetic': { text: isThai ? 'ข้อมูลสังเคราะห์' : 'SYNTHETIC DATA', color: 'text-purple-300 bg-purple-500/20' }
    };
    
    const badge = badges[sensitivity];
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
        {badge.text}
      </span>
    );
  };

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-surface/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_64px_rgba(8,23,45,0.5)]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-text">
          {caseItem.title}
        </CardTitle>
        <p className="text-sm text-text-muted">
          {caseItem.subtitle}
        </p>
        
        {/* KPI Chips */}
        <div className="flex flex-wrap gap-2 mt-3">
          {caseItem.outcomes.slice(0, 3).map((outcome, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary"
            >
              {outcome.value} {outcome.label.toLowerCase()}
            </span>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4 text-sm text-text-muted">
        <div>
          <p className="font-semibold text-text mb-1">
            {isThai ? 'ความท้าทาย' : 'Challenge'}
          </p>
          <p className="text-sm">{caseItem.challenge}</p>
        </div>

        <div>
          <p className="font-semibold text-text mb-1">
            {isThai ? 'โซลูชัน' : 'Solution'}
          </p>
          <p className="text-sm">{caseItem.solution}</p>
        </div>

        {/* Data Sensitivity Badge */}
        <div className="flex justify-start">
          {getDataSensitivityBadge()}
        </div>

        {/* Footer Metrics */}
        {caseItem.metricsFooter && (
          <div className="mt-auto border-t border-hairline pt-4">
            <div className="flex flex-wrap gap-4 text-xs">
              {caseItem.metricsFooter.map((metric, index) => (
                <div key={index}>
                  <p className="font-semibold text-text">
                    {metric.label}
                  </p>
                  <p className="text-text-muted">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex gap-2 mt-4">
          <ShimmerButton
            asChild
            className="flex-1 justify-center px-4 py-2 text-sm"
            background="linear-gradient(135deg, rgba(14,165,233,0.9) 0%, rgba(99,102,241,0.9) 45%, rgba(124,58,237,0.9) 100%)"
          >
            <Link href={`${basePath}/cases/${caseItem.slug}` as any} className="flex items-center gap-2">
              {isThai ? 'ดูเรื่องราว' : 'View story'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ShimmerButton>

          <Button
            variant="outline"
            size="sm"
            asChild
            className="px-3 py-2 text-xs"
          >
            <Link href={`${basePath}/contact?case=${caseItem.slug}` as any} className="flex items-center gap-1">
              <MessageCircle className="h-3 w-3" />
              {isThai ? 'ขอโซลูชัน' : 'Request'}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

