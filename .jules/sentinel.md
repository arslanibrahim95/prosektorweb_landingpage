## 2024-05-29 - Legacy TLS Connections Forced Unencrypted HTTP
**Vulnerability:** External SMS API credentials and PII were being transmitted over unencrypted HTTP because the external server used a legacy TLS configuration that failed under modern Node.js OpenSSL 3.0+ defaults.
**Learning:** Developers may silently downgrade connections to HTTP to bypass "unsafe legacy renegotiation" TLS errors. The correct fix is to explicitly configure `secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT` in `https.request`.
**Prevention:** Never downgrade to HTTP to bypass TLS errors. Always use the native `https` module with explicit `crypto.constants` overrides to support legacy integrations securely while maintaining encryption.
