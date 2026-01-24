/**
 * Brand Configuration
 *
 * Centralized brand configuration to avoid hardcoding brand name across the codebase
 *
 * @author CerebraTechAI Team
 * @created 2026-01-11
 */

export const BRAND_CONFIG = {
  name: 'CerebraTechAI',
  tagline: {
    th: 'ปรับปัญหาจริงเป็น AI ที่พร้อมใช้งาน',
    en: 'Turn pain points into production-ready AI',
  },
  contact: {
    email: {
      general: 'hello@cerebratechai.com',
      security: 'security@cerebratechai.com',
      privacy: 'privacy@cerebratechai.com',
      compliance: 'compliance@cerebratechai.com',
    },
    phone: '+66 (0) 2 123 4567',
    address: {
      th: 'กรุงเทพมหานคร ประเทศไทย',
      en: 'Bangkok, Thailand',
    },
  },
  social: {
    linkedin: 'https://linkedin.com/company/cerebratechai',
    facebook: 'https://facebook.com/cerebratechai',
    github: 'https://github.com/cerebratechai',
    youtube: 'https://youtube.com/@cerebratechai',
  },
  legal: {
    companyName: 'CerebraTechAI Co., Ltd.',
    taxId: 'XXX-XXXX-XXXX-X',
    registrationNumber: 'XXXXXXXXXXXXX',
  },
} as const;

export type BrandConfig = typeof BRAND_CONFIG;
