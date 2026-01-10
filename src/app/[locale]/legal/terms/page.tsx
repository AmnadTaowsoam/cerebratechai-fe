'use client';

import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { SeoHead } from '@/components/seo';

const content = {
  en: {
    title: 'Terms of Service',
    description:
      'These terms describe how CerebraTechAI delivers projects, the responsibilities of each party, and the limits of our obligations.',
    updated: 'Updated 6 Oct 2025',
    sections: [
      {
        heading: '1. Engagement Scope',
        body: [
          'Services are provided according to written statements of work or proposals accepted by both parties.',
          'Changes to scope, timeline, or deliverables must be agreed in writing and may require updated fees.',
        ],
      },
      {
        heading: '2. Client Responsibilities',
        body: [
          'Provide timely access to stakeholders, environments, and information necessary for delivery.',
          'Ensure supplied data and materials do not infringe third-party rights and comply with applicable laws.',
        ],
      },
      {
        heading: '3. Fees and Payment',
        body: [
          'Invoices are payable within the terms specified in the statement of work.',
          'Late payments may pause delivery until outstanding amounts are settled.',
        ],
      },
      {
        heading: '4. Intellectual Property',
        body: [
          'Custom assets created for the engagement are transferred to the client upon full payment unless otherwise agreed.',
          'CerebraTechAI retains ownership of pre-existing frameworks, accelerators, and tools used during delivery.',
        ],
      },
      {
        heading: '5. Confidentiality',
        body: [
          'Both parties agree to protect confidential information and use it solely for the purpose of the engagement.',
          'Confidentiality obligations survive termination as defined in any non-disclosure agreement.',
        ],
      },
      {
        heading: '6. Limitation of Liability',
        body: [
          'CerebraTechAI is not liable for indirect, incidental, or consequential damages.',
          'Total liability is capped at the amounts paid for the services that gave rise to the claim.',
        ],
      },
      {
        heading: '7. Governing Law',
        body: [
          'Unless agreed otherwise, these terms are governed by the laws of Thailand and disputes will be resolved in Bangkok courts.',
        ],
      },
    ],
  },
  th: {
    title: 'เงื่อนไขการให้บริการ',
    description:
      'เงื่อนไขนี้กำหนดสิทธิและหน้าที่ของทั้งสองฝ่ายตามประมวลกฎหมายแพ่งและพาณิชย์และกฎหมายไทยที่เกี่ยวข้อง',
    updated: 'ปรับปรุงล่าสุด 18 ต.ค. 2025',
    sections: [
      {
        heading: '1. การยอมรับเงื่อนไข',
        body: [
          'การใช้งานเว็บไซต์หรือติดต่อขอรับบริการถือว่าคุณยอมรับเงื่อนไขนี้',
          'หากไม่ยอมรับ กรุณาหยุดใช้งานทันที',
          '* กรุณาอ่านอย่างละเอียดก่อนยอมรับ หากมีข้อสงสัยติดต่อ hello@cerebratechai.com',
        ],
      },
      {
        heading: '2. รูปแบบธุรกิจและข้อจำกัด',
        body: [
          'CerebraTechAI ดำเนินการโดยบุคคลธรรมดา ยังไม่จดทะเบียนเป็นบริษัทจำกัด',
          '* สำหรับโครงการขนาดใหญ่ (มูลค่าเกิน ฿500,000) แนะนำให้ทำสัญญาแยกและพิจารณาหลักประกัน',
          '* ขอบเขตบริการ: เน้นโครงการขนาดเล็กถึงกลาง (Proof of Concept, Small Pilot) เท่านั้น',
          'สำหรับโครงการ Production ขนาดใหญ่ ควรหาผู้ให้บริการที่จดทะเบียนบริษัทและมีทุนจดทะเบียนเพียงพอ',
        ],
      },
      {
        heading: '3. ขอบเขตการว่าจ้างและการเปลี่ยนแปลง',
        body: [
          'การให้บริการอ้างอิงตามใบเสนอราคา (Quotation) หรือ Statement of Work (SOW) ที่ทั้งสองฝ่ายลงนามยอมรับ',
          'การเปลี่ยนแปลงขอบเขตงานต้องทำเป็นลายลักษณ์อักษร (Change Request) และอาจมีค่าใช้จ่ายเพิ่มเติม',
          'ระยะเวลาส่งมอบ: ระบุใน SOW หากล่าช้าเกิน 30 วันโดยไม่แจ้งล่วงหน้า ลูกค้ามีสิทธิยกเลิกสัญญาและขอคืนเงิน',
          '* ในกรณีมีข้อพิพาทเรื่องขอบเขตงาน ให้อ้างอิง SOW ฉบับล่าสุดที่ทั้งสองฝ่ายลงนาม',
        ],
      },
      {
        heading: '4. ความรับผิดชอบของลูกค้า',
        body: [
          'จัดหาข้อมูล สภาพแวดล้อม และผู้มีส่วนเกี่ยวข้องที่จำเป็นต่อการทำงาน',
          'ตรวจสอบว่าข้อมูลที่ให้มาไม่ละเมิดลิขสิทธิ์หรือสิทธิของบุคคลที่สาม',
          'รับผิดชอบค่าใช้จ่ายภายนอก เช่น Cloud service, API credits ที่เกิดจากการใช้งานจริง',
          '* หากลูกค้าให้ข้อมูลไม่ครบหรือล่าช้า ทำให้ส่งมอบงานล่าช้า CerebraTechAI ไม่รับผิดชอบ',
        ],
      },
      {
        heading: '5. ค่าบริการและเงื่อนไขการชำระเงิน',
        body: [
          'ราคาเป็นไปตามใบเสนอราคา อาจแบ่งชำระเป็นงวดตามความตกลง',
          'ชำระผ่าน: โอนเงินธนาคาร (ไม่รับเงินสด ไม่รับบัตรเครดิต)',
          'ออกใบเสร็จรับเงินสามัญ (ไม่ใช่ใบกำกับภาษี เนื่องจากไม่ได้จดทะเบียนภาษีมูลค่าเพิ่ม)',
          'หากชำระล่าช้าเกิน 15 วัน: มีค่าปรับ 1.25% ต่อเดือน และอาจระงับการทำงานจนกว่าจะชำระครบ',
          '* กรณีมีข้อพิพาทเรื่องค่าบริการ ให้อ้างอิงใบเสนอราคาและหลักฐานการชำระเงิน',
        ],
      },
      {
        heading: '6. ทรัพย์สินทางปัญญาและลิขสิทธิ์',
        body: [
          'ผลงานที่พัฒนาเฉพาะสำหรับโครงการ (Custom Development): โอนลิขสิทธิ์ให้ลูกค้าหลังชำระเงินครบ',
          'เครื่องมือ Framework และ Code ที่มีอยู่ก่อน: CerebraTechAI ยังคงเป็นเจ้าของ ลูกค้าได้เพียง License ใช้งาน',
          'Open-source components: อยู่ภายใต้ License ของ Library นั้นๆ',
          '* หากต้องการ Exclusive ownership ครบทุกส่วน กรุณาระบุในสัญญาและอาจมีค่าใช้จ่ายเพิ่ม',
        ],
      },
      {
        heading: '7. การจำกัดความรับผิด (Limitation of Liability)',
        body: [
          'ไม่รับผิดต่อความเสียหายทางอ้อม ความเสียหายที่คาดไม่ถึง หรือกำไรที่สูญเสีย',
          'ความรับผิดสูงสุดไม่เกิน: ค่าบริการที่ลูกค้าจ่ายจริงสำหรับงานนั้นๆ',
          'ไม่รับประกันว่าระบบจะทำงาน 100% หรือปราศจากข้อผิดพลาด',
          'ไม่รับผิดชอบต่อความเสียหายจากการใช้งานผิดวิธี การแก้ไขโค้ดโดยไม่ได้รับอนุญาต หรือ Force majeure',
          '* ข้อจำกัดนี้สอดคล้องกับประมวลกฎหมายแพ่งและพาณิชย์ มาตรา 222 และ 223',
        ],
      },
      {
        heading: '8. การยกเลิกและคืนเงิน',
        body: [
          'ลูกค้ามีสิทธิยกเลิกภายใน 7 วันหลังชำระเงินงวดแรก หากยังไม่เริ่มทำงาน (คืนเงิน 100% หักค่าดำเนินการ ฿500)',
          'หากเริ่มทำงานแล้ว: คืนเงินตามสัดส่วนงานที่ยังไม่ได้ทำ',
          'CerebraTechAI สงวนสิทธิ์ยกเลิกสัญญาหากลูกค้าผิดนัดชำระเงิน หรือละเมิดเงื่อนไข โดยแจ้งล่วงหน้า 15 วัน',
        ],
      },
      {
        heading: '9. การระงับข้อพิพาท',
        body: [
          'ขั้นที่ 1: เจรจากันโดยตรงผ่านอีเมล (ภายใน 15 วัน)',
          'ขั้นที่ 2: ไกล่เกลี่ยโดยบุคคลที่สามที่ทั้งสองฝ่ายตกลง (ภายใน 30 วัน)',
          'ขั้นที่ 3: ฟ้องร้องต่อศาลแพ่งกรุงเทพมหานคร หรือ ศาลแขวงที่มีเขตอำนาจ',
          '* สำหรับโครงการมูลค่าต่ำกว่า ฿300,000 อาจใช้ศาลแขวง (มาตรา 6 แห่ง พ.ร.บ. จัดตั้งศาลแขวงฯ)',
        ],
      },
      {
        heading: '10. กฎหมายที่ใช้บังคับและเขตอำนาจศาล',
        body: [
          'สัญญานี้อยู่ภายใต้บังคับของกฎหมายไทย',
          'ศาลไทยมีเขตอำนาจในการพิจารณาข้อพิพาท',
          'ภาษาไทยเป็นภาษาที่ใช้ในการตีความสัญญา',
          '* หากมีข้อความภาษาอังกฤษและไทยขัดแย้งกัน ให้ถือตามฉบับภาษาไทย',
        ],
      },
      {
        heading: '11. การแก้ไขเงื่อนไข',
        body: [
          'เราอาจปรับปรุงเงื่อนไขนี้เป็นครั้งคราว',
          'จะแจ้งให้ทราบผ่านเว็บไซต์และอีเมล 30 วันก่อนมีผลบังคับใช้',
          'การใช้งานต่อหลังจากแก้ไขถือว่ายอมรับเงื่อนไขใหม่',
        ],
      },
    ],
  },
};

type TermsPageProps = {
  params: { locale: string };
};

export default function TermsPage({ params }: TermsPageProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';
  const copy = content[locale];

  return (
    <>
      <SeoHead
        title={isThai ? 'เงื่อนไขการใช้งาน - CerebraTechAI' : 'Terms of Service - CerebraTechAI'}
        description={isThai 
          ? 'เงื่อนไขการใช้บริการของ CerebraTechAI และความรับผิดชอบของแต่ละฝ่าย'
          : 'CerebraTechAI terms of service and responsibilities of each party.'
        }
        keywords={isThai 
          ? ['เงื่อนไขการใช้งาน', 'Terms of Service', 'ข้อตกลง', 'ความรับผิดชอบ']
          : ['Terms of Service', 'Terms and Conditions', 'Agreement', 'Responsibilities']
        }
        url="/legal/terms"
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
