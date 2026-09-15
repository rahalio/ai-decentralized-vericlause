import type { Metadata } from 'next';
import { Newsreader, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import { AppProviders } from '@/components/providers';
import { AppShell } from '@/components/app-shell';
import './globals.css';

const display = Newsreader({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vericlause',
  description: 'Catch irreversible bugs before mainnet',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
      >
        <AppProviders>
          <AppShell>{children}</AppShell>
        </AppProviders>
      </body>
    </html>
  );
}
