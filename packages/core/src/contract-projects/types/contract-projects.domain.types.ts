/**
 * Contract Projects Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/contract-projects.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ContractLanguage = components["schemas"]["ContractLanguage"];
export type ContractProject = components["schemas"]["ContractProject"];
export type ContractProjectListData = components["schemas"]["ContractProjectListData"];
export type ContractVersion = components["schemas"]["ContractVersion"];
export type ContractVersionListData = components["schemas"]["ContractVersionListData"];
export type ContractVersionStatus = components["schemas"]["ContractVersionStatus"];
export type ProjectStatus = components["schemas"]["ProjectStatus"];
export type ValueAtRiskBand = components["schemas"]["ValueAtRiskBand"];
export type ContractProjectCreateRequest = components["schemas"]["ContractProjectCreateRequest"];
export type ContractProjectUpdateRequest = components["schemas"]["ContractProjectUpdateRequest"];
export type ContractVersionCreateRequest = components["schemas"]["ContractVersionCreateRequest"];
export type Version = operations["listContractVersions"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateContractProjectRequestInput = NonNullable<operations["createContractProject"]["requestBody"]>["content"]["application/json"];
export type UpdateContractProjectRequestInput = NonNullable<operations["updateContractProject"]["requestBody"]>["content"]["application/json"];
export type UpdateContractProjectRequest = UpdateContractProjectRequestInput;
export type CreateContractVersionRequestInput = NonNullable<operations["createContractVersion"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListContractProjectsParams = NonNullable<operations["listContractProjects"]["parameters"]["query"]>;
export type GetContractProjectParams = operations["getContractProject"]["parameters"]["path"];
export type UpdateContractProjectParams = operations["updateContractProject"]["parameters"]["path"];
export type ListContractVersionsParams = NonNullable<operations["listContractVersions"]["parameters"]["query"]>;
export type CreateContractVersionParams = operations["createContractVersion"]["parameters"]["path"];
export type GetContractVersionParams = operations["getContractVersion"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListContractProjectsResponse = operations["listContractProjects"]["responses"]["200"]["content"]["application/json"];
export type CreateContractProjectResponse = operations["createContractProject"]["responses"]["201"]["content"]["application/json"];
export type GetContractProjectResponse = operations["getContractProject"]["responses"]["200"]["content"]["application/json"];
export type UpdateContractProjectResponse = operations["updateContractProject"]["responses"]["200"]["content"]["application/json"];
export type ListContractVersionsResponse = operations["listContractVersions"]["responses"]["200"]["content"]["application/json"];
export type CreateContractVersionResponse = operations["createContractVersion"]["responses"]["201"]["content"]["application/json"];
export type GetContractVersionResponse = operations["getContractVersion"]["responses"]["200"]["content"]["application/json"];


