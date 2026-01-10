'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useLocale } from 'next-intl';
import { ArrowRight, Download, ExternalLink, Video } from 'lucide-react';

import { MagicHero, Particles } from '@/components/magicui';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAnalytics } from '@/lib/hooks/use-analytics';
import { DownloadGateModal } from '@/components/resources/DownloadGateModal';
import { RESOURCES, RESOURCE_ICON, type ResourceItem, type ResourceType } from '@/data/resources';

type Filter = 'all' | ResourceType;

export default function ResourcesPage() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;
  const { trackCtaClick, trackFormSubmit } = useAnalytics();

  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [gateOpen, setGateOpen] = useState(false);
  const [selected, setSelected] = useState<ResourceItem | null>(null);
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return RESOURCES;
    return RESOURCES.filter((r) => r.type === activeFilter);
  }, [activeFilter]);

  const counts = useMemo(() => {
    const byType: Record<ResourceType, number> = {
      whitepaper: 0,
      webinar: 0,
      ebook: 0,
      template: 0,
    };
    for (const r of RESOURCES) byType[r.type] += 1;
    return byType;
  }, []);

  const categories = useMemo(
    () => [
      { slug: 'all' as const, label: isThai ? 'ทั้งหมด' : 'All', count: RESOURCES.length },
      { slug: 'whitepaper' as const, label: isThai ? 'ไวท์เปเปอร์' : 'Whitepapers', count: counts.whitepaper },
      { slug: 'webinar' as const, label: isThai ? 'เว็บบินาร์' : 'Webinars', count: counts.webinar },
      { slug: 'ebook' as const, label: isThai ? 'อีบุ๊ก' : 'E-books', count: counts.ebook },
      { slug: 'template' as const, label: isThai ? 'เทมเพลต' : 'Templates', count: counts.template },
    ],
    [counts, isThai]
  );

  const openDownloadGate = (resource: ResourceItem) => {
    setSelected(resource);
    setGateOpen(true);
    trackCtaClick(`resource-download-${resource.slug}`, `Download ${resource.slug}`);
  };

  const confirmDownload = ({ email }: { email: string; name?: string }) => {
    if (!selected?.downloadUrl) return;
    trackFormSubmit(`resource-download-${selected.slug}`, 'resource-download');
    setGateOpen(false);
    setShowSuccess(true);
    window.open(selected.downloadUrl, '_blank', 'noopener,noreferrer');
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="bg-bg">
      <DownloadGateModal
        open={gateOpen}
        locale={locale}
        resource={selected}
        onClose={() => setGateOpen(false)}
        onConfirm={confirmDownload}
      />

      {/* Hero */}
      <MagicHero
        eyebrow={isThai ? 'แหล่งความรู้' : 'Resources'}
        title={isThai ? 'เครื่องมือและบทความเพื่อทำ AI ให้ใช้งานจริง' : 'Practical resources for production-ready AI'}
        description={
          isThai
            ? 'รวมไวท์เปเปอร์ เว็บบินาร์ และเทมเพลตที่ช่วยให้คุณวางแผน สโคป และ deploy ระบบ AI ได้ไวขึ้น (ฟรีทั้งหมด)'
            : 'Whitepapers, webinars, and templates to help you scope, build, and deploy AI systems faster (all free).'
        }
        align="center"
        actions={
          <Button asChild size="lg">
            <Link href={`${basePath}/contact` as any}>
              {isThai ? 'ปรึกษาฟรี' : 'Book Free Consult'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      >
        <Particles quantity={35} staticity={20} ease={60} />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-primary/15" />
      </MagicHero>

      {/* Filters */}
      <section className="py-12 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <Button
                key={c.slug}
                variant={activeFilter === c.slug ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
                onClick={() => setActiveFilter(c.slug)}
              >
                {c.label} ({c.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((resource) => {
              const Icon = RESOURCE_ICON[resource.type];

              return (
                <Card
                  key={resource.slug}
                  className="border border-hairline bg-surface/80 hover:bg-surface transition-colors group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-xs text-primary mb-2">
                          <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                            {isThai ? resource.category.th : resource.category.en}
                          </span>
                          <span className="text-text-muted">|</span>
                          <span className="text-text-muted capitalize">{resource.type}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                          {isThai ? resource.title.th : resource.title.en}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-text-muted mb-4 leading-relaxed">
                      {isThai ? resource.description.th : resource.description.en}
                    </p>

                    <div className="flex items-center justify-between text-xs text-text-muted mb-4">
                      <div className="flex items-center gap-3">
                        {resource.size ? <span>{resource.size}</span> : null}
                        {resource.pages ? <span>{resource.pages}</span> : null}
                        {resource.duration ? <span>{resource.duration}</span> : null}
                        {resource.format ? <span>{resource.format}</span> : null}
                        {resource.date ? <span>{new Date(resource.date).toLocaleDateString(locale)}</span> : null}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {resource.downloadUrl ? (
                        <Button size="sm" className="flex-1" onClick={() => openDownloadGate(resource)}>
                          <Download className="h-4 w-4 mr-2" />
                          {isThai ? 'ดาวน์โหลด' : 'Download'}
                        </Button>
                      ) : (
                        <Button size="sm" className="flex-1" asChild>
                          <Link
                            href={`${basePath}/resources/${resource.slug}` as any}
                            onClick={() => trackCtaClick(`resource-watch-${resource.slug}`, `Open ${resource.slug}`)}
                          >
                            <Video className="h-4 w-4 mr-2" />
                            {isThai ? 'ดู' : 'Watch'}
                          </Link>
                        </Button>
                      )}

                      <Button size="sm" variant="outline" asChild>
                        <Link href={`${basePath}/resources/${resource.slug}` as any} aria-label="Open details">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-6">
          <Card className="border border-hairline bg-gradient-to-br from-primary/10 via-surface to-accent/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-text mb-4">{isThai ? 'รับทรัพยากรใหม่ก่อนใคร' : 'Get New Resources First'}</h2>
              <p className="text-text-muted mb-6 max-w-2xl mx-auto">
                {isThai
                  ? 'สมัครรับอีเมลเพื่อรับไวท์เปเปอร์/เทมเพลตใหม่ ๆ และอัปเดตเว็บบินาร์ (ยกเลิกได้ทุกเมื่อ)'
                  : 'Subscribe for new whitepapers, templates, and webinars (unsubscribe anytime).'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  placeholder={isThai ? 'you@company.com' : 'you@company.com'}
                  className="flex-1 px-4 py-2 rounded-lg border border-hairline bg-surface text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button
                  onClick={() => {
                    trackFormSubmit('resources-newsletter', 'newsletter');
                    setShowSuccess(true);
                    setTimeout(() => setShowSuccess(false), 3000);
                  }}
                >
                  {isThai ? 'สมัครรับข่าวสาร' : 'Subscribe'}
                </Button>
              </div>
              {showSuccess ? (
                <p className="mt-4 text-sm text-success">{isThai ? 'สำเร็จ! ขอบคุณที่สมัครรับข่าวสาร' : 'Success! Thanks for subscribing.'}</p>
              ) : null}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-text mb-4">{isThai ? 'อยากให้ช่วยเลือกทรัพยากรให้?' : 'Need help choosing?'}</h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            {isThai
              ? 'บอกโจทย์/อุตสาหกรรม/ข้อจำกัด เราจะแนะนำสิ่งที่ควรอ่านและเส้นทางที่เหมาะกับทีมคุณ'
              : 'Share your use-case and constraints—we’ll recommend what to read and a path that fits your team.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={`${basePath}/contact` as any}>
                {isThai ? 'คุยกับทีม' : 'Contact Us'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`${basePath}/blog` as any}>{isThai ? 'อ่านบทความ' : 'Read the blog'}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
