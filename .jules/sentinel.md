# Sentinel's Journal

## 2025-02-23 - Backend Security Headers
**Vulnerability:** Missing critical security headers (HSTS, CSP, X-Frame-Options) in the Express backend.
**Learning:** Express.js does not set these by default. While `helmet` is the standard solution, manually implementing them via middleware provided a lightweight, dependency-free fix that aligns with the project's minimalist approach.
**Prevention:** Always include a security headers middleware in the initial `app.ts` setup for any new service.
