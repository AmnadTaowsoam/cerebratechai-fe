import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CerebraTechAI - Case Studies',
  description:
    'We balance measurable impact with strict confidentiality. Case stories use anonymised, synthetic, and public datasets where needed.',
};

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
