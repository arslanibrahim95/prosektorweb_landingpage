## 2024-05-24 - Missing Security Headers
**Vulnerability:** Missing Helmet middleware in Express app.
**Learning:** The Express backend lacked helmet middleware, leaving it vulnerable to common web vulnerabilities due to missing baseline HTTP security headers (e.g., CSP, X-Frame-Options, X-XSS-Protection).
**Prevention:** Always ensure standard security middlewares like `helmet` are added to Express applications during initial setup to provide defense-in-depth via HTTP headers.
