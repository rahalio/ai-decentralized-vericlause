'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/auth-context';

export default function LoginPage() {
  const { signIn } = useAuth();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <p className="font-display text-4xl text-notary">Vericlause</p>
      <p className="mt-3 max-w-md text-center text-mute">
        Catch irreversible bugs before mainnet
      </p>
      <button
        type="button"
        onClick={signIn}
        className="mt-8 border border-notary/50 px-6 py-3 text-sm text-notary"
        style={{ borderRadius: 'var(--radius-sm)' }}
      >
        Enter assurance desk
      </button>
      <Link href="/" className="mt-4 text-sm text-mute">
        Continue to portfolio
      </Link>
    </div>
  );
}
