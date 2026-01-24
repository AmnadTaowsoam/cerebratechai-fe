import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { SmartFarmContent } from './smartfarm-content';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'products.smartfarm' });

  return {
    title: `${t('name')} - ${t('tagline')}`,
    description: t('heroSubtitle'),
    openGraph: {
      title: t('heroTitle'),
      description: t('heroSubtitle'),
    },
  };
}

export default async function SmartFarmPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'products.smartfarm' });

  // Extract all translations as plain object for Client Component
  const translations = {
    heroTitle: t('heroTitle'),
    heroSubtitle: t('heroSubtitle'),
    ctaPrimary: t('ctaPrimary'),
    ctaSecondary: t('ctaSecondary'),
    'stats.title': t('stats.title'),
    'stats.subtitle': t('stats.subtitle'),
    'stats.accuracy': t('stats.accuracy'),
    'stats.accuracyDesc': t('stats.accuracyDesc'),
    'stats.uptime': t('stats.uptime'),
    'stats.uptimeDesc': t('stats.uptimeDesc'),
    'stats.response': t('stats.response'),
    'stats.responseDesc': t('stats.responseDesc'),
    'stats.clients': t('stats.clients'),
    'stats.clientsDesc': t('stats.clientsDesc'),
    features: t('features'),
    feature1_title: t('feature1_title'),
    feature1_desc: t('feature1_desc'),
    feature2_title: t('feature2_title'),
    feature2_desc: t('feature2_desc'),
    feature3_title: t('feature3_title'),
    feature3_desc: t('feature3_desc'),
    feature4_title: t('feature4_title'),
    feature4_desc: t('feature4_desc'),
    'weighVision.badge': t('weighVision.badge'),
    'weighVision.title': t('weighVision.title'),
    'weighVision.description': t('weighVision.description'),
    'weighVision.feature1_title': t('weighVision.feature1_title'),
    'weighVision.feature1_desc': t('weighVision.feature1_desc'),
    'weighVision.feature2_title': t('weighVision.feature2_title'),
    'weighVision.feature2_desc': t('weighVision.feature2_desc'),
    'weighVision.feature3_title': t('weighVision.feature3_title'),
    'weighVision.feature3_desc': t('weighVision.feature3_desc'),
    'offlineFirst.badge': t('offlineFirst.badge'),
    'offlineFirst.title': t('offlineFirst.title'),
    'offlineFirst.description': t('offlineFirst.description'),
    'offlineFirst.feature1_title': t('offlineFirst.feature1_title'),
    'offlineFirst.feature1_desc': t('offlineFirst.feature1_desc'),
    'offlineFirst.feature2_title': t('offlineFirst.feature2_title'),
    'offlineFirst.feature2_desc': t('offlineFirst.feature2_desc'),
    'offlineFirst.feature3_title': t('offlineFirst.feature3_title'),
    'offlineFirst.feature3_desc': t('offlineFirst.feature3_desc'),
    'offlineFirst.feature4_title': t('offlineFirst.feature4_title'),
    'offlineFirst.feature4_desc': t('offlineFirst.feature4_desc'),
    dashboardDemo: t('dashboardDemo'),
    sensorReadings: t('sensorReadings'),
    temperature: t('temperature'),
    humidity: t('humidity'),
    soilMoisture: t('soilMoisture'),
    lightLevel: t('lightLevel'),
    toggleControls: t('toggleControls'),
    irrigation: t('irrigation'),
    ventilation: t('ventilation'),
    lighting: t('lighting'),
    'techStack.badge': t('techStack.badge'),
    'techStack.title': t('techStack.title'),
    'techStack.description': t('techStack.description'),
    'techStack.edge': t('techStack.edge'),
    'techStack.edgeDesc': t('techStack.edgeDesc'),
    'techStack.cloud': t('techStack.cloud'),
    'techStack.cloudDesc': t('techStack.cloudDesc'),
    'techStack.mobile': t('techStack.mobile'),
    'techStack.mobileDesc': t('techStack.mobileDesc'),
    pricing: t('pricing'),
    starterKit: t('starterKit'),
    starterPrice: t('starterPrice'),
    starterDesc: t('starterDesc'),
    farmKit: t('farmKit'),
    farmPrice: t('farmPrice'),
    farmDesc: t('farmDesc'),
    enterprise: t('enterprise'),
    custom: t('custom'),
    enterpriseDesc: t('enterpriseDesc'),
    getStarted: t('getStarted'),
    contactUs: t('contactUs'),
    'faq.title': t('faq.title'),
    'faq.subtitle': t('faq.subtitle'),
    'faq.q1': t('faq.q1'),
    'faq.a1': t('faq.a1'),
    'faq.q2': t('faq.q2'),
    'faq.a2': t('faq.a2'),
    'faq.q3': t('faq.q3'),
    'faq.a3': t('faq.a3'),
    'faq.q4': t('faq.q4'),
    'faq.a4': t('faq.a4'),
    ctaTitle: t('ctaTitle'),
    ctaDesc: t('ctaDesc'),
  };

  return (
    <main className="min-h-screen">
      <SmartFarmContent translations={translations} />
    </main>
  );
}
