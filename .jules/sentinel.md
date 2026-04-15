## 2024-05-24 - Enforce strict Postgres SSL validation
**Vulnerability:** PostgreSQL connection pool used `rejectUnauthorized: false` in all environments, making it vulnerable to Man-in-the-Middle (MitM) attacks.
**Learning:** The application disabled SSL certificate validation globally, likely to simplify local development, but failed to enable it for production.
**Prevention:** Always use conditional logic based on environment variables (e.g., `NODE_ENV`) to enforce `rejectUnauthorized: true` in production while allowing less strict settings only for local development.