'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  Zap,
  Target,
  Users,
  Award,
} from 'lucide-react';
import Link from 'next/link';
import { SeoHead, ServiceSchema } from '@/components/seo';
import TLDRBlock from '@/components/TLDRBlock';
import KeyFactsBlock from '@/components/KeyFactsBlock';

export default function AnalyticsPage() {
  const t = useTranslations('solutions');
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;
  const schemaLocale: 'en' | 'th' = isThai ? 'th' : 'en';

  const analyticsSolutions = [
    {
      title: 'Business Intelligence Platform',
      description:
        'Comprehensive BI platform with interactive dashboards and advanced analytics.',
      features: [
        'Interactive dashboards',
        'Data visualization',
        'Report automation',
        'Mobile access',
      ],
      industry: 'Enterprise',
      timeline: '10-16 weeks',
      price: '฿1,500,000',
    },
    {
      title: 'Customer Analytics',
      description:
        'Deep customer insights with behavioral analysis and segmentation.',
      features: [
        'Customer segmentation',
        'Behavior analysis',
        'Churn prediction',
        'Personalization',
      ],
      industry: 'Retail & E-commerce',
      timeline: '8-12 weeks',
      price: '฿980,000',
    },
    {
      title: 'Operational Analytics',
      description:
        'Real-time operational insights for process optimization and efficiency.',
      features: [
        'Process monitoring',
        'Performance metrics',
        'Anomaly detection',
        'Optimization recommendations',
      ],
      industry: 'Manufacturing',
      timeline: '8-14 weeks',
      price: '฿1,200,000',
    },
    {
      title: 'Financial Analytics',
      description:
        'Advanced financial analysis with risk assessment and forecasting.',
      features: [
        'Risk analysis',
        'Financial forecasting',
        'Compliance reporting',
        'Fraud detection',
      ],
      industry: 'Finance',
      timeline: '12-18 weeks',
      price: '฿1,800,000',
    },
    {
      title: 'Marketing Analytics',
      description:
        'Comprehensive marketing analytics with attribution and ROI measurement.',
      features: [
        'Campaign analysis',
        'Attribution modeling',
        'ROI measurement',
        'A/B testing',
      ],
      industry: 'Marketing',
      timeline: '6-10 weeks',
      price: '฿750,000',
    },
    {
      title: 'Supply Chain Analytics',
      description:
        'End-to-end supply chain visibility with predictive analytics.',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Supplier analytics',
        'Risk management',
      ],
      industry: 'Logistics',
      timeline: '10-16 weeks',
      price: '฿1,400,000',
    },
  ];

  const capabilities = [
    {
      icon: BarChart3,
      title: 'Data Visualization',
      description:
        'Create compelling visualizations and interactive dashboards for better data understanding.',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description:
        'Build predictive models for forecasting, trend analysis, and future planning.',
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description:
        'Process and analyze data in real-time for immediate insights and decision making.',
    },
    {
      icon: Target,
      title: 'Advanced Analytics',
      description:
        'Implement machine learning and statistical models for deeper insights and automation.',
    },
    {
      icon: Users,
      title: 'Self-service Analytics',
      description:
        'Enable business users to explore data and create reports without technical expertise.',
    },
    {
      icon: Award,
      title: 'Data Governance',
      description:
        'Implement data quality, security, and compliance frameworks for reliable analytics.',
    },
  ];

  return (
    <>
      <SeoHead
        title={
          isThai
            ? 'Analytics Solutions - วิเคราะห์ข้อมูลด้วย AI'
            : 'Analytics Solutions - Data Analysis with AI'
        }
        description={
          isThai
            ? 'โซลูชัน Analytics และ Business Intelligence สำหรับการวิเคราะห์ข้อมูล Dashboard และ Reporting ที่ขับเคลื่อนด้วย AI'
            : 'Analytics and Business Intelligence solutions for data analysis, dashboards, and AI-powered reporting.'
        }
        keywords={
          isThai
            ? [
                'Analytics',
                'BI',
                'Data Analytics',
                'Dashboard',
                'วิเคราะห์ข้อมูล',
              ]
            : [
                'Analytics',
                'Business Intelligence',
                'Data Analytics',
                'Dashboard',
                'Reporting',
              ]
        }
        url="/solutions/analytics"
        type="website"
      />
      <ServiceSchema
        serviceName="Analytics Solutions"
        description={
          isThai
            ? 'โซลูชัน Analytics ที่พร้อมใช้งานจริง'
            : 'Production-ready Analytics solutions'
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
                    ? 'Analytics ช่วยทำให้ข้อมูล “ใช้ตัดสินใจได้จริง” ด้วย dashboard, KPI tree, alerting และโมเดลพยากรณ์ เหมาะกับผู้บริหารและทีมปฏิบัติการที่ต้องการ one source of truth'
                    : 'Analytics turns data into decisions—dashboards, KPI trees, alerting, and forecasting—ideal for leadership and ops teams needing one source of truth.'
                }
                locale={schemaLocale}
              />
              <KeyFactsBlock
                facts={[
                  {
                    label: isThai ? 'Use Cases' : 'Use Cases',
                    value: isThai
                      ? 'BI dashboards, Operational analytics, Forecasting, Alerting'
                      : 'BI dashboards, ops analytics, forecasting, alerting',
                  },
                  {
                    label: isThai ? 'Data Sources' : 'Data Sources',
                    value: isThai
                      ? 'ERP/CRM, logs, spreadsheets, databases, streaming'
                      : 'ERP/CRM, logs, spreadsheets, databases, streaming',
                  },
                  {
                    label: isThai ? 'Deliverables' : 'Deliverables',
                    value: isThai
                      ? 'Semantic layer + Dashboards + Governance + Runbooks'
                      : 'Semantic layer + dashboards + governance + runbooks',
                  },
                  {
                    label: isThai ? 'KPI & Evaluation' : 'KPI & Evaluation',
                    value: isThai
                      ? 'Adoption, freshness, accuracy, decision cycle time'
                      : 'Adoption, freshness, accuracy, decision cycle time',
                  },
                  {
                    label: isThai ? 'Timeline' : 'Timeline',
                    value: isThai ? '6-18 สัปดาห์' : '6-18 weeks',
                  },
                  {
                    label: isThai ? 'Pricing' : 'Pricing',
                    value: isThai
                      ? 'เริ่มจาก scope + KPI mapping'
                      : 'Start with scope and KPI mapping',
                  },
                ]}
                locale={schemaLocale}
              />
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <MagicHero
          eyebrow="Analytics Solutions"
          title="Transform Data into Strategic Insights"
          description="Unlock the power of your data with advanced analytics solutions. From business intelligence to predictive analytics, we help you make data-driven decisions that drive growth and efficiency."
          metrics={[
            { value: '85%', label: 'Faster Decision Making' },
            { value: '40%', label: 'Cost Reduction' },
            { value: '6-18', label: 'Weeks to Deploy' },
          ]}
          align="center"
        >
          <Particles quantity={60} staticity={20} ease={80} />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20" />
        </MagicHero>

        {/* Capabilities Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text mb-4">
                Analytics Capabilities
              </h2>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                From data visualization to predictive modeling, we provide
                comprehensive analytics solutions for any business need.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                return (
                  <Card
                    key={index}
                    className="border border-hairline bg-surface/80 hover:bg-surface transition-colors"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/20">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">
                          {capability.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-muted">
                        {capability.description}
                      </p>
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
                Analytics Solutions
              </h2>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                Ready-to-deploy analytics solutions across various industries
                and use cases.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {analyticsSolutions.map((solution, index) => (
                <Card
                  key={index}
                  className="border border-hairline bg-surface/80 hover:bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">
                      {solution.title}
                    </CardTitle>
                    <p className="text-text-muted">{solution.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-text mb-2">
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {solution.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-text-muted"
                            >
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
                        <div className="text-2xl font-bold text-primary mb-2">
                          {solution.price}
                        </div>
                        <ShimmerButton asChild className="w-full">
                          <Link
                            href={`${basePath}/contact` as any}
                            className="flex items-center justify-center gap-2"
                          >
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
                  Ready to Transform Your Data into Insights?
                </h2>
                <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
                  Let our analytics experts help you build comprehensive data
                  solutions that drive informed decision making and business
                  growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ShimmerButton asChild className="px-8 py-4">
                    <Link
                      href={`${basePath}/contact` as any}
                      className="flex items-center gap-2"
                    >
                      Start Your Analytics Journey
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </ShimmerButton>
                  <ShimmerButton asChild className="px-8 py-4">
                    <Link
                      href={`${basePath}/cases` as any}
                      className="flex items-center gap-2"
                    >
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
