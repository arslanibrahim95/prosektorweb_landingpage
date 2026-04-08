## 2024-05-31 - [Manual Security Headers]
**Vulnerability:** Missing standard HTTP security headers (e.g., `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`) in the Express backend.
**Learning:** External dependencies like `helmet` are restricted in this repository; therefore, security headers must be implemented manually via custom middleware.
**Prevention:** Always implement standard security headers manually when configuring an Express application in this project.
