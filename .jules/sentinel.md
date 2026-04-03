## 2025-02-18 - PostgreSQL Connection MitM Vulnerability
**Vulnerability:** `pg.Pool` configuration hardcoded `ssl: { rejectUnauthorized: false }`.
**Learning:** Hardcoding `rejectUnauthorized: false` disables TLS certificate validation, making the connection vulnerable to Man-in-the-Middle (MitM) attacks.
**Prevention:** Always use `rejectUnauthorized: true` for database connections, and handle custom Certificate Authorities properly (e.g., via environment variables like `DB_SSL_CA` supporting both PEM strings and file paths) when necessary.
