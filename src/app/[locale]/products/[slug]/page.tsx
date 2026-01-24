import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';

// Components
import { HeroSection } from '@/components/products/hero-section';
import { FeaturesGrid } from '@/components/products/features-grid';
import { PricingSection } from '@/components/products/pricing-section';
import { FAQSection } from '@/components/products/faq-section';
import { CTASection } from '@/components/products/cta-section';
import { TechStackSection } from '@/components/products/tech-stack-section';
import { HowItWorksSection } from '@/components/products/how-it-works-section';

interface Props {
  params: { locale: string; slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = params;
  const t = await getTranslations(`products.${slug}`);

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://cerebratechai.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://cerebratechai.com/products',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `https://cerebratechai.com/products/${slug}`,
      },
    ],
  };

  return {
    title: `${t('name')} | CerebraTechAI`,
    description: t('tagline'),
    other: {
      'application/ld+json': JSON.stringify(breadcrumbSchema),
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { locale, slug } = params;
  const t = await getTranslations(`products.${slug}`);

  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <HeroSection product={product} locale={locale} />
      <FeaturesGrid features={product.features} />
      <HowItWorksSection steps={product.howItWorks?.steps || []} />
      <TechStackSection techStack={product.techStack} />
      <PricingSection pricing={product.pricing} />
      <FAQSection faq={product.faq} />
      <CTASection product={product} locale={locale} />
    </main>
  );
}

// Generate static params for all products
export async function generateStaticParams() {
  const locales = ['en', 'th'];
  return locales.flatMap(locale =>
    products.map(product => ({
      locale,
      slug: product.slug,
    }))
  );
}
