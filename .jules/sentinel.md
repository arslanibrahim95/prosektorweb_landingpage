## 2024-05-24 - Missing HTTP Security Headers
**Vulnerability:** Express application lacked standard security headers (X-Content-Type-Options, X-Frame-Options, Strict-Transport-Security), leaving it vulnerable to clickjacking and MIME-sniffing.
**Learning:** Security headers must be explicitly added as Express does not provide them by default. Using custom middleware avoids unnecessary external dependencies like `helmet` in restricted environments.
**Prevention:** Always implement a security headers middleware early in the Express application stack before defining routes.
