import { Metadata } from 'next';
import Link from 'next/link';
import {
  Eye,
  Scan,
  Camera,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { ContactForm } from '@/components/landing/contact-form';
import { SeoHead, OrganizationJsonLd } from '@/components/seo';
import { Particles, ShimmerButton } from '@/components/magicui';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isThai = params.locale.startsWith('th');
  return {
    title: isThai
      ? 'CerebraCV - Advanced Computer Vision Suite'
      : 'CerebraCV - Advanced Computer Vision Suite',
    description: isThai
      ? 'เปลี่ยนกล้องวงจรปิดเดิมให้เป็นเซ็นเซอร์อัจฉริยะ ตรวจจับความปลอดภัย นับจำนวน และวิเคราะห์พฤติกรรมได้ทันที'
      : 'Transform existing CCTV cameras into intelligent sensors. Detect safety hazards, count objects, and analyze behavior in real-time.',
  };
}

export default async function CerebraCVPage({
  params,
}: {
  params: { locale: string };
}) {
  const isThai = params.locale.startsWith('th');
  const locale = params.locale;

  const content = {
    title: 'CerebraCV',
    subtitle: isThai
      ? 'Advanced Computer Vision Suite'
      : 'Advanced Computer Vision Suite',
    usp: isThai ? 'เปลี่ยนทุกกล้องให้ฉลาดขึ้น 10 เท่า' : 'Make Every Camera Smart',
    description: isThai
      ? 'โซลูชัน Computer Vision ครบวงจรสำหรับความปลอดภัย (Safety), การรักษาความปลอดภัย (Security), และการวิเคราะห์การดำเนินงาน (Operations) รองรับทั้ง Edge และ Cloud'
      : 'Comprehensive Computer Vision solution for Safety, Security, and Operations. Deploy seamlessly on Edge or Cloud infrastructure.',
    cta: isThai ? 'ขอใบเสนอราคา' : 'Request Quote',
  };

  const features = [
    {
      icon: Scan,
      title: isThai ? 'High Accuracy' : 'High Accuracy',
      description: isThai
        ? 'โมเดล AI ที่ผ่านการเทรนด้วยข้อมูลจริงกว่า 10 ล้านภาพ แม่นยำแม้ในสภาพแสงน้อย'
        : 'AI models trained on 10M+ real-world images. High accuracy even in low-light conditions.',
    },
    {
      icon: Zap,
      title: isThai ? 'Real-time Edge Processing' : 'Real-time Edge Processing',
      description: isThai
        ? 'ประมวลผลที่กล้องหรือ Edge Server ทันที ไม่หน่วง ไม่เปลือง Bandwidth'
        : 'Process data directly at the camera or Edge Server. Zero latency, minimal bandwidth usage.',
    },
    {
      icon: Camera,
      title: isThai ? 'Compatible with Any IP Camera' : 'Compatible with Any IP Camera',
      description: isThai
        ? 'ไม่ต้องซื้อกล้องใหม่ รองรับ RTSP/ONVIF มาตรฐานทุกยี่ห้อ'
        : 'No new hardware needed. Works with any standard RTSP/ONVIF IP Camera.',
    },
    {
      icon: ShieldCheck,
      title: isThai ? 'Safety Compliance' : 'Safety Compliance',
      description: isThai
        ? 'ตรวจจับ PPE, หมวกนิรภัย, เสื้อสะท้อนแสง เพื่อความปลอดภัยในโรงงาน'
        : 'Detect PPE, helmets, and vests automatically for factory safety compliance.',
    },
  ];

  const useCases = [
    {
      title: isThai ? 'PPE Detection' : 'PPE Detection',
      description: isThai
        ? 'แจ้งเตือนเมื่อพนักงานไม่สวมใส่อุปกรณ์ป้องกันภัยส่วนบุคคล'
        : 'Alert when employees are not wearing required Personal Protective Equipment.',
      icon: ShieldCheck,
    },
    {
      title: isThai ? 'Intrusion Detection' : 'Intrusion Detection',
      description: isThai
        ? 'ตรวจจับผู้บุกรุกในพื้นที่หวงห้าม กำหนดโซนได้เอง Virtual Fence'
        : 'Detect intruders in restricted areas with customizable Virtual Fences.',
      icon: AlertTriangle,
    },
    {
      title: isThai ? 'People/Vehicle Counting' : 'People/Vehicle Counting',
      description: isThai
        ? 'นับจำนวนคนและรถยนต์เพื่อวิเคราะห์ Traffic และความหนาแน่น'
        : 'Count people and vehicles to analyze traffic flow and density.',
      icon: Eye,
    },
  ];

  return (
    <>
      <SeoHead
        title={`${content.title} - ${content.subtitle}`}
        description={content.description}
        keywords={['Computer Vision', 'AI Camera', 'Safety AI', 'CCTV AI', 'Video Analytics']}
        url="/products/cerebracv"
        type="website"
      />
      <OrganizationJsonLd />

      <div className="min-h-screen bg-bg text-text">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-900/30 via-bg to-bg" />
           <div className="absolute inset-0 z-0">
            <Particles quantity={60} staticity={20} ease={50} color="#10B981" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 animate-fade-in-up">
              <Eye className="w-4 h-4" />
              <span>{isThai ? 'ตาอัจฉริยะสำหรับธุรกิจ' : 'Intelligent Eyes for Business'}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up [animation-delay:100ms]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                {content.title}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-muted mb-8 max-w-3xl mx-auto animate-fade-in-up [animation-delay:200ms]">
              {content.subtitle}
            </p>

             <div className="inline-block mb-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 backdrop-blur-sm animate-fade-in-up [animation-delay:300ms]">
                <span className="text-2xl md:text-3xl font-bold text-emerald-100">{content.usp}</span>
             </div>

            <p className="text-lg text-text-muted/80 max-w-2xl mx-auto mb-12 animate-fade-in-up [animation-delay:400ms]">
              {content.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:500ms]">
               <ShimmerButton className="shadow-2xl shadow-emerald-500/20" background='radial-gradient(ellipse at center, #10B981 0%, #059669 100%)'>
                  <Link href="#contact" className="flex items-center gap-2 px-6 py-1">
                    <span>{content.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
               </ShimmerButton>
              <Link
                href="#features"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors font-medium backdrop-blur-sm"
              >
                {isThai ? 'ดูฟีเจอร์' : 'Explore Features'}
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 bg-surface/50 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
          <div className="container relative z-10 mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                {isThai ? 'ความสามารถหลัก' : 'Core Capabilities'}
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="group p-8 rounded-3xl border border-white/5 bg-bg hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-emerald-100">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/10 blur-[120px] rounded-full" />
           <div className="container relative z-10 mx-auto px-4">
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
               {isThai ? 'ประยุกต์ใช้ได้หลากหลาย' : 'Versatile Applications'}
             </h2>
             
             <div className="grid md:grid-cols-3 gap-8">
               {useCases.map((useCase, idx) => (
                 <div key={idx} className="relative group overflow-hidden rounded-3xl border border-white/10 bg-surface/50 p-8 backdrop-blur-sm transition-all hover:border-emerald-500/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="mb-6 inline-flex p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
                        <useCase.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-300 transition-colors">{useCase.title}</h3>
                      <p className="text-text-muted">{useCase.description}</p>
                    </div>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* Specs Overlay */}
         <section className="py-24 bg-surface/30 border-y border-white/5">
            <div className="container mx-auto px-4 max-w-5xl">
               <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                     <h2 className="text-3xl font-bold mb-6">Built for Any Architecture</h2>
                     <p className="text-text-muted mb-8 text-lg">
                        {isThai 
                           ? 'ไม่ว่าจะเป็นโรงงานที่มีข้อจำกัดด้าน Network หรือสำนักงานที่ต้องการ Centralized Dashboard, CerebraCV ปรับเปลี่ยนได้ตามโครงสร้างของคุณ'
                           : 'Whether it is a factory with network constraints or an office needing a centralized dashboard, CerebraCV adapts to your infrastructure.'}
                     </p>
                     <ul className="space-y-4">
                        {[
                           'Edge Deployment (Jetson, Raspberry Pi, Industrial PC)',
                           'On-Premise Server (GPU Clusters)',
                           'Private Cloud / Public Cloud',
                           'Hybrid Architecture'
                        ].map((item, i) => (
                           <li key={i} className="flex items-center gap-3">
                              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                              <span className="font-medium">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="relative aspect-square md:aspect-video rounded-2xl bg-gradient-to-br from-emerald-900/50 to-bg border border-emerald-500/20 flex items-center justify-center p-8">
                      {/* Abstract visualization of Camera -> Edge -> Cloud */}
                      <div className="text-center">
                         <div className="inline-flex gap-8 mb-8">
                            <div className="flex flex-col items-center">
                               <Camera className="w-12 h-12 text-emerald-400 mb-2" />
                               <span className="text-xs text-emerald-500/70">Camera</span>
                            </div>
                            <div className="flex items-center text-emerald-500/30">➜</div>
                            <div className="flex flex-col items-center">
                               <Zap className="w-12 h-12 text-yellow-400 mb-2" />
                               <span className="text-xs text-yellow-500/70">Edge AI</span>
                            </div>
                             <div className="flex items-center text-emerald-500/30">➜</div>
                            <div className="flex flex-col items-center">
                               <ShieldCheck className="w-12 h-12 text-blue-400 mb-2" />
                               <span className="text-xs text-blue-500/70">Dashboard</span>
                            </div>
                         </div>
                         <div className="text-sm text-text-muted border-t border-white/10 pt-4">
                            Latency &lt; 100ms • 99.9% Accuracy
                         </div>
                      </div>
                  </div>
               </div>
            </div>
         </section>


        {/* Contact/CTA */}
        <section id="contact" className="py-24 relative">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isThai ? 'ติดต่อขอทดสอบระบบ' : 'Request PoC / Demo'}
              </h2>
              <p className="text-text-muted">
                {isThai
                  ? 'ท้าพิสูจน์ความแม่นยำกับวิดีโอตัวอย่างของคุณฟรี'
                  : 'Challenge us with your sample video footage for a free accuracy test.'}
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
