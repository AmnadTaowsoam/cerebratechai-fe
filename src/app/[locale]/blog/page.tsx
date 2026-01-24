'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useLocale } from 'next-intl';
import { ArrowRight, Calendar, User } from 'lucide-react';

import { MagicHero } from '@/components/magicui';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BLOG_POSTS } from '@/data/blog';

export default function BlogPage() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;

  const featuredPosts = useMemo(() => BLOG_POSTS.slice(0, 2), []);
  const regularPosts = useMemo(() => BLOG_POSTS.slice(2), []);

  return (
    <div className="bg-bg">
      <MagicHero
        eyebrow={isThai ? 'บทความและอินไซต์' : 'AI Insights & Knowledge'}
        title={isThai ? 'บล็อก' : 'Blog & Insights'}
        description={
          isThai
            ? 'อัปเดตแนวโน้ม เทคนิค และบทเรียนจากงาน AI ที่ใช้งานจริง ตั้งแต่ discovery ไปจนถึง production'
            : 'Best practices, technical deep-dives, and lessons learned from real-world AI deployments.'
        }
        align="center"
        actions={
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href={`${basePath}/resources` as any}>
                {isThai ? 'ดูแหล่งความรู้' : 'Explore Resources'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={`${basePath}/contact` as any}>
                {isThai ? 'ปรึกษาฟรี' : 'Book Free Consult'}
              </Link>
            </Button>
          </div>
        }
      />

      {/* Featured */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-text">
              {isThai ? 'บทความแนะนำ' : 'Featured'}
            </h2>
            <a
              href={`${basePath}/rss.xml`}
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              RSS
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredPosts.map(post => (
              <Card
                key={post.slug}
                className="border border-hairline bg-surface/80 hover:bg-surface transition-colors"
              >
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs text-primary">
                    <span className="rounded-full bg-primary/10 px-2 py-1">
                      {post.category}
                    </span>
                    <span className="text-text-muted">|</span>
                    <span className="text-text-muted">
                      {isThai ? post.readTime.th : post.readTime.en}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-text hover:text-primary transition-colors">
                    <Link href={`${basePath}/blog/${post.slug}` as any}>
                      {isThai ? post.title.th : post.title.en}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    {isThai ? post.excerpt.th : post.excerpt.en}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-sm text-text-muted">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(post.date).toLocaleDateString(locale)}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`${basePath}/blog/${post.slug}` as any}
                      className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                    >
                      {isThai ? 'อ่านต่อ' : 'Read more'}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-text mb-8">
            {isThai ? 'บทความล่าสุด' : 'Latest articles'}
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map(post => (
              <Card
                key={post.slug}
                className="border border-hairline bg-surface/80 hover:bg-surface transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs text-primary mb-3">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    <span className="text-text-muted">|</span>
                    <span className="text-text-muted">
                      {isThai ? post.readTime.th : post.readTime.en}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-text mb-3 hover:text-primary transition-colors">
                    <Link href={`${basePath}/blog/${post.slug}` as any}>
                      {isThai ? post.title.th : post.title.en}
                    </Link>
                  </h3>

                  <p className="text-sm text-text-muted mb-4 leading-relaxed">
                    {isThai ? post.excerpt.th : post.excerpt.en}
                  </p>

                  <div className="flex items-center justify-between text-sm text-text-muted">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(post.date).toLocaleDateString(locale)}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`${basePath}/blog/${post.slug}` as any}
                      className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                    >
                      {isThai ? 'อ่าน' : 'Read'}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
