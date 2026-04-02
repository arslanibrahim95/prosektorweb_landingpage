## 2025-03-01 - Insecure PostgreSQL SSL Configuration
**Vulnerability:** The Postgres pool was configured with `ssl: { rejectUnauthorized: false }`, exposing connections to Man-in-the-Middle (MitM) attacks.
**Learning:** The `pg` library requires explicit secure TLS configurations; bypassing authorization checks nullifies SSL protections.
**Prevention:** Always enforce `rejectUnauthorized: true` and provide proper CA certificates (e.g., via `DB_SSL_CA`) dynamically.
