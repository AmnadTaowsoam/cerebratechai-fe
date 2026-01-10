'use client';

import { useLocale } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

export function StatsSection() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');

  const stats = [
    {
      icon: TrendingUp,
      value: '9+',
      label: isThai ? 'โครงการ' : 'Projects',
      description: isThai ? 'โครงการ AI ที่ส่งมอบจริง' : 'AI projects delivered',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Users,
      value: '3+',
      label: isThai ? 'แพลตฟอร์ม' : 'Platforms',
      description: isThai ? 'แพลตฟอร์มที่พัฒนา (malAI, DulaeDee, CerebraForge)' : 'Platforms developed (malAI, DulaeDee, CerebraForge)',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Zap,
      value: '2025',
      label: isThai ? 'ก่อตั้ง' : 'Founded',
      description: isThai ? 'เริ่มดำเนินงาน' : 'Started operations',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Award,
      value: '100%',
      label: isThai ? 'โฟกัส SME' : 'SME Focused',
      description: isThai ? 'งานขนาดเล็กถึงกลาง' : 'Small to mid-size projects',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  const achievements = [
    {
      titleEn: 'malAI Platform',
      titleTh: 'แพลตฟอร์ม malAI',
      metric: '40%',
      descriptionEn: 'Reduction in event planning time',
      descriptionTh: 'ลดเวลาวางแผนงานพิธี',
      impactEn: '1,200+ active users, 350+ vendors onboarded',
      impactTh: 'ผู้ใช้ 1,200+ ราย, ผู้ให้บริการ 350+ ราย',
    },
    {
      titleEn: 'DulaeDee Wellness',
      titleTh: 'DulaeDee Wellness',
      metric: '60%',
      descriptionEn: 'Faster user onboarding process',
      descriptionTh: 'ออนบอร์ดผู้ใช้เร็วขึ้น',
      impactEn: '2,500+ active users, 99.8% platform uptime',
      impactTh: 'ผู้ใช้ 2,500+ ราย, uptime 99.8%',
    },
    {
      titleEn: 'CerebraForge System',
      titleTh: 'ระบบ CerebraForge',
      metric: '70%',
      descriptionEn: 'Faster knowledge retrieval',
      descriptionTh: 'ค้นหาความรู้เร็วขึ้น',
      impactEn: '50K+ documents indexed, 3,000+ daily queries',
      impactTh: 'เอกสาร 50K+, คำค้น 3,000+ ต่อวัน',
    },
    {
      titleEn: 'Edge AI Solutions',
      titleTh: 'โซลูชัน Edge AI',
      metric: '90%',
      descriptionEn: 'Latency reduction vs cloud',
      descriptionTh: 'ลด latency เมื่อเทียบกับ cloud',
      impactEn: '80+ deployments, 100% offline capability',
      impactTh: 'ดีพลอย 80+ ครั้ง, ทำงานออฟไลน์ 100%',
    },
    {
      titleEn: 'Computer Vision',
      titleTh: 'Computer Vision',
      metric: '95%',
      descriptionEn: 'Accuracy in weight prediction',
      descriptionTh: 'ความแม่นยำในการทำนายน้ำหนัก',
      impactEn: '10K+ items/day processed, ±2% precision',
      impactTh: 'ประมวลผล 10K+ ชิ้น/วัน, คลาดเคลื่อน ±2%',
    },
    {
      titleEn: 'OCR Dashboard',
      titleTh: 'OCR Dashboard',
      metric: '98%',
      descriptionEn: 'OCR accuracy rate',
      descriptionTh: 'ความแม่นยำของ OCR',
      impactEn: '5,000+ documents/day, <3 sec processing',
      impactTh: 'เอกสาร 5,000+ ฉบับ/วัน, ประมวลผล <3 วินาที',
    },
  ];

  const industries = [
    { nameEn: 'Event Management', nameTh: 'งานพิธีและอีเวนต์', count: '1,200+' },
    { nameEn: 'Healthcare & Wellness', nameTh: 'สุขภาพและเวลเนส', count: '2,500+' },
    { nameEn: 'Enterprise Software', nameTh: 'ซอฟต์แวร์องค์กร', count: '50K+' },
    { nameEn: 'Security & Surveillance', nameTh: 'ความปลอดภัยและเฝ้าระวัง', count: '150+' },
    { nameEn: 'Logistics & Agriculture', nameTh: 'โลจิสติกส์และเกษตร', count: '10K+' },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-surface/30 via-bg to-surface/30 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(124,58,237,0.08),_transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text mb-4">
            {isThai ? 'โครงการและโซลูชันที่พัฒนาแล้ว' : 'Projects & Solutions Developed'}
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            {isThai
              ? 'ผลงานของเราครอบคลุมหลายอุตสาหกรรม ตั้งแต่ระบบอีเวนต์ไปจนถึง Edge Computing และ Knowledge Management'
              : 'AI solutions we develop span multiple industries, from event management to edge computing and knowledge management.'
            }
          </p>
          <p className="text-xs text-text-muted/70 mt-4 max-w-3xl mx-auto">
            {isThai
              ? '* ตัวเลขและผลลัพธ์อ้างอิงจากโครงการจริงและข้อมูลสังเคราะห์เพื่อการสาธิต ผลลัพธ์จริงอาจแตกต่างตามบริบท'
              : '* Figures and outcomes shown are based on actual projects and synthetic data for demonstration. Actual results may vary based on multiple factors.'
            }
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.label} className="border border-hairline bg-surface/80 backdrop-blur hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.bgColor} ${stat.color} mb-4`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-text mb-2">{stat.value}</div>
                  <h3 className="text-lg font-semibold text-text mb-2">{stat.label}</h3>
                  <p className="text-sm text-text-muted">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Project Achievements */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-text mb-8 text-center">
            {isThai ? 'ผลลัพธ์จากโครงการ' : 'Project Achievements'}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border border-hairline bg-surface/80 backdrop-blur hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-text mb-3">
                    {isThai ? achievement.titleTh : achievement.titleEn}
                  </h4>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold text-primary">{achievement.metric}</span>
                    <span className="text-sm text-text-muted">
                      {isThai ? achievement.descriptionTh : achievement.descriptionEn}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted">
                    {isThai ? achievement.impactTh : achievement.impactEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Impact */}
        <Card className="border border-hairline bg-surface/80 backdrop-blur">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-text mb-6 text-center">
              {isThai ? 'อุตสาหกรรมที่เราให้บริการ' : 'Industries We Serve'}
            </h3>
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
              {industries.map((industry) => (
                <div key={industry.nameEn} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{industry.count}</div>
                  <p className="text-sm text-text-muted">
                    {isThai ? industry.nameTh : industry.nameEn}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
