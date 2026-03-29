## 2025-03-29 - PostgreSQL SSL MitM Vulnerability
**Vulnerability:** The backend PostgreSQL connection pool (`backend/src/services/supabase.ts`) had `ssl: { rejectUnauthorized: false }` hardcoded.
**Learning:** This explicitly disables TLS certificate validation, exposing database traffic (credentials and user data) to Man-in-the-Middle (MitM) attacks.
**Prevention:** Always enforce TLS certificate validation (`ssl: { rejectUnauthorized: true }`) for database connections and provide an option to supply a custom Certificate Authority (CA) if necessary (e.g., via `DB_SSL_CA` environment variable accepting raw strings or file paths).
