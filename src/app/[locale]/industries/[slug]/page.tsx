import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CASES } from '@/data/cases';

type IndustryDetailProps = {
  params: { locale: string; slug: string };
};

const INDUSTRY_DATA = {
  manufacturing: {
    name: { en: 'Manufacturing', th: 'การผลิตและโรงงาน' },
    description: {
      en: 'AI-powered solutions for quality inspection, predictive maintenance, and production optimization',
      th: 'โซลูชัน AI สำหรับการตรวจสอบคุณภาพ การบำรุงรักษาเชิงคาดการณ์ และการเพิ่มประสิทธิภาพการผลิต'
    },
    challenges: {
      en: [
        'Ensuring consistent product quality at scale',
        'Minimizing unplanned downtime',
        'Optimizing production efficiency',
        'Managing complex supply chains'
      ],
      th: [
        'การรักษาคุณภาพผลิตภัณฑ์ที่สม่ำเสมอในระดับใหญ่',
        'ลดการหยุดทำงานที่ไม่ได้วางแผน',
        'เพิ่มประสิทธิภาพการผลิต',
        'การจัดการห่วงโซ่อุปทานที่ซับซ้อน'
      ]
    },
    solutions: ['Computer Vision', 'Predictive Analytics', 'Edge AI'],
    sectorMatch: 'Manufacturing'
  },
  healthcare: {
    name: { en: 'Healthcare & Wellness', th: 'สุขภาพและการแพทย์' },
    description: {
      en: 'AI solutions for diagnostics, patient data management, and health advisory systems',
      th: 'โซลูชัน AI สำหรับการวินิจฉัย การจัดการข้อมูลผู้ป่วย และระบบให้คำปรึกษาสุขภาพ'
    },
    challenges: {
      en: [
        'Managing sensitive patient data securely',
        'Improving diagnostic accuracy',
        'Personalizing treatment recommendations',
        'Streamlining administrative workflows'
      ],
      th: [
        'การจัดการข้อมูลผู้ป่วยที่ละเอียดอ่อนอย่างปลอดภัย',
        'เพิ่มความแม่นยำในการวินิจฉัย',
        'การให้คำแนะนำการรักษาแบบเฉพาะบุคคล',
        'ปรับปรุงกระบวนการทางธุรการ'
      ]
    },
    solutions: ['LLM & RAG', 'Computer Vision', 'Predictive Analytics'],
    sectorMatch: 'Healthcare'
  },
  logistics: {
    name: { en: 'Logistics & Supply Chain', th: 'โลจิสติกส์และซัพพลายเชน' },
    description: {
      en: 'AI for demand forecasting, route optimization, and inventory inspection',
      th: 'AI สำหรับการคาดการณ์อุปสงค์ การเพิ่มประสิทธิภาพเส้นทาง และการตรวจสอบสินค้าคงคลัง'
    },
    challenges: {
      en: [
        'Optimizing delivery routes and schedules',
        'Accurate demand forecasting',
        'Inventory management and tracking',
        'Reducing operational costs'
      ],
      th: [
        'การเพิ่มประสิทธิภาพเส้นทางและตารางการส่ง',
        'การคาดการณ์อุปสงค์ที่แม่นยำ',
        'การจัดการและติดตามสินค้าคงคลัง',
        'ลดต้นทุนการดำเนินงาน'
      ]
    },
    solutions: ['Computer Vision', 'Predictive Analytics', 'Edge AI'],
    sectorMatch: 'Logistics'
  },
  enterprise: {
    name: { en: 'Enterprise', th: 'องค์กรขนาดใหญ่' },
    description: {
      en: 'AI for knowledge management, intelligent chatbots, and analytics systems',
      th: 'AI สำหรับการจัดการความรู้ ระบบ chatbot อัจฉริยะ และระบบวิเคราะห์ข้อมูล'
    },
    challenges: {
      en: [
        'Managing vast amounts of institutional knowledge',
        'Automating customer support',
        'Extracting insights from data',
        'Improving decision-making processes'
      ],
      th: [
        'การจัดการความรู้ขององค์กรจำนวนมหาศาล',
        'การทำให้การสนับสนุนลูกค้าเป็นอัตโนมัติ',
        'การดึงข้อมูลเชิงลึกจากข้อมูล',
        'ปรับปรุงกระบวนการตัดสินใจ'
      ]
    },
    solutions: ['LLM & RAG', 'Predictive Analytics', 'MLOps'],
    sectorMatch: 'Enterprise'
  }
};

export function generateStaticParams() {
  const locales = ['en', 'th'];
  const slugs = Object.keys(INDUSTRY_DATA);
  const params = [];

  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export function generateMetadata({ params }: IndustryDetailProps): Metadata {
  const industry = INDUSTRY_DATA[params.slug as keyof typeof INDUSTRY_DATA];

  if (!industry) {
    return {};
  }

  const locale = params.locale.startsWith('th') ? 'th' : 'en';

  return {
    title: `${industry.name[locale]} AI Solutions | CerebraTechAI`,
    description: industry.description[locale],
  };
}

export default function IndustryDetailPage({ params }: IndustryDetailProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';
  const basePath = `/${locale}`;

  const industry = INDUSTRY_DATA[params.slug as keyof typeof INDUSTRY_DATA];

  if (!industry) {
    notFound();
  }

  // Get related cases
  const relatedCases = CASES.filter(c => c.sector === industry.sectorMatch).slice(0, 6);

  return (
    <div className="bg-bg">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-surface via-surface-2 to-surface-3 py-20">
        <div className="container mx-auto px-6">
          <Link
            href={`${basePath}/industries` as any}
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
          >
            <ArrowLeft className="h-4 w-4" />
            {isThai ? 'กลับไปดูอุตสาหกรรม' : 'Back to Industries'}
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-text md:text-5xl mb-4">
              {industry.name[locale]}
            </h1>
            <p className="text-lg text-text-muted mb-6">
              {industry.description[locale]}
            </p>

            <div className="flex flex-wrap gap-2">
              {industry.solutions.map((solution, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary"
                >
                  {solution}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-text mb-6">
              {isThai ? 'ความท้าทายทั่วไป' : 'Common Challenges'}
            </h2>
            <Card className="border border-hairline bg-surface">
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {industry.challenges[locale].map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-medium mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-text-muted">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {relatedCases.length > 0 && (
        <section className="py-16 bg-surface/30">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-text mb-8">
              {isThai ? 'กรณีศึกษา' : 'Case Studies'}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedCases.map((caseItem) => (
                <Card
                  key={caseItem.slug}
                  className="border border-hairline bg-surface hover:shadow-lg transition-all group"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                        {caseItem.sector}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                      {caseItem.title}
                    </h3>
                    <p className="text-sm text-text-muted mb-4 line-clamp-2">
                      {caseItem.subtitle}
                    </p>
                    <Button variant="ghost" size="sm" asChild>
                      <Link
                        href={`${basePath}/cases/${caseItem.slug}` as any}
                        className="flex items-center gap-2"
                      >
                        {isThai ? 'อ่านเพิ่มเติม' : 'Read More'}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text mb-4">
            {isThai ? 'พร้อมที่จะเริ่มต้นแล้วหรือยัง?' : 'Ready to Get Started?'}
          </h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            {isThai
              ? 'พูดคุยกับทีมผู้เชี่ยวชาญของเราเพื่อหารือเกี่ยวกับโครงการของคุณ'
              : 'Talk to our expert team to discuss your project needs.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={`${basePath}/contact` as any}>
                {isThai ? 'ติดต่อเรา' : 'Contact Us'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`${basePath}/solutions` as any}>
                {isThai ? 'ดูโซลูชันทั้งหมด' : 'View All Solutions'}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
