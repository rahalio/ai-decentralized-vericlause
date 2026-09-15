import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const createFinding_Body = z
  .object({
    jobId: z.string().regex(/^job_[0-9A-HJKMNP-TV-Z]{26}$/),
    projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
    versionRef: z.string().min(1),
    severity: z.enum(['info', 'low', 'medium', 'high', 'critical']),
    title: z.string().min(1),
    property: z.string().optional(),
    trace: z.string().optional(),
    suggestedRootCause: z.string().optional(),
    status: z
      .enum(['open', 'waived', 'fixed', 'acceptedRisk'])
      .optional()
      .default('open'),
  })
  .passthrough();
const FindingSeverity = z.enum(['info', 'low', 'medium', 'high', 'critical']);
const FindingStatus = z.enum(['open', 'waived', 'fixed', 'acceptedRisk']);
const Finding = z
  .object({
    findingId: z.string().regex(/^fnd_[0-9A-HJKMNP-TV-Z]{26}$/),
    jobId: z.string().regex(/^job_[0-9A-HJKMNP-TV-Z]{26}$/),
    projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
    versionRef: z.string().min(1),
    severity: z.enum(['info', 'low', 'medium', 'high', 'critical']),
    title: z.string().min(1),
    property: z.string().optional(),
    trace: z.string().optional(),
    suggestedRootCause: z.string().optional(),
    status: z.enum(['open', 'waived', 'fixed', 'acceptedRisk']),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const FindingCreateRequest = z
  .object({
    jobId: z.string().regex(/^job_[0-9A-HJKMNP-TV-Z]{26}$/),
    projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
    versionRef: z.string().min(1),
    severity: z.enum(['info', 'low', 'medium', 'high', 'critical']),
    title: z.string().min(1),
    property: z.string().optional(),
    trace: z.string().optional(),
    suggestedRootCause: z.string().optional(),
    status: z
      .enum(['open', 'waived', 'fixed', 'acceptedRisk'])
      .optional()
      .default('open'),
  })
  .passthrough();
const FindingResponse = z
  .object({
    data: z
      .object({
        findingId: z.string().regex(/^fnd_[0-9A-HJKMNP-TV-Z]{26}$/),
        jobId: z.string().regex(/^job_[0-9A-HJKMNP-TV-Z]{26}$/),
        projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
        versionRef: z.string().min(1),
        severity: z.enum(['info', 'low', 'medium', 'high', 'critical']),
        title: z.string().min(1),
        property: z.string().optional(),
        trace: z.string().optional(),
        suggestedRootCause: z.string().optional(),
        status: z.enum(['open', 'waived', 'fixed', 'acceptedRisk']),
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
const FindingListData = z
  .object({
    items: z.array(
      z
        .object({
          findingId: z.string().regex(/^fnd_[0-9A-HJKMNP-TV-Z]{26}$/),
          jobId: z.string().regex(/^job_[0-9A-HJKMNP-TV-Z]{26}$/),
          projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
          versionRef: z.string().min(1),
          severity: z.enum(['info', 'low', 'medium', 'high', 'critical']),
          title: z.string().min(1),
          property: z.string().optional(),
          trace: z.string().optional(),
          suggestedRootCause: z.string().optional(),
          status: z.enum(['open', 'waived', 'fixed', 'acceptedRisk']),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const FindingListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              findingId: z.string().regex(/^fnd_[0-9A-HJKMNP-TV-Z]{26}$/),
              jobId: z.string().regex(/^job_[0-9A-HJKMNP-TV-Z]{26}$/),
              projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
              versionRef: z.string().min(1),
              severity: z.enum(['info', 'low', 'medium', 'high', 'critical']),
              title: z.string().min(1),
              property: z.string().optional(),
              trace: z.string().optional(),
              suggestedRootCause: z.string().optional(),
              status: z.enum(['open', 'waived', 'fixed', 'acceptedRisk']),
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
const ProjectId = z.string();
const AnalysisJobId = z.string();
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
const FindingId = z.string();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();

export const schemas: any = {
  createFinding_Body,
  FindingSeverity,
  FindingStatus,
  Finding,
  FindingCreateRequest,
  FindingResponse,
  FindingListData,
  FindingListResponse,
  ProjectId,
  AnalysisJobId,
  Problem,
  FindingId,
  ResponseMeta,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/findings',
    alias: 'listFindings',
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
        name: 'jobId',
        type: 'Query',
        schema: z
          .string()
          .regex(/^job_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
      },
      {
        name: 'severity',
        type: 'Query',
        schema: z
          .enum(['info', 'low', 'medium', 'high', 'critical'])
          .optional(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z.enum(['open', 'waived', 'fixed', 'acceptedRisk']).optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  findingId: z.string().regex(/^fnd_[0-9A-HJKMNP-TV-Z]{26}$/),
                  jobId: z.string().regex(/^job_[0-9A-HJKMNP-TV-Z]{26}$/),
                  projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
                  versionRef: z.string().min(1),
                  severity: z.enum([
                    'info',
                    'low',
                    'medium',
                    'high',
                    'critical',
                  ]),
                  title: z.string().min(1),
                  property: z.string().optional(),
                  trace: z.string().optional(),
                  suggestedRootCause: z.string().optional(),
                  status: z.enum(['open', 'waived', 'fixed', 'acceptedRisk']),
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
    path: '/v1/findings',
    alias: 'createFinding',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createFinding_Body,
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
            findingId: z.string().regex(/^fnd_[0-9A-HJKMNP-TV-Z]{26}$/),
            jobId: z.string().regex(/^job_[0-9A-HJKMNP-TV-Z]{26}$/),
            projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
            versionRef: z.string().min(1),
            severity: z.enum(['info', 'low', 'medium', 'high', 'critical']),
            title: z.string().min(1),
            property: z.string().optional(),
            trace: z.string().optional(),
            suggestedRootCause: z.string().optional(),
            status: z.enum(['open', 'waived', 'fixed', 'acceptedRisk']),
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
    path: '/v1/findings/:findingId',
    alias: 'getFinding',
    requestFormat: 'json',
    parameters: [
      {
        name: 'findingId',
        type: 'Path',
        schema: z.string().regex(/^fnd_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            findingId: z.string().regex(/^fnd_[0-9A-HJKMNP-TV-Z]{26}$/),
            jobId: z.string().regex(/^job_[0-9A-HJKMNP-TV-Z]{26}$/),
            projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
            versionRef: z.string().min(1),
            severity: z.enum(['info', 'low', 'medium', 'high', 'critical']),
            title: z.string().min(1),
            property: z.string().optional(),
            trace: z.string().optional(),
            suggestedRootCause: z.string().optional(),
            status: z.enum(['open', 'waived', 'fixed', 'acceptedRisk']),
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
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
