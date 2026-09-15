'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ScreenHeader } from '@/components/screen-header';
import { AssuranceSeal } from '@/components/vericlause-ui';
import { DEMO_ARTEFACTS } from '@/lib/demo-data';

export default function ArtefactViewerPage() {
  const { artefactId } = useParams<{ artefactId: string }>();
  const artefact = DEMO_ARTEFACTS.find((a) => a.artefactId === artefactId) ?? DEMO_ARTEFACTS[0];
  return (
    <div>
      <ScreenHeader kicker="Artefact viewer" title={`Report for ${artefact.versionRef}`} notary />
      <AssuranceSeal
        status={artefact.status}
        signatureHash={artefact.signatureHash}
        versionRef={artefact.versionRef}
      />
      <p className="mt-4 text-sm text-mute">
        Private mode: {artefact.privateMode ? 'on — source stays in tenant boundary' : 'off'}
      </p>
      <p className="mt-2 text-sm text-mute">
        Signed artefacts are immutable — no edit after seal.
      </p>
      <Link href="/auditor" className="mt-6 inline-block text-sm text-notary">
        Share to auditor room
      </Link>
    </div>
  );
}
