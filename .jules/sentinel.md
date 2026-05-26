## 2024-05-26 - Enforcing HTTPS with Legacy TLS Support
**Vulnerability:** Unencrypted transmission of credentials and PII via Oztek SMS HTTP API.
**Learning:** The system downgraded to HTTP because the external API required legacy TLS support (unsafe legacy renegotiation) which fails under modern OpenSSL defaults (OpenSSL 3.0+), causing developers to use unencrypted HTTP to bypass the issue.
**Prevention:** Use Node's native `https.request` with `secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT` to maintain encryption while communicating with legacy APIs, rather than downgrading to HTTP.
