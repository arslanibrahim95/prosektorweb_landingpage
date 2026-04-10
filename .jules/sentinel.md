## 2024-04-10 - Strict SSL Configuration for PostgreSQL Pools
**Vulnerability:** PostgreSQL connection pools configured with `ssl: { rejectUnauthorized: false }` expose the application to Man-in-the-Middle (MitM) attacks.
**Learning:** This insecure configuration allows unverified certificates to be trusted, undermining secure data transmission.
**Prevention:** Always set `rejectUnauthorized: true` in production environments, using conditional logic (e.g., `process.env.NODE_ENV === 'production'`) if necessary to allow local development.
