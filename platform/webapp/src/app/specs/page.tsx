'use client';

import { useState } from 'react';
import { ScreenHeader } from '@/components/screen-header';
import { SpecInferCard, HistoricalSuiteTag } from '@/components/vericlause-ui';
import { DEMO_SPECS } from '@/lib/demo-data';

export default function SpecsPage() {
  const [accepted, setAccepted] = useState<string[]>([]);
  return (
    <div>
      <ScreenHeader
        kicker="Specification assist"
        title="Invariants, access control, and value-flow before empty-box fuzz"
      />
      <p className="mb-6 text-sm text-mute">
        Start from historical incident templates when the list is empty.
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        <HistoricalSuiteTag label="reentrancy" />
        <HistoricalSuiteTag label="uncheckedCall" />
        <HistoricalSuiteTag label="custodyBug" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {DEMO_SPECS.map((s) => (
          <SpecInferCard
            key={s.specId}
            title={
              accepted.includes(s.specId) ? `${s.title} (accepted)` : s.title
            }
            kind={s.kind}
            inferred={s.inferredFromTrace && !accepted.includes(s.specId)}
            onAccept={() => setAccepted((a) => [...a, s.specId])}
          />
        ))}
      </div>
    </div>
  );
}
