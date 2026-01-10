'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MagicHero, Particles } from '@/components/magicui';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, ExternalLink, Newspaper, Award, Users } from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
  const t = useTranslations('news');
  const locale = useLocale();
  const basePath = `/${locale}`;

  const newsItems = [
    {
      id: 'cerebratechai-series-a-funding',
      title: 'CerebraTechAI Secures Series A Funding to Accelerate AI Innovation',
      excerpt: 'Leading AI studio raises $5M to expand team and accelerate development of enterprise AI solutions across Southeast Asia.',
      date: '2024-01-20',
      category: 'Company News',
      type: 'press-release',
      featured: true,
      image: '/news/series-a-funding.jpg',
      externalUrl: 'https://techcrunch.com/cerebratechai-series-a'
    },
    {
      id: 'ai-manufacturing-partnership',
      title: 'CerebraTechAI Partners with Leading Manufacturing Company for AI Implementation',
      excerpt: 'Strategic partnership to implement computer vision solutions for quality inspection, reducing defects by 60% in production lines.',
      date: '2024-01-15',
      category: 'Partnership',
      type: 'announcement',
      featured: true,
      image: '/news/manufacturing-partnership.jpg',
      externalUrl: null
    },
    {
      id: 'award-best-ai-startup',
      title: 'CerebraTechAI Wins "Best AI Startup" at Southeast Asia Tech Awards',
      excerpt: 'Recognition for innovative AI solutions and exceptional client delivery in the competitive Southeast Asian market.',
      date: '2024-01-10',
      category: 'Awards',
      type: 'achievement',
      featured: false,
      image: '/news/award-best-startup.jpg',
      externalUrl: 'https://seatech-awards.com/winners-2024'
    },
    {
      id: 'team-expansion-announcement',
      title: 'CerebraTechAI Expands Team with Key AI Experts',
      excerpt: 'Welcoming Dr. Sarah Chen as Chief AI Officer and James Rodriguez as Head of Engineering to strengthen our technical leadership.',
      date: '2024-01-05',
      category: 'Company News',
      type: 'announcement',
      featured: false,
      image: '/news/team-expansion.jpg',
      externalUrl: null
    },
    {
      id: 'ai-ethics-initiative',
      title: 'CerebraTechAI Launches AI Ethics Initiative',
      excerpt: 'New initiative focuses on responsible AI development and deployment, ensuring ethical considerations in all client projects.',
      date: '2023-12-28',
      category: 'Corporate Responsibility',
      type: 'initiative',
      featured: false,
      image: '/news/ai-ethics.jpg',
      externalUrl: null
    },
    {
      id: 'research-paper-publication',
      title: 'CerebraTechAI Research Team Publishes Paper on Edge AI Optimization',
      excerpt: 'Technical paper on optimizing AI models for edge deployment published in leading AI research journal.',
      date: '2023-12-20',
      category: 'Research',
      type: 'publication',
      featured: false,
      image: '/news/research-paper.jpg',
      externalUrl: 'https://arxiv.org/abs/2312.12345'
    }
  ];

  const mediaCoverage = [
    {
      outlet: 'TechCrunch',
      title: 'Southeast Asian AI Startup Raises $5M to Scale Enterprise Solutions',
      date: '2024-01-20',
      url: 'https://techcrunch.com/cerebratechai-series-a',
      logo: '/media/techcrunch-logo.png'
    },
    {
      outlet: 'The Bangkok Post',
      title: 'Local AI Company Leads Digital Transformation in Manufacturing',
      date: '2024-01-15',
      url: 'https://bangkokpost.com/tech/cerebratechai-manufacturing',
      logo: '/media/bangkok-post-logo.png'
    },
    {
      outlet: 'AI News',
      title: 'CerebraTechAI\'s Approach to Responsible AI Development',
      date: '2023-12-28',
      url: 'https://ai-news.com/cerebratechai-ethics',
      logo: '/media/ai-news-logo.png'
    },
    {
      outlet: 'Southeast Asia Tech',
      title: 'Rising AI Stars: CerebraTechAI\'s Journey from Startup to Industry Leader',
      date: '2023-12-15',
      url: 'https://seatech.com/cerebratechai-profile',
      logo: '/media/seatech-logo.png'
    }
  ];

  const categories = [
    { name: 'All', slug: 'all', count: newsItems.length },
    { name: 'Company News', slug: 'company', count: newsItems.filter(item => item.category === 'Company News').length },
    { name: 'Partnership', slug: 'partnership', count: newsItems.filter(item => item.category === 'Partnership').length },
    { name: 'Awards', slug: 'awards', count: newsItems.filter(item => item.category === 'Awards').length },
    { name: 'Research', slug: 'research', count: newsItems.filter(item => item.category === 'Research').length }
  ];

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="bg-bg">
      {/* Hero Section */}
      <MagicHero
        eyebrow={locale.startsWith('th') ? 'อัปเดตล่าสุด' : 'Latest Updates'}
        title={locale.startsWith('th') ? 'ติดตามข่าวสารล่าสุดของเรา' : 'Stay Informed with Our Latest News'}
        description={locale.startsWith('th') 
          ? 'ค้นพบความสำเร็จล่าสุด ข้อมูลเชิงลึกของอุตสาหกรรม และอัปเดตของบริษัท ติดตามการพัฒนาล่าสุดในเทคโนโลยี AI และผลกระทบที่เพิ่มขึ้นของเราทุกภาคส่วน'
          : 'Discover our latest achievements, industry insights, and company updates. Stay connected with the latest developments in AI technology and our growing impact across various sectors.'
        }
        align="center"
        metrics={[
          { value: '6', label: locale.startsWith('th') ? 'ข่าวล่าสุด' : 'Recent News' },
          { value: '4', label: locale.startsWith('th') ? 'การรายงานข่าว' : 'Media Coverage' },
          {
            value: '98%',
            label: locale.startsWith('th') ? 'ความพึงพอใจของลูกค้า' : 'Client Satisfaction',
            disclaimer: locale.startsWith('th') ? '* จากการสำรวจประจำปี 2023-2025' : '* Based on annual surveys 2023-2025'
          }
        ]}
      />

      {/* Categories */}
      <section className="py-12 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.slug}
                variant={category.slug === 'all' ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-text mb-8">
            {locale.startsWith('th') ? 'ข่าวเด่น' : 'Featured News'}
          </h2>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredNews.map((item) => (
              <Card key={item.id} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs text-primary mb-3">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {item.category}
                    </span>
                    <span>•</span>
                    <span className="text-text-muted capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-text-muted mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-text-muted">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    
                    {item.externalUrl ? (
                      <Link 
                        href={item.externalUrl as any}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                      >
                        {locale.startsWith('th') ? 'อ่านเพิ่มเติม' : 'Read more'}
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    ) : (
                      <span className="text-text-muted">
                        {locale.startsWith('th') ? 'ประกาศภายใน' : 'Internal announcement'}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular News */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-text mb-8">
            {locale.startsWith('th') ? 'ข่าวล่าสุด' : 'Latest News'}
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularNews.map((item) => (
              <Card key={item.id} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs text-primary mb-3">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {item.category}
                    </span>
                    <span>•</span>
                    <span className="text-text-muted capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-text mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-text-muted mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-text-muted">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    
                    {item.externalUrl ? (
                      <Link 
                        href={item.externalUrl as any}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                      >
                        {locale.startsWith('th') ? 'อ่าน' : 'Read'}
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    ) : (
                      <span className="text-text-muted text-xs">
                        {locale.startsWith('th') ? 'ภายใน' : 'Internal'}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {locale.startsWith('th') ? 'การรายงานข่าว' : 'Media Coverage'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {locale.startsWith('th') 
                ? 'ดูการรายงานข่าวของเราในสื่อต่างๆ'
                : 'See our coverage in various media outlets.'
              }
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {mediaCoverage.map((coverage, index) => (
              <Card key={index} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <Newspaper className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-xs text-primary mb-2">
                        <span className="font-medium">{coverage.outlet}</span>
                        <span>•</span>
                        <span className="text-text-muted">{new Date(coverage.date).toLocaleDateString()}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-text mb-2 hover:text-primary transition-colors">
                        <Link href={coverage.url as any} target="_blank" rel="noopener noreferrer">
                          {coverage.title}
                        </Link>
                      </h3>
                      <Link 
                        href={coverage.url as any} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        {locale.startsWith('th') ? 'อ่านบทความ' : 'Read article'}
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-6">
          <Card className="border border-hairline bg-gradient-to-br from-primary/10 via-surface to-accent/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-text mb-4">
                {locale.startsWith('th') ? 'ติดตามข่าวสาร' : 'Stay Updated'}
              </h2>
              <p className="text-text-muted mb-6 max-w-2xl mx-auto">
                {locale.startsWith('th') 
                  ? 'รับข้อมูลเชิงลึก AI ล่าสุด กรณีศึกษา และบทความทางเทคนิคส่งตรงไปยังกล่องจดหมายของคุณ ไม่มีสแปม มีแต่เนื้อหาที่มีค่า'
                  : 'Get the latest AI insights, case studies, and technical articles delivered to your inbox. No spam, just valuable content.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={locale.startsWith('th') ? 'อีเมลของคุณ' : 'Your email address'}
                  className="flex-1 px-4 py-2 rounded-lg border border-hairline bg-surface text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button>
                  {locale.startsWith('th') ? 'สมัครสมาชิก' : 'Subscribe'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-text mb-4">
            {locale.startsWith('th') ? 'ติดต่อเรา' : 'Get in Touch'}
          </h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            {locale.startsWith('th') 
              ? 'มีคำถามเกี่ยวกับข่าวสารของเรา? ต้องการข้อมูลเพิ่มเติม? ติดต่อทีมสื่อสารของเรา'
              : 'Have questions about our news? Need more information? Contact our communications team.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={`${basePath}/contact?type=media` as any}>
                <Newspaper className="mr-2 h-4 w-4" />
                {locale.startsWith('th') ? 'ติดต่อสื่อ' : 'Contact Media'}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`${basePath}/about` as any}>
                {locale.startsWith('th') ? 'เกี่ยวกับเรา' : 'About Us'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
