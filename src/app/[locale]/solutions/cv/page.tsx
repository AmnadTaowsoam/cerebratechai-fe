'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Eye, Camera, Target, Zap, Users, Award } from 'lucide-react';
import Link from 'next/link';
import { SeoHead, ServiceSchema } from '@/components/seo';

export default function ComputerVisionPage() {
  const t = useTranslations('solutions');
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;

  const cvSolutions = [
    {
      title: 'Quality Inspection System',
      description: 'Automated visual inspection with 99.2% accuracy for manufacturing quality control.',
      features: ['Defect detection', 'Surface inspection', 'Dimensional analysis', 'Real-time alerts'],
      industry: 'Manufacturing',
      timeline: '8-12 weeks',
      price: '฿750,000'
    },
    {
      title: 'Document OCR Workbench',
      description: 'Intelligent document processing with multi-language support and high accuracy.',
      features: ['Text extraction', 'Layout analysis', 'Data validation', 'Batch processing'],
      industry: 'Finance & Legal',
      timeline: '6-10 weeks',
      price: '฿620,000'
    },
    {
      title: 'Retail Analytics Platform',
      description: 'Customer behavior analysis and inventory management through computer vision.',
      features: ['People counting', 'Heat mapping', 'Shelf monitoring', 'Customer insights'],
      industry: 'Retail',
      timeline: '8-14 weeks',
      price: '฿890,000'
    },
    {
      title: 'Medical Image Analysis',
      description: 'AI-powered medical imaging for faster and more accurate diagnosis.',
      features: ['Image segmentation', 'Anomaly detection', 'Diagnostic support', 'Report generation'],
      industry: 'Healthcare',
      timeline: '12-16 weeks',
      price: '฿1,200,000'
    },
    {
      title: 'Security & Surveillance',
      description: 'Intelligent surveillance system with real-time threat detection and analysis.',
      features: ['Object detection', 'Face recognition', 'Behavior analysis', 'Alert system'],
      industry: 'Security',
      timeline: '10-14 weeks',
      price: '฿950,000'
    },
    {
      title: 'Autonomous Vehicle Vision',
      description: 'Computer vision systems for autonomous vehicles and advanced driver assistance.',
      features: ['Object detection', 'Lane detection', 'Traffic sign recognition', 'Path planning'],
      industry: 'Automotive',
      timeline: '16-20 weeks',
      price: '฿1,500,000'
    }
  ];

  const capabilities = [
    {
      icon: Eye,
      title: 'Image Recognition',
      description: 'Advanced image classification, object detection, and scene understanding using state-of-the-art deep learning models.'
    },
    {
      icon: Camera,
      title: 'Real-time Processing',
      description: 'High-performance image processing pipelines optimized for real-time applications and edge deployment.'
    },
    {
      icon: Target,
      title: 'Custom Model Training',
      description: 'Specialized model training for domain-specific applications with custom datasets and requirements.'
    },
    {
      icon: Zap,
      title: 'Edge Optimization',
      description: 'Model optimization for edge devices with quantization, pruning, and hardware-specific acceleration.'
    },
    {
      icon: Users,
      title: 'Multi-modal Analysis',
      description: 'Integration of visual data with other sensor inputs for comprehensive situational awareness.'
    },
    {
      icon: Award,
      title: 'Production Deployment',
      description: 'Scalable deployment solutions with monitoring, versioning, and continuous improvement capabilities.'
    }
  ];

  return (
    <>
      <SeoHead
        title={isThai ? 'Computer Vision Solutions - AI ที่เห็นและเข้าใจภาพ' : 'Computer Vision Solutions - AI That Sees and Understands'}
        description={isThai 
          ? 'โซลูชัน Computer Vision สำหรับการตรวจสอบคุณภาพ การรู้จำใบหน้า การวิเคราะห์วิดีโอ และระบบมองเห็นอัจฉริยะ'
          : 'Computer Vision solutions for quality inspection, face recognition, video analytics, and intelligent vision systems.'
        }
        keywords={isThai 
          ? ['Computer Vision', 'AI มองเห็น', 'ตรวจสอบคุณภาพ', 'Face Recognition', 'Video Analytics']
          : ['Computer Vision', 'Image Recognition', 'Quality Inspection', 'Face Recognition', 'Video Analytics']
        }
        url="/solutions/cv"
        type="website"
      />
      <ServiceSchema 
        serviceName="Computer Vision Solutions"
        description={isThai 
          ? 'โซลูชัน Computer Vision ที่พร้อมใช้งานจริง'
          : 'Production-ready Computer Vision solutions'
        }
      />
      
      <div className="bg-bg">
      {/* Hero Section */}
      <MagicHero
        eyebrow="Computer Vision Solutions"
        title="See Beyond Human Capabilities with AI Vision"
        description="Transform visual data into actionable insights with our advanced computer vision solutions. From quality inspection to autonomous systems, we deliver cutting-edge visual intelligence."
        metrics={[
          { value: '99.2%', label: 'Detection Accuracy' },
          { value: '60%', label: 'Cost Reduction' },
          { value: '8-20', label: 'Weeks to Deploy' }
        ]}
        align="center"
      >
        <Particles quantity={60} staticity={20} ease={80} />
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20" />
      </MagicHero>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              Computer Vision Capabilities
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              From image processing to real-time analysis, we provide comprehensive computer vision solutions for any industry.
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
              Computer Vision Solutions
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Ready-to-deploy computer vision solutions across various industries and applications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cvSolutions.map((solution, index) => (
              <Card key={index} className="border border-hairline bg-surface/80 hover:bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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
                Ready to Implement Computer Vision in Your Business?
              </h2>
              <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
                Let our computer vision experts help you harness the power of visual AI to automate processes, improve quality, and gain valuable insights from your visual data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ShimmerButton asChild className="px-8 py-4">
                  <Link href={`${basePath}/contact` as any} className="flex items-center gap-2">
                    Start Your Vision AI Journey
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
