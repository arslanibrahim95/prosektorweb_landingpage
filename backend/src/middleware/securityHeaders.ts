import { Request, Response, NextFunction } from 'express';

export function securityHeaders(req: Request, res: Response, next: NextFunction) {
  // Prevent clickjacking
  res.setHeader('X-Frame-Options', 'DENY');

  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // Strict Transport Security (HSTS)
  // Ensures HTTPS is used for the next 1 year (31536000 seconds) including subdomains
  if (process.env.NODE_ENV === 'production') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }

  // Content Security Policy (CSP)
  // Strict CSP for API: no scripts, no styles, no images, etc.
  res.setHeader("Content-Security-Policy", "default-src 'none'; frame-ancestors 'none'; upgrade-insecure-requests");

  // Referrer Policy
  // Only send origin when cross-origin, strict origin when same-origin
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Permissions Policy
  // Disable powerful features that are not needed
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');

  next();
}
