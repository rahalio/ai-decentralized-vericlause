import Link from 'next/link';

export function PortfolioHeatcell({
  name,
  heat,
  criticals,
  href,
}: {
  name: string;
  heat: number;
  criticals: number;
  href: string;
}) {
  const tone =
    criticals > 0
      ? 'border-injunction/40 bg-injunction/10'
      : heat > 0.4
        ? 'border-provisional/30 bg-provisional/10'
        : 'border-verdict/30 bg-verdict/10';
  return (
    <Link
      href={href}
      className={`block border px-4 py-4 transition hover:brightness-110 ${tone}`}
      style={{ borderRadius: 'var(--radius-sm)' }}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-display text-lg">{name}</span>
        <span className="font-mono text-xs text-mute">{Math.round(heat * 100)}%</span>
      </div>
      <div className="h-2 w-full bg-stone-950">
        <div
          className="h-2"
          style={{
            width: `${Math.min(100, heat * 100)}%`,
            background:
              criticals > 0
                ? 'var(--color-injunction)'
                : 'var(--color-verdict)',
          }}
        />
      </div>
      <p className="mt-2 text-sm text-mute">
        {criticals} open critical{criticals === 1 ? '' : 's'}
      </p>
    </Link>
  );
}

export function PropertyTracePanel({
  property,
  trace,
  rootCause,
}: {
  property: string;
  trace: string;
  rootCause: string;
}) {
  return (
    <section className="border border-stone bg-stone-900 p-4 motion-trace" style={{ borderRadius: 'var(--radius-sm)' }}>
      <h3 className="mb-2 font-display text-sm uppercase tracking-widest text-notary">
        Property &amp; trace
      </h3>
      <p className="font-mono text-sm text-verdict">{property}</p>
      <pre className="mt-3 overflow-x-auto border border-stone bg-stone-950 p-3 font-mono text-xs text-ink">
        {trace}
      </pre>
      <p className="mt-3 text-sm text-mute">{rootCause}</p>
    </section>
  );
}

export function WaiverExpiryChip({
  status,
  expiresAt,
  approverCount,
  required,
}: {
  status: string;
  expiresAt: string;
  approverCount: number;
  required: number;
}) {
  const hours = Math.max(
    0,
    Math.round((new Date(expiresAt).getTime() - Date.now()) / 3600000)
  );
  return (
    <span
      className="motion-waiver inline-flex items-center gap-2 border border-provisional/40 bg-provisional/10 px-3 py-1 font-mono text-xs text-provisional"
      style={{ borderRadius: 'var(--radius-sm)' }}
    >
      {status} · {approverCount}/{required} · {hours}h left
    </span>
  );
}

export function ReleaseGateBanner({
  decision,
  openCriticalCount,
  versionRef,
}: {
  decision: 'allow' | 'block';
  openCriticalCount: number;
  versionRef: string;
}) {
  const blocked = decision === 'block';
  return (
    <div
      className={`motion-gavel border px-5 py-4 ${
        blocked
          ? 'border-injunction/50 bg-injunction/10'
          : 'border-verdict/50 bg-verdict/10'
      }`}
      style={{ borderRadius: 'var(--radius-sm)' }}
      role="status"
      aria-live="polite"
    >
      <p className="font-display text-xs uppercase tracking-[0.2em] text-notary">
        Vericlause · release gate
      </p>
      <p
        className={`mt-1 font-display text-2xl ${
          blocked ? 'text-injunction' : 'text-verdict'
        }`}
      >
        {blocked ? 'Injunction — deploy blocked' : 'Verdict — deploy allowed'}
      </p>
      <p className="mt-1 font-mono text-sm text-mute">
        {versionRef} · {openCriticalCount} open critical
        {openCriticalCount === 1 ? '' : 's'}
      </p>
    </div>
  );
}

export function AssuranceSeal({
  status,
  signatureHash,
  versionRef,
}: {
  status: 'draft' | 'signed';
  signatureHash?: string;
  versionRef: string;
}) {
  return (
    <div className="border border-stone bg-stone-900 px-4 py-3" style={{ borderRadius: 'var(--radius-sm)' }}>
      <p className="font-display text-xs uppercase tracking-widest text-notary">
        Assurance seal
      </p>
      <p className={`font-display text-xl ${status === 'signed' ? 'text-verdict' : 'text-provisional'}`}>
        {status === 'signed' ? 'Immutable · signed' : 'Draft · unsigned'}
      </p>
      <p className="mt-1 font-mono text-xs text-mute">
        {versionRef}
        {signatureHash ? ` · ${signatureHash}` : ''}
      </p>
    </div>
  );
}

export function SpecInferCard({
  title,
  kind,
  inferred,
  onAccept,
}: {
  title: string;
  kind: string;
  inferred: boolean;
  onAccept?: () => void;
}) {
  return (
    <div className="border border-stone bg-stone-900 p-4" style={{ borderRadius: 'var(--radius-md)' }}>
      <p className="font-mono text-xs uppercase text-notary">{kind}</p>
      <p className="mt-1 font-display text-lg">{title}</p>
      {inferred ? (
        <p className="mt-2 text-sm text-provisional">Inferred from runtime traces — human accept required</p>
      ) : null}
      {inferred && onAccept ? (
        <button
          type="button"
          onClick={onAccept}
          className="mt-3 border border-verdict/40 px-3 py-1.5 text-sm text-verdict"
          style={{ borderRadius: 'var(--radius-sm)' }}
        >
          Accept inferred spec
        </button>
      ) : null}
    </div>
  );
}

export function HistoricalSuiteTag({ label }: { label: string }) {
  return (
    <span className="inline-block border border-stone px-2 py-0.5 font-mono text-[11px] text-mute">
      {label}
    </span>
  );
}

export function AuditorPackExport({
  onGenerate,
}: {
  onGenerate?: () => void;
}) {
  return (
    <div className="border border-stone bg-stone-900 p-5" style={{ borderRadius: 'var(--radius-sm)' }}>
      <p className="font-display text-sm uppercase tracking-widest text-notary">
        Auditor export pack
      </p>
      <ul className="mt-3 space-y-1 text-sm text-mute">
        <li>✓ Specifications &amp; historical suites</li>
        <li>✓ Findings + traces</li>
        <li>✓ Waiver history</li>
        <li>✓ Signed artefact hash</li>
      </ul>
      <button
        type="button"
        onClick={onGenerate}
        className="mt-4 border border-notary/40 bg-stone-950 px-4 py-2 text-sm text-notary"
        style={{ borderRadius: 'var(--radius-sm)' }}
      >
        Generate one-click pack
      </button>
    </div>
  );
}
