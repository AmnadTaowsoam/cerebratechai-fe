import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Layers,
  Brain,
  Shield,
  Database,
  FileText,
  Users,
  Search,
  Zap,
  Package,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import { ContactForm } from '@/components/landing/contact-form';
import { SECTION_SPACING } from '@/lib/constants/spacing';
import { SeoHead, OrganizationJsonLd } from '@/components/seo';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isThai = params.locale.startsWith('th');
  return {
    title: isThai
      ? 'CerebraForge - Enterprise RAG Platform | Document AI'
      : 'CerebraForge - Enterprise RAG Platform | Document AI',
    description: isThai
      ? 'Enterprise RAG Platform ที่เข้าใจเอกสารองค์กร สร้าง RAG Application ที่พร้อมใช้งานในไม่กี่สัปดาห์'
      : 'Enterprise RAG Platform that understands organizational documents. Build production-ready RAG applications in weeks.',
  };
}

export default async function CerebraForgePage({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'products.cerebraforge',
  });
  const isThai = params.locale.startsWith('th');
  const basePath = `/${params.locale}`;

  const heroContent = {
    en: {
      title: 'CerebraForge',
      subtitle: 'Enterprise RAG Platform',
      usp: 'Enterprise RAG That Understands Your Documents',
      description:
        'Build production-ready RAG applications in weeks, not months. Complete infrastructure for document intelligence and knowledge management.',
    },
    th: {
      title: 'CerebraForge',
      subtitle: 'Enterprise RAG Platform',
      usp: 'Enterprise RAG ที่เข้าใจเอกสารองค์กร',
      description:
        'สร้าง RAG Application ที่พร้อมใช้งานในไม่กี่สัปดาห์ ไม่ใช่หลายเดือน Infrastructure ครบชุดสำหรับ Document Intelligence และ Knowledge Management',
    },
  };

  const content = isThai ? heroContent.th : heroContent.en;

  const problemSolution = {
    en: {
      problem: {
        title: 'The Problem',
        points: [
          'Building RAG from scratch takes months of development',
          'Complex infrastructure setup (Vector DB, embeddings, LLM integration)',
          'Document parsing and chunking challenges',
          'Security and multi-tenant requirements are complex',
        ],
      },
      solution: {
        title: 'Our Solution',
        points: [
          'Complete RAG infrastructure ready to deploy',
          'Multi-model LLM support (OpenAI, Anthropic, Local)',
          'Enterprise security with RBAC and audit logs',
          'Multi-tenant architecture out of the box',
        ],
      },
    },
    th: {
      problem: {
        title: 'ปัญหา',
        points: [
          'การสร้าง RAG จากศูนย์ใช้เวลาหลายเดือน',
          'การตั้งค่า Infrastructure ซับซ้อน (Vector DB, Embeddings, LLM)',
          'ความท้าทายในการ Parse และ Chunk เอกสาร',
          'ความต้องการ Security และ Multi-tenant ซับซ้อน',
        ],
      },
      solution: {
        title: 'โซลูชันของเรา',
        points: [
          'RAG Infrastructure ครบชุดพร้อมใช้งาน',
          'รองรับหลาย LLM Models (OpenAI, Anthropic, Local)',
          'Enterprise Security พร้อม RBAC และ Audit Logs',
          'Multi-tenant Architecture พร้อมใช้งาน',
        ],
      },
    },
  };

  const psContent = isThai ? problemSolution.th : problemSolution.en;

  const features = [
    {
      icon: Layers,
      title: isThai ? 'RAG Infrastructure' : 'RAG Infrastructure',
      description: isThai
        ? 'Infrastructure สำหรับ RAG ที่พร้อมใช้งาน'
        : 'Complete RAG infrastructure ready to deploy',
    },
    {
      icon: Brain,
      title: isThai ? 'Multi-Model Support' : 'Multi-Model Support',
      description: isThai
        ? 'รองรับหลาย LLM Models ในแพลตฟอร์มเดียว'
        : 'Support multiple LLM models in one platform',
    },
    {
      icon: Shield,
      title: isThai ? 'Enterprise Security' : 'Enterprise Security',
      description: isThai
        ? 'Security ระดับองค์กร พร้อม RBAC และ Audit Log'
        : 'Enterprise-grade security with RBAC and audit logs',
    },
    {
      icon: Database,
      title: isThai ? 'Vector Database' : 'Vector Database',
      description: isThai
        ? 'Vector Database สำหรับ Semantic Search'
        : 'Vector database for semantic search',
    },
    {
      icon: Users,
      title: isThai ? 'Multi-Tenant' : 'Multi-Tenant',
      description: isThai
        ? 'Multi-tenant Architecture พร้อมใช้งาน'
        : 'Multi-tenant architecture out of the box',
    },
    {
      icon: Search,
      title: isThai ? 'Semantic Search' : 'Semantic Search',
      description: isThai
        ? 'Semantic Search ที่แม่นยำและรวดเร็ว'
        : 'Accurate and fast semantic search',
    },
  ];

  const useCases = [
    {
      title: isThai ? 'Document Intelligence' : 'Document Intelligence',
      description: isThai
        ? 'ทำความเข้าใจและค้นหาข้อมูลจากเอกสารองค์กร'
        : 'Understand and search information from organizational documents',
      icon: FileText,
    },
    {
      title: isThai ? 'Knowledge Management' : 'Knowledge Management',
      description: isThai
        ? 'จัดการและเข้าถึงความรู้ขององค์กรได้อย่างมีประสิทธิภาพ'
        : 'Efficiently manage and access organizational knowledge',
      icon: Brain,
    },
    {
      title: isThai ? 'Customer Support' : 'Customer Support',
      description: isThai
        ? 'AI Assistant ที่เข้าใจเอกสารและตอบคำถามลูกค้าได้'
        : 'AI assistant that understands documents and answers customer questions',
      icon: Users,
    },
  ];

  const technicalSpecs = [
    {
      category: isThai ? 'LLM Models' : 'LLM Models',
      items: ['OpenAI GPT-4', 'Anthropic Claude', 'Local LLMs (Ollama, vLLM)'],
    },
    {
      category: isThai ? 'Vector Database' : 'Vector Database',
      items: ['Pinecone', 'Weaviate', 'Qdrant', 'Self-hosted'],
    },
    {
      category: isThai ? 'Document Processing' : 'Document Processing',
      items: ['PDF', 'Word', 'Excel', 'Markdown', 'HTML'],
    },
    {
      category: isThai ? 'Deployment' : 'Deployment',
      items: ['Cloud (AWS, GCP, Azure)', 'On-premise', 'Hybrid'],
    },
    {
      category: isThai ? 'Security' : 'Security',
      items: ['RBAC', 'Audit Logs', 'Data Encryption', 'SOC2 Ready'],
    },
    {
      category: isThai ? 'API' : 'API',
      items: ['REST API', 'GraphQL', 'WebSocket', 'SDK (Python, JS)'],
    },
  ];

  return (
    <>
      <SeoHead
        title={`${content.title} - ${content.subtitle}`}
        description={content.description}
        keywords={
          isThai
            ? [
                'RAG',
                'Enterprise RAG',
                'Document AI',
                'Knowledge Management',
                'CerebraForge',
              ]
            : [
                'RAG',
                'Enterprise RAG',
                'Document AI',
                'Knowledge Management',
                'CerebraForge',
              ]
        }
        url="/products/cerebraforge"
        type="website"
      />
      <OrganizationJsonLd />

      <div className="min-h-screen bg-bg">
        {/* Hero Section */}
        <section
          className={`${SECTION_SPACING.HERO} relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                ⭐ {isThai ? 'โซลูชันแนะนำ' : 'Featured Solution'}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {content.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-text-muted mb-4">
                {content.subtitle}
              </p>
              <div className="inline-block mb-8 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-2xl font-bold">
                {content.usp}
              </div>
              <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
                {content.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#demo" className="btn-primary">
                  {isThai ? 'ขอ Demo' : 'Request Demo'}
                </Link>
                <Link href="#features" className="btn-secondary">
                  {isThai ? 'ดูคุณสมบัติ' : 'View Features'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className={`${SECTION_SPACING.FEATURES} bg-surface`}>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Problem */}
              <div className="bg-bg p-8 rounded-xl border border-surface-3">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {psContent.problem.title}
                  </h2>
                </div>
                <ul className="space-y-4">
                  {psContent.problem.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-text-muted">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="bg-bg p-8 rounded-xl border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {psContent.solution.title}
                  </h2>
                </div>
                <ul className="space-y-4">
                  {psContent.solution.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-text-muted">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className={`${SECTION_SPACING.FEATURES} bg-bg`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isThai ? 'คุณสมบัติหลัก' : 'Key Features'}
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                {isThai
                  ? 'ทุกสิ่งที่คุณต้องการสำหรับ RAG Application ระดับ Enterprise'
                  : 'Everything you need for enterprise-grade RAG applications'}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-surface p-6 rounded-xl border border-surface-3 hover:border-primary/50 transition-all hover:shadow-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className={`${SECTION_SPACING.FEATURES} bg-surface`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isThai ? 'กรณีการใช้งาน' : 'Use Cases'}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-bg p-6 rounded-xl border border-surface-3 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-text-muted">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className={`${SECTION_SPACING.TECH_STACK} bg-bg`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isThai ? 'สเปคทางเทคนิค' : 'Technical Specifications'}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {technicalSpecs.map((spec, index) => (
                <div
                  key={index}
                  className="bg-surface p-6 rounded-xl border border-surface-3"
                >
                  <h3 className="text-xl font-semibold mb-4">
                    {spec.category}
                  </h3>
                  <ul className="space-y-2">
                    {spec.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-2 text-text-muted"
                      >
                        <Zap className="w-4 h-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className={`${SECTION_SPACING.PRICING} bg-surface`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isThai ? 'แพ็กเกจราคา' : 'Pricing Packages'}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter */}
              <div className="bg-bg p-8 rounded-xl border border-surface-3">
                <h3 className="text-2xl font-semibold mb-2">
                  {isThai ? 'Starter' : 'Starter'}
                </h3>
                <div className="text-4xl font-bold mb-4 text-primary">
                  ฿49,000<span className="text-lg text-text-muted">/ปี</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>
                      {isThai ? '1M tokens/เดือน' : '1M tokens/month'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{isThai ? 'Basic Support' : 'Basic support'}</span>
                  </li>
                  <li className="flex items-center gap-2 text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{isThai ? 'Self-hosted' : 'Self-hosted'}</span>
                  </li>
                </ul>
                <Link
                  href="#demo"
                  className="block text-center py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition font-semibold"
                >
                  {isThai ? 'เริ่มต้นใช้งาน' : 'Get Started'}
                </Link>
              </div>

              {/* Business */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-xl text-white border-2 border-white/20 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-primary rounded-full text-sm font-semibold">
                  {isThai ? 'แนะนำ' : 'Recommended'}
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                  {isThai ? 'Business' : 'Business'}
                </h3>
                <div className="text-4xl font-bold mb-4">
                  ฿149,000<span className="text-lg opacity-80">/ปี</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>
                      {isThai ? '10M tokens/เดือน' : '10M tokens/month'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>
                      {isThai ? 'Priority Support' : 'Priority support'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{isThai ? 'SLA 99.9%' : 'SLA 99.9%'}</span>
                  </li>
                </ul>
                <Link
                  href="#demo"
                  className="block text-center py-3 bg-white text-primary rounded-lg hover:bg-opacity-90 transition font-semibold"
                >
                  {isThai ? 'เริ่มต้นใช้งาน' : 'Get Started'}
                </Link>
              </div>

              {/* Enterprise */}
              <div className="bg-bg p-8 rounded-xl border border-surface-3">
                <h3 className="text-2xl font-semibold mb-2">
                  {isThai ? 'Enterprise' : 'Enterprise'}
                </h3>
                <div className="text-4xl font-bold mb-4 text-primary">
                  {isThai ? 'Custom' : 'Custom'}
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>
                      {isThai ? 'Tokens ไม่จำกัด' : 'Unlimited tokens'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>
                      {isThai ? 'Dedicated Support' : 'Dedicated support'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>
                      {isThai ? 'Custom Deployment' : 'Custom deployment'}
                    </span>
                  </li>
                </ul>
                <Link
                  href="#demo"
                  className="block text-center py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition font-semibold"
                >
                  {isThai ? 'ติดต่อฝ่ายขาย' : 'Contact Sales'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Request Form */}
        <section id="demo" className={`${SECTION_SPACING.CTA} bg-bg`}>
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {isThai
                    ? 'ขอ Demo CerebraForge'
                    : 'Request CerebraForge Demo'}
                </h2>
                <p className="text-text-muted">
                  {isThai
                    ? 'มาดูว่า CerebraForge จะช่วยสร้าง RAG Application ให้คุณได้อย่างไร'
                    : 'See how CerebraForge can help you build RAG applications'}
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className={`${SECTION_SPACING.CTA} bg-gradient-to-r from-purple-500 to-pink-500`}
        >
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isThai
                ? 'พร้อมสร้าง RAG Application ของคุณ?'
                : 'Ready to Build Your RAG Application?'}
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {isThai
                ? 'เริ่มต้นใช้งาน CerebraForge วันนี้และสร้าง RAG Application ในไม่กี่สัปดาห์'
                : 'Start using CerebraForge today and build RAG applications in weeks'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-opacity-90 transition"
              >
                {isThai ? 'ขอ Demo' : 'Request Demo'}
              </Link>
              <Link
                href={`/${params.locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
              >
                {isThai ? 'ติดต่อเรา' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
