'use client';

import Link from 'next/link';
import { ScreenHeader } from '@/components/screen-header';
import { AssuranceSeal } from '@/components/vericlause-ui';
import { DEMO_ARTEFACTS } from '@/lib/demo-data';

export default function ArtefactsPage() {
  return (
    <div>
      <ScreenHeader kicker="Assurance artefacts" title="Immutable signed reports per release version" notary />
      <div className="grid gap-4 md:grid-cols-2">
        {DEMO_ARTEFACTS.map((a) => (
          <Link key={a.artefactId} href={`/artefacts/${a.artefactId}`}>
            <AssuranceSeal
              status={a.status}
              signatureHash={a.signatureHash}
              versionRef={a.versionRef}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
