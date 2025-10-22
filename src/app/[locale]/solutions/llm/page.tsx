'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MagicHero, Particles, ShimmerButton } from '@/components/magicui';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MessageSquare, Brain, Zap, Target, Users, Award } from 'lucide-react';
import Link from 'next/link';
import { SeoHead, ServiceSchema } from '@/components/seo';

export default function LLMPage() {
  const t = useTranslations('solutions');
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;

  const llmSolutions = [
    {
      title: 'Customer Service Chatbot',
      description: 'Intelligent customer support with natural language understanding and context awareness.',
      features: ['Multi-language support', 'Context retention', 'Escalation handling', 'Analytics dashboard'],
      industry: 'Customer Service',
      timeline: '6-10 weeks',
      price: '฿580,000'
    },
    {
      title: 'Document Intelligence',
      description: 'AI-powered document analysis and information extraction with high accuracy.',
      features: ['Document parsing', 'Data extraction', 'Content summarization', 'Knowledge base'],
      industry: 'Legal & Finance',
      timeline: '8-12 weeks',
      price: '฿720,000'
    },
    {
      title: 'Content Generation Platform',
      description: 'Automated content creation for marketing, documentation, and communication.',
      features: ['Content templates', 'Brand voice training', 'Multi-format output', 'Quality control'],
      industry: 'Marketing',
      timeline: '6-8 weeks',
      price: '฿520,000'
    },
    {
      title: 'Code Assistant',
      description: 'AI-powered coding assistant for developers with code generation and review.',
      features: ['Code generation', 'Bug detection', 'Documentation', 'Code review'],
      industry: 'Software Development',
      timeline: '8-12 weeks',
      price: '฿680,000'
    },
    {
      title: 'Research Assistant',
      description: 'Intelligent research tool for academic and business research with citation management.',
      features: ['Literature review', 'Data analysis', 'Report generation', 'Citation tracking'],
      industry: 'Research & Academia',
      timeline: '10-14 weeks',
      price: '฿850,000'
    },
    {
      title: 'Personalized Learning',
      description: 'Adaptive learning platform with personalized content and progress tracking.',
      features: ['Adaptive curriculum', 'Progress tracking', 'Assessment generation', 'Learning analytics'],
      industry: 'Education',
      timeline: '12-16 weeks',
      price: '฿950,000'
    }
  ];

  const capabilities = [
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities including text understanding, generation, and conversation management.'
    },
    {
      icon: Brain,
      title: 'Fine-tuning & Customization',
      description: 'Custom model training and fine-tuning for domain-specific applications and requirements.'
    },
    {
      icon: Zap,
      title: 'Real-time Inference',
      description: 'High-performance inference engines optimized for production deployment and scalability.'
    },
    {
      icon: Target,
      title: 'Prompt Engineering',
      description: 'Expert prompt design and optimization for maximum model performance and accuracy.'
    },
    {
      icon: Users,
      title: 'Multi-modal Integration',
      description: 'Integration of text, image, and audio processing for comprehensive AI applications.'
    },
    {
      icon: Award,
      title: 'Enterprise Security',
      description: 'Secure deployment with data privacy, access control, and compliance frameworks.'
    }
  ];

  return (
    <>
      <SeoHead
        title={isThai ? 'LLM & RAG Solutions - AI ที่เข้าใจและตอบคำถาม' : 'LLM & RAG Solutions - AI That Understands and Answers'}
        description={isThai 
          ? 'โซลูชัน LLM และ RAG สำหรับ Chatbot, การค้นหาข้อมูล, การสรุปเอกสาร และระบบถามตอบอัจฉริยะ'
          : 'LLM and RAG solutions for chatbots, information retrieval, document summarization, and intelligent Q&A systems.'
        }
        keywords={isThai 
          ? ['LLM', 'RAG', 'Chatbot', 'GPT', 'AI ตอบคำถาม', 'ค้นหาข้อมูล']
          : ['LLM', 'RAG', 'Chatbot', 'GPT', 'Question Answering', 'Information Retrieval']
        }
        url="/solutions/llm"
        type="website"
      />
      <ServiceSchema 
        serviceName="LLM & RAG Solutions"
        description={isThai 
          ? 'โซลูชัน LLM และ RAG ที่พร้อมใช้งานจริง'
          : 'Production-ready LLM and RAG solutions'
        }
      />
      
      <div className="bg-bg">
      {/* Hero Section */}
      <MagicHero
        eyebrow="LLM Solutions"
        title="Harness the Power of Large Language Models"
        description="Transform your business with advanced language AI solutions. From intelligent chatbots to content generation, leverage the latest in LLM technology for enhanced productivity and customer experience."
        metrics={[
          { value: '95%', label: 'Accuracy Rate' },
          { value: '70%', label: 'Time Savings' },
          { value: '6-16', label: 'Weeks to Deploy' }
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
              From natural language understanding to content generation, we provide comprehensive LLM solutions for any business need.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <Card key={index} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/20">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{capability.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-muted">{capability.description}</p>
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
              Ready-to-deploy LLM solutions across various industries and applications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {llmSolutions.map((solution, index) => (
              <Card key={index} className="border border-hairline bg-surface/80 hover:bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                  <p className="text-text-muted">{solution.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-text mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-text-muted">
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
                      <div className="text-2xl font-bold text-primary mb-2">{solution.price}</div>
                      <ShimmerButton asChild className="w-full">
                        <Link href={`${basePath}/contact` as any} className="flex items-center justify-center gap-2">
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="border border-hairline bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-text mb-4">
                Ready to Implement LLM in Your Business?
              </h2>
              <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
                Let our LLM experts help you harness the power of language AI to automate processes, enhance customer experience, and drive innovation across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ShimmerButton asChild className="px-8 py-4">
                  <Link href={`${basePath}/contact` as any} className="flex items-center gap-2">
                    Start Your LLM Journey
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </ShimmerButton>
                <ShimmerButton asChild className="px-8 py-4">
                  <Link href={`${basePath}/cases` as any} className="flex items-center gap-2">
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
