# @billing/shared-types

Shared **row-type contracts** for the billing stack:

- **Postgres** (`./postgres`): `typeof table.$inferSelect` aliases wired to [`Super_Admin/Backend_Super_Admin/src/db/schema`](../Super_Admin/Backend_Super_Admin/src/db/schema.ts) — Supabase / Nest backend.
- **SQLite** (`./sqlite`): `typeof table.$inferSelect` aliases wired to [`Billing_Software_User_PC/src/db/schema`](../Billing_Software_User_PC/src/db/schema.ts) — Tauri offline DB.

## Layout

Place this folder next to both app repos, e.g.:

```text
Projects/
  shared-billing-types/
  Super_Admin/Backend_Super_Admin/
  Billing_Software_User_PC/
```

## Usage

- `AssertSchema` / `Expect` — from `@billing/shared-types`
- Postgres row types — `@billing/shared-types/postgres`
- SQLite row types — `@billing/shared-types/sqlite`
- Optional combined registries — `@billing/shared-types/registry` (imports both schemas; use only in tooling)

Each app runs a compile-only `src/db/type-check.ts` that asserts `InferSelectModel<typeof table>` matches the shared contract for that dialect.

## Install

```json
"dependencies": {
  "@billing/shared-types": "file:../shared-billing-types"
}
```

`npm install` may fail in some environments; **TypeScript path mappings** are also set in each app’s `tsconfig` so `tsc` resolves the package without `node_modules`.

## Scripts

- Backend: `npm run typecheck` (full project + schema contracts)
- Billing app: `npm run typecheck` (DB contract only via `tsconfig.db-typecheck.json`)
"# shared-billing-types" 
