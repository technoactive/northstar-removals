"use client";

import {
  cloneElement,
  useActionState,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import Select from "@/components/Select";
import DatePicker from "@/components/DatePicker";
import { submitQuote, type QuoteFormState } from "@/app/actions/quote";
import type { MoveType } from "@/lib/enquiry";

/* ───────────────────────────── Styling ───────────────────────────── */

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-base text-navy-950 placeholder:text-slate-400 transition focus:outline-none focus:ring-2 sm:text-sm";
const inputOk =
  "border-navy-900/15 focus:border-navy-700 focus:ring-navy-700/25";
const inputBad = "border-red-500 focus:border-red-600 focus:ring-red-500/25";
const labelClass = "mb-1.5 block text-sm font-semibold text-navy-950";

/* ───────────────────────────── Options ───────────────────────────── */

const moveTypes: {
  value: MoveType;
  label: string;
  hint: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "domestic",
    label: "Home move",
    hint: "Houses & flats, UK-wide",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M3 10.5L12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9.5 21v-6h5v6" />
      </svg>
    ),
  },
  {
    value: "international",
    label: "International",
    hint: "Europe & worldwide",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
      </svg>
    ),
  },
  {
    value: "commercial",
    label: "Office & business",
    hint: "Workplaces & commercial",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M4 21V5a2 2 0 012-2h8a2 2 0 012 2v16" />
        <path d="M16 9h3a1 1 0 011 1v11" />
        <path d="M2 21h20" />
        <path d="M8 7h2M8 11h2M8 15h2M12.5 7h1M12.5 11h1M12.5 15h1" />
      </svg>
    ),
  },
];

const bedroomOptions = ["Studio", "1", "2", "3", "4", "5+"];
const floorOptions = ["Ground", "1st", "2nd", "3rd", "4th+"];
const payerOptions = ["Myself", "My employer or a company", "Someone else"];
const hearAboutOptions = [
  "Google search",
  "Google Maps",
  "Recommendation",
  "Previous customer",
  "Saw one of our vehicles",
  "Social media",
  "AI assistant (ChatGPT etc.)",
  "Another website",
  "Other",
];

/* ───────────────────────────── Validation ───────────────────────────── */

type Errors = Record<string, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(fd: FormData, moveType: MoveType): Errors {
  const errors: Errors = {};
  const get = (k: string) => String(fd.get(k) ?? "").trim();

  if (!get("from-address")) errors["from-address"] = "Enter the address or postcode you are moving from.";
  if (!get("to-address")) errors["to-address"] = "Enter the address or postcode you are moving to.";

  if (moveType !== "international" && !get("moving-date")) {
    errors["moving-date"] = "Choose your moving date — an approximate date is fine.";
  }
  if (moveType === "international" && !get("payer")) {
    errors["payer"] = "Tell us who is paying for the move.";
  }
  if (moveType === "commercial") {
    if (!get("company-name")) errors["company-name"] = "Enter your company name.";
    if (!get("employees")) errors["employees"] = "Enter the number of employees moving.";
  }

  if (!get("name")) errors["name"] = "Enter your name.";
  if (!EMAIL_RE.test(get("email"))) errors["email"] = "Enter a valid email address, e.g. name@example.com.";
  const digits = get("phone").replace(/\D/g, "");
  if (digits.length < 10) errors["phone"] = "Enter a phone number we can reach you on.";

  if (!get("hear-about")) errors["hear-about"] = "Choose how you heard about us.";
  if (get("hear-about") === "Other" && !get("hear-about-other")) {
    errors["hear-about-other"] = "Tell us a little more.";
  }
  return errors;
}

/* ───────────────────────────── Primitives ───────────────────────────── */

/**
 * Label + hint + error + a single control. The control receives a stable id
 * (its `name`), `aria-describedby` for hint/error and `aria-invalid`, which
 * is what screen readers, browsers and AI agents need to fill it correctly.
 */
function Field({
  name,
  label,
  hint,
  required,
  optional,
  error,
  children,
}: {
  name: string;
  label: string;
  hint?: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactElement<{
    id?: string;
    "aria-labelledby"?: string;
    "aria-describedby"?: string;
    "aria-invalid"?: boolean;
  }>;
}) {
  const id = `f-${name}`;
  const labelId = `${id}-label`;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;
  return (
    <div id={`${id}-wrap`}>
      <label id={labelId} htmlFor={id} className={labelClass}>
        {label}
        {required && (
          <span className="text-red-600" aria-hidden="true">
            {" "}
            *
          </span>
        )}
        {optional && (
          <span className="ml-1.5 text-xs font-normal text-slate-500">(optional)</span>
        )}
      </label>
      {hint && (
        <p id={hintId} className="-mt-0.5 mb-1.5 text-xs text-slate-500">
          {hint}
        </p>
      )}
      {cloneElement(children, {
        id,
        "aria-labelledby": labelId,
        "aria-describedby": describedBy,
        "aria-invalid": error ? true : undefined,
      })}
      {error && (
        <p id={errorId} className="mt-1.5 flex items-start gap-1.5 text-sm font-semibold text-red-700">
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-11a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1zm0 8a1.25 1.25 0 100-2.5A1.25 1.25 0 0010 15z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

/** Tap-to-select chips backed by real radio inputs (single choice). */
function ChipRadios({
  name,
  legend,
  options,
  value,
  onChange,
  required,
  optional,
  error,
  hint,
  size = "md",
}: {
  name: string;
  legend: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  optional?: boolean;
  error?: string;
  hint?: string;
  size?: "sm" | "md";
}) {
  const id = `f-${name}`;
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;
  return (
    <fieldset
      id={`${id}-wrap`}
      aria-describedby={[errorId, hintId].filter(Boolean).join(" ") || undefined}
    >
      <legend className={labelClass}>
        {legend}
        {required && (
          <span className="text-red-600" aria-hidden="true">
            {" "}
            *
          </span>
        )}
        {optional && (
          <span className="ml-1.5 text-xs font-normal text-slate-500">(optional)</span>
        )}
      </legend>
      {hint && (
        <p id={hintId} className="-mt-0.5 mb-1.5 text-xs text-slate-500">
          {hint}
        </p>
      )}
      <div className={`flex flex-wrap ${size === "sm" ? "gap-1.5" : "gap-2"}`}>
        {options.map((opt, i) => {
          const checked = value === opt;
          return (
            <label key={opt} className="cursor-pointer">
              <input
                type="radio"
                name={name}
                value={opt}
                checked={checked}
                onChange={() => onChange(opt)}
                className="peer sr-only"
                id={i === 0 ? id : undefined}
              />
              <span
                className={`inline-flex items-center justify-center rounded-full border font-semibold transition peer-focus-visible:ring-2 peer-focus-visible:ring-navy-700/40 peer-focus-visible:ring-offset-2 ${
                  size === "sm" ? "min-w-9 px-2.5 py-2 text-sm" : "px-4 py-2.5 text-sm"
                } ${
                  checked
                    ? "border-navy-950 bg-navy-950 text-white shadow-md shadow-navy-950/20"
                    : error
                      ? "border-red-300 bg-white text-navy-950 hover:border-navy-900/40"
                      : "border-navy-900/15 bg-white text-navy-950 hover:border-navy-900/40 hover:bg-slate-50"
                }`}
              >
                {opt}
              </span>
            </label>
          );
        })}
      </div>
      {error && (
        <p id={errorId} className="mt-1.5 text-sm font-semibold text-red-700">
          {error}
        </p>
      )}
    </fieldset>
  );
}

/** Multi-select chips backed by real checkboxes. */
function ChipChecks({ name, legend, options, hint }: { name: string; legend: string; options: string[]; hint?: string }) {
  return (
    <fieldset>
      <legend className={labelClass}>
        {legend}
        <span className="ml-1.5 text-xs font-normal text-slate-500">(optional)</span>
      </legend>
      {hint && <p className="-mt-0.5 mb-1.5 text-xs text-slate-500">{hint}</p>}
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <label key={opt} className="cursor-pointer">
            <input type="checkbox" name={name} value={opt} className="peer sr-only" />
            <span className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-white px-4 py-2.5 text-sm font-semibold text-navy-950 transition hover:border-navy-900/40 hover:bg-slate-50 peer-checked:border-navy-950 peer-checked:bg-navy-950 peer-checked:text-white peer-checked:shadow-md peer-checked:shadow-navy-950/20 peer-focus-visible:ring-2 peer-focus-visible:ring-navy-700/40 peer-focus-visible:ring-offset-2 [&>svg]:hidden peer-checked:[&>svg]:block">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-3.5 w-3.5">
                <path d="M3 8.5l3.5 3.5L13 5" />
              </svg>
              {opt}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function StepHeading({ n, title, hint }: { n: number; title: string; hint?: string }) {
  return (
    <div className="flex items-start gap-3.5">
      <span
        aria-hidden="true"
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-950 font-display text-sm font-black italic text-white"
      >
        {n}
      </span>
      <div>
        <h3 className="text-lg font-extrabold leading-tight text-navy-950">{title}</h3>
        {hint && <p className="mt-0.5 text-sm text-slate-500">{hint}</p>}
      </div>
    </div>
  );
}

/* ───────────────────────────── Address block ───────────────────────────── */

function AddressBlock({
  legend,
  prefix,
  showBedrooms,
  errors,
  clearError,
}: {
  legend: string;
  prefix: "from" | "to";
  showBedrooms: boolean;
  errors: Errors;
  clearError: (name: string) => void;
}) {
  const [floor, setFloor] = useState("");
  const [lift, setLift] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const name = `${prefix}-address`;
  const upstairs = floor !== "" && floor !== "Ground";

  return (
    <div className="rounded-2xl border border-navy-900/10 bg-white p-4 sm:p-5">
      <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
          <path d="M12 21s-7-6.2-7-11.5a7 7 0 1114 0C19 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
        {legend}
      </p>
      <div className="space-y-5">
        <Field
          name={name}
          label="Address or postcode"
          hint="A postcode is enough to get started."
          required
          error={errors[name]}
        >
          <input
            type="text"
            name={name}
            required
            autoComplete={`section-${prefix} street-address`}
            autoCapitalize="characters"
            enterKeyHint="next"
            placeholder={prefix === "from" ? "e.g. HA5 4SE" : "e.g. WD17 1AB"}
            onChange={() => clearError(name)}
            className={`${inputBase} ${errors[name] ? inputBad : inputOk}`}
          />
        </Field>

        {showBedrooms && (
          <ChipRadios
            name={`${prefix}-bedrooms`}
            legend="Bedrooms"
            options={bedroomOptions}
            value={bedrooms}
            onChange={setBedrooms}
            optional
            size="sm"
          />
        )}

        <div className="space-y-5">
          <ChipRadios
            name={`${prefix}-floor`}
            legend="Floor"
            options={floorOptions}
            value={floor}
            onChange={(v) => {
              setFloor(v);
              if (v === "Ground") setLift("");
            }}
            optional
            size="sm"
          />
          {upstairs && (
            <ChipRadios
              name={`${prefix}-lift`}
              legend="Is there a lift?"
              options={["Yes", "No"]}
              value={lift}
              onChange={setLift}
              optional
              size="sm"
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────── Form ───────────────────────────── */

const initialState: QuoteFormState = {};

export default function QuoteForm() {
  const [moveType, setMoveType] = useState<MoveType>("domestic");
  const [movingDate, setMovingDate] = useState<Date | null>(null);
  const [payer, setPayer] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  // Captured once on mount; the server rejects submissions made implausibly fast.
  const [startedAt] = useState(() => Date.now());
  const [state, formAction, pending] = useActionState(submitQuote, initialState);
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const serverErrorRef = useRef<HTMLDivElement>(null);
  const summaryId = useId();

  useEffect(() => {
    if (state.ok) router.push("/thank-you");
  }, [state.ok, router]);

  useEffect(() => {
    if (state.error) {
      serverErrorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [state.error]);

  const clearError = (key: string) =>
    setErrors((prev) => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });

  const focusField = (key: string) => {
    const wrap = document.getElementById(`f-${key}-wrap`);
    const control = (document.getElementById(`f-${key}`) ??
      wrap?.querySelector("input, button, textarea, select")) as HTMLElement | null;
    wrap?.scrollIntoView({ behavior: "smooth", block: "center" });
    control?.focus({ preventScroll: true });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const found = validate(new FormData(e.currentTarget), moveType);
    if (Object.keys(found).length === 0) {
      setErrors({});
      return; // let the Server Action run
    }
    e.preventDefault();
    setErrors(found);
    // Error summary first (screen readers), then the first invalid control.
    requestAnimationFrame(() => {
      summaryRef.current?.focus();
      focusField(Object.keys(found)[0]);
    });
  };

  const selectMoveType = (type: MoveType) => {
    setMoveType(type);
    setMovingDate(null);
    setErrors({});
  };

  if (state.ok) {
    return (
      <div role="status" aria-live="polite" className="rounded-3xl bg-white p-8 text-center ring-1 ring-navy-900/5 sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-8 w-8">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-brand-600">Enquiry received</p>
        <h2 className="mt-2 text-3xl font-extrabold text-navy-950">Thank you!</h2>
        <p className="mx-auto mt-4 max-w-md text-slate-700">
          Your enquiry has been sent. We&rsquo;ve emailed you a copy, and one of our team will be in touch shortly to arrange your free quotation.
        </p>
        <p className="mt-6 text-sm text-slate-500">
          Need us sooner? Call{" "}
          <a href="tel:+442088689414" className="font-bold text-brand-600">
            +44 (0)20 8868 9414
          </a>
        </p>
      </div>
    );
  }

  const errorKeys = Object.keys(errors);
  const isCommercial = moveType === "commercial";
  const isInternational = moveType === "international";

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={onSubmit}
      noValidate
      aria-describedby={errorKeys.length ? summaryId : undefined}
      className="relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-navy-950/5 ring-1 ring-navy-900/5"
    >
      {/* Header */}
      <div className="border-b border-navy-900/5 bg-slate-50/70 px-5 py-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <div>
            <h2 className="font-display text-2xl font-black italic text-navy-950 sm:text-3xl">
              Get your free quote
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Four quick steps. We usually reply the same working day.
            </p>
          </div>
          <p className="text-xs text-slate-500">
            <span className="text-red-600" aria-hidden="true">
              *
            </span>{" "}
            required
          </p>
        </div>
      </div>

      <div className="space-y-10 px-4 py-7 sm:px-8 sm:py-9">
        {/* Anti-spam: honeypot (hidden from humans) + time-to-complete stamp. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label>
            Company website
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <input type="hidden" name="form_started" value={startedAt} />
        <input type="hidden" name="move-type" value={moveType} />

        {/* Error summary (GOV.UK pattern): announced, focusable, links to fields */}
        {errorKeys.length > 0 && (
          <div
            ref={summaryRef}
            id={summaryId}
            role="alert"
            tabIndex={-1}
            className="rounded-2xl border-2 border-red-500 bg-red-50 p-4 outline-none sm:p-5"
          >
            <h3 className="text-base font-extrabold text-red-800">
              Please check {errorKeys.length === 1 ? "this field" : `these ${errorKeys.length} fields`}
            </h3>
            <ul className="mt-2 space-y-1 text-sm">
              {errorKeys.map((k) => (
                <li key={k}>
                  <button
                    type="button"
                    onClick={() => focusField(k)}
                    className="text-left font-semibold text-red-700 underline underline-offset-2 hover:text-red-900"
                  >
                    {errors[k]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Step 1: move type ── */}
        <section aria-labelledby="step-1" className="space-y-5">
          <StepHeading n={1} title="What are you moving?" />
          <span id="step-1" className="sr-only">
            Step 1: type of move
          </span>
          <div role="radiogroup" aria-label="Type of move" className="grid gap-3 sm:grid-cols-3">
            {moveTypes.map((option) => {
              const selected = moveType === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => selectMoveType(option.value)}
                  className={`group relative flex items-center gap-3.5 rounded-2xl border-2 p-4 text-left transition-all duration-200 ${
                    selected
                      ? "border-navy-950 bg-navy-950 text-white shadow-lg shadow-navy-950/25"
                      : "border-navy-900/10 bg-white text-navy-950 hover:-translate-y-0.5 hover:border-navy-900/30 hover:shadow-md"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${
                      selected ? "bg-white/10 text-white" : "bg-slate-100 text-navy-800 group-hover:bg-slate-200"
                    }`}
                  >
                    {option.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-bold leading-tight">{option.label}</span>
                    <span className={`mt-0.5 block text-xs ${selected ? "text-white/70" : "text-slate-500"}`}>
                      {option.hint}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full transition ${
                      selected ? "bg-brand-600 text-white" : "bg-slate-100 text-transparent"
                    }`}
                  >
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                      <path d="M3 8.5l3.5 3.5L13 5" />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>

          {isCommercial && (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="company-name" label="Company name" required error={errors["company-name"]}>
                <input
                  type="text"
                  name="company-name"
                  required
                  autoComplete="organization"
                  enterKeyHint="next"
                  onChange={() => clearError("company-name")}
                  className={`${inputBase} ${errors["company-name"] ? inputBad : inputOk}`}
                />
              </Field>
              <Field name="employees" label="Employees moving" required error={errors["employees"]}>
                <input
                  type="number"
                  name="employees"
                  min={1}
                  inputMode="numeric"
                  required
                  enterKeyHint="next"
                  placeholder="e.g. 25"
                  onChange={() => clearError("employees")}
                  className={`${inputBase} ${errors["employees"] ? inputBad : inputOk}`}
                />
              </Field>
            </div>
          )}
        </section>

        {/* ── Step 2: addresses ── */}
        <section aria-labelledby="step-2" className="space-y-5">
          <StepHeading
            n={2}
            title="Where from, and where to?"
            hint={
              isCommercial
                ? "Current and new premises."
                : "Floor and lift details help us bring the right crew and vehicle."
            }
          />
          <span id="step-2" className="sr-only">
            Step 2: addresses
          </span>
          <div className="grid gap-4 lg:grid-cols-2">
            <AddressBlock legend="Moving from" prefix="from" showBedrooms={!isCommercial} errors={errors} clearError={clearError} />
            <AddressBlock legend="Moving to" prefix="to" showBedrooms={!isCommercial} errors={errors} clearError={clearError} />
          </div>
        </section>

        {/* ── Step 3: date & extras ── */}
        <section aria-labelledby="step-3" className="space-y-5">
          <StepHeading n={3} title="When, and anything extra?" />
          <span id="step-3" className="sr-only">
            Step 3: date and extras
          </span>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              name="moving-date"
              label="Moving date"
              hint={isInternational ? "Leave blank if you are still planning." : "An approximate date is fine."}
              required={!isInternational}
              optional={isInternational}
              error={errors["moving-date"]}
            >
              <DatePicker
                value={movingDate}
                onChange={(d) => {
                  setMovingDate(d);
                  clearError("moving-date");
                }}
                required={!isInternational}
                name="moving-date"
              />
            </Field>
            {isInternational && (
              <Field name="payer" label="Who is paying for the move?" required error={errors["payer"]}>
                <Select
                  options={payerOptions}
                  value={payer}
                  onChange={(v) => {
                    setPayer(v);
                    clearError("payer");
                  }}
                  required
                  name="payer"
                />
              </Field>
            )}
          </div>

          <ChipChecks
            name="extras"
            legend="Would you also like a price for"
            options={
              isCommercial
                ? ["Storage", "Packing & unpacking", "Dismantling & reassembly", "IT decommissioning & recommissioning", "Disposal & recycling"]
                : ["Storage", "Packing & unpacking", "Dismantling & reassembly", "Piano", "Disposal & recycling"]
            }
          />

          <Field
            name="notes"
            label="Anything else we should know?"
            hint="Oversized items, parking, long carries, dates that are flexible — anything that helps us quote accurately."
            optional
          >
            <textarea
              name="notes"
              rows={3}
              maxLength={4000}
              placeholder="e.g. American fridge-freezer, no parking outside, moving on a Saturday if possible"
              className={`${inputBase} ${inputOk} resize-y`}
            />
          </Field>
        </section>

        {/* ── Step 4: contact details ── */}
        <section aria-labelledby="step-4" className="space-y-5">
          <StepHeading n={4} title="Your details" hint="So we can send your quote and confirm a few details." />
          <span id="step-4" className="sr-only">
            Step 4: your details
          </span>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field name="name" label={isCommercial ? "Your name" : "Full name"} required error={errors["name"]}>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                enterKeyHint="next"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  clearError("name");
                }}
                className={`${inputBase} ${errors["name"] ? inputBad : inputOk}`}
              />
            </Field>
            <Field
              name="phone"
              label={isCommercial ? "Work phone" : "Phone"}
              hint="Mobile is best — we can WhatsApp you if easier."
              required
              error={errors["phone"]}
            >
              <input
                type="tel"
                name="phone"
                required
                inputMode="tel"
                autoComplete="tel"
                enterKeyHint="next"
                placeholder="07700 900123"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  clearError("phone");
                }}
                className={`${inputBase} ${errors["phone"] ? inputBad : inputOk}`}
              />
            </Field>
            <div className="sm:col-span-2">
              <Field
                name="email"
                label={isCommercial ? "Work email" : "Email"}
                hint="We'll send a copy of your enquiry and your quote here."
                required
                error={errors["email"]}
              >
                <input
                  type="email"
                  name="email"
                  required
                  inputMode="email"
                  autoComplete="email"
                  autoCapitalize="none"
                  spellCheck={false}
                  enterKeyHint="next"
                  placeholder="name@example.com"
                  onChange={() => clearError("email")}
                  className={`${inputBase} ${errors["email"] ? inputBad : inputOk}`}
                />
              </Field>
            </div>
          </div>
          {/* Business moves: the office asks for these separately; mirror rather than ask twice. */}
          {isCommercial && (
            <>
              <input type="hidden" name="contact-name" value={name} />
              <input type="hidden" name="work-phone" value={phone} />
            </>
          )}

          <ChipRadios
            name="hear-about"
            legend="How did you hear about us?"
            options={hearAboutOptions}
            value={hearAbout}
            onChange={(v) => {
              setHearAbout(v);
              clearError("hear-about");
            }}
            required
            error={errors["hear-about"]}
          />
          {hearAbout === "Other" && (
            <Field name="hear-about-other" label="Where was that?" required error={errors["hear-about-other"]}>
              <input
                type="text"
                name="hear-about-other"
                required
                onChange={() => clearError("hear-about-other")}
                className={`${inputBase} ${errors["hear-about-other"] ? inputBad : inputOk}`}
              />
            </Field>
          )}

          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-navy-900/10 bg-slate-50/70 p-4 text-sm text-slate-700 transition hover:bg-slate-50">
            <input
              type="checkbox"
              name="marketing"
              value="yes"
              className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded accent-brand-600"
            />
            <span>
              <span className="font-semibold text-navy-950">Keep me posted</span> — occasional moving tips and offers by email. You can unsubscribe any time.
            </span>
          </label>
        </section>

        {state.error && (
          <div
            ref={serverErrorRef}
            role="alert"
            className="rounded-2xl border-2 border-red-500 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800"
          >
            {state.error}
          </div>
        )}

        {/* Submit */}
        <div className="rounded-2xl bg-slate-50/70 p-5 sm:p-6">
          <button
            type="submit"
            disabled={pending}
            className="flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-600 px-9 py-4 text-base font-bold text-white shadow-xl shadow-brand-600/30 transition hover:-translate-y-0.5 hover:bg-brand-500 disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {pending ? (
              <>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5 animate-spin">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
                  <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                Sending your enquiry…
              </>
            ) : (
              "Request my free quote"
            )}
          </button>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs font-semibold text-slate-600">
            {["No obligation", "Fixed-price quotes", "Fully insured", "Est. 2006"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-3.5 w-3.5 text-emerald-600">
                  <path d="M3 8.5l3.5 3.5L13 5" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-xs text-slate-500">
            We&rsquo;ll only use your details to respond to this enquiry. See our{" "}
            <a href="/privacy-policy" className="font-semibold underline underline-offset-2">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </form>
  );
}
