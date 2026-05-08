## 2025-02-28 - TLS Compatibility leading to insecure HTTP fallback
**Vulnerability:** Falling back to unencrypted HTTP for external SMS API due to modern TLS connection errors.
**Learning:** Using `crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT` in Node's HTTPS module allows secure connections to legacy endpoints without resorting to plaintext HTTP.
**Prevention:** Ensure explicit HTTPS connection to legacy endpoints using native `https` with legacy options, preventing credentials leakage over the wire.
