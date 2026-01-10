'use client';

import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { SeoHead } from '@/components/seo';

const content = {
  en: {
    title: 'Privacy Policy',
    description:
      'Learn how CerebraTechAI collects, uses, and protects personal data shared through our website, forms, and delivery engagements.',
    updated: 'Updated 6 Oct 2025',
    sections: [
      {
        heading: '1. Data We Collect',
        body: [
          'Contact details that you submit via forms, email, or chat including name, company, email address, and phone number.',
          'Project context and requirements that you share during discovery workshops or consultations.',
          'Analytics signals (page views, device information, and performance events) collected via first-party tooling for service improvement.',
        ],
      },
      {
        heading: '2. Why We Use Your Data',
        body: [
          'To respond to enquiries, prepare proposals, and deliver agreed services.',
          'To improve the performance, security, and usability of our products and websites.',
          'To meet legal obligations including incident reporting or regulatory requests.',
        ],
      },
      {
        heading: '3. Data Sharing',
        body: [
          'We do not sell personal data.',
          'We share data with infrastructure and analytics providers strictly for hosting, monitoring, and operational continuity.',
          'Access is limited to personnel and partners who require the information to perform service-related duties and are bound by confidentiality obligations.',
        ],
      },
      {
        heading: '4. Retention and Protection',
        body: [
          'Operational records are retained for as long as needed to deliver services or comply with legal requirements.',
          'We apply role-based access, encryption in transit, and secure storage aligned with our security standards.',
          'You may request deletion or updates by contacting privacy@cerebratechai.com.',
        ],
      },
      {
        heading: '5. Your Choices',
        body: [
          'Opt out of marketing communications by using the unsubscribe link in an email or contacting us directly.',
          'Request access to the information we hold about you and ask for corrections.',
          'Withdraw consent for optional data processing activities at any time.',
        ],
      },
    ],
  },
  th: {
    title: 'นโยบายความเป็นส่วนตัว',
    description:
      'อธิบายวิธีที่ CerebraTechAI เก็บ ใช้ และปกป้องข้อมูลส่วนบุคคลตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562',
    updated: 'ปรับปรุงล่าสุด 18 ต.ค. 2025',
    sections: [
      {
        heading: '1. ข้อมูลเกี่ยวกับผู้ควบคุมข้อมูลส่วนบุคคล',
        body: [
          'ชื่อ: CerebraTechAI (ดำเนินธุรกิจโดยบุคคลธรรมดา)',
          'ที่อยู่: กรุงเทพมหานคร ประเทศไทย',
          'อีเมลติดต่อ: privacy@cerebratechai.com | โทร: 085-662-1113',
          '* หมายเหตุ: เนื่องจากเป็นธุรกิจที่ยังไม่จดทะเบียนเป็นนิติบุคคล ความรับผิดตามกฎหมายจึงตกอยู่กับเจ้าของกิจการ ลูกค้าควรพิจารณาความเสี่ยงนี้ก่อนเปิดเผยข้อมูลที่มีความอ่อนไหว',
        ],
      },
      {
        heading: '2. ข้อมูลที่เราเก็บรวบรวม',
        body: [
          'ข้อมูลส่วนบุคคลทั่วไป: ชื่อ-นามสกุล อีเมล หมายเลขโทรศัพท์ ชื่อบริษัท ตำแหน่งงาน',
          'ข้อมูลทางเทคนิค: IP address, Browser type, Device information, Cookies',
          'ข้อมูลการใช้งาน: หน้าที่เข้าชม เวลาที่ใช้บนเว็บไซต์ การคลิกลิงก์',
          '* เราไม่เก็บข้อมูลอ่อนไหว (Sensitive Data) เช่น ศาสนา เชื้อชาติ ข้อมูลสุขภาพ หรือข้อมูลทางการเงิน หากต้องเก็บจะขอความยินยอมแยกเป็นพิเศษ',
        ],
      },
      {
        heading: '3. วัตถุประสงค์และฐานกฎหมายในการประมวลผล',
        body: [
          'ความยินยอม: การรับข่าวสาร การตลาด (สามารถถอนได้ตลอดเวลา)',
          'สัญญา: การให้บริการที่คุณร้องขอ การส่งใบเสนอราคา',
          'ผลประโยชน์โดยชอบธรรม: การปรับปรุงเว็บไซต์ การป้องกันการฉ้อโกง การรักษาความปลอดภัย',
          'หน้าที่ตามกฎหมาย: การเก็บบันทึกเพื่อการตรวจสอบ การปฏิบัติตามคำสั่งศาล',
          '* ในกรณีมีข้อโต้แย้งเกี่ยวกับฐานกฎหมาย คุณมีสิทธิยื่นคำร้องต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.)',
        ],
      },
      {
        heading: '4. การเปิดเผยและโอนข้อมูล',
        body: [
          'เราไม่ขายข้อมูลของคุณให้กับบุคคลที่สาม',
          'อาจแบ่งปันกับ: ผู้ให้บริการ Cloud hosting (เช่น AWS, Google Cloud), Email service (SendGrid), Analytics (Google Analytics)',
          'การโอนข้อมูลไปต่างประเทศ: อาจส่งข้อมูลไปยัง Data center ในสหรัฐอเมริกา สหภาพยุโรป ที่มีมาตรฐานคุ้มครองข้อมูลเทียบเท่า',
          '* คุณมีสิทธิคัดค้านการโอนข้อมูลไปต่างประเทศ แต่อาจส่งผลให้เราไม่สามารถให้บริการบางอย่างได้',
        ],
      },
      {
        heading: '5. ระยะเวลาการเก็บรักษา',
        body: [
          'ข้อมูลการติดต่อ: 3 ปี นับจากการติดต่อครั้งสุดท้าย',
          'ข้อมูลสัญญาและใบเสนอราคา: 5 ปี ตามประมวลกฎหมายแพ่งและพาณิชย์',
          'Cookies และ Analytics: 2 ปี หรือจนกว่าคุณจะลบ',
          'หลังพ้นระยะเวลา: เราจะลบหรือทำให้ไม่สามารถระบุตัวตนได้ ยกเว้นกรณีที่กฎหมายกำหนดให้เก็บต่อ',
        ],
      },
      {
        heading: '6. สิทธิของเจ้าของข้อมูล (ตาม PDPA มาตรา 30-39)',
        body: [
          'สิทธิขอเข้าถึงและขอรับสำเนาข้อมูล',
          'สิทธิขอแก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่สมบูรณ์',
          'สิทธิขอลบหรือทำลายข้อมูล (Right to Erasure)',
          'สิทธิขอระงับการใช้ข้อมูล (Right to Restriction)',
          'สิทธิคัดค้านการประมวลผล',
          'สิทธิขอรับข้อมูลในรูปแบบที่สามารถอ่านได้ด้วยเครื่อง (Data Portability)',
          'สิทธิถอนความยินยอมเมื่อใดก็ได้ โดยไม่ส่งผลย้อนหลัง',
          'ติดต่อใช้สิทธิ: privacy@cerebratechai.com (ตอบกลับภายใน 30 วัน)',
        ],
      },
      {
        heading: '7. มาตรการรักษาความมั่นคงปลอดภัย',
        body: [
          'เข้ารหัสข้อมูลขณะส่ง (SSL/TLS)',
          'จำกัดการเข้าถึงโดยใช้ Role-based Access Control',
          'สำรองข้อมูลอย่างสม่ำเสมอ',
          '* อย่างไรก็ตาม ไม่มีระบบใดที่ปลอดภัย 100% หากเกิดเหตุการณ์รั่วไหลของข้อมูล เราจะแจ้งให้คุณและ สคส. ทราบภายใน 72 ชั่วโมง',
        ],
      },
      {
        heading: '8. การร้องเรียนและช่องทางแก้ไขปัญหา',
        body: [
          'หากคุณเห็นว่าสิทธิของคุณถูกละเมิด กรุณาติดต่อ: privacy@cerebratechai.com',
          'หากไม่พอใจผลการแก้ไข คุณสามารถร้องเรียนต่อ สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.)',
          'เว็บไซต์ สคส.: https://www.pdpc.or.th | โทร: 02-142-1033',
        ],
      },
    ],
  },
};

type PrivacyPageProps = {
  params: { locale: string };
};

export default function PrivacyPolicyPage({ params }: PrivacyPageProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';
  const copy = content[locale];

  return (
    <>
      <SeoHead
        title={isThai ? 'นโยบายความเป็นส่วนตัว - CerebraTechAI' : 'Privacy Policy - CerebraTechAI'}
        description={isThai 
          ? 'นโยบายความเป็นส่วนตัวของ CerebraTechAI เกี่ยวกับการเก็บรวบรวม ใช้ และปกป้องข้อมูลส่วนบุคคล'
          : 'CerebraTechAI privacy policy on how we collect, use, and protect personal data.'
        }
        keywords={isThai 
          ? ['นโยบายความเป็นส่วนตัว', 'Privacy Policy', 'PDPA', 'ข้อมูลส่วนบุคคล']
          : ['Privacy Policy', 'PDPA', 'Personal Data', 'Data Protection']
        }
        url="/legal/privacy"
        noindex={false}
      />
      
      <div className="bg-bg">
      <section className="border-b border-hairline bg-surface py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-text md:text-4xl">{copy.title}</h1>
          <p className="mt-3 max-w-3xl text-text-muted">{copy.description}</p>
          <p className="mt-4 text-sm text-text-muted">{copy.updated}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-10 text-text">
            {copy.sections.map((section) => (
              <article key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-semibold">{section.heading}</h2>
                <ul className="space-y-2 text-sm text-text-muted">
                  {section.body.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
