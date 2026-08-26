"use client";

import { useState } from "react";
import Select from "@/components/Select";
import DatePicker from "@/components/DatePicker";

type MoveType = "domestic" | "international" | "commercial";

const inputClass =
  "w-full rounded-lg border border-navy-900/15 bg-white px-4 py-2.5 text-sm text-navy-950 placeholder:text-slate-400 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/25";
const labelClass = "mb-1.5 block text-sm font-semibold text-navy-950";

const moveTypes: {
  value: MoveType;
  label: string;
  hint: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "domestic",
    label: "Domestic",
    hint: "Home moves, UK-wide",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
      </svg>
    ),
  },
  {
    value: "commercial",
    label: "Business, Office & Commercial",
    hint: "Offices & workplaces",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M4 21V5a2 2 0 012-2h8a2 2 0 012 2v16" />
        <path d="M16 9h3a1 1 0 011 1v11" />
        <path d="M2 21h20" />
        <path d="M8 7h2M8 11h2M8 15h2M12.5 7h1M12.5 11h1M12.5 15h1" />
      </svg>
    ),
  },
];

const hearAboutOptions = [
  "Previous customer",
  "Recommendation",
  "Google Search",
  "Google Maps",
  "Saw one of our vehicles",
  "Social media",
  "AI search",
  "Another website or directory",
  "Other",
];

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelClass}>
        {label}
        {required && <span className="text-red-600"> *</span>}
      </label>
      {children}
    </div>
  );
}

function AddressBlock({
  legend,
  required,
  showBedrooms = true,
}: {
  legend: string;
  required?: boolean;
  showBedrooms?: boolean;
}) {
  return (
    <fieldset className="rounded-xl border border-navy-900/10 p-5">
      <legend className="px-2 text-sm font-bold text-navy-950">
        {legend}
        {required && <span className="text-red-600"> *</span>}
      </legend>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field label="Address / Postcode" required={required}>
            <input
              type="text"
              required={required}
              className={inputClass}
              placeholder="Address or postcode"
            />
          </Field>
        </div>
        <Field label="What floor">
          <input type="text" className={inputClass} placeholder="e.g. Ground" />
        </Field>
        <div className="flex items-end gap-6 pb-1">
          <span className="text-sm font-semibold text-navy-950">Lift:</span>
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name={`${legend}-lift`} className="accent-brand-600" />
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name={`${legend}-lift`} className="accent-brand-600" />
            No
          </label>
        </div>
        {showBedrooms && (
          <Field label="Property size (no. of bedrooms)">
            <input type="text" className={inputClass} placeholder="e.g. 3" />
          </Field>
        )}
      </div>
    </fieldset>
  );
}

function ExtrasBlock({ commercial = false }: { commercial?: boolean }) {
  const extras = commercial
    ? [
        "Storage",
        "Packing and/or unpacking",
        "Dismantling and Reassembling",
        "IT Decommissioning and Recommissioning",
        "Disposal",
      ]
    : [
        "Storage",
        "Packing and/or unpacking",
        "Dismantling and Reassembling",
        "Disposal",
      ];
  return (
    <div>
      <p className={labelClass}>
        Anything specific you would like us to quote you on?
      </p>
      <div className="grid gap-2 sm:grid-cols-2">
        {extras.map((extra) => (
          <label key={extra} className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-brand-600" />
            {extra}
          </label>
        ))}
      </div>
    </div>
  );
}

function NotesBlock() {
  return (
    <Field label="Additional information/notes (oversize items, special requirements, access difficulties)">
      <textarea rows={4} className={inputClass} />
    </Field>
  );
}

export default function QuoteForm() {
  const [moveType, setMoveType] = useState<MoveType>("domestic");
  const [hearAbout, setHearAbout] = useState("");
  const [movingDate, setMovingDate] = useState<Date | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const selectMoveType = (type: MoveType) => {
    setMoveType(type);
    setMovingDate(null);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-slate-50 p-10 text-center ring-1 ring-navy-900/5">
        <h3 className="text-2xl font-extrabold text-navy-950">Thank you!</h3>
        <p className="mt-3 text-slate-600">
          Your enquiry has been received. We will contact you shortly to
          discuss and evaluate your requirements, providing you with a bespoke
          quotation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6 rounded-2xl bg-slate-50 p-6 ring-1 ring-navy-900/5 sm:p-10"
    >
      <h2 className="text-2xl font-extrabold text-navy-950">
        How can we help make your move Brilliant?
      </h2>
      <p className="text-sm text-slate-500">
        <span className="text-red-600">*</span> indicates required fields
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Name" required>
          <input type="text" required className={inputClass} />
        </Field>
        <Field label="Email" required>
          <input type="email" required className={inputClass} />
        </Field>
        <Field label="Phone" required>
          <input type="tel" required className={inputClass} />
        </Field>
      </div>

      <Field label="How did you hear about Northstar Removals?" required>
        <Select
          options={hearAboutOptions}
          value={hearAbout}
          onChange={setHearAbout}
          required
          name="hear-about"
        />
      </Field>

      {hearAbout === "Other" && (
        <Field label='If "Other", please explain further below' required>
          <input type="text" required className={inputClass} />
        </Field>
      )}

      <p className="text-xs text-slate-500">
        * by providing your email address, you are happy to allow occasional
        contact from Northstar Removals about their products and services that
        may benefit you.
      </p>

      <Field label="Type of Move" required>
        <div
          role="radiogroup"
          aria-label="Type of move"
          className="grid gap-3 sm:grid-cols-3"
        >
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
                    selected
                      ? "bg-white/10 text-white"
                      : "bg-slate-100 text-navy-800 group-hover:bg-slate-200"
                  }`}
                >
                  {option.icon}
                </span>
                <span>
                  <span className="block text-sm font-bold leading-tight">
                    {option.label}
                  </span>
                  <span
                    className={`mt-0.5 block text-xs ${
                      selected ? "text-white/70" : "text-slate-500"
                    }`}
                  >
                    {option.hint}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full transition ${
                    selected
                      ? "bg-brand-600 text-white"
                      : "bg-slate-100 text-transparent"
                  }`}
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                  >
                    <path d="M3 8.5l3.5 3.5L13 5" />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>
      </Field>

      {moveType === "domestic" && (
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-navy-950">Domestic Moves</h3>
          <AddressBlock legend="Moving From" required />
          <AddressBlock legend="Moving To" required />
          <Field label="Moving Date" required>
            <DatePicker
              value={movingDate}
              onChange={setMovingDate}
              required
              name="moving-date"
            />
          </Field>
          <ExtrasBlock />
          <NotesBlock />
        </div>
      )}

      {moveType === "international" && (
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-navy-950">
            International Moves
          </h3>
          <AddressBlock legend="Moving From" required />
          <AddressBlock legend="Moving To" required />
          <Field label="Moving Date">
            <DatePicker
              value={movingDate}
              onChange={setMovingDate}
              name="moving-date"
            />
          </Field>
          <Field label="Who is paying for your move?" required>
            <input type="text" required className={inputClass} />
          </Field>
          <ExtrasBlock />
          <NotesBlock />
        </div>
      )}

      {moveType === "commercial" && (
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-navy-950">
            Business, Office &amp; Commercial Moves
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="Company Name" required>
              <input type="text" required className={inputClass} />
            </Field>
            <Field label="Contact Name" required>
              <input type="text" required className={inputClass} />
            </Field>
            <Field label="Work Phone Number" required>
              <input type="tel" required className={inputClass} />
            </Field>
          </div>
          <AddressBlock legend="Moving From" required showBedrooms={false} />
          <AddressBlock legend="Moving To" required showBedrooms={false} />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Moving Date" required>
              <DatePicker
                value={movingDate}
                onChange={setMovingDate}
                required
                name="moving-date"
              />
            </Field>
            <Field label="Number of employees" required>
              <input type="number" min={1} required className={inputClass} />
            </Field>
          </div>
          <ExtrasBlock commercial />
          <NotesBlock />
        </div>
      )}

      <button
        type="submit"
        className="w-full rounded-full bg-brand-600 px-9 py-4 text-base font-bold text-white shadow-xl shadow-brand-600/30 transition hover:-translate-y-0.5 hover:bg-brand-500 sm:w-auto"
      >
        Request my Free Quote
      </button>
    </form>
  );
}
