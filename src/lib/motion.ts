/**
 * Astranova animation tokens — timings from the Animation & Interaction System spec.
 * Prefer transform + opacity only. No bounce, spin, aggressive zoom, or scroll-jacking.
 */
export const ease = [0.22, 1, 0.36, 1] as const;

export const duration = {
  headerIn: 0.58, // 500–650ms
  headerScroll: 0.3, // 250–350ms
  navUnderline: 0.2, // 180–220ms
  heroLine: 0.8, // 700–900ms
  heroBodyDelay: 0.18, // 150–200ms after last line
  heroImage: 1.7, // 1.5–2s
  watermarkIn: 1.35, // 1.2–1.5s
  btn: 0.22, // 180–250ms
  cardIn: 0.65, // 600–700ms
  cardHover: 0.25, // 250ms
  cardVisual: 0.4, // 400ms
  serviceIn: 0.6,
  whyLine: 1.25, // 1–1.5s
  workIn: 0.65,
  heading: 0.7,
  counter: 1.0, // 800–1200ms
  formFocus: 0.18,
  footer: 0.7,
} as const;

export const stagger = {
  heroLines: 0.1, // 80–120ms
  cards: 0.085, // 70–100ms
  services: 0.07,
  why: 0.09,
} as const;

/** Shared viewport: fire once when entering view */
export const viewOnce = { once: true, margin: "0px 0px -12% 0px" } as const;

export const fadeUp = (y = 24, delay = 0, dur = duration.cardIn) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewOnce,
  transition: { duration: dur, delay, ease },
});

export const fadeOnly = (delay = 0, dur = 0.5) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: viewOnce,
  transition: { duration: dur, delay, ease },
});
