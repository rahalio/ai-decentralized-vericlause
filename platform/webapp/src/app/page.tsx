'use client';

import Link from 'next/link';
import { ScreenHeader } from '@/components/screen-header';
import { PortfolioHeatcell } from '@/components/vericlause-ui';
import { DEMO_PROJECTS, DEMO_WAIVERS } from '@/lib/demo-data';
import { useHealth } from '@/contexts/health-context';

export default function SecurityHomePage() {
  const { apiOk } = useHealth();
  const criticals = DEMO_PROJECTS.reduce((n, p) => n + p.openCriticalCount, 0);
  return (
    <div>
      <ScreenHeader
        kicker="Security home"
        title="Residual critical risk across the contract estate"
        notary
      />
      <p className="mb-6 text-sm text-mute">
        {criticals} open critical{criticals === 1 ? '' : 's'} · waiver debt on{' '}
        {DEMO_WAIVERS.length} exception{DEMO_WAIVERS.length === 1 ? '' : 's'}
        {apiOk === false ? ' · API offline (demo data)' : apiOk ? ' · API healthy' : ''}
      </p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {DEMO_PROJECTS.map((p) => (
          <PortfolioHeatcell
            key={p.projectId}
            name={p.name}
            heat={p.heat}
            criticals={p.openCriticalCount}
            href={`/projects/${p.projectId}`}
          />
        ))}
      </div>
      <p className="mt-8 text-sm text-mute">
        Value-at-risk bands reference historical exploit magnitudes (Parity / DAO class).{' '}
        <Link href="/auditor" className="text-notary underline-offset-2 hover:underline">
          Export portfolio snapshot
        </Link>
      </p>
    </div>
  );
}
