'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, Calendar, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShimmerButton } from '@/components/magicui';

interface CTABannerProps {
  variant?: 'default' | 'gradient' | 'minimal';
  title?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  className?: string;
}

export function CTABanner({
  variant = 'default',
  title,
  description,
  primaryAction,
  secondaryAction,
  className = '',
}: CTABannerProps) {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;

  const defaultTitle = isThai
    ? 'พร้อมที่จะเริ่มต้นแล้วหรือยัง?'
    : 'Ready to Get Started?';

  const defaultDescription = isThai
    ? 'คุยกับทีมของเราเพื่อหาว่าเราจะช่วยแก้ปัญหาของคุณได้อย่างไร'
    : 'Talk to our team to explore how we can solve your challenges.';

  const defaultPrimaryAction = {
    label: isThai ? 'คุยกับทีมเรา' : 'Talk to Our Team',
    href: `${basePath}/contact`,
  };

  const defaultSecondaryAction = {
    label: isThai ? 'ดูแพ็กเกจ' : 'View Packages',
    href: `${basePath}/packages`,
  };

  if (variant === 'minimal') {
    return (
      <div className={`py-12 ${className}`}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text mb-4">
              {title || defaultTitle}
            </h2>
            <p className="text-text-muted mb-6 max-w-2xl mx-auto">
              {description || defaultDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link
                  href={
                    (primaryAction?.href || defaultPrimaryAction.href) as any
                  }
                >
                  {primaryAction?.label || defaultPrimaryAction.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href={
                    (secondaryAction?.href ||
                      defaultSecondaryAction.href) as any
                  }
                >
                  {secondaryAction?.label || defaultSecondaryAction.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <section className={`relative py-16 ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.12),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.12),_transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-6">
          <Card className="border border-white/10 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-text mb-3">
                    {title || defaultTitle}
                  </h2>
                  <p className="text-text-muted">
                    {description || defaultDescription}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
                  <ShimmerButton asChild className="px-6 py-3">
                    <Link
                      href={
                        (primaryAction?.href ||
                          defaultPrimaryAction.href) as any
                      }
                      className="inline-flex items-center gap-2"
                    >
                      {primaryAction?.label || defaultPrimaryAction.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </ShimmerButton>
                  <Button asChild variant="outline" size="lg">
                    <Link
                      href={
                        (secondaryAction?.href ||
                          defaultSecondaryAction.href) as any
                      }
                    >
                      {secondaryAction?.label || defaultSecondaryAction.label}
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className={`py-16 bg-surface/30 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text mb-4">
            {title || defaultTitle}
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            {description || defaultDescription}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          <Card className="border border-hairline bg-surface/80 hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">
                {isThai ? 'คุยกับเรา' : 'Chat with Us'}
              </h3>
              <p className="text-sm text-text-muted mb-4">
                {isThai
                  ? 'ส่งข้อความมาคุยกับทีม เราตอบกลับภายใน 24 ชั่วโมง'
                  : 'Send us a message. We respond within 24 hours.'}
              </p>
              <Button asChild className="w-full">
                <Link href={`${basePath}/contact` as any}>
                  {isThai ? 'ส่งข้อความ' : 'Send Message'}
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-hairline bg-surface/80 hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">
                {isThai ? 'โทรหาเรา' : 'Call Us'}
              </h3>
              <p className="text-sm text-text-muted mb-4">
                {isThai
                  ? 'โทรคุยโดยตรง จ-ศ 9:00-18:00'
                  : 'Speak directly. Mon-Fri 9:00-18:00'}
              </p>
              <Button asChild variant="outline" className="w-full">
                <a href="tel:+66856621113">085-662-1113</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-hairline bg-surface/80 hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">
                {isThai ? 'ดูแพ็กเกจ' : 'View Packages'}
              </h3>
              <p className="text-sm text-text-muted mb-4">
                {isThai
                  ? 'ดูแพ็กเกจและราคาของเรา'
                  : 'Explore our packages and pricing'}
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href={`${basePath}/packages` as any}>
                  {isThai ? 'ดูแพ็กเกจ' : 'View Packages'}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
