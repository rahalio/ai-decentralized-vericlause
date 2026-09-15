/**
 * Assurance Artefacts Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/assurance-artefacts.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ArtefactStatus = components["schemas"]["ArtefactStatus"];
export type AssuranceArtefact = components["schemas"]["AssuranceArtefact"];
export type AssuranceArtefactListData = components["schemas"]["AssuranceArtefactListData"];
export type AuditorExportPack = components["schemas"]["AuditorExportPack"];
export type AssuranceArtefactCreateRequest = components["schemas"]["AssuranceArtefactCreateRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateAssuranceArtefactRequestInput = NonNullable<operations["createAssuranceArtefact"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListAssuranceArtefactsParams = NonNullable<operations["listAssuranceArtefacts"]["parameters"]["query"]>;
export type GetAssuranceArtefactParams = operations["getAssuranceArtefact"]["parameters"]["path"];
export type SignAssuranceArtefactParams = operations["signAssuranceArtefact"]["parameters"]["path"];
export type CreateAuditorExportPackParams = operations["createAuditorExportPack"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListAssuranceArtefactsResponse = operations["listAssuranceArtefacts"]["responses"]["200"]["content"]["application/json"];
export type CreateAssuranceArtefactResponse = operations["createAssuranceArtefact"]["responses"]["201"]["content"]["application/json"];
export type GetAssuranceArtefactResponse = operations["getAssuranceArtefact"]["responses"]["200"]["content"]["application/json"];
export type SignAssuranceArtefactResponse = operations["signAssuranceArtefact"]["responses"]["200"]["content"]["application/json"];
export type CreateAuditorExportPackResponse = operations["createAuditorExportPack"]["responses"]["200"]["content"]["application/json"];


