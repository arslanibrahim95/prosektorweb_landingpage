## 2024-05-18 - PostgreSQL MitM Vulnerability
**Vulnerability:** PostgreSQL connection pool used `ssl: { rejectUnauthorized: false }` globally, enabling Man-in-the-Middle (MitM) attacks.
**Learning:** Hardcoding insecure SSL settings across all environments exposes sensitive database credentials and traffic in production.
**Prevention:** Always enforce `rejectUnauthorized: true` in production environments, using conditional logic (e.g., based on `NODE_ENV`) to allow less strict settings only for local development if necessary.
