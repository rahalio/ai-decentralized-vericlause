# Vericlause

AI-assisted smart-contract assurance desk — formal verification, search-based testing, and release gates before mainnet.

Product specs: [PRODUCT.md](./PRODUCT.md), [WEBAPP.md](./WEBAPP.md), [USER_STORIES.md](./USER_STORIES.md).

Package scope: **`@vericlause/*`**. Canonical OpenAPI lives under `packages/openapi-core/src/` (one YAML per domain).

## Setup

```bash
# If missing, copy local-only codegen toolchain (never commit .codegen)
cp -R /Users/nrahal/@code/zero-apps/zero-apps-codegen-scaffold/.codegen .
# Optional: reuse a venv from a sibling port, or create one:
# python3 -m venv .codegen/.venv && .codegen/.venv/bin/pip install -e .codegen/codegen

pnpm install
pnpm codegen:paths
pnpm lint:openapi && pnpm bundle:openapi
pnpm build
pnpm dev:api
# Health: curl http://127.0.0.1:4000/health
# Demo key: X-API-Key: vericlause_demo_local_dev_key
```

Web app: `pnpm dev:web`.

## Codegen rules

1. **New domain** → full multi-layer generate once (Mode A).
2. **YAML edit on existing domain** → regenerate **core only**, handwrite below (Mode B).
3. `.codegen/` is **local-only** — never commit or push it.

See `.cursor/skills/` and `docs/CODEGEN.md`.
