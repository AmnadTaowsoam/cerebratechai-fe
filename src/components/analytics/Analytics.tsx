'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { useNonce } from '@/components/providers/nonce-provider';

export function Analytics() {
  const nonce = useNonce();

  return <VercelAnalytics nonce={nonce} />;
}
