"use server";

import { Resend } from "resend";
import {
  ackHtml,
  ackSubject,
  ackText,
  enquiryHtml,
  enquirySubject,
  enquiryText,
  parseEnquiry,
} from "@/lib/enquiry";

export type QuoteFormState = { ok?: boolean; error?: string };

/** Submissions completed faster than this are almost certainly bots. */
const MIN_FILL_TIME_MS = 3_000;

/** Sender for the internal enquiry notification. */
const FROM =
  process.env.CONTACT_FROM_EMAIL ??
  "Northstar Website <website@northstar-removals.com>";
/** Where enquiries are delivered. */
const TO = process.env.CONTACT_TO_EMAIL ?? "info@northstar-removals.com";
/**
 * Sender for the customer acknowledgement. Sent from info@ so that when the
 * customer hits Reply it lands in the same mailbox that holds their enquiry.
 */
const ACK_FROM =
  process.env.CONTACT_ACK_FROM_EMAIL ??
  "Northstar Removals <info@northstar-removals.com>";

const GENERIC_ERROR =
  "Sorry, something went wrong sending your enquiry. Please try again, or call us on +44 (0)20 8868 9414.";

export async function submitQuote(
  _prev: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  // Anti-spam: honeypot filled or form completed implausibly fast.
  // Pretend success so bots learn nothing.
  const honeypot = formData.get("company_website");
  const started = Number(formData.get("form_started"));
  const tooFast =
    Number.isFinite(started) &&
    started > 0 &&
    Date.now() - started < MIN_FILL_TIME_MS;
  if (honeypot || tooFast) return { ok: true };

  const parsed = parseEnquiry(formData);
  if (!parsed.ok) return { error: parsed.error };
  const enquiry = parsed.enquiry;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[quote] RESEND_API_KEY is not set");
    return {
      error:
        "Sorry, we couldn't send your enquiry right now. Please call us or email info@northstar-removals.com.",
    };
  }

  const resend = new Resend(apiKey);
  const ref = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

  // 1. The enquiry itself, to the office. This is the one that must succeed.
  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: `${enquiry.name} <${enquiry.email}>`,
    subject: enquirySubject(enquiry),
    text: enquiryText(enquiry),
    html: enquiryHtml(enquiry),
    headers: { "X-Entity-Ref-ID": ref },
    tags: [{ name: "type", value: `quote-${enquiry.moveType}` }],
  });

  if (error) {
    console.error("[quote] Resend error:", error);
    return { error: GENERIC_ERROR };
  }

  // 2. Acknowledgement to the customer, from info@. Best effort: a failure
  //    here must never make a successfully delivered enquiry look like it
  //    failed, so we only log it.
  const ack = await resend.emails.send({
    from: ACK_FROM,
    to: [`${enquiry.name} <${enquiry.email}>`],
    replyTo: "Northstar Removals <info@northstar-removals.com>",
    subject: ackSubject(),
    text: ackText(enquiry),
    html: ackHtml(enquiry),
    headers: {
      "X-Entity-Ref-ID": `${ref}-ack`,
      // Transactional one-off; tells mailbox providers not to auto-reply.
      "Auto-Submitted": "auto-replied",
      "X-Auto-Response-Suppress": "All",
    },
    tags: [{ name: "type", value: "quote-ack" }],
  });
  if (ack.error) console.error("[quote] Ack email error:", ack.error);

  return { ok: true };
}
