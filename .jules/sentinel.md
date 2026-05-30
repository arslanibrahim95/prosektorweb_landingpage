## 2024-05-30 - Legacy TLS API Security Risk
**Vulnerability:** Unencrypted transmission of sensitive credentials (username/password) to a 3rd-party SMS API because the API was downgraded to HTTP due to modern OpenSSL defaults failing TLS handshakes.
**Learning:** Using `fetch` for APIs that only support unsafe legacy renegotiation causes developers to mistakenly fallback to HTTP. Node's native `https.request` with `crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT` enables secure communication with these older systems.
**Prevention:** Always use Node's native `https` module with explicit legacy secureOptions instead of downgrading to plaintext HTTP when integrating with legacy third-party APIs that fail modern TLS handshakes.
