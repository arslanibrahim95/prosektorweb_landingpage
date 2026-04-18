## 2024-05-24 - Enforce Strict SSL in DB Connection
**Vulnerability:** The PostgreSQL connection pool was configured with `ssl: { rejectUnauthorized: false }` universally, which disables certificate validation and allows Man-in-the-Middle (MitM) attacks.
**Learning:** Developer convenience for local databases overrode secure defaults.
**Prevention:** Always use conditional logic based on environment variables (like `NODE_ENV === 'production'`) to ensure `rejectUnauthorized: true` in production while allowing local development flexibility.
