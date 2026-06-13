## 2024-06-13 - Manual Security Headers in Express
**Vulnerability:** Missing basic security headers like X-Content-Type-Options and X-Frame-Options leaving the app vulnerable to clickjacking and MIME-type sniffing.
**Learning:** Security headers can be added manually via custom middleware using res.setHeader without needing to introduce new dependencies like helmet.
**Prevention:** Always add a security headers middleware early in the Express application pipeline to ensure all responses are protected.