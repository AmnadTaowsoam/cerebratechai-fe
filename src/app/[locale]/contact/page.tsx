import type { Metadata } from 'next';
import { Clock, Mail, MapPin, Phone, Shield, Lock, CheckCircle2, Zap } from 'lucide-react';

import { AnimatedGradientText, MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { ContactForm } from '@/components/landing/contact-form';
import { SeoHead, ServiceSchema } from '@/components/seo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { contactFAQs, contactSocialProof } from '@/data/contact';

export const metadata: Metadata = {
  title: 'CerebraTechAI - Contact',
  description: 'Book a working session with CerebraTechAI to discuss AI, data, and software delivery.',
};

type ContactPageProps = {
  params: { locale: string };
};

export default function ContactPage({ params }: ContactPageProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';

  const faqs = isThai ? contactFAQs.th : contactFAQs.en;
  const stats = contactSocialProof.stats;
  const trustBadges = contactSocialProof.trustBadges;

  return (
    <>
      <SeoHead
        title={isThai ? 'ติดต่อเรา - AI Consulting Bangkok' : 'Contact Us - AI Consulting Bangkok'}
        description={
          isThai
            ? 'ติดต่อทีมที่ปรึกษา AI ในกรุงเทพฯ เพื่อพูดคุยโครงการ AI และ Machine Learning ของคุณ'
            : 'Contact our AI consulting team in Bangkok to discuss your AI and Machine Learning projects.'
        }
        keywords={
          isThai
            ? ['ติดต่อที่ปรึกษา AI', 'AI consulting Bangkok', 'ปรึกษา AI', 'Machine Learning Thailand']
            : ['Contact AI', 'AI consulting Bangkok', 'AI consultation', 'Machine Learning Thailand']
        }
        url="/contact"
        type="website"
      />
      <ServiceSchema
        serviceName={isThai ? 'ที่ปรึกษา AI' : 'AI Consulting'}
        description={
          isThai ? 'บริการให้คำปรึกษาและพัฒนา AI สำหรับธุรกิจ' : 'AI consulting and development services for businesses'
        }
      />
      <div className="bg-bg">
        {/* Hero Section */}
        <MagicHero
          eyebrow={isThai ? 'ติดต่อเรา' : 'Contact us'}
          title={
            isThai ? 'พร้อมเริ่มโปรเจกต์ AI ของคุณ?' : "Ready to Start Your AI Project?"
          }
          description={
            isThai
              ? 'แชร์โจทย์หรือความท้าทายของคุณกับเรา เราจะช่วยออกแบบและพัฒนาโซลูชัน AI ที่เหมาะกับธุรกิจของคุณ ตอบกลับภายใน 24 ชั่วโมงพร้อมแผนเบื้องต้น'
              : 'Share your challenge or requirements with us. We\'ll help design and develop an AI solution tailored to your business. Response within 24 hours with an initial plan.'
          }
          actions={
            <ShimmerButton asChild className="px-8 py-4 text-sm">
              <a href="mailto:hello@cerebratechai.com" className="inline-flex items-center gap-2">
                {isThai ? 'ส่งอีเมลถึงทีม' : 'Email the team'}
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

        {/* Social Proof Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(99,102,241,0.08),_transparent_60%)]" />

          <div className="relative z-10 container mx-auto px-6">
            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/50 p-6 backdrop-blur transition-all duration-300 hover:border-primary/40 hover:shadow-[0_16px_48px_rgba(8,23,45,0.4)] hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm text-text-muted/80">
                      {isThai ? stat.labelTh : stat.labelEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon === 'shield'
                  ? Shield
                  : badge.icon === 'lock'
                    ? Lock
                    : badge.icon === 'check-circle'
                      ? CheckCircle2
                      : Clock;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-surface/50 backdrop-blur transition-all duration-300 hover:border-primary/30 hover:bg-surface/70"
                  >
                    <Icon className="h-5 w-5 text-primary/80" />
                    <span className="text-sm font-medium text-text/90">
                      {isThai ? badge.labelTh : badge.labelEn}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.05),_transparent_70%)]" />

          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <AnimatedGradientText className="justify-center px-3 py-2 text-[0.6rem] uppercase tracking-[0.35em] text-white/70 mb-4">
                  FAQ
                </AnimatedGradientText>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  {isThai ? 'คำถามที่พบบ่อย' : 'Frequently Asked Questions'}
                </h2>
                <p className="text-text-muted/80">
                  {isThai ? 'หากมีคำถามอื่น ๆ สามารถติดต่อเราได้เสมอ' : 'If you have any other questions, feel free to reach out'}
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="rounded-xl border border-white/10 bg-surface/50 backdrop-blur overflow-hidden">
                    <AccordionTrigger className="px-6 hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 text-text-muted/80 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="relative pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(99,102,241,0.12),_transparent_60%)]" />
          <div className="absolute inset-0 opacity-25">
            <Particles quantity={40} staticity={20} ease={65} />
          </div>

          <div className="relative z-10 container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                {isThai ? 'ช่องทางติดต่อ' : 'Contact Channels'}
              </h2>
              <p className="text-text-muted/80 max-w-2xl mx-auto">
                {isThai ? 'เลือกช่องทางที่สะดวกที่สุด ทีมของเราพร้อมช่วยเหลือเสมอ' : "Choose the channel that works best for you. We're here to help."}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Mail,
                  title: 'hello@cerebratechai.com',
                  description: isThai ? 'กล่องจดหมายหลักสำหรับสอบถามโปรเจกต์' : 'Primary inbox for project enquiries',
                  gradient: 'from-blue-500/20 to-cyan-500/20',
                },
                {
                  icon: Phone,
                  title: '085-662-1113',
                  description: isThai ? 'สายด่วนสำหรับลูกค้าองค์กร' : 'Hotline for enterprise clients',
                  gradient: 'from-green-500/20 to-emerald-500/20',
                },
                {
                  icon: MapPin,
                  title: 'Bangkok / Hybrid',
                  description: isThai ? 'รองรับทั้ง onsite และ remote' : 'On-site and remote friendly',
                  gradient: 'from-purple-500/20 to-indigo-500/20',
                },
                {
                  icon: Clock,
                  title: '08:00-18:00 ICT',
                  description: isThai ? 'ตอบกลับภายใน 1 วันทำการ' : 'Response within one business day',
                  gradient: 'from-orange-500/20 to-red-500/20',
                },
              ].map((channel) => (
                <div
                  key={channel.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface/70 p-6 backdrop-blur transition-all duration-300 hover:border-primary/40 hover:shadow-[0_24px_64px_rgba(8,23,45,0.45)] hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${channel.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                  <div className="relative">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                      <channel.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <p className="text-base font-semibold text-text mb-2">{channel.title}</p>
                    <p className="text-sm text-text-muted/80">{channel.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.15),_transparent_70%)]" />

          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center rounded-3xl border border-white/10 bg-surface/60 backdrop-blur-xl p-12 shadow-[0_32px_80px_rgba(8,23,45,0.5)]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {isThai ? 'พร้อมเริ่มต้นหรือยัง?' : 'Ready to start?'}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                {isThai ? 'เริ่มโปรเจกต์ AI ของคุณวันนี้' : 'Start Your AI Project Today'}
              </h2>
              <p className="text-text-muted/80 mb-8 max-w-2xl mx-auto">
                {isThai
                  ? 'ปรึกษาฟรีกับทีมผู้เชี่ยวชาญ AI ของเรา เราจะช่วยวิเคราะห์โจทย์ ออกแบบโซลูชัน และประเมินงบประมาณให้คุณ'
                  : 'Get a free consultation with our AI expert team. We\'ll help analyze your challenge, design a solution, and provide budget estimates.'}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ShimmerButton asChild className="px-8 py-4">
                  <a href="mailto:hello@cerebratechai.com" className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {isThai ? 'ส่งอีเมล' : 'Email Us'}
                  </a>
                </ShimmerButton>
                <a
                  href="tel:+66856621113"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-surface/50 hover:bg-surface/70 hover:border-primary/40 transition-all duration-300"
                >
                  <Phone className="h-4 w-4" />
                  {isThai ? 'โทรหาเรา' : 'Call Us'}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
