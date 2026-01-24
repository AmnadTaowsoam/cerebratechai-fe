'use client';

import { useTranslations, useLocale } from 'next-intl';

const logos = [
  { name: 'Automotive OEM (TH)' },
  { name: 'Regional Banking Ops' },
  { name: 'Integrated Logistics Hub' },
  { name: 'Omnichannel Retail Group' },
  { name: 'Smart Transit Pilot' },
];

const metrics = [
  { value: '55%', key: 'manufacturing' },
  { value: '42%', key: 'ops' },
  { value: '420k', key: 'logistics' },
];

export function SocialProofSection() {
  // const t = useTranslations('home.sections.social_proof');
  const locale = useLocale();

  return (
    <section className="bg-bg py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full bg-surface-2 px-4 py-1 text-sm font-medium text-primary">
            {locale.startsWith('th')
              ? 'ความเชื่อมั่นจากลูกค้า'
              : 'Trusted delivery'}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-text md:text-4xl">
            {locale.startsWith('th')
              ? 'ทำงานร่วมกับ SMEs และทีมนวัตกรรม'
              : 'Working with SMEs and innovation teams'}
          </h2>
          <p className="mt-3 mx-auto max-w-3xl text-text-muted">
            {locale.startsWith('th')
              ? 'เราช่วยทีมขนาดเล็ก-กลางทดลองไอเดีย AI แบบประหยัด รวดเร็ว และเข้าใจง่าย เน้น Quick Wins ที่วัดผลได้'
              : 'We help small-to-mid teams test AI ideas affordably, quickly, and simply. Focus on Quick Wins you can measure.'}
          </p>
        </div>

        <div className="rounded-3xl border border-hairline bg-surface p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {locale.startsWith('th')
              ? 'ตัวอย่างทีมที่เราเคยสนับสนุน'
              : "Selected teams we've supported"}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {logos.map(logo => (
              <div
                key={logo.name}
                className="flex h-20 items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-primary/5 text-center text-sm font-semibold text-primary"
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-hairline bg-surface p-8">
            <blockquote className="text-lg text-text-muted">
              &ldquo;
              {locale.startsWith('th')
                ? 'CerebraTechAI ให้ความได้เปรียบโดยการจับคู่ความลึกทางเทคนิคกับการจัดการการเปลี่ยนแปลงอย่างมีวินัย เราได้ผ่านทุกประตูกำกับดูแลโดยไม่ชะลอการส่งมอบ'
                : 'CerebraTechAI gave us the edge by pairing technical depth with disciplined change management. We met every regulatory gate without slowing delivery.'}
              &rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-text">
              {locale.startsWith('th') ? 'Interim COO' : 'Interim COO'}
            </p>
            <p className="text-sm text-text-muted">
              {locale.startsWith('th')
                ? 'Automotive OEM (Thailand)'
                : 'Automotive OEM (Thailand)'}
            </p>
          </div>
          <div className="rounded-3xl border border-hairline bg-surface p-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {metrics.map(metric => (
                <div key={metric.key} className="space-y-2 text-center">
                  <div className="text-3xl font-bold text-primary">
                    {metric.value}
                  </div>
                  <p className="text-sm text-text-muted">
                    {metric.key === 'manufacturing'
                      ? locale.startsWith('th')
                        ? 'POCs ที่ส่งมอบในโครงการขนาดเล็ก-กลาง'
                        : 'POCs delivered for small-mid projects'
                      : metric.key === 'ops'
                        ? locale.startsWith('th')
                          ? 'เวลาเฉลี่ยในการส่งมอบ Pilot (สัปดาห์)'
                          : 'Average Pilot delivery time (weeks)'
                        : locale.startsWith('th')
                          ? 'ราคาเริ่มต้น POC Package (฿)'
                          : 'Starting POC Package price (฿)'}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-xl bg-primary/10 px-4 py-3 text-center text-sm text-primary">
              {locale.startsWith('th')
                ? '* ตัวเลขประมาณการ ผลจริงขึ้นกับความซับซ้อนและขอบเขตงาน'
                : '* Estimated figures. Actual results depend on complexity and scope.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
