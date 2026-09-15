'use client';

import { useState } from 'react';
import { ScreenHeader } from '@/components/screen-header';
import { AuditorPackExport } from '@/components/vericlause-ui';
import { DEMO_ARTEFACTS, DEMO_WAIVERS } from '@/lib/demo-data';

export default function AuditorPage() {
  const [msg, setMsg] = useState('');
  const signed = DEMO_ARTEFACTS.find((a) => a.status === 'signed');
  return (
    <div>
      <ScreenHeader
        kicker="Auditor export"
        title="One-click handoff of specs, tests, findings, and waiver history"
        notary
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <AuditorPackExport
          onGenerate={() =>
            setMsg(
              signed
                ? `Pack ready for ${signed.versionRef} · ${signed.signatureHash}`
                : 'Incomplete analysis — warn before share'
            )
          }
        />
        <section>
          <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-notary">
            Waiver history
          </h2>
          <ul className="space-y-2 text-sm text-mute">
            {DEMO_WAIVERS.map((w) => (
              <li key={w.waiverId} className="border border-stone px-3 py-2 font-mono text-xs">
                {w.waiverId} · {w.status} · {w.approverCount}/{w.requiredApprovals}
              </li>
            ))}
          </ul>
          {msg ? <p className="mt-4 text-sm text-verdict">{msg}</p> : null}
        </section>
      </div>
    </div>
  );
}
