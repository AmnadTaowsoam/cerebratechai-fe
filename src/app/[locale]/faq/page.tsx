'use client';

import { useLocale } from 'next-intl';
import { MagicHero, Particles } from '@/components/magicui';
import { Card, CardContent } from '@/components/ui/card';
import { SeoHead, FAQSection } from '@/components/seo';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { SECTION_SPACING } from '@/lib/constants/spacing';

const faqs = {
  en: {
    title: 'Frequently Asked Questions',
    description: 'Common questions about our AI services, pricing, data handling, and project timelines.',
    categories: [
      {
        title: 'Pricing & Budget',
        icon: '💰',
        questions: [
          {
            question: 'What makes AI projects expensive or affordable?',
            answer: 'Cost drivers include: data quality and availability, model complexity, infrastructure requirements, team expertise needed, and deployment scale. POC projects (฿50k-฿150k) are much more affordable than production systems (฿500k+) because they validate feasibility with limited scope and data.',
          },
          {
            question: 'Why do you recommend starting with POC?',
            answer: 'POCs de-risk investments by validating technical feasibility, data quality, and business value before committing to full production. They typically cost 10-20% of a full system but prevent expensive failures. We\'ve seen organizations save millions by discovering deal-breakers early.',
          },
          {
            question: 'Can I get a fixed-price quote?',
            answer: 'We provide fixed pricing for Kickstart (฿30k-฿50k) and POC Lab (฿80k-฿180k) packages. For Pilot Launch and Production Scale, pricing depends on scope, data complexity, and infrastructure needs. We\'ll provide detailed estimates after discovery.',
          },
          {
            question: 'Are there ongoing costs after deployment?',
            answer: 'Yes. Expect: API/cloud hosting costs (varies with usage), model retraining (quarterly or as needed), monitoring and maintenance, and data pipeline updates. We provide transparent cost breakdowns and help optimize ongoing expenses.',
          },
        ],
      },
      {
        title: 'Data & Privacy',
        icon: '🔒',
        questions: [
          {
            question: 'What data do you collect and store?',
            answer: 'We only collect: contact information (name, email, company), project requirements you share, and technical metadata for service delivery. We never collect sensitive personal data without explicit consent. See our Privacy Policy for details.',
          },
          {
            question: 'Can we keep data on-premise?',
            answer: 'Yes. We support on-premise deployments for sensitive data. This requires: your own infrastructure (GPU servers, databases), VPN or secure access for our team during development, and additional setup costs. Most organizations find cloud deployment with proper security controls sufficient.',
          },
          {
            question: 'How do you handle confidential business data?',
            answer: 'We sign NDAs before any data sharing, use encrypted channels for all transfers, implement role-based access controls, and anonymize or synthesize data for case studies (never share real business data publicly).',
          },
          {
            question: 'Do you use our data to train your own models?',
            answer: 'No. Your data is used solely for your project. We don\'t use client data to improve our general models or share it with other clients. Models trained on your data remain your property.',
          },
        ],
      },
      {
        title: 'Results & Success Criteria',
        icon: '📊',
        questions: [
          {
            question: 'How do you measure success?',
            answer: 'We define success metrics during discovery: business KPIs (cost savings, time reduction, accuracy), technical metrics (model performance, latency, uptime), and user adoption metrics. Every project has clear acceptance criteria before we start.',
          },
          {
            question: 'What if results don\'t meet expectations?',
            answer: 'For POC projects: if we can\'t demonstrate feasibility, we\'ll explain why and recommend alternatives or stop early. For production projects: we iterate until acceptance criteria are met or provide partial refunds if unable to deliver (details in contract).',
          },
          {
            question: 'Can you guarantee specific accuracy levels?',
            answer: 'We provide realistic estimates based on similar projects, but exact performance depends on your data quality and quantity. POCs validate feasibility before committing to production targets. We won\'t promise unrealistic numbers.',
          },
          {
            question: 'How long until we see business value?',
            answer: 'Kickstart: insights in 2-3 weeks. POC: validation in 4-8 weeks. Pilot Launch: production-ready MVP in 2-4 months. Full production scale: 4-6+ months. Actual timelines depend on data readiness and organizational complexity.',
          },
        ],
      },
      {
        title: 'Timeline & Process',
        icon: '⏱️',
        questions: [
          {
            question: 'Why can\'t you just build it all at once?',
            answer: 'AI projects have hidden complexities: data quality issues, unexpected technical constraints, evolving requirements. Phased approach (Kickstart → POC → Pilot → Production) reduces risk, validates assumptions early, and allows course correction without wasting budget.',
          },
          {
            question: 'What is the typical project timeline?',
            answer: 'Kickstart: 2-3 weeks. POC Lab: 4-8 weeks. Pilot Launch: 8-16 weeks. Production Scale: 16-24+ weeks. Timeline depends on: data readiness, stakeholder availability, infrastructure setup, and scope complexity.',
          },
          {
            question: 'Can we accelerate the timeline?',
            answer: 'Possibly, if: your data is clean and well-documented, stakeholders are available for quick decisions, infrastructure is pre-approved and ready, and scope is clearly defined. Rushing too fast increases failure risk.',
          },
          {
            question: 'What happens after deployment?',
            answer: 'We provide: handover documentation and training, monitoring setup and alerting, maintenance period (typically 1-3 months), and optional ongoing support contracts. You own the code and models.',
          },
        ],
      },
    ],
  },
  th: {
    title: 'คำถามที่พบบ่อย (FAQ)',
    description: 'คำถามทั่วไปเกี่ยวกับบริการ AI ราคา การจัดการข้อมูล และระยะเวลาโปรเจกต์',
    categories: [
      {
        title: 'ราคาและงบประมาณ',
        icon: '💰',
        questions: [
          {
            question: 'อะไรทำให้โปรเจกต์ AI แพงหรือถูก?',
            answer: 'ปัจจัยต้นทุน: คุณภาพและความพร้อมของข้อมูล ความซับซ้อนของโมเดล ความต้องการโครงสร้างพื้นฐาน ทักษะทีมที่ต้องการ และขนาดการใช้งาน โปรเจกต์ POC (฿50k-฿150k) ถูกกว่าระบบโปรดักชัน (฿500k+) มากเพราะตรวจสอบความเป็นไปได้ด้วยขอบเขตและข้อมูลจำกัด',
          },
          {
            question: 'ทำไมแนะนำให้เริ่มด้วย POC?',
            answer: 'POC ช่วยลดความเสี่ยงโดยตรวจสอบความเป็นไปได้ทางเทคนิค คุณภาพข้อมูล และมูลค่าทางธุรกิจก่อนลงทุนเต็มรูปแบบ โดยทั่วไปใช้งบ 10-20% ของระบบเต็มรูปแบบ แต่ป้องกันความล้มเหลวที่แพง เราเคยเห็นองค์กรประหยัดเงินหลายล้านโดยค้นพบปัญหาตั้งแต่เนิ่นๆ',
          },
          {
            question: 'ขอใบเสนอราคาแบบตายตัวได้ไหม?',
            answer: 'เราให้ราคาแบบตายตัวสำหรับ Kickstart (฿30k-฿50k) และ POC Lab (฿80k-฿180k) สำหรับ Pilot Launch และ Production Scale ราคาขึ้นอยู่กับขอบเขต ความซับซ้อนของข้อมูล และความต้องการโครงสร้างพื้นฐาน เราจะให้ประมาณการโดยละเอียดหลัง discovery',
          },
          {
            question: 'มีค่าใช้จ่ายต่อเนื่องหลัง deploy หรือไม่?',
            answer: 'มี คาดหวัง: ค่า API/cloud hosting (ขึ้นอยู่กับการใช้งาน), การฝึกโมเดลใหม่ (รายไตรมาสหรือตามต้องการ), การตรวจสอบและบำรุงรักษา และการอัปเดต data pipeline เราให้รายละเอียดต้นทุนที่โปร่งใสและช่วยเพิ่มประสิทธิภาพค่าใช้จ่ายต่อเนื่อง',
          },
        ],
      },
      {
        title: 'ข้อมูลและความเป็นส่วนตัว',
        icon: '🔒',
        questions: [
          {
            question: 'เก็บและจัดเก็บข้อมูลอะไรบ้าง?',
            answer: 'เราเก็บเฉพาะ: ข้อมูลติดต่อ (ชื่อ อีเมล บริษัท), ความต้องการโปรเจกต์ที่คุณแชร์ และข้อมูลเทคนิคสำหรับการให้บริการ เราไม่เก็บข้อมูลส่วนบุคคลที่ละเอียดอ่อนโดยไม่ได้รับความยินยอมอย่างชัดเจน ดูนโยบายความเป็นส่วนตัวสำหรับรายละเอียด',
          },
          {
            question: 'เก็บข้อมูลใน on-premise ได้ไหม?',
            answer: 'ได้ เรารองรับการ deploy แบบ on-premise สำหรับข้อมูลที่ละเอียดอ่อน ต้องการ: โครงสร้างพื้นฐานของคุณเอง (เซิร์ฟเวอร์ GPU, ฐานข้อมูล), VPN หรือการเข้าถึงที่ปลอดภัยสำหรับทีมเราระหว่างพัฒนา และต้นทุนการติดตั้งเพิ่มเติม องค์กรส่วนใหญ่พบว่าการ deploy บน cloud ด้วยการควบคุมความปลอดภัยที่เหมาะสมเพียงพอแล้ว',
          },
          {
            question: 'จัดการข้อมูลธุรกิจที่เป็นความลับอย่างไร?',
            answer: 'เราเซ็น NDA ก่อนแชร์ข้อมูลใดๆ ใช้ช่องทางเข้ารหัสสำหรับการถ่ายโอนทั้งหมด ใช้การควบคุมการเข้าถึงตามบทบาท และทำให้ข้อมูลเป็นแบบนิรนามหรือสังเคราะห์สำหรับกรณีศึกษา (ไม่แชร์ข้อมูลธุรกิจจริงต่อสาธารณะ)',
          },
          {
            question: 'ใช้ข้อมูลของเราฝึกโมเดลของคุณหรือไม่?',
            answer: 'ไม่ ข้อมูลของคุณใช้สำหรับโปรเจกต์ของคุณเท่านั้น เราไม่ใช้ข้อมูลลูกค้าเพื่อปรับปรุงโมเดลทั่วไปของเราหรือแชร์กับลูกค้ารายอื่น โมเดลที่ฝึกด้วยข้อมูลของคุณเป็นทรัพย์สินของคุณ',
          },
        ],
      },
      {
        title: 'ผลลัพธ์และเกณฑ์ความสำเร็จ',
        icon: '📊',
        questions: [
          {
            question: 'วัดความสำเร็จอย่างไร?',
            answer: 'เรากำหนดเมตริกความสำเร็จระหว่าง discovery: KPI ทางธุรกิจ (ประหยัดต้นทุน ลดเวลา ความแม่นยำ), เมตริกทางเทคนิค (ประสิทธิภาพโมเดล เวลาตอบสนอง uptime) และเมตริกการใช้งาน ทุกโปรเจกต์มีเกณฑ์การยอมรับที่ชัดเจนก่อนเริ่ม',
          },
          {
            question: 'ถ้าผลลัพธ์ไม่ตรงตามความคาดหวังล่ะ?',
            answer: 'สำหรับโปรเจกต์ POC: ถ้าเราไม่สามารถแสดงความเป็นไปได้ เราจะอธิบายว่าทำไมและแนะนำทางเลือกหรือหยุดเร็ว สำหรับโปรเจกต์โปรดักชัน: เราจะปรับปรุงจนเกณฑ์การยอมรับได้รับการตอบสนองหรือให้คืนเงินบางส่วนถ้าไม่สามารถส่งมอบได้ (รายละเอียดในสัญญา)',
          },
          {
            question: 'รับประกันระดับความแม่นยำเฉพาะได้ไหม?',
            answer: 'เราให้ประมาณการที่สมจริงตามโปรเจกต์ที่คล้ายกัน แต่ประสิทธิภาพที่แน่นอนขึ้นอยู่กับคุณภาพและปริมาณข้อมูลของคุณ POC ตรวจสอบความเป็นไปได้ก่อนที่จะมุ่งมั่นกับเป้าหมายโปรดักชัน เราจะไม่สัญญาตัวเลขที่ไม่สมจริง',
          },
          {
            question: 'ใช้เวลานานแค่ไหนกว่าจะเห็นมูลค่าทางธุรกิจ?',
            answer: 'Kickstart: ข้อมูลเชิงลึกใน 2-3 สัปดาห์ POC: การตรวจสอบใน 4-8 สัปดาห์ Pilot Launch: MVP พร้อมโปรดักชันใน 2-4 เดือน โปรดักชันเต็มรูปแบบ: 4-6+ เดือน ระยะเวลาจริงขึ้นอยู่กับความพร้อมของข้อมูลและความซับซ้อนขององค์กร',
          },
        ],
      },
      {
        title: 'ระยะเวลาและกระบวนการ',
        icon: '⏱️',
        questions: [
          {
            question: 'ทำไมไม่สามารถสร้างทั้งหมดพร้อมกันได้?',
            answer: 'โปรเจกต์ AI มีความซับซ้อนที่ซ่อนอยู่: ปัญหาคุณภาพข้อมูล ข้อจำกัดทางเทคนิคที่ไม่คาดคิด ความต้องการที่เปลี่ยนแปลง วิธีการแบบเฟส (Kickstart → POC → Pilot → Production) ลดความเสี่ยง ตรวจสอบสมมติฐานตั้งแต่เนิ่นๆ และอนุญาตให้แก้ไขหลักสูตรโดยไม่สิ้นเปลืองงบประมาณ',
          },
          {
            question: 'ระยะเวลาโปรเจกต์ทั่วไปคือเท่าไร?',
            answer: 'Kickstart: 2-3 สัปดาห์ POC Lab: 4-8 สัปดาห์ Pilot Launch: 8-16 สัปดาห์ Production Scale: 16-24+ สัปดาห์ ระยะเวลาขึ้นอยู่กับ: ความพร้อมของข้อมูล ความพร้อมของผู้มีส่วนได้ส่วนเสีย การติดตั้งโครงสร้างพื้นฐาน และความซับซ้อนของขอบเขต',
          },
          {
            question: 'เร่งระยะเวลาได้ไหม?',
            answer: 'อาจจะ ถ้า: ข้อมูลของคุณสะอาดและบันทึกไว้อย่างดี ผู้มีส่วนได้ส่วนเสียพร้อมสำหรับการตัดสินใจอย่างรวดเร็ว โครงสร้างพื้นฐานได้รับการอนุมัติล่วงหน้าและพร้อม และขอบเขตถูกกำหนดอย่างชัดเจน การรีบเร่งเร็วเกินไปเพิ่มความเสี่ยงของความล้มเหลว',
          },
          {
            question: 'จะเกิดอะไรขึ้นหลังจาก deployment?',
            answer: 'เราให้: เอกสารและการฝึกอบรมส่งมอบ การตั้งค่าการตรวจสอบและการแจ้งเตือน ระยะเวลาการบำรุงรักษา (โดยทั่วไป 1-3 เดือน) และสัญญาการสนับสนุนต่อเนื่องเป็นตัวเลือก คุณเป็นเจ้าของโค้ดและโมเดล',
          },
        ],
      },
    ],
  },
};

export default function FAQPage() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const copy = faqs[isThai ? 'th' : 'en'];

  const [openItems, setOpenItems] = useState<Record<string, Record<number, boolean>>>({});

  const toggleQuestion = (categoryTitle: string, questionIndex: number) => {
    setOpenItems(prev => ({
      ...prev,
      [categoryTitle]: {
        ...(prev[categoryTitle] || {}),
        [questionIndex]: !prev[categoryTitle]?.[questionIndex],
      },
    }));
  };

  return (
    <>
      <SeoHead
        title={copy.title}
        description={copy.description}
        url="/faq"
        noindex={false}
      />

      <div className="bg-bg">
        {/* Hero */}
        <MagicHero
          eyebrow="FAQ"
          title={copy.title}
          description={copy.description}
          align="center"
        >
          <Particles quantity={25} staticity={30} ease={50} />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        </MagicHero>

        {/* FAQ Categories */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="space-y-12">
              {copy.categories.map((category, catIndex) => (
                <div key={catIndex} className="scroll-mt-20" id={category.title.toLowerCase().replace(/\s+/g, '-')}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{category.icon}</span>
                    <h2 className="text-2xl font-bold text-text">{category.title}</h2>
                  </div>

                  <div className="space-y-3">
                    {category.questions.map((faq, faqIndex) => {
                      const isOpen = openItems[category.title]?.[faqIndex] || false;

                      return (
                        <Card key={faqIndex} className="border border-hairline bg-surface/80 overflow-hidden">
                          <button
                            onClick={() => toggleQuestion(category.title, faqIndex)}
                            className="w-full text-left"
                            aria-expanded={isOpen}
                          >
                            <CardContent className="p-5">
                              <div className="flex items-start justify-between gap-4">
                                <h3 className="text-lg font-semibold text-text pr-8">{faq.question}</h3>
                                <ChevronDown
                                  className={`h-5 w-5 text-text-muted flex-shrink-0 transition-transform ${
                                    isOpen ? 'rotate-180' : ''
                                  }`}
                                />
                              </div>

                              {isOpen && (
                                <div className="mt-4 pt-4 border-t border-hairline">
                                  <p className="text-text-muted leading-relaxed">{faq.answer}</p>
                                </div>
                              )}
                            </CardContent>
                          </button>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`${SECTION_SPACING.CTA} bg-surface/30`}>
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-text mb-4">
              {isThai ? 'ยังมีคำถาม?' : 'Still have questions?'}
            </h2>
            <p className="text-text-muted mb-8 max-w-2xl mx-auto">
              {isThai
                ? 'พูดคุยกับทีมเราเพื่อรับคำตอบที่เฉพาะเจาะจงสำหรับสถานการณ์ของคุณ'
                : 'Talk to our team to get answers specific to your situation.'}
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
            >
              {isThai ? 'ติดต่อเรา' : 'Contact Us'}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
