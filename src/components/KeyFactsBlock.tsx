import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type KeyFact = {
  label: string;
  value: string | string[];
  icon?: React.ReactNode;
};

type KeyFactsBlockProps = {
  facts: KeyFact[];
  title?: string;
  locale?: 'en' | 'th';
  className?: string;
};

export default function KeyFactsBlock({
  facts,
  title,
  locale = 'en',
  className = ''
}: KeyFactsBlockProps) {
  const isThai = locale === 'th';
  const defaultTitle = isThai ? 'ข้อมูลสำคัญ' : 'Key Facts';

  return (
    <Card className={`border border-hairline bg-surface ${className}`}>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-text mb-4">
          {title || defaultTitle}
        </h3>
        <div className="space-y-3">
          {facts.map((fact, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {fact.icon || (
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                )}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-text-muted mb-1">
                  {fact.label}
                </div>
                {Array.isArray(fact.value) ? (
                  <ul className="space-y-1">
                    {fact.value.map((item, i) => (
                      <li key={i} className="text-sm text-text">
                        • {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-sm text-text">
                    {fact.value}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
