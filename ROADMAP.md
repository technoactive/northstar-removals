# Northstar Removals — Launch Roadmap

What remains to take the rebuilt site live and grow it. Items are ordered
by priority within each phase.

## Phase 1 — Required before launch

### 1. Quote form backend — DONE

See `docs/email-setup.md` for the full flow and deliverability notes.

- [x] Server Action (`app/actions/quote.ts`) emails enquiries via Resend from
      website@northstar-removals.com to info@northstar-removals.com, with
      Reply-To set to the customer. The website sends no customer auto-replies.
- [x] Honeypot field + time-to-complete check for spam
- [x] `/thank-you` page (noindex) and inline error states in the UI
- [x] Domain verified in Resend (EU); DKIM, SPF and DMARC (`p=reject`) in
      place — test sends pass authentication
- [ ] Set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL` in Vercel
      (see `.env.example`) and redeploy
- [ ] Add a "never send to spam" rule for website@ in the info@ mailbox

### 2. Deployment and domain cutover

- [x] Deployed to Vercel
- [x] Domain pointed at Vercel via Cloudflare DNS
- [x] Canonical domain is the root `northstar-removals.com`; Vercel redirects
      `www` → root (308), and all canonical tags, sitemap and structured data
      use the root domain to match.
- [ ] In Google Search Console, add `northstar-removals.com` as a Domain
      property (covers both www and root) and submit `/sitemap.xml`.
      Needs the client's Google account — cannot be done from the codebase.
      1. search.google.com/search-console → Add property → **Domain** →
         `northstar-removals.com`. Google gives a TXT record; add it in
         Cloudflare DNS (name `@`). Verify. (Fallback: URL-prefix property
         with the HTML-tag method — paste the token into the
         `GOOGLE_SITE_VERIFICATION` env var in Vercel and redeploy.)
      2. Sitemaps → enter `sitemap.xml` → Submit. Expect 33 URLs.
      3. URL Inspection → paste each of `/`, `/areas/pinner`,
         `/domestic-moves`, `/contact-us` → **Test live URL**. Each should
         show "URL is available to Google", with Breadcrumbs/FAQ/Service
         detected under Enhancements where present, then click
         **Request indexing**.
      4. After a few days check Pages → "Not indexed" for anything
         unexpected and Enhancements for structured-data errors.
      Structured data on those four pages was validated with
      validator.schema.org on 2026-10-06: 0 errors, 0 warnings.
- [ ] Confirm the legacy 301 redirects work in production (already
      implemented in `next.config.ts`, tested locally)
- [ ] In Cloudflare, check Security → Bots: "Block AI bots" must be OFF and
      "Managed robots.txt" OFF, otherwise AI assistants are blocked before
      they ever see our robots.txt / llms.txt.
- [ ] Re-run Lighthouse against production after deploy (local run: 100 on
      Accessibility, SEO and Agentic Browsing on /, /contact-us, service pages)
- [ ] Validate structured data at https://search.google.com/test/rich-results
      and https://validator.schema.org (Organization graph, Service,
      BreadcrumbList, FAQPage)

### 3. Legal sign-off

- [ ] Have a solicitor review the privacy policy, cookie policy and terms
      of service (retention periods and liability clauses in particular)
- [ ] Confirm the company's registered legal entity name/number for the
      footer and terms page

## Phase 2 — Getting more customers (first month)

### 4. Google Business Profile

This is the single biggest off-site lever: Alexander Removals outranks us in
the local pack on review count, not website quality.

- [ ] Ensure name, address and phone exactly match the site
- [ ] Link the profile to the new site
- [ ] Set up a process for requesting Google reviews after each move

### 5. Local area landing pages — DONE

The main competitor (alexanderremovals.co.uk) gets nearly all of its organic
traffic from ~50 thin `/areas/*-removals/` pages. We now have a `/areas` hub
plus 17 area pages driven from `lib/areas.ts`, each with unique local copy
(property types, parking suspensions, lift bookings, drive time from the
Pinner depot), Service + FAQPage + BreadcrumbList schema, genuine reviews,
nearby-area links, and links from the nav, footer and homepage.

- [x] Pinner, Harrow, Ruislip, Northwood, Stanmore, Watford, Bushey,
      Uxbridge, Hillingdon, Wembley, Ealing, Hampstead, Kensington,
      North London, West London, North West London, St Albans
- [x] Legacy 301s re-pointed (Hampstead, Belsize Park, Kensington,
      North London → their area pages)
- [x] Service pages retitled for the paying queries: "Office Removals
      London", "International Removals London", storage copy targets
      Harrow/Pinner; homepage title leads with London, Pinner & Harrow
- [x] New service pages: `/packing-service`, `/piano-removals`
- [ ] Add more areas as enquiries show demand (Edgware, Hendon, Rickmansworth,
      Borehamwood, Amersham) — add an entry to `lib/areas.ts`, nothing else
- [ ] Submit the updated sitemap in Search Console after deploy

### 6. Analytics (consent-gated)

- [ ] Add GA4 or Plausible, loaded only after cookie-banner acceptance
- [ ] Track quote-form submissions and phone-number taps as conversions
- [ ] Update the cookie policy to list the analytics cookies

## Phase 3 — Ongoing growth

### 7. Moving guides / content

- [ ] "Moving house checklist", "How to pack fragile items",
      "Moving costs explained UK" — one article per month
- [ ] Internal links from guides to the relevant service pages

### 8. Live reviews integration

- [ ] Pull genuine Google/Trustpilot reviews instead of the static ones
- [ ] Add AggregateRating structured data for star ratings in search
      (only with real, on-page reviews, per Google's guidelines)

### 9. Conversion extras

- [x] WhatsApp button (sticky mobile bar + contact page; `site.whatsapp`)
- [x] Accreditation badges above the quote form
- [ ] Custom Open Graph image (branded card with badge + fleet)
- [ ] Callback-request option ("we'll call you within the hour")

## Done so far

- Full rebuild on Next.js 16 with brand design and original photography
- 20 Years of Excellence badge on the hero
- Custom Select/DatePicker form controls, mobile-optimised pages
- SEO: metadata, Open Graph, linked JSON-LD graph (Organization/
  MovingCompany + WebSite with @id, Service per service page, BreadcrumbList,
  FAQPage), image sitemap with real lastmod, robots naming every major AI
  crawler, `/llms.txt` + `/llms-full.txt`, canonicals on the root domain
- Lighthouse 100 on Accessibility, SEO and Agentic Browsing (labelled form
  controls, role="img" ratings, AA contrast)
- 404 page, privacy/cookie/terms pages, cookie consent banner
- Breadcrumbs, related-services interlinking, homepage FAQ,
  dual quote/call CTAs, sticky mobile call bar, skip link
- Security headers (CSP, HSTS, nosniff, frame/referrer/permissions)
- 301 redirects for all legacy WordPress URLs from the old Yoast sitemap
- Image compression (hero 2.2MB → 188KB, badge 652KB → 195KB) + AVIF/WebP
