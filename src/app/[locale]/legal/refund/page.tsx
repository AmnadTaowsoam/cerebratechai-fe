import type { Metadata } from 'next';
import TLDRBlock from '@/components/TLDRBlock';

const content = {
  en: {
    title: 'Refund Policy',
    description:
      'This Refund Policy outlines the conditions under which CerebraTechAI provides refunds for services and products.',
    updated: 'Updated 18 Oct 2025',
    tldr: 'Kickstart: full refund within 7 days before work starts. POC Lab: refund before 50% completion. Pilot Launch: case-by-case. Production Scale: per contract terms. Submit requests to finance@cerebratechai.com.',
    sections: [
      {
        heading: '1. General Policy',
        body: [
          'CerebraTechAI is committed to client satisfaction. We offer refunds under specific conditions outlined below.',
          'All refund requests must be submitted in writing to finance@cerebratechai.com within the specified timeframe.',
          'Refunds are processed within 30 business days of approval.',
        ],
      },
      {
        heading: '2. Service Refund Eligibility',
        body: [
          '**Kickstart Package:** Full refund available if requested within 7 days of initial consultation and before any work has commenced.',
          '**POC Lab:** Refund available for the remaining balance if requested before 50% of deliverables are completed.',
          '**Pilot Launch:** Refunds considered on a case-by-case basis. Partial refunds may apply based on work completed.',
          '**Production Scale:** Custom terms outlined in the statement of work. Refunds subject to contract terms.',
        ],
      },
      {
        heading: '3. Non-refundable Items',
        body: [
          'Services already delivered and accepted by the client.',
          'Third-party licenses, subscriptions, or tools procured on behalf of the client.',
          'Training sessions or workshops already conducted.',
          'Custom development work that has been completed and deployed.',
          'Monthly maintenance and support fees after services have been rendered.',
        ],
      },
      {
        heading: '4. Cancellation Terms',
        body: [
          'Projects may be cancelled at any time with written notice.',
          'Clients are responsible for payment of work completed up to the cancellation date.',
          'If a project is cancelled after 50% completion, no refund will be issued for the work performed.',
          'Deposits and advance payments are non-refundable once work has commenced.',
        ],
      },
      {
        heading: '5. Quality Guarantee',
        body: [
          'If deliverables do not meet the specifications outlined in the statement of work, we will:',
          '• Revise the work at no additional cost',
          '• Provide alternative solutions',
          '• Issue a partial or full refund if the issue cannot be resolved',
          'Quality concerns must be raised within 30 days of delivery.',
        ],
      },
      {
        heading: '6. Refund Process',
        body: [
          'Submit a refund request to finance@cerebratechai.com with:',
          '• Project name and reference number',
          '• Reason for refund request',
          '• Supporting documentation (if applicable)',
          'Our team will review your request within 5 business days.',
          'Approved refunds are processed to the original payment method.',
        ],
      },
      {
        heading: '7. Exceptions',
        body: [
          'Refunds may be denied if:',
          '• The client has violated the Terms of Service',
          '• The request is made outside the eligible timeframe',
          '• Work has been substantially completed',
          '• The client has failed to provide necessary cooperation or information',
        ],
      },
      {
        heading: '8. Dispute Resolution',
        body: [
          'If you disagree with a refund decision, you may request a review.',
          'Disputes will be handled according to the Terms of Service.',
          'We aim to resolve all disputes amicably and fairly.',
        ],
      },
    ],
    contact: {
      heading: 'Questions About Refunds?',
      body: 'For refund inquiries, contact our finance team at finance@cerebratechai.com or call +66 85-662-1113',
    },
  },
  th: {
    title: 'นโยบายการคืนเงิน',
    description:
      'นโยบายนี้อธิบายเงื่อนไขที่ CerebraTechAI ให้การคืนเงินสำหรับบริการและผลิตภัณฑ์',
    updated: 'ปรับปรุงล่าสุด 18 ต.ค. 2025',
    tldr: 'Kickstart: คืนเต็มจำนวนภายใน 7 วันก่อนเริ่มงาน POC Lab: คืนเงินก่อนทำงาน 50% Pilot Launch: พิจารณาเป็นกรณี Production Scale: ตามสัญญา ส่งคำขอที่ finance@cerebratechai.com',
    sections: [
      {
        heading: '1. นโยบายทั่วไป',
        body: [
          'CerebraTechAI มุ่งมั่นในความพึงพอใจของลูกค้า เรามีการคืนเงินภายใต้เงื่อนไขที่ระบุด้านล่าง',
          'คำขอคืนเงินทั้งหมดต้องส่งเป็นลายลักษณ์อักษรไปที่ finance@cerebratechai.com ภายในกรอบเวลาที่กำหนด',
          'การคืนเงินจะดำเนินการภายใน 30 วันทำการหลังจากได้รับการอนุมัติ',
        ],
      },
      {
        heading: '2. เงื่อนไขการคืนเงินสำหรับบริการ',
        body: [
          '**แพ็กเกจ Kickstart:** คืนเงินเต็มจำนวนหากร้องขอภายใน 7 วันหลังการปรึกษาครั้งแรก และก่อนเริ่มงานใดๆ',
          '**แพ็กเกจ POC Lab:** คืนเงินส่วนที่เหลือหากร้องขอก่อนทำงานไปแล้ว 50% ของผลงาน',
          '**แพ็กเกจ Pilot Launch:** พิจารณาคืนเงินเป็นกรณีๆ ไป อาจคืนเงินบางส่วนตามงานที่ทำแล้ว',
          '**แพ็กเกจ Production Scale:** เงื่อนไขตามที่ระบุในสัญญา การคืนเงินขึ้นอยู่กับข้อตกลงในสัญญา',
        ],
      },
      {
        heading: '3. รายการที่ไม่สามารถคืนเงินได้',
        body: [
          'บริการที่ส่งมอบและลูกค้ายอมรับแล้ว',
          'ใบอนุญาต subscription หรือเครื่องมือจากบุคคลที่สามที่จัดหาให้ลูกค้า',
          'การอบรมหรือเวิร์กช็อปที่จัดไปแล้ว',
          'งานพัฒนาเฉพาะที่ทำเสร็จและติดตั้งแล้ว',
          'ค่าบำรุงรักษาและสนับสนุนรายเดือนหลังจากให้บริการแล้ว',
        ],
      },
      {
        heading: '4. เงื่อนไขการยกเลิก',
        body: [
          'โครงการสามารถยกเลิกได้ตลอดเวลาโดยแจ้งเป็นลายลักษณ์อักษร',
          'ลูกค้าต้องรับผิดชอบการชำระเงินสำหรับงานที่ทำเสร็จจนถึงวันที่ยกเลิก',
          'หากยกเลิกโครงการหลังจากทำงานไป 50% แล้ว จะไม่มีการคืนเงินสำหรับงานที่ทำไปแล้ว',
          'เงินมัดจำและการชำระล่วงหน้าจะไม่คืนเมื่อเริ่มงานแล้ว',
        ],
      },
      {
        heading: '5. การรับประกันคุณภาพ',
        body: [
          'หากผลงานไม่ตรงตามข้อกำหนดในสัญญา เราจะ:',
          '• แก้ไขงานโดยไม่คิดค่าใช้จ่ายเพิ่มเติม',
          '• จัดหาทางเลือกอื่น',
          '• คืนเงินบางส่วนหรือเต็มจำนวนหากไม่สามารถแก้ไขได้',
          'ต้องแจ้งปัญหาคุณภาพภายใน 30 วันหลังส่งมอบงาน',
        ],
      },
      {
        heading: '6. ขั้นตอนการขอคืนเงิน',
        body: [
          'ส่งคำขอคืนเงินไปที่ finance@cerebratechai.com พร้อม:',
          '• ชื่อโครงการและเลขที่อ้างอิง',
          '• เหตุผลในการขอคืนเงิน',
          '• เอกสารประกอบ (ถ้ามี)',
          'ทีมของเราจะพิจารณาคำขอภายใน 5 วันทำการ',
          'การคืนเงินที่อนุมัติจะดำเนินการผ่านช่องทางการชำระเงินเดิม',
        ],
      },
      {
        heading: '7. กรณีข้อยกเว้น',
        body: [
          'อาจปฏิเสธการคืนเงินหาก:',
          '• ลูกค้าละเมิดข้อกำหนดการใช้บริการ',
          '• คำขอส่งนอกเหนือจากกรอบเวลาที่กำหนด',
          '• งานทำเสร็จส่วนใหญ่แล้ว',
          '• ลูกค้าไม่ให้ความร่วมมือหรือข้อมูลที่จำเป็น',
        ],
      },
      {
        heading: '8. การระงับข้อพิพาท',
        body: [
          'หากคุณไม่เห็นด้วยกับการตัดสินใจคืนเงิน คุณสามารถขอทบทวนได้',
          'ข้อพิพาทจะดำเนินการตามข้อกำหนดการใช้บริการ',
          'เรามุ่งมั่นที่จะแก้ไขข้อพิพาททั้งหมดอย่างเป็นกลางและยุติธรรม',
        ],
      },
    ],
    contact: {
      heading: 'มีคำถามเกี่ยวกับการคืนเงิน?',
      body: 'สำหรับคำถามเกี่ยวกับการคืนเงิน ติดต่อทีมการเงินของเราที่ finance@cerebratechai.com หรือโทร +66 85-662-1113',
    },
  },
};

export const metadata: Metadata = {
  title: 'Refund Policy | CerebraTechAI',
  description: 'Learn about our refund and cancellation policies.',
};

export default function RefundPolicyPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const isThai = locale === 'th';
  const c = isThai ? content.th : content.en;

  return (
    <div className="min-h-screen bg-bg">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-text mb-4">{c.title}</h1>
          <p className="text-lg text-text-muted mb-2">{c.description}</p>
          <p className="text-sm text-text-muted">{c.updated}</p>
        </div>

        {/* TL;DR Block */}
        <div className="mb-12">
          <TLDRBlock summary={c.tldr} locale={locale as 'en' | 'th'} />
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {c.sections.map((section, idx) => (
            <section key={idx} className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-text mb-4">
                {section.heading}
              </h2>
              <div className="space-y-3 text-text-muted">
                {section.body.map((paragraph, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {/* Contact Section */}
          <section className="mt-12 p-6 bg-surface rounded-lg border border-hairline">
            <h3 className="text-xl font-semibold text-text mb-3">
              {c.contact.heading}
            </h3>
            <p className="text-text-muted">{c.contact.body}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
