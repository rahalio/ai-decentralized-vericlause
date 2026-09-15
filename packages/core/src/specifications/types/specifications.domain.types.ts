/**
 * Specifications Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/specifications.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type HistoricalTemplate = components["schemas"]["HistoricalTemplate"];
export type SpecKind = components["schemas"]["SpecKind"];
export type SpecStatus = components["schemas"]["SpecStatus"];
export type Specification = components["schemas"]["Specification"];
export type SpecificationListData = components["schemas"]["SpecificationListData"];
export type SpecificationCreateRequest = components["schemas"]["SpecificationCreateRequest"];
export type SpecificationUpdateRequest = components["schemas"]["SpecificationUpdateRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateSpecificationRequestInput = NonNullable<operations["createSpecification"]["requestBody"]>["content"]["application/json"];
export type UpdateSpecificationRequestInput = NonNullable<operations["updateSpecification"]["requestBody"]>["content"]["application/json"];
export type UpdateSpecificationRequest = UpdateSpecificationRequestInput;


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListSpecificationsParams = NonNullable<operations["listSpecifications"]["parameters"]["query"]>;
export type GetSpecificationParams = operations["getSpecification"]["parameters"]["path"];
export type UpdateSpecificationParams = operations["updateSpecification"]["parameters"]["path"];
export type AcceptInferredSpecificationParams = operations["acceptInferredSpecification"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListSpecificationsResponse = operations["listSpecifications"]["responses"]["200"]["content"]["application/json"];
export type CreateSpecificationResponse = operations["createSpecification"]["responses"]["201"]["content"]["application/json"];
export type GetSpecificationResponse = operations["getSpecification"]["responses"]["200"]["content"]["application/json"];
export type UpdateSpecificationResponse = operations["updateSpecification"]["responses"]["200"]["content"]["application/json"];
export type AcceptInferredSpecificationResponse = operations["acceptInferredSpecification"]["responses"]["200"]["content"]["application/json"];


