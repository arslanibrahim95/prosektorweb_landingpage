## 2024-05-28 - Unencrypted External API Communication
**Vulnerability:** Sending PII (names, phone numbers) to an external SMS API over plain HTTP.
**Learning:** The fallback to HTTP was due to modern Node/OpenSSL 3.0+ rejecting the external API's legacy TLS renegotiation. Security was compromised for availability.
**Prevention:** Always use HTTPS. For APIs requiring older TLS protocols, explicitly pass `secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT` to Node's native `https.request` instead of downgrading the entire connection to HTTP.
