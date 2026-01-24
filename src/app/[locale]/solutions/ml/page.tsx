'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Brain, BarChart3, Zap, Target, Users, Award } from 'lucide-react';
import Link from 'next/link';
import { SeoHead, ServiceSchema } from '@/components/seo';
import TLDRBlock from '@/components/TLDRBlock';
import KeyFactsBlock from '@/components/KeyFactsBlock';

export default function MachineLearningPage() {
  const t = useTranslations('solutions');
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;
  const schemaLocale: 'en' | 'th' = isThai ? 'th' : 'en';

  const mlSolutions = [
    {
      title: 'Predictive Maintenance AI',
      description: 'Reduce equipment downtime by 40% with AI-powered predictive maintenance systems.',
      features: ['Anomaly detection', 'Failure prediction', 'Maintenance scheduling', 'Cost optimization'],
      industry: 'Manufacturing',
      timeline: '8-12 weeks',
      price: '฿680,000'
    },
    {
      title: 'Demand Forecasting',
      description: 'Accurate demand prediction for inventory optimization and supply chain efficiency.',
      features: ['Time series analysis', 'Seasonal patterns', 'External factors', 'Real-time updates'],
      industry: 'Retail & Logistics',
      timeline: '6-10 weeks',
      price: '฿520,000'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Identify at-risk customers and implement retention strategies proactively.',
      features: ['Behavioral analysis', 'Risk scoring', 'Intervention triggers', 'ROI tracking'],
      industry: 'Finance & Telecom',
      timeline: '6-8 weeks',
      price: '฿480,000'
    },
    {
      title: 'Fraud Detection System',
      description: 'Real-time fraud detection with 99.5% accuracy and minimal false positives.',
      features: ['Real-time monitoring', 'Pattern recognition', 'Risk scoring', 'Alert system'],
      industry: 'Banking & Finance',
      timeline: '10-14 weeks',
      price: '฿850,000'
    },
    {
      title: 'Price Optimization',
      description: 'Dynamic pricing strategies to maximize revenue while maintaining competitiveness.',
      features: ['Market analysis', 'Competitor tracking', 'Demand elasticity', 'A/B testing'],
      industry: 'E-commerce',
      timeline: '8-12 weeks',
      price: '฿720,000'
    },
    {
      title: 'Quality Control AI',
      description: 'Automated quality inspection with 95% accuracy improvement over manual processes.',
      features: ['Defect detection', 'Quality scoring', 'Process optimization', 'Reporting'],
      industry: 'Manufacturing',
      timeline: '6-10 weeks',
      price: '฿580,000'
    }
  ];

  const capabilities = [
    {
      icon: Brain,
      title: 'Advanced Algorithms',
      description: 'Deep learning, ensemble methods, and custom algorithm development for complex business problems.'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Comprehensive data analysis, feature engineering, and statistical modeling for actionable insights.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Stream processing and real-time model inference for immediate decision making.'
    },
    {
      icon: Target,
      title: 'Model Optimization',
      description: 'Hyperparameter tuning, model compression, and performance optimization for production deployment.'
    },
    {
      icon: Users,
      title: 'MLOps Integration',
      description: 'Complete MLOps pipeline with CI/CD, monitoring, and automated retraining workflows.'
    },
    {
      icon: Award,
      title: 'Production Ready',
      description: 'Enterprise-grade ML systems with scalability, reliability, and comprehensive monitoring.'
    }
  ];

  return (
    <>
      <SeoHead
        title={isThai ? 'Machine Learning Solutions - AI ที่เรียนรู้จากข้อมูล' : 'Machine Learning Solutions - AI That Learns from Data'}
        description={isThai 
          ? 'โซลูชัน Machine Learning สำหรับการทำนาย การวิเคราะห์ และการเพิ่มประสิทธิภาพธุรกิจ ด้วย AI ที่เรียนรู้จากข้อมูลจริง'
          : 'Machine Learning solutions for prediction, analysis, and business optimization with AI that learns from real data.'
        }
        keywords={isThai 
          ? ['Machine Learning', 'AI เรียนรู้', 'Predictive Analytics', 'ML Thailand', 'AI ทำนาย']
          : ['Machine Learning', 'ML solutions', 'Predictive Analytics', 'AI Thailand', 'ML consulting']
        }
        url="/solutions/ml"
        type="website"
      />
      <ServiceSchema 
        serviceName="Machine Learning Solutions"
        description={isThai 
          ? 'โซลูชัน Machine Learning ที่พร้อมใช้งานจริง'
          : 'Production-ready Machine Learning solutions'
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
                  ? 'Machine Learning ช่วยเปลี่ยนข้อมูลเป็นการคาดการณ์/การตัดสินใจอัตโนมัติ เช่น พยากรณ์ความต้องการ ตรวจจับความผิดปกติ และคาดการณ์การซ่อมบำรุง โดยทำงานเป็นเฟสและวัดผลด้วย KPI ชัดเจน'
                  : 'Machine Learning turns data into predictions and automated decisions—forecasting demand, detecting anomalies, and preventing downtime—with phased delivery and KPI-based evaluation.'
              }
              locale={schemaLocale}
            />
            <KeyFactsBlock
              facts={[
                {
                  label: isThai ? 'Use Cases' : 'Use Cases',
                  value: isThai
                    ? 'พยากรณ์/คาดการณ์, ตรวจจับความผิดปกติ, Churn, Fraud, Optimization'
                    : 'Forecasting, anomaly detection, churn, fraud, optimization',
                },
                {
                  label: isThai ? 'Minimum Data Required' : 'Minimum Data Required',
                  value: isThai ? 'เริ่มได้จากข้อมูลย้อนหลัง 3-12 เดือน + นิยาม KPI' : '3–12 months of historical data + KPI definition',
                },
                {
                  label: isThai ? 'Deliverables' : 'Deliverables',
                  value: isThai
                    ? 'Model + pipeline + monitoring + รายงานผล/เอกสารส่งมอบ'
                    : 'Model + pipeline + monitoring + handover docs',
                },
                {
                  label: isThai ? 'KPI & Evaluation' : 'KPI & Evaluation',
                  value: 'Accuracy, precision/recall, latency, business KPI uplift',
                },
                {
                  label: isThai ? 'Timeline' : 'Timeline',
                  value: isThai ? 'POC: 6-10 สัปดาห์ | Pilot: 8-14 สัปดาห์' : 'POC: 6-10 weeks | Pilot: 8-14 weeks',
                },
                {
                  label: isThai ? 'Pricing' : 'Pricing',
                  value: isThai ? 'เริ่มจาก Kickstart/POC เพื่อประเมินขอบเขต' : 'Start with Kickstart/POC to scope and estimate',
                },
              ]}
              locale={schemaLocale}
            />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <MagicHero
        eyebrow="Machine Learning Solutions"
        title="Transform Your Business with Intelligent Automation"
        description="Leverage the power of machine learning to solve complex business challenges, optimize operations, and drive data-driven decision making across your organization."
        metrics={[
          { value: '40%', label: 'Average Efficiency Gain' },
          { value: '99.5%', label: 'Model Accuracy' },
          { value: '6-14', label: 'Weeks to Deploy' }
        ]}
        align="center"
      >
        <Particles quantity={60} staticity={20} ease={80} />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
      </MagicHero>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              Machine Learning Capabilities
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              From data preprocessing to model deployment, we provide end-to-end machine learning solutions tailored to your business needs.
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
              Machine Learning Solutions
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Ready-to-deploy ML solutions across various industries and use cases.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mlSolutions.map((solution, index) => (
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
                Ready to Transform Your Business with Machine Learning?
              </h2>
              <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
                Let our ML experts help you identify opportunities, build custom models, and deploy production-ready solutions that drive real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ShimmerButton asChild className="px-8 py-4">
                  <Link href={`${basePath}/contact` as any} className="flex items-center gap-2">
                    Start Your ML Journey
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
