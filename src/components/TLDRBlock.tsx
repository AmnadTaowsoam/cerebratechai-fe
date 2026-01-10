import { Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type TLDRBlockProps = {
  summary: string;
  locale?: 'en' | 'th';
  className?: string;
};

export default function TLDRBlock({ summary, locale = 'en', className = '' }: TLDRBlockProps) {
  const isThai = locale === 'th';

  return (
    <Card className={`border-2 border-primary/30 bg-primary/5 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
              <Info className="h-4 w-4 text-primary" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
              {isThai ? 'สรุปสั้น (TL;DR)' : 'TL;DR'}
            </h3>
            <p className="text-text leading-relaxed">
              {summary}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
