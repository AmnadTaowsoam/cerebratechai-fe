'use client';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StickyCTAProps {
  locale?: string;
}

export default function StickyCTA({ locale = 'en' }: StickyCTAProps) {
  const isThai = locale === 'th';
  const basePath = `/${locale}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-bg/95 backdrop-blur-sm border-t border-white/10 p-4">
        <div className="container mx-auto">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            size="lg"
          >
            <Link href={`${basePath}/contact` as any} className="flex items-center justify-center gap-2">
              <MessageCircle className="h-5 w-5" />
              {isThai ? 'พูดคุยกับผู้เชี่ยวชาญ' : 'Talk to an expert'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

