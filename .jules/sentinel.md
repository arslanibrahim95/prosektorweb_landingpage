## 2025-05-25 - Legacy TLS Unencrypted Request Vulnerability
**Vulnerability:** Sending SMS credentials and message content over unencrypted HTTP to `ozteksms.com` because their legacy TLS configuration fails with modern Node.js/OpenSSL defaults.
**Learning:** Legacy external APIs with outdated TLS might prompt developers to fall back to HTTP instead of fixing the TLS connection. Node.js `https.request` with `crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT` can safely re-enable these connections while maintaining transport encryption.
**Prevention:** Never downgrade to HTTP for sensitive payloads (credentials, PII). Use Node's native `https` module to apply `secureOptions` for legacy servers when `fetch` does not support custom TLS options.
