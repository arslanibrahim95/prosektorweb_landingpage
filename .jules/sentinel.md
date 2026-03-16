## 2025-03-16 - [Fix Postgres MitM vulnerability]
**Vulnerability:** PostgreSQL connection in backend/src/services/supabase.ts was missing SSL certificate validation (`ssl: { rejectUnauthorized: false }`), allowing Man-in-the-Middle (MitM) attacks.
**Learning:** TLS connection without validation ensures encryption but provides no identity verification. In node-postgres, `rejectUnauthorized: true` combined with an explicitly trusted CA provides end-to-end security.
**Prevention:** Always ensure database connections use `rejectUnauthorized: true` and configure a correct CA. Never deploy `rejectUnauthorized: false` to production, even over supposedly secure networks.
