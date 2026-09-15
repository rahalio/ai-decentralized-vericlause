import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const createContractProject_Body = z
  .object({
    name: z.string().min(1),
    language: z.enum(['solidity', 'vyper', 'other']),
    repoUri: z.string().url().optional(),
    privateMode: z.boolean().optional().default(true),
    valueAtRiskBand: z
      .enum([
        'under1m',
        'band1to10m',
        'band10to50m',
        'band50to180m',
        'over180m',
      ])
      .optional(),
  })
  .passthrough();
const updateContractProject_Body = z
  .object({
    name: z.string().min(1),
    status: z.enum(['active', 'archived']),
    repoUri: z.string().url(),
    privateMode: z.boolean(),
    valueAtRiskBand: z.enum([
      'under1m',
      'band1to10m',
      'band10to50m',
      'band50to180m',
      'over180m',
    ]),
  })
  .partial()
  .passthrough();
const createContractVersion_Body = z
  .object({
    versionRef: z.string().min(1),
    commitSha: z.string().optional(),
    branch: z.string().optional(),
    prUri: z.string().url().optional(),
  })
  .passthrough();
const ContractLanguage = z.enum(['solidity', 'vyper', 'other']);
const ProjectStatus = z.enum(['active', 'archived']);
const ValueAtRiskBand = z.enum([
  'under1m',
  'band1to10m',
  'band10to50m',
  'band50to180m',
  'over180m',
]);
const ContractProject = z
  .object({
    projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
    name: z.string().min(1),
    status: z.enum(['active', 'archived']),
    language: z.enum(['solidity', 'vyper', 'other']),
    repoUri: z.string().url().optional(),
    privateMode: z.boolean(),
    openCriticalCount: z.number().int().gte(0),
    waiverDebtDays: z.number().int().gte(0).optional(),
    valueAtRiskBand: z
      .enum([
        'under1m',
        'band1to10m',
        'band10to50m',
        'band50to180m',
        'over180m',
      ])
      .optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const ContractProjectCreateRequest = z
  .object({
    name: z.string().min(1),
    language: z.enum(['solidity', 'vyper', 'other']),
    repoUri: z.string().url().optional(),
    privateMode: z.boolean().optional().default(true),
    valueAtRiskBand: z
      .enum([
        'under1m',
        'band1to10m',
        'band10to50m',
        'band50to180m',
        'over180m',
      ])
      .optional(),
  })
  .passthrough();
const ContractProjectUpdateRequest = z
  .object({
    name: z.string().min(1),
    status: z.enum(['active', 'archived']),
    repoUri: z.string().url(),
    privateMode: z.boolean(),
    valueAtRiskBand: z.enum([
      'under1m',
      'band1to10m',
      'band10to50m',
      'band50to180m',
      'over180m',
    ]),
  })
  .partial()
  .passthrough();
const ContractVersionStatus = z.enum([
  'draft',
  'inReview',
  'gated',
  'released',
  'superseded',
]);
const ContractVersion = z
  .object({
    versionId: z.string().regex(/^ver_[0-9A-HJKMNP-TV-Z]{26}$/),
    projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
    versionRef: z.string().min(1),
    commitSha: z.string().optional(),
    branch: z.string().optional(),
    status: z.enum(['draft', 'inReview', 'gated', 'released', 'superseded']),
    prUri: z.string().url().optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const ContractVersionCreateRequest = z
  .object({
    versionRef: z.string().min(1),
    commitSha: z.string().optional(),
    branch: z.string().optional(),
    prUri: z.string().url().optional(),
  })
  .passthrough();
const ContractProjectResponse = z
  .object({
    data: z
      .object({
        projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
        name: z.string().min(1),
        status: z.enum(['active', 'archived']),
        language: z.enum(['solidity', 'vyper', 'other']),
        repoUri: z.string().url().optional(),
        privateMode: z.boolean(),
        openCriticalCount: z.number().int().gte(0),
        waiverDebtDays: z.number().int().gte(0).optional(),
        valueAtRiskBand: z
          .enum([
            'under1m',
            'band1to10m',
            'band10to50m',
            'band50to180m',
            'over180m',
          ])
          .optional(),
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
const ContractProjectListData = z
  .object({
    items: z.array(
      z
        .object({
          projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
          name: z.string().min(1),
          status: z.enum(['active', 'archived']),
          language: z.enum(['solidity', 'vyper', 'other']),
          repoUri: z.string().url().optional(),
          privateMode: z.boolean(),
          openCriticalCount: z.number().int().gte(0),
          waiverDebtDays: z.number().int().gte(0).optional(),
          valueAtRiskBand: z
            .enum([
              'under1m',
              'band1to10m',
              'band10to50m',
              'band50to180m',
              'over180m',
            ])
            .optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const ContractProjectListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
              name: z.string().min(1),
              status: z.enum(['active', 'archived']),
              language: z.enum(['solidity', 'vyper', 'other']),
              repoUri: z.string().url().optional(),
              privateMode: z.boolean(),
              openCriticalCount: z.number().int().gte(0),
              waiverDebtDays: z.number().int().gte(0).optional(),
              valueAtRiskBand: z
                .enum([
                  'under1m',
                  'band1to10m',
                  'band10to50m',
                  'band50to180m',
                  'over180m',
                ])
                .optional(),
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
const ContractVersionResponse = z
  .object({
    data: z
      .object({
        versionId: z.string().regex(/^ver_[0-9A-HJKMNP-TV-Z]{26}$/),
        projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
        versionRef: z.string().min(1),
        commitSha: z.string().optional(),
        branch: z.string().optional(),
        status: z.enum([
          'draft',
          'inReview',
          'gated',
          'released',
          'superseded',
        ]),
        prUri: z.string().url().optional(),
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
const ContractVersionListData = z
  .object({
    items: z.array(
      z
        .object({
          versionId: z.string().regex(/^ver_[0-9A-HJKMNP-TV-Z]{26}$/),
          projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
          versionRef: z.string().min(1),
          commitSha: z.string().optional(),
          branch: z.string().optional(),
          status: z.enum([
            'draft',
            'inReview',
            'gated',
            'released',
            'superseded',
          ]),
          prUri: z.string().url().optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const ContractVersionListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              versionId: z.string().regex(/^ver_[0-9A-HJKMNP-TV-Z]{26}$/),
              projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
              versionRef: z.string().min(1),
              commitSha: z.string().optional(),
              branch: z.string().optional(),
              status: z.enum([
                'draft',
                'inReview',
                'gated',
                'released',
                'superseded',
              ]),
              prUri: z.string().url().optional(),
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
const ProjectId = z.string();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const VersionId = z.string();

export const schemas: any = {
  createContractProject_Body,
  updateContractProject_Body,
  createContractVersion_Body,
  ContractLanguage,
  ProjectStatus,
  ValueAtRiskBand,
  ContractProject,
  ContractProjectCreateRequest,
  ContractProjectUpdateRequest,
  ContractVersionStatus,
  ContractVersion,
  ContractVersionCreateRequest,
  ContractProjectResponse,
  ContractProjectListData,
  ContractProjectListResponse,
  ContractVersionResponse,
  ContractVersionListData,
  ContractVersionListResponse,
  Problem,
  ProjectId,
  ResponseMeta,
  VersionId,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/contract-projects',
    alias: 'listContractProjects',
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
        name: 'status',
        type: 'Query',
        schema: z.enum(['active', 'archived']).optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
                  name: z.string().min(1),
                  status: z.enum(['active', 'archived']),
                  language: z.enum(['solidity', 'vyper', 'other']),
                  repoUri: z.string().url().optional(),
                  privateMode: z.boolean(),
                  openCriticalCount: z.number().int().gte(0),
                  waiverDebtDays: z.number().int().gte(0).optional(),
                  valueAtRiskBand: z
                    .enum([
                      'under1m',
                      'band1to10m',
                      'band10to50m',
                      'band50to180m',
                      'over180m',
                    ])
                    .optional(),
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
    path: '/v1/contract-projects',
    alias: 'createContractProject',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createContractProject_Body,
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
            projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string().min(1),
            status: z.enum(['active', 'archived']),
            language: z.enum(['solidity', 'vyper', 'other']),
            repoUri: z.string().url().optional(),
            privateMode: z.boolean(),
            openCriticalCount: z.number().int().gte(0),
            waiverDebtDays: z.number().int().gte(0).optional(),
            valueAtRiskBand: z
              .enum([
                'under1m',
                'band1to10m',
                'band10to50m',
                'band50to180m',
                'over180m',
              ])
              .optional(),
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
    path: '/v1/contract-projects/:projectId',
    alias: 'getContractProject',
    requestFormat: 'json',
    parameters: [
      {
        name: 'projectId',
        type: 'Path',
        schema: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string().min(1),
            status: z.enum(['active', 'archived']),
            language: z.enum(['solidity', 'vyper', 'other']),
            repoUri: z.string().url().optional(),
            privateMode: z.boolean(),
            openCriticalCount: z.number().int().gte(0),
            waiverDebtDays: z.number().int().gte(0).optional(),
            valueAtRiskBand: z
              .enum([
                'under1m',
                'band1to10m',
                'band10to50m',
                'band50to180m',
                'over180m',
              ])
              .optional(),
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
    method: 'patch',
    path: '/v1/contract-projects/:projectId',
    alias: 'updateContractProject',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: updateContractProject_Body,
      },
      {
        name: 'projectId',
        type: 'Path',
        schema: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string().min(1),
            status: z.enum(['active', 'archived']),
            language: z.enum(['solidity', 'vyper', 'other']),
            repoUri: z.string().url().optional(),
            privateMode: z.boolean(),
            openCriticalCount: z.number().int().gte(0),
            waiverDebtDays: z.number().int().gte(0).optional(),
            valueAtRiskBand: z
              .enum([
                'under1m',
                'band1to10m',
                'band10to50m',
                'band50to180m',
                'over180m',
              ])
              .optional(),
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
    method: 'get',
    path: '/v1/contract-projects/:projectId/versions',
    alias: 'listContractVersions',
    requestFormat: 'json',
    parameters: [
      {
        name: 'projectId',
        type: 'Path',
        schema: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
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
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  versionId: z.string().regex(/^ver_[0-9A-HJKMNP-TV-Z]{26}$/),
                  projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
                  versionRef: z.string().min(1),
                  commitSha: z.string().optional(),
                  branch: z.string().optional(),
                  status: z.enum([
                    'draft',
                    'inReview',
                    'gated',
                    'released',
                    'superseded',
                  ]),
                  prUri: z.string().url().optional(),
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
    path: '/v1/contract-projects/:projectId/versions',
    alias: 'createContractVersion',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createContractVersion_Body,
      },
      {
        name: 'projectId',
        type: 'Path',
        schema: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            versionId: z.string().regex(/^ver_[0-9A-HJKMNP-TV-Z]{26}$/),
            projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
            versionRef: z.string().min(1),
            commitSha: z.string().optional(),
            branch: z.string().optional(),
            status: z.enum([
              'draft',
              'inReview',
              'gated',
              'released',
              'superseded',
            ]),
            prUri: z.string().url().optional(),
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
    path: '/v1/contract-projects/:projectId/versions/:versionId',
    alias: 'getContractVersion',
    requestFormat: 'json',
    parameters: [
      {
        name: 'projectId',
        type: 'Path',
        schema: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'versionId',
        type: 'Path',
        schema: z.string().regex(/^ver_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            versionId: z.string().regex(/^ver_[0-9A-HJKMNP-TV-Z]{26}$/),
            projectId: z.string().regex(/^prj_[0-9A-HJKMNP-TV-Z]{26}$/),
            versionRef: z.string().min(1),
            commitSha: z.string().optional(),
            branch: z.string().optional(),
            status: z.enum([
              'draft',
              'inReview',
              'gated',
              'released',
              'superseded',
            ]),
            prUri: z.string().url().optional(),
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
