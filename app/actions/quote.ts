"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";
import {
  enquiryHtml,
  enquirySubject,
  enquiryText,
  parseEnquiry,
} from "@/lib/enquiry";

export type QuoteFormState = { error?: string };

/** Submissions faster than this are almost certainly bots. */
const MIN_FILL_TIME_MS = 3_000;

const FROM = process.env.CONTACT_FROM_EMAIL ?? "Northstar Website <website@northstar-removals.com>";
const TO = process.env.CONTACT_TO_EMAIL ?? "info@northstar-removals.com";

/**
 * Handles the quote form. The ONLY email the website sends is this enquiry
 * notification to the Northstar team — customers never receive automated mail
 * from the website (any auto-reply is handled by the info@ mailbox itself).
 */
export async function submitQuote(
  _prev: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  // ── Spam checks ───────────────────────────────────────────────────────
  // Honeypot: real users never see or fill this field. Timing: humans take
  // more than a few seconds. Bots that trip either check are sent to the
  // thank-you page so they can't tell they were filtered.
  const honeypot = formData.get("company_website");
  const started = Number(formData.get("form_started"));
  const tooFast =
    Number.isFinite(started) && started > 0 && Date.now() - started < MIN_FILL_TIME_MS;

  if (honeypot || tooFast) {
    redirect("/thank-you");
  }

  // ── Validation ────────────────────────────────────────────────────────
  const parsed = parseEnquiry(formData);
  if (!parsed.ok) {
    return { error: parsed.error };
  }
  const enquiry = parsed.enquiry;

  // ── Send ──────────────────────────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[quote] RESEND_API_KEY is not set");
    return {
      error:
        "Sorry, we couldn't send your enquiry right now. Please call us or email info@northstar-removals.com.",
    };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: `${enquiry.name} <${enquiry.email}>`,
    subject: enquirySubject(enquiry),
    text: enquiryText(enquiry),
    html: enquiryHtml(enquiry),
    headers: {
      // Transactional one-to-one mail: tell receivers this is not bulk.
      "X-Entity-Ref-ID": `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
    },
    tags: [{ name: "type", value: `quote-${enquiry.moveType}` }],
  });

  if (error) {
    console.error("[quote] Resend error:", error);
    return {
      error:
        "Sorry, something went wrong sending your enquiry. Please try again, or call us on +44 (0)20 8868 9414.",
    };
  }

  // redirect() throws, so it must live outside any try/catch.
  redirect("/thank-you");
}
