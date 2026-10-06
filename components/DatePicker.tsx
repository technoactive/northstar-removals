"use client";

import { useEffect, useRef, useState } from "react";

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function formatDisplay(d: Date) {
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function DatePicker({
  value,
  onChange,
  required = false,
  name,
  placeholder = "Select a date…",
  id,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
}: {
  value: Date | null;
  onChange: (date: Date) => void;
  required?: boolean;
  name?: string;
  placeholder?: string;
  id?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
}) {
  const today = startOfDay(new Date());
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(
    (value ?? today).getFullYear(),
  );
  const [viewMonth, setViewMonth] = useState((value ?? today).getMonth());
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const firstOfMonth = new Date(viewYear, viewMonth, 1);
  // Monday-first offset
  const leadingBlanks = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const moveMonth = (delta: number) => {
    const d = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
  };

  const atCurrentMonth =
    viewYear === today.getFullYear() && viewMonth === today.getMonth();

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        id={id}
        aria-labelledby={
          ariaLabelledBy && id ? `${ariaLabelledBy} ${id}` : ariaLabelledBy
        }
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-describedby={ariaDescribedBy}
        data-invalid={ariaInvalid || undefined}
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between gap-3 rounded-xl border bg-white px-4 py-3 text-left text-base transition focus:outline-none focus:ring-2 sm:text-sm ${
          ariaInvalid
            ? "border-red-500 focus:border-red-600 focus:ring-red-500/25"
            : open
              ? "border-navy-700 ring-2 ring-navy-700/25"
              : "border-navy-900/15 focus:border-navy-700 focus:ring-navy-700/25"
        } ${value ? "text-navy-950" : "text-slate-500"}`}
      >
        {value ? formatDisplay(value) : placeholder}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-4.5 w-4.5 shrink-0 text-navy-800"
        >
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 10h18" />
        </svg>
      </button>

      {/* Invisible input so native required-validation still works */}
      <input
        type="text"
        name={name}
        value={value ? value.toISOString().slice(0, 10) : ""}
        onChange={() => {}}
        required={required}
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 bottom-0 h-px w-auto opacity-0"
      />

      {open && (
        <div
          role="dialog"
          aria-label="Choose a date"
          className="absolute z-30 mt-2 w-80 max-w-[calc(100vw-2rem)] rounded-2xl border border-navy-900/10 bg-white p-4 shadow-2xl shadow-navy-950/15"
        >
          <div className="flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous month"
              onClick={() => moveMonth(-1)}
              disabled={atCurrentMonth}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-navy-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path d="M12.7 5.3a1 1 0 010 1.4L9.4 10l3.3 3.3a1 1 0 11-1.4 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 011.4 0z" />
              </svg>
            </button>
            <p className="font-display text-sm font-extrabold text-navy-950">
              {MONTHS[viewMonth]} {viewYear}
            </p>
            <button
              type="button"
              aria-label="Next month"
              onClick={() => moveMonth(1)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-navy-900 transition hover:bg-slate-100"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path d="M7.3 14.7a1 1 0 010-1.4L10.6 10 7.3 6.7a1 1 0 011.4-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4 0z" />
              </svg>
            </button>
          </div>

          <div className="mt-3 grid grid-cols-7 gap-1 text-center">
            {WEEKDAYS.map((d) => (
              <span
                key={d}
                className="py-1 text-[11px] font-bold uppercase tracking-wide text-slate-500"
              >
                {d}
              </span>
            ))}
            {Array.from({ length: leadingBlanks }).map((_, i) => (
              <span key={`blank-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const date = new Date(viewYear, viewMonth, i + 1);
              const isPast = date < today;
              const isToday = date.getTime() === today.getTime();
              const isSelected =
                !!value && date.getTime() === startOfDay(value).getTime();
              return (
                <button
                  key={i}
                  type="button"
                  disabled={isPast}
                  onClick={() => {
                    onChange(date);
                    setOpen(false);
                  }}
                  className={`flex h-9 items-center justify-center rounded-lg text-sm transition ${
                    isSelected
                      ? "bg-navy-950 font-bold text-white shadow-md"
                      : isPast
                        ? "cursor-not-allowed text-slate-300"
                        : "text-navy-950 hover:bg-slate-100"
                  } ${isToday && !isSelected ? "font-bold text-brand-600 ring-1 ring-inset ring-brand-600/40" : ""}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-navy-900/10 pt-3 text-xs">
            <span className="text-slate-500">
              <span className="font-bold text-brand-600">•</span> Today
            </span>
            {value && (
              <span className="font-semibold text-navy-950">
                {formatDisplay(value)}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
