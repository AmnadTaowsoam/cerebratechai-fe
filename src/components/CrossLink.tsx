import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CrossLinkProps {
  locale?: string;
  solutionFamily: string;
  packageSlug?: string;
}

const crossLinks = {
  'Edge CV': { packageSlug: 'pilot_launch', text: 'See Pilot Launch package' },
  'RAG/LLM': { packageSlug: 'poc_lab', text: 'See POC Lab package' },
  Analytics: { packageSlug: 'kickstart', text: 'See Kickstart package' },
  OCR: { packageSlug: 'pilot_launch', text: 'See Pilot Launch package' },
  IoT: {
    packageSlug: 'production_scale',
    text: 'See Production Scale package',
  },
};

export default function CrossLink({
  locale = 'en',
  solutionFamily,
  packageSlug,
}: CrossLinkProps) {
  const isThai = locale === 'th';
  const basePath = `/${locale}`;

  const link = crossLinks[solutionFamily as keyof typeof crossLinks];
  const targetSlug = packageSlug || link?.packageSlug;

  if (!targetSlug) return null;

  return (
    <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-text">
            {isThai ? 'สนใจโซลูชันนี้?' : 'Interested in this solution?'}
          </p>
          <p className="text-xs text-text-muted">
            {isThai
              ? 'ดูแพ็กเกจที่เกี่ยวข้อง'
              : link?.text || 'See related package'}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="flex items-center gap-2"
        >
          <Link href={`${basePath}/packages/${targetSlug}` as any}>
            {isThai ? 'ดูแพ็กเกจ' : 'View Package'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
