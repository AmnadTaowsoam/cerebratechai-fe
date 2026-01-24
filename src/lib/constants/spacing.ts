// Standardized spacing constants for consistent section spacing across the website

// Section spacing (vertical padding)
export const SECTION_SPACING = {
  HERO: 'py-24 md:py-20 lg:py-24',
  STATS: 'py-20',
  FEATURES: 'py-20',
  HOW_IT_WORKS: 'py-20',
  TECH_STACK: 'py-20',
  PRICING: 'py-20',
  FAQ: 'py-20',
  CTA: 'py-20',
  VALUE_CARDS: 'py-20',
  TEAM: 'py-20',
  CLIENT_TESTIMONIALS: 'py-20',
  SUCCESS_STORY: 'py-20',
  CONTACT: 'py-20',
  INDUSTRIES: 'py-20',
  PLATFORM_SOLUTIONS: 'py-20',
  SERVICES_GRID: 'py-20',
  JOURNEY: 'py-20',
};

// Container padding (horizontal)
export const CONTAINER_PADDING = {
  mobile: 'px-4',
  tablet: 'px-6',
  desktop: 'px-8',
};

// Combined spacing classes
export const getSectionSpacing = (
  section: keyof typeof SECTION_SPACING
): string => {
  const vertical = SECTION_SPACING[section];
  const horizontal = SECTION_SPACING[section];
  return `${vertical} ${horizontal}`;
};

export const getContainerPadding = (): string => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return isMobile ? CONTAINER_PADDING.mobile : CONTAINER_PADDING.desktop;
};

export const getSectionClassName = (
  section: keyof typeof SECTION_SPACING
): string => {
  const base = getSectionSpacing(section);
  return `${base} ${getContainerPadding()}`;
};
