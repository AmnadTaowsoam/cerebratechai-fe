'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLocale } from 'next-intl';
import { cn } from '@/lib/utils';
import { FAQSchema } from './PricingSchema';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs: FAQItem[];
  className?: string;
}

export function FAQSection({ title, description, faqs, className }: FAQSectionProps) {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const defaultTitle = isThai ? 'คำถามที่พบบ่อย' : 'Frequently Asked Questions';
  const defaultDescription = isThai
    ? 'คำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับบริการและโซลูชันของเรา'
    : 'Answers to common questions about our services and solutions';

  return (
    <>
      <FAQSchema faqs={faqs} />
      <section className={cn('py-20', className)}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">
              {title || defaultTitle}
            </h2>
            {(description || defaultDescription) && (
              <p className="text-text-muted max-w-2xl mx-auto">
                {description || defaultDescription}
              </p>
            )}
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-hairline rounded-xl bg-surface/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-2 transition-colors"
                >
                  <span className="text-lg font-semibold text-text pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 text-text-muted flex-shrink-0 transition-transform duration-200',
                      openIndex === index && 'transform rotate-180'
                    )}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="text-text-muted leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Predefined FAQ sets for common pages
export const HomeFAQs = {
  en: [
    {
      question: 'What types of AI solutions does Cerebratechai provide?',
      answer: 'We specialize in production-ready AI solutions including LLM & RAG systems, Computer Vision for quality inspection and OCR, Predictive Analytics for forecasting and anomaly detection, and Edge AI for on-device inference. We also provide MLOps and full-stack engineering support.'
    },
    {
      question: 'How long does it typically take to deliver an AI project?',
      answer: 'Project timelines vary based on scope:\n• Kickstart (Discovery): 1-2 weeks\n• POC Lab: 3-6 weeks\n• Pilot Launch: 6-10 weeks\n• Production Scale: 12-24 weeks\n\nWe work in phases with clear deliverables at each stage.'
    },
    {
      question: 'Do you work with SMEs or only large enterprises?',
      answer: 'We specialize in SME and mid-size projects. Our boutique approach allows us to provide personalized attention and production-ready solutions tailored to your specific needs and budget, without the overhead of large consultancies.'
    },
    {
      question: 'What is included in your fixed-price packages?',
      answer: 'All packages include:\n• Expert consultants and data scientists\n• Development and testing\n• Documentation and training\n• Deployment and handover\n\nNo hidden costs. Everything needed to get your AI system into production is included.'
    },
    {
      question: 'Can you integrate AI into our existing systems?',
      answer: 'Yes. We specialize in practical AI integration with existing tech stacks. We assess your current systems during the Discovery phase and design solutions that work with your infrastructure, whether on-premises, cloud, or hybrid.'
    },
    {
      question: 'Do you provide ongoing support after deployment?',
      answer: 'Yes. We offer ongoing support and maintenance packages. This includes monitoring, performance optimization, retraining models as needed, and technical support. Support terms are defined during project scoping.'
    }
  ],
  th: [
    {
      question: 'Cerebratechai ให้บริการโซลูชัน AI ประเภทใดบ้าง?',
      answer: 'เรามีความเชี่ยวชาญใน AI solutions พร้อมใช้งานจริง ได้แก่ ระบบ LLM & RAG, Computer Vision สำหรับตรวจสอบคุณภาพและ OCR, Predictive Analytics สำหรับการพยากรณ์และตรวจจับความผิดปกติ และ Edge AI สำหรับการประมวลผลบนอุปกรณ์ รวมถึงบริการด้าน MLOps และ full-stack engineering'
    },
    {
      question: 'โครงการ AI ใช้เวลาดำเนินการนานแค่ไหน?',
      answer: 'ระยะเวลาโครงการขึ้นอยู่กับขอบเขต:\n• Kickstart (Discovery): 1-2 สัปดาห์\n• POC Lab: 3-6 สัปดาห์\n• Pilot Launch: 6-10 สัปดาห์\n• Production Scale: 12-24 สัปดาห์\n\nเราทำงานเป็นระยะ ๆ พร้อมผลส่งมอบที่ชัดเจนในแต่ละขั้นตอน'
    },
    {
      question: 'รับงานกับ SME หรือองค์กรขนาดใหญ่เท่านั้น?',
      answer: 'เรามีความเชี่ยวชาญใน SME และโครงการขนาดกลาง แนวทางแบบบูติกของเราช่วยให้เราสามารถให้ความใส่ใจเป็นพิเศษและสร้างโซลูชันที่พร้อมใช้งานจริงตามความต้องการและงบประมาณของคุณ โดยไม่มีค่าใช้จ่ายส่วนเกินเหมือนที่ปรึกษาขนาดใหญ่'
    },
    {
      question: 'แพ็กเกจราคาคงที่รวมอะไรบ้าง?',
      answer: 'แพ็กเกจทุกแพ็กเกจรวม:\n• ที่ปรึกษาผู้เชี่ยวชาญและนักวิทยาศาสตร์ข้อมูล\n• การพัฒนาและการทดสอบ\n• เอกสารและการฝึกอบรม\n• การ deploy และ handover\n\nไม่มีค่าใช้จ่ายซ่อนเร้น ทุกอย่างที่จำเป็นเพื่อให้ระบบ AI ของคุณพร้อมใช้งานจริงรวมอยู่ในราคา'
    },
    {
      question: 'สามารถผสานรวม AI เข้ากับระบบเดิมของเราได้หรือไม่?',
      answer: 'ได้ครับ เราเชี่ยวชาญในการผสานรวม AI เข้ากับระบบเทคโนโลยีที่มีอยู่ เราจะประเมินระบบปัจจุบันของคุณในระหว่างขั้นตอน Discovery และออกแบบโซลูชันที่ทำงานร่วมกับโครงสร้างพื้นฐานของคุณ ไม่ว่าจะเป็น on-premises, cloud หรือ hybrid'
    },
    {
      question: 'มีบริการสนับสนุนหลังการติดตั้งหรือไม่?',
      answer: 'มีครับ เรามีแพ็กเกจสนับสนุนและบำรุงรักษาอย่างต่อเนื่อง ซึ่งรวมถึงการติดตาม การปรับปรุงประสิทธิภาพ การฝึกอบรมโมเดลใหม่ตามความจำเป็น และการสนับสนุนทางเทคนิค เงื่อนไขการสนับสนุนจะกำหนดระหว่างการวางแผนโครงการ'
    }
  ]
};

export const PricingFAQs = {
  en: [
    {
      question: 'Why don\'t you show exact prices for all solutions?',
      answer: 'AI projects vary significantly based on data complexity, integration requirements, and scale. We show price ranges and starting points, but provide exact quotes after understanding your specific needs during a Discovery session. This ensures you get accurate pricing without surprises.'
    },
    {
      question: 'What does "fixed price" mean?',
      answer: 'Fixed price means the price we quote is the price you pay—no hourly rates, no scope creep charges, no hidden costs. We define scope clearly upfront and deliver within that budget. If scope changes, we discuss and agree on adjustments before proceeding.'
    },
    {
      question: 'Can I start with a small package and scale up later?',
      answer: 'Absolutely. We recommend starting with Kickstart or POC Lab to validate the approach and business case. You can then scale to Pilot or Production based on results. Each phase builds on the previous work.'
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes. For larger packages (Pilot and Production Scale), we offer milestone-based payment plans. Typical structure: 30% upfront, 40% at mid-project milestone, 30% upon delivery and acceptance.'
    },
    {
      question: 'What happens if the project takes longer than expected?',
      answer: 'Our fixed-price model includes a time buffer for typical challenges. If delays occur due to factors outside our control (e.g., data availability, stakeholder approvals), we discuss timeline adjustments. If delays are on our side, we absorb the cost.'
    },
    {
      question: 'Are there any ongoing costs after project delivery?',
      answer: 'Ongoing costs depend on your deployment:\n• Cloud infrastructure (you own and manage)\n• Optional: Support & maintenance package\n• Optional: Model retraining services\n\nWe make all costs clear during project planning.'
    }
  ],
  th: [
    {
      question: 'ทำไมไม่แสดงราคาที่แน่นอนสำหรับทุกโซลูชัน?',
      answer: 'โครงการ AI แตกต่างกันอย่างมากขึ้นอยู่กับความซับซ้อนของข้อมูล ความต้องการในการผสานรวม และขนาด เราแสดงช่วงราคาและจุดเริ่มต้น แต่จะให้ใบเสนอราคาที่แน่นอนหลังจากเข้าใจความต้องการเฉพาะของคุณในระหว่างเซสชัน Discovery เพื่อให้คุณได้ราคาที่แม่นยำโดยไม่มีสิ่งที่คาดไม่ถึง'
    },
    {
      question: '"ราคาคงที่" หมายความว่าอย่างไร?',
      answer: 'ราคาคงที่หมายความว่าราคาที่เราเสนอคือราคาที่คุณจ่าย—ไม่มีอัตรารายชั่วโมง ไม่มีค่าใช้จ่ายจากการขยายขอบเขต ไม่มีค่าใช้จ่ายซ่อนเร้น เรากำหนดขอบเขตอย่างชัดเจนล่วงหน้าและส่งมอบภายในงบประมาณนั้น หากขอบเขตเปลี่ยนแปลง เราจะหารือและตกลงกันก่อนดำเนินการ'
    },
    {
      question: 'สามารถเริ่มจากแพ็กเกจเล็ก ๆ แล้วขยายทีหลังได้ไหม?',
      answer: 'ได้แน่นอน เราแนะนำให้เริ่มจาก Kickstart หรือ POC Lab เพื่อยืนยันแนวทางและกรณีทางธุรกิจ จากนั้นคุณสามารถขยายไปยัง Pilot หรือ Production ตามผลลัพธ์ แต่ละขั้นตอนสร้างต่อจากงานก่อนหน้า'
    },
    {
      question: 'มีแผนผ่อนชำระหรือไม่?',
      answer: 'มีครับ สำหรับแพ็กเกจขนาดใหญ่ (Pilot และ Production Scale) เรามีแผนชำระเงินตาม milestone โครงสร้างทั่วไป: 30% ล่วงหน้า, 40% ที่ milestone กลางโครงการ, 30% เมื่อส่งมอบและยอมรับ'
    },
    {
      question: 'จะเกิดอะไรขึ้นถ้าโครงการใช้เวลานานกว่าที่คาดไว้?',
      answer: 'โมเดลราคาคงที่ของเรารวมเวลาสำรองสำหรับความท้าทายทั่วไป หากเกิดความล่าช้าเนื่องจากปัจจัยนอกเหนือการควบคุมของเรา (เช่น ความพร้อมของข้อมูล การอนุมัติจากผู้มีส่วนได้ส่วนเสีย) เราจะหารือการปรับปรุงไทม์ไลน์ หากความล่าช้าอยู่ที่เรา เราจะรับภาระค่าใช้จ่าย'
    },
    {
      question: 'มีค่าใช้จ่ายต่อเนื่องหลังการส่งมอบโครงการหรือไม่?',
      answer: 'ค่าใช้จ่ายต่อเนื่องขึ้นอยู่กับการ deploy ของคุณ:\n• โครงสร้างพื้นฐาน cloud (คุณเป็นเจ้าของและจัดการ)\n• ทางเลือก: แพ็กเกจสนับสนุนและบำรุงรักษา\n• ทางเลือก: บริการฝึกอบรมโมเดลใหม่\n\nเราทำให้ค่าใช้จ่ายทั้งหมดชัดเจนระหว่างการวางแผนโครงการ'
    }
  ]
};

export const TrustFAQs = {
  en: [
    {
      question: 'How do you protect sensitive business data?',
      answer: 'We implement multiple layers of protection:\n• TLS 1.3 encryption for all data in transit\n• AES-256 encryption for data at rest\n• Access controls following least-privilege principles\n• Regular security audits and vulnerability scans\n• Data residency in Thailand when required'
    },
    {
      question: 'Are you PDPA compliant?',
      answer: 'Yes. We comply with Thailand\'s Personal Data Protection Act (PDPA). Our practices include obtaining consent, implementing data subject rights (access, rectify, erase, portability), maintaining audit logs, and having incident response procedures that include notification within 72 hours when required.'
    },
    {
      question: 'Can we keep our data on-premises?',
      answer: 'Yes. We support hybrid and on-premises deployments. For sensitive data, we can build AI systems that run entirely on your infrastructure while we handle development, testing, and deployment using synthetic or anonymized data.'
    },
    {
      question: 'How do you handle data after project completion?',
      answer: 'Upon project completion:\n• Training data is either returned to you or securely deleted per agreement\n• We retain only anonymized metadata for model performance tracking (with your permission)\n• All project documentation and code is handed over to you\n• We provide a data destruction certificate if requested'
    },
    {
      question: 'What happens if there\'s a security incident?',
      answer: 'We have a tested incident response plan:\n1. Immediate containment and assessment\n2. Notification to affected parties within 72 hours (per PDPA)\n3. Root cause analysis and remediation\n4. Post-incident report with lessons learned and preventive measures\n5. 24/7 response team for critical incidents'
    },
    {
      question: 'Can you sign NDAs and security agreements?',
      answer: 'Yes. We routinely sign NDAs, Data Processing Agreements (DPA), and security addendums. We can work with your legal team to meet your organization\'s security and compliance requirements.'
    }
  ],
  th: [
    {
      question: 'คุ้มครองข้อมูลธุรกิจที่ละเอียดอ่อนอย่างไร?',
      answer: 'เราใช้การป้องกันหลายชั้น:\n• เข้ารหัส TLS 1.3 สำหรับข้อมูลทั้งหมดระหว่างส่ง\n• เข้ารหัส AES-256 สำหรับข้อมูลที่จัดเก็บ\n• ควบคุมการเข้าถึงตามหลัก least-privilege\n• ตรวจสอบความปลอดภัยและสแกนช่องโหว่เป็นประจำ\n• จัดเก็บข้อมูลในประเทศไทยเมื่อต้องการ'
    },
    {
      question: 'ปฏิบัติตาม PDPA หรือไม่?',
      answer: 'ใช่ครับ เราปฏิบัติตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล (PDPA) ของไทย แนวปฏิบัติของเรารวมถึงการขอความยินยอม การใช้สิทธิ์ของเจ้าของข้อมูล (เข้าถึง แก้ไข ลบ ถ่ายโอน) การรักษา audit logs และมีขั้นตอนการตอบสนองต่อเหตุการณ์ที่รวมถึงการแจ้งเตือนภายใน 72 ชั่วโมงเมื่อต้องการ'
    },
    {
      question: 'สามารถเก็บข้อมูลไว้ที่ on-premises ได้ไหม?',
      answer: 'ได้ครับ เรารองรับการ deploy แบบ hybrid และ on-premises สำหรับข้อมูลที่ละเอียดอ่อน เราสามารถสร้างระบบ AI ที่ทำงานทั้งหมดบนโครงสร้างพื้นฐานของคุณ ในขณะที่เราจัดการการพัฒนา การทดสอบ และการ deploy โดยใช้ข้อมูลสังเคราะห์หรือข้อมูลที่ไม่ระบุตัวตน'
    },
    {
      question: 'จัดการข้อมูลอย่างไรหลังโครงการเสร็จสิ้น?',
      answer: 'เมื่อโครงการเสร็จสิ้น:\n• ข้อมูลการฝึกอบรมจะถูกส่งคืนให้คุณหรือลบอย่างปลอดภัยตามข้อตกลง\n• เราเก็บเฉพาะข้อมูลเมตาที่ไม่ระบุตัวตนเพื่อติดตามประสิทธิภาพโมเดล (ด้วยการอนุญาตของคุณ)\n• เอกสารและโค้ดโครงการทั้งหมดจะถูกส่งมอบให้คุณ\n• เราให้ใบรับรองการทำลายข้อมูลหากต้องการ'
    },
    {
      question: 'จะเกิดอะไรขึ้นถ้ามีเหตุการณ์ด้านความปลอดภัย?',
      answer: 'เรามีแผนรับมือเหตุการณ์ที่ได้รับการทดสอบ:\n1. การควบคุมและประเมินทันที\n2. แจ้งเตือนผู้ที่ได้รับผลกระทบภายใน 72 ชั่วโมง (ตาม PDPA)\n3. วิเคราะห์สาเหตุหลักและแก้ไข\n4. รายงานหลังเหตุการณ์พร้อมบทเรียนและมาตรการป้องกัน\n5. ทีมตอบสนอง 24/7 สำหรับเหตุการณ์ร้ายแรง'
    },
    {
      question: 'สามารถลงนาม NDA และข้อตกลงด้านความปลอดภัยได้ไหม?',
      answer: 'ได้ครับ เราลงนาม NDA, Data Processing Agreements (DPA) และ security addendums เป็นประจำ เราสามารถทำงานร่วมกับทีมกฎหมายของคุณเพื่อตอบสนองความต้องการด้านความปลอดภัยและการปฏิบัติตามข้อกำหนดขององค์กรของคุณ'
    }
  ]
};
