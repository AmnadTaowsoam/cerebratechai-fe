'use client';

import { useLocale } from 'next-intl';
import { JsonLd } from './JsonLd';

interface ArticleSchemaProps {
  headline: string;
  articleBody?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  imageUrl?: string;
}

export function ArticleSchema({
  headline,
  articleBody,
  author,
  datePublished,
  dateModified,
  imageUrl,
}: ArticleSchemaProps) {
  const locale = useLocale();
  const isThai = locale.startsWith('th');

  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    ...(articleBody && { articleBody }),
    ...(author && { author }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(imageUrl && { image: imageUrl }),
  };

  return <JsonLd data={articleData} />;
}
