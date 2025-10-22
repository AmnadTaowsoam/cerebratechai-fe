import type { Metadata } from 'next';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

import { AnimatedGradientText, MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { ContactForm } from '@/components/landing/contact-form';
import { SeoHead, ServiceSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Cerebratechai - Contact',
  description: 'Book a working session with Cerebratechai to discuss AI, data, and software delivery.',
};

type ContactPageProps = {
  params: { locale: string };
};

export default function ContactPage({ params }: ContactPageProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';
  const basePath = `/${locale}`;

  return (
    <>
      <SeoHead
        title={isThai ? 'ติดต่อเรา - AI Consulting Bangkok' : 'Contact Us - AI Consulting Bangkok'}
        description={isThai 
          ? 'ติดต่อทีม AI consulting ของเราในกรุงเทพฯ เพื่อปรึกษาเกี่ยวกับโครงการ AI และ Machine Learning ของคุณ'
          : 'Contact our AI consulting team in Bangkok to discuss your AI and Machine Learning projects.'
        }
        keywords={isThai 
          ? ['ติดต่อ AI', 'AI consulting Bangkok', 'ปรึกษา AI', 'Machine Learning Thailand']
          : ['Contact AI', 'AI consulting Bangkok', 'AI consultation', 'Machine Learning Thailand']
        }
        url="/contact"
        type="website"
      />
      <ServiceSchema 
        serviceName={isThai ? 'การปรึกษา AI' : 'AI Consulting'}
        description={isThai 
          ? 'บริการปรึกษาและพัฒนาโซลูชัน AI สำหรับธุรกิจ'
          : 'AI consulting and development services for businesses'
        }
      />
    <div className="bg-bg">
      <MagicHero
        eyebrow={isThai ? 'Contact us' : 'Contact us'}
        title={
          isThai
            ? 'Let us help translate your problem into a production ready system'
            : "Let's map your next production ready capability"
        }
        description={
          isThai
            ? 'แชร์รายละเอียดเบื้องต้นหรือเลือกช่องทางที่สะดวก เราตอบกลับภายใน 24 ชั่วโมงพร้อมแผนคร่าว ๆ'
            : 'Share a few details or pick a channel below. We respond within 24 hours with next steps and a draft plan.'
        }
        actions={
          <ShimmerButton asChild className="px-8 py-4 text-sm">
            <a href="mailto:hello@cerebratechai.com" className="inline-flex items-center gap-2">
              {isThai ? 'อีเมลหาเรา' : 'Email the team'}
              <Mail className="h-4 w-4" />
            </a>
          </ShimmerButton>
        }
      >
        <div className="space-y-5">
          <AnimatedGradientText className="justify-center px-3 py-2 text-[0.6rem] uppercase tracking-[0.35em] text-white/80">
            SLA 24 HOURS
          </AnimatedGradientText>
          <ContactForm />
        </div>
      </MagicHero>

      <section className="relative pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(99,102,241,0.12),_transparent_60%)]" />
        <div className="absolute inset-0 opacity-25">
          <Particles quantity={40} staticity={20} ease={65} />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Mail,
                title: 'hello@cerebratechai.com',
                description: isThai
                  ? 'กล่องจดหมายหลักสำหรับงานโครงการ'
                  : 'Primary inbox for project enquiries',
              },
              {
                icon: Phone,
                title: '085-662-1113',
                description: isThai
                  ? 'Hotline สำหรับลูกค้าองค์กร'
                  : 'Hotline for enterprise clients',
              },
              {
                icon: MapPin,
                title: 'Bangkok / Hybrid',
                description: isThai ? 'พร้อมทำงานบนไซต์หรือรีโมต' : 'On-site and remote friendly',
              },
              {
                icon: Clock,
                title: '08:00-18:00 ICT',
                description: isThai ? 'ตอบกลับภายในวันทำการ' : 'Response within one business day',
              },
            ].map((channel) => (
              <div
                key={channel.title}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/70 p-6 backdrop-blur transition hover:border-primary/40 hover:shadow-[0_24px_64px_rgba(8,23,45,0.45)]"
              >
                <channel.icon className="mb-4 h-6 w-6 text-primary" />
                <p className="text-base font-semibold text-text">{channel.title}</p>
                <p className="mt-2 text-sm text-text-muted">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
