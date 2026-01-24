'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  MessageSquare,
  Brain,
  Zap,
  Target,
  Users,
  Award,
} from 'lucide-react';
import Link from 'next/link';
import { SeoHead, ServiceSchema, FAQSection } from '@/components/seo';
import TLDRBlock from '@/components/TLDRBlock';
import KeyFactsBlock from '@/components/KeyFactsBlock';

export default function LLMPage() {
  const t = useTranslations('solutions');
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;
  const schemaLocale: 'en' | 'th' = isThai ? 'th' : 'en';

  const llmSolutions = [
    {
      title: 'Customer Service Chatbot',
      description:
        'Intelligent customer support with natural language understanding and context awareness.',
      features: [
        'Multi-language support',
        'Context retention',
        'Escalation handling',
        'Analytics dashboard',
      ],
      industry: 'Customer Service',
      timeline: '6-10 weeks',
      price: '฿580,000',
    },
    {
      title: 'Document Intelligence',
      description:
        'AI-powered document analysis and information extraction with high accuracy.',
      features: [
        'Document parsing',
        'Data extraction',
        'Content summarization',
        'Knowledge base',
      ],
      industry: 'Legal & Finance',
      timeline: '8-12 weeks',
      price: '฿720,000',
    },
    {
      title: 'Content Generation Platform',
      description:
        'Automated content creation for marketing, documentation, and communication.',
      features: [
        'Content templates',
        'Brand voice training',
        'Multi-format output',
        'Quality control',
      ],
      industry: 'Marketing',
      timeline: '6-8 weeks',
      price: '฿520,000',
    },
    {
      title: 'Code Assistant',
      description:
        'AI-powered coding assistant for developers with code generation and review.',
      features: [
        'Code generation',
        'Bug detection',
        'Documentation',
        'Code review',
      ],
      industry: 'Software Development',
      timeline: '8-12 weeks',
      price: '฿680,000',
    },
    {
      title: 'Research Assistant',
      description:
        'Intelligent research tool for academic and business research with citation management.',
      features: [
        'Literature review',
        'Data analysis',
        'Report generation',
        'Citation tracking',
      ],
      industry: 'Research & Academia',
      timeline: '10-14 weeks',
      price: '฿850,000',
    },
    {
      title: 'Personalized Learning',
      description:
        'Adaptive learning platform with personalized content and progress tracking.',
      features: [
        'Adaptive curriculum',
        'Progress tracking',
        'Assessment generation',
        'Learning analytics',
      ],
      industry: 'Education',
      timeline: '12-16 weeks',
      price: '฿950,000',
    },
  ];

  const capabilities = [
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description:
        'Advanced NLP capabilities including text understanding, generation, and conversation management.',
    },
    {
      icon: Brain,
      title: 'Fine-tuning & Customization',
      description:
        'Custom model training and fine-tuning for domain-specific applications and requirements.',
    },
    {
      icon: Zap,
      title: 'Real-time Inference',
      description:
        'High-performance inference engines optimized for production deployment and scalability.',
    },
    {
      icon: Target,
      title: 'Prompt Engineering',
      description:
        'Expert prompt design and optimization for maximum model performance and accuracy.',
    },
    {
      icon: Users,
      title: 'Multi-modal Integration',
      description:
        'Integration of text, image, and audio processing for comprehensive AI applications.',
    },
    {
      icon: Award,
      title: 'Enterprise Security',
      description:
        'Secure deployment with data privacy, access control, and compliance frameworks.',
    },
  ];

  const faqs = [
    {
      question: isThai
        ? 'LLM และ RAG ต่างกันอย่างไร?'
        : 'What is the difference between LLM and RAG?',
      answer: isThai
        ? 'LLM (Large Language Model) คือโมเดล AI ที่สามารถเข้าใจและสร้างข้อความ RAG (Retrieval-Augmented Generation) เป็นเทคนิคที่เพิ่มความสามารถให้ LLM โดยให้มันดึงข้อมูลจากแหล่งความรู้ภายนอก (เช่น ฐานข้อมูลเอกสาร) ก่อนตอบคำถาม ทำให้คำตอบแม่นยำและอิงจากข้อมูลจริงมากขึ้น'
        : 'LLM (Large Language Model) is an AI model that can understand and generate text. RAG (Retrieval-Augmented Generation) enhances LLM by allowing it to retrieve information from external knowledge sources (like document databases) before answering, making responses more accurate and grounded in real data.',
    },
    {
      question: isThai ? 'ต้องใช้ข้อมูลเท่าไหร่?' : 'How much data do I need?',
      answer: isThai
        ? 'สำหรับ POC ต้องการอย่างน้อย 50-100 เอกสารตัวอย่าง หรือ 1 แหล่งข้อมูล (เช่น knowledge base หนึ่งชุด) สำหรับ Production ต้องการข้อมูลมากกว่า 500+ เอกสาร หรือ API/database ที่มีข้อมูลครบถ้วน คุณภาพข้อมูลสำคัญกว่าปริมาณ'
        : 'For POC, you need at least 50-100 sample documents or 1 data source (like a knowledge base). For Production, you need 500+ documents or comprehensive API/database access. Quality matters more than quantity.',
    },
    {
      question: isThai
        ? 'วัดความแม่นยำอย่างไร?'
        : 'How do you measure accuracy?',
      answer: isThai
        ? 'เราใช้ metrics: Precision@k (ความแม่นยำของคำตอบที่ดึงมา), Citation Rate (% ที่อ้างอิงแหล่งข้อมูล), Groundedness (% ที่คำตอบมาจากเอกสารจริง), และ Hallucination Rate (% ที่ตอบเอง) โดยทั่วไปเป้าหมายคือ Precision > 85% และ Citation Rate > 90%'
        : 'We use metrics: Precision@k (accuracy of retrieved answers), Citation Rate (% that cite sources), Groundedness (% answers from real documents), and Hallucination Rate (% made-up answers). Typical targets: Precision > 85%, Citation Rate > 90%.',
    },
    {
      question: isThai
        ? 'รองรับภาษาไทยได้ดีแค่ไหน?'
        : 'How well does it support Thai language?',
      answer: isThai
        ? 'เรารองรับภาษาไทยได้ดีด้วยการใช้ multilingual LLM (เช่น GPT-4, Claude) และเทคนิค prompt engineering สำหรับภาษาไทย อาจต้อง fine-tune เพิ่มเติมสำหรับ domain เฉพาะทาง (เช่น กฎหมาย การแพทย์) ประสิทธิภาพขึ้นอยู่กับคุณภาพและปริมาณข้อมูลภาษาไทยที่มี'
        : 'We support Thai well using multilingual LLMs (like GPT-4, Claude) and Thai-specific prompt engineering. Fine-tuning may be needed for specialized domains (legal, medical). Performance depends on quality and quantity of Thai data available.',
    },
    {
      question: isThai
        ? 'ป้องกัน Hallucination อย่างไร?'
        : 'How do you prevent hallucinations?',
      answer: isThai
        ? 'เราใช้หลายวิธี: RAG (ดึงข้อมูลจากแหล่งที่เชื่อถือได้), Guardrails (เช็คความถูกต้อง), Citation (บังคับให้อ้างอิง), และ Evaluation (ทดสอบอย่างสม่ำเสมอ) รวมถึงการตั้งค่า temperature ให้ต่ำและใช้ system prompts ที่ชัดเจน'
        : 'We use multiple methods: RAG (retrieve from trusted sources), Guardrails (check correctness), Citation (force references), and Evaluation (regular testing), plus low temperature settings and clear system prompts.',
    },
    {
      question: isThai
        ? 'ต้นทุนการใช้งาน API เท่าไหร่?'
        : 'What are the API costs?',
      answer: isThai
        ? 'ต้นทุนขึ้นอยู่กับ: ปริมาณการใช้งาน (queries/day), โมเดลที่เลือก (GPT-3.5 ถูกกว่า GPT-4), และขนาดบริบท โดยทั่วไป POC ใช้งบ API ประมาณ ฿5,000-15,000/เดือน Production อาจสูงถึง ฿50,000+/เดือนขึ้นอยู่กับ usage เราช่วยเพิ่มประสิทธิภาพเพื่อลดต้นทุน'
        : 'Costs depend on: usage volume (queries/day), model choice (GPT-3.5 cheaper than GPT-4), and context size. Typically, POC uses ฿5k-15k/month API budget. Production can be ฿50k+/month depending on usage. We help optimize to reduce costs.',
    },
  ];

  return (
    <>
      <SeoHead
        title={
          isThai
            ? 'LLM & RAG Solutions - AI ที่เข้าใจและตอบคำถาม'
            : 'LLM & RAG Solutions - AI That Understands and Answers'
        }
        description={
          isThai
            ? 'โซลูชัน LLM และ RAG สำหรับ Chatbot, การค้นหาข้อมูล, การสรุปเอกสาร และระบบถามตอบอัจฉริยะ'
            : 'LLM and RAG solutions for chatbots, information retrieval, document summarization, and intelligent Q&A systems.'
        }
        keywords={
          isThai
            ? ['LLM', 'RAG', 'Chatbot', 'GPT', 'AI ตอบคำถาม', 'ค้นหาข้อมูล']
            : [
                'LLM',
                'RAG',
                'Chatbot',
                'GPT',
                'Question Answering',
                'Information Retrieval',
              ]
        }
        url="/solutions/llm"
        type="website"
      />
      <ServiceSchema
        serviceName="LLM & RAG Solutions"
        description={
          isThai
            ? 'โซลูชัน LLM และ RAG ที่พร้อมใช้งานจริง'
            : 'Production-ready LLM and RAG solutions'
        }
      />

      <div className="bg-bg">
        {/* TL;DR + Key Facts Section */}
        <section className="py-12 bg-surface/30">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* TL;DR Block */}
              <div>
                <TLDRBlock
                  summary={
                    isThai
                      ? 'โซลูชัน LLM และ RAG ช่วยให้คุณสร้างระบบ AI ที่เข้าใจธรรม ตอบคำถาม และจัดการเอกสารอัตโนมัติ พร้อมระบบความปลอดภัยและการประเมินผล'
                      : 'LLM & RAG solutions help you build intelligent systems that understand context, answer questions, manage documents autonomously, with guardrails and evaluation frameworks for production deployment.'
                  }
                  locale={schemaLocale}
                />
              </div>

              {/* Key Facts Block */}
              <div>
                <KeyFactsBlock
                  facts={[
                    {
                      label: isThai ? 'Use Cases' : 'Use Cases',
                      value: isThai
                        ? 'Customer Service, Legal, Marketing, Research'
                        : 'Customer Service, Legal, Marketing, Research',
                    },
                    {
                      label: isThai ? 'ข้อมูลขั้นต่ำ' : 'Minimum Data Required',
                      value: isThai
                        ? 'ตัวอย่างข้อมูล 1 แหล่ง + เป้าหมาย KPI ที่ชัดเจน'
                        : '1 sample data source + clear KPI objectives',
                    },
                    {
                      label: isThai ? 'สิ่งที่ได้รับ' : 'Deliverables',
                      value: isThai
                        ? 'RAG pipeline, evaluation set, dashboard, policy/PII guard'
                        : 'RAG pipeline, evaluation set, dashboard, policy/PII guard',
                    },
                    {
                      label: isThai
                        ? 'KPI และการประเมินผล'
                        : 'KPI & Evaluation',
                      value: isThai
                        ? 'ความแม่น (Precision@k), citation rate, groundedness'
                        : 'Precision@k, citation rate, groundedness',
                    },
                    {
                      label: isThai ? 'ระยะเวลา' : 'Timeline',
                      value: isThai
                        ? 'POC: 6-10 สัปดาห์ | Pilot: 8-16 สัปดาห์'
                        : 'POC: 6-10 weeks | Pilot: 8-16 weeks',
                    },
                    {
                      label: isThai
                        ? 'ตัวเลือกการใช้งาน'
                        : 'Deployment Options',
                      value: 'Cloud, VPC, On-prem',
                    },
                    {
                      label: isThai
                        ? 'การเชื่อมต่อ (ไม่บังคับ)'
                        : 'Integration (Optional)',
                      value: isThai
                        ? 'API integration, dashboard, SSO/RBAC, connectors'
                        : 'API integration, dashboard, SSO/RBAC, connectors',
                    },
                    {
                      label: isThai ? 'การนำเสนอราคา' : 'Pricing',
                      value: isThai
                        ? 'เริ่มต้นได้ด้วย Kickstart/POC (ช่วงราคาโดยประมาณ)'
                        : 'Start with Kickstart/POC (range pricing)',
                    },
                  ]}
                  locale={schemaLocale}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <MagicHero
          eyebrow="LLM Solutions"
          title="Harness the Power of Large Language Models"
          description="Transform your business with advanced language AI solutions. From intelligent chatbots to content generation, leverage the latest in LLM technology for enhanced productivity and customer experience."
          metrics={[
            { value: '95%', label: 'Accuracy Rate' },
            { value: '70%', label: 'Time Savings' },
            { value: '6-16', label: 'Weeks to Deploy' },
          ]}
          align="center"
        >
          <Particles quantity={60} staticity={20} ease={80} />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-red-500/20" />
        </MagicHero>

        {/* Capabilities Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text mb-4">
                LLM Capabilities
              </h2>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                From natural language understanding to content generation, we
                provide comprehensive LLM solutions for any business need.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                return (
                  <Card
                    key={index}
                    className="border border-hairline bg-surface/80 hover:bg-surface transition-colors"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/20">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">
                          {capability.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-muted">
                        {capability.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-surface/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text mb-4">
                LLM Solutions
              </h2>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                Ready-to-deploy LLM solutions across various industries and
                applications.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {llmSolutions.map((solution, index) => (
                <Card
                  key={index}
                  className="border border-hairline bg-surface/80 hover:bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">
                      {solution.title}
                    </CardTitle>
                    <p className="text-text-muted">{solution.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-text mb-2">
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {solution.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-text-muted"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between text-sm text-text-muted pt-4 border-t border-hairline">
                        <span className="font-medium">{solution.industry}</span>
                        <span>{solution.timeline}</span>
                      </div>

                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">
                          {solution.price}
                        </div>
                        <ShimmerButton asChild className="w-full">
                          <Link
                            href={`${basePath}/contact` as any}
                            className="flex items-center justify-center gap-2"
                          >
                            Get Started
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </ShimmerButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <Card className="border border-hairline bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-text mb-4">
                  Ready to Implement LLM in Your Business?
                </h2>
                <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
                  Let our LLM experts help you harness the power of language AI
                  to automate processes, enhance customer experience, and drive
                  innovation across your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ShimmerButton asChild className="px-8 py-4">
                    <Link
                      href={`${basePath}/contact` as any}
                      className="flex items-center gap-2"
                    >
                      Start Your LLM Journey
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </ShimmerButton>
                  <ShimmerButton asChild className="px-8 py-4">
                    <Link
                      href={`${basePath}/cases` as any}
                      className="flex items-center gap-2"
                    >
                      View Case Studies
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </ShimmerButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
