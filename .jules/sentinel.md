## 2024-05-24 - PostgreSQL MitM Risk
**Vulnerability:** PostgreSQL connection pool used `rejectUnauthorized: false` for all environments.
**Learning:** Hardcoded insecure defaults for local development can leak into production, enabling Man-in-the-Middle attacks.
**Prevention:** Use `process.env.NODE_ENV` to enforce strict SSL validation (`rejectUnauthorized: true`) in production environments while allowing looser settings locally.