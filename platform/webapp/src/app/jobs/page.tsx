'use client';

import { ScreenHeader } from '@/components/screen-header';
import { DEMO_JOBS } from '@/lib/demo-data';

export default function JobsPage() {
  return (
    <div>
      <ScreenHeader kicker="Analysis jobs" title="Formal verification and search-based campaigns" />
      <ul className="space-y-3">
        {DEMO_JOBS.map((j) => (
          <li key={j.jobId} className="border border-stone bg-stone-900 px-4 py-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-sm">{j.jobType}</span>
              <span
                className={
                  j.status === 'slaBreached'
                    ? 'text-injunction'
                    : j.status === 'succeeded'
                      ? 'text-verdict'
                      : 'text-provisional'
                }
              >
                {j.status}
              </span>
            </div>
            <p className="mt-1 font-mono text-xs text-mute">
              {j.versionRef} · {j.durationSec}s · SLA {j.slaPolicy}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
