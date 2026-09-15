'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useAuth } from '@/contexts/auth-context';

const NAV = [
  { href: '/', label: 'Security home' },
  { href: '/pr', label: 'PR / CI' },
  { href: '/specs', label: 'Specifications' },
  { href: '/jobs', label: 'Analysis jobs' },
  { href: '/findings', label: 'Findings' },
  { href: '/waivers', label: 'Waivers' },
  { href: '/release', label: 'Release gates' },
  { href: '/artefacts', label: 'Artefacts' },
  { href: '/auditor', label: 'Auditor export' },
  { href: '/settings', label: 'Private mode' },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { signedIn, signOut } = useAuth();
  const isLogin = pathname === '/login';

  if (isLogin) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between border-b border-stone px-6 py-4">
        <Link href="/" className="font-display text-lg tracking-wide text-notary">
          Vericlause
        </Link>
        {signedIn ? (
          <button
            type="button"
            className="text-sm text-mute hover:text-ink"
            onClick={signOut}
          >
            Sign out
          </button>
        ) : (
          <Link href="/login" className="text-sm text-mute hover:text-ink">
            Sign in
          </Link>
        )}
      </header>
      <div className="flex">
        <nav className="min-h-[calc(100vh-65px)] w-52 shrink-0 border-r border-stone px-3 py-6">
          {NAV.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mb-1 block px-3 py-2 text-sm ${
                  active ? 'bg-stone-900 text-ink' : 'text-mute hover:text-ink'
                }`}
                style={{ borderRadius: 'var(--radius-sm)' }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <main className="min-w-0 flex-1 px-8 py-8">{children}</main>
      </div>
    </div>
  );
}
