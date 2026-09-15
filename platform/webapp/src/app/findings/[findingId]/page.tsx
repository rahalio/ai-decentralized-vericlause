'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ScreenHeader } from '@/components/screen-header';
import { PropertyTracePanel, HistoricalSuiteTag } from '@/components/vericlause-ui';
import { DEMO_FINDINGS } from '@/lib/demo-data';

export default function FindingDetailPage() {
  const { findingId } = useParams<{ findingId: string }>();
  const finding = DEMO_FINDINGS.find((f) => f.findingId === findingId) ?? DEMO_FINDINGS[0];
  return (
    <div>
      <ScreenHeader kicker="Finding detail" title={finding.title} notary />
      <p className="mb-4">
        <span className={finding.severity === 'critical' ? 'text-injunction' : 'text-provisional'}>
          {finding.severity}
        </span>
        <span className="mx-2 text-mute">·</span>
        <span className="font-mono text-xs text-mute">{finding.status}</span>
        {finding.historicalTag ? (
          <span className="ml-3">
            <HistoricalSuiteTag label={finding.historicalTag} />
          </span>
        ) : null}
      </p>
      <PropertyTracePanel
        property={finding.property}
        trace={finding.trace}
        rootCause={finding.suggestedRootCause}
      />
      <div className="mt-6 flex gap-4 text-sm">
        <Link href="/waivers" className="text-provisional">
          Open waiver
        </Link>
        <Link href="/release" className="text-notary">
          View release gate
        </Link>
      </div>
    </div>
  );
}
