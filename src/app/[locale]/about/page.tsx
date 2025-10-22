'use client';

import { useLocale } from 'next-intl';
import { MagicHero } from '@/components/magicui';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, Target, Award, Heart } from 'lucide-react';
import Link from 'next/link';
import { SeoHead, OrganizationJsonLd } from '@/components/seo';

export default function AboutPage() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      bio: 'Former Google AI researcher with 15+ years in machine learning and computer vision.',
      image: '/team/sarah-chen.jpg'
    },
    {
      name: 'James Rodriguez',
      role: 'Head of Engineering',
      bio: 'Ex-Microsoft architect specializing in scalable AI infrastructure and MLOps.',
      image: '/team/james-rodriguez.jpg'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Lead Data Scientist',
      bio: 'PhD in Statistics, expert in predictive analytics and time-series forecasting.',
      image: '/team/priya-patel.jpg'
    },
    {
      name: 'Michael Kim',
      role: 'Solutions Architect',
      bio: 'Former AWS solutions architect with deep expertise in cloud-native AI deployments.',
      image: '/team/michael-kim.jpg'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI, always staying ahead of the curve.'
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      description: 'We work alongside your team, not just for you, ensuring knowledge transfer and sustainable success.'
    },
    {
      icon: Award,
      title: 'Excellence in Delivery',
      description: 'Every project is delivered with production-ready quality, comprehensive documentation, and measurable outcomes.'
    },
    {
      icon: Heart,
      title: 'Positive Impact',
      description: 'We believe AI should solve real-world problems and create meaningful value for businesses and society.'
    }
  ];

  return (
    <>
      <SeoHead
        title={isThai ? 'เกี่ยวกับเรา - Cerebratechai AI Studio' : 'About Us - Cerebratechai AI Studio'}
        description={isThai 
          ? 'เรียนรู้เกี่ยวกับทีม AI ของเราในกรุงเทพฯ ที่มีประสบการณ์ในการพัฒนาโซลูชัน AI สำหรับธุรกิจ'
          : 'Learn about our AI team in Bangkok with experience in developing AI solutions for businesses.'
        }
        keywords={isThai 
          ? ['เกี่ยวกับเรา', 'ทีม AI', 'Cerebratechai', 'AI Bangkok', 'Machine Learning team']
          : ['About us', 'AI team', 'Cerebratechai', 'AI Bangkok', 'Machine Learning team']
        }
        url="/about"
        type="website"
      />
      <OrganizationJsonLd />
      
      <div className="bg-bg">
      {/* Hero Section */}
      <MagicHero
        eyebrow="About Cerebratechai"
        title="Building the Future of AI, One Solution at a Time"
        description="We make AI accessible to everyone - from individuals to enterprises. Our solutions bridge the gap between cutting-edge AI research and real-world applications, delivering measurable business value and creating new opportunities."
        align="center"
        metrics={[
          { value: '295+', label: 'Projects Delivered' },
          { value: '98%', label: 'Success Rate' },
          { value: '450%', label: 'Average ROI' }
        ]}
      />

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-text mb-4">
                  Our Mission
                </h2>
                <p className="text-text-muted leading-relaxed">
                  We make AI accessible to everyone - from individuals to enterprises. Our solutions bridge the gap between cutting-edge AI research and real-world applications, delivering measurable business value and creating new opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-text mb-4">
                  Our Vision
                </h2>
                <p className="text-text-muted leading-relaxed">
                  To be the leading boutique AI studio in Southeast Asia, known for technical excellence, practical approaches, and the ability to deliver AI solutions that transform businesses and create sustainable competitive advantages.
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
              Our Story
            </h2>
            <p className="text-text-muted max-w-3xl mx-auto">
              Founded in 2025, we have always believed that AI is a powerful tool that can be used to solve pain points across various domains and create new opportunities. We started with a simple vision: to make AI accessible and practical for everyone.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">2025</div>
                <h3 className="text-lg font-semibold text-text mb-2">Founded</h3>
                <p className="text-sm text-text-muted">
                  Started with a vision to make AI accessible and practical for everyone, from individuals to enterprises.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">2025</div>
                <h3 className="text-lg font-semibold text-text mb-2">Applications</h3>
                <p className="text-sm text-text-muted">
                  Developed applications like malAI.com for Thai ceremony management and DulaeDee.com for wellness platforms.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">2025</div>
                <h3 className="text-lg font-semibold text-text mb-2">Services</h3>
                <p className="text-sm text-text-muted">
                  Offering specialized services including CereBraKM knowledge management and NVR+Raspberry Pi CCTV solutions.
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
              Our Applications & Services
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              We develop innovative applications and provide specialized services that solve real-world problems using AI technology.
            </p>
          </div>

          {/* Platform Solutions */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-text mb-6">Platform Solutions</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border border-hairline bg-surface/80 hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-text mb-4">malAI.com</h4>
                  <p className="text-text-muted mb-4">
                    A comprehensive platform for managing Thai ceremonies that connects event organizers (Buyers) with service providers (Vendors). Features AI-powered planning, budget calculation, and auspicious timing selection.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Event Management</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">AI Planning</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Budget Calculator</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-hairline bg-surface/80 hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-text mb-4">DulaeDee.com</h4>
                  <p className="text-text-muted mb-4">
                    One platform, two modes: Care and Wellness. Features two UI shells (Dulae Dee and Dulae Dee Wellness) sharing the same backend, account, and billing system with features enabled based on entitlements.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Wellness Platform</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Dual UI</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Entitlement System</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-hairline bg-surface/80 hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-text mb-4">CereBraKM</h4>
                  <p className="text-text-muted mb-4">
                    Advanced knowledge management system powered by RAG + LLM that helps organizations capture, organize, and leverage their intellectual assets with AI-powered search and recommendations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">RAG + LLM</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">AI Search</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Knowledge Management</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Edge AI Solutions */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-text mb-6">Edge AI Solutions</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border border-hairline bg-surface/80 hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-text mb-4">NVR + Raspberry Pi CCTV</h4>
                  <p className="text-text-muted mb-4">
                    Intelligent surveillance solution combining Network Video Recorder (NVR) with Raspberry Pi for advanced image analysis and monitoring from CCTV feeds with real-time alerts and analytics.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Surveillance</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Image Analysis</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Real-time Alerts</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-hairline bg-surface/80 hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-text mb-4">Edge Computer (Jetson/Raspberry Pi + LLM)</h4>
                  <p className="text-text-muted mb-4">
                    Powerful edge computing solution combining NVIDIA Jetson or Raspberry Pi with Large Language Models for on-device AI processing, enabling fast, secure, and offline-capable AI applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Edge Computing</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">LLM</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Offline AI</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Computer Vision Solutions */}
          <div>
            <h3 className="text-2xl font-bold text-text mb-6">Computer Vision Solutions</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border border-hairline bg-surface/80 hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-text mb-4">Depth Camera Weight Prediction</h4>
                  <p className="text-text-muted mb-4">
                    Advanced depth camera system for accurate weight prediction and size classification. Perfect for logistics, agriculture, and retail applications requiring non-contact measurement.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Depth Camera</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Weight Prediction</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Size Classification</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-hairline bg-surface/80 hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-text mb-4">OCR Dashboard System</h4>
                  <p className="text-text-muted mb-4">
                    Intelligent document processing system that converts images to text using advanced OCR technology, with real-time dashboard for monitoring and analytics. Perfect for document automation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">OCR</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Document Processing</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Real-time Dashboard</span>
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
              Our Achievements
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Recognition from industry leaders and successful partnerships confirm our expertise and commitment to excellence.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">295+</div>
                <h3 className="text-lg font-semibold text-text mb-2">Projects Delivered</h3>
                <p className="text-sm text-text-muted">
                  Successful AI implementations across various industries
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <h3 className="text-lg font-semibold text-text mb-2">Success Rate</h3>
                <p className="text-sm text-text-muted">
                  High project success rate with measurable ROI
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">450%</div>
                <h3 className="text-lg font-semibold text-text mb-2">Average ROI</h3>
                <p className="text-sm text-text-muted">
                  Average return on investment across all client projects
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <h3 className="text-lg font-semibold text-text mb-2">Support</h3>
                <p className="text-sm text-text-muted">
                  Round-the-clock technical support and monitoring
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
              What Our Clients Say
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Real feedback from organizations we&apos;ve partnered with to deliver AI solutions that drive measurable results.
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
                  &quot;The malAI platform transformed how we manage Thai ceremonies. The AI-powered planning and vendor matching reduced our event planning time by 40% while improving client satisfaction significantly.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">SR</span>
                  </div>
                  <div>
                    <p className="text-text font-semibold">Somchai Rattana</p>
                    <p className="text-sm text-text-muted">CEO, Thai Events Co.</p>
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
                  &quot;CereBraKM revolutionized our knowledge management. The RAG+LLM system helped our team find critical information 70% faster, and the AI search accuracy is remarkable at 90%.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">PK</span>
                  </div>
                  <div>
                    <p className="text-text font-semibold">Preecha Komolpis</p>
                    <p className="text-sm text-text-muted">CTO, Enterprise Solutions Ltd.</p>
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
                  &quot;The edge AI computer solution exceeded our expectations. 90% latency reduction and complete offline capability gave us the performance and privacy we needed for our operations.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">NW</span>
                  </div>
                  <div>
                    <p className="text-text font-semibold">Niran Wongpakdi</p>
                    <p className="text-sm text-text-muted">Operations Director, Smart Factory Inc.</p>
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
              Our Values
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              These core principles guide everything we do and define how we work with our clients.
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
            <h2 className="text-3xl font-bold text-text mb-4">
              Meet Our Team
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Our diverse team of AI experts, engineers, and business strategists work together to deliver exceptional results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-text-muted">
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
            Ready to Work With Us?
          </h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help transform your business with AI. Our team is ready to explore your challenges and design solutions that deliver real value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={`${basePath}/contact` as any}>
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`${basePath}/careers` as any}>
                Join Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
