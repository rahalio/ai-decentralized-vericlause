'use client';

import { ScreenHeader } from '@/components/screen-header';
import { WaiverExpiryChip } from '@/components/vericlause-ui';
import { DEMO_WAIVERS, DEMO_FINDINGS } from '@/lib/demo-data';

export default function WaiversPage() {
  return (
    <div>
      <ScreenHeader
        kicker="Waiver desk"
        title="Dual-control exceptions with expiry — urgency cannot become permanent debt"
        notary
      />
      <ul className="space-y-4">
        {DEMO_WAIVERS.map((w) => {
          const finding = DEMO_FINDINGS.find((f) => f.findingId === w.findingId);
          return (
            <li key={w.waiverId} className="border border-stone bg-stone-900 p-4">
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <WaiverExpiryChip
                  status={w.status}
                  expiresAt={w.expiresAt}
                  approverCount={w.approverCount}
                  required={w.requiredApprovals}
                />
                <span className="font-mono text-xs text-mute">{w.waiverId}</span>
              </div>
              <p className="font-display text-lg">{finding?.title ?? w.findingId}</p>
              <p className="mt-2 text-sm text-mute">{w.justification}</p>
              <button
                type="button"
                className="mt-3 border border-provisional/40 px-3 py-1.5 text-sm text-provisional"
                style={{ borderRadius: 'var(--radius-sm)' }}
              >
                Second-approve
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
