## 2025-03-05 - Enforce SSL Certificate Validation in PostgreSQL
**Vulnerability:** The PostgreSQL client connection string in `backend/src/services/supabase.ts` and `backend/scripts/applySchema.ts` was set to `ssl: { rejectUnauthorized: false }`. This disabled SSL certificate validation.
**Learning:** Disabling certificate validation allows for Man-in-the-Middle (MitM) attacks where an attacker can intercept and modify data passing between the application and the database.
**Prevention:** Always use `ssl: { rejectUnauthorized: true }` in production database connection configurations to ensure the database's SSL certificate is strictly verified against standard certificate authorities.
