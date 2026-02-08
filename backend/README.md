# Prosektorweb Backend (Landing)

Landing page formlarini (onizleme talebi + iletisim) Supabase'e kaydeder ve her yeni kayit icin Oztek SMS API ile ekibe SMS bildirimi gonderir.

## Gereksinimler
- Node.js
- Supabase (Postgres)
- Oztek SMS (bildirim icin)

## Oztek Ayarlari (Panel)
- Panelde "api ile sms gonderme" ayarini **Evet** yapin.
- (Opsiyonel) Guvenlik icin gonderim yapacak sunucunun IP adresini panelde whitelist edin.
- `OZTEK_ORIGIN` degeri hesabinizda tanimli/onayli originator olmalidir.

## Kurulum
1. Paketleri yukleyin:
   - `npm install`
2. Ortam degiskenlerini ayarlayin:
   - `.env` olusturup `.env.example` dosyasini baz alin
3. Calistirin:
   - Dev: `npm run dev`
   - Build: `npm run build`
   - Prod: `npm start`

## Endpointler
- `GET /api/status` -> `{ "status": "ok" }`
- `POST /api/public/leads`
- `POST /api/public/contact`

Supabase tablo/kolonlari icin `supabase_schema.sql` dosyasina bakabilirsiniz.
