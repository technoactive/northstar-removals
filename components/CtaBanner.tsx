import Link from "next/link";

export default function CtaBanner({
  label = "Request a No obligation Consultation & Survey",
}: {
  label?: string;
}) {
  return (
    <div className="my-12 text-center">
      <Link
        href="/contact-us"
        className="inline-block rounded-full bg-brand-600 px-9 py-4 text-base font-bold text-white shadow-xl shadow-brand-600/30 transition hover:-translate-y-0.5 hover:bg-brand-500 hover:shadow-2xl hover:shadow-brand-500/40"
      >
        {label}
      </Link>
    </div>
  );
}
