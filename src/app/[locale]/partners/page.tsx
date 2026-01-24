'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MagicHero } from '@/components/magicui';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ExternalLink, Shield, Zap, Globe, Award } from 'lucide-react';
import Link from 'next/link';
import { SECTION_SPACING } from '@/lib/constants/spacing';

export default function PartnersPage() {
  const t = useTranslations('partners');
  const locale = useLocale();
  const basePath = `/${locale}`;

  const technologyPartners = [
    {
      name: 'Microsoft Azure',
      logo: '/partners/microsoft-azure.png',
      description: 'Cloud platform and AI services',
      category: 'Cloud Platform',
      website: 'https://azure.microsoft.com'
    },
    {
      name: 'Amazon Web Services',
      logo: '/partners/aws.png',
      description: 'Cloud computing and ML services',
      category: 'Cloud Platform',
      website: 'https://aws.amazon.com'
    },
    {
      name: 'Google Cloud',
      logo: '/partners/google-cloud.png',
      description: 'AI and machine learning platform',
      category: 'Cloud Platform',
      website: 'https://cloud.google.com'
    },
    {
      name: 'NVIDIA',
      logo: '/partners/nvidia.png',
      description: 'GPU computing and AI acceleration',
      category: 'Hardware',
      website: 'https://nvidia.com'
    },
    {
      name: 'Databricks',
      logo: '/partners/databricks.png',
      description: 'Unified analytics platform',
      category: 'Analytics',
      website: 'https://databricks.com'
    },
    {
      name: 'Snowflake',
      logo: '/partners/snowflake.png',
      description: 'Cloud data platform',
      category: 'Data Platform',
      website: 'https://snowflake.com'
    }
  ];

  const integrationPartners = [
    {
      name: 'SAP',
      logo: '/partners/sap.png',
      description: 'Enterprise resource planning integration',
      category: 'ERP',
      website: 'https://sap.com'
    },
    {
      name: 'Salesforce',
      logo: '/partners/salesforce.png',
      description: 'CRM and customer analytics',
      category: 'CRM',
      website: 'https://salesforce.com'
    },
    {
      name: 'Oracle',
      logo: '/partners/oracle.png',
      description: 'Database and enterprise applications',
      category: 'Database',
      website: 'https://oracle.com'
    },
    {
      name: 'ServiceNow',
      logo: '/partners/servicenow.png',
      description: 'IT service management platform',
      category: 'ITSM',
      website: 'https://servicenow.com'
    }
  ];

  const partnerBenefits = [
    {
      icon: Shield,
      title: locale.startsWith('th') ? 'ความเชี่ยวชาญที่ได้รับการรับรอง' : 'Certified Expertise',
      description: locale.startsWith('th') 
        ? 'ทีมของเราถือการรับรองจากพาร์ทเนอร์เทคโนโลยีชั้นนำ ทำให้มั่นใจในแนวทางปฏิบัติที่ดีที่สุดและการนำไปใช้งานที่เหมาะสม'
        : 'Our team holds certifications from leading technology partners, ensuring best practices and optimal implementations.'
    },
    {
      icon: Zap,
      title: locale.startsWith('th') ? 'ประสิทธิภาพที่เหมาะสม' : 'Optimized Performance',
      description: locale.startsWith('th') 
        ? 'ใช้ประโยชน์จากความรู้การผสานรวมอย่างลึกซึ้งของเราเพื่อให้ได้ประสิทธิภาพและประสิทธิผลสูงสุดจากเทคโนโลยีพาร์ทเนอร์'
        : 'Leverage our deep integration knowledge to achieve maximum performance and efficiency from partner technologies.'
    },
    {
      icon: Globe,
      title: locale.startsWith('th') ? 'ขนาดระดับองค์กร' : 'Enterprise Scale',
      description: locale.startsWith('th') 
        ? 'เข้าถึงคุณสมบัติและการสนับสนุนระดับองค์กรผ่านความสัมพันธ์พาร์ทเนอร์ของเราสำหรับการติดตั้งขนาดใหญ่'
        : 'Access to enterprise-grade features and support through our partner relationships for large-scale deployments.'
    },
    {
      icon: Award,
      title: locale.startsWith('th') ? 'การสนับสนุนลำดับความสำคัญ' : 'Priority Support',
      description: locale.startsWith('th') 
        ? 'ได้รับประโยชน์จากช่องทางการสนับสนุนลำดับความสำคัญและการเข้าถึงโดยตรงกับทีมวิศวกรพาร์ทเนอร์ผ่านความสัมพันธ์ของเรา'
        : 'Benefit from priority support channels and direct access to partner engineering teams through our relationships.'
    }
  ];

  const partnerProgram = [
    {
      title: locale.startsWith('th') ? 'ตัวแทนจำหน่ายเทคโนโลยี' : 'Technology Reseller',
      description: locale.startsWith('th') 
        ? 'เป็นพาร์ทเนอร์กับเราเพื่อขายต่อและนำโซลูชัน AI ไปใช้งานโดยใช้เทคโนโลยีที่ได้รับการรับรองของเรา'
        : 'Partner with us to resell and implement AI solutions using our certified technologies.',
      benefits: locale.startsWith('th') ? [
        'โอกาสแบ่งปันรายได้',
        'การฝึกอบรมและรับรองทางเทคนิค',
        'การสนับสนุนการตลาดและการร่วมแบรนด์',
        'ผู้จัดการความสำเร็จพาร์ทเนอร์เฉพาะ'
      ] : [
        'Revenue sharing opportunities',
        'Technical training and certification',
        'Marketing support and co-branding',
        'Dedicated partner success manager'
      ]
    },
    {
      title: locale.startsWith('th') ? 'พาร์ทเนอร์การผสานรวม' : 'Integration Partner',
      description: locale.startsWith('th') 
        ? 'ผสานรวมแพลตฟอร์มของคุณเข้ากับโซลูชัน AI ของเราเพื่อสร้างข้อเสนอที่รวมกันที่ทรงพลัง'
        : 'Integrate your platform with our AI solutions to create powerful combined offerings.',
      benefits: locale.startsWith('th') ? [
        'การเข้าถึง API และเอกสาร',
        'โอกาสร่วมเข้าสู่ตลาด',
        'การสนับสนุนการผสานรวมทางเทคนิค',
        'การตลาดร่วมและกิจกรรม'
      ] : [
        'API access and documentation',
        'Joint go-to-market opportunities',
        'Technical integration support',
        'Co-marketing and events'
      ]
    },
    {
      title: locale.startsWith('th') ? 'พาร์ทเนอร์แนะนำ' : 'Referral Partner',
      description: locale.startsWith('th') 
        ? 'แนะนำลูกค้ามาหาเราและรับค่าคอมมิชชั่นในขณะที่ช่วยพวกเขาบรรลุเป้าหมาย AI'
        : 'Refer clients to us and earn commissions while helping them achieve their AI goals.',
      benefits: locale.startsWith('th') ? [
        'ค่าธรรมเนียมแนะนำที่แข่งขันได้',
        'การสนับสนุนการคัดกรองลูกค้าเป้าหมาย',
        'วัสดุสนับสนุนการขาย',
        'การอัปเดตพาร์ทเนอร์เป็นประจำ'
      ] : [
        'Competitive referral fees',
        'Lead qualification support',
        'Sales enablement materials',
        'Regular partner updates'
      ]
    }
  ];

  return (
      <div className="bg-bg">
        {/* Hero Section */}
      <MagicHero
        eyebrow={locale.startsWith('th') ? 'โปรแกรมพันธมิตร' : 'Partnership Program'}
        title={locale.startsWith('th') ? 'สร้างระบบนิเวศ AI ที่แข็งแกร่งร่วมกัน' : 'Building Strong AI Ecosystems Together'}
        description={locale.startsWith('th') 
          ? 'เราเป็นพันธมิตรกับบริษัทเทคโนโลยีและผู้ให้บริการชั้นนำเพื่อส่งมอบโซลูชัน AI ที่ครอบคลุม เข้าร่วมระบบนิเวศของเราและปลดล็อกโอกาสใหม่ๆ สำหรับการเติบโตและนวัตกรรม'
          : 'We partner with leading technology companies and service providers to deliver comprehensive AI solutions. Join our ecosystem and unlock new opportunities for growth and innovation.'
        }
        align="center"
        metrics={[
          { value: '15+', label: locale.startsWith('th') ? 'พันธมิตรเทคโนโลยี' : 'Technology Partners' },
          { value: '8', label: locale.startsWith('th') ? 'พันธมิตรการรวมระบบ' : 'Integration Partners' },
          { value: '3', label: locale.startsWith('th') ? 'โปรแกรมพันธมิตร' : 'Partner Programs' }
        ]}
      />

      {/* Technology Partners */}
      <section className={SECTION_SPACING.FEATURES}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {locale.startsWith('th') ? 'พันธมิตรเทคโนโลยี' : 'Technology Partners'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {locale.startsWith('th') 
                ? 'เราทำงานร่วมกับบริษัทเทคโนโลยีชั้นนำเพื่อให้บริการโซลูชัน AI ที่ครอบคลุมและเชื่อถือได้'
                : 'We work with leading technology companies to provide comprehensive and reliable AI solutions.'
              }
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technologyPartners.map((partner, index) => (
              <Card key={index} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-primary mb-2">
                    {partner.category}
                  </p>
                  <p className="text-sm text-text-muted mb-4">
                    {partner.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={partner.website as any} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {locale.startsWith('th') ? 'เยี่ยมชมเว็บไซต์' : 'Visit Website'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className={`${SECTION_SPACING.FEATURES} bg-surface/30`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {locale.startsWith('th') ? 'พันธมิตรการรวมระบบ' : 'Integration Partners'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {locale.startsWith('th') 
                ? 'เรารวมระบบกับแพลตฟอร์มและบริการชั้นนำเพื่อสร้างโซลูชันที่ครอบคลุมและมีประสิทธิภาพ'
                : 'We integrate with leading platforms and services to create comprehensive and efficient solutions.'
              }
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {integrationPartners.map((partner, index) => (
              <Card key={index} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-accent mb-2">
                    {partner.category}
                  </p>
                  <p className="text-sm text-text-muted mb-4">
                    {partner.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={partner.website as any} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {locale.startsWith('th') ? 'เรียนรู้เพิ่มเติม' : 'Learn More'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className={SECTION_SPACING.FEATURES}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {locale.startsWith('th') ? 'เรื่องราวความสำเร็จ' : 'Success Stories'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {locale.startsWith('th') 
                ? 'ดูว่าพันธมิตรของเราช่วยให้ลูกค้าบรรลุเป้าหมายได้อย่างไร'
                : 'See how our partners help clients achieve their goals.'
              }
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary mb-2">300%</div>
                  <h3 className="text-lg font-semibold text-text mb-2">Manufacturing Efficiency</h3>
                  <p className="text-sm text-text-muted">
                    Partnered with Microsoft Azure to implement predictive maintenance AI, reducing downtime by 60% and increasing production efficiency by 300%.
                  </p>
                </div>
                <div className="text-xs text-primary font-medium">
                  Microsoft Azure • Manufacturing
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-accent mb-2">95%+</div>
                  <h3 className="text-lg font-semibold text-text mb-2">Financial Analytics</h3>
                  <p className="text-sm text-text-muted">
                    Leveraged AWS and Databricks to build real-time fraud detection system, improving accuracy by 95% and reducing false positives by 80%.
                  </p>
                </div>
                <div className="text-xs text-accent font-medium">
                  AWS • Databricks • Finance
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-hairline bg-surface/80">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary mb-2">250%</div>
                  <h3 className="text-lg font-semibold text-text mb-2">Retail Optimization</h3>
                  <p className="text-sm text-text-muted">
                    Integrated with Salesforce and Google Cloud to create personalized customer experience platform, increasing customer satisfaction by 250%.
                  </p>
                </div>
                <div className="text-xs text-primary font-medium">
                  Salesforce • Google Cloud • Retail
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className={SECTION_SPACING.FEATURES}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {locale.startsWith('th') ? 'ประโยชน์ของพันธมิตร' : 'Partner Benefits'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {locale.startsWith('th') 
                ? 'ความสัมพันธ์กับพันธมิตรของเรามอบข้อได้เปรียบที่สำคัญสำหรับลูกค้า'
                : 'Our partner relationships provide key advantages for clients.'
              }
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {partnerBenefits.map((benefit, index) => (
              <Card key={index} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Program */}
      <section className={`${SECTION_SPACING.FEATURES} bg-surface/30`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">
              {locale.startsWith('th') ? 'โปรแกรมพันธมิตร' : 'Partner Program'}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              {locale.startsWith('th') 
                ? 'เข้าร่วมโปรแกรมพันธมิตรของเราและสร้างโอกาสใหม่ๆ ในการเติบโต'
                : 'Join our partner program and create new opportunities for growth.'
              }
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {partnerProgram.map((program, index) => (
              <Card key={index} className="border border-hairline bg-surface/80 hover:bg-surface transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-text mb-3">
                    {program.title}
                  </h3>
                  <p className="text-text-muted mb-4">
                    {program.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-text">
                      {locale.startsWith('th') ? 'ประโยชน์:' : 'Benefits:'}
                    </h4>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2 text-sm text-text-muted">
                          <span className="text-primary mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${SECTION_SPACING.CTA} bg-gradient-to-br from-primary/10 via-transparent to-accent/10`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text mb-4">
            {locale.startsWith('th') ? 'พร้อมเป็นพันธมิตรกับเรา?' : 'Ready to Partner with Us?'}
          </h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            {locale.startsWith('th') 
              ? 'เข้าร่วมระบบนิเวศพันธมิตรของเราและสร้างโอกาสใหม่ๆ ในการเติบโตและนวัตกรรม'
              : 'Join our partner ecosystem and create new opportunities for growth and innovation.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={`${basePath}/contact?type=partnership` as any}>
                {locale.startsWith('th') ? 'เป็นพันธมิตร' : 'Become a Partner'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`${basePath}/contact?type=integration` as any}>
                {locale.startsWith('th') ? 'รวมระบบ' : 'Integrate'}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
