'use client';

import { useState } from 'react';
import { ScreenHeader } from '@/components/screen-header';
import { DEMO_PROJECTS } from '@/lib/demo-data';

export default function PrivateModeSettingsPage() {
  const [modes, setModes] = useState(
    Object.fromEntries(DEMO_PROJECTS.map((p) => [p.projectId, p.privateMode]))
  );
  return (
    <div>
      <ScreenHeader
        kicker="Private mode"
        title="Keep source in the customer boundary while still producing signed reports"
        notary
      />
      <ul className="space-y-4">
        {DEMO_PROJECTS.map((p) => (
          <li key={p.projectId} className="flex items-center justify-between border border-stone bg-stone-900 px-4 py-3">
            <div>
              <p className="font-display text-lg">{p.name}</p>
              <p className="text-sm text-mute">
                What leaves tenant: assurance report only
              </p>
            </div>
            <button
              type="button"
              className={`border px-3 py-1.5 text-sm ${
                modes[p.projectId]
                  ? 'border-verdict/40 text-verdict'
                  : 'border-injunction/40 text-injunction'
              }`}
              style={{ borderRadius: 'var(--radius-sm)' }}
              onClick={() =>
                setModes((m) => ({ ...m, [p.projectId]: !m[p.projectId] }))
              }
            >
              {modes[p.projectId] ? 'Private on' : 'Private off'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
