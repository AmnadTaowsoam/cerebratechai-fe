import type { Metadata } from 'next';
import TLDRBlock from '@/components/TLDRBlock';

const content = {
  en: {
    title: 'Disclaimer',
    description:
      'This disclaimer sets expectations for information shared on our website, demo assets, and communications.',
    updated: 'Updated 6 Oct 2025',
    tldr: 'Content is for informational purposes only, not professional advice. Case studies use anonymized/synthetic data. Results may vary. We provide no warranties about accuracy or completeness.',
    sections: [
      {
        heading: '1. Informational Use Only',
        body: [
          'Content on this site is provided for general information and does not constitute legal, financial, or professional advice.',
          'Decisions should be made with professional guidance tailored to your organisation’s specific context.',
        ],
      },
      {
        heading: '2. Demo and Synthetic Assets',
        body: [
          'Case studies and artefacts may include anonymised or synthetic data to illustrate delivery patterns.',
          'Results showcased are indicative and may vary depending on real-world constraints, data quality, and operating environments.',
        ],
      },
      {
        heading: '3. Third-party Links',
        body: [
          'Links to external sites are provided for convenience. CerebraTechAI is not responsible for the content or practices of those sites.',
        ],
      },
      {
        heading: '4. No Warranties',
        body: [
          'We make no representations or warranties about the completeness, reliability, or accuracy of the information presented.',
        ],
      },
    ],
  },
  th: {
    title: 'ข้อจำกัดความรับผิดและข้อสงวนสิทธิ์',
    description:
      'ประกาศนี้กำหนดขอบเขตความรับผิดชอบและข้อจำกัดสำหรับข้อมูลบนเว็บไซต์และบริการของ CerebraTechAI',
    updated: 'ปรับปรุงล่าสุด 18 ต.ค. 2025',
    tldr: 'เนื้อหาเพื่อข้อมูลทั่วไปเท่านั้น ไม่ใช่คำแนะนำจากผู้เชี่ยวชาญ กรณีศึกษาใช้ข้อมูลนิรนาม/สังเคราะห์ ผลลัพธ์อาจแตกต่าง ไม่มีการรับประกันความถูกต้องหรือครบถ้วน',
    sections: [
      {
        heading: '1. วัตถุประสงค์ของเว็บไซต์',
        body: [
          'เว็บไซต์นี้จัดทำขึ้นเพื่อนำเสนอข้อมูลทั่วไปเกี่ยวกับบริการ ไม่ใช่คำแนะนำเฉพาะบุคคล',
          'ไม่ถือเป็นคำแนะนำทางกฎหมาย การเงิน วิศวกรรม หรือด้านเทคนิค',
          'ควรปรึกษาผู้เชี่ยวชาญที่เหมาะสมก่อนตัดสินใจลงทุนหรือดำเนินโครงการ',
          '* การตัดสินใจใดๆ ที่ทำโดยอาศัยข้อมูลจากเว็บไซต์นี้เป็นความรับผิดชอบของผู้ใช้งานเอง',
        ],
      },
      {
        heading: '2. ข้อมูลนิรนามและสังเคราะห์ (Anonymized & Synthetic Data)',
        body: [
          'Case studies และตัวอย่างทั้งหมดใช้ข้อมูลนิรนามหรือข้อมูลสังเคราะห์ตามนโยบาย docs/09-Anonymization-&-NDA-Policy.md',
          'ตัวเลขประสิทธิภาพ (เช่น "ลด 30-60%") เป็นค่าประมาณจากหลายโปรเจกต์ ไม่ใช่ผลลัพธ์ที่รับประกัน',
          'ไม่มีข้อมูลที่ระบุถึงลูกค้าจริง (ชื่อ โลโก้ หรือข้อมูลลับ) บนเว็บไซต์',
          '* ผลลัพธ์จริงขึ้นอยู่กับหลายปัจจัย: คุณภาพข้อมูล ทีมงาน สภาพแวดล้อม และงบประมาณ',
        ],
      },
      {
        heading: '3. การไม่รับประกัน (No Warranties)',
        body: [
          'เนื้อหาบนเว็บไซต์ให้บริการ "ตามสภาพ" (AS IS) โดยไม่มีการรับประกันใดๆ',
          'ไม่รับประกันความถูกต้อง ครบถ้วน หรือเป็นปัจจุบัน',
          'ไม่รับประกันว่าเว็บไซต์จะทำงานได้ตลอดเวลาหรือปราศจากข้อผิดพลาด',
          'ไม่รับประกันผลลัพธ์หรือความสำเร็จของโครงการ',
          '* ข้อจำกัดนี้ไม่ส่งผลกระทบต่อสิทธิที่กฎหมายคุ้มครองผู้บริโภคให้ไว้',
        ],
      },
      {
        heading: '4. การจำกัดความรับผิด (Limitation of Liability)',
        body: [
          'CerebraTechAI ไม่รับผิดชอบต่อความเสียหาย ไม่ว่าทางตรงหรือทางอ้อม ที่เกิดจาก:',
          '- การใช้หรือไม่สามารถใช้เว็บไซต์',
          '- ข้อผิดพลาด ข้อบกพร่อง หรือไวรัสในเว็บไซต์',
          '- การตัดสินใจโดยอาศัยข้อมูลจากเว็บไซต์',
          '- การสูญเสียข้อมูล กำไร หรือโอกาสทางธุรกิจ',
          '* ในกรณีที่กฎหมายไม่อนุญาตให้จำกัดความรับผิด เราจะรับผิดเฉพาะความเสียหายที่เกิดจากการจงใจหรือประมาทเลินเล่ออย่างร้ายแรงเท่านั้น',
        ],
      },
      {
        heading: '5. ลิงก์ภายนอกและบริการบุคคลที่สาม',
        body: [
          'เว็บไซต์อาจมีลิงก์ไปยังเว็บไซต์ภายนอกที่เราไม่ได้ควบคุม',
          'เราไม่รับผิดชอบต่อเนื้อหา ความปลอดภัย หรือนโยบายของเว็บไซต์เหล่านั้น',
          'การใช้งานบริการ APIs หรือ Integrations ของบุคคลที่สามอยู่ภายใต้เงื่อนไขของผู้ให้บริการนั้นๆ',
          '* แนะนำให้อ่านนโยบายความเป็นส่วนตัวและข้อกำหนดของเว็บไซต์ที่คุณเข้าชมทุกครั้ง',
        ],
      },
      {
        heading: '6. ขอบเขตบริการและข้อจำกัด',
        body: [
          'CerebraTechAI เป็นธุรกิจขนาดเล็ก เหมาะกับโครงการ: Kickstart, POC, Small Pilot',
          'สำหรับโครงการขนาดใหญ่ (> ฿500,000) หรือ Mission-critical systems ควรพิจารณาผู้ให้บริการที่มีทุนจดทะเบียนสูงกว่า',
          'ไม่รับงานที่เกี่ยวข้องกับ: ระบบสาธารณูปโภค อุปกรณ์การแพทย์ ระบบควบคุมยานพาหนะ หรืองานที่อาจเสี่ยงต่อชีวิต',
          '* หากโครงการของคุณต้องการ SLA สูง (99.95%+), Team 24/7 หรือ Compliance เฉพาะทาง กรุณาหาผู้ให้บริการที่ใหญ่กว่า',
        ],
      },
      {
        heading: '7. ทรัพย์สินทางปัญญา',
        body: [
          'เนื้อหา โลโก้ ภาพ และ Code บนเว็บไซต์นี้เป็นทรัพย์สินของ CerebraTechAI',
          'ห้ามคัดลอก ดัดแปลง หรือเผยแพร่โดยไม่ได้รับอนุญาต',
          'ชื่อและโลโก้ของบุคคลที่สาม (เช่น AWS, Google) เป็นเครื่องหมายการค้าของเจ้าของ',
          '* การละเมิดลิขสิทธิ์อาจต้องรับผิดตามกฎหมาย',
        ],
      },
      {
        heading: '8. การเปลี่ยนแปลงข้อสงวนสิทธิ์',
        body: [
          'เราอาจแก้ไขข้อสงวนสิทธิ์นี้เป็นครั้งคราวโดยไม่ต้องแจ้งล่วงหน้า',
          'กรุณาตรวจสอบหน้านี้เป็นระยะ',
          'วันที่ "ปรับปรุงล่าสุด" จะแสดงเวอร์ชันที่ใหม่ที่สุด',
        ],
      },
      {
        heading: '9. ติดต่อเรา',
        body: [
          'หากมีข้อสงสัยหรือข้อกังวลเกี่ยวกับข้อสงวนสิทธิ์นี้',
          'ติดต่อ: hello@cerebratechai.com',
          'โทร: 085-662-1113',
          'เวลาทำการ: จันทร์-ศุกร์ 08:00-18:00 น.',
        ],
      },
    ],
  },
};

type DisclaimerPageProps = {
  params: { locale: string };
};

export function generateMetadata({ params }: DisclaimerPageProps): Metadata {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const copy = content[locale];
  return {
    title: `${copy.title} | CerebraTechAI`,
    description: copy.description,
  };
}

export default function DisclaimerPage({ params }: DisclaimerPageProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const copy = content[locale];

  return (
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
  );
}
