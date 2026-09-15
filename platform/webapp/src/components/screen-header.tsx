export function ScreenHeader({
  kicker,
  title,
  notary,
}: {
  kicker: string;
  title: string;
  notary?: boolean;
}) {
  return (
    <header className="mb-8 motion-gavel">
      <div className="mb-2 flex items-center justify-between gap-4">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-notary">
          {kicker}
        </p>
        {notary ? (
          <span className="font-display text-xs tracking-widest text-notary">
            Vericlause · notary
          </span>
        ) : null}
      </div>
      <h1 className="font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
        {title}
      </h1>
    </header>
  );
}
