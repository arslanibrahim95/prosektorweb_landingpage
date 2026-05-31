## 2024-05-31 - Enforce Secure HTTPS Connection for SMS Provider
**Vulnerability:** External SMS API integration for user notifications was defaulting to plaintext HTTP due to legacy TLS issues on the provider's end, exposing PII in transit.
**Learning:** Native `https.request` can be configured with `crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT` to support secure connections with older servers, avoiding the need to downgrade to plaintext HTTP.
**Prevention:** Always default to HTTPS for external integrations, and use specific TLS downgrade configurations only when necessary, avoiding plaintext HTTP fallbacks entirely.
