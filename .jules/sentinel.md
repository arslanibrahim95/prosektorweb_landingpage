## 2025-03-21 - [CRITICAL] Fix MitM Vulnerability by Enforcing TLS Certificate Validation
**Vulnerability:** The PostgreSQL database connection in `backend/src/services/supabase.ts` was configured with `ssl: { rejectUnauthorized: false }`, allowing potential Man-in-the-Middle (MitM) attacks.
**Learning:** The fallback logic directly configured pg without validating the server certificate, making connections susceptible to interception, likely a byproduct of allowing local or loosely configured databases.
**Prevention:** Always enforce TLS verification (`rejectUnauthorized: true`) in database drivers. Support custom CA certificates (e.g., via a `DB_SSL_CA` variable) to securely accommodate environments using self-signed or internal certificates without disabling security.
