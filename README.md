# Northstar Removals

A rebuild of [northstar-removals.com](https://www.northstar-removals.com/) using Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.

## Pages

- `/` — Home (hero, services, why choose us, planning & process)
- `/domestic-moves`, `/international-moves`, `/commercial-moves`, `/storage-solutions` — Moving services
- `/white-glove-service` — Premium bespoke moving service
- `/about-us` — Company history and team
- `/reviews` — Customer reviews
- `/awards` — Industry awards
- `/contact-us` — Contact details and quote form (Domestic / International / Commercial variants)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- The quote form is front-end only; wire the submit handler in `components/QuoteForm.tsx` to an API route or email service to receive enquiries.
- Shared business details (phones, email, address, nav links) live in `lib/site.ts`.
