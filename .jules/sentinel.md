## 2024-06-13 - Add Manual Security Headers
**Vulnerability:** Missing standard HTTP security headers.
**Learning:** Because the use of 'helmet' was restricted due to project constraints, security headers had to be manually set.
**Prevention:** Implement custom middleware to enforce X-Content-Type-Options, X-Frame-Options, and X-XSS-Protection without adding external dependencies.
