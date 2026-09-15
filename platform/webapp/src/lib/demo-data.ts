export type ProjectRow = {
  projectId: string;
  name: string;
  language: 'solidity' | 'vyper' | 'other';
  openCriticalCount: number;
  waiverDebtDays: number;
  valueAtRiskBand: 'under1m' | 'band1to10m' | 'band10to50m' | 'band50to180m' | 'over180m';
  privateMode: boolean;
  heat: number;
};

export type VersionRow = {
  versionId: string;
  projectId: string;
  versionRef: string;
  commitSha: string;
  branch: string;
  status: 'draft' | 'inReview' | 'gated' | 'released' | 'superseded';
  prUri?: string;
};

export type SpecRow = {
  specId: string;
  projectId: string;
  versionRef: string;
  kind: 'invariant' | 'accessControl' | 'valueFlow';
  title: string;
  status: 'draft' | 'accepted' | 'required' | 'inferred';
  historicalTemplate?: 'reentrancy' | 'uncheckedCall' | 'custodyBug' | 'custom';
  requiredForGate: boolean;
  inferredFromTrace: boolean;
};

export type JobRow = {
  jobId: string;
  projectId: string;
  versionRef: string;
  jobType: 'formalVerification' | 'searchBasedTesting' | 'combined';
  status: 'queued' | 'running' | 'succeeded' | 'failed' | 'slaBreached';
  slaPolicy: 'failClosed' | 'failOpen';
  durationSec: number;
};

export type FindingRow = {
  findingId: string;
  jobId: string;
  projectId: string;
  versionRef: string;
  severity: 'info' | 'low' | 'medium' | 'high' | 'critical';
  title: string;
  property: string;
  trace: string;
  suggestedRootCause: string;
  status: 'open' | 'waived' | 'fixed' | 'acceptedRisk';
  historicalTag?: string;
};

export type WaiverRow = {
  waiverId: string;
  findingId: string;
  status: 'proposed' | 'approved' | 'expired' | 'revoked';
  expiresAt: string;
  justification: string;
  requiredApprovals: number;
  approverCount: number;
};

export type GateRow = {
  gateId: string;
  projectId: string;
  versionRef: string;
  decision: 'allow' | 'block';
  status: 'pending' | 'final';
  openCriticalCount: number;
  artefactId?: string;
};

export type ArtefactRow = {
  artefactId: string;
  projectId: string;
  versionRef: string;
  status: 'draft' | 'signed';
  signatureHash?: string;
  signedAt?: string;
  privateMode: boolean;
};

export const DEMO_PROJECTS: ProjectRow[] = [
  {
    projectId: 'prj_01vaultrouter00000000000001',
    name: 'VaultRouter',
    language: 'solidity',
    openCriticalCount: 2,
    waiverDebtDays: 4,
    valueAtRiskBand: 'band50to180m',
    privateMode: true,
    heat: 0.85,
  },
  {
    projectId: 'prj_01bridgeguard0000000000002',
    name: 'BridgeGuard',
    language: 'solidity',
    openCriticalCount: 0,
    waiverDebtDays: 0,
    valueAtRiskBand: 'band10to50m',
    privateMode: true,
    heat: 0.15,
  },
  {
    projectId: 'prj_01daoexec0000000000000003',
    name: 'DaoExecutor',
    language: 'vyper',
    openCriticalCount: 1,
    waiverDebtDays: 11,
    valueAtRiskBand: 'over180m',
    privateMode: false,
    heat: 0.62,
  },
];

export const DEMO_VERSIONS: VersionRow[] = [
  {
    versionId: 'ver_01vaultv12000000000000001',
    projectId: 'prj_01vaultrouter00000000000001',
    versionRef: 'v1.2.0-rc1',
    commitSha: 'a1b2c3d4e5f6789012345678901234567890abcd',
    branch: 'release/1.2',
    status: 'inReview',
    prUri: 'https://github.example/org/vault-router/pull/88',
  },
];

export const DEMO_SPECS: SpecRow[] = [
  {
    specId: 'spc_01reentrancy00000000000001',
    projectId: 'prj_01vaultrouter00000000000001',
    versionRef: 'v1.2.0-rc1',
    kind: 'invariant',
    title: 'No reentrant withdraw while balance updates',
    status: 'required',
    historicalTemplate: 'reentrancy',
    requiredForGate: true,
    inferredFromTrace: false,
  },
  {
    specId: 'spc_01accessonly00000000000002',
    projectId: 'prj_01vaultrouter00000000000001',
    versionRef: 'v1.2.0-rc1',
    kind: 'accessControl',
    title: 'Only guardian may pause',
    status: 'inferred',
    requiredForGate: false,
    inferredFromTrace: true,
  },
];

export const DEMO_JOBS: JobRow[] = [
  {
    jobId: 'job_01fv0000000000000000000001',
    projectId: 'prj_01vaultrouter00000000000001',
    versionRef: 'v1.2.0-rc1',
    jobType: 'formalVerification',
    status: 'succeeded',
    slaPolicy: 'failClosed',
    durationSec: 412,
  },
  {
    jobId: 'job_01sbst000000000000000000002',
    projectId: 'prj_01vaultrouter00000000000001',
    versionRef: 'v1.2.0-rc1',
    jobType: 'searchBasedTesting',
    status: 'running',
    slaPolicy: 'failClosed',
    durationSec: 190,
  },
];

export const DEMO_FINDINGS: FindingRow[] = [
  {
    findingId: 'fnd_01critreent00000000000001',
    jobId: 'job_01fv0000000000000000000001',
    projectId: 'prj_01vaultrouter00000000000001',
    versionRef: 'v1.2.0-rc1',
    severity: 'critical',
    title: 'Reentrant withdraw path before balance debit',
    property: 'INV-NO-REENTRANT-WITHDRAW',
    trace: 'withdraw() → callback → withdraw() → transfer',
    suggestedRootCause: 'External call precedes storage update (checks-effects-interactions violation).',
    status: 'open',
    historicalTag: 'DAO 2016 class',
  },
  {
    findingId: 'fnd_01highcall000000000000002',
    jobId: 'job_01sbst000000000000000000002',
    projectId: 'prj_01vaultrouter00000000000001',
    versionRef: 'v1.2.0-rc1',
    severity: 'high',
    title: 'Unchecked low-level call return',
    property: 'SBST-UNCHECKED-CALL',
    trace: 'call{value:}(…) ignored success flag',
    suggestedRootCause: 'Missing success check on low-level call.',
    status: 'open',
    historicalTag: 'Parity class',
  },
];

export const DEMO_WAIVERS: WaiverRow[] = [
  {
    waiverId: 'wvr_01pending00000000000000001',
    findingId: 'fnd_01highcall000000000000002',
    status: 'proposed',
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 36).toISOString(),
    justification: 'Mitigated by guardian pause; mainnet window < 48h.',
    requiredApprovals: 2,
    approverCount: 1,
  },
];

export const DEMO_GATES: GateRow[] = [
  {
    gateId: 'gat_01vaultblock0000000000001',
    projectId: 'prj_01vaultrouter00000000000001',
    versionRef: 'v1.2.0-rc1',
    decision: 'block',
    status: 'final',
    openCriticalCount: 2,
  },
  {
    gateId: 'gat_01bridgeallow000000000002',
    projectId: 'prj_01bridgeguard0000000000002',
    versionRef: 'v0.9.4',
    decision: 'allow',
    status: 'final',
    openCriticalCount: 0,
    artefactId: 'art_01bridgesigned00000000001',
  },
];

export const DEMO_ARTEFACTS: ArtefactRow[] = [
  {
    artefactId: 'art_01bridgesigned00000000001',
    projectId: 'prj_01bridgeguard0000000000002',
    versionRef: 'v0.9.4',
    status: 'signed',
    signatureHash: 'sha256:9f2c…a1b0',
    signedAt: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(),
    privateMode: true,
  },
  {
    artefactId: 'art_01vaultdraft0000000000002',
    projectId: 'prj_01vaultrouter00000000000001',
    versionRef: 'v1.2.0-rc1',
    status: 'draft',
    privateMode: true,
  },
];
