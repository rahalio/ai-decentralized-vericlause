/**
 * IdGeneratorService Port — Vericlause prefixes.
 */

import type { DomainCode } from '@vericlause/core/_shared/helpers';

export interface IdGeneratorService {
  tntId(): string;
  keyId(): string;
  idnId(): string;
  autId(): string;
  prjId(): string;
  verId(): string;
  spcId(): string;
  jobId(): string;
  fndId(): string;
  wvrId(): string;
  gatId(): string;
  artId(): string;
  generateIdForDomain(domainCode: DomainCode): string;
}
