import { Request, Response, NextFunction } from 'express';

export function securityHeaders(req: Request, res: Response, next: NextFunction) {
  // Prevent the browser from sniffing the content type
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // Prevent clickjacking by not allowing the site to be embedded in a frame
  res.setHeader('X-Frame-Options', 'DENY');

  // HTTP Strict Transport Security (HSTS) - enforce HTTPS
  // max-age=63072000 corresponds to 2 years
  res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

  // Content Security Policy (CSP)
  // This is a strict CSP suitable for an API-only backend.
  // It disallows all sources by default ('none'), except for 'self' in some contexts if needed.
  // Since this is an API, we can be very restrictive.
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'none'; frame-ancestors 'none'; upgrade-insecure-requests; block-all-mixed-content"
  );

  // Referrer Policy - control how much referrer information is sent
  res.setHeader('Referrer-Policy', 'no-referrer');

  // Permissions Policy - disable sensitive features
  res.setHeader(
    'Permissions-Policy',
    'geolocation=(), microphone=(), camera=(), payment=(), usb=(), vr=()'
  );

  next();
}
