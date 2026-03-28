## 2024-05-24 - PostgreSQL MitM Vulnerability with rejectUnauthorized: false
**Vulnerability:** PostgreSQL connection in backend/src/services/supabase.ts was configured with `ssl: { rejectUnauthorized: false }`.
**Learning:** Setting `rejectUnauthorized: false` bypasses TLS certificate validation, opening the application to Man-in-the-Middle (MitM) attacks, which is especially critical when connecting to remote databases containing sensitive information.
**Prevention:** Always enforce `rejectUnauthorized: true` for remote database connections and properly configure a CA certificate using environment variables (e.g., `DB_SSL_CA` supporting both raw PEM strings and file paths) to ensure secure authentication.
