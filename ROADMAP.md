# Northstar Removals — Launch Roadmap

What remains to take the rebuilt site live and grow it. Items are ordered
by priority within each phase.

## Phase 1 — Required before launch

### 1. Quote form backend (critical)

The quote form is currently front-end only; submissions go nowhere.

- [ ] Server action that emails enquiries to info@northstar-removals.com
      (Resend, or the company's existing SMTP)
- [ ] Honeypot field + basic rate limiting for spam
- [ ] Success ("thank you") and error states in the UI
- [ ] SPF/DKIM records for the sending domain so emails reach the inbox

### 2. Deployment and domain cutover

- [ ] Deploy to hosting (Vercel recommended for Next.js)
- [ ] Point www.northstar-removals.com at the new site
- [ ] Confirm the legacy 301 redirects work in production (already
      implemented in `next.config.ts`, tested locally)
- [ ] Verify domain in Google Search Console, submit `/sitemap.xml`
- [ ] Re-run Lighthouse against production (target: 90+ on all categories)

### 3. Legal sign-off

- [ ] Have a solicitor review the privacy policy, cookie policy and terms
      of service (retention periods and liability clauses in particular)
- [ ] Confirm the company's registered legal entity name/number for the
      footer and terms page

## Phase 2 — Getting more customers (first month)

### 4. Google Business Profile

- [ ] Ensure name, address and phone exactly match the site
- [ ] Link the profile to the new site
- [ ] Set up a process for requesting Google reviews after each move

### 5. Local area landing pages

The old site had 9 area pages (Holborn, Victoria, Kensington, Hampstead,
Belsize Park, North London…) that currently 301 to generic service pages.
Rebuild them properly to recapture that traffic:

- [ ] Template: area-specific hero, unique copy, testimonials from that
      area, map, FAQ, quote CTA
- [ ] Start with the areas closest to Pinner (Harrow, Ruislip, Watford,
      North West London) plus the old URLs' areas
- [ ] Update the 301s to point at the rebuilt pages once live

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

- [ ] WhatsApp button (customers like sending photos for quick quotes)
- [ ] Custom Open Graph image (branded card with badge + fleet)
- [ ] Callback-request option ("we'll call you within the hour")

## Done so far

- Full rebuild on Next.js 16 with brand design and original photography
- 20 Years of Excellence badge on the hero
- Custom Select/DatePicker form controls, mobile-optimised pages
- SEO: metadata, Open Graph, JSON-LD (MovingCompany, BreadcrumbList,
  FAQPage), sitemap, robots (open to all crawlers incl. AI), canonicals
- 404 page, privacy/cookie/terms pages, cookie consent banner
- Breadcrumbs, related-services interlinking, homepage FAQ,
  dual quote/call CTAs, sticky mobile call bar, skip link
- Security headers (CSP, HSTS, nosniff, frame/referrer/permissions)
- 301 redirects for all legacy WordPress URLs from the old Yoast sitemap
- Image compression (hero 2.2MB → 188KB, badge 652KB → 195KB) + AVIF/WebP
