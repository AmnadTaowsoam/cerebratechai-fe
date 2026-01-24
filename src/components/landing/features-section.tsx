'use client';

import { useTranslations, useLocale } from 'next-intl';
import {
  AnimatedGradientText,
  BentoCard,
  BentoGrid,
  Particles,
  ShimmerButton,
  SparklesText,
} from '@/components/magicui';
import { useAnalytics } from '@/lib/hooks/use-analytics';
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle,
  Cloud,
  Cpu,
  Globe2,
  Server,
  Shield,
  Zap,
} from 'lucide-react';

import { cn } from '@/lib/utils';

export function FeaturesSection() {
  const t = useTranslations('features');
  const locale = useLocale();
  const { trackCtaClick } = useAnalytics();

  const basePath = `/${locale.startsWith('th') ? 'th' : 'en'}`;

  const features = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description:
        'Advanced ML models for predictive analytics and intelligent automation',
      benefits: [
        'Predictive Analytics',
        'Automated Decision Making',
        'Pattern Recognition',
      ],
      className: 'sm:col-span-2 xl:col-span-2',
      gradient: 'from-cyan-500/30 via-transparent to-indigo-600/20',
    },
    {
      icon: Cpu,
      title: 'Computer Vision',
      description: 'State-of-the-art image and video processing capabilities',
      benefits: [
        'Object Detection',
        'Image Classification',
        'Real-time Processing',
      ],
      className: '',
      gradient: 'from-purple-500/20 via-transparent to-fuchsia-500/20',
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless deployment from edge to cloud infrastructure',
      benefits: ['Scalable Architecture', 'Edge Computing', 'Cloud Migration'],
      className: '',
      gradient: 'from-sky-500/20 via-transparent to-emerald-500/20',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security and compliance built-in',
      benefits: ['Data Encryption', 'Access Control', 'Audit Logging'],
      className: '',
      gradient: 'from-amber-500/20 via-transparent to-rose-500/20',
    },
    {
      icon: Server,
      title: 'Data Platforms',
      description:
        'Modern data pipelines and semantic layers that serve analytics and AI workloads',
      benefits: [
        'Streaming & Batch Pipelines',
        'Data Quality Automation',
        'Unified Metrics Layer',
      ],
      className: '',
      gradient: 'from-emerald-500/20 via-transparent to-cyan-500/20',
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Low-latency processing for mission-critical applications',
      benefits: [
        'Stream Processing',
        'Event-driven Architecture',
        'Microservices',
      ],
      className: '',
      gradient: 'from-lime-500/20 via-transparent to-cyan-500/20',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Comprehensive monitoring and business intelligence',
      benefits: [
        'Performance Metrics',
        'Business Intelligence',
        'Custom Dashboards',
      ],
      className: 'sm:col-span-2 xl:col-span-1',
      gradient: 'from-indigo-500/20 via-transparent to-pink-500/20',
    },
    {
      icon: Globe2,
      title: 'Global Deployment',
      description:
        'Operational playbooks for scaling AI capabilities across regions with confidence',
      benefits: [
        'Multi-region Infrastructure',
        'Localization Frameworks',
        'Compliance Guardrails',
      ],
      className: '',
      gradient: 'from-sky-500/20 via-transparent to-purple-500/20',
    },
  ];

  const handleFeatureClick = (featureTitle: string) => {
    trackCtaClick(
      `feature-${featureTitle.toLowerCase().replace(/\s+/g, '-')}`,
      featureTitle
    );
  };

  const sectionTitle = locale.startsWith('th')
    ? 'สิ่งที่เราส่งมอบ'
    : 'What We Deliver';
  const sectionSubtitle = locale.startsWith('th')
    ? 'โซลูชันพร้อมใช้งานที่ดูแลต่อได้ พร้อมผลลัพธ์ทางธุรกิจที่วัดได้'
    : 'Production-grade, maintainable solutions with measurable business impact';
  const sectionCtaText = locale.startsWith('th')
    ? 'ต้องการดูรายละเอียดเพิ่มเติม? สถาปนิกโซลูชันของเราจะปรับแต่งการสาธิตให้เหมาะกับกรณีการใช้งานของคุณภายใน 48 ชั่วโมง'
    : 'Need a deeper walkthrough? Our solution architects will tailor a demo to your use case within 48 hours.';

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-surface py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(140deg,_rgba(15,23,42,0.95)_0%,_rgba(9,13,26,0.92)_100%)]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedGradientText className="mb-6 text-[0.65rem] uppercase tracking-[0.35em] text-white/70 md:text-xs">
            <span>
              {locale.startsWith('th')
                ? 'คู่มือการส่งมอบ AI'
                : 'AI DELIVERY PLAYBOOK'}
            </span>
          </AnimatedGradientText>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            <SparklesText
              text={sectionTitle}
              className="block text-balance leading-tight"
            />
          </h2>
          <p className="mt-6 text-lg text-white/70">{sectionSubtitle}</p>
        </div>

        <div className="mt-16">
          <BentoGrid>
            {features.map((feature, index) => (
              <BentoCard
                key={feature.title}
                name={feature.title}
                description={feature.description}
                Icon={feature.icon}
                href={`${basePath}/solutions` as any}
                cta={
                  locale.startsWith('th')
                    ? 'ดูคู่มือการส่งมอบ →'
                    : 'See delivery playbook →'
                }
                className={cn('min-h-[26rem]', feature.className)}
                background={
                  <>
                    <Particles
                      quantity={index === 0 ? 40 : 24}
                      staticity={28}
                      ease={80}
                    />
                    <div
                      className={cn(
                        'absolute inset-0 bg-gradient-to-br',
                        feature.gradient
                      )}
                    />
                  </>
                }
                badge={
                  <AnimatedGradientText className="hidden text-[10px] uppercase tracking-[0.3em] text-white/70 md:flex">
                    <span>AI {feature.title}</span>
                  </AnimatedGradientText>
                }
                onCtaClick={() => handleFeatureClick(feature.title)}
              >
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {feature.benefits.map(benefit => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>

        <div className="mt-16 flex flex-col items-center gap-8 text-center">
          <p className="max-w-2xl text-lg text-white/60">{sectionCtaText}</p>
          <ShimmerButton
            type="button"
            className="px-12 py-5 text-lg font-semibold shadow-2xl shadow-primary/20"
            onClick={() =>
              trackCtaClick('features-explore-all', 'Explore All Features')
            }
          >
            <span>
              {locale.startsWith('th')
                ? 'ดูฟีเจอร์ทั้งหมด'
                : 'Explore All Features'}
            </span>
            <ArrowRight className="ml-3 h-6 w-6" />
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
