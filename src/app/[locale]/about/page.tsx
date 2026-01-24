import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { MagicHero } from '@/components/magicui';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, Target, Award, Heart, Lightbulb, Shield, Zap, UserCheck } from 'lucide-react';
import Link from 'next/link';
import { SeoHead, OrganizationJsonLd } from '@/components/seo';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isThai = params.locale.startsWith('th');

  return {
    title: isThai ? 'เกี่ยวกับเรา - CerebraTechAI AI Studio' : 'About Us - CerebraTechAI AI Studio',
    description: isThai ? 'ทีม AI ของ CerebraTechAI ในกรุงเทพฯ เชี่ยวชาญการพัฒนาโซลูชัน AI สำหรับธุรกิจ' : 'Learn about our AI team in Bangkok with experience in developing AI solutions for businesses.',
    openGraph: {
      title: isThai ? 'เกี่ยวกับเรา - CerebraTechAI AI Studio' : 'About Us - CerebraTechAI AI Studio',
      description: isThai ? 'ทีม AI ของ CerebraTechAI ในกรุงเทพฯ เชี่ยวชาญการพัฒนาโซลูชัน AI สำหรับธุรกิจ' : 'Learn about our AI team in Bangkok with experience in developing AI solutions for businesses.',
    },
  };
}

export default async function AboutPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'about' });
  const isThai = params.locale.startsWith('th');
  const basePath = '/' + params.locale;

  const teamMembers = [
    {
      name: 'Founder & CEO',
      role: isThai ? 'ผู้ก่อตั้งและ CEO' : 'Founder & CEO',
      bio: isThai ? 'ผู้เชี่ยวชาญด้าน AI และ Machine Learning มีประสบการณ์กว่า 10 ปีในการพัฒนาโซลูชัน AI สำหรับธุรกิจ' : 'AI and Machine Learning expert with 10+ years of experience developing AI solutions for businesses.',
      image: '/team/founder.jpg'
    },
    {
      name: 'Head of Engineering',
      role: isThai ? 'หัวหน้าฝ่ายวิศวกรรม' : 'Head of Engineering',
      bio: isThai ? 'ผู้เชี่ยวชาญด้านสถาปัตยกรรมซอฟต์แวร์ มีประสบการณ์ในการพัฒนาระบบ Cloud และ Edge Computing' : 'Software architecture expert with experience in developing Cloud and Edge Computing systems.',
      image: '/team/engineering-lead.jpg'
    },
    {
      name: 'Lead Data Scientist',
      role: isThai ? 'หัวหน้านักวิทยาศาสตร์ข้อมูล' : 'Lead Data Scientist',
      bio: isThai ? 'ผู้เชี่ยวชาญด้าน Data Science และ Analytics มีประสบการณ์ในการพัฒนาโมเดล Machine Learning' : 'Data Science and Analytics expert with experience in developing Machine Learning models.',
      image: '/team/data-scientist.jpg'
    },
    {
      name: 'Solutions Architect',
      role: isThai ? 'สถาปัตยกรรมโซลูชัน' : 'Solutions Architect',
      bio: isThai ? 'ผู้เชี่ยวชาญด้านสถาปัตยกรรมโซลูชัน มีประสบการณ์ในการออกแบบและพัฒนาโซลูชัน AI' : 'Solutions architecture expert with experience in designing and developing AI solutions.',
      image: '/team/solutions-architect.jpg'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: t('values.innovation.title'),
      description: t('values.innovation.description'),
    },
    {
      icon: Shield,
      title: isThai ? 'ความไว้วางใจ' : 'Trust',
      description: isThai ? 'เราให้ความสำคัญกับความโปร่งใสและความน่าเชื่อถือในทุกโครงการ' : 'We prioritize transparency and trustworthiness in every project.',
    },
    {
      icon: Zap,
      title: isThai ? 'ผลกระทบ' : 'Impact',
      description: isThai ? 'เราเชื่อว่า AI ควรช่วยแก้ปัญหาในโลกจริงและสร้างคุณค่าที่มีความหมาย' : 'We believe AI should solve real-world problems and create meaningful value.',
    },
    {
      icon: UserCheck,
      title: isThai ? 'การทำงานร่วมกัน' : 'Collaboration',
      description: isThai ? 'เราทำงานร่วมกับทีมของคุณ ไม่ใช่แค่ทำงานให้ แต่มั่นใจที่จะถ่ายทอดความและความสำเร็จที่ยั่งยืนยาว' : 'We work alongside your team, not just for you, ensuring knowledge transfer and sustainable success.',
    },
  ];

  return (
    <>
      <SeoHead
        title={isThai ? 'เกี่ยวกับเรา - CerebraTechAI AI Studio' : 'About Us - CerebraTechAI AI Studio'}
        description={isThai ? 'ทีม AI ของ CerebraTechAI ในกรุงเทพฯ เชี่ยวชาญการพัฒนาโซลูชัน AI สำหรับธุรกิจ' : 'Learn about our AI team in Bangkok with experience in developing AI solutions for businesses.'}
        keywords={isThai ? ['เกี่ยวกับเรา', 'ทีม AI', 'CerebraTechAI', 'AI กรุงเทพ', 'ทีมแมชีนเลิร์นิง'] : ['About us', 'AI team', 'CerebraTechAI', 'AI Bangkok', 'Machine Learning team']}
        url="/about"
        type="website"
      />
      <OrganizationJsonLd />

      <div className="bg-bg">
      {/* Hero Section */}
      <MagicHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
        align="center"
        metrics={[
          { value: '7+', label: isThai ? 'ผลิตภัณฑ์' : 'Products' },
          { value: '50+', label: isThai ? 'ลูกค้า' : 'Clients' },
          { value: '99.9%', label: isThai ? 'Uptime' : 'Uptime' },
          { value: '24/7', label: isThai ? 'การสนับสนุน' : 'Support' },
        ]}
      />

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-text">
                    {t('mission.title')}
                  </h2>
                </div>
                <p className="text-text-muted leading-relaxed">
                  {t('mission.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-text">
                    {t('vision.title')}
                  </h2>
                </div>
                <p className="text-text-muted leading-relaxed">
                  {t('vision.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {isThai ? 'เรื่องราวของเรา' : 'Our Story'}
            </h2>
            <p className="text-text-muted max-w-3xl mx-auto text-lg leading-relaxed">
              {isThai
                ? 'ก่อตั้งขึ้นในปี 2025 เราเป็นทีมผู้เชี่ยวชาญด้าน AI ที่มุ่งเน้นการช่วยเหลือธุรกิจไทยในการนำ AI ไปใช้งานจริง เราไม่ใช่แค่ vendor แต่เป็นพาร์ทเนอร์ที่ทำงานร่วมกับคุณตั้งแต่ POC จนถึง Production เพื่อให้มั่นใจว่าโซลูชัน AI ที่เราสร้างให้คุณใช้งานได้จริงและสร้างผลลัพธ์ที่วัดได้'
                : 'Founded in 2025, we are an AI expert team focused on helping Thai businesses implement AI in production. We\'re not just a vendor - we\'re your partner, working with you from POC to Production to ensure the AI solutions we build work in practice and deliver measurable results.'
              }
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">2025</div>
                <h3 className="text-lg font-semibold text-text mb-2">{isThai ? 'ก่อตั้ง' : 'Founded'}</h3>
                <p className="text-sm text-text-muted">
                  {isThai ? 'เริ่มต้นด้วยวิสัยที่จะทำให้ AI เข้าถึงได้และใช้งานได้จริงสำหรับทุกคน' : 'Started with a vision to make AI accessible and practical for everyone.'}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">7+</div>
                <h3 className="text-lg font-semibold text-text mb-2">{isThai ? 'ผลิตภัณฑ์' : 'Products'}</h3>
                <p className="text-sm text-text-muted">
                  {isThai ? 'พัฒนาแอปพลิเคชันและบริการ AI ที่หลากหลาย' : 'Developed diverse AI applications and services.'}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <h3 className="text-lg font-semibold text-text mb-2">{isThai ? 'ลูกค้า' : 'Clients'}</h3>
                <p className="text-sm text-text-muted">
                  {isThai ? 'ให้บริการลูกค้าในหลายอุตสาหกรรม' : 'Serving clients across various industries.'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications & Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {isThai ? 'บริการและโซลูชันที่เรามอบให้' : 'Services & Solutions We Deliver'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg">
              {isThai
                ? 'เรามอบบริการ AI ครบวงจรตั้งแต่การปรึกษา พัฒนา ไปจนถึงการติดตั้งและดูแลรักษา พร้อมโซลูชันที่พร้อมใช้งานสำหรับธุรกิจของคุณ'
                : 'We provide end-to-end AI services from consulting, development, to deployment and maintenance, plus ready-to-use solutions for your business.'
              }
            </p>
          </div>

          {/* Platform Solutions */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-text mb-6">{isThai ? 'โซลูชันแพลตฟอร์ม' : 'Platform Solutions'}</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border border-hairline bg-surface/80 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-text mb-4">Phitiai</h4>
                  <p className="text-text-muted mb-4">
                    {isThai
                      ? 'แพลตฟอร์มจัดการพิธีกรรมไทยที่เชื่อมต่อผู้จัดงานกับผู้ให้บริการ มีฟีเจอร์วางแผนด้วย AI คำนวณงบประมาณ และเลือกเวลามงคล'
                      : 'A comprehensive platform for managing Thai ceremonies that connects event organizers with service providers. Features AI-powered planning, budget calculation, and auspicious timing selection.'
                    }
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{isThai ? 'จัดการพิธี' : 'Event Management'}</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{isThai ? 'วางแผน AI' : 'AI Planning'}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-hairline bg-surface/80 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-text mb-4">Sookwai</h4>
                  <p className="text-text-muted mb-4">
                    {isThai
                      ? 'แพลตฟอร์มสุขภาพสำหรับผู้สูงอายุ มีฟีเจอร์การเรียกเก็บเงิน PDPA และ Tele-health'
                      : 'Wellness platform for elderly care with smart billing, PDPA compliance, and tele-health features.'
                    }
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">{isThai ? 'สุขภาพ' : 'Wellness'}</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">PDPA</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-hairline bg-surface/80 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-text mb-4">CerebraForge</h4>
                  <p className="text-text-muted mb-4">
                    {isThai
                      ? 'ระบบจัดการความรู้ขั้นสูงที่ขับเคลื่อนด้วย RAG + LLM ช่วยองค์กรจัดการและใช้ทรัพย์กรทางปัญญา'
                      : 'Advanced knowledge management system powered by RAG + LLM that helps organizations capture, organize, and leverage their intellectual assets.'
                    }
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">RAG + LLM</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{isThai ? 'ค้นหา AI' : 'AI Search'}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Edge AI Solutions */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-text mb-6">{isThai ? 'โซลูชัน Edge AI' : 'Edge AI Solutions'}</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border border-hairline bg-surface/80 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-text mb-4">{isThai ? 'NVR + Raspberry Pi CCTV' : 'NVR + Raspberry Pi CCTV'}</h4>
                  <p className="text-text-muted mb-4">
                    {isThai
                      ? 'โซลูชันกล้องวงจรอัจฉริยะที่รวม NVR กับ Raspberry Pi สำหรับการวิเคราะห์ภาพขั้นสูง'
                      : 'Intelligent surveillance solution combining NVR with Raspberry Pi for advanced image analysis and monitoring.'
                    }
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">{isThai ? 'กล้องวงจร' : 'Surveillance'}</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">{isThai ? 'วิเคราะห์ภาพ' : 'Image Analysis'}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-hairline bg-surface/80 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-text mb-4">{isThai ? 'Edge Computer (Jetson/Raspberry Pi + LLM)' : 'Edge Computer (Jetson/Raspberry Pi + LLM)'}</h4>
                  <p className="text-text-muted mb-4">
                    {isThai
                      ? 'โซลูชัน Edge Computing ที่ทรงพลังรวม NVIDIA Jetson หรือ Raspberry Pi กับ LLM'
                      : 'Powerful edge computing solution combining NVIDIA Jetson or Raspberry Pi with Large Language Models.'
                    }
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{isThai ? 'Edge Computing' : 'Edge Computing'}</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">LLM</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Computer Vision Solutions */}
          <div>
            <h3 className="text-2xl font-bold text-text mb-6">{isThai ? 'โซลูชัน Computer Vision' : 'Computer Vision Solutions'}</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border border-hairline bg-surface/80 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-text mb-4">{isThai ? 'ทำนายน้ำหนักด้วยกล้อง Depth' : 'Depth Camera Weight Prediction'}</h4>
                  <p className="text-text-muted mb-4">
                    {isThai
                      ? 'ระบบกล้อง Depth ขั้นสูงสำหรับทำนายน้ำหนักและจัดประเภท ใช้ได้กับ Logistics, เกษตร และค้าปลีก'
                      : 'Advanced depth camera system for accurate weight prediction and size classification. Perfect for logistics, agriculture, and retail.'
                    }
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">{isThai ? 'กล้อง Depth' : 'Depth Camera'}</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">{isThai ? 'ทำนายน้ำหนัก' : 'Weight Prediction'}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-hairline bg-surface/80 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-text mb-4">{isThai ? 'ระบบ OCR Dashboard' : 'OCR Dashboard System'}</h4>
                  <p className="text-text-muted mb-4">
                    {isThai
                      ? 'ระบบประมวลผลเอกสารที่แปลงภาพเป็นข้อความโดยใช้เทคโนโลยี OCR'
                      : 'Intelligent document processing system that converts images to text using advanced OCR technology.'
                    }
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">OCR</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{isThai ? 'ประมวลผลเอกสาร' : 'Document Processing'}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {isThai ? 'ความสำเร็จของเรา' : 'Our Achievements'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {isThai
                ? 'การยอมรับจากผู้นำอุตสาหกรรมและความสำเร็จในการเป็นพันธมิตรยืนยันความเชี่ยวชาญและความมุ่งมั่น'
                : 'Recognition from industry leaders and successful partnerships confirm our expertise and commitment to excellence.'
              }
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">7+</div>
                <h3 className="text-lg font-semibold text-text mb-2">{isThai ? 'ผลิตภัณฑ์' : 'Products'}</h3>
                <p className="text-sm text-text-muted">
                  {isThai ? 'แอปพลิเคชันและบริการ AI' : 'AI applications and services'}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <h3 className="text-lg font-semibold text-text mb-2">{isThai ? 'ลูกค้า' : 'Clients'}</h3>
                <p className="text-sm text-text-muted">
                  {isThai ? 'โครงการที่สำเร็จ' : 'Successful projects'}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <h3 className="text-lg font-semibold text-text mb-2">{isThai ? 'Uptime' : 'Uptime'}</h3>
                <p className="text-sm text-text-muted">
                  {isThai ? 'ความพร้อมใช้งาน' : 'System availability'}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <h3 className="text-lg font-semibold text-text mb-2">{isThai ? 'การสนับสนุน' : 'Support'}</h3>
                <p className="text-sm text-text-muted">
                  {isThai ? 'การสนับสนุนตลอด 24 ชั่วโมง' : 'Round-the-clock support'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {isThai ? 'ลูกค้าพูดถึงเราอย่างไร' : 'What Our Clients Say'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {isThai
                ? 'ความคิดเห็นจริงจากองค์กรที่เราเป็นพันธมิตรในการส่งมอบโซลูชัน AI ที่สร้างผลลัพธ์ที่วัดได้'
                : 'Real feedback from organizations we\'ve partnered with to deliver AI solutions that drive measurable results.'
              }
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-muted mb-6 italic">
                  {isThai
                    ? '"Phitiai เปลี่ยนวิธีการจัดการพิธีกรรมไทยของเรา การวางแผนและจับคู่ผู้ให้บริการด้วย AI ลดเวลาวางแผนงานลง 40% และเพิ่มความพึงพอใจของลูกค้าอย่างมาก"'
                    : '"The Phitiai platform transformed how we manage Thai ceremonies. The AI-powered planning and vendor matching reduced our event planning time by 40% while improving client satisfaction significantly."'
                  }
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">SR</span>
                  </div>
                  <div>
                    <p className="text-text font-semibold">{isThai ? 'สมชัย รัตนา' : 'Somchai Rattana'}</p>
                    <p className="text-sm text-text-muted">{isThai ? 'CEO, Thai Events Co.' : 'CEO, Thai Events Co.'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-muted mb-6 italic">
                  {isThai
                    ? '"CerebraForge ปฏิวัติระบบจัดการความรู้ของเรา ระบบ RAG+LLM ช่วยทีมหาข้อมูลสำคัญได้เร็วขึ้น 70% และความแม่นยำของการค้นหา AI น่าทึงใจที่ 90%"'
                    : '"CerebraForge revolutionized our knowledge management. The RAG+LLM system helped our team find critical information 70% faster, and AI search accuracy is remarkable at 90%."'
                  }
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">PK</span>
                  </div>
                  <div>
                    <p className="text-text font-semibold">{isThai ? 'ปรีชา โกมลพิส' : 'Preecha Komolpis'}</p>
                    <p className="text-sm text-text-muted">{isThai ? 'CTO, Enterprise Solutions Ltd.' : 'CTO, Enterprise Solutions Ltd.'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-muted mb-6 italic">
                  {isThai
                    ? '"โซลูชัน Edge AI เกินคาดหวัง การลดเวลาแฝง 90% และความสามารถใช้งานแบบออฟไลน์ทำให้เราได้ประสิทธิภาพและความเป็นส่วนตัวที่เราต้องการ"'
                    : '"The edge AI computer solution exceeded our expectations. 90% latency reduction and complete offline capability gave us the performance and privacy we needed for our operations."'
                  }
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">NW</span>
                  </div>
                  <div>
                    <p className="text-text font-semibold">{isThai ? 'นิรัน วงภักดี' : 'Niran Wongpakdi'}</p>
                    <p className="text-sm text-text-muted">{isThai ? 'ผู้อำนวยการ, Smart Factory Inc.' : 'Operations Director, Smart Factory Inc.'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {t('values.title')}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {t('values.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="border border-hairline bg-surface/80">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              {isThai ? 'ทีมผู้เชี่ยวชาญ' : 'Our Team'}
            </div>
            <h2 className="text-3xl font-bold text-text mb-4">
              {t('team.title')}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {t('team.subtitle')}
            </p>
          </div>
 
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center ring-4 ring-primary/10">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-3 font-semibold">
                    {member.role}
                  </p>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {member.bio}
                  </p>
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
            {t('cta.title')}
          </h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={`${basePath}/contact` as any}>
                {isThai ? 'เริ่มโปรเจกต์ AI' : 'Start AI Project'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`${basePath}/contact?type=consultation` as any}>
                {isThai ? 'ปรึกษาฟรี' : 'Free Consultation'}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
