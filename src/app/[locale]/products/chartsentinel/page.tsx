import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import { BarChart, Microscope, Brain, Activity, AlertTriangle, TrendingDown, Factory, CheckCircle2, Package } from 'lucide-react';
import { ContactForm } from '@/components/landing/contact-form';
import { SECTION_SPACING } from '@/lib/constants/spacing';
import { SeoHead, OrganizationJsonLd } from '@/components/seo';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isThai = params.locale.startsWith('th');
  return {
    title: isThai ? 'ChartSentinel - AI-SPC Quality Control | ลดของเสีย 85%' : 'ChartSentinel - AI-SPC Quality Control | Reduce Waste by 85%',
    description: isThai
      ? 'AI-SPC Platform สำหรับควบคุมคุณภาพในโรงงาน ลดของเสียได้ถึง 85% ด้วย Real-time Signals และ Lab Quality Integration'
      : 'AI-SPC Platform for factory quality control. Reduce waste by up to 85% with Real-time Signals and Lab Quality Integration',
  };
}

export default async function ChartSentinelPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'products.chartsentinel' });
  const isThai = params.locale.startsWith('th');
  const basePath = `/${params.locale}`;

  const heroContent = {
    en: {
      title: "ChartSentinel",
      subtitle: "AI-SPC Quality Control Platform",
      usp: "Reduce Factory Waste by 85%",
      description: "Real-time anomaly detection and quality control for manufacturing. Integrate AI-SPC with your production line to catch defects before they become costly.",
    },
    th: {
      title: "ChartSentinel",
      subtitle: "AI-SPC Platform สำหรับควบคุมคุณภาพ",
      usp: "ลดของเสียในโรงงาน 85%",
      description: "ตรวจจับความผิดปกติแบบ Real-time และควบคุมคุณภาพในโรงงาน เชื่อมต่อ AI-SPC กับสายการผลิตเพื่อจับข้อบกพร่องก่อนที่จะกลายเป็นต้นทุน",
    },
  };

  const content = isThai ? heroContent.th : heroContent.en;

  const problemSolution = {
    en: {
      problem: {
        title: "The Problem",
        points: [
          "Traditional SPC charts miss subtle patterns and early warning signals",
          "Quality issues discovered too late, causing massive waste",
          "Lab quality data disconnected from real-time process data",
          "Manual analysis is slow and error-prone",
        ],
      },
      solution: {
        title: "Our Solution",
        points: [
          "AI-powered real-time signal detection catches anomalies instantly",
          "Dual-mode intelligence: Real-time + Lab Quality integration",
          "Context Pack technology for domain-specific quality patterns",
          "Automated alerts prevent defects before they impact production",
        ],
      },
    },
    th: {
      problem: {
        title: "ปัญหา",
        points: [
          "SPC charts แบบเดิมพลาดสัญญาณเตือนและรูปแบบที่ซับซ้อน",
          "พบปัญหาคุณภาพช้าเกินไป ทำให้เกิดของเสียจำนวนมาก",
          "ข้อมูล Lab Quality ไม่เชื่อมต่อกับข้อมูล Process แบบ Real-time",
          "การวิเคราะห์ด้วยมือช้าและผิดพลาดได้ง่าย",
        ],
      },
      solution: {
        title: "โซลูชันของเรา",
        points: [
          "AI ตรวจจับสัญญาณผิดปกติแบบ Real-time ทันที",
          "Dual-mode Intelligence: รวม Real-time + Lab Quality",
          "Context Pack สำหรับรูปแบบคุณภาพเฉพาะอุตสาหกรรม",
          "แจ้งเตือนอัตโนมัติป้องกันข้อบกพร่องก่อนส่งผลกระทบ",
        ],
      },
    },
  };

  const psContent = isThai ? problemSolution.th : problemSolution.en;

  const features = [
    {
      icon: BarChart,
      title: isThai ? 'Real-Time Signals' : 'Real-Time Signals',
      description: isThai
        ? 'ตรวจจับสัญญาณผิดปกติแบบ Real-time ด้วย AI'
        : 'AI-powered real-time anomaly detection',
    },
    {
      icon: Microscope,
      title: isThai ? 'Lab Quality Integration' : 'Lab Quality Integration',
      description: isThai
        ? 'เชื่อมต่อข้อมูล Lab Quality เข้ากับ Process Data'
        : 'Connect Lab Quality data with Process Data',
    },
    {
      icon: Brain,
      title: isThai ? 'Context Pack' : 'Context Pack',
      description: isThai
        ? 'เทคโนโลยี Context Pack สำหรับรูปแบบคุณภาพเฉพาะ'
        : 'Context Pack technology for domain-specific patterns',
    },
    {
      icon: Activity,
      title: isThai ? 'Automated Alerts' : 'Automated Alerts',
      description: isThai
        ? 'ระบบแจ้งเตือนอัตโนมัติป้องกันข้อบกพร่อง'
        : 'Automated alert system prevents defects',
    },
  ];

  const useCases = [
    {
      title: isThai ? 'Manufacturing QC' : 'Manufacturing QC',
      description: isThai
        ? 'ควบคุมคุณภาพในสายการผลิตแบบ Real-time'
        : 'Real-time quality control in production lines',
      icon: Factory,
    },
    {
      title: isThai ? 'Waste Reduction' : 'Waste Reduction',
      description: isThai
        ? 'ลดของเสียและต้นทุนการผลิตได้ถึง 85%'
        : 'Reduce waste and production costs by up to 85%',
      icon: TrendingDown,
    },
    {
      title: isThai ? 'Early Detection' : 'Early Detection',
      description: isThai
        ? 'จับข้อบกพร่องก่อนที่จะกลายเป็นปัญหาใหญ่'
        : 'Catch defects before they become major issues',
      icon: AlertTriangle,
    },
  ];

  const testimonials = [
    {
      quote: isThai
        ? 'ChartSentinel ช่วยลดของเสียในโรงงานของเราได้ถึง 85% ระบบแจ้งเตือนแบบ Real-time ทำให้เราจับปัญหาได้ทันที'
        : 'ChartSentinel helped us reduce factory waste by 85%. The real-time alert system lets us catch issues immediately.',
      author: isThai ? 'ผู้จัดการฝ่ายคุณภาพ' : 'Quality Manager',
      company: isThai ? 'โรงงานผลิตอิเล็กทรอนิกส์' : 'Electronics Manufacturer',
    },
    {
      quote: isThai
        ? 'การเชื่อมต่อ Lab Quality กับ Process Data ทำให้เราเห็นภาพรวมที่ชัดเจนขึ้นมาก'
        : 'Connecting Lab Quality with Process Data gave us much clearer insights.',
      author: isThai ? 'วิศวกรกระบวนการ' : 'Process Engineer',
      company: isThai ? 'บริษัทอาหาร' : 'Food Company',
    },
  ];

  return (
    <>
      <SeoHead
        title={`${content.title} - ${content.subtitle}`}
        description={content.description}
        keywords={isThai
          ? ['AI-SPC', 'Quality Control', 'Manufacturing', 'ลดของเสีย', 'ChartSentinel']
          : ['AI-SPC', 'Quality Control', 'Manufacturing', 'Waste Reduction', 'ChartSentinel']
        }
        url="/products/chartsentinel"
        type="product"
      />
      <OrganizationJsonLd />

      <div className="min-h-screen bg-bg">
        {/* Hero Section */}
        <section className={`${SECTION_SPACING.HERO} relative overflow-hidden bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                ⭐ {isThai ? 'โซลูชันแนะนำ' : 'Featured Solution'}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  {content.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-text-muted mb-4">
                {content.subtitle}
              </p>
              <div className="inline-block mb-8 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-2xl font-bold">
                {content.usp}
              </div>
              <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
                {content.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#demo"
                  className="btn-primary"
                >
                  {isThai ? 'ขอ Demo' : 'Request Demo'}
                </Link>
                <Link
                  href="#features"
                  className="btn-secondary"
                >
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
                  <h2 className="text-2xl font-bold">{psContent.problem.title}</h2>
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
                  <h2 className="text-2xl font-bold">{psContent.solution.title}</h2>
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
                  ? 'เทคโนโลยีที่ช่วยให้คุณควบคุมคุณภาพได้อย่างมีประสิทธิภาพ'
                  : 'Technology that helps you control quality effectively'
                }
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-surface p-6 rounded-xl border border-surface-3 hover:border-primary/50 transition-all hover:shadow-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-text-muted">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className={`${SECTION_SPACING.PRICING} bg-bg`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isThai ? 'แพ็กเกจราคา' : 'Pricing Packages'}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Pilot */}
              <div className="bg-surface p-8 rounded-xl border border-surface-3">
                <h3 className="text-2xl font-semibold mb-2">{isThai ? 'Pilot' : 'Pilot'}</h3>
                <div className="text-4xl font-bold mb-4 text-primary">฿99,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{isThai ? '1 สายการผลิต' : '1 production line'}</span>
                  </li>
                  <li className="flex items-center gap-2 text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{isThai ? 'Analytics พื้นฐาน' : 'Basic analytics'}</span>
                  </li>
                  <li className="flex items-center gap-2 text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{isThai ? 'Email Support' : 'Email support'}</span>
                  </li>
                </ul>
                <Link
                  href="#demo"
                  className="block text-center py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition font-semibold"
                >
                  {isThai ? 'เริ่มต้นใช้งาน' : 'Get Started'}
                </Link>
              </div>

              {/* Production */}
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-8 rounded-xl text-white border-2 border-white/20 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-primary rounded-full text-sm font-semibold">
                  {isThai ? 'แนะนำ' : 'Recommended'}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{isThai ? 'Production' : 'Production'}</h3>
                <div className="text-4xl font-bold mb-4">฿249,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{isThai ? '5 สายการผลิต' : '5 production lines'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{isThai ? 'Analytics ขั้นสูง' : 'Advanced analytics'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{isThai ? 'Priority Support' : 'Priority support'}</span>
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
              <div className="bg-surface p-8 rounded-xl border border-surface-3">
                <h3 className="text-2xl font-semibold mb-2">{isThai ? 'Enterprise' : 'Enterprise'}</h3>
                <div className="text-4xl font-bold mb-4 text-primary">{isThai ? 'Custom' : 'Custom'}</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{isThai ? 'สายการผลิตไม่จำกัด' : 'Unlimited lines'}</span>
                  </li>
                  <li className="flex items-center gap-2 text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{isThai ? 'Custom Integrations' : 'Custom integrations'}</span>
                  </li>
                  <li className="flex items-center gap-2 text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{isThai ? 'On-premise Deployment' : 'On-premise deployment'}</span>
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

        {/* Testimonials */}
        <section className={`${SECTION_SPACING.FEATURES} bg-surface`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isThai ? 'เสียงจากลูกค้า' : 'Customer Testimonials'}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-bg p-6 rounded-xl border border-surface-3"
                >
                  <p className="text-text-muted mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">{testimonial.author[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-text-muted">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Request Form */}
        <section id="demo" className={`${SECTION_SPACING.CTA} bg-bg`}>
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {isThai ? 'ขอ Demo ChartSentinel' : 'Request ChartSentinel Demo'}
                </h2>
                <p className="text-text-muted">
                  {isThai
                    ? 'มาดูว่า ChartSentinel จะช่วยลดของเสียในโรงงานของคุณได้อย่างไร'
                    : 'See how ChartSentinel can help reduce waste in your factory'
                  }
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${SECTION_SPACING.CTA} bg-gradient-to-r from-orange-500 to-red-500`}>
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isThai ? 'พร้อมลดของเสียในโรงงานของคุณ?' : 'Ready to Reduce Waste in Your Factory?'}
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {isThai
                ? 'เริ่มต้นใช้งาน ChartSentinel วันนี้และลดของเสียได้ถึง 85%'
                : 'Start using ChartSentinel today and reduce waste by up to 85%'
              }
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
