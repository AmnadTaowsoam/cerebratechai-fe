import { BLOG_POSTS } from '@/data/blog';
import { CASES } from '@/data/cases';
import { RESOURCES } from '@/data/resources';

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

  const allItems: Array<{
    title: string;
    link: string;
    pubDate: string;
    description: string;
    category: string;
  }> = [];

  // Blog posts
  BLOG_POSTS.forEach(post => {
    allItems.push({
      title: escapeXml(post.title.en),
      link: `${siteUrl}/en/blog/${post.slug}`,
      pubDate: new Date(post.date).toUTCString(),
      description: escapeXml(post.excerpt.en),
      category: 'Blog',
    });
  });

  // Case studies (use current date as they don't have dates in data)
  CASES.forEach(caseItem => {
    allItems.push({
      title: escapeXml(caseItem.title),
      link: `${siteUrl}/en/cases/${caseItem.slug}`,
      pubDate: new Date('2025-01-01').toUTCString(),
      description: escapeXml(caseItem.subtitle || caseItem.challenge),
      category: 'Case Study',
    });
  });

  // Resources (only those with dates)
  RESOURCES.filter(r => r.date).forEach(resource => {
    allItems.push({
      title: escapeXml(resource.title.en),
      link: `${siteUrl}/en/resources/${resource.slug}`,
      pubDate: new Date(resource.date!).toUTCString(),
      description: escapeXml(resource.description.en),
      category: 'Resource',
    });
  });

  // Sort by date descending
  allItems.sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );

  const items = allItems
    .map(item =>
      `
      <item>
        <title>${item.title}</title>
        <link>${item.link}</link>
        <guid>${item.link}</guid>
        <pubDate>${item.pubDate}</pubDate>
        <description>${item.description}</description>
        <category>${item.category}</category>
      </item>
    `.trim()
    )
    .join('\n');

  const lastBuildDate =
    allItems.length > 0 ? allItems[0].pubDate : new Date().toUTCString();

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>CerebraTechAI - AI Solutions & Resources</title>
        <link>${siteUrl}</link>
        <description>Production-ready AI systems: case studies, blog posts, and practical resources for AI implementation.</description>
        <language>en</language>
        <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
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
