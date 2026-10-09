/**
 * Canonical site URL used for metadata, sitemap and robots.
 * Priority: NEXT_PUBLIC_SITE_URL (set this to https://astranovain.com at launch)
 * → Netlify build env (URL / DEPLOY_PRIME_URL) → localhost for dev.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
  "http://localhost:3000"
).replace(/\/$/, "");
