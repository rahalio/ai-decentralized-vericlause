/**
 * ID Generator Service Implementation — Vericlause prefixes.
 */

import type { DomainCode } from '@vericlause/core/_shared/helpers';
import { DOMAIN_PREFIX_MAP, isValidDomainId } from '@vericlause/core';
import { ulid } from 'ulid';
import type { IdGeneratorService } from '@vericlause/services/_shared';

export function generateIdWithPrefix(prefix: string): string {
  if (!prefix || prefix.length !== 3 || !/^[a-z]{3}$/.test(prefix)) {
    throw new Error(
      `Invalid domain prefix: "${prefix}". Must be exactly 3 lowercase letters.`
    );
  }
  const id = `${prefix}_${ulid().toLowerCase()}`;
  if (!isValidDomainId(id)) {
    throw new Error(`Generated ID "${id}" failed validation.`);
  }
  return id;
}

export class DefaultIdGeneratorService implements IdGeneratorService {
  tntId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.tenant);
  }
  keyId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.apiKey);
  }
  idnId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.identity);
  }
  autId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.auth);
  }
  prjId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.project);
  }
  verId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.version);
  }
  spcId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.specification);
  }
  jobId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.analysisJob);
  }
  fndId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.finding);
  }
  wvrId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.waiver);
  }
  gatId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.gate);
  }
  artId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.artefact);
  }
  generateIdForDomain(domainCode: DomainCode): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP[domainCode]);
  }
}

let idGeneratorService: DefaultIdGeneratorService | null = null;

export function getIdGeneratorService(): DefaultIdGeneratorService {
  if (!idGeneratorService) {
    idGeneratorService = new DefaultIdGeneratorService();
  }
  return idGeneratorService;
}
