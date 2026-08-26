"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "ns-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // Storage unavailable (e.g. private mode) — don't nag on every render.
    }
  }, []);

  const choose = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Ignore storage failures; the banner simply reappears next visit.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-white/10 bg-navy-950/95 p-5 text-white shadow-2xl shadow-navy-950/40 backdrop-blur sm:flex-row sm:items-center sm:p-6">
        <p className="flex-1 text-sm leading-relaxed text-white/85">
          We use only essential cookies, plus embedded Google Maps content
          which may set its own cookies. Read our{" "}
          <Link
            href="/cookie-policy"
            className="font-semibold text-ice-200 underline underline-offset-4"
          >
            Cookie Policy
          </Link>{" "}
          to learn more.
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => choose("declined")}
            className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold shadow-lg shadow-brand-600/30 transition hover:bg-brand-500"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
