# Sentinel Security Journal

This file tracks critical security learnings and vulnerability patterns discovered in this codebase.

## 2024-05-22 - [Missing Security Headers]
**Vulnerability:** The application was missing standard security headers like HSTS, X-Frame-Options, and Content-Security-Policy.
**Learning:** Express.js does not include these headers by default. Relying on default settings leaves the application vulnerable to clickjacking, MIME sniffing, and other common attacks.
**Prevention:** Explicitly add middleware to set these headers. Using a library like `helmet` is common, but manual implementation avoids dependencies for simple needs.
