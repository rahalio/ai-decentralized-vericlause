# @vericlause/openapi-core

Canonical OpenAPI for Vericlause — **one YAML file per domain** under `src/`.

| Domain | File |
|--------|------|
| identity | `identity.yaml` |
| contract-projects | `contract-projects.yaml` |
| specifications | `specifications.yaml` |
| analysis-jobs | `analysis-jobs.yaml` |
| findings | `findings.yaml` |
| waivers | `waivers.yaml` |
| release-gates | `release-gates.yaml` |
| assurance-artefacts | `assurance-artefacts.yaml` |

Shared fragments: `src/common/`. Bundle with `pnpm bundle:openapi` from the repo root.

`.codegen/` is **local-only** — never commit it. Copy from `zero-apps-codegen-scaffold` and run `pnpm codegen:paths`.
