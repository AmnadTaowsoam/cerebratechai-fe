import { Metadata } from 'next';
import Link from 'next/link';
import {
  Brain,
  Shield,
  Zap,
  Server,
  Lock,
  MessageSquare,
  FileText,
  Terminal,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { ContactForm } from '@/components/landing/contact-form';
import { SECTION_SPACING } from '@/lib/constants/spacing';
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
      ? 'CerebraLoLM - Private Local LLM Inference Engine'
      : 'CerebraLoLM - Private Local LLM Inference Engine',
    description: isThai
      ? 'รัน LLM โมเดลภาษาขนาดใหญ่บนโครงสร้างพื้นฐานของคุณเอง ปลอดภัย รวดเร็ว ไม่ต้องส่งข้อมูลออกภายนอก'
      : 'Run Large Language Models on your own infrastructure. Secure, fast, and private local inference.',
  };
}

export default async function CerebraLoLMPage({
  params,
}: {
  params: { locale: string };
}) {
  const isThai = params.locale.startsWith('th');
  const locale = params.locale;

  const content = {
    title: 'CerebraLoLM',
    subtitle: isThai
      ? 'Private Local LLM Inference Engine'
      : 'Private Local LLM Inference Engine',
    usp: isThai ? 'AI ที่ปลอดภัย ข้อมูลไม่รั่วไหล' : 'Secure AI. Zero Data Leakage.',
    description: isThai
      ? 'ใช้งาน Large Language Models (LLM) ระดับโลกอย่าง Llama 3 หรือ Mistral บน Server ของคุณเอง รักษาความลับของข้อมูลองค์กรสูงสุด พร้อมประสิทธิภาพระดับ Enterprise'
      : 'Deploy world-class Large Language Models (LLM) like Llama 3 or Mistral on your own servers. Maximum enterprise data privacy with high-performance inference.',
    cta: isThai ? 'ปรึกษาผู้เชี่ยวชาญ' : 'Talk to Expert',
  };

  const features = [
    {
      icon: Lock,
      title: isThai ? '100% Data Privacy' : '100% Data Privacy',
      description: isThai
        ? 'ข้อมูลทั้งหมดประมวลผลภายในองค์กร ไม่มีการส่งออกไปยัง Cloud ภายนอก'
        : 'All data is processed on-premise. No data ever leaves your infrastructure.',
    },
    {
      icon: Zap,
      title: isThai ? 'Low Latency' : 'Low Latency',
      description: isThai
        ? 'ตอบสนองรวดเร็วเนื่องจากไม่ต้องรอ Network Latency จาก API ภายนอก'
        : 'Lightning fast responses with no external API network latency.',
    },
    {
      icon: Server,
      title: isThai ? 'Hardware Optimized' : 'Hardware Optimized',
      description: isThai
        ? 'ปรับแต่งให้รันบน GPU ของคุณได้อย่างเต็มประสิทธิภาพ'
        : 'Optimized to run efficiently on your existing GPU infrastructure.',
    },
    {
      icon: Brain,
      title: isThai ? 'Model Agnostic' : 'Model Agnostic',
      description: isThai
        ? 'รองรับโมเดล Open Source ชั้นนำหลากหลาย (Llama, Mistral, Qwen)'
        : 'Support for various leading Open Source models (Llama, Mistral, Qwen).',
    },
  ];

  const useCases = [
    {
      title: isThai ? 'Sensitive Document Analysis' : 'Sensitive Document Analysis',
      description: isThai
        ? 'วิเคราะห์สัญญา กฎหมาย และเอกสารลับโดยไม่ต้องกังวลเรื่องข้อมูลรั่วไหล'
        : 'Analyze contracts, legal docs, and confidential files without privacy concerns.',
      icon: FileText,
    },
    {
      title: isThai ? 'Internal Knowledge Assistant' : 'Internal Knowledge Assistant',
      description: isThai
        ? 'Chatbot สำหรับพนักงานที่ตอบคำถามจากฐานข้อมูลภายในองค์กร'
        : 'Employee chatbot that answers questions from your internal knowledge base.',
      icon: MessageSquare,
    },
    {
      title: isThai ? 'Code Generation Assistant' : 'Code Generation Assistant',
      description: isThai
        ? 'ผู้ช่วยเขียนโค้ดสำหรับทีม Dev ที่รักษาความลับของ Source Code'
        : 'Coding assistant for dev teams that keeps your source code secure.',
      icon: Terminal,
    },
  ];

  return (
    <>
      <SeoHead
        title={`${content.title} - ${content.subtitle}`}
        description={content.description}
        keywords={['Local LLM', 'Private AI', 'On-premise AI', 'Llama 3', 'Enterprise AI']}
        url="/products/cerebralolm"
        type="website"
      />
      <OrganizationJsonLd />

      <div className="min-h-screen bg-bg text-text">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-bg to-bg" />
           <div className="absolute inset-0 z-0">
            <Particles quantity={60} staticity={20} ease={50} color="#60A5FA" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in-up">
              <Shield className="w-4 h-4" />
              <span>{isThai ? 'โซลูชัน AI เพื่อความเป็นส่วนตัว' : 'Private-First AI Solution'}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up [animation-delay:100ms]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
                {content.title}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-muted mb-8 max-w-3xl mx-auto animate-fade-in-up [animation-delay:200ms]">
              {content.subtitle}
            </p>

             <div className="inline-block mb-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 backdrop-blur-sm animate-fade-in-up [animation-delay:300ms]">
                <span className="text-2xl md:text-3xl font-bold text-blue-100">{content.usp}</span>
             </div>

            <p className="text-lg text-text-muted/80 max-w-2xl mx-auto mb-12 animate-fade-in-up [animation-delay:400ms]">
              {content.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:500ms]">
               <ShimmerButton className="shadow-2xl shadow-blue-500/20">
                  <Link href="#contact" className="flex items-center gap-2 px-6 py-1">
                    <span>{content.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
               </ShimmerButton>
              <Link
                href="#features"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors font-medium backdrop-blur-sm"
              >
                {isThai ? 'ดูคุณสมบัติ' : 'View Features'}
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
                {isThai ? 'ทำไมต้อง CerebraLoLM?' : 'Why CerebraLoLM?'}
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="group p-8 rounded-3xl border border-white/5 bg-bg hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-100">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full" />
           <div className="container relative z-10 mx-auto px-4">
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
               {isThai ? 'กรณีการใช้งานจริง' : 'Real-World Use Cases'}
             </h2>
             
             <div className="grid md:grid-cols-3 gap-8">
               {useCases.map((useCase, idx) => (
                 <div key={idx} className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent">
                   <div className="h-full bg-surface rounded-[22px] p-8 backdrop-blur-xl">
                      <div className="mb-6 inline-flex p-3 rounded-xl bg-indigo-500/20 text-indigo-400">
                        <useCase.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
                      <p className="text-text-muted">{useCase.description}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* Specs Table (Simple) */}
         <section className="py-24 bg-surface/30 border-y border-white/5">
            <div className="container mx-auto px-4 max-w-4xl">
               <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
               <div className="rounded-2xl border border-white/10 overflow-hidden">
                  <div className="grid grid-cols-2 p-6 bg-white/5 border-b border-white/10">
                     <div className="font-semibold text-text-muted">Supported Models</div>
                     <div className="font-medium">Llama 3 (8B, 70B), Mistral, Mixtral, Qwen 2.5</div>
                  </div>
                  <div className="grid grid-cols-2 p-6 border-b border-white/10">
                     <div className="font-semibold text-text-muted">Integration Interface</div>
                     <div className="font-medium">OpenAI-Compatible API, REST, gRPC</div>
                  </div>
                  <div className="grid grid-cols-2 p-6 bg-white/5 border-b border-white/10">
                     <div className="font-semibold text-text-muted">Hardware Requirements</div>
                     <div className="font-medium">NVIDIA GPU (Consumer or Enterprise), Apple Silicon</div>
                  </div>
                  <div className="grid grid-cols-2 p-6">
                     <div className="font-semibold text-text-muted">Deployment</div>
                     <div className="font-medium">Docker Container, Kubernetes Helm Chart</div>
                  </div>
               </div>
            </div>
         </section>


        {/* Contact/CTA */}
        <section id="contact" className="py-24 relative">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isThai ? 'เริ่มต้นใช้งาน CerebraLoLM' : 'Get Started with CerebraLoLM'}
              </h2>
              <p className="text-text-muted">
                {isThai
                  ? 'ปรึกษาทีมงานเพื่อประเมิน Hardware และเลือกโมเดลที่เหมาะสมกับองค์กรของคุณ'
                  : 'Consult with our team to assess hardware and select the right model for your organization.'}
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
