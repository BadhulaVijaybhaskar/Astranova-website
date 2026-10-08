# Astranova — Corporate Website

Premium light-aurora marketing site for **Astranova Digital Services Pvt. Ltd.**

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Quick start (Windows / macOS / Linux)

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production:

```bash
npm run build
npm start
```

## Where to edit content

All copy, ventures, services, principles, project placeholders and stats live in one typed file:

```
src/content/site.ts
```

Comments in that file mark every **PLACEHOLDER** value that must be replaced with real, verified data before launch (email, social URLs, stats, case studies).

## Images

Production images live in `public/` (lowercase). See `ASSET_MAP.md` for the full original → new mapping, intended sections, object-fit rules and transparency notes.

Optimized WebP/AVIF derivatives are in `public/optimized/` for reference; the site uses `next/image`, which generates modern formats automatically from the PNG masters.

## Brand notes

- Light aurora palette only — never black-dominant.
- Navy text (`#0b1b3f`) rather than pure black.
- Header becomes more opaque on scroll; mobile uses a drawer with focus trap.
- `prefers-reduced-motion` disables entrance / ambient animation.
- Visible `:focus-visible` rings and skip-to-content link.

## Environment

Optional:

```
NEXT_PUBLIC_SITE_URL=https://www.astranova.example
```

Used for Open Graph / metadata base.

## Contact form

The contact form in the CTA section (`#contact`) is front-end only. On submit it validates locally and opens the visitor's email client via `mailto:` using `cta.email` from `src/content/site.ts`.

To connect a real backend later:

1. Create an API route (e.g. `src/app/api/contact/route.ts`) or use a form service (Formspree, Resend, etc.).
2. In `src/components/CTASection.tsx`, replace the `mailto:` branch in `handleSubmit` with `fetch('/api/contact', { method: 'POST', body: JSON.stringify(...) })`.
3. Keep the success checkmark UI; point it at the API response instead of the mailto confirmation.

## Motion

Animations use Framer Motion + CSS only (no other animation libraries). Timings follow the Astranova Animation & Interaction System. `prefers-reduced-motion` disables parallax, floating, counters and large translations.
