import { packagesMap, pricingOrder } from '@/data/packages';

interface PricingCompareProps {
  locale?: string;
}

const features = [
  { name: 'Prototype/Demo', key: 'prototype' },
  { name: 'Monitoring', key: 'monitoring' },
  { name: 'High Availability', key: 'ha' },
  { name: 'SLA Support', key: 'sla' },
  { name: 'Disaster Recovery', key: 'dr' },
  { name: 'Compliance', key: 'compliance' },
];

const featureMap: Record<string, Record<string, string>> = {
  prototype: {
    kickstart: 'Basic',
    poc_lab: 'Advanced',
    pilot_launch: 'Production-ready',
    production_scale: 'Enterprise-grade',
  },
  monitoring: {
    kickstart: 'Basic',
    poc_lab: 'Experiment tracking',
    pilot_launch: 'Full monitoring',
    production_scale: 'Advanced analytics',
  },
  ha: {
    kickstart: 'Not included',
    poc_lab: 'Not included',
    pilot_launch: 'Basic',
    production_scale: 'Multi-AZ',
  },
  sla: {
    kickstart: 'Not included',
    poc_lab: 'Not included',
    pilot_launch: 'Business hours',
    production_scale: '24/7',
  },
  dr: {
    kickstart: 'Not included',
    poc_lab: 'Not included',
    pilot_launch: 'Basic backup',
    production_scale: 'Full DR',
  },
  compliance: {
    kickstart: 'Not included',
    poc_lab: 'Not included',
    pilot_launch: 'Basic security',
    production_scale: 'Enterprise compliance',
  },
};

export default function PricingCompare({ locale = 'en' }: PricingCompareProps) {
  const packages = pricingOrder.map(id => packagesMap[id]);
  const isThai = locale === 'th';

  return (
    <div className="rounded-2xl border border-white/10 bg-surface/60 p-6">
      <h3 className="text-xl font-semibold text-text mb-6">
        {isThai ? 'เปรียบเทียบฟีเจอร์' : 'Feature Comparison'}
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
                  {pkg.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map(feature => (
              <tr key={feature.key} className="border-b border-white/5">
                <td className="py-3 px-4 font-medium text-text">{feature.name}</td>
                {packages.map(pkg => (
                  <td key={pkg.id} className="text-center py-3 px-4 text-text-muted">
                    {featureMap[feature.key]?.[pkg.id] || (isThai ? 'ไม่รวม' : 'Not included')}
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

