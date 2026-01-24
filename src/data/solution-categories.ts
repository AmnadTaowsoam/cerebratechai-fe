/**
 * Solution Categories for AI-First Positioning
 *
 * Separates AI Core Solutions from Engineering Accelerators
 * to clearly communicate our focus on AI services
 */

export type SolutionCategory = {
  id: string;
  name: {
    en: string;
    th: string;
  };
  description: {
    en: string;
    th: string;
  };
  type: 'ai-core' | 'accelerator';
  solutionSlugs: string[];
  order: number;
};

export const solutionCategories: SolutionCategory[] = [
  // AI Core Solutions (Main Focus)
  {
    id: 'llm-rag',
    name: {
      en: 'LLM & RAG Solutions',
      th: 'โซลูชัน LLM และ RAG',
    },
    description: {
      en: 'Thai-optimized language models and retrieval-augmented generation for knowledge management and intelligent assistance',
      th: 'โมเดลภาษาและระบบ RAG ที่ปรับแต่งสำหรับภาษาไทย สำหรับการจัดการความรู้และผู้ช่วยอัจฉริยะ',
    },
    type: 'ai-core',
    solutionSlugs: ['llm-knowledge-assistant', 'knowledge-management-solution'],
    order: 1,
  },
  {
    id: 'computer-vision',
    name: {
      en: 'Computer Vision',
      th: 'Computer Vision',
    },
    description: {
      en: 'Visual AI for quality inspection, OCR, and object detection with explainable results',
      th: 'AI ด้านการมองเห็นสำหรับการตรวจสอบคุณภาพ OCR และการตรวจจับวัตถุพร้อมผลลัพธ์ที่อธิบายได้',
    },
    type: 'ai-core',
    solutionSlugs: [
      'vision-quality-inspection',
      'ocr-workbench',
      'ocr-dashboard-solution',
      'depth-camera-solution',
    ],
    order: 2,
  },
  {
    id: 'predictive-analytics',
    name: {
      en: 'Predictive Analytics & ML',
      th: 'การวิเคราะห์เชิงคาดการณ์และ ML',
    },
    description: {
      en: 'Time-series forecasting, anomaly detection, and predictive maintenance for industrial operations',
      th: 'การพยากรณ์อนุกรมเวลา การตรวจจับความผิดปกติ และการบำรุงรักษาเชิงคาดการณ์สำหรับการดำเนินงานอุตสาหกรรม',
    },
    type: 'ai-core',
    solutionSlugs: ['predictive-maintenance', 'analytics-cockpit'],
    order: 3,
  },
  {
    id: 'edge-ai',
    name: {
      en: 'Edge AI & IoT',
      th: 'Edge AI และ IoT',
    },
    description: {
      en: 'On-device AI processing for low latency, offline capability, and enhanced privacy',
      th: 'การประมวลผล AI บนอุปกรณ์สำหรับความเร็วสูง ใช้งานออฟไลน์ได้ และความเป็นส่วนตัวที่ดีขึ้น',
    },
    type: 'ai-core',
    solutionSlugs: [
      'edge-computer-solution',
      'nvr-cctv-solution',
      'aiot-pipeline',
    ],
    order: 4,
  },

  // Engineering Accelerators (Supporting Services)
  {
    id: 'mlops-platform',
    name: {
      en: 'MLOps & Data Platform',
      th: 'MLOps และแพลตฟอร์มข้อมูล',
    },
    description: {
      en: 'Foundation infrastructure for ML operations, data pipelines, and model governance',
      th: 'โครงสร้างพื้นฐานสำหรับการดำเนินงาน ML ไปป์ไลน์ข้อมูล และการจัดการโมเดล',
    },
    type: 'accelerator',
    solutionSlugs: ['data-foundation'],
    order: 5,
  },
  {
    id: 'engineering-services',
    name: {
      en: 'Engineering Services',
      th: 'บริการด้านวิศวกรรม',
    },
    description: {
      en: 'Supporting engineering services for frontend, backend, and infrastructure modernization',
      th: 'บริการด้านวิศวกรรมสนับสนุนสำหรับ frontend, backend และการปรับปรุงโครงสร้างพื้นฐาน',
    },
    type: 'accelerator',
    solutionSlugs: ['frontend-starter', 'backend-modernization'],
    order: 6,
  },
];

/**
 * Get category for a solution slug
 */
export function getCategoryForSolution(
  slug: string
): SolutionCategory | undefined {
  return solutionCategories.find(cat => cat.solutionSlugs.includes(slug));
}

/**
 * Get all AI Core solutions
 */
export function getAICoreSolutions(): SolutionCategory[] {
  return solutionCategories
    .filter(cat => cat.type === 'ai-core')
    .sort((a, b) => a.order - b.order);
}

/**
 * Get all Accelerator solutions
 */
export function getAcceleratorSolutions(): SolutionCategory[] {
  return solutionCategories
    .filter(cat => cat.type === 'accelerator')
    .sort((a, b) => a.order - b.order);
}

/**
 * Check if a solution is AI Core
 */
export function isAICoreSolution(slug: string): boolean {
  const category = getCategoryForSolution(slug);
  return category?.type === 'ai-core';
}
