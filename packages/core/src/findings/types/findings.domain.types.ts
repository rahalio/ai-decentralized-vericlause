/**
 * Findings Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/findings.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type Finding = components["schemas"]["Finding"];
export type FindingListData = components["schemas"]["FindingListData"];
export type FindingSeverity = components["schemas"]["FindingSeverity"];
export type FindingStatus = components["schemas"]["FindingStatus"];
export type FindingCreateRequest = components["schemas"]["FindingCreateRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateFindingRequestInput = NonNullable<operations["createFinding"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListFindingsParams = NonNullable<operations["listFindings"]["parameters"]["query"]>;
export type GetFindingParams = operations["getFinding"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListFindingsResponse = operations["listFindings"]["responses"]["200"]["content"]["application/json"];
export type CreateFindingResponse = operations["createFinding"]["responses"]["201"]["content"]["application/json"];
export type GetFindingResponse = operations["getFinding"]["responses"]["200"]["content"]["application/json"];


