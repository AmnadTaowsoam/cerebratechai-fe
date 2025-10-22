'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MagicHero } from '@/components/magicui';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const t = useTranslations('blog');
  const locale = useLocale();
  const basePath = `/${locale}`;

  const blogPosts = [
    {
      slug: 'ai-implementation-best-practices',
      title: 'AI Implementation Best Practices: Lessons from 50+ Production Deployments',
      excerpt: 'Learn from our experience deploying AI solutions across various industries, including common pitfalls and how to avoid them.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Implementation',
      featured: true
    },
    {
      slug: 'mlops-production-guide',
      title: 'MLOps in Production: A Complete Guide to Scaling AI Systems',
      excerpt: 'Everything you need to know about implementing MLOps practices for reliable, scalable AI systems in production environments.',
      author: 'James Rodriguez',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'MLOps',
      featured: true
    },
    {
      slug: 'computer-vision-manufacturing',
      title: 'Computer Vision in Manufacturing: Reducing Defects by 60%',
      excerpt: 'Case study on implementing computer vision for quality inspection in automotive manufacturing, including technical details and ROI analysis.',
      author: 'Dr. Priya Patel',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Case Study',
      featured: false
    },
    {
      slug: 'llm-thai-language-optimization',
      title: 'Optimizing LLMs for Thai Language: Challenges and Solutions',
      excerpt: 'Technical deep dive into fine-tuning large language models for Thai language processing, including performance benchmarks.',
      author: 'Michael Kim',
      date: '2024-01-01',
      readTime: '15 min read',
      category: 'Technical',
      featured: false
    },
    {
      slug: 'ai-roi-measurement',
      title: 'Measuring AI ROI: Beyond Technical Metrics',
      excerpt: 'How to properly measure and communicate the business value of AI investments to stakeholders and executives.',
      author: 'Dr. Sarah Chen',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Business',
      featured: false
    },
    {
      slug: 'edge-ai-deployment',
      title: 'Edge AI Deployment: Bringing Intelligence to the Edge',
      excerpt: 'Comprehensive guide to deploying AI models at the edge, including hardware considerations, optimization techniques, and real-world examples.',
      author: 'James Rodriguez',
      date: '2023-12-25',
      readTime: '11 min read',
      category: 'Technical',
      featured: false
    }
  ];

  const categories = [
    { name: 'All', slug: 'all', count: blogPosts.length },
    { name: 'Implementation', slug: 'implementation', count: 1 },
    { name: 'MLOps', slug: 'mlops', count: 1 },
    { name: 'Case Study', slug: 'case-study', count: 1 },
    { name: 'Technical', slug: 'technical', count: 2 },
    { name: 'Business', slug: 'business', count: 1 }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="bg-bg">
      {/* Hero Section */}
      <MagicHero
        eyebrow={locale.startsWith('th') ? 'ความรู้และข้อมูลเชิงลึกเกี่ยวกับ AI' : 'AI Insights & Knowledge'}
        title={locale.startsWith('th') ? 'บล็อกและข้อมูลเชิงลึก' : 'Blog & Insights'}
        description={locale.startsWith('th') 
          ? 'ติดตามเทรนด์ล่าสุด แนวทางปฏิบัติที่ดีที่สุด และข้อมูลเชิงลึกทางเทคนิคจากผู้เชี่ยวชาญ AI ของเรา เรียนรู้จากการนำไปใช้งานจริงและกรณีศึกษาในอุตสาหกรรม'
          : 'Stay updated with the latest trends, best practices, and technical insights from our AI experts. Learn from real-world implementations and industry case studies.'
        }
        align="center"
        metrics={[
          { value: '6', label: locale.startsWith('th') ? 'บทความล่าสุด' : 'Latest Articles' },
          { value: '5', label: locale.startsWith('th') ? 'ผู้เชี่ยวชาญ' : 'Expert Authors' },
          { value: '15+', label: locale.startsWith('th') ? 'นาที อ่านเฉลี่ย' : 'Min Avg Read' }
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

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-text mb-8">
            {locale.startsWith('th') ? 'บทความแนะนำ' : 'Featured Articles'}
          </h2>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredPosts.map((post) => (
              <Card key={post.slug} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs text-primary mb-3">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-text mb-3 hover:text-primary transition-colors">
                    <Link href={`${basePath}/blog/${post.slug}` as any}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-text-muted mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-text-muted">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <Link 
                      href={`${basePath}/blog/${post.slug}` as any}
                      className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                    >
                      {locale.startsWith('th') ? 'อ่านเพิ่มเติม' : 'Read more'}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-text mb-8">
            {locale.startsWith('th') ? 'บทความล่าสุด' : 'Latest Articles'}
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Card key={post.slug} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs text-primary mb-3">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-text mb-3 hover:text-primary transition-colors">
                    <Link href={`${basePath}/blog/${post.slug}` as any}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-sm text-text-muted mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-text-muted">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <Link 
                      href={`${basePath}/blog/${post.slug}` as any}
                      className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                    >
                      {locale.startsWith('th') ? 'อ่าน' : 'Read'}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Author Spotlight */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {locale.startsWith('th') ? 'พบกับผู้เขียนผู้เชี่ยวชาญของเรา' : 'Meet Our Expert Authors'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {locale.startsWith('th') 
                ? 'เนื้อหาบล็อกของเราเขียนโดยผู้เชี่ยวชาญ AI ชั้นนำในอุตสาหกรรมที่มีประสบการณ์หลายปีในการนำ AI ไปใช้งานในอุตสาหกรรมต่างๆ'
                : 'Our blog content is written by leading AI industry experts with years of experience implementing AI across various industries.'
              }
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">Dr. Sarah Chen</h3>
                <p className="text-sm text-primary mb-2">Chief AI Officer</p>
                <p className="text-xs text-text-muted mb-4">
                  {locale.startsWith('th') 
                    ? 'อดีตนักวิจัย AI ของ Google มีประสบการณ์ 15+ ปีในด้าน machine learning และ computer vision ผู้เชี่ยวชาญในแนวทางปฏิบัติที่ดีที่สุดในการนำ AI ไปใช้'
                    : 'Former Google AI researcher with 15+ years in machine learning and computer vision. Expert in AI implementation best practices.'
                  }
                </p>
                <div className="text-xs text-text-muted">
                  <span className="font-medium">
                    {locale.startsWith('th') ? '2 บทความ' : '2 articles'}
                  </span> • {locale.startsWith('th') ? 'ล่าสุด: AI Implementation Best Practices' : 'Latest: AI Implementation Best Practices'}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <User className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">James Rodriguez</h3>
                <p className="text-sm text-accent mb-2">Head of Engineering</p>
                <p className="text-xs text-text-muted mb-4">
                  {locale.startsWith('th') 
                    ? 'อดีตสถาปนิกของ Microsoft เชี่ยวชาญด้าน AI infrastructure ที่ขยายได้และ MLOps มีความเชี่ยวชาญลึกในระบบ AI ระดับ production'
                    : 'Ex-Microsoft architect specializing in scalable AI infrastructure and MLOps. Deep expertise in production AI systems.'
                  }
                </p>
                <div className="text-xs text-text-muted">
                  <span className="font-medium">
                    {locale.startsWith('th') ? '2 บทความ' : '2 articles'}
                  </span> • {locale.startsWith('th') ? 'ล่าสุด: MLOps in Production' : 'Latest: MLOps in Production'}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">Dr. Priya Patel</h3>
                <p className="text-sm text-primary mb-2">Lead Data Scientist</p>
                <p className="text-xs text-text-muted mb-4">
                  {locale.startsWith('th') 
                    ? 'ปริญญาเอกด้านสถิติ ผู้เชี่ยวชาญใน predictive analytics และ time-series forecasting เชี่ยวชาญเฉพาะด้าน computer vision applications'
                    : 'PhD in Statistics, expert in predictive analytics and time-series forecasting. Specializes in computer vision applications.'
                  }
                </p>
                <div className="text-xs text-text-muted">
                  <span className="font-medium">
                    {locale.startsWith('th') ? '1 บทความ' : '1 article'}
                  </span> • {locale.startsWith('th') ? 'ล่าสุด: Computer Vision in Manufacturing' : 'Latest: Computer Vision in Manufacturing'}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="border border-hairline bg-gradient-to-br from-primary/10 via-surface to-accent/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-text mb-4">
                {locale.startsWith('th') ? 'ติดตามข่าวสาร' : 'Stay Updated'}
              </h2>
              <p className="text-text-muted mb-6 max-w-2xl mx-auto">
                {locale.startsWith('th') 
                  ? 'รับข้อมูลเชิงลึกล่าสุดเกี่ยวกับ AI กรณีศึกษา และบทความทางเทคนิคส่งตรงถึงอีเมลของคุณ ไม่มีสแปม มีแค่เนื้อหาที่มีคุณค่าจากทีมผู้เชี่ยวชาญของเรา'
                  : 'Get the latest AI insights, case studies, and technical articles delivered to your inbox. No spam, just valuable content from our expert team.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={locale.startsWith('th') ? 'กรอกอีเมลของคุณ' : 'Enter your email'}
                  className="flex-1 px-4 py-2 rounded-lg border border-hairline bg-surface text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button>
                  {locale.startsWith('th') ? 'สมัครรับข่าวสาร' : 'Subscribe'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
