/**
 * AnalysisJobs Domain
 *
 * Barrel export for analysis-jobs service, types, hooks, and view models.
 *
 * Architecture Rules:
 * - API types: re-exports from @vericlause/core only
 * - View models: UI-only extensions (VM suffix)
 * - Service: only place that touches network
 * - Hooks: call service only (never apiClient directly)
 * - Mappers: internal to service layer (not for components)
 * - Components: domain-specific UI (not exported from barrel)
 */

// ============================================================================
// Service (runtime boundary - only place that touches network)
// ============================================================================
export { analysis-jobsService } from './analysis-jobs.service';

// ============================================================================
// Facade (high-level API for components)
// ============================================================================
export { analysis-jobsFacade } from './facade';

// ============================================================================
// Contracts (runtime validation)
// ============================================================================
export * from "./contracts";

// ============================================================================
// API Types (re-exports from @vericlause/core only)
// ============================================================================
// These are immutable API contracts - never define locally
export type {
  // TODO: Add type exports from api-types
} from './analysis-jobs.api-types';

// ============================================================================
// Hooks (consolidated in hooks/ directory)
// ============================================================================
export * from './hooks';

// ============================================================================
// Components (domain-specific UI - not exported from barrel)
// ============================================================================
// Components are now in features/ directory and should be imported from there.
// This prevents cross-domain component dependencies and keeps the barrel focused.
