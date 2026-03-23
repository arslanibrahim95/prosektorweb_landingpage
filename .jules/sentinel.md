## YYYY-MM-DD - Insecure TLS Configuration for PostgreSQL
**Vulnerability:** PostgreSQL connections using the 'pg' library were configured with `ssl: { rejectUnauthorized: false }`, meaning the client did not verify the server's TLS certificate.
**Learning:** This misconfiguration exposes the application to Man-in-the-Middle (MitM) attacks by allowing an attacker to intercept and alter database traffic because the server's identity is not properly validated.
**Prevention:** Always enforce TLS certificate validation (`rejectUnauthorized: true`) for database connections in production. Ensure that proper root CA certificates are provided if custom Certificate Authorities are used.
