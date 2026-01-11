'use client';

import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { SeoHead } from '@/components/seo';
import TLDRBlock from '@/components/TLDRBlock';

const content = {
  en: {
    title: 'PDPA Notice',
    description:
      'This PDPA notice explains how CerebraTechAI complies with the Personal Data Protection Act (Thailand) when processing personal data.',
    updated: 'Updated 6 Oct 2025',
    tldr: 'We process personal data under PDPA with lawful bases (consent, contract, legitimate interest). You have rights to access, correct, delete, and object. Contact privacy@cerebratechai.com to exercise rights or file complaints with PDPC.',
    sections: [
      {
        heading: '1. Data Controller',
        body: [
          'CerebraTechAI acts as the data controller for personal data collected through this website and related services.',
          'Contact privacy@cerebratechai.com for PDPA enquiries.',
        ],
      },
      {
        heading: '2. Lawful Bases',
        body: [
          'Consent for optional marketing updates and knowledge resources.',
          'Contractual necessity for delivering requested services or proposals.',
          'Legitimate interests to improve our offerings while balancing your rights and expectations.',
        ],
      },
      {
        heading: '3. Data Subject Rights',
        body: [
          'Right to access and obtain a copy of personal data we hold about you.',
          'Right to request correction, deletion, or restriction of processing.',
          'Right to object to certain processing activities and withdraw consent.',
        ],
      },
      {
        heading: '4. Cross-border Transfers',
        body: [
          'Where data is transferred outside Thailand, we use providers with appropriate safeguards such as contractual clauses or certified frameworks.',
        ],
      },
      {
        heading: '5. Contacting the Regulator',
        body: [
          'If you believe your PDPA rights have been infringed, you may lodge a complaint with the Office of the Personal Data Protection Committee (PDPC).',
        ],
      },
    ],
  },
  th: {
    title: 'ประกาศความเป็นส่วนตัวตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562',
    description:
      'ประกาศฉบับนี้อธิบายวิธีที่ CerebraTechAI ปฏิบัติตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) อย่างครบถ้วน',
    updated: 'ปรับปรุงล่าสุด 18 ต.ค. 2025 | มีผลบังคับใช้ทันที',
    tldr: 'เราประมวลผลข้อมูลตาม PDPA โดยมีฐานทางกฎหมาย (ความยินยอม สัญญา ผลประโยชน์โดยชอบธรรม) คุณมีสิทธิเข้าถึง แก้ไข ลบ และคัดค้าน ติดต่อ privacy@cerebratechai.com เพื่อใช้สิทธิหรือร้องเรียนต่อ สคส.',
    sections: [
      {
        heading: '1. ผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller)',
        body: [
          'ชื่อผู้ควบคุม: CerebraTechAI',
          'ประเภทกิจการ: บุคคลธรรมดา ประกอบธุรกิจพัฒนา AI และซอฟต์แวร์',
          'ที่อยู่: กรุงเทพมหานคร ประเทศไทย',
          'ติดต่อเจ้าหน้าที่คุ้มครองข้อมูล: privacy@cerebratechai.com | โทร: 085-662-1113',
          '* เนื่องจากเป็นธุรกิจขนาดเล็ก ยังไม่มีเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO) แยกเฉพาะ ติดต่อได้ที่อีเมลข้างต้น',
        ],
      },
      {
        heading: '2. ข้อมูลส่วนบุคคลที่เก็บรวบรวม',
        body: [
          'ข้อมูลระบุตัวตน: ชื่อ-นามสกุล อีเมล เบอร์โทรศัพท์ ชื่อบริษัท ตำแหน่งงาน',
          'ข้อมูลเทคนิค: IP Address, Browser, Device type, Operating system',
          'ข้อมูลพฤติกรรม: หน้าเว็บที่เข้าชม เวลาที่ใช้ การคลิก',
          'Cookies: Session cookies, Analytics cookies (Google Analytics)',
          '* เราไม่เก็บข้อมูลอ่อนไหว (Sensitive Personal Data) ตามมาตรา 26 เช่น ศาสนา เชื้อชาติ ข้อมูลสุขภาพ',
        ],
      },
      {
        heading: '3. วัตถุประสงค์และฐานทางกฎหมาย (Legal Basis)',
        body: [
          'ฐานความยินยอม (Consent - มาตรา 19): รับข่าวสาร Newsletter การตลาด',
          'ฐานสัญญา (Contract - มาตรา 24(1)): จัดทำใบเสนอราคา ส่งมอบบริการ',
          'ฐานผลประโยชน์โดยชอบธรรม (Legitimate Interest - มาตรา 24(5)): ปรับปรุงเว็บไซต์ ป้องกันฉ้อโกง',
          'ฐานหน้าที่ตามกฎหมาย (Legal Obligation - มาตรา 24(3)): เก็บบันทึกเพื่อการตรวจสอบ',
          '* คุณสามารถถอนความยินยอมได้ตลอดเวลา โดยไม่กระทบความชอบด้วยกฎหมายของการประมวลผลก่อนหน้า',
        ],
      },
      {
        heading: '4. การเปิดเผยและแบ่งปันข้อมูล',
        body: [
          'เราไม่ขาย (Sell) หรือให้เช่า (Rent) ข้อมูลของคุณแก่บุคคลที่สาม',
          'อาจแบ่งปันกับผู้ประมวลผลข้อมูล (Data Processor): Cloud providers (AWS, GCP), Email service (SendGrid), Analytics (Google)',
          'ผู้รับข้อมูลทุกรายผูกพันด้วยสัญญาคุ้มครองข้อมูลตามมาตรา 25',
          '* ในกรณีฉุกเฉินหรือคำสั่งศาล อาจเปิดเผยข้อมูลได้โดยไม่ต้องขอความยินยอม (มาตรา 24(4))',
        ],
      },
      {
        heading: '5. การโอนข้อมูลไปต่างประเทศ (Cross-border Transfer)',
        body: [
          'อาจโอนข้อมูลไปยัง: สหรัฐอเมริกา สหภาพยุโรป สิงคโปร์ (Data centers ของ AWS, Google)',
          'มาตรการคุ้มครอง: Standard Contractual Clauses (SCCs), Binding Corporate Rules',
          'คุณมีสิทธิคัดค้านการโอนข้อมูลตามมาตรา 28 แต่อาจส่งผลให้ไม่สามารถให้บริการได้',
          '* กรณีมีข้อกังวลเรื่องความปลอดภัย สามารถขอให้เก็บข้อมูลเฉพาะในประเทศไทยได้ (แต่อาจมีค่าใช้จ่ายเพิ่ม)',
        ],
      },
      {
        heading: '6. ระยะเวลาเก็บรักษาข้อมูล (Retention Period)',
        body: [
          'ข้อมูลการติดต่อ (Leads): 3 ปี นับจากการติดต่อครั้งสุดท้าย',
          'ข้อมูลสัญญา (Contracts): 10 ปี ตามประมวลกฎหมายแพ่งและพาณิชย์ มาตรา 193/30',
          'บันทึกทางบัญชี: 5 ปี ตามประมวลรัษฎากร',
          'Cookies: 2 ปี หรือจนกว่าจะลบ/ล้าง browser',
          'หลังพ้นกำหนด: จะลบ ทำลาย หรือทำให้ไม่สามารถระบุตัวตนได้ (Anonymization) ภายใน 90 วัน',
        ],
      },
      {
        heading: '7. สิทธิของเจ้าของข้อมูล (มาตรา 30-39)',
        body: [
          '1) สิทธิเข้าถึง (Right to Access): ขอดูและรับสำเนาข้อมูล',
          '2) สิทธิแก้ไข (Right to Rectification): แก้ไขข้อมูลที่ไม่ถูกต้อง',
          '3) สิทธิลบ (Right to Erasure): ขอลบข้อมูล เว้นแต่มีเหตุผลตามกฎหมาย',
          '4) สิทธิระงับ (Right to Restriction): ระงับการใช้ชั่วคราว',
          '5) สิทธิคัดค้าน (Right to Object): คัดค้านการประมวลผล',
          '6) สิทธิโอนย้าย (Right to Portability): ขอข้อมูลในรูปแบบ machine-readable',
          '7) สิทธิถอนความยินยอม: ถอนได้ทุกเมื่อโดยไม่ส่งผลย้อนหลัง',
          'ใช้สิทธิโดย: ส่งคำขอมาที่ privacy@cerebratechai.com (ตอบภายใน 30 วัน)',
        ],
      },
      {
        heading: '8. มาตรการรักษาความมั่นคงปลอดภัย (มาตรา 37)',
        body: [
          'มาตรการทางเทคนิค: SSL/TLS encryption, Secure database, Regular backups',
          'มาตรการทางบริหาร: Access control, Password policy, Employee training',
          'มาตรการทางกายภาพ: Secure server location, Limited physical access',
          '* แม้จะใช้ความพยายามอย่างดี ไม่มีระบบใดที่ปลอดภัย 100% คุณควรป้องกันข้อมูลเข้าถึงบัญชีด้วยตนเอง',
        ],
      },
      {
        heading: '9. การแจ้งเหตุละเมิดข้อมูล (Data Breach Notification - มาตรา 37)',
        body: [
          'หากเกิดการละเมิดข้อมูลส่วนบุคคล (Data Breach):',
          'เราจะแจ้ง สำนักงาน สคส. ภายใน 72 ชั่วโมง',
          'และแจ้งเจ้าของข้อมูลที่ได้รับผลกระทบโดยไม่ชักช้า (หากมีความเสี่ยงสูง)',
          'วิธีแจ้ง: อีเมล SMS หรือประกาศบนเว็บไซต์',
        ],
      },
      {
        heading: '10. สิทธิร้องเรียน (Right to Lodge a Complaint)',
        body: [
          'หากเห็นว่าสิทธิของคุณถูกละเมิด กรุณาติดต่อเราก่อน: privacy@cerebratechai.com',
          'หากไม่พอใจผลการแก้ไข สามารถร้องเรียนต่อ:',
          'สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.)',
          'เว็บไซต์: https://www.pdpc.or.th',
          'โทร: 02-142-1033',
          'อีเมล: pdpc@mdes.go.th',
        ],
      },
      {
        heading: '11. การเปลี่ยนแปลงประกาศนี้',
        body: [
          'เราอาจปรับปรุงประกาศนี้เพื่อให้สอดคล้องกับกฎหมายและการดำเนินธุรกิจ',
          'จะแจ้งให้ทราบล่วงหน้า 30 วัน ผ่านเว็บไซต์และอีเมล',
          'เวอร์ชันปัจจุบัน: v2.0 (18 ต.ค. 2025)',
          'การใช้งานต่อหลังแก้ไขถือว่ายอมรับเงื่อนไขใหม่',
        ],
      },
    ],
  },
};

type PdpaPageProps = {
  params: { locale: string };
};

export default function PdpaPage({ params }: PdpaPageProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';
  const copy = content[locale];

  return (
    <>
      <SeoHead
        title={isThai ? 'PDPA Notice - CerebraTechAI' : 'PDPA Notice - CerebraTechAI'}
        description={isThai 
          ? 'ประกาศ PDPA ของ CerebraTechAI เกี่ยวกับการปฏิบัติตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล'
          : 'CerebraTechAI PDPA notice on compliance with Personal Data Protection Act (Thailand).'
        }
        keywords={isThai 
          ? ['PDPA', 'พรบ. คุ้มครองข้อมูลส่วนบุคคล', 'ข้อมูลส่วนบุคคล', 'Privacy']
          : ['PDPA', 'Personal Data Protection Act', 'Thailand Privacy Law', 'Data Protection']
        }
        url="/legal/pdpa"
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
      <section className="py-8">
        <div className="container mx-auto px-6">
          <TLDRBlock summary={copy.tldr} locale={locale} />
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
