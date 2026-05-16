## 2026-05-16 - Legacy TLS Provider Unencrypted Fallback
**Vulnerability:** HTTP used to transmit credentials due to HTTPS failing under modern OpenSSL defaults.
**Learning:** External APIs requiring legacy TLS can tempt developers to downgrade to plaintext HTTP.
**Prevention:** Enforce HTTPS and use `crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT` in Node.js native HTTPS request instead of dropping encryption.
