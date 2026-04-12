## 2024-05-23 - PostgreSQL Connection MitM Vulnerability
**Vulnerability:** The pg connection pool in `backend/src/services/supabase.ts` was configured with `ssl: { rejectUnauthorized: false }` unconditionally, which disables TLS certificate verification and allows Man-in-the-Middle attacks.
**Learning:** Hardcoding `rejectUnauthorized: false` for local development convenience bypassed critical production security checks.
**Prevention:** Always use conditional logic based on environment variables (like `NODE_ENV === 'production'`) to ensure `rejectUnauthorized: true` is strictly enforced in production.
