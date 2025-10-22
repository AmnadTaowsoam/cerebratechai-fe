'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MagicHero, Particles } from '@/components/magicui';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Download, ExternalLink, FileText, Video, BookOpen, Wrench } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  const t = useTranslations('resources');
  const locale = useLocale();
  const basePath = `/${locale}`;

  const resources = [
    {
      type: 'whitepaper',
      title: 'AI Implementation Roadmap: From Strategy to Production',
      description: 'A comprehensive guide to planning and executing AI initiatives in enterprise environments.',
      downloadUrl: '/resources/ai-implementation-roadmap.pdf',
      icon: FileText,
      category: 'Strategy',
      size: '2.3 MB',
      pages: '24 pages'
    },
    {
      type: 'whitepaper',
      title: 'MLOps Best Practices: Scaling AI Operations',
      description: 'Learn how to implement robust MLOps practices for reliable AI system operations.',
      downloadUrl: '/resources/mlops-best-practices.pdf',
      icon: FileText,
      category: 'Technical',
      size: '3.1 MB',
      pages: '32 pages'
    },
    {
      type: 'webinar',
      title: 'Computer Vision in Manufacturing: Real-World Case Studies',
      description: 'Watch our experts discuss successful computer vision implementations in manufacturing.',
      watchUrl: '/resources/computer-vision-webinar',
      icon: Video,
      category: 'Case Study',
      duration: '45 min',
      date: '2024-01-15'
    },
    {
      type: 'webinar',
      title: 'LLM Optimization for Thai Language Processing',
      description: 'Technical deep dive into optimizing large language models for Thai language.',
      watchUrl: '/resources/llm-thai-optimization',
      icon: Video,
      category: 'Technical',
      duration: '60 min',
      date: '2024-01-10'
    },
    {
      type: 'ebook',
      title: 'The Complete Guide to AI ROI Measurement',
      description: 'Everything you need to know about measuring and communicating AI business value.',
      downloadUrl: '/resources/ai-roi-guide.pdf',
      icon: BookOpen,
      category: 'Business',
      size: '4.2 MB',
      pages: '48 pages'
    },
    {
      type: 'template',
      title: 'AI Project Planning Template',
      description: 'Structured templates for planning AI projects from conception to deployment.',
      downloadUrl: '/resources/ai-project-template.zip',
      icon: Wrench,
      category: 'Planning',
      size: '1.8 MB',
      format: 'Excel + PDF'
    },
    {
      type: 'template',
      title: 'MLOps Pipeline Configuration Templates',
      description: 'Ready-to-use templates for common MLOps pipeline configurations.',
      downloadUrl: '/resources/mlops-templates.zip',
      icon: Wrench,
      category: 'Technical',
      size: '2.5 MB',
      format: 'YAML + Docker'
    },
    {
      type: 'whitepaper',
      title: 'Edge AI Deployment: Challenges and Solutions',
      description: 'Comprehensive analysis of deploying AI models at the edge in production environments.',
      downloadUrl: '/resources/edge-ai-deployment.pdf',
      icon: FileText,
      category: 'Technical',
      size: '2.8 MB',
      pages: '28 pages'
    }
  ];

  const categories = [
    { name: 'All', slug: 'all', count: resources.length },
    { name: 'Whitepapers', slug: 'whitepapers', count: resources.filter(r => r.type === 'whitepaper').length },
    { name: 'Webinars', slug: 'webinars', count: resources.filter(r => r.type === 'webinar').length },
    { name: 'E-books', slug: 'ebooks', count: resources.filter(r => r.type === 'ebook').length },
    { name: 'Templates', slug: 'templates', count: resources.filter(r => r.type === 'template').length }
  ];

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'whitepaper':
        return FileText;
      case 'webinar':
        return Video;
      case 'ebook':
        return BookOpen;
      case 'template':
        return Wrench;
      default:
        return FileText;
    }
  };

  return (
    <div className="bg-bg">
      {/* Hero Section */}
      <MagicHero
        eyebrow={t('eyebrow', { default: 'Knowledge Hub' })}
        title={t('title', { default: 'Resources & Downloads' })}
        description={t('description', { 
          default: 'Access our comprehensive collection of whitepapers, webinars, templates, and guides to accelerate your AI journey. All resources are free and based on real-world experience.' 
        })}
      >
        <Particles quantity={35} staticity={20} ease={60} />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-primary/15" />
      </MagicHero>

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

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => {
              const IconComponent = getResourceIcon(resource.type);
              
              return (
                <Card key={index} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-xs text-primary mb-2">
                          <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                            {resource.category}
                          </span>
                          <span className="text-text-muted">•</span>
                          <span className="text-text-muted capitalize">{resource.type}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-sm text-text-muted mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-text-muted mb-4">
                      <div className="flex items-center gap-3">
                        {resource.size && (
                          <span>{resource.size}</span>
                        )}
                        {resource.pages && (
                          <span>{resource.pages}</span>
                        )}
                        {resource.duration && (
                          <span>{resource.duration}</span>
                        )}
                        {resource.format && (
                          <span>{resource.format}</span>
                        )}
                        {resource.date && (
                          <span>{new Date(resource.date).toLocaleDateString()}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {resource.downloadUrl ? (
                        <Button size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      ) : (
                        <Button size="sm" className="flex-1" asChild>
                          <Link href={resource.watchUrl as any}>
                            <Video className="h-4 w-4 mr-2" />
                            Watch
                          </Link>
                        </Button>
                      )}
                      
                      <Button size="sm" variant="outline" asChild>
                        <Link href={resource.downloadUrl || resource.watchUrl as any}>
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
              <h2 className="text-2xl font-bold text-text mb-4">
                {t('newsletter.title', { default: 'Get New Resources First' })}
              </h2>
              <p className="text-text-muted mb-6 max-w-2xl mx-auto">
                {t('newsletter.description', { 
                  default: 'Be the first to access our latest whitepapers, webinars, and templates. Subscribe to our newsletter for exclusive content and early access to new resources.' 
                })}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t('newsletter.placeholder', { default: 'Enter your email' })}
                  className="flex-1 px-4 py-2 rounded-lg border border-hairline bg-surface text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button>
                  {t('newsletter.subscribe', { default: 'Subscribe' })}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-text mb-4">
            {t('support.title', { default: 'Need Help Getting Started?' })}
          </h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            {t('support.description', { 
              default: 'Our team of AI experts is here to help you implement these resources and accelerate your AI journey.' 
            })}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={`${basePath}/support` as any}>
                {t('support.contact', { default: 'Get Support' })}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`${basePath}/contact` as any}>
                {t('support.consultation', { default: 'Schedule Consultation' })}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
