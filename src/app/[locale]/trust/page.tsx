import type { Metadata } from 'next';
import { Shield, Lock, Eye, FileCheck, Server, AlertCircle, CheckCircle } from 'lucide-react';
import { MagicHero } from '@/components/magicui';
import { Card, CardContent } from '@/components/ui/card';
import { SeoHead } from '@/components/seo';

type TrustPageProps = {
  params: { locale: string };
};

export const metadata: Metadata = {
  title: 'Trust & Security — Cerebratechai',
  description: 'Our commitment to security, privacy, and compliance. Learn how we protect your data and ensure regulatory compliance.',
};

export default function TrustPage({ params }: TrustPageProps) {
  const locale = params.locale?.startsWith('th') ? 'th' : 'en';
  const isThai = locale === 'th';

  const securityPillars = [
    {
      icon: Shield,
      title: isThai ? 'Data Protection' : 'Data Protection',
      description: isThai
        ? 'เข้ารหัสข้อมูลทั้งระหว่างการส่ง (in-transit) และขณะจัดเก็บ (at-rest) ด้วยมาตรฐานอุตสาหกรรม'
        : 'Industry-standard encryption for data in-transit and at-rest',
      items: [
        isThai ? 'TLS 1.3 สำหรับการเชื่อมต่อทั้งหมด' : 'TLS 1.3 for all connections',
        isThai ? 'AES-256 encryption สำหรับข้อมูลที่จัดเก็บ' : 'AES-256 encryption for stored data',
        isThai ? 'จัดเก็บข้อมูลในประเทศไทย (data residency)' : 'Data residency in Thailand',
        isThai ? 'สำรองข้อมูลอัตโนมัติและเข้ารหัส' : 'Automated encrypted backups'
      ]
    },
    {
      icon: Lock,
      title: isThai ? 'Access Control' : 'Access Control',
      description: isThai
        ? 'ควบคุมการเข้าถึงข้อมูลแบบเข้มงวดด้วยหลักการ Least Privilege'
        : 'Strict access controls following the principle of least privilege',
      items: [
        isThai ? 'Multi-factor authentication (MFA)' : 'Multi-factor authentication (MFA)',
        isThai ? 'Role-based access control (RBAC)' : 'Role-based access control (RBAC)',
        isThai ? 'ตรวจสอบและทบทวนสิทธิ์การเข้าถึงเป็นประจำ' : 'Regular access reviews',
        isThai ? 'Session management และ automatic timeout' : 'Session management and automatic timeout'
      ]
    },
    {
      icon: Eye,
      title: isThai ? 'Monitoring & Audit' : 'Monitoring & Audit',
      description: isThai
        ? 'บันทึกและตรวจสอบกิจกรรมทั้งหมดเพื่อความโปร่งใสและการตรวจสอบย้อนหลัง'
        : 'Comprehensive logging and monitoring for transparency and auditability',
      items: [
        isThai ? 'บันทึก audit logs ทุกการเข้าถึงข้อมูล' : 'Audit logs for all data access',
        isThai ? 'ตรวจจับพฤติกรรมผิดปกติแบบ real-time' : 'Real-time anomaly detection',
        isThai ? 'เก็บ logs อย่างน้อย 1 ปี' : 'Log retention for minimum 1 year',
        isThai ? 'รายงานสรุปสำหรับผู้ดูแลระบบ' : 'Executive summaries for administrators'
      ]
    },
    {
      icon: FileCheck,
      title: isThai ? 'Compliance & Privacy' : 'Compliance & Privacy',
      description: isThai
        ? 'ปฏิบัติตามกฎหมายและมาตรฐานการคุ้มครองข้อมูลส่วนบุคคล'
        : 'Adherence to privacy regulations and data protection standards',
      items: [
        isThai ? 'PDPA (พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562)' : 'PDPA (Thailand Personal Data Protection Act)',
        isThai ? 'GDPR-ready architecture' : 'GDPR-ready architecture',
        isThai ? 'Data Processing Agreements (DPA) สำหรับลูกค้า' : 'Data Processing Agreements (DPA) for clients',
        isThai ? 'สิทธิ์ของเจ้าของข้อมูล: เข้าถึง, แก้ไข, ลบ, ถ่ายโอน' : 'Data subject rights: access, rectify, erase, portability'
      ]
    },
    {
      icon: Server,
      title: isThai ? 'Infrastructure Security' : 'Infrastructure Security',
      description: isThai
        ? 'โครงสร้างพื้นฐานที่ปลอดภัยและทันสมัย'
        : 'Secure and modern infrastructure practices',
      items: [
        isThai ? 'Cloud infrastructure จากผู้ให้บริการที่ได้รับการรับรอง' : 'Certified cloud infrastructure providers',
        isThai ? 'Network segmentation และ firewalls' : 'Network segmentation and firewalls',
        isThai ? 'ตรวจสอบช่องโหว่ (vulnerability scanning) เป็นประจำ' : 'Regular vulnerability scanning',
        isThai ? 'Patch management และ security updates' : 'Patch management and security updates'
      ]
    },
    {
      icon: AlertCircle,
      title: isThai ? 'Incident Response' : 'Incident Response',
      description: isThai
        ? 'แผนรับมือและแจ้งเตือนเมื่อเกิดเหตุการณ์ความปลอดภัย'
        : 'Prepared incident response and notification procedures',
      items: [
        isThai ? 'แผนรับมือเหตุการณ์ที่ได้รับการทดสอบ' : 'Tested incident response plan',
        isThai ? 'ทีมพร้อมตอบสนอง 24/7 สำหรับเหตุร้ายแรง' : '24/7 response team for critical incidents',
        isThai ? 'แจ้งเตือนภายใน 72 ชั่วโมงตาม PDPA' : 'Notification within 72 hours per PDPA',
        isThai ? 'Post-incident analysis และป้องกันซ้ำ' : 'Post-incident analysis and prevention'
      ]
    }
  ];

  const certifications = [
    {
      name: 'PDPA Compliance',
      description: isThai
        ? 'ปฏิบัติตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562'
        : 'Compliant with Thailand Personal Data Protection Act B.E. 2562',
      status: 'active'
    },
    {
      name: 'ISO 27001 Ready',
      description: isThai
        ? 'ระบบบริหารจัดการความมั่นคงปลอดภัยสารสนเทศตามมาตรฐาน ISO'
        : 'Information security management system following ISO standards',
      status: 'in-progress'
    },
    {
      name: 'GDPR Architecture',
      description: isThai
        ? 'สถาปัตยกรรมที่รองรับข้อกำหนด GDPR'
        : 'Architecture supporting GDPR requirements',
      status: 'active'
    }
  ];

  const dataHandling = [
    {
      title: isThai ? 'การเก็บรวบรวมข้อมูล' : 'Data Collection',
      content: isThai
        ? 'เราเก็บเฉพาะข้อมูลที่จำเป็นต่อการให้บริการเท่านั้น และขอความยินยอมก่อนการเก็บรวบรวมข้อมูลส่วนบุคคลทุกครั้ง'
        : 'We collect only necessary data for service delivery and obtain consent before collecting any personal information.'
    },
    {
      title: isThai ? 'การใช้ข้อมูล' : 'Data Usage',
      content: isThai
        ? 'ข้อมูลของคุณใช้เพื่อวัตถุประสงค์ที่ระบุไว้เท่านั้น เช่น การพัฒนาโมเดล AI, การวิเคราะห์, และการปรับปรุงบริการ'
        : 'Your data is used only for stated purposes such as AI model development, analytics, and service improvement.'
    },
    {
      title: isThai ? 'การแบ่งปันข้อมูล' : 'Data Sharing',
      content: isThai
        ? 'เราไม่ขายหรือแบ่งปันข้อมูลส่วนบุคคลกับบุคคลที่สาม ยกเว้นมีความจำเป็นตามกฎหมายหรือได้รับความยินยอมจากคุณ'
        : 'We do not sell or share personal data with third parties, except when required by law or with your consent.'
    },
    {
      title: isThai ? 'การเก็บรักษาข้อมูล' : 'Data Retention',
      content: isThai
        ? 'เราเก็บข้อมูลเท่าที่จำเป็นต่อวัตถุประสงค์ หรือตามที่กฎหมายกำหนด และจะลบข้อมูลเมื่อไม่มีความจำเป็นอีกต่อไป'
        : 'We retain data only as long as necessary for its purpose or as required by law, and delete it when no longer needed.'
    },
    {
      title: isThai ? 'สิทธิ์ของเจ้าของข้อมูล' : 'Your Rights',
      content: isThai
        ? 'คุณมีสิทธิ์เข้าถึง แก้ไข ลบ คัดค้านการประมวลผล และขอรับข้อมูลส่วนบุคคลของคุณได้ตลอดเวลา ติดต่อเราได้ที่ privacy@cerebratechai.com'
        : 'You have the right to access, rectify, erase, object to processing, and receive your personal data at any time. Contact us at privacy@cerebratechai.com'
    }
  ];

  return (
    <>
      <SeoHead
        title={isThai ? 'ความปลอดภัยและความเชื่อมั่น - Trust Center' : 'Security & Trust Center'}
        description={isThai
          ? 'ความมุ่งมั่นของเราในการรักษาความปลอดภัย ความเป็นส่วนตัว และการปฏิบัติตามกฎระเบียบ เรียนรู้วิธีที่เราปกป้องข้อมูลของคุณ'
          : 'Our commitment to security, privacy, and compliance. Learn how we protect your data and ensure regulatory adherence.'
        }
        keywords={isThai
          ? ['ความปลอดภัย', 'PDPA', 'GDPR', 'การคุ้มครองข้อมูล', 'Compliance', 'ISO 27001']
          : ['security', 'PDPA', 'GDPR', 'data protection', 'compliance', 'ISO 27001']
        }
        url="/trust"
        type="website"
      />

      <div className="bg-bg">
        <MagicHero
          eyebrow={isThai ? 'ความเชื่อมั่น & ความปลอดภัย' : 'Trust & Security'}
          title={
            isThai
              ? 'ความมั่นคงปลอดภัยและการปฏิบัติตามมาตรฐานเป็นหัวใจของเรา'
              : 'Security and Compliance at Our Core'
          }
          description={
            isThai
              ? 'เราเข้าใจว่าการมอบหมายข้อมูลและโครงการ AI ให้กับพันธมิตรต้องอาศัยความไว้วางใจ เราจึงสร้างระบบที่มั่นคง โปร่งใส และปฏิบัติตามมาตรฐานสากล'
              : 'We understand that entrusting your data and AI projects requires confidence. That\'s why we build secure, transparent systems that comply with international standards.'
          }
          align="center"
        />

        {/* Security Pillars */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text mb-4">
                {isThai ? 'เสาหลักด้านความปลอดภัย' : 'Security Pillars'}
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                {isThai
                  ? 'แนวทางที่ครอบคลุมในการปกป้องข้อมูล ระบบ และโครงการของคุณ'
                  : 'Our comprehensive approach to protecting your data, systems, and projects'
                }
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
        <section className="py-20 bg-surface/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text mb-4">
                {isThai ? 'มาตรฐานและการรับรอง' : 'Standards & Certifications'}
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                {isThai
                  ? 'เรามุ่งมั่นที่จะปฏิบัติตามมาตรฐานสากลและกฎหมายที่เกี่ยวข้อง'
                  : 'Our commitment to international standards and regulatory compliance'
                }
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
                        ? (isThai ? 'ใช้งานอยู่' : 'Active')
                        : (isThai ? 'กำลังดำเนินการ' : 'In Progress')
                      }
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Data Handling */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text mb-4">
                {isThai ? 'วิธีที่เราจัดการกับข้อมูลของคุณ' : 'How We Handle Your Data'}
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                {isThai
                  ? 'ความโปร่งใสในการเก็บรวบรวม ใช้งาน และปกป้องข้อมูลของคุณ'
                  : 'Transparency in how we collect, use, and protect your information'
                }
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

        {/* Contact */}
        <section className="py-16 bg-surface/30">
          <div className="container mx-auto px-6">
            <Card className="border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 max-w-3xl mx-auto">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-semibold text-text mb-4">
                  {isThai ? 'มีคำถามเกี่ยวกับความปลอดภัย?' : 'Questions About Security?'}
                </h2>
                <p className="text-text-muted mb-6">
                  {isThai
                    ? 'ทีมความปลอดภัยของเรายินดีตอบคำถามและให้ข้อมูลเพิ่มเติมเกี่ยวกับแนวทางปฏิบัติและนโยบายของเรา'
                    : 'Our security team is happy to answer questions and provide additional information about our practices and policies.'
                  }
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-text-muted">
                    {isThai ? 'เรื่องความปลอดภัย: ' : 'Security inquiries: '}
                    <a href="mailto:security@cerebratechai.com" className="text-primary hover:underline">
                      security@cerebratechai.com
                    </a>
                  </p>
                  <p className="text-text-muted">
                    {isThai ? 'เรื่องความเป็นส่วนตัว: ' : 'Privacy inquiries: '}
                    <a href="mailto:privacy@cerebratechai.com" className="text-primary hover:underline">
                      privacy@cerebratechai.com
                    </a>
                  </p>
                  <p className="text-text-muted">
                    {isThai ? 'เรื่อง Compliance: ' : 'Compliance inquiries: '}
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
