import type { Metadata } from 'next';
import { Shield, Lock, Eye, FileCheck, Server, AlertCircle, CheckCircle } from 'lucide-react';
import { MagicHero } from '@/components/magicui';
import { Card, CardContent } from '@/components/ui/card';
import { SeoHead, FAQSection, TrustFAQs } from '@/components/seo';
import { SECTION_SPACING } from '@/lib/constants/spacing';

type TrustPageProps = {
  params: { locale: string };
};

export const metadata: Metadata = {
  title: 'Trust & Security - CerebraTechAI',
  description: 'Our commitment to security, privacy, and compliance. Learn how we protect your data and ensure regulatory compliance.'
};

export default function TrustPage({ params }: TrustPageProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';
  const t = (th: string, en: string) => (isThai ? th : en);

  const securityPillars = [
    {
      icon: Shield,
      title: t('การปกป้องข้อมูล', 'Data Protection'),
      description: t(
        'เข้ารหัสข้อมูลทั้งระหว่างส่งและขณะจัดเก็บ พร้อมสำรองข้อมูลแบบปลอดภัย',
        'Industry-standard encryption for data in transit and at rest'
      ),
      items: [
        t('TLS 1.3 สำหรับทุกการเชื่อมต่อ', 'TLS 1.3 for all connections'),
        t('AES-256 สำหรับข้อมูลที่จัดเก็บ', 'AES-256 encryption for stored data'),
        t('สำรองข้อมูลแบบเข้ารหัสอัตโนมัติ', 'Automated encrypted backups'),
        t('รองรับการกำหนดที่ตั้งข้อมูลตามข้อตกลง', 'Data residency options when required')
      ]
    },
    {
      icon: Lock,
      title: t('การควบคุมการเข้าถึง', 'Access Control'),
      description: t(
        'จำกัดสิทธิ์ตามบทบาทและหลัก least privilege',
        'Strict access controls following the principle of least privilege'
      ),
      items: [
        t('ยืนยันตัวตนหลายปัจจัย (MFA)', 'Multi-factor authentication (MFA)'),
        t('ควบคุมสิทธิ์ตามบทบาท (RBAC)', 'Role-based access control (RBAC)'),
        t('ทบทวนสิทธิ์การเข้าถึงอย่างสม่ำเสมอ', 'Regular access reviews'),
        t('จัดการเซสชันและหมดเวลาอัตโนมัติ', 'Session management and automatic timeout')
      ]
    },
    {
      icon: Eye,
      title: t('การเฝ้าระวังและบันทึกตรวจสอบ', 'Monitoring & Audit'),
      description: t(
        'ติดตามการใช้งานและเหตุการณ์เพื่อความโปร่งใสและตรวจสอบย้อนหลังได้',
        'Comprehensive logging and monitoring for transparency and auditability'
      ),
      items: [
        t('บันทึกการเข้าถึงข้อมูลทุกครั้ง', 'Audit logs for all data access'),
        t('ตรวจจับความผิดปกติแบบเรียลไทม์', 'Real-time anomaly detection'),
        t('เก็บบันทึกอย่างน้อย 1 ปี', 'Log retention for minimum 1 year'),
        t('สรุปรายงานสำหรับผู้ดูแลระบบ', 'Executive summaries for administrators')
      ]
    },
    {
      icon: FileCheck,
      title: t('มาตรฐานและความเป็นส่วนตัว', 'Compliance & Privacy'),
      description: t(
        'ปฏิบัติตามข้อกำหนดด้านข้อมูลส่วนบุคคลอย่างเคร่งครัด',
        'Adherence to privacy regulations and data protection standards'
      ),
      items: [
        t('PDPA (กฎหมายไทย)', 'PDPA (Thailand Personal Data Protection Act)'),
        t('รองรับสถาปัตยกรรมที่สอดคล้อง GDPR', 'GDPR-ready architecture'),
        t('จัดทำ DPA ตามความต้องการ', 'Data Processing Agreements (DPA)'),
        t('สิทธิของเจ้าของข้อมูลครบถ้วน', 'Data subject rights management')
      ]
    },
    {
      icon: Server,
      title: t('ความปลอดภัยโครงสร้างพื้นฐาน', 'Infrastructure Security'),
      description: t(
        'โครงสร้างพื้นฐานที่ปลอดภัยและทันสมัย',
        'Secure and modern infrastructure practices'
      ),
      items: [
        t('ผู้ให้บริการคลาวด์ที่ผ่านมาตรฐาน', 'Certified cloud infrastructure providers'),
        t('แยกเครือข่ายและใช้ไฟร์วอลล์', 'Network segmentation and firewalls'),
        t('สแกนช่องโหว่เป็นประจำ', 'Regular vulnerability scanning'),
        t('แพตช์และอัปเดตความปลอดภัยสม่ำเสมอ', 'Patch management and security updates')
      ]
    },
    {
      icon: AlertCircle,
      title: t('การรับมือเหตุการณ์', 'Incident Response'),
      description: t(
        'มีแผนตอบสนองเหตุการณ์และการแจ้งเตือนที่ชัดเจน',
        'Prepared incident response and notification procedures'
      ),
      items: [
        t('แผนรับมือเหตุการณ์ผ่านการทดสอบแล้ว', 'Tested incident response plan'),
        t('ทีมรับมือเหตุการณ์สำหรับกรณีสำคัญ', 'On-call response team for critical incidents'),
        t('แจ้งเหตุภายใน 72 ชั่วโมงตาม PDPA', 'Notification within 72 hours per PDPA'),
        t('สรุปบทเรียนและป้องกันเหตุซ้ำ', 'Post-incident analysis and prevention')
      ]
    }
  ];

  const certifications = [
    {
      name: 'PDPA Compliance',
      description: t(
        'สอดคล้องกับ พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562',
        'Compliant with Thailand Personal Data Protection Act B.E. 2562'
      ),
      status: 'active'
    },
    {
      name: 'ISO 27001 Ready',
      description: t(
        'ระบบบริหารความปลอดภัยข้อมูลตามมาตรฐาน ISO อยู่ระหว่างดำเนินการ',
        'Information security management system following ISO standards'
      ),
      status: 'in-progress'
    },
    {
      name: 'GDPR Architecture',
      description: t(
        'ออกแบบสถาปัตยกรรมให้รองรับข้อกำหนด GDPR',
        'Architecture supporting GDPR requirements'
      ),
      status: 'active'
    }
  ];

  const dataHandling = [
    {
      title: t('การเก็บข้อมูล', 'Data Collection'),
      content: t(
        'เก็บข้อมูลเท่าที่จำเป็นต่อการให้บริการ และขอความยินยอมก่อนเก็บข้อมูลส่วนบุคคล',
        'We collect only necessary data for service delivery and obtain consent before collecting any personal information.'
      )
    },
    {
      title: t('การใช้งานข้อมูล', 'Data Usage'),
      content: t(
        'ใช้ข้อมูลตามวัตถุประสงค์ที่ตกลงกัน เช่น พัฒนาโมเดล วิเคราะห์ และปรับปรุงบริการ',
        'Your data is used only for stated purposes such as AI model development, analytics, and service improvement.'
      )
    },
    {
      title: t('การแชร์ข้อมูล', 'Data Sharing'),
      content: t(
        'เราไม่ขายหรือแชร์ข้อมูลให้บุคคลที่สาม เว้นแต่ได้รับความยินยอมหรือจำเป็นตามกฎหมาย',
        'We do not sell or share personal data with third parties, except when required by law or with your consent.'
      )
    },
    {
      title: t('ระยะเวลาการเก็บข้อมูล', 'Data Retention'),
      content: t(
        'เก็บข้อมูลเท่าที่จำเป็นตามวัตถุประสงค์หรือข้อกำหนดทางกฎหมาย และลบเมื่อไม่จำเป็น',
        'We retain data only as long as necessary for its purpose or as required by law, and delete it when no longer needed.'
      )
    },
    {
      title: t('สิทธิของคุณ', 'Your Rights'),
      content: t(
        'คุณมีสิทธิ์เข้าถึง แก้ไข ลบ คัดค้าน และขอโอนข้อมูล ติดต่อได้ที่ privacy@cerebratechai.com',
        'You have the right to access, rectify, erase, object to processing, and receive your personal data at any time. Contact us at privacy@cerebratechai.com'
      )
    }
  ];

  return (
    <>
      <SeoHead
        title={t('ศูนย์ความปลอดภัยและความน่าเชื่อถือ - CerebraTechAI', 'Security & Trust Center')}
        description={t(
          'สรุปแนวทางด้านความปลอดภัย ความเป็นส่วนตัว และการปฏิบัติตามข้อกำหนดของเรา',
          'Our commitment to security, privacy, and compliance. Learn how we protect your data and ensure regulatory adherence.'
        )}
        keywords={isThai
          ? ['ความปลอดภัย', 'PDPA', 'GDPR', 'คุ้มครองข้อมูล', 'Compliance', 'ISO 27001']
          : ['security', 'PDPA', 'GDPR', 'data protection', 'compliance', 'ISO 27001']
        }
        url="/trust"
        type="website"
      />

      <div className="bg-bg">
        <MagicHero
          eyebrow={t('Trust & Security', 'Trust & Security')}
          title={t('ความปลอดภัยและการปฏิบัติตามข้อกำหนดคือหัวใจหลักของเรา', 'Security and Compliance at Our Core')}
          description={t(
            'เราสร้างระบบที่ปลอดภัย โปร่งใส และตรวจสอบได้ เพื่อให้คุณมั่นใจในการใช้งานข้อมูลและ AI',
            'We understand that entrusting your data and AI projects requires confidence. That\'s why we build secure, transparent systems that comply with international standards.'
          )}
          align="center"
        />

        {/* Security Pillars */}
        <section className={SECTION_SPACING.FEATURES}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text mb-4">
                {t('เสาหลักด้านความปลอดภัย', 'Security Pillars')}
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                {t(
                  'แนวทางที่ครอบคลุมเพื่อปกป้องข้อมูล ระบบ และโครงการของคุณ',
                  'Our comprehensive approach to protecting your data, systems, and projects'
                )}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {securityPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <Card key={pillar.title} className="border border-hairline bg-surface/80 backdrop-blur">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-primary/10">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-text mb-2">{pillar.title}</h3>
                          <p className="text-sm text-text-muted">{pillar.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-2 mt-4">
                        {pillar.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-text-muted">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certifications & Standards */}
        <section className={`${SECTION_SPACING.FEATURES} bg-surface/30`}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text mb-4">
                {t('มาตรฐานและการรับรอง', 'Standards & Certifications')}
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                {t(
                  'ความพร้อมด้านมาตรฐานสากลและข้อกำหนดด้านความเป็นส่วนตัว',
                  'Our commitment to international standards and regulatory compliance'
                )}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              {certifications.map((cert) => (
                <Card key={cert.name} className="border border-hairline bg-surface/80">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <FileCheck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text mb-2">{cert.name}</h3>
                    <p className="text-sm text-text-muted mb-4">{cert.description}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      cert.status === 'active'
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {cert.status === 'active'
                        ? t('พร้อมใช้งาน', 'Active')
                        : t('อยู่ระหว่างดำเนินการ', 'In Progress')
                      }
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Data Handling */}
        <section className={SECTION_SPACING.FEATURES}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text mb-4">
                {t('การจัดการข้อมูลของคุณ', 'How We Handle Your Data')}
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                {t(
                  'โปร่งใสในทุกขั้นตอน ตั้งแต่การเก็บ ใช้ ไปจนถึงการลบข้อมูล',
                  'Transparency in how we collect, use, and protect your information'
                )}
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {dataHandling.map((item, idx) => (
                <Card key={idx} className="border border-hairline bg-surface/80">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-text mb-3">{item.title}</h3>
                    <p className="text-text-muted leading-relaxed">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection
          faqs={isThai ? TrustFAQs.th : TrustFAQs.en}
          className="bg-surface/30"
        />

        {/* Contact */}
        <section className={`${SECTION_SPACING.FEATURES} bg-surface/30`}>
          <div className="container mx-auto px-6">
            <Card className="border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 max-w-3xl mx-auto">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-semibold text-text mb-4">
                  {t('มีคำถามเรื่องความปลอดภัย?', 'Questions About Security?')}
                </h2>
                <p className="text-text-muted mb-6">
                  {t(
                    'ทีมของเรายินดีตอบคำถามและจัดเตรียมเอกสารที่เกี่ยวข้อง',
                    'Our security team is happy to answer questions and provide additional information about our practices and policies.'
                  )}
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-text-muted">
                    {t('ติดต่อด้านความปลอดภัย: ', 'Security inquiries: ')}
                    <a href="mailto:security@cerebratechai.com" className="text-primary hover:underline">
                      security@cerebratechai.com
                    </a>
                  </p>
                  <p className="text-text-muted">
                    {t('ติดต่อด้านความเป็นส่วนตัว: ', 'Privacy inquiries: ')}
                    <a href="mailto:privacy@cerebratechai.com" className="text-primary hover:underline">
                      privacy@cerebratechai.com
                    </a>
                  </p>
                  <p className="text-text-muted">
                    {t('ติดต่อด้าน Compliance: ', 'Compliance inquiries: ')}
                    <a href="mailto:compliance@cerebratechai.com" className="text-primary hover:underline">
                      compliance@cerebratechai.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
