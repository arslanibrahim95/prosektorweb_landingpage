# Prosektorweb Landing Page (Full-Stack)

Bu repo iki servisten olusur:
- `frontend/`: Vite + React landing page
- `backend/`: Express + TypeScript API (form kaydi + SMS bildirim)

## Gereksinimler
- Node.js
- Supabase (Postgres)
- Oztek SMS (ekip bildirimi icin)

## Supabase
Supabase SQL Editor'da su dosyayi calistirin:
- `backend/supabase_schema.sql`

## Backend
1. `backend/.env` olusturun ve `backend/.env.example` dosyasini doldurun.
2. Calistirin:
```bash
cd backend
npm install
npm run dev
```

SMS bildirimi icin Oztek env'leri:
- `OZTEK_USER_ID`, `OZTEK_USERNAME`, `OZTEK_PASSWORD`, `OZTEK_ORIGIN`
- `OZTEK_NOTIFY_TO` (virgulle ayrilmis ekip GSM numaralari; 10 haneli, ornek: `5551234567`)

Health:
- `GET http://localhost:3000/api/status`

## Frontend
Dev icin API base URL:
- `frontend/.env.local` icinde `VITE_API_BASE_URL=http://localhost:3000`

Calistirin:
```bash
cd frontend
npm install
npm run dev
```

## Endpointler
- `POST /api/public/leads` (onizleme talebi)
- `POST /api/public/contact` (iletisim mesaji)

Not: SMS bildirimi basarisiz olursa kayit Supabase'e yine yazilir; ilgili satirda `notify_status='failed'` ve `notify_error` doldurulur.
