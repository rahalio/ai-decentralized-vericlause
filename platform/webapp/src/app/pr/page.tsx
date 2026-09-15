'use client';

import Link from 'next/link';
import { ScreenHeader } from '@/components/screen-header';
import { DEMO_FINDINGS, DEMO_JOBS, DEMO_VERSIONS } from '@/lib/demo-data';

export default function PrCiPage() {
  const version = DEMO_VERSIONS[0];
  const jobs = DEMO_JOBS.filter((j) => j.versionRef === version.versionRef);
  const findings = DEMO_FINDINGS.filter((f) => f.versionRef === version.versionRef);
  return (
    <div>
      <ScreenHeader kicker="PR / CI detail" title="First failing finding on this pull request" />
      <p className="mb-6 font-mono text-sm text-mute">
        {version.versionRef} · {version.branch}
      </p>
      <section className="mb-8">
        <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-notary">CI jobs</h2>
        <ul className="space-y-2">
          {jobs.map((j) => (
            <li key={j.jobId} className="border border-stone px-3 py-2 font-mono text-xs">
              {j.jobType} · {j.status} · {j.durationSec}s · SLA {j.slaPolicy}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-notary">Findings</h2>
        <ul className="space-y-2">
          {findings.map((f) => (
            <li key={f.findingId}>
              <Link href={`/findings/${f.findingId}`} className="block border border-stone px-3 py-2 text-sm">
                <span className={f.severity === 'critical' ? 'text-injunction' : 'text-provisional'}>
                  [{f.severity}]
                </span>{' '}
                {f.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
