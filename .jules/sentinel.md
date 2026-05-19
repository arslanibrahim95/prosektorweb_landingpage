## 2025-02-18 - Unencrypted Sensitive Data Transmission in SMS Service
**Vulnerability:** External SMS service credentials were being sent in plaintext over HTTP because the third-party provider's legacy TLS setup failed with modern OpenSSL defaults.
**Learning:** Developers intentionally downgraded to HTTP to bypass TLS connection errors (`unsafe legacy renegotiation` errors) without realizing that Node's `https` module can explicitly enable legacy compatibility via `secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT`.
**Prevention:** Never downgrade to plaintext HTTP for authentication endpoints. Instead, address the specific TLS compatibility issue at the client configuration level using native modules if `fetch` is too restrictive.
