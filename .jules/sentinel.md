## 2025-03-25 - Missing Security Headers
**Vulnerability:** The Express application lacked security headers, leaving it vulnerable to common attacks such as XSS, clickjacking, and MIME-type sniffing.
**Learning:** Security headers are not enabled by default in Express and require a dedicated middleware like `helmet` to establish a defense-in-depth posture.
**Prevention:** Always use `helmet` or a similar tool in new Express applications to enforce standard security headers like `X-DNS-Prefetch-Control`, `X-Frame-Options`, `Strict-Transport-Security`, `X-Download-Options`, `X-Content-Type-Options`, `X-XSS-Protection` out of the box.
