import { packagesMap, pricingOrder } from '@/data/packages';

interface PricingCompareProps {
  locale?: string;
}

const features = [
  { name: 'Prototype/Demo', nameTh: 'Prototype/เดโม', key: 'prototype' },
  { name: 'Monitoring', nameTh: 'Monitoring', key: 'monitoring' },
  { name: 'High Availability', nameTh: 'High Availability', key: 'ha' },
  { name: 'SLA Support', nameTh: 'SLA Support', key: 'sla' },
  { name: 'Disaster Recovery', nameTh: 'Disaster Recovery', key: 'dr' },
  { name: 'Compliance', nameTh: 'Compliance', key: 'compliance' },
];

const featureMap: Record<string, Record<string, { en: string; th: string }>> = {
  prototype: {
    kickstart: { en: 'Basic', th: 'พื้นฐาน' },
    poc_lab: { en: 'Advanced', th: 'ขั้นสูง' },
    pilot_launch: { en: 'Production-ready', th: 'พร้อมใช้งานจริง' },
    production_scale: { en: 'Enterprise-grade', th: 'ระดับองค์กร' },
  },
  monitoring: {
    kickstart: { en: 'Basic', th: 'พื้นฐาน' },
    poc_lab: { en: 'Experiment tracking', th: 'ติดตามการทดลอง' },
    pilot_launch: { en: 'Full monitoring', th: 'Monitoring เต็มรูปแบบ' },
    production_scale: { en: 'Advanced analytics', th: 'Analytics ขั้นสูง' },
  },
  ha: {
    kickstart: { en: 'Not included', th: 'ไม่รวม' },
    poc_lab: { en: 'Not included', th: 'ไม่รวม' },
    pilot_launch: { en: 'Basic', th: 'พื้นฐาน' },
    production_scale: { en: 'Multi-AZ', th: 'Multi-AZ' },
  },
  sla: {
    kickstart: { en: 'Not included', th: 'ไม่รวม' },
    poc_lab: { en: 'Not included', th: 'ไม่รวม' },
    pilot_launch: { en: 'Business hours', th: 'เวลาทำการ' },
    production_scale: { en: '24/7', th: '24/7' },
  },
  dr: {
    kickstart: { en: 'Not included', th: 'ไม่รวม' },
    poc_lab: { en: 'Not included', th: 'ไม่รวม' },
    pilot_launch: { en: 'Basic backup', th: 'Backup พื้นฐาน' },
    production_scale: { en: 'Full DR', th: 'DR เต็มรูปแบบ' },
  },
  compliance: {
    kickstart: { en: 'Not included', th: 'ไม่รวม' },
    poc_lab: { en: 'Not included', th: 'ไม่รวม' },
    pilot_launch: { en: 'Basic security', th: 'Security พื้นฐาน' },
    production_scale: { en: 'Enterprise compliance', th: 'Compliance ระดับองค์กร' },
  },
};

export default function PricingCompare({ locale = 'en' }: PricingCompareProps) {
  const packages = pricingOrder.map(id => packagesMap[id]);
  const isThai = locale === 'th';

  return (
    <div className="rounded-2xl border border-white/10 bg-surface/60 p-6">
      <h3 className="text-xl font-semibold text-text mb-6">
        {isThai ? 'เทียบฟีเจอร์แพ็กเกจ' : 'Feature Comparison'}
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 font-semibold text-text">
                {isThai ? 'ฟีเจอร์' : 'Features'}
              </th>
              {packages.map(pkg => (
                <th key={pkg.id} className="text-center py-3 px-4 font-semibold text-text min-w-[120px]">
                  {isThai ? (pkg.titleTh ?? pkg.title) : pkg.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map(feature => (
              <tr key={feature.key} className="border-b border-white/5">
                <td className="py-3 px-4 font-medium text-text">
                  {isThai ? feature.nameTh : feature.name}
                </td>
                {packages.map(pkg => (
                  <td key={pkg.id} className="text-center py-3 px-4 text-text-muted">
                    {featureMap[feature.key]?.[pkg.id]
                      ? (isThai ? featureMap[feature.key][pkg.id].th : featureMap[feature.key][pkg.id].en)
                      : (isThai ? 'ไม่รวม' : 'Not included')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
