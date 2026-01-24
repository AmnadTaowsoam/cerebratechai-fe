'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Server, Cloud, Zap, Target, Users, Award } from 'lucide-react';
import Link from 'next/link';
import { SeoHead, ServiceSchema } from '@/components/seo';
import TLDRBlock from '@/components/TLDRBlock';
import KeyFactsBlock from '@/components/KeyFactsBlock';

export default function PlatformPage() {
  const t = useTranslations('solutions');
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;
  const schemaLocale: 'en' | 'th' = isThai ? 'th' : 'en';

  const platformSolutions = [
    {
      title: 'AI Platform Modernization',
      description: 'Transform legacy systems into modern, scalable AI platforms with cloud-native architecture.',
      features: ['Microservices architecture', 'API-first design', 'Cloud migration', 'DevOps integration'],
      industry: 'Enterprise',
      timeline: '16-24 weeks',
      price: '฿2,500,000'
    },
    {
      title: 'Data Lake Platform',
      description: 'Comprehensive data platform for storage, processing, and analytics at scale.',
      features: ['Data ingestion', 'ETL pipelines', 'Data governance', 'Analytics tools'],
      industry: 'Data-driven Organizations',
      timeline: '12-18 weeks',
      price: '฿1,800,000'
    },
    {
      title: 'MLOps Platform',
      description: 'End-to-end MLOps platform for model development, deployment, and monitoring.',
      features: ['Model versioning', 'CI/CD pipelines', 'Monitoring', 'Automated retraining'],
      industry: 'AI Organizations',
      timeline: '14-20 weeks',
      price: '฿2,200,000'
    },
    {
      title: 'API Gateway & Management',
      description: 'Centralized API management platform with security, monitoring, and analytics.',
      features: ['API gateway', 'Rate limiting', 'Authentication', 'Analytics dashboard'],
      industry: 'Digital Services',
      timeline: '8-12 weeks',
      price: '฿950,000'
    },
    {
      title: 'Event Streaming Platform',
      description: 'Real-time event processing platform for high-throughput data streams.',
      features: ['Event ingestion', 'Stream processing', 'Real-time analytics', 'Scalable architecture'],
      industry: 'Real-time Applications',
      timeline: '10-16 weeks',
      price: '฿1,400,000'
    },
    {
      title: 'Multi-tenant SaaS Platform',
      description: 'Scalable multi-tenant platform architecture for SaaS applications.',
      features: ['Tenant isolation', 'Resource management', 'Billing integration', 'Admin dashboard'],
      industry: 'SaaS Providers',
      timeline: '18-24 weeks',
      price: '฿2,800,000'
    }
  ];

  const capabilities = [
    {
      icon: Server,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable cloud-native architectures using modern cloud platforms.'
    },
    {
      icon: Cloud,
      title: 'Microservices Design',
      description: 'Build resilient microservices architectures with service mesh and container orchestration.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize platform performance with caching, load balancing, and resource management.'
    },
    {
      icon: Target,
      title: 'Security & Compliance',
      description: 'Implement enterprise-grade security with authentication, authorization, and compliance frameworks.'
    },
    {
      icon: Users,
      title: 'Scalability & Reliability',
      description: 'Design platforms that scale horizontally and maintain high availability and reliability.'
    },
    {
      icon: Award,
      title: 'DevOps Integration',
      description: 'Integrate DevOps practices with CI/CD pipelines, monitoring, and automated deployment.'
    }
  ];

  return (
    <>
      <SeoHead
        title={isThai ? 'Platform Solutions - Edge to Cloud Infrastructure' : 'Platform Solutions - Edge to Cloud Infrastructure'}
        description={isThai 
          ? 'โซลูชัน Platform และ Infrastructure สำหรับการพัฒนาระบบ AI จาก Edge ถึง Cloud ที่ปรับขนาดได้และเชื่อถือได้'
          : 'Platform and Infrastructure solutions for building scalable and reliable AI systems from Edge to Cloud.'
        }
        keywords={isThai 
          ? ['Platform', 'Infrastructure', 'Cloud', 'Edge Computing', 'DevOps']
          : ['Platform', 'Infrastructure', 'Cloud', 'Edge Computing', 'DevOps']
        }
        url="/solutions/platform"
        type="website"
      />
      <ServiceSchema 
        serviceName="Platform Solutions"
        description={isThai 
          ? 'โซลูชัน Platform ที่พร้อมใช้งานจริง'
          : 'Production-ready Platform solutions'
        }
      />
      
      <div className="bg-bg">
      {/* TL;DR + Key Facts */}
      <section className="py-12 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <TLDRBlock
              summary={
                isThai
                  ? 'โครงสร้างพื้นฐานและแพลตฟอร์มที่ดีช่วยให้ AI/ข้อมูล “ขึ้นโปรดักชัน” ได้ไวและปลอดภัย เช่น data platform, MLOps, API gateway, event streaming และ observability'
                  : 'Strong platforms and infrastructure help AI/data reach production faster and safer—data platforms, MLOps, API gateways, event streaming, and observability.'
              }
              locale={schemaLocale}
            />
            <KeyFactsBlock
              facts={[
                {
                  label: isThai ? 'Best For' : 'Best For',
                  value: isThai ? 'ทีมที่ต้องการ modernize ระบบ/infra และรองรับ scale' : 'Teams modernizing infra to scale reliably',
                },
                {
                  label: isThai ? 'Deliverables' : 'Deliverables',
                  value: isThai ? 'Blueprint + IaC + CI/CD + Monitoring + Runbooks' : 'Blueprints + IaC + CI/CD + monitoring + runbooks',
                },
                {
                  label: isThai ? 'Architecture' : 'Architecture',
                  value: 'Cloud-native, hybrid, on-prem (as required)',
                },
                {
                  label: isThai ? 'Security' : 'Security',
                  value: isThai ? 'SSO/RBAC, encryption, audit logs, compliance-ready' : 'SSO/RBAC, encryption, audit logs, compliance-ready',
                },
                {
                  label: isThai ? 'Timeline' : 'Timeline',
                  value: isThai ? '8-24 สัปดาห์ (ขึ้นกับขอบเขต)' : '8-24 weeks (scope-dependent)',
                },
                {
                  label: isThai ? 'Pricing' : 'Pricing',
                  value: isThai ? 'เริ่มจาก discovery เพื่อประเมินสภาพระบบเดิม' : 'Start with discovery to assess current stack',
                },
              ]}
              locale={schemaLocale}
            />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <MagicHero
        eyebrow="Platform Solutions"
        title="Build Scalable, Modern Platforms for the Future"
        description="Transform your infrastructure with modern platform solutions. From cloud-native architectures to AI platforms, we build scalable, secure, and efficient systems that grow with your business."
        metrics={[
          { value: '99.9%', label: 'Uptime Guarantee' },
          { value: '10x', label: 'Performance Improvement' },
          { value: '8-24', label: 'Weeks to Deploy' }
        ]}
        align="center"
      >
        <Particles quantity={60} staticity={20} ease={80} />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20" />
      </MagicHero>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              From architecture design to deployment, we provide comprehensive platform solutions for any scale.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <Card key={index} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/20">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{capability.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-muted">{capability.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-surface/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              Platform Solutions
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Ready-to-deploy platform solutions for modern, scalable applications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {platformSolutions.map((solution, index) => (
              <Card key={index} className="border border-hairline bg-surface/80 hover:bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                  <p className="text-text-muted">{solution.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-text mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-text-muted">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-text-muted pt-4 border-t border-hairline">
                      <span className="font-medium">{solution.industry}</span>
                      <span>{solution.timeline}</span>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-2">{solution.price}</div>
                      <ShimmerButton asChild className="w-full">
                        <Link href={`${basePath}/contact` as any} className="flex items-center justify-center gap-2">
                          Get Started
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </ShimmerButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="border border-hairline bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-text mb-4">
                Ready to Build Your Modern Platform?
              </h2>
              <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
                Let our platform experts help you design and implement scalable, modern platforms that support your business growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ShimmerButton asChild className="px-8 py-4">
                  <Link href={`${basePath}/contact` as any} className="flex items-center gap-2">
                    Start Your Platform Journey
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </ShimmerButton>
                <ShimmerButton asChild className="px-8 py-4">
                  <Link href={`${basePath}/cases` as any} className="flex items-center gap-2">
                    View Case Studies
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </ShimmerButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      </div>
    </>
  );
}
