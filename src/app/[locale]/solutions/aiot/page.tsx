'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Cpu, Wifi, Zap, Target, Users, Award } from 'lucide-react';
import Link from 'next/link';
import { SeoHead, ServiceSchema } from '@/components/seo';
import TLDRBlock from '@/components/TLDRBlock';
import KeyFactsBlock from '@/components/KeyFactsBlock';

export default function AIoTPage() {
  const t = useTranslations('solutions');
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;
  const schemaLocale: 'en' | 'th' = isThai ? 'th' : 'en';

  const aiotSolutions = [
    {
      title: 'Smart Manufacturing',
      description:
        'Intelligent manufacturing systems with real-time monitoring and predictive maintenance.',
      features: [
        'Sensor integration',
        'Real-time analytics',
        'Predictive maintenance',
        'Process optimization',
      ],
      industry: 'Manufacturing',
      timeline: '12-16 weeks',
      price: '฿1,200,000',
    },
    {
      title: 'Smart Building Management',
      description:
        'AI-powered building automation for energy efficiency and occupant comfort.',
      features: [
        'Energy optimization',
        'Climate control',
        'Occupancy detection',
        'Predictive maintenance',
      ],
      industry: 'Real Estate',
      timeline: '10-14 weeks',
      price: '฿950,000',
    },
    {
      title: 'Agricultural IoT',
      description:
        'Smart farming solutions with precision agriculture and crop monitoring.',
      features: [
        'Soil monitoring',
        'Weather prediction',
        'Crop health',
        'Automated irrigation',
      ],
      industry: 'Agriculture',
      timeline: '8-12 weeks',
      price: '฿780,000',
    },
    {
      title: 'Fleet Management',
      description:
        'Intelligent fleet tracking and management with predictive analytics.',
      features: [
        'Vehicle tracking',
        'Fuel optimization',
        'Driver behavior',
        'Maintenance scheduling',
      ],
      industry: 'Logistics',
      timeline: '10-14 weeks',
      price: '฿890,000',
    },
    {
      title: 'Smart Healthcare',
      description:
        'IoT-enabled healthcare monitoring and patient care management.',
      features: [
        'Patient monitoring',
        'Medication tracking',
        'Health analytics',
        'Emergency alerts',
      ],
      industry: 'Healthcare',
      timeline: '12-18 weeks',
      price: '฿1,100,000',
    },
    {
      title: 'Environmental Monitoring',
      description:
        'Real-time environmental monitoring and pollution detection systems.',
      features: [
        'Air quality monitoring',
        'Water quality tracking',
        'Noise detection',
        'Data analytics',
      ],
      industry: 'Environmental',
      timeline: '8-12 weeks',
      price: '฿650,000',
    },
  ];

  const capabilities = [
    {
      icon: Cpu,
      title: 'Edge Computing',
      description:
        'Deploy AI models directly on IoT devices for real-time processing and reduced latency.',
    },
    {
      icon: Wifi,
      title: 'Connectivity Solutions',
      description:
        'Seamless integration with various IoT protocols and communication standards.',
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description:
        'Process streaming data from IoT sensors with real-time insights and decision making.',
    },
    {
      icon: Target,
      title: 'Predictive Maintenance',
      description:
        'AI-powered predictive maintenance to prevent equipment failures and optimize operations.',
    },
    {
      icon: Users,
      title: 'Scalable Architecture',
      description:
        'Cloud-native IoT platforms that scale from pilot to enterprise deployment.',
    },
    {
      icon: Award,
      title: 'Security & Compliance',
      description:
        'Enterprise-grade security with encryption, authentication, and compliance frameworks.',
    },
  ];

  return (
    <>
      <SeoHead
        title={
          isThai
            ? 'AIoT Solutions - AI + IoT เชื่อมต่ออัจฉริยะ'
            : 'AIoT Solutions - AI + IoT Intelligent Connectivity'
        }
        description={
          isThai
            ? 'โซลูชัน AIoT สำหรับ Smart Manufacturing, Smart Home, Edge Computing และระบบ IoT อัจฉริยะที่ขับเคลื่อนด้วย AI'
            : 'AIoT solutions for Smart Manufacturing, Smart Home, Edge Computing, and intelligent IoT systems powered by AI.'
        }
        keywords={
          isThai
            ? [
                'AIoT',
                'IoT',
                'Edge Computing',
                'Smart Manufacturing',
                'AI + IoT',
              ]
            : ['AIoT', 'IoT', 'Edge Computing', 'Smart Manufacturing', 'AI IoT']
        }
        url="/solutions/aiot"
        type="website"
      />
      <ServiceSchema
        serviceName="AIoT Solutions"
        description={
          isThai
            ? 'โซลูชัน AIoT ที่พร้อมใช้งานจริง'
            : 'Production-ready AIoT solutions'
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
                    ? 'AIoT รวม IoT + AI เพื่อเก็บข้อมูลจากหน้างาน วิเคราะห์แบบเรียลไทม์ และสั่งงานอัตโนมัติ เหมาะกับงาน monitoring, anomaly, predictive maintenance และ dashboard สำหรับ OT/IT'
                    : 'AIoT combines IoT + AI to collect edge data, analyze in real time, and automate actions—ideal for monitoring, anomaly detection, predictive maintenance, and OT/IT dashboards.'
                }
                locale={schemaLocale}
              />
              <KeyFactsBlock
                facts={[
                  {
                    label: isThai ? 'Use Cases' : 'Use Cases',
                    value: isThai
                      ? 'Telemetry pipeline, Alerting, Predictive maintenance, Edge inference'
                      : 'Telemetry, alerting, predictive maintenance, edge inference',
                  },
                  {
                    label: isThai
                      ? 'Minimum Data Required'
                      : 'Minimum Data Required',
                    value: isThai
                      ? 'เริ่มได้จาก sensor logs + นิยามเหตุการณ์/threshold'
                      : 'Sensor logs + event/threshold definitions',
                  },
                  {
                    label: isThai ? 'Deliverables' : 'Deliverables',
                    value: isThai
                      ? 'Pipeline + Dashboard + Alert routing + Runbook'
                      : 'Pipeline + dashboards + alert routing + runbooks',
                  },
                  {
                    label: isThai ? 'Deployment Options' : 'Deployment Options',
                    value: 'Edge, Cloud, Hybrid, On-prem',
                  },
                  {
                    label: isThai ? 'Timeline' : 'Timeline',
                    value: isThai
                      ? 'Pilot: 8-14 สัปดาห์ | Rollout: 10-18 สัปดาห์'
                      : 'Pilot: 8-14 weeks | Rollout: 10-18 weeks',
                  },
                  {
                    label: isThai ? 'Pricing' : 'Pricing',
                    value: isThai
                      ? 'เริ่มจาก POC/Pilot เพื่อประเมินโครงสร้างและอุปกรณ์'
                      : 'Start with POC/Pilot to validate infra and devices',
                  },
                ]}
                locale={schemaLocale}
              />
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <MagicHero
          eyebrow="AIoT Solutions"
          title="Intelligent IoT Systems for the Connected World"
          description="Combine the power of AI with IoT to create intelligent systems that learn, adapt, and optimize operations in real-time. Transform your connected devices into smart, autonomous systems."
          metrics={[
            { value: '30%', label: 'Efficiency Improvement' },
            { value: '50%', label: 'Maintenance Cost Reduction' },
            { value: '8-18', label: 'Weeks to Deploy' },
          ]}
          align="center"
        >
          <Particles quantity={60} staticity={20} ease={80} />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20" />
        </MagicHero>

        {/* Capabilities Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text mb-4">
                AIoT Capabilities
              </h2>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                From sensor integration to intelligent analytics, we provide
                comprehensive AIoT solutions for any connected environment.
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
                AIoT Solutions
              </h2>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                Ready-to-deploy AIoT solutions across various industries and use
                cases.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {aiotSolutions.map((solution, index) => (
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
                  Ready to Build Intelligent IoT Systems?
                </h2>
                <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
                  Let our AIoT experts help you design and deploy intelligent
                  connected systems that transform your operations and drive
                  innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ShimmerButton asChild className="px-8 py-4">
                    <Link
                      href={`${basePath}/contact` as any}
                      className="flex items-center gap-2"
                    >
                      Start Your AIoT Journey
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
