# Email setup & deliverability

How quote-form enquiries travel, and the DNS/mailbox steps that keep them (and
Northstar's own replies) out of spam folders.

## How it works

```
Customer fills quote form
        │
        ▼
Server Action (app/actions/quote.ts)
  · honeypot + timing spam filter
  · validation (lib/enquiry.ts)
        │
        ▼
Resend API ──► From:     Northstar Website <website@northstar-removals.com>
               To:       info@northstar-removals.com
               Reply-To: the customer
        │
        ▼
Customer lands on /thank-you
```

**The website sends exactly one email per enquiry — to `info@`.** It never
emails the customer. Any acknowledgement or auto-reply to the customer is sent
from the `info@` mailbox itself, so it comes from a real, monitored address.

Pressing **Reply** on an enquiry in the `info@` inbox writes to the customer
(Reply-To), not to `website@`.

## 1. Verify the domain in Resend (one-time, ~10 minutes)

1. Resend → **Domains** → **Add domain** → `northstar-removals.com`.
   Choose the **EU (Ireland)** region — the client and their customers are in
   the UK, and it keeps data in Europe.
2. Resend shows three DNS records. Add them in **Cloudflare → DNS** for
   `northstar-removals.com`, with the orange cloud **off (DNS only)**:

   | Type | Name                 | Value (copy from Resend)                      | Purpose |
   | ---- | -------------------- | --------------------------------------------- | ------- |
   | MX   | `send`               | `feedback-smtp.eu-west-1.amazonses.com` (10)  | Bounce handling |
   | TXT  | `send`               | `v=spf1 include:amazonses.com ~all`           | SPF for the sending subdomain |
   | TXT  | `resend._domainkey`  | `p=MIGf…` (long key)                           | DKIM signature |

3. Back in Resend click **Verify**. Status should turn green within minutes
   (DNS can occasionally take up to an hour).

Because Resend signs with DKIM `d=northstar-removals.com` and uses its own
`send.` subdomain for SPF, it does **not** interfere with the existing SPF
record the client's mailbox provider uses on the root domain.

## 2. Add a DMARC record (strongly recommended)

Gmail and Microsoft now expect a DMARC policy from business senders. In
Cloudflare add:

| Type | Name     | Value |
| ---- | -------- | ----- |
| TXT  | `_dmarc` | `v=DMARC1; p=none; rua=mailto:northstar-removals@proton.me; fo=1` |

Start with `p=none` (monitor only). After 2–4 weeks of clean reports, tighten
to `p=quarantine`. `rua` reports arrive at the Proton address weekly.

> If a `_dmarc` record already exists, don't add a second one — edit the
> existing record instead.

## 3. Environment variables

Set in **Vercel → Project → Settings → Environment Variables** (Production and
Preview), matching `.env.example`:

| Variable             | Value |
| -------------------- | ----- |
| `RESEND_API_KEY`     | from the credentials folder |
| `CONTACT_FROM_EMAIL` | `Northstar Website <website@northstar-removals.com>` |
| `CONTACT_TO_EMAIL`   | `info@northstar-removals.com` |

Redeploy after adding them.

## 4. Make sure `info@` keeps enquiries out of spam

The enquiry arrives at the client's own mailbox. Three things on their side:

1. **Safe-sender rule** — in the `info@` mailbox, add a filter: *from
   `website@northstar-removals.com` → never send to spam, apply label/folder
   "Website enquiries"*. This guarantees delivery regardless of filters.
2. **Their own domain authentication** — the client's mail provider (Google
   Workspace / Microsoft 365 / other) should already have SPF and DKIM set for
   `northstar-removals.com`. If their replies to customers ever land in spam,
   that is the first thing to check. The DMARC record in step 2 covers both the
   website's mail and theirs.
3. **Auto-reply caveat** — a mailbox-level auto-responder (Gmail "Vacation
   responder", Outlook "Automatic replies") replies to the *From* address,
   which is `website@`, **not** to the customer. To acknowledge customers
   automatically from `info@`, use a *rule* that replies to the Reply-To
   address, or have the team send a short personal reply (which converts far
   better anyway). If a true automated confirmation is wanted later, the
   website can send it from `info@` via Resend — currently disabled by design.

## 5. Test before launch

1. Submit the form on the preview deployment with a real email address.
2. Confirm the enquiry arrives at `info@` with the green **DKIM/SPF pass**
   indicators (Gmail: *Show original*; Outlook: *View message source* — look
   for `dkim=pass` and `spf=pass`).
3. Paste the message into <https://www.mail-tester.com> for a score — aim for
   9/10 or higher.
4. Check Resend → **Logs** shows `delivered`.

## Spam protection on the form

- **Honeypot** field `company_website` — hidden from humans, filled by bots.
- **Timing check** — submissions under 3 seconds after page load are rejected.
- Bots that trip either check are silently redirected to `/thank-you` so they
  cannot detect the filter.
- Field lengths are capped and control characters stripped (prevents header
  injection).

If spam ever becomes a problem, the next step is Cloudflare Turnstile (free,
invisible CAPTCHA) — a small addition to the form and Server Action.
