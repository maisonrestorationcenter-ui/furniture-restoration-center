# Furniture Restoration Center

Next.js 14, TypeScript, Tailwind. Only the Home page is built; the other seven approved routes are pending.

## Setup
`cp .env.example .env.local`, set `NEXT_PUBLIC_SITE_URL`, then `npm install` and `npm run dev`.
Commands: `npm run lint`, `npm run typecheck`, `npm run build`, `npm start`.
Production builds fail if `NEXT_PUBLIC_SITE_URL` is missing or contains example.com.

## Replacing assets
Drop files into `public/images` using the filenames in `lib/content.ts` (e.g. `hero-trust.jpg`, `sofa-restoration-before.jpg`/`-after.jpg`). They are picked up automatically; until then neutral blocks show.
Edit `alt` text in `lib/content.ts`. Replace the wordmark in `components/Logo.tsx` with the approved logo.

## Client data (empty = hidden)
`lib/content.ts`: `reviews`, `brands`. `lib/site.ts`: `googleReviewsUrl`, `ogImageFile`, `socialLinks`, `legalLinks`.
Placeholder reviews/brands appear only in development unless `NEXT_PUBLIC_SHOW_PLACEHOLDERS=true`.
