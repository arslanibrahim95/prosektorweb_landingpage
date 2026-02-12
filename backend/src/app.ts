import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import { ZodError } from 'zod';

import statusRouter from './routes/status';
import publicRouter from './routes/public';

dotenv.config();

function parseEnvList(value: string | undefined): string[] {
  if (!value) return [];
  return value
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean);
}

const allowedOrigins = parseEnvList(process.env.CORS_ORIGINS);
const isProd = process.env.NODE_ENV === 'production';

export const app = express();

app.use(helmet());
app.set('trust proxy', 1);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow non-browser clients (curl/postman) and same-origin scenarios without Origin.
      if (!origin) return callback(null, true);

      // In development, allow all origins unless explicitly restricted.
      if (!isProd && allowedOrigins.length === 0) return callback(null, true);

      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
);

app.use(express.json({ limit: '256kb' }));

app.use('/api', statusRouter);
app.use('/api/public', publicRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'not_found' });
});

app.use((err: unknown, req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: 'invalid_request',
      details: err.flatten(),
    });
  }

  const message = err instanceof Error ? err.message : 'Internal error';
  if (message === 'Not allowed by CORS') {
    return res.status(403).json({ error: 'cors_forbidden' });
  }

  console.error(err);
  return res.status(500).json({ error: 'internal_error' });
});
