import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const createAssuranceArtefact_Body = z
  .object({
    projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
    versionRef: z.string().min(1),
    privateMode: z.boolean().optional().default(true),
  })
  .passthrough();
const ArtefactStatus = z.enum(['draft', 'signed']);
const AssuranceArtefact = z
  .object({
    artefactId: z.string().regex(/^art_[0-9A-HJKMNP-TV-Z]{26}$/),
    projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
    versionRef: z.string().min(1),
    status: z.enum(['draft', 'signed']),
    signedAt: z.string().datetime({ offset: true }).optional(),
    signatureHash: z.string().optional(),
    downloadUri: z.string().url().optional(),
    privateMode: z.boolean().optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const AssuranceArtefactCreateRequest = z
  .object({
    projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
    versionRef: z.string().min(1),
    privateMode: z.boolean().optional().default(true),
  })
  .passthrough();
const AuditorExportPack = z
  .object({
    artefactId: z.string().regex(/^art_[0-9A-HJKMNP-TV-Z]{26}$/),
    downloadUri: z.string().url(),
    includesSpecs: z.boolean(),
    includesFindings: z.boolean(),
    includesWaivers: z.boolean(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const AssuranceArtefactResponse = z
  .object({
    data: z
      .object({
        artefactId: z.string().regex(/^art_[0-9A-HJKMNP-TV-Z]{26}$/),
        projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
        versionRef: z.string().min(1),
        status: z.enum(['draft', 'signed']),
        signedAt: z.string().datetime({ offset: true }).optional(),
        signatureHash: z.string().optional(),
        downloadUri: z.string().url().optional(),
        privateMode: z.boolean().optional(),
        createdAt: z.string().datetime({ offset: true }),
        updatedAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const AssuranceArtefactListData = z
  .object({
    items: z.array(
      z
        .object({
          artefactId: z.string().regex(/^art_[0-9A-HJKMNP-TV-Z]{26}$/),
          projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
          versionRef: z.string().min(1),
          status: z.enum(['draft', 'signed']),
          signedAt: z.string().datetime({ offset: true }).optional(),
          signatureHash: z.string().optional(),
          downloadUri: z.string().url().optional(),
          privateMode: z.boolean().optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const AssuranceArtefactListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              artefactId: z.string().regex(/^art_[0-9A-HJKMNP-TV-Z]{26}$/),
              projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
              versionRef: z.string().min(1),
              status: z.enum(['draft', 'signed']),
              signedAt: z.string().datetime({ offset: true }).optional(),
              signatureHash: z.string().optional(),
              downloadUri: z.string().url().optional(),
              privateMode: z.boolean().optional(),
              createdAt: z.string().datetime({ offset: true }),
              updatedAt: z.string().datetime({ offset: true }),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const AuditorExportPackResponse = z
  .object({
    data: z
      .object({
        artefactId: z.string().regex(/^art_[0-9A-HJKMNP-TV-Z]{26}$/),
        downloadUri: z.string().url(),
        includesSpecs: z.boolean(),
        includesFindings: z.boolean(),
        includesWaivers: z.boolean(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const ProjectId = z.string();
const Problem = z
  .object({
    type: z.string().url(),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().url(),
    code: z.string(),
  })
  .partial()
  .passthrough();
const ArtefactId = z.string();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();

export const schemas: any = {
  createAssuranceArtefact_Body,
  ArtefactStatus,
  AssuranceArtefact,
  AssuranceArtefactCreateRequest,
  AuditorExportPack,
  AssuranceArtefactResponse,
  AssuranceArtefactListData,
  AssuranceArtefactListResponse,
  AuditorExportPackResponse,
  ProjectId,
  Problem,
  ArtefactId,
  ResponseMeta,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/assurance-artefacts',
    alias: 'listAssuranceArtefacts',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().min(1).max(512).optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(100).optional().default(25),
      },
      {
        name: 'projectId',
        type: 'Query',
        schema: z
          .string()
          .regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
      },
      {
        name: 'versionRef',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z.enum(['draft', 'signed']).optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  artefactId: z.string().regex(/^art_[0-9A-HJKMNP-TV-Z]{26}$/),
                  projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
                  versionRef: z.string().min(1),
                  status: z.enum(['draft', 'signed']),
                  signedAt: z.string().datetime({ offset: true }).optional(),
                  signatureHash: z.string().optional(),
                  downloadUri: z.string().url().optional(),
                  privateMode: z.boolean().optional(),
                  createdAt: z.string().datetime({ offset: true }),
                  updatedAt: z.string().datetime({ offset: true }),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/assurance-artefacts',
    alias: 'createAssuranceArtefact',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createAssuranceArtefact_Body,
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            artefactId: z.string().regex(/^art_[0-9A-HJKMNP-TV-Z]{26}$/),
            projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
            versionRef: z.string().min(1),
            status: z.enum(['draft', 'signed']),
            signedAt: z.string().datetime({ offset: true }).optional(),
            signatureHash: z.string().optional(),
            downloadUri: z.string().url().optional(),
            privateMode: z.boolean().optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Malformed request`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/assurance-artefacts/:artefactId',
    alias: 'getAssuranceArtefact',
    requestFormat: 'json',
    parameters: [
      {
        name: 'artefactId',
        type: 'Path',
        schema: z.string().regex(/^art_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            artefactId: z.string().regex(/^art_[0-9A-HJKMNP-TV-Z]{26}$/),
            projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
            versionRef: z.string().min(1),
            status: z.enum(['draft', 'signed']),
            signedAt: z.string().datetime({ offset: true }).optional(),
            signatureHash: z.string().optional(),
            downloadUri: z.string().url().optional(),
            privateMode: z.boolean().optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/assurance-artefacts/:artefactId/auditor-export',
    alias: 'createAuditorExportPack',
    requestFormat: 'json',
    parameters: [
      {
        name: 'artefactId',
        type: 'Path',
        schema: z.string().regex(/^art_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            artefactId: z.string().regex(/^art_[0-9A-HJKMNP-TV-Z]{26}$/),
            downloadUri: z.string().url(),
            includesSpecs: z.boolean(),
            includesFindings: z.boolean(),
            includesWaivers: z.boolean(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 409,
        description: `Idempotency key reuse with different body, or state conflict`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/assurance-artefacts/:artefactId/sign',
    alias: 'signAssuranceArtefact',
    requestFormat: 'json',
    parameters: [
      {
        name: 'artefactId',
        type: 'Path',
        schema: z.string().regex(/^art_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            artefactId: z.string().regex(/^art_[0-9A-HJKMNP-TV-Z]{26}$/),
            projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
            versionRef: z.string().min(1),
            status: z.enum(['draft', 'signed']),
            signedAt: z.string().datetime({ offset: true }).optional(),
            signatureHash: z.string().optional(),
            downloadUri: z.string().url().optional(),
            privateMode: z.boolean().optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 409,
        description: `Idempotency key reuse with different body, or state conflict`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
