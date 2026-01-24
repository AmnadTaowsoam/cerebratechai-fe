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
  CheckCircle2,
  Settings,
} from 'lucide-react';
import Link from 'next/link';
import { SECTION_SPACING } from '@/lib/constants/spacing';

export default function HowWeWorkPage() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;

  const processSteps = [
    {
      step: 1,
      icon: Search,
      title: isThai ? 'สำรวจและประเมิน' : 'Discovery & Assessment',
      duration: isThai ? '1-2 สัปดาห์' : '1-2 weeks',
      description: isThai
        ? 'ทำความเข้าใจเป้าหมาย ข้อจำกัด ข้อมูล และความเป็นไปได้ของโครงการอย่างละเอียด'
        : 'We start by deeply understanding your needs, constraints, and opportunities.',
      activities: [
        isThai ? 'สัมภาษณ์ผู้เกี่ยวข้อง' : 'Stakeholder interviews',
        isThai ? 'ประเมินข้อมูลที่มี' : 'Data assessment',
        isThai
          ? 'วิเคราะห์ความเป็นไปได้เชิงเทคนิค'
          : 'Technical feasibility study',
        isThai ? 'กำหนดเกณฑ์ความสำเร็จ' : 'Success criteria definition',
      ],
      deliverables: [
        isThai ? 'รายงานประเมิน' : 'Assessment report',
        isThai ? 'บทวิเคราะห์ความเป็นไปได้' : 'Feasibility analysis',
        isThai ? 'ขอบเขตและไทม์ไลน์' : 'Project scope & timeline',
      ],
    },
    {
      step: 2,
      icon: Lightbulb,
      title: isThai ? 'ออกแบบและวางแผน' : 'Design & Planning',
      duration: isThai ? '1-2 สัปดาห์' : '1-2 weeks',
      description: isThai
        ? 'ออกแบบสถาปัตยกรรมและแผนงานให้ตอบโจทย์ธุรกิจและใช้งานได้จริง'
        : 'Design architecture and plan development that addresses business needs.',
      activities: [
        isThai ? 'ออกแบบสถาปัตยกรรมโซลูชัน' : 'Solution architecture design',
        isThai ? 'วางแผน data pipeline' : 'Data pipeline planning',
        isThai ? 'เลือกโมเดลและเทคนิค' : 'Model selection',
        isThai ? 'วางแผนการเชื่อมต่อระบบ' : 'Integration strategy',
      ],
      deliverables: [
        isThai ? 'สถาปัตยกรรมเชิงเทคนิค' : 'Technical architecture',
        isThai ? 'แผนดำเนินงาน' : 'Implementation plan',
        isThai ? 'แผนลดความเสี่ยง' : 'Risk mitigation strategy',
      ],
    },
    {
      step: 3,
      icon: Code,
      title: isThai ? 'พัฒนาและฝึกโมเดล' : 'Development & Training',
      duration: isThai ? '4-12 สัปดาห์' : '4-12 weeks',
      description: isThai
        ? 'พัฒนาโซลูชันและฝึกโมเดลตามข้อมูลจริง พร้อมปรับปรุงแบบวนรอบ'
        : 'Develop, train, and fine-tune AI models according to your specific needs.',
      activities: [
        isThai ? 'เตรียมข้อมูลและทำความสะอาด' : 'Data preparation & cleaning',
        isThai ? 'พัฒนาโมเดล' : 'Model development',
        isThai ? 'ทำ feature engineering' : 'Feature engineering',
        isThai ? 'ปรับปรุงแบบวนรอบ' : 'Iterative improvement',
      ],
      deliverables: [
        isThai ? 'โมเดลที่ฝึกแล้ว' : 'Trained models',
        isThai ? 'โค้ด API/Integration' : 'API/Integration code',
        isThai ? 'เอกสารเทคนิค' : 'Technical documentation',
      ],
    },
    {
      step: 4,
      icon: TestTube,
      title: isThai ? 'ทดสอบและยืนยันผล' : 'Testing & Validation',
      duration: isThai ? '1-3 สัปดาห์' : '1-3 weeks',
      description: isThai
        ? 'ทดสอบประสิทธิภาพและความถูกต้องก่อนนำขึ้นใช้งานจริง'
        : 'Comprehensive testing to ensure the system works as expected.',
      activities: [
        isThai ? 'ทดสอบประสิทธิภาพโมเดล' : 'Model performance testing',
        isThai ? 'ทดสอบการเชื่อมต่อระบบ' : 'Integration testing',
        isThai ? 'ทดสอบการยอมรับของผู้ใช้' : 'User acceptance testing',
        isThai ? 'ทดสอบโหลดและสเตรส' : 'Load & stress testing',
      ],
      deliverables: [
        isThai ? 'รายงานผลทดสอบ' : 'Test reports',
        isThai ? 'เมตริกประสิทธิภาพ' : 'Performance metrics',
        isThai ? 'รายการแก้ไขและปรับปรุง' : 'Bug fixes & improvements',
      ],
    },
    {
      step: 5,
      icon: Rocket,
      title: isThai ? 'ติดตั้งและเปิดใช้งาน' : 'Deployment & Launch',
      duration: isThai ? '1-2 สัปดาห์' : '1-2 weeks',
      description: isThai
        ? 'นำขึ้นระบบจริง พร้อมมอนิเตอร์และถ่ายทอดความรู้ให้ทีมของคุณ'
        : 'Deploy system to production with monitoring and support.',
      activities: [
        isThai ? 'ติดตั้งระบบใช้งานจริง' : 'Production deployment',
        isThai ? 'ตั้งค่า monitoring' : 'Monitoring setup',
        isThai ? 'อบรมผู้ใช้งาน' : 'User training',
        isThai ? 'ถ่ายทอดความรู้' : 'Knowledge transfer',
      ],
      deliverables: [
        isThai ? 'ระบบพร้อมใช้งาน' : 'Production system',
        isThai ? 'แดชบอร์ดมอนิเตอร์' : 'Monitoring dashboard',
        isThai ? 'เอกสารส่งมอบ/คู่มือ' : 'Training materials',
      ],
    },
    {
      step: 6,
      icon: LifeBuoy,
      title: isThai ? 'ดูแลและปรับปรุงต่อเนื่อง' : 'Support & Optimization',
      duration: isThai ? 'ต่อเนื่อง' : 'Ongoing',
      description: isThai
        ? 'ติดตามผล ปรับจูน และพัฒนาเพิ่มเติมตามการใช้งานจริง'
        : 'Continuous support and performance optimization.',
      activities: [
        isThai ? 'ติดตามประสิทธิภาพ' : 'Performance monitoring',
        isThai ? 'ฝึกโมเดลซ้ำเมื่อจำเป็น' : 'Model retraining',
        isThai ? 'แก้ไขบั๊กและอัปเดต' : 'Bug fixes & updates',
        isThai ? 'เพิ่มฟีเจอร์ใหม่' : 'Feature enhancements',
      ],
      deliverables: [
        isThai ? 'รายงานรายเดือน' : 'Monthly reports',
        isThai ? 'อัปเดตโมเดล' : 'Model updates',
        isThai ? 'ข้อเสนอแนะการปรับปรุง' : 'Optimization recommendations',
      ],
    },
  ];

  const successFactors = [
    {
      icon: Users,
      title: isThai ? 'การร่วมมือ' : 'Collaboration',
      description: isThai
        ? 'ทำงานร่วมกันอย่างใกล้ชิด เพื่อให้ข้อมูลครบและตัดสินใจได้เร็ว'
        : 'Collaboration between your team and ours is key to success.',
    },
    {
      icon: Target,
      title: isThai ? 'เป้าหมายชัดเจน' : 'Clear Objectives',
      description: isThai
        ? 'กำหนด KPI และผลลัพธ์ที่วัดได้ เพื่อโฟกัสสิ่งที่สำคัญจริง'
        : 'Clear, measurable objectives help us focus on what matters most.',
    },
    {
      icon: CheckCircle2,
      title: isThai ? 'คุณภาพข้อมูล' : 'Data Quality',
      description: isThai
        ? 'ข้อมูลที่ดีคือรากฐานของโซลูชัน AI ที่ใช้งานได้จริง'
        : 'Quality data is the foundation of successful AI solutions.',
    },
  ];

  return (
    <div className="bg-bg">
      {/* Hero Section */}
      <MagicHero
        eyebrow={isThai ? 'กระบวนการทำงาน' : 'Our Process'}
        title={isThai ? 'เราทำงานอย่างไร' : 'How We Work'}
        description={
          isThai
            ? 'กระบวนการ 6 ขั้นตอนที่โปร่งใส ตั้งแต่สำรวจปัญหา ออกแบบ พัฒนา ทดสอบ จนถึงส่งมอบและดูแลต่อเนื่อง'
            : 'Our proven process for delivering successful AI solutions, from discovery to deployment and beyond.'
        }
        align="center"
        metrics={[
          { value: '6', label: isThai ? 'ขั้นตอนหลัก' : 'Key Phases' },
          { value: '8-20', label: isThai ? 'สัปดาห์โดยเฉลี่ย' : 'Avg Weeks' },
          { value: '100%', label: isThai ? 'โปร่งใส' : 'Transparent' },
        ]}
      >
        <Particles quantity={35} staticity={20} ease={60} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
      </MagicHero>

      {/* Process Steps */}
      <section className={SECTION_SPACING.FEATURES}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {isThai ? 'กระบวนการทำงานของเรา' : 'Our Work Process'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {isThai
                ? 'โฟลว์งาน 6 ขั้นตอนที่ช่วยให้โปรเจกต์ชัดเจนและส่งมอบได้จริง'
                : 'A clear, transparent 6-phase process to ensure your project succeeds.'}
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={step.step} className="relative">
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-8 top-24 w-0.5 h-20 bg-gradient-to-b from-primary/50 to-accent/50 hidden lg:block" />
                  )}

                  <Card
                    className={`border border-hairline bg-surface/80 hover:shadow-xl transition-all ${
                      isEven ? 'lg:mr-auto lg:w-5/6' : 'lg:ml-auto lg:w-5/6'
                    }`}
                  >
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
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 text-sm text-text-muted"
                                  >
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
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 text-sm text-text-muted"
                                  >
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
      <section className={`${SECTION_SPACING.FEATURES} bg-surface/30`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {isThai ? 'ปัจจัยความสำเร็จ' : 'Success Factors'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {isThai
                ? 'สิ่งที่ทำให้โปรเจกต์ AI สำเร็จอย่างยั่งยืน'
                : 'What makes AI projects succeed.'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {successFactors.map((factor, index) => {
              const IconComponent = factor.icon;

              return (
                <Card
                  key={index}
                  className="border border-hairline bg-surface/80 hover:shadow-xl transition-all"
                >
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
                  ? 'ทุกโปรเจกต์มีทีมผู้เชี่ยวชาญที่ดูแลอย่างใกล้ชิดตั้งแต่เริ่มจนส่งมอบ'
                  : 'Every project has a dedicated team of experts committed to your success.'}
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
                          <div className="font-medium text-text">
                            Project Manager
                          </div>
                          <div className="text-sm text-text-muted">
                            {isThai
                              ? 'ดูแลโครงการและเป็นจุดติดต่อหลัก'
                              : 'Oversees entire project and main point of contact'}
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                        <div>
                          <div className="font-medium text-text">
                            AI/ML Engineer
                          </div>
                          <div className="text-sm text-text-muted">
                            {isThai
                              ? 'พัฒนาและฝึกโมเดล AI'
                              : 'Develops and trains models'}
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                        <div>
                          <div className="font-medium text-text">
                            Data Engineer
                          </div>
                          <div className="text-sm text-text-muted">
                            {isThai
                              ? 'ดูแล data pipeline และโครงสร้างพื้นฐาน'
                              : 'Manages data pipelines and infrastructure'}
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
                          <div className="font-medium text-text">
                            Solution Architect
                          </div>
                          <div className="text-sm text-text-muted">
                            {isThai
                              ? 'ออกแบบสถาปัตยกรรมโซลูชัน'
                              : 'Designs solution architecture'}
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                        <div>
                          <div className="font-medium text-text">
                            QA Engineer
                          </div>
                          <div className="text-sm text-text-muted">
                            {isThai
                              ? 'ทดสอบคุณภาพและความถูกต้อง'
                              : 'Ensures quality and testing'}
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                        <div>
                          <div className="font-medium text-text">
                            DevOps Engineer
                          </div>
                          <div className="text-sm text-text-muted">
                            {isThai
                              ? 'ดูแลการ deploy และ monitoring'
                              : 'Handles deployment and monitoring'}
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
      <section
        className={`${SECTION_SPACING.CTA} bg-gradient-to-br from-primary/10 via-transparent to-accent/10`}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text mb-4">
            {isThai ? 'พร้อมเริ่มต้นหรือยัง?' : 'Ready to Get Started?'}
          </h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            {isThai
              ? 'คุยกับทีมเราเพื่อประเมินโปรเจกต์และออกแบบขั้นตอนที่เหมาะกับคุณ'
              : 'Contact our team to discuss your project and learn more about our process.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={`${basePath}/contact` as any}>
                {isThai ? 'เริ่มโปรเจกต์' : 'Start a Project'}
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
