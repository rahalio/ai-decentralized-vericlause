'use client';

import Link from 'next/link';
import { ScreenHeader } from '@/components/screen-header';
import { ReleaseGateBanner } from '@/components/vericlause-ui';
import { DEMO_GATES } from '@/lib/demo-data';

export default function ReleasePage() {
  return (
    <div>
      <ScreenHeader
        kicker="Release manager"
        title="Block or allow deploy — signed artefact required when green"
        notary
      />
      <div className="space-y-6">
        {DEMO_GATES.map((g) => (
          <div key={g.gateId}>
            <ReleaseGateBanner
              decision={g.decision}
              openCriticalCount={g.openCriticalCount}
              versionRef={g.versionRef}
            />
            {g.artefactId ? (
              <Link
                href={`/artefacts/${g.artefactId}`}
                className="mt-2 inline-block text-sm text-verdict"
              >
                Open signed artefact
              </Link>
            ) : (
              <p className="mt-2 text-sm text-injunction">
                Missing signed artefact — cannot approve mainnet.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
