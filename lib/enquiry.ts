/**
 * Quote-form enquiry: parsing, validation and email rendering.
 *
 * Pure functions (no I/O) so they are easy to test and keep the Server Action
 * in app/actions/quote.ts small.
 */

export type MoveType = "domestic" | "international" | "commercial";

export type Enquiry = {
  moveType: MoveType;
  name: string;
  email: string;
  phone: string;
  hearAbout: string;
  hearAboutOther?: string;
  from: AddressDetails;
  to: AddressDetails;
  movingDate?: string;
  extras: string[];
  notes?: string;
  // international
  payer?: string;
  // commercial
  companyName?: string;
  contactName?: string;
  workPhone?: string;
  employees?: string;
};

export type AddressDetails = {
  address: string;
  floor?: string;
  lift?: string;
  bedrooms?: string;
};

export type ParseResult =
  | { ok: true; enquiry: Enquiry }
  | { ok: false; error: string };

const MOVE_TYPES: MoveType[] = ["domestic", "international", "commercial"];
const MAX_FIELD = 500;
const MAX_NOTES = 4000;

function str(formData: FormData, key: string, max = MAX_FIELD): string {
  const v = formData.get(key);
  if (typeof v !== "string") return "";
  // Strip control characters (prevents header injection via newline tricks).
  return v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, max);
}

function address(formData: FormData, prefix: "from" | "to"): AddressDetails {
  return {
    address: str(formData, `${prefix}-address`),
    floor: str(formData, `${prefix}-floor`) || undefined,
    lift: str(formData, `${prefix}-lift`) || undefined,
    bedrooms: str(formData, `${prefix}-bedrooms`) || undefined,
  };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function parseEnquiry(formData: FormData): ParseResult {
  const moveType = str(formData, "move-type") as MoveType;
  if (!MOVE_TYPES.includes(moveType)) {
    return { ok: false, error: "Please choose the type of move." };
  }

  const name = str(formData, "name");
  const email = str(formData, "email");
  const phone = str(formData, "phone");
  const hearAbout = str(formData, "hear-about");
  const hearAboutOther = str(formData, "hear-about-other") || undefined;

  if (!name) return { ok: false, error: "Please enter your name." };
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!phone) return { ok: false, error: "Please enter your phone number." };
  if (!hearAbout) {
    return { ok: false, error: "Please tell us how you heard about us." };
  }
  if (hearAbout === "Other" && !hearAboutOther) {
    return { ok: false, error: 'Please tell us a little more under "Other".' };
  }

  const from = address(formData, "from");
  const to = address(formData, "to");
  if (!from.address || !to.address) {
    return {
      ok: false,
      error: "Please enter both the moving-from and moving-to addresses.",
    };
  }

  const movingDate = str(formData, "moving-date") || undefined;
  const extras = formData
    .getAll("extras")
    .filter((v): v is string => typeof v === "string")
    .map((v) => v.trim().slice(0, 100))
    .filter(Boolean);
  const notes = str(formData, "notes", MAX_NOTES) || undefined;

  const enquiry: Enquiry = {
    moveType,
    name,
    email,
    phone,
    hearAbout,
    hearAboutOther,
    from,
    to,
    movingDate,
    extras,
    notes,
  };

  if (moveType === "domestic" && !movingDate) {
    return { ok: false, error: "Please choose your moving date." };
  }

  if (moveType === "international") {
    enquiry.payer = str(formData, "payer") || undefined;
    if (!enquiry.payer) {
      return { ok: false, error: "Please tell us who is paying for the move." };
    }
  }

  if (moveType === "commercial") {
    enquiry.companyName = str(formData, "company-name") || undefined;
    enquiry.contactName = str(formData, "contact-name") || undefined;
    enquiry.workPhone = str(formData, "work-phone") || undefined;
    enquiry.employees = str(formData, "employees") || undefined;
    if (!enquiry.companyName || !enquiry.contactName || !enquiry.workPhone) {
      return { ok: false, error: "Please complete the company details." };
    }
    if (!movingDate) {
      return { ok: false, error: "Please choose your moving date." };
    }
    if (!enquiry.employees) {
      return { ok: false, error: "Please enter the number of employees." };
    }
  }

  return { ok: true, enquiry };
}

/* ────────────────────────────── Rendering ────────────────────────────── */

const MOVE_LABEL: Record<MoveType, string> = {
  domestic: "Domestic move",
  international: "International move",
  commercial: "Business, office & commercial move",
};

function formatDate(iso?: string): string {
  if (!iso) return "Not specified";
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function addressLines(a: AddressDetails): [string, string][] {
  const rows: [string, string][] = [["Address / postcode", a.address]];
  if (a.floor) rows.push(["Floor", a.floor]);
  if (a.lift) rows.push(["Lift", a.lift]);
  if (a.bedrooms) rows.push(["Bedrooms", a.bedrooms]);
  return rows;
}

type Section = { title: string; rows: [string, string][] };

function buildSections(e: Enquiry): Section[] {
  const contact: [string, string][] = [
    ["Name", e.name],
    ["Email", e.email],
    ["Phone", e.phone],
    [
      "Heard about us via",
      e.hearAbout === "Other" && e.hearAboutOther
        ? `Other — ${e.hearAboutOther}`
        : e.hearAbout,
    ],
  ];

  const move: [string, string][] = [["Type of move", MOVE_LABEL[e.moveType]]];
  if (e.moveType === "commercial") {
    move.push(
      ["Company", e.companyName ?? ""],
      ["Contact name", e.contactName ?? ""],
      ["Work phone", e.workPhone ?? ""],
      ["Employees", e.employees ?? ""],
    );
  }
  move.push(["Moving date", formatDate(e.movingDate)]);
  if (e.moveType === "international") {
    move.push(["Who is paying", e.payer ?? ""]);
  }
  move.push([
    "Also quote for",
    e.extras.length ? e.extras.join(", ") : "Nothing extra",
  ]);

  const sections: Section[] = [
    { title: "Customer", rows: contact },
    { title: "Move details", rows: move },
    { title: "Moving from", rows: addressLines(e.from) },
    { title: "Moving to", rows: addressLines(e.to) },
  ];
  if (e.notes) {
    sections.push({ title: "Additional notes", rows: [["Notes", e.notes]] });
  }
  return sections;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function enquirySubject(e: Enquiry): string {
  const who = e.moveType === "commercial" && e.companyName ? e.companyName : e.name;
  const date = e.movingDate ? ` · ${formatDate(e.movingDate)}` : "";
  return `New quote request — ${who} — ${MOVE_LABEL[e.moveType]}${date}`;
}

export function enquiryText(e: Enquiry): string {
  const lines: string[] = [
    "New quote request from northstar-removals.com",
    "",
    `Reply to this email to respond to ${e.name} directly.`,
    "",
  ];
  for (const s of buildSections(e)) {
    lines.push(s.title.toUpperCase());
    for (const [k, v] of s.rows) lines.push(`${k}: ${v}`);
    lines.push("");
  }
  lines.push(`Received ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })} (UK time)`);
  return lines.join("\n");
}

export function enquiryHtml(e: Enquiry): string {
  const sections = buildSections(e)
    .map(
      (s) => `
      <h2 style="margin:28px 0 8px;font:700 13px/1.2 Arial,Helvetica,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#5b6172;">${escapeHtml(s.title)}</h2>
      <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font:15px/1.5 Arial,Helvetica,sans-serif;color:#1e2230;">
        ${s.rows
          .map(
            ([k, v]) => `
          <tr>
            <td style="padding:8px 12px 8px 0;border-top:1px solid #e4e6ee;width:36%;color:#5b6172;vertical-align:top;">${escapeHtml(k)}</td>
            <td style="padding:8px 0;border-top:1px solid #e4e6ee;font-weight:600;vertical-align:top;white-space:pre-wrap;">${escapeHtml(v)}</td>
          </tr>`,
          )
          .join("")}
      </table>`,
    )
    .join("");

  const received = new Date().toLocaleString("en-GB", {
    timeZone: "Europe/London",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `<!doctype html>
<html lang="en">
<body style="margin:0;padding:24px;background:#f5f6fa;">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e6ee;">
    <div style="background:#171636;padding:22px 28px;">
      <p style="margin:0;font:700 11px/1.2 Arial,Helvetica,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#ff6b74;">northstar-removals.com</p>
      <h1 style="margin:8px 0 0;font:800 22px/1.2 Arial,Helvetica,sans-serif;color:#ffffff;">New quote request</h1>
      <p style="margin:8px 0 0;font:15px/1.4 Arial,Helvetica,sans-serif;color:rgba(255,255,255,.75);">${escapeHtml(MOVE_LABEL[e.moveType])} · ${escapeHtml(e.name)}</p>
    </div>
    <div style="padding:8px 28px 28px;">
      <p style="margin:16px 0 0;padding:12px 16px;background:#f5f6fa;border-radius:8px;font:14px/1.5 Arial,Helvetica,sans-serif;color:#38404f;">
        Hit <strong>Reply</strong> to respond to the customer directly — replies go to <a href="mailto:${escapeHtml(e.email)}" style="color:#d81f2a;">${escapeHtml(e.email)}</a>.
        ${e.phone ? `Or call <a href="tel:${escapeHtml(e.phone.replace(/\s+/g, ""))}" style="color:#d81f2a;">${escapeHtml(e.phone)}</a>.` : ""}
      </p>
      ${sections}
      <p style="margin:28px 0 0;font:12px/1.5 Arial,Helvetica,sans-serif;color:#8a90a2;">Received ${escapeHtml(received)} (UK time) via the quote form on northstar-removals.com.</p>
    </div>
  </div>
</body>
</html>`;
}

/* -------------------------------------------------------------------------- */
/*  Customer acknowledgement (sent from info@ after the enquiry is delivered) */
/* -------------------------------------------------------------------------- */

const PHONE_MAIN = "+44 (0)20 8868 9414";
const PHONE_FREE = "+44 (0)800 170 1188";

function firstName(name: string): string {
  return name.trim().split(/\s+/)[0] || "there";
}

/** Only the sections the customer needs to see reflected back. */
function summarySections(e: Enquiry): Section[] {
  return buildSections(e).filter((s) => s.title !== "Customer");
}

export function ackSubject(): string {
  return `We've received your enquiry — Northstar Removals`;
}

export function ackText(e: Enquiry): string {
  const lines: string[] = [
    `Hi ${firstName(e.name)},`,
    "",
    "Thank you for getting in touch with Northstar Removals. We've received your enquiry and one of our team will be in contact shortly to discuss your move and arrange your free, no-obligation quotation.",
    "",
    "WHAT HAPPENS NEXT",
    "1. We review your details.",
    "2. We call or email you to confirm the finer points, and if helpful arrange a free video or home survey.",
    "3. You receive a personalised fixed-price quotation with no hidden fees.",
    "",
    `Need to speak to someone sooner? Call us on ${PHONE_MAIN} or freephone ${PHONE_FREE}, or simply reply to this email.`,
    "",
    "A COPY OF WHAT YOU SENT US",
    "",
  ];
  for (const s of summarySections(e)) {
    lines.push(s.title.toUpperCase());
    for (const [k, v] of s.rows) lines.push(`${k}: ${v}`);
    lines.push("");
  }
  lines.push(
    "Kind regards,",
    "The Northstar Removals team",
    "For a Brilliant Move!",
    "",
    "Northstar Removals & Storage",
    "Unit 1, Leeway House, Leeway Close, Pinner HA5 4SE",
    "https://northstar-removals.com",
    "",
    "You are receiving this one-off email because you submitted the quote form on northstar-removals.com. If that wasn't you, please ignore this message or let us know by replying.",
  );
  return lines.join("\n");
}

export function ackHtml(e: Enquiry): string {
  const sections = summarySections(e)
    .map(
      (s) => `
      <h3 style="margin:22px 0 6px;font:700 12px/1.2 Arial,Helvetica,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#5b6172;">${escapeHtml(s.title)}</h3>
      <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font:14px/1.5 Arial,Helvetica,sans-serif;color:#1e2230;">
        ${s.rows
          .map(
            ([k, v]) => `
          <tr>
            <td style="padding:7px 12px 7px 0;border-top:1px solid #e4e6ee;width:38%;color:#5b6172;vertical-align:top;">${escapeHtml(k)}</td>
            <td style="padding:7px 0;border-top:1px solid #e4e6ee;font-weight:600;vertical-align:top;white-space:pre-wrap;">${escapeHtml(v)}</td>
          </tr>`,
          )
          .join("")}
      </table>`,
    )
    .join("");

  const step = (n: number, title: string, body: string) => `
    <tr>
      <td style="padding:10px 14px 10px 0;vertical-align:top;">
        <div style="width:28px;height:28px;border-radius:14px;background:#171636;color:#fff;font:800 13px/28px Arial,Helvetica,sans-serif;text-align:center;">${n}</div>
      </td>
      <td style="padding:10px 0;vertical-align:top;font:14px/1.5 Arial,Helvetica,sans-serif;color:#1e2230;">
        <strong>${title}</strong><br><span style="color:#5b6172;">${body}</span>
      </td>
    </tr>`;

  return `<!doctype html>
<html lang="en">
<body style="margin:0;padding:24px;background:#f5f6fa;">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e6ee;">
    <div style="background:#171636;padding:26px 28px;">
      <p style="margin:0;font:700 11px/1.2 Arial,Helvetica,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#ff6b74;">Northstar Removals &amp; Storage</p>
      <h1 style="margin:8px 0 0;font:800 24px/1.2 Arial,Helvetica,sans-serif;color:#ffffff;">Thank you — we've received your enquiry</h1>
    </div>
    <div style="padding:24px 28px 28px;font:15px/1.6 Arial,Helvetica,sans-serif;color:#1e2230;">
      <p style="margin:0 0 14px;">Hi ${escapeHtml(firstName(e.name))},</p>
      <p style="margin:0 0 14px;">Thank you for getting in touch with Northstar Removals. One of our team will be in contact shortly to discuss your move and arrange your <strong>free, no-obligation quotation</strong>.</p>

      <h2 style="margin:26px 0 4px;font:800 16px/1.3 Arial,Helvetica,sans-serif;color:#171636;">What happens next</h2>
      <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${step(1, "We review your details", "Usually the same working day.")}
        ${step(2, "We get in touch", "To confirm the finer points and, if helpful, arrange a free video or home survey.")}
        ${step(3, "You receive your quotation", "A personalised fixed price with no hidden fees.")}
      </table>

      <p style="margin:22px 0 0;padding:14px 16px;background:#f5f6fa;border-radius:8px;font-size:14px;color:#38404f;">
        Need to speak to someone sooner? Call <a href="tel:+442088689414" style="color:#d81f2a;font-weight:700;text-decoration:none;">${PHONE_MAIN}</a>
        or freephone <a href="tel:+448001701188" style="color:#d81f2a;font-weight:700;text-decoration:none;">${PHONE_FREE}</a>, or simply reply to this email.
      </p>

      <h2 style="margin:30px 0 0;font:800 16px/1.3 Arial,Helvetica,sans-serif;color:#171636;">A copy of what you sent us</h2>
      ${sections}

      <p style="margin:30px 0 0;">Kind regards,<br><strong>The Northstar Removals team</strong><br><em style="color:#d81f2a;">For a Brilliant Move!</em></p>
    </div>
    <div style="padding:18px 28px;background:#f5f6fa;border-top:1px solid #e4e6ee;font:12px/1.6 Arial,Helvetica,sans-serif;color:#8a90a2;">
      Northstar Removals &amp; Storage · Unit 1, Leeway House, Leeway Close, Pinner HA5 4SE ·
      <a href="https://northstar-removals.com" style="color:#8a90a2;">northstar-removals.com</a><br>
      You are receiving this one-off email because you submitted the quote form on our website. If that wasn't you, please ignore it or let us know by replying.
    </div>
  </div>
</body>
</html>`;
}
