'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MagicHero } from '@/components/magicui';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, MapPin, Clock, Users, Heart, Zap, Globe, Award } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  const t = useTranslations('careers');
  const locale = useLocale();
  const basePath = `/${locale}`;

  const openPositions = [
    {
      id: 'senior-ml-engineer',
      title: 'Senior Machine Learning Engineer',
      department: 'Engineering',
      location: 'Bangkok, Thailand',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of production ML systems and mentor junior engineers.',
      requirements: [
        '5+ years experience in ML engineering',
        'Strong Python and ML frameworks (TensorFlow, PyTorch)',
        'Experience with MLOps and production deployments',
        'Knowledge of cloud platforms (AWS, Azure, GCP)'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Learning budget', 'Flexible hours']
    },
    {
      id: 'ai-solutions-architect',
      title: 'AI Solutions Architect',
      department: 'Solutions',
      location: 'Remote / Bangkok',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and architect AI solutions for enterprise clients across various industries.',
      requirements: [
        '7+ years in software architecture',
        'Deep understanding of AI/ML technologies',
        'Experience with enterprise integration',
        'Strong communication and client-facing skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Learning budget', 'Remote work']
    },
    {
      id: 'data-scientist',
      title: 'Senior Data Scientist',
      department: 'Data Science',
      location: 'Bangkok, Thailand',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Develop predictive models and analytics solutions for real-world business problems.',
      requirements: [
        '4+ years in data science',
        'Strong statistical and ML knowledge',
        'Experience with Python/R and SQL',
        'Domain expertise in manufacturing or finance'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Learning budget', 'Flexible hours']
    },
    {
      id: 'frontend-developer',
      title: 'Frontend Developer (AI Applications)',
      department: 'Engineering',
      location: 'Bangkok, Thailand',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build intuitive interfaces for AI applications and data visualization dashboards.',
      requirements: [
        '3+ years frontend development',
        'React/Next.js expertise',
        'Experience with data visualization',
        'Understanding of AI/ML concepts'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Learning budget', 'Flexible hours']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: locale.startsWith('th') ? 'สุขภาพและความเป็นอยู่ที่ดี' : 'Health & Wellness',
      description: locale.startsWith('th') 
        ? 'ประกันสุขภาพที่ครอบคลุม การสนับสนุนสุขภาพจิต และโปรแกรมสุขภาพ'
        : 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Zap,
      title: locale.startsWith('th') ? 'การเรียนรู้และการเติบโต' : 'Learning & Growth',
      description: locale.startsWith('th') 
        ? 'งบประมาณการเรียนรู้ประจำปี การเข้าร่วมการประชุม และการเข้าถึงเครื่องมือ AI ล้ำสมัย'
        : 'Annual learning budget, conference attendance, and access to cutting-edge AI tools.'
    },
    {
      icon: Globe,
      title: locale.startsWith('th') ? 'ความยืดหยุ่นในการทำงาน' : 'Work Flexibility',
      description: locale.startsWith('th') 
        ? 'โมเดลการทำงานแบบไฮบริด เวลาทำงานที่ยืดหยุ่น และตัวเลือกการทำงานทางไกลสำหรับตำแหน่งที่เหมาะสม'
        : 'Hybrid work model, flexible hours, and remote work options for eligible positions.'
    },
    {
      icon: Award,
      title: locale.startsWith('th') ? 'การพัฒนาอาชีพ' : 'Career Development',
      description: locale.startsWith('th') 
        ? 'เส้นทางอาชีพที่ชัดเจน โปรแกรมให้คำปรึกษา และโอกาสในการทำงานในโปรเจกต์ที่หลากหลาย'
        : 'Clear career paths, mentorship programs, and opportunities to work on diverse projects.'
    }
  ];

  const culture = [
    {
      title: locale.startsWith('th') ? 'นวัตกรรมเป็นอันดับแรก' : 'Innovation First',
      description: locale.startsWith('th') 
        ? 'เราสนับสนุนการทดลองและให้อิสระในการสำรวจเทคโนโลยีและแนวทางใหม่ๆ'
        : 'We encourage experimentation and provide the freedom to explore new technologies and approaches.'
    },
    {
      title: locale.startsWith('th') ? 'สภาพแวดล้อมที่ร่วมมือกัน' : 'Collaborative Environment',
      description: locale.startsWith('th') 
        ? 'ทำงานกับบุคคลที่มีความสามารถจากภูมิหลังที่หลากหลายในวัฒนธรรมที่สนับสนุนและมุ่งเน้นทีม'
        : 'Work with talented individuals from diverse backgrounds in a supportive, team-oriented culture.'
    },
    {
      title: locale.startsWith('th') ? 'ผลกระทบที่แท้จริง' : 'Real Impact',
      description: locale.startsWith('th') 
        ? 'งานของคุณมีส่วนช่วยโดยตรงในการแก้ปัญหาในโลกจริงและเปลี่ยนแปลงธุรกิจ'
        : 'Your work directly contributes to solving real-world problems and transforming businesses.'
    },
    {
      title: locale.startsWith('th') ? 'การเติบโตอย่างต่อเนื่อง' : 'Continuous Growth',
      description: locale.startsWith('th') 
        ? 'เราลงทุนในการพัฒนาอาชีพของคุณด้วยการฝึกอบรม การให้คำปรึกษา และโอกาสในการเติบโต'
        : 'We invest in your professional development with training, mentorship, and growth opportunities.'
    }
  ];

  return (
    <div className="bg-bg">
      {/* Hero Section */}
      <MagicHero
        eyebrow={locale.startsWith('th') ? 'ร่วมทีมกับเรา' : 'Join Our Team'}
        title={locale.startsWith('th') ? 'สร้างอนาคตของ AI กับเรา' : 'Build the Future of AI with Us'}
        description={locale.startsWith('th') 
          ? 'ร่วมทีมกับผู้เชี่ยวชาญ AI ของเราที่กำลังเปลี่ยนแปลงธุรกิจผ่านเทคโนโลยีที่ล้ำสมัย ทำงานในโปรเจกต์ที่ทันสมัย เรียนรู้จากผู้นำในอุตสาหกรรม และสร้างผลกระทบที่แท้จริงในโลกของปัญญาประดิษฐ์'
          : 'Join our team of AI experts who are transforming businesses through innovative technology. Work on cutting-edge projects, learn from industry leaders, and create real impact in the world of artificial intelligence.'
        }
        align="center"
        metrics={[
          { value: '25+', label: locale.startsWith('th') ? 'สมาชิกทีม' : 'Team Members' },
          { value: '4', label: locale.startsWith('th') ? 'ตำแหน่งว่าง' : 'Open Positions' },
          { value: '98%', label: locale.startsWith('th') ? 'ความพึงพอใจของพนักงาน' : 'Employee Satisfaction' }
        ]}
      />

      {/* Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {locale.startsWith('th') ? 'วัฒนธรรมของเรา' : 'Our Culture'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {locale.startsWith('th') 
                ? 'เราเชื่อว่าโซลูชัน AI ที่ยอดเยี่ยมมาจากทีมที่ยอดเยี่ยม นี่คือสิ่งที่ทำให้การทำงานที่ CerebraTechAI พิเศษและทำไมสมาชิกทีมของเราถึงรักสิ่งที่พวกเขาทำ'
                : 'We believe that great AI solutions come from great teams. Here\'s what makes working at CerebraTechAI special.'
              }
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {culture.map((item, index) => (
              <Card key={index} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-text mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {locale.startsWith('th') ? 'ทีมของเราพูดถึงเรา' : 'Our Team Talks About Us'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {locale.startsWith('th') 
                ? 'ฟังจากสมาชิกทีมของเราเกี่ยวกับประสบการณ์การทำงานที่ CerebraTechAI และเหตุผลที่พวกเขารักการเป็นส่วนหนึ่งของภารกิจของเรา'
                : 'Hear from our team members about their experience working at CerebraTechAI and why they love being part of our mission.'
              }
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-text-muted italic">
                    &quot;Working at CerebraTechAI has been incredible. The projects are challenging, the team is supportive, and I&apos;m constantly learning new technologies. The best part is seeing our AI solutions make a real difference for our clients.&quot;
                  </p>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-text">Dr. Sarah Chen</div>
                  <div className="text-text-muted">Chief AI Officer</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-text-muted italic">
                    &quot;The culture here is amazing. We have the freedom to experiment and innovate, while also having the support and resources we need to succeed. Every day brings new challenges and opportunities to grow.&quot;
                  </p>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-text">James Rodriguez</div>
                  <div className="text-text-muted">Head of Engineering</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-text-muted italic">
                    &quot;I love how we&apos;re not just building AI for the sake of it - we&apos;re solving real business problems. The impact we make is tangible, and that makes coming to work every day exciting and fulfilling.&quot;
                  </p>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-text">Dr. Priya Patel</div>
                  <div className="text-text-muted">Lead Data Scientist</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {locale.startsWith('th') ? 'สวัสดิการและสิทธิประโยชน์' : 'Benefits & Perks'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {locale.startsWith('th') 
                ? 'เราเสนอสวัสดิการที่ครอบคลุมเพื่อสนับสนุนความเป็นอยู่ที่ดี การเติบโต และความสำเร็จของคุณ'
                : 'We offer comprehensive benefits designed to support your well-being, growth, and success.'
              }
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {locale.startsWith('th') ? 'ตำแหน่งงานว่าง' : 'Open Positions'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {locale.startsWith('th') 
                ? 'สำรวจโอกาสปัจจุบันในการเข้าร่วมทีมผู้เชี่ยวชาญ AI ที่เติบโตของเรา'
                : 'Explore current opportunities to join our growing team of AI experts.'
              }
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <Card key={position.id} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-primary mb-2">
                        <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {position.department}
                        </span>
                        <span>•</span>
                        <span className="text-text-muted">{position.type}</span>
                        <span>•</span>
                        <span className="text-text-muted">{position.experience}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-text mb-2">
                        {position.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                      
                      <p className="text-text-muted mb-4">
                        {position.description}
                      </p>
                      
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h4 className="font-medium text-text mb-2">Requirements:</h4>
                          <ul className="text-sm text-text-muted space-y-1">
                            {position.requirements.map((req, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-text mb-2">Benefits:</h4>
                          <ul className="text-sm text-text-muted space-y-1">
                            {position.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0 lg:ml-6">
                      <Button asChild>
                        <Link href={`${basePath}/contact?position=${position.id}` as any}>
                          {locale.startsWith('th') ? 'สมัครเลย' : 'Apply Now'}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text mb-4">
            {locale.startsWith('th') ? 'ไม่เห็นตำแหน่งที่เหมาะสม?' : 'Don\'t See Your Role?'}
          </h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            {locale.startsWith('th') 
              ? 'เรามองหาบุคคลที่มีความสามารถที่แบ่งปันความหลงใหลในการสร้างนวัตกรรม AI ของเรา ส่งประวัติของคุณมาและมาสำรวจโอกาสร่วมกัน'
              : 'We\'re always looking for talented individuals who share our passion for AI innovation. Send us your resume and let\'s explore opportunities together.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={`${basePath}/contact` as any}>
                {locale.startsWith('th') ? 'ส่งประวัติของคุณ' : 'Send Your Resume'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`${basePath}/about#team` as any}>
                {locale.startsWith('th') ? 'พบกับทีม' : 'Meet the Team'}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
