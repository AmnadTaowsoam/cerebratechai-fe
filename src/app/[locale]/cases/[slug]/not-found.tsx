import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CaseNotFound({ params }: { params: { locale: string } }) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const basePath = `/${locale}`;

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-6">
        <div className="space-y-3">
          <h1 className="text-6xl font-bold text-text">404</h1>
          <h2 className="text-2xl font-semibold text-text">
            Case Study Not Found
          </h2>
          <p className="text-text-muted">
            The case study you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="default">
            <Link href={`${basePath}/cases` as any} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Cases
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link href={basePath as any} className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
