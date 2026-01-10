import { BLOG_POSTS } from '@/data/blog';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const items = BLOG_POSTS.map((post) => {
    const link = `${siteUrl}/en/blog/${post.slug}`;
    const pubDate = new Date(post.date).toUTCString();
    const title = escapeXml(post.title.en);
    const description = escapeXml(post.excerpt.en);

    return `
      <item>
        <title>${title}</title>
        <link>${link}</link>
        <guid>${link}</guid>
        <pubDate>${pubDate}</pubDate>
        <description>${description}</description>
      </item>
    `.trim();
  }).join('\n');

  const lastBuildDate = new Date(
    BLOG_POSTS.map((p) => p.date).sort().at(-1) || new Date().toISOString()
  ).toUTCString();

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>CerebraTechAI Blog</title>
        <link>${siteUrl}</link>
        <description>Insights and best practices for production-ready AI systems.</description>
        <language>en</language>
        <lastBuildDate>${lastBuildDate}</lastBuildDate>
        ${items}
      </channel>
    </rss>
  `.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

