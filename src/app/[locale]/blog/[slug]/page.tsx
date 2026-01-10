import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User } from 'lucide-react';

import { MagicHero } from '@/components/magicui';
import { Card, CardContent } from '@/components/ui/card';
import { ArticleSchema } from '@/components/seo';
import { BLOG_POSTS, getBlogPostBySlug } from '@/data/blog';

type BlogDetailPageProps = {
  params: Promise<{ locale: string; slug: string }> | { locale: string; slug: string };
};

export async function generateStaticParams() {
  return BLOG_POSTS.flatMap((post) => [{ locale: 'en', slug: post.slug }, { locale: 'th', slug: post.slug }]);
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);

  if (!resolvedParams || !resolvedParams.locale || !resolvedParams.slug) {
    return {
      title: 'Blog Post | CerebraTechAI',
      description: 'Read our latest insights',
    };
  }

  const locale = resolvedParams.locale.startsWith('th') ? 'th' : 'en';
  const post = getBlogPostBySlug(resolvedParams.slug);
  if (!post) return {};

  const title = locale === 'th' ? post.title.th : post.title.en;
  const description = locale === 'th' ? post.excerpt.th : post.excerpt.en;

  return { title: `${title} | CerebraTechAI`, description };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await Promise.resolve(params);

  if (!resolvedParams || !resolvedParams.locale || !resolvedParams.slug) {
    notFound();
  }

  const locale = resolvedParams.locale.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';
  const basePath = `/${locale}`;

  const post = getBlogPostBySlug(resolvedParams.slug);
  if (!post) notFound();

  const title = isThai ? post.title.th : post.title.en;
  const excerpt = isThai ? post.excerpt.th : post.excerpt.en;
  const content = isThai ? post.content.th : post.content.en;

  return (
    <div className="bg-bg">
      <ArticleSchema headline={title} articleBody={[excerpt, ...content].join('\n')} author={post.author} datePublished={post.date} />

      <MagicHero
        eyebrow={
          <Link
            href={`${basePath}/blog` as any}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/60 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {isThai ? 'กลับไปบล็อก' : 'Back to blog'}
          </Link>
        }
        title={title}
        description={excerpt}
        align="center"
      />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <Card className="border border-hairline bg-surface/80">
            <CardContent className="p-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">{post.category}</span>
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString(locale)}
                </span>
              </div>

              <div className="mt-8 grid gap-4 text-text leading-relaxed">
                {content.map((p, i) => (
                  <p key={i} className="text-text-muted">
                    {p}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

