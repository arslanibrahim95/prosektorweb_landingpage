## 2024-05-24 - [Add Helmet to Express App]
**Vulnerability:** Missing basic security headers (CSP, X-Frame-Options, X-XSS-Protection, etc.) on the Express backend.
**Learning:** By default, Express does not include security headers, leaving applications vulnerable to basic attacks like cross-site scripting (XSS), clickjacking, and MIME sniffing.
**Prevention:** Always use `helmet` or manually configure security headers in Express applications to establish a baseline defense in depth.
