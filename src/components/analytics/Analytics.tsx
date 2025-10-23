'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';
import { useNonce } from '@/components/providers/nonce-provider';

export function Analytics() {
  const nonce = useNonce();
  const [hasClientNonce, setHasClientNonce] = useState(false);

  useEffect(() => {
    if (nonce) {
      setHasClientNonce(true);
    }
  }, [nonce]);

  if (!hasClientNonce) {
    return null;
  }

  // VercelAnalytics currently doesn't accept nonce; rendering after hydration ensures CSP checks pass.
  return <VercelAnalytics />;
}
