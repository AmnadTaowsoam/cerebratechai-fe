import type { CaseItem } from '@/data/cases';

interface CaseSchemaProps {
  caseItem: CaseItem;
  locale?: string;
}

export default function CaseSchema({ caseItem, locale = 'en' }: CaseSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://cerebratechai.com';
  const caseUrl = `${baseUrl}/${locale}/cases/${caseItem.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": caseItem.title,
    "description": caseItem.solution,
    "url": caseUrl,
    "inLanguage": locale,
    "about": {
      "@type": "Thing",
      "name": caseItem.sector
    },
    "genre": caseItem.solutionFamily.join(", "),
    "keywords": [
      caseItem.sector,
      ...caseItem.solutionFamily,
      caseItem.dataSensitivity,
      "AI",
      "Machine Learning",
      "Case Study"
    ],
    "creator": {
      "@type": "Organization",
      "name": "Cerebratechai",
      "url": baseUrl
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "image": caseItem.heroImage ? `${baseUrl}${caseItem.heroImage}` : undefined,
    "mainEntity": {
      "@type": "Project",
      "name": caseItem.title,
      "description": caseItem.solution,
      "category": caseItem.sector,
      "outcome": caseItem.outcomes.map(outcome => ({
        "@type": "QuantitativeValue",
        "name": outcome.label,
        "value": outcome.value
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

