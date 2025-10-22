'use client';
import { useState } from 'react';
import { HelpCircle } from 'lucide-react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  locale?: string;
}

const glossary = {
  en: {
    'Canary': 'A deployment strategy where new version is rolled out to a small subset of users first',
    'Blue-green': 'A deployment strategy using two identical production environments',
    'Guardrails': 'Safety mechanisms to prevent AI from generating harmful or inappropriate content',
    'RAG': 'Retrieval-Augmented Generation - AI technique that combines retrieval and generation',
    'LLM': 'Large Language Model - AI model trained on vast amounts of text data',
    'Edge CV': 'Computer Vision processing at the edge (on-device) rather than in the cloud',
    'IoT': 'Internet of Things - network of physical devices connected to the internet',
    'MLOps': 'Machine Learning Operations - practices for deploying and maintaining ML systems'
  },
  th: {
    'Canary': 'กลยุทธ์การปล่อยใช้งานที่เริ่มต้นกับผู้ใช้จำนวนน้อยก่อน',
    'Blue-green': 'กลยุทธ์การปล่อยใช้งานโดยใช้สภาพแวดล้อมการผลิตสองชุดที่เหมือนกัน',
    'Guardrails': 'กลไกความปลอดภัยเพื่อป้องกัน AI จากการสร้างเนื้อหาที่เป็นอันตราย',
    'RAG': 'Retrieval-Augmented Generation - เทคนิค AI ที่รวมการค้นหาและการสร้าง',
    'LLM': 'Large Language Model - โมเดล AI ที่ฝึกด้วยข้อมูลข้อความจำนวนมาก',
    'Edge CV': 'การประมวลผล Computer Vision ที่ Edge (บนอุปกรณ์) แทนที่จะเป็นในคลาวด์',
    'IoT': 'Internet of Things - เครือข่ายของอุปกรณ์ที่เชื่อมต่อกับอินเทอร์เน็ต',
    'MLOps': 'Machine Learning Operations - แนวทางสำหรับการปล่อยและบำรุงรักษาระบบ ML'
  }
};

export default function Tooltip({ children, content, locale = 'en' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isThai = locale === 'th';
  const glossaryContent = glossary[isThai ? 'th' : 'en'][content as keyof typeof glossary.en] || content;

  return (
    <span className="relative inline-block">
      <span
        className="inline-flex items-center gap-1 cursor-help text-primary hover:text-primary/80 transition-colors"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
        <HelpCircle className="h-3 w-3" />
      </span>
      
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50">
          <div className="bg-surface border border-white/20 rounded-lg p-3 shadow-lg max-w-xs">
            <p className="text-xs text-text-muted leading-relaxed">
              {glossaryContent}
            </p>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-surface"></div>
          </div>
        </div>
      )}
    </span>
  );
}

