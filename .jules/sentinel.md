## 2024-05-18 - Fix Postgres MitM Vulnerability
**Vulnerability:** In `backend/src/services/supabase.ts`, `pg.Pool` SSL settings were configured with `rejectUnauthorized: false`, which disables server certificate validation and allows man-in-the-middle attacks.
**Learning:** External databases like Supabase postgres require properly configured TLS cert validation. Disabling it is unsafe, especially for production environments handling sensitive user contact information.
**Prevention:** Always set `rejectUnauthorized: true` for remote DB connections in production. Make sure to dynamically load and configure CA certificates via environment variables properly if they are needed.
