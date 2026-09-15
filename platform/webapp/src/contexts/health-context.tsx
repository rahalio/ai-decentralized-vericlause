'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type HealthCtx = {
  apiOk: boolean | null;
};

const Ctx = createContext<HealthCtx | null>(null);

export function HealthProvider({ children }: { children: ReactNode }) {
  const [apiOk, setApiOk] = useState<boolean | null>(null);
  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://127.0.0.1:4000';
    fetch(`${base}/health`)
      .then((r) => setApiOk(r.ok))
      .catch(() => setApiOk(false));
  }, []);
  const value = useMemo(() => ({ apiOk }), [apiOk]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useHealth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useHealth outside HealthProvider');
  return ctx;
}
