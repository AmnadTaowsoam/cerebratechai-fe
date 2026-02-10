'use client';

import { cn } from '@/lib/utils';
import { Marquee } from '@/components/magicui/marquee';
import { useLocale } from 'next-intl';

const industries = [
  'Manufacturing',
  'Agriculture',
  'Finance & Banking',
  'Healthcare',
  'Retail & E-commerce',
  'Logistics & Supply Chain',
  'Energy & Utilities',
  'Legal & Compliance',
  'Education',
  'Real Estate',
  'HR & Workforce',
  'Construction',
  'Mining',
  'Media & Content',
  'Public Sector',
  'Hospitality',
  'Insurance',
  'Telecommunications',
];

const capabilities = [
  'Computer Vision',
  'Natural Language Processing',
  'Generative AI',
  'Edge Computing',
  'IoT & Sensors',
  'Predictive Analytics',
  'Anomaly Detection',
  'OCR & Document Intelligence',
  'Speech Recognition',
  'Recommendation Engines',
  'Robotics Automation',
  'Digital Twins',
  'Facial Recognition',
  'Sentiment Analysis',
  'Risk Assessment',
];

const scenarios = [
  'Smart Factory QC',
  'Crop Disease Monitoring',
  'Fraud Detection System',
  'Credit Scoring Engine',
  'Invoice Processing Automation',
  'Patient Triage Assistant',
  'Customer Insight Platform',
  'Worker Safety Monitoring',
  'Supply Chain Optimization',
  'Legal Contract Analysis',
  'Energy Consumption Optimization',
  'Retail Heatmap Analytics',
  'Predictive Maintenance',
  'Automated claims processing',
  'Personalized Learning Paths',
  'Real-time Inventory Tracking',
  'Cybersecurity Threat Detection',
  'Algorithmic Trading',
  'Smart Traffic Management',
  'Remote Patient Monitoring',
];

const ScenarioCard = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center px-4 py-2 mx-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/10 transition-colors cursor-default">
      <span className="text-sm font-medium text-text-muted whitespace-nowrap">
        {text}
      </span>
    </div>
  );
};

export function ScenarioMarquee() {
  const locale = useLocale();
  const isThai = locale === 'th';

  return (
    <section className="relative w-full py-16 overflow-hidden border-y border-white/5 bg-bg/50 backdrop-blur-sm">
      <div className="container px-4 md:px-6 mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          {isThai ? 'ตอบโจทย์ทุกอุตสาหกรรม' : 'Unmatched Versatility'}
        </h2>
        <p className="mx-auto max-w-[600px] text-text-muted md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-2">
          {isThai
            ? 'กว่า 500+ Scenarios ที่พร้อมใช้งานและปรับแต่งได้ทันที'
            : 'Over 500+ production-ready scenarios across 20+ industries.'}
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {industries.map((item) => (
            <ScenarioCard key={item} text={item} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:35s] mt-4">
          {capabilities.map((item) => (
            <ScenarioCard key={item} text={item} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:45s] mt-4">
          {scenarios.map((item) => (
            <ScenarioCard key={item} text={item} />
          ))}
        </Marquee>
        
        {/* Gradients for fade effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-bg via-bg/80 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-bg via-bg/80 to-transparent"></div>
      </div>
    </section>
  );
}
