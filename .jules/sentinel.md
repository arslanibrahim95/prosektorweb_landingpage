## 2026-04-13 - Enforce Strict SSL Validation for PostgreSQL Connection
**Vulnerability:** Man-in-the-Middle (MitM) risk due to disabled SSL certificate validation (`rejectUnauthorized: false`) in pg pool configuration.
**Learning:** Setting `rejectUnauthorized: false` allows connections to PostgreSQL servers with invalid or self-signed certificates, making the connection vulnerable to interception.
**Prevention:** Always enforce strict SSL validation in production environments (`rejectUnauthorized: process.env.NODE_ENV === 'production' ? true : false`) or use full SSL strictly if no local DB needed.
