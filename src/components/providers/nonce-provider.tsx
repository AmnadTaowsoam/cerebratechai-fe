'use client';

import { createContext, useContext, useMemo } from 'react';

const NonceContext = createContext<string | undefined>(undefined);

type NonceProviderProps = {
  nonce?: string | null;
  children: React.ReactNode;
};

export function NonceProvider({ nonce, children }: NonceProviderProps) {
  const value = useMemo(
    () => (nonce && nonce.length > 0 ? nonce : undefined),
    [nonce]
  );

  return (
    <NonceContext.Provider value={value}>{children}</NonceContext.Provider>
  );
}

export function useNonce() {
  return useContext(NonceContext);
}
