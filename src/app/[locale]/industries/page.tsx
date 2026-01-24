'use client';

import { useLocale } from 'next-intl';
import { MagicHero, Particles } from '@/components/magicui';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Factory, Heart, Truck, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function IndustriesPage() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;

  const industries = [
    {
      slug: 'manufacturing',
      icon: Factory,
      name: isThai ? 'การผลิตและโรงงาน' : 'Manufacturing',
      description: isThai
        ? 'AI สำหรับการตรวจสอบคุณภาพ การบำรุงรักษาเชิงคาดการณ์ และการเพิ่มประสิทธิภาพการผลิต'
        : 'AI for quality inspection, predictive maintenance, and production optimization',
      solutions: ['Computer Vision', 'Predictive Analytics', 'Edge AI'],
      caseCount: 3,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
    },
    {
      slug: 'healthcare',
      icon: Heart,
      name: isThai ? 'สุขภาพและการแพทย์' : 'Healthcare & Wellness',
      description: isThai
        ? 'AI สำหรับการวินิจฉัย การจัดการข้อมูลผู้ป่วย และระบบให้คำปรึกษาสุขภาพ'
        : 'AI for diagnostics, patient data management, and health advisory systems',
      solutions: ['LLM & RAG', 'Computer Vision', 'Predictive Analytics'],
      caseCount: 2,
      color: 'from-pink-500/20 to-rose-500/20',
      borderColor: 'border-pink-500/30',
    },
    {
      slug: 'logistics',
      icon: Truck,
      name: isThai ? 'โลจิสติกส์และซัพพลายเชน' : 'Logistics & Supply Chain',
      description: isThai
        ? 'AI สำหรับการคาดการณ์อุปสงค์ การเพิ่มประสิทธิภาพเส้นทาง และการตรวจสอบสินค้า'
        : 'AI for demand forecasting, route optimization, and inventory inspection',
      solutions: ['Computer Vision', 'Predictive Analytics', 'Edge AI'],
      caseCount: 2,
      color: 'from-orange-500/20 to-amber-500/20',
      borderColor: 'border-orange-500/30',
    },
    {
      slug: 'enterprise',
      icon: Building2,
      name: isThai ? 'องค์กรขนาดใหญ่' : 'Enterprise',
      description: isThai
        ? 'AI สำหรับการจัดการความรู้ ระบบ chatbot และระบบวิเคราะห์ข้อมูล'
        : 'AI for knowledge management, chatbots, and analytics systems',
      solutions: ['LLM & RAG', 'Predictive Analytics', 'MLOps'],
      caseCount: 2,
      color: 'from-purple-500/20 to-violet-500/20',
      borderColor: 'border-purple-500/30',
    },
  ];

  return (
    <div className="bg-bg">
      {/* Hero Section */}
      <MagicHero
        eyebrow={isThai ? 'อุตสาหกรรม' : 'Industries'}
        title={
          isThai
            ? 'โซลูชัน AI สำหรับทุกอุตสาหกรรม'
            : 'AI Solutions for Every Industry'
        }
        description={
          isThai
            ? 'เราเชี่ยวชาญในการสร้างโซลูชัน AI ที่ตรงกับความต้องการเฉพาะของแต่ละอุตสาหกรรม ตั้งแต่การผลิตไปจนถึงการดูแลสุขภาพ'
            : 'We specialize in building AI solutions tailored to the unique needs of each industry, from manufacturing to healthcare.'
        }
      >
        <Particles quantity={40} staticity={20} ease={60} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
      </MagicHero>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {industries.map(industry => {
              const IconComponent = industry.icon;

              return (
                <Card
                  key={industry.slug}
                  className={`border ${industry.borderColor} bg-gradient-to-br ${industry.color} hover:shadow-xl transition-all group`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-surface/80 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-text mb-2">
                          {industry.name}
                        </h3>
                        <p className="text-text-muted mb-4 leading-relaxed">
                          {industry.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-text mb-2">
                          {isThai
                            ? 'โซลูชันที่เกี่ยวข้อง:'
                            : 'Related Solutions:'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.solutions.map((solution, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full bg-surface/60 backdrop-blur text-sm text-text-muted"
                            >
                              {solution}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-hairline">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-text-muted">
                            {industry.caseCount}{' '}
                            {isThai ? 'กรณีศึกษา' : 'case studies'}
                          </span>
                          <Button variant="ghost" size="sm" asChild>
                            <Link
                              href={
                                `${basePath}/industries/${industry.slug}` as any
                              }
                              className="flex items-center gap-2"
                            >
                              {isThai ? 'เรียนรู้เพิ่มเติม' : 'Learn More'}
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text mb-4">
            {isThai ? 'ไม่เห็นอุตสาหกรรมของคุณ?' : "Don't See Your Industry?"}
          </h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            {isThai
              ? 'เราทำงานกับหลากหลายอุตสาหกรรม พูดคุยกับทีมของเราเพื่อหารือเกี่ยวกับความต้องการเฉพาะของคุณ'
              : 'We work with diverse industries. Talk to our team to discuss your specific needs.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={`${basePath}/contact` as any}>
                {isThai ? 'ติดต่อเรา' : 'Contact Us'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`${basePath}/cases` as any}>
                {isThai ? 'ดูกรณีศึกษาทั้งหมด' : 'View All Case Studies'}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
