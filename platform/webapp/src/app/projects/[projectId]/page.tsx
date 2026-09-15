'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ScreenHeader } from '@/components/screen-header';
import { ReleaseGateBanner, HistoricalSuiteTag } from '@/components/vericlause-ui';
import {
  DEMO_PROJECTS,
  DEMO_VERSIONS,
  DEMO_JOBS,
  DEMO_FINDINGS,
  DEMO_GATES,
  DEMO_SPECS,
} from '@/lib/demo-data';

export default function ProjectVersionPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = DEMO_PROJECTS.find((p) => p.projectId === projectId) ?? DEMO_PROJECTS[0];
  const version = DEMO_VERSIONS.find((v) => v.projectId === project.projectId) ?? DEMO_VERSIONS[0];
  const jobs = DEMO_JOBS.filter((j) => j.projectId === project.projectId);
  const findings = DEMO_FINDINGS.filter((f) => f.projectId === project.projectId);
  const gate = DEMO_GATES.find((g) => g.projectId === project.projectId);
  const specs = DEMO_SPECS.filter((s) => s.projectId === project.projectId);

  return (
    <div>
      <ScreenHeader
        kicker="Contract version"
        title={`${project.name} · ${version?.versionRef ?? '—'}`}
        notary
      />
      <p className="mb-4 font-mono text-xs text-mute">
        {version?.commitSha} · {version?.branch}
        {version?.prUri ? (
          <>
            {' '}
            ·{' '}
            <a href={version.prUri} className="text-notary">
              PR
            </a>
          </>
        ) : null}
      </p>
      {gate ? (
        <div className="mb-6">
          <ReleaseGateBanner
            decision={gate.decision}
            openCriticalCount={gate.openCriticalCount}
            versionRef={gate.versionRef}
          />
        </div>
      ) : null}
      <div className="grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-notary">Specs</h2>
          <ul className="space-y-2">
            {specs.map((s) => (
              <li key={s.specId} className="border border-stone bg-stone-900 px-3 py-2 text-sm">
                {s.title}
                {s.historicalTemplate ? (
                  <span className="ml-2">
                    <HistoricalSuiteTag label={s.historicalTemplate} />
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
          <Link href="/specs" className="mt-2 inline-block text-sm text-notary">
            Specification assist
          </Link>
        </section>
        <section>
          <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-notary">Jobs</h2>
          <ul className="space-y-2">
            {jobs.map((j) => (
              <li key={j.jobId} className="flex justify-between border border-stone px-3 py-2 font-mono text-xs">
                <span>{j.jobType}</span>
                <span className={j.status === 'slaBreached' ? 'text-injunction' : 'text-mute'}>
                  {j.status}
                </span>
              </li>
            ))}
          </ul>
          <Link href="/jobs" className="mt-2 inline-block text-sm text-notary">
            All jobs
          </Link>
        </section>
      </div>
      <section className="mt-8">
        <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-notary">Findings</h2>
        <ul className="space-y-2">
          {findings.map((f) => (
            <li key={f.findingId}>
              <Link
                href={`/findings/${f.findingId}`}
                className="flex items-center justify-between border border-stone px-3 py-2 text-sm hover:bg-stone-900"
              >
                <span>{f.title}</span>
                <span className={f.severity === 'critical' ? 'text-injunction' : 'text-provisional'}>
                  {f.severity}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
