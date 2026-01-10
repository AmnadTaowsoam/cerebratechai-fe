'use client';

import { useLocale } from 'next-intl';
import { MagicHero, Particles } from '@/components/magicui';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Search,
  Lightbulb,
  Code,
  TestTube,
  Rocket,
  LifeBuoy,
  Users,
  Target,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function HowWeWorkPage() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;

  const processSteps = [
    {
      step: 1,
      icon: Search,
      title: isThai ? 'Discovery & Assessment' : 'Discovery & Assessment',
      duration: isThai ? '1-2 สัปดาห์' : '1-2 weeks',
      description: isThai
        ? 'เราเริ่มต้นด้วยการทำความเข้าใจความต้องการ ข้อจำกัด และโอกาสของคุณอย่างลึกซึ้ง'
        : 'We start by deeply understanding your needs, constraints, and opportunities.',
      activities: [
        isThai ? 'Stakeholder interviews' : 'Stakeholder interviews',
        isThai ? 'Data assessment' : 'Data assessment',
        isThai ? 'Technical feasibility study' : 'Technical feasibility study',
        isThai ? 'Success criteria definition' : 'Success criteria definition'
      ],
      deliverables: [
        isThai ? 'Assessment report' : 'Assessment report',
        isThai ? 'Feasibility analysis' : 'Feasibility analysis',
        isThai ? 'Project scope & timeline' : 'Project scope & timeline'
      ]
    },
    {
      step: 2,
      icon: Lightbulb,
      title: isThai ? 'Design & Planning' : 'Design & Planning',
      duration: isThai ? '1-2 สัปดาห์' : '1-2 weeks',
      description: isThai
        ? 'ออกแบบสถาปัตยกรรมและวางแผนการพัฒนาที่ตอบโจทย์ทางธุรกิจ'
        : 'Design architecture and plan development that addresses business needs.',
      activities: [
        isThai ? 'Solution architecture design' : 'Solution architecture design',
        isThai ? 'Data pipeline planning' : 'Data pipeline planning',
        isThai ? 'Model selection' : 'Model selection',
        isThai ? 'Integration strategy' : 'Integration strategy'
      ],
      deliverables: [
        isThai ? 'Technical architecture' : 'Technical architecture',
        isThai ? 'Implementation plan' : 'Implementation plan',
        isThai ? 'Risk mitigation strategy' : 'Risk mitigation strategy'
      ]
    },
    {
      step: 3,
      icon: Code,
      title: isThai ? 'Development & Training' : 'Development & Training',
      duration: isThai ? '4-12 สัปดาห์' : '4-12 weeks',
      description: isThai
        ? 'พัฒนา train และปรับแต่งโมเดล AI ตามความต้องการเฉพาะของคุณ'
        : 'Develop, train, and fine-tune AI models according to your specific needs.',
      activities: [
        isThai ? 'Data preparation & cleaning' : 'Data preparation & cleaning',
        isThai ? 'Model development' : 'Model development',
        isThai ? 'Feature engineering' : 'Feature engineering',
        isThai ? 'Iterative improvement' : 'Iterative improvement'
      ],
      deliverables: [
        isThai ? 'Trained models' : 'Trained models',
        isThai ? 'API/Integration code' : 'API/Integration code',
        isThai ? 'Technical documentation' : 'Technical documentation'
      ]
    },
    {
      step: 4,
      icon: TestTube,
      title: isThai ? 'Testing & Validation' : 'Testing & Validation',
      duration: isThai ? '1-3 สัปดาห์' : '1-3 weeks',
      description: isThai
        ? 'ทดสอบอย่างครอบคลุมเพื่อให้มั่นใจว่าระบบทำงานได้ตามที่คาดหวัง'
        : 'Comprehensive testing to ensure the system works as expected.',
      activities: [
        isThai ? 'Model performance testing' : 'Model performance testing',
        isThai ? 'Integration testing' : 'Integration testing',
        isThai ? 'User acceptance testing' : 'User acceptance testing',
        isThai ? 'Load & stress testing' : 'Load & stress testing'
      ],
      deliverables: [
        isThai ? 'Test reports' : 'Test reports',
        isThai ? 'Performance metrics' : 'Performance metrics',
        isThai ? 'Bug fixes & improvements' : 'Bug fixes & improvements'
      ]
    },
    {
      step: 5,
      icon: Rocket,
      title: isThai ? 'Deployment & Launch' : 'Deployment & Launch',
      duration: isThai ? '1-2 สัปดาห์' : '1-2 weeks',
      description: isThai
        ? 'Deploy ระบบไปยัง production พร้อมการ monitor และ support'
        : 'Deploy system to production with monitoring and support.',
      activities: [
        isThai ? 'Production deployment' : 'Production deployment',
        isThai ? 'Monitoring setup' : 'Monitoring setup',
        isThai ? 'User training' : 'User training',
        isThai ? 'Knowledge transfer' : 'Knowledge transfer'
      ],
      deliverables: [
        isThai ? 'Production system' : 'Production system',
        isThai ? 'Monitoring dashboard' : 'Monitoring dashboard',
        isThai ? 'Training materials' : 'Training materials',
        isThai ? 'Handover documentation' : 'Handover documentation'
      ]
    },
    {
      step: 6,
      icon: LifeBuoy,
      title: isThai ? 'Support & Optimization' : 'Support & Optimization',
      duration: isThai ? 'ต่อเนื่อง' : 'Ongoing',
      description: isThai
        ? 'การสนับสนุนต่อเนื่องและการปรับปรุงประสิทธิภาพ'
        : 'Continuous support and performance optimization.',
      activities: [
        isThai ? 'Performance monitoring' : 'Performance monitoring',
        isThai ? 'Model retraining' : 'Model retraining',
        isThai ? 'Bug fixes & updates' : 'Bug fixes & updates',
        isThai ? 'Feature enhancements' : 'Feature enhancements'
      ],
      deliverables: [
        isThai ? 'Monthly reports' : 'Monthly reports',
        isThai ? 'Model updates' : 'Model updates',
        isThai ? 'Optimization recommendations' : 'Optimization recommendations'
      ]
    }
  ];

  const successFactors = [
    {
      icon: Users,
      title: isThai ? 'Collaboration' : 'Collaboration',
      description: isThai
        ? 'ความร่วมมือระหว่างทีมของคุณและทีมของเราเป็นกุญแจสำคัญสู่ความสำเร็จ'
        : 'Collaboration between your team and ours is key to success.'
    },
    {
      icon: Target,
      title: isThai ? 'Clear Objectives' : 'Clear Objectives',
      description: isThai
        ? 'เป้าหมายที่ชัดเจนและวัดผลได้ช่วยให้เรามุ่งเน้นไปที่สิ่งที่สำคัญที่สุด'
        : 'Clear, measurable objectives help us focus on what matters most.'
    },
    {
      icon: CheckCircle2,
      title: isThai ? 'Data Quality' : 'Data Quality',
      description: isThai
        ? 'ข้อมูลที่มีคุณภาพเป็นรากฐานของโซลูชัน AI ที่ประสบความสำเร็จ'
        : 'Quality data is the foundation of successful AI solutions.'
    }
  ];

  return (
    <div className="bg-bg">
      {/* Hero Section */}
      <MagicHero
        eyebrow={isThai ? 'กระบวนการทำงาน' : 'Our Process'}
        title={isThai ? 'How We Work' : 'How We Work'}
        description={isThai
          ? 'กระบวนการที่ได้รับการพิสูจน์แล้วในการส่งมอบโซลูชัน AI ที่ประสบความสำเร็จ ตั้งแต่การค้นพบไปจนถึงการใช้งานและต่อเนื่อง'
          : 'Our proven process for delivering successful AI solutions, from discovery to deployment and beyond.'
        }
        align="center"
        metrics={[
          { value: '6', label: isThai ? 'ขั้นตอนหลัก' : 'Key Phases' },
          { value: '8-20', label: isThai ? 'สัปดาห์โดยเฉลี่ย' : 'Avg Weeks' },
          { value: '100%', label: isThai ? 'โปร่งใส' : 'Transparent' }
        ]}
      >
        <Particles quantity={35} staticity={20} ease={60} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
      </MagicHero>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {isThai ? 'กระบวนการทำงานของเรา' : 'Our Work Process'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {isThai
                ? 'กระบวนการ 6 ขั้นตอนที่ชัดเจนและโปร่งใสเพื่อให้มั่นใจว่าโครงการของคุณประสบความสำเร็จ'
                : 'A clear, transparent 6-phase process to ensure your project succeeds.'
              }
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={step.step} className="relative">
                  {/* Connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-8 top-24 w-0.5 h-20 bg-gradient-to-b from-primary/50 to-accent/50 hidden lg:block" />
                  )}

                  <Card className={`border border-hairline bg-surface/80 hover:shadow-xl transition-all ${
                    isEven ? 'lg:mr-auto lg:w-5/6' : 'lg:ml-auto lg:w-5/6'
                  }`}>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                            <IconComponent className="h-8 w-8 text-primary" />
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                              {step.step}
                            </div>
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-text mb-2">
                                {step.title}
                              </h3>
                              <p className="text-sm text-primary font-medium">
                                {step.duration}
                              </p>
                            </div>
                          </div>

                          <p className="text-text-muted mb-6 leading-relaxed">
                            {step.description}
                          </p>

                          <div className="grid gap-6 md:grid-cols-2">
                            <div>
                              <h4 className="text-sm font-semibold text-text mb-3">
                                {isThai ? 'กิจกรรมหลัก:' : 'Key Activities:'}
                              </h4>
                              <ul className="space-y-2">
                                {step.activities.map((activity, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-text-muted">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                    <span>{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold text-text mb-3">
                                {isThai ? 'สิ่งที่ส่งมอบ:' : 'Deliverables:'}
                              </h4>
                              <ul className="space-y-2">
                                {step.deliverables.map((deliverable, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-text-muted">
                                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span>{deliverable}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {isThai ? 'ปัจจัยสู่ความสำเร็จ' : 'Success Factors'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {isThai
                ? 'สิ่งที่ทำให้โครงการ AI ประสบความสำเร็จ'
                : 'What makes AI projects succeed.'
              }
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {successFactors.map((factor, index) => {
              const IconComponent = factor.icon;

              return (
                <Card key={index} className="border border-hairline bg-surface/80 hover:shadow-lg transition-all">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-3">
                      {factor.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      {factor.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text mb-4">
                {isThai ? 'ทีมของคุณ' : 'Your Team'}
              </h2>
              <p className="text-text-muted">
                {isThai
                  ? 'ทุกโครงการมีทีมผู้เชี่ยวชาญที่ทุ่มเทเพื่อความสำเร็จของคุณ'
                  : 'Every project has a dedicated team of experts committed to your success.'
                }
              </p>
            </div>

            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-text">
                      {isThai ? 'ทีมหลัก:' : 'Core Team:'}
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                        <div>
                          <div className="font-medium text-text">Project Manager</div>
                          <div className="text-sm text-text-muted">
                            {isThai ? 'ดูแลทั้งโครงการและเป็นจุดติดต่อหลัก' : 'Oversees entire project and main point of contact'}
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                        <div>
                          <div className="font-medium text-text">AI/ML Engineer</div>
                          <div className="text-sm text-text-muted">
                            {isThai ? 'พัฒนาและฝึกอบรมโมเดล' : 'Develops and trains models'}
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                        <div>
                          <div className="font-medium text-text">Data Engineer</div>
                          <div className="text-sm text-text-muted">
                            {isThai ? 'จัดการ data pipeline และโครงสร้างพื้นฐาน' : 'Manages data pipelines and infrastructure'}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-text">
                      {isThai ? 'ทีมสนับสนุน:' : 'Support Team:'}
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                        <div>
                          <div className="font-medium text-text">Solution Architect</div>
                          <div className="text-sm text-text-muted">
                            {isThai ? 'ออกแบบโครงสร้างโซลูชัน' : 'Designs solution architecture'}
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                        <div>
                          <div className="font-medium text-text">QA Engineer</div>
                          <div className="text-sm text-text-muted">
                            {isThai ? 'รับประกันคุณภาพและการทดสอบ' : 'Ensures quality and testing'}
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                        <div>
                          <div className="font-medium text-text">DevOps Engineer</div>
                          <div className="text-sm text-text-muted">
                            {isThai ? 'จัดการ deployment และ monitoring' : 'Handles deployment and monitoring'}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text mb-4">
            {isThai ? 'พร้อมที่จะเริ่มต้นแล้วหรือยัง?' : 'Ready to Get Started?'}
          </h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            {isThai
              ? 'ติดต่อทีมของเราเพื่อหารือเกี่ยวกับโครงการของคุณและเรียนรู้เพิ่มเติมเกี่ยวกับกระบวนการของเรา'
              : 'Contact our team to discuss your project and learn more about our process.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={`${basePath}/contact` as any}>
                {isThai ? 'เริ่มโครงการ' : 'Start a Project'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`${basePath}/packages` as any}>
                {isThai ? 'ดูแพ็กเกจ' : 'View Packages'}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
