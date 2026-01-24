/**
 * Contact Configuration
 * Centralized contact links and social media handles
 */

export const contactLinks = {
  line: {
    consumer: 'https://line.me/ti/p/@cerebratechai', // General
    phitiai: 'https://line.me/ti/p/@phitiai',
    sookwai: 'https://line.me/ti/p/@sookwai',
    pluktunraka: 'https://line.me/ti/p/@pluktunraka',
  },
  email: 'contact@cerebratechai.com',
  phone: '+66-XX-XXX-XXXX',
  demoForm: 'https://forms.google.com/your-demo-form',
  quoteForm: 'https://forms.google.com/your-quote-form',
};

export const socialLinks = {
  linkedin: 'https://linkedin.com/company/cerebratechai',
  github: 'https://github.com/cerebratechai',
  youtube: 'https://youtube.com/@cerebratechai',
  facebook: 'https://facebook.com/cerebratechai',
};

export const getLineLink = (product?: string): string => {
  if (!product) return contactLinks.line.consumer;

  const productKey = product.toLowerCase() as keyof typeof contactLinks.line;
  return contactLinks.line[productKey] || contactLinks.line.consumer;
};
