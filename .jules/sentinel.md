## 2025-02-14 - PostgreSQL Connection Pool Missing SSL Validation
**Vulnerability:** The backend PostgreSQL connection pool in `backend/src/services/supabase.ts` was configured with `ssl: { rejectUnauthorized: false }`, completely disabling SSL certificate validation.
**Learning:** This existed because local development setups often use self-signed certificates or don't support strict SSL validation, making it convenient to disable it globally rather than configure it per environment.
**Prevention:** Always enforce strict SSL certificate validation (`rejectUnauthorized: process.env.NODE_ENV === 'production'`) in production environments for database connections to prevent Man-in-the-Middle (MitM) attacks.
