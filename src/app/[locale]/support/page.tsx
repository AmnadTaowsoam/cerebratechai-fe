'use client';

import { useLocale } from 'next-intl';
import { MagicHero } from '@/components/magicui';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  MessageCircle,
  BookOpen,
  Phone,
  Mail,
  Clock,
  HelpCircle,
} from 'lucide-react';
import Link from 'next/link';
import { SECTION_SPACING } from '@/lib/constants/spacing';

export default function SupportPage() {
  const locale = useLocale();
  const basePath = `/${locale}`;

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Mon-Fri 9:00-18:00',
      action: 'Start Chat',
      href: '#chat',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7 Email Receipt - Response on Business Days',
      action: 'Send Email',
      href: 'mailto:support@cerebratechai.com',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9:00-17:00',
      action: 'Call Now',
      href: 'tel:+66856621113',
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      availability: 'Always Available',
      action: 'Browse Docs',
      href: '#docs',
    },
  ];

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What types of AI solutions do you provide?',
          answer:
            'We provide comprehensive AI solutions including machine learning, computer vision, natural language processing, and edge AI applications across various industries.',
        },
        {
          question: 'How long does it take to implement an AI solution?',
          answer:
            'Implementation time varies depending on complexity. Simple solutions can be deployed in 4-6 weeks, while complex enterprise solutions may take 8-12 weeks.',
        },
        {
          question: 'Do you provide ongoing support after implementation?',
          answer:
            'Yes, we offer comprehensive post-implementation support including maintenance, updates, training, and optimization services.',
        },
      ],
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What technologies do you use for AI development?',
          answer:
            'We use modern AI frameworks including TensorFlow, PyTorch, Azure OpenAI, and cloud platforms like AWS, Azure, and Google Cloud.',
        },
        {
          question: 'Can you integrate with our existing systems?',
          answer:
            'Absolutely. We specialize in integrating AI solutions with existing enterprise systems, databases, and workflows.',
        },
        {
          question: 'Do you provide data security and compliance?',
          answer:
            'Yes, we ensure all solutions meet industry security standards and compliance requirements including GDPR, PDPA, and SOC 2.',
        },
      ],
    },
    {
      category: 'Business',
      questions: [
        {
          question: 'What is your pricing model?',
          answer:
            'We offer flexible pricing models including project-based, subscription, and outcome-based pricing depending on your needs and requirements.',
        },
        {
          question: 'Do you offer training for our team?',
          answer:
            'Yes, we provide comprehensive training programs to help your team understand and effectively use the AI solutions we implement.',
        },
        {
          question: 'What kind of ROI can we expect?',
          answer:
            'Our clients typically see 200-500% ROI within the first year, with measurable improvements in efficiency, accuracy, and cost savings.',
        },
      ],
    },
  ];

  const supportTeam = [
    {
      title: 'Technical Support',
      subtitle: 'Expert Engineers',
      description:
        'Our technical support team consists of experienced AI engineers and developers who can help you troubleshoot issues, optimize performance, and implement new features.',
      response: '< 2 hours average response time',
      metrics: ['Expert Engineers', '< 2hr Response', 'Mon-Fri Support'],
    },
    {
      title: 'Customer Success',
      subtitle: 'Success Managers',
      description:
        'Our customer success team works closely with you to ensure you get maximum value from your AI solutions and achieve your business objectives.',
      availability: 'Dedicated success manager for enterprise clients',
      metrics: ['Proactive Support', 'Success Planning', 'Regular Check-ins'],
    },
    {
      title: 'Documentation Team',
      subtitle: 'Technical Writers',
      description:
        'Our documentation team creates comprehensive guides, tutorials, and API documentation to help you understand and use our solutions effectively.',
      updated: 'Documentation updated weekly with latest features',
      metrics: ['Comprehensive Guides', 'API Documentation', 'Video Tutorials'],
    },
  ];

  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Complete guide to implementing your first AI solution',
      type: 'Guide',
      url: '#getting-started',
    },
    {
      title: 'API Documentation',
      description: 'Comprehensive API reference and examples',
      type: 'Documentation',
      url: '#api-docs',
    },
    {
      title: 'Troubleshooting Guide',
      description: 'Common issues and their solutions',
      type: 'Guide',
      url: '#troubleshooting',
    },
    {
      title: 'Best Practices',
      description: 'Industry best practices for AI implementation',
      type: 'Guide',
      url: '#best-practices',
    },
  ];

  return (
    <div className="bg-bg">
      {/* Hero Section */}
      <MagicHero
        eyebrow="Help & Support"
        title="We're Here to Help You Succeed"
        description="Get the support you need to maximize the value of your AI solutions. Our expert team is available 24/7 to help you overcome challenges and achieve your goals."
        align="center"
        metrics={[
          { value: '24/7', label: 'Email Support' },
          {
            value: '98%',
            label: 'Satisfaction Rate',
            disclaimer: '* Based on annual surveys 2023-2025',
          },
          { value: '<2hr', label: 'Response Time' },
        ]}
      />

      {/* Support Channels */}
      <section className={SECTION_SPACING.FEATURES}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              Support Channels
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Choose the support channel that works best for you. Our team is
              available through multiple channels to ensure you get the help you
              need.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportChannels.map((channel, index) => (
              <Card
                key={index}
                className="border border-hairline bg-surface/80 hover:bg-surface transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <channel.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-4">
                    {channel.description}
                  </p>
                  <p className="text-xs text-text-muted mb-4">
                    <Clock className="inline h-3 w-3 mr-1" />
                    {channel.availability}
                  </p>
                  <Button asChild size="sm" variant="outline">
                    <Link href={channel.href as any}>{channel.action}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${SECTION_SPACING.FAQ} bg-surface/30`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Find answers to common questions about our AI solutions and
              support services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-xl font-semibold text-text mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <Card
                      key={faqIndex}
                      className="border border-hairline bg-surface/80"
                    >
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-text mb-3">
                          {faq.question}
                        </h4>
                        <p className="text-text-muted">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className={SECTION_SPACING.FEATURES}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              Our Support Team
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Meet the experts who will help you succeed with your AI solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {supportTeam.map((team, index) => (
              <Card
                key={index}
                className="border border-hairline bg-surface/80"
              >
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {team.title}
                  </h3>
                  <p className="text-sm text-primary mb-2">{team.subtitle}</p>
                  <p className="text-sm text-text-muted mb-4">
                    {team.description}
                  </p>
                  {team.response && (
                    <div
                      className="text-xs text-text-muted"
                      dangerouslySetInnerHTML={{ __html: team.response }}
                    />
                  )}
                  {team.availability && (
                    <p className="text-xs text-text-muted mt-2">
                      {team.availability}
                    </p>
                  )}
                  {team.updated && (
                    <p className="text-xs text-text-muted mt-2">
                      {team.updated}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              Support Resources
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Access our comprehensive library of guides, documentation, and
              resources.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="border border-hairline bg-surface/80 hover:bg-surface transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-4">
                    {resource.description}
                  </p>
                  <Button asChild size="sm" variant="outline">
                    <Link href={resource.url as any}>View Resource</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className={`${SECTION_SPACING.CTA} bg-gradient-to-br from-primary/10 via-transparent to-accent/10`}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text mb-4">Need More Help?</h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our team is here to
            help you get the most out of your AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={`${basePath}/contact` as any}>
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`${basePath}/contact` as any}>
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
