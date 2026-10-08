/** Minimal inline UI glyphs (hand-drawn SVG, no third-party icon pack). */
type P = { className?: string };

export function ArrowRight({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRight({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M6 14 14 6m0 0H7.5M14 6v6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SocialIcon({ name, className = "h-[18px] w-[18px]" }: P & { name: "linkedin" | "youtube" | "instagram" | "x" }) {
  switch (name) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.5 4.77 5.75v5.7h-4v-5.05c0-1.2-.02-2.75-1.7-2.75-1.7 0-1.95 1.3-1.95 2.66v5.14h-4v-11Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
          <path d="M22.5 7.2a2.9 2.9 0 0 0-2-2C18.7 4.7 12 4.7 12 4.7s-6.7 0-8.5.5a2.9 2.9 0 0 0-2 2C1 9 1 12 1 12s0 3 .5 4.8a2.9 2.9 0 0 0 2 2c1.8.5 8.5.5 8.5.5s6.7 0 8.5-.5a2.9 2.9 0 0 0 2-2C23 15 23 12 23 12s0-3-.5-4.8ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
          <path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />
        </svg>
      );
  }
}
