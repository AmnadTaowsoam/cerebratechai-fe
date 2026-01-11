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

type RouteParams = {
  params: Promise<{ locale: string }> | { locale: string };
};

export async function GET(request: Request, { params }: RouteParams) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.locale?.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const allItems: Array<{ title: string; link: string; pubDate: string; description: string; category: string }> = [];

  // Blog posts
  BLOG_POSTS.forEach((post) => {
    allItems.push({
      title: escapeXml(isThai ? post.title.th : post.title.en),
      link: `${siteUrl}/${locale}/blog/${post.slug}`,
      pubDate: new Date(post.date).toUTCString(),
      description: escapeXml(isThai ? post.excerpt.th : post.excerpt.en),
      category: isThai ? 'บทความ' : 'Blog',
    });
  });

  // Case studies
  CASES.forEach((caseItem) => {
    allItems.push({
      title: escapeXml(caseItem.title),
      link: `${siteUrl}/${locale}/cases/${caseItem.slug}`,
      pubDate: new Date('2025-01-01').toUTCString(),
      description: escapeXml(caseItem.subtitle || caseItem.challenge),
      category: isThai ? 'กรณีศึกษา' : 'Case Study',
    });
  });

  // Resources (only those with dates)
  RESOURCES.filter(r => r.date).forEach((resource) => {
    allItems.push({
      title: escapeXml(isThai ? resource.title.th : resource.title.en),
      link: `${siteUrl}/${locale}/resources/${resource.slug}`,
      pubDate: new Date(resource.date!).toUTCString(),
      description: escapeXml(isThai ? resource.description.th : resource.description.en),
      category: isThai ? 'ทรัพยากร' : 'Resource',
    });
  });

  // Sort by date descending
  allItems.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  const items = allItems.map((item) => `
      <item>
        <title>${item.title}</title>
        <link>${item.link}</link>
        <guid>${item.link}</guid>
        <pubDate>${item.pubDate}</pubDate>
        <description>${item.description}</description>
        <category>${item.category}</category>
      </item>
    `.trim()).join('\n');

  const lastBuildDate = allItems.length > 0
    ? allItems[0].pubDate
    : new Date().toUTCString();

  const channelTitle = isThai
    ? 'CerebraTechAI - โซลูชัน AI และทรัพยากร'
    : 'CerebraTechAI - AI Solutions & Resources';

  const channelDescription = isThai
    ? 'ระบบ AI พร้อมใช้งานจริง: กรณีศึกษา บทความ และทรัพยากรสำหรับการทำ AI'
    : 'Production-ready AI systems: case studies, blog posts, and practical resources for AI implementation.';

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${escapeXml(channelTitle)}</title>
        <link>${siteUrl}/${locale}</link>
        <description>${escapeXml(channelDescription)}</description>
        <language>${locale}</language>
        <atom:link href="${siteUrl}/${locale}/rss.xml" rel="self" type="application/rss+xml" />
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
