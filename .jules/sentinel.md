## 2024-05-10 - Insecure PostgreSQL TLS Configuration
**Vulnerability:** PostgreSQL connections (managed via the 'pg' library) accepted any certificate (`ssl: { rejectUnauthorized: false }`), exposing the application to Man-in-the-Middle (MitM) attacks.
**Learning:** Hardcoded configuration overrides for TLS verification were left in the codebase (possibly from development or testing).
**Prevention:** Always verify that 'rejectUnauthorized' is explicitly set to 'true' in production configurations and utilize environment variables (like 'DB_SSL_CA') properly to allow valid, custom Certificate Authorities rather than bypassing validation completely.
