'use client';

import Link from 'next/link';
import { ScreenHeader } from '@/components/screen-header';
import { HistoricalSuiteTag } from '@/components/vericlause-ui';
import { DEMO_FINDINGS } from '@/lib/demo-data';

export default function FindingsPage() {
  return (
    <div>
      <ScreenHeader kicker="Findings" title="Explainable defects — property, trace, root cause" />
      <ul className="space-y-3">
        {DEMO_FINDINGS.map((f) => (
          <li key={f.findingId}>
            <Link
              href={`/findings/${f.findingId}`}
              className="block border border-stone px-4 py-3 hover:bg-stone-900"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-display text-lg">{f.title}</span>
                <span className={f.severity === 'critical' ? 'text-injunction' : 'text-provisional'}>
                  {f.severity}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-mute">{f.property}</p>
              {f.historicalTag ? (
                <div className="mt-2">
                  <HistoricalSuiteTag label={f.historicalTag} />
                </div>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
