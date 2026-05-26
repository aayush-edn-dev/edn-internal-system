# Frontend Architecture Blueprint

## Principles

- Feature-first modules with strict boundaries.
- Shared UI primitives separated from feature logic.
- API and auth scaffolding ready before integration.
- Route-level composition through App Router groups and layouts.

## Current Modules

- Dashboard
- Customers
- Follow-up
- Billing
- Reports
- Settings

## DRF Integration Plan

1. Keep serializers and viewset contracts mirrored in TypeScript DTOs under each feature.
2. Use shared request utility from lib/api/http-client.ts.
3. Keep endpoints centralized in lib/api/endpoints.ts.
4. Add auth provider and token persistence once backend auth is ready.
5. Gate route actions by permission checks from lib/auth/permissions.ts.
