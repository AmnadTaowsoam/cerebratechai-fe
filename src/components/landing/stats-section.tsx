'use client';

import { useLocale } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

export function StatsSection() {
  const locale = useLocale();
  const stats = [
    {
      icon: TrendingUp,
      value: '450%',
      label: 'Average ROI',
      description: 'Return on investment across all client projects',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Users,
      value: '1,200+',
      label: 'Active Users',
      description: 'Across malAI and DulaeDee platforms',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Zap,
      value: '70%',
      label: 'Faster Retrieval',
      description: 'Knowledge access time with CereBraKM',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Award,
      value: '98%',
      label: 'Success Rate',
      description: 'Project completion with measurable outcomes',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  const achievements = [
    {
      title: 'malAI Platform',
      metric: '40%',
      description: 'Reduction in event planning time',
      impact: '1,200+ active users, 350+ vendors onboarded',
    },
    {
      title: 'DulaeDee Wellness',
      metric: '60%',
      description: 'Faster user onboarding process',
      impact: '2,500+ active users, 99.8% platform uptime',
    },
    {
      title: 'CereBraKM System',
      metric: '70%',
      description: 'Faster knowledge retrieval',
      impact: '50K+ documents indexed, 3,000+ daily queries',
    },
    {
      title: 'Edge AI Solutions',
      metric: '90%',
      description: 'Latency reduction vs cloud',
      impact: '80+ deployments, 100% offline capability',
    },
    {
      title: 'Computer Vision',
      metric: '95%',
      description: 'Accuracy in weight prediction',
      impact: '10K+ items/day processed, ±2% precision',
    },
    {
      title: 'OCR Dashboard',
      metric: '98%',
      description: 'OCR accuracy rate',
      impact: '5,000+ documents/day, <3 sec processing',
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
            {locale.startsWith('th') ? 'ผลกระทบจริง ผลลัพธ์ที่วัดได้' : 'Real Impact, Measurable Results'}
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            {locale.startsWith('th') 
              ? 'แอปพลิเคชันและโซลูชันของเราส่งมอบคุณค่าที่จับต้องได้ในทุกอุตสาหกรรม จากการจัดการอีเวนต์ไปจนถึงการประมวลผลแบบ Edge'
              : 'Our applications and solutions deliver tangible value across industries, from event management to edge computing.'
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
            {locale.startsWith('th') ? 'ความสำเร็จของโครงการ' : 'Project Achievements'}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border border-hairline bg-surface/80 backdrop-blur hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-text mb-3">{achievement.title}</h4>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold text-primary">{achievement.metric}</span>
                    <span className="text-sm text-text-muted">{achievement.description}</span>
                  </div>
                  <p className="text-sm text-text-muted">{achievement.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Impact */}
        <Card className="border border-hairline bg-surface/80 backdrop-blur">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-text mb-6 text-center">
              {locale.startsWith('th') ? 'อุตสาหกรรมที่เราบริการ' : 'Industries We Serve'}
            </h3>
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
              {[
                { name: 'Event Management', count: '1,200+' },
                { name: 'Healthcare & Wellness', count: '2,500+' },
                { name: 'Enterprise Software', count: '50K+' },
                { name: 'Security & Surveillance', count: '150+' },
                { name: 'Logistics & Agriculture', count: '10K+' },
              ].map((industry) => (
                <div key={industry.name} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{industry.count}</div>
                  <p className="text-sm text-text-muted">{industry.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

