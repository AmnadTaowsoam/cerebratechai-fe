'use client';

import { useLocale } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Zap, Award, Factory, Activity, Layers, Cpu, Truck, FileText } from 'lucide-react';

export function StatsSection() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');

  const stats = [
    {
      icon: TrendingUp,
      value: '500+',
      label: isThai ? 'Scenarios ที่พร้อมใช้' : 'Ready-to-use Scenarios',
      description: isThai
        ? 'ครอบคลุมทุกอุตสาหกรรม'
        : 'Covering all industries',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Layers,
      value: '30+',
      label: isThai ? 'โมดูล AI' : 'AI Modules',
      description: isThai
        ? 'เชื่อมต่อได้ทันทีแบบ Lego'
        : 'Plug-and-play like Lego',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Zap,
      value: '10M+',
      label: isThai ? 'Images/Docs' : 'Images/Docs',
      description: isThai ? 'ประมวลผลต่อเดือน' : 'Processed monthly',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Award,
      value: '99.9%',
      label: isThai ? 'Enterprise Uptime' : 'Enterprise Uptime',
      description: isThai ? 'เสถียรภาพระดับองค์กร' : 'Reliabilitiy guarantee',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  const achievements = [
    {
      icon: Factory,
      titleEn: 'Industrial QC',
      titleTh: 'การควบคุมคุณภาพอุตสาหกรรม',
      metric: '85%',
      descriptionEn: 'Waste Reduction',
      descriptionTh: 'ลดของเสียในโรงงาน',
      impactEn: 'Real-time defect detection, 1M+ parts inspected',
      impactTh: 'ตรวจจับแบบเรียลไทม์, ตรวจสอบแล้ว 1M+ ชิ้น',
    },
    {
      icon: Activity,
      titleEn: 'Healthcare AI',
      titleTh: 'AI ทางการแพทย์',
      metric: '60%',
      descriptionEn: 'Faster Diagnosis Support',
      descriptionTh: 'ช่วยวินิจฉัยเร็วขึ้น',
      impactEn: 'Pathology & Radiology analysis support',
      impactTh: 'วิเคราะห์พยาธิวิทยาและรังสีวิทยา',
    },
    {
      icon: Layers,
      titleEn: 'CerebraForge (RAG)',
      titleTh: 'CerebraForge (RAG)',
      metric: '70%',
      descriptionEn: 'Faster Knowledge Retrieval',
      descriptionTh: 'ค้นหาความรู้เร็วขึ้น',
      impactEn: 'Enterprise Search, 50K+ documents indexed',
      impactTh: 'ค้นหาข้อมูลองค์กร, จัดเก็บ 50K+ เอกสาร',
    },
    {
      icon: Cpu,
      titleEn: 'Edge Intelligence',
      titleTh: 'Edge Intelligence',
      metric: '<50ms',
      descriptionEn: 'Ultra-low Latency',
      descriptionTh: 'ความหน่วงต่ำมาก',
      impactEn: '100% Offline capability, Privacy-first',
      impactTh: 'ทำงานออฟไลน์ 100%, รักษาความเป็นส่วนตัว',
    },
    {
      icon: Truck,
      titleEn: 'Smart Logistics',
      titleTh: 'โลจิสติกส์อัจฉริยะ',
      metric: '99.5%',
      descriptionEn: 'Counting Accuracy',
      descriptionTh: 'ความแม่นยำการนับ',
      impactEn: 'Automated inventory & package sorting',
      impactTh: 'นับสต็อกและคัดแยกพัสดุอัตโนมัติ',
    },
    {
      icon: FileText,
      titleEn: 'Financial Doc AI',
      titleTh: 'AI เอกสารการเงิน',
      metric: '98%',
      descriptionEn: 'OCR Accuracy (Thai)',
      descriptionTh: 'ความแม่นยำ OCR ภาษาไทย',
      impactEn: 'Invoice & Tax receipt automation',
      impactTh: 'ประมวลผลใบแจ้งหนี้และใบกำกับภาษี',
    },
  ];

  const industries = [
    {
      nameEn: 'Manufacturing',
      nameTh: 'การผลิตและโรงงาน',
      count: '50+',
    },
    {
      nameEn: 'Healthcare',
      nameTh: 'โรงพยาบาลและการแพทย์',
      count: '20+',
    },
    { nameEn: 'Retail & Service', nameTh: 'ค้าปลีกและบริการ', count: '100+' },
    {
      nameEn: 'Logistics',
      nameTh: 'โลจิสติกส์',
      count: '30+',
    },
    {
      nameEn: 'Agriculture',
      nameTh: 'การเกษตร',
      count: '500+', // Keeping high count for agtech platform legacy users if needed, or just generic sensors
    },
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
            {isThai
              ? 'ความสำเร็จและผลลัพธ์ที่พิสูจน์แล้ว'
              : 'Proven Impact & Achievements'}
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            {isThai
              ? 'เรานำเทคโนโลยี AI ระดับโลกมาประยุกต์ใช้เพื่อแก้ปัญหาจริงในหลากหลายอุตสาหกรรม'
              : 'Applying world-class AI technology to solve real-world problems across industries.'}
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {stats.map(stat => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={stat.label}
                className="border border-hairline bg-surface/80 backdrop-blur hover:shadow-lg transition-all"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.bgColor} ${stat.color} mb-4`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-text mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-text-muted">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Project Achievements */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-text mb-8 text-center">
            {isThai ? 'Use Cases ที่ประสบความสำเร็จ' : 'Successful Use Cases'}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="border border-hairline bg-surface/80 backdrop-blur hover:shadow-lg transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <achievement.icon className="w-5 h-5" />
                     </div>
                     <h4 className="text-lg font-semibold text-text">
                        {isThai ? achievement.titleTh : achievement.titleEn}
                      </h4>
                  </div>
                  
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold text-primary">
                      {achievement.metric}
                    </span>
                    <span className="text-sm text-text-muted">
                      {isThai
                        ? achievement.descriptionTh
                        : achievement.descriptionEn}
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
              {industries.map(industry => (
                <div key={industry.nameEn} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {industry.count}
                  </div>
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
