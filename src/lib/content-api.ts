// Content API client for fetching dynamic content from CMS
// With fallback to local data/content.ts

import { 
  valueCards, 
  processSteps, 
  services, 
  packages, 
  caseStudies 
} from '@/data/content';

const CONTENT_API_URL = process.env.NEXT_PUBLIC_CONTENT_API_URL || 'https://cerebratechai-production.up.railway.app/api/content';

// Types
export type LocaleValue = {
  en: string;
  th: string;
};

export type ValueCard = {
  id: string;
  identifier: string;
  title: LocaleValue;
  description: LocaleValue;
  icon: string;
  bullets: LocaleValue[];
  display_order: number;
};

export type ProcessStep = {
  id: string;
  identifier: string;
  title: LocaleValue;
  description: LocaleValue;
  display_order: number;
};

export type Feature = {
  id: string;
  identifier: string;
  title: LocaleValue;
  description: LocaleValue;
  icon: string;
  gradient?: string;
  benefits: LocaleValue[];
  display_order: number;
};

export type HeroStat = {
  id: string;
  identifier: string;
  label: LocaleValue;
  value: string;
  display_order: number;
};

// API fetch with fallback
const DISABLED_REMOTE_ENDPOINTS = new Set(['/value-cards', '/process-steps']);

async function fetchWithFallback<T>(
  endpoint: string,
  fallbackData: T,
  options?: RequestInit
): Promise<T> {
  if (DISABLED_REMOTE_ENDPOINTS.has(endpoint)) {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`Skipping remote fetch for ${endpoint}; using bundled fallback data`);
    }
    return fallbackData;
  }

  // In development mode, always use fallback data to avoid connection errors
  if (process.env.NODE_ENV === 'development') {
    console.log(`Using fallback data for ${endpoint} in development mode`);
    return fallbackData;
  }

  try {
    const response = await fetch(`${CONTENT_API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      console.warn(`Content API ${endpoint} failed with status ${response.status}, using fallback`);
      return fallbackData;
    }

    const result = await response.json();
    return result.data || result;
  } catch (error) {
    console.warn(`Content API ${endpoint} error:`, error, '- using fallback');
    return fallbackData;
  }
}

// Value Cards API
export async function getValueCards(): Promise<ValueCard[]> {
  const fallback = valueCards.map((card, index) => ({
    id: card.id,
    identifier: card.id,
    title: card.title,
    description: card.description,
    icon: card.icon,
    bullets: card.bullets,
    display_order: index + 1,
  }));

  return fetchWithFallback<ValueCard[]>('/value-cards', fallback);
}

// Process Steps API
export async function getProcessSteps(): Promise<ProcessStep[]> {
  const fallback = processSteps.map((step, index) => ({
    id: step.id,
    identifier: step.id,
    title: step.title,
    description: step.description,
    display_order: index + 1,
  }));

  return fetchWithFallback<ProcessStep[]>('/process-steps', fallback);
}

// Features API (for features section)
export async function getFeatures(): Promise<Feature[]> {
  // Default features from features-section.tsx
  const defaultFeatures: Feature[] = [
    {
      id: 'machine-learning',
      identifier: 'machine-learning',
      title: { en: 'Machine Learning', th: 'Machine Learning' },
      description: { 
        en: 'Advanced ML models for predictive analytics and intelligent automation', 
        th: 'โมเดล ML ขั้นสูงสำหรับการวิเคราะห์เชิงคาดการณ์และระบบอัตโนมัติอัจฉริยะ' 
      },
      icon: 'brain',
      gradient: 'from-cyan-500/30 via-transparent to-indigo-600/20',
      benefits: [
        { en: 'Predictive Analytics', th: 'การวิเคราะห์เชิงคาดการณ์' },
        { en: 'Automated Decision Making', th: 'การตัดสินใจอัตโนมัติ' },
        { en: 'Pattern Recognition', th: 'การรู้จำรูปแบบ' }
      ],
      display_order: 1
    },
    {
      id: 'computer-vision',
      identifier: 'computer-vision',
      title: { en: 'Computer Vision', th: 'Computer Vision' },
      description: { 
        en: 'State-of-the-art image and video processing capabilities', 
        th: 'ความสามารถในการประมวลผลภาพและวิดีโอระดับล้ำสมัย' 
      },
      icon: 'cpu',
      gradient: 'from-purple-500/20 via-transparent to-fuchsia-500/20',
      benefits: [
        { en: 'Object Detection', th: 'การตรวจจับวัตถุ' },
        { en: 'Image Classification', th: 'การจำแนกประเภทภาพ' },
        { en: 'Real-time Processing', th: 'การประมวลผลแบบเรียลไทม์' }
      ],
      display_order: 2
    }
  ];

  return fetchWithFallback<Feature[]>('/features', defaultFeatures);
}

// Hero Stats API
export async function getHeroStats(): Promise<HeroStat[]> {
  const defaultStats: HeroStat[] = [
    {
      id: 'pocs-delivered',
      identifier: 'pocs-delivered',
      value: '12+',
      label: { en: 'POCs Delivered', th: 'POCs ที่ส่งมอบ' },
      display_order: 1
    },
    {
      id: 'average-time',
      identifier: 'average-time',
      value: '4-8',
      label: { en: 'Weeks Average', th: 'สัปดาห์เฉลี่ย' },
      display_order: 2
    },
    {
      id: 'starting-price',
      identifier: 'starting-price',
      value: '80K',
      label: { en: 'Starting From (THB)', th: 'เริ่มต้น (บาท)' },
      display_order: 3
    }
  ];

  return fetchWithFallback<HeroStat[]>('/hero-stats', defaultStats);
}

// Services API (existing endpoint)
export async function getServices(params?: { 
  limit?: number; 
  featured?: boolean; 
  category?: string 
}) {
  const queryParams = new URLSearchParams();
  if (params?.limit) queryParams.set('limit', params.limit.toString());
  if (params?.featured !== undefined) queryParams.set('featured', params.featured.toString());
  if (params?.category) queryParams.set('category', params.category);

  const endpoint = `/services${queryParams.toString() ? `?${queryParams}` : ''}`;
  const fallback = { 
    data: services.slice(0, params?.limit || 10), 
    pagination: { page: 1, limit: params?.limit || 10, total: services.length, pages: 1 } 
  };

  return fetchWithFallback(endpoint, fallback);
}

// Packages API (existing endpoint)
export async function getPackages(params?: { limit?: number; featured?: boolean }) {
  const queryParams = new URLSearchParams();
  if (params?.limit) queryParams.set('limit', params.limit.toString());
  if (params?.featured !== undefined) queryParams.set('featured', params.featured.toString());

  const endpoint = `/packages${queryParams.toString() ? `?${queryParams}` : ''}`;
  const fallback = { 
    data: packages.slice(0, params?.limit || 10), 
    pagination: { page: 1, limit: params?.limit || 10, total: packages.length, pages: 1 } 
  };

  return fetchWithFallback(endpoint, fallback);
}

// Case Studies API (existing endpoint)
export async function getCaseStudies(params?: { limit?: number; featured?: boolean; category?: string }) {
  const queryParams = new URLSearchParams();
  if (params?.limit) queryParams.set('limit', params.limit.toString());
  if (params?.featured !== undefined) queryParams.set('featured', params.featured.toString());
  if (params?.category) queryParams.set('category', params.category);

  const endpoint = `/cases${queryParams.toString() ? `?${queryParams}` : ''}`;
  const fallback = { 
    data: caseStudies.slice(0, params?.limit || 10), 
    pagination: { page: 1, limit: params?.limit || 10, total: caseStudies.length, pages: 1 } 
  };

  return fetchWithFallback(endpoint, fallback);
}

// Helper function to get localized value
export const getLocalized = (locale: string, value: LocaleValue): string => {
  return locale.startsWith('th') ? value.th : value.en;
};

