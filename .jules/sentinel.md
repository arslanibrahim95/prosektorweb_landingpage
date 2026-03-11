## 2024-05-24 - [Insecure TLS Configuration in PostgreSQL Connections]
**Vulnerability:** The PostgreSQL connection configuration in `backend/src/services/supabase.ts` and `backend/scripts/applySchema.ts` used `ssl: { rejectUnauthorized: false }`, which disables TLS certificate validation.
**Learning:** This existed likely to bypass certificate errors during development or when connecting to databases with self-signed certificates. However, this allows Man-in-the-Middle (MitM) attacks by accepting any certificate, rendering encryption ineffective against active eavesdropping.
**Prevention:** Always set `ssl: { rejectUnauthorized: true }` in production database connection configurations to enforce proper TLS certificate validation. Ensure the environment uses properly signed certificates.
