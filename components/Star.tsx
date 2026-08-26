export default function Star({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {/* Four-point star, echoing the Northstar logo mark */}
      <path d="M12 0c.9 6.5 2.4 9.4 3.4 10.4S18.2 12 24 12c-6.5.9-9.6 2.6-10.6 3.6S12.9 17.5 12 24c-.9-6.5-2.4-7.4-3.4-8.4S6.5 12.9 0 12c6.5-.9 7.6-1.6 8.6-2.6S11.1 6.5 12 0z" />
    </svg>
  );
}

export function FiveStars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className={className}
        >
          <path d="M12 0l2.4 8.2L24 9.2l-7 5.4 2.3 9.4L12 18.6 4.7 24 7 14.6 0 9.2l9.6-1z" />
        </svg>
      ))}
    </div>
  );
}
