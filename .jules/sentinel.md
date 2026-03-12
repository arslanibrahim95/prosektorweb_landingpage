## 2025-03-12 - Postgres SSL Configuration MitM Risk
**Vulnerability:** Postgres connection pooled via `pg` library had `ssl: { rejectUnauthorized: false }`, leaving it vulnerable to Man-in-the-Middle (MitM) attacks.
**Learning:** Even internal or cloud-provider database connections require strict certificate validation. Disabling this validation defeats the purpose of TLS encryption as an attacker can intercept and impersonate the database server.
**Prevention:** Always set `rejectUnauthorized: true` for Postgres connections via the `pg` library and ensure properly configured CA certificates, supporting explicit `DB_SSL_CA` strings or file paths when default CAs are insufficient.
