import { z } from 'zod';

export const leadSchema = z.object({
  company: z.string().trim().min(1).max(200),
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().min(5).max(40),
  consent: z.literal(true),
  pageUrl: z.string().trim().url().optional(),
});

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  phone: z.string().trim().min(5).max(40),
  email: z.string().trim().email().max(320),
  message: z.string().trim().min(1).max(5000),
  kvkk: z.literal(true),
  pageUrl: z.string().trim().url().optional(),
});

export const verifyCodeSchema = z.object({
  code: z.string().trim().min(1).max(50),
});
