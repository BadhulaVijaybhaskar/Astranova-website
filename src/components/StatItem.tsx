"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import type { Stat } from "@/content/site";
import { duration, ease } from "@/lib/motion";

/**
 * Numeric values count up once when visible (800–1200ms).
 * nonNumeric / non-parseable values just reveal with opacity/translate.
 * prefers-reduced-motion: show final value immediately.
 */
export default function StatItem({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const match = !stat.nonNumeric ? stat.value.match(/^(\d+)(.*)$/) : null;
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(
    target !== null && !reduce ? `0${suffix}` : stat.value,
  );

  useEffect(() => {
    if (target === null || reduce) {
      setDisplay(stat.value);
      return;
    }
    if (!inView) return;
    const controls = animate(0, target, {
      duration: duration.counter,
      ease,
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, target, suffix, reduce, stat.value]);

  return (
    <motion.div
      className="relative flex flex-col items-center px-3 py-8 text-center sm:px-4 sm:py-10"
      initial={{ opacity: 0, y: reduce ? 0 : 12 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.55, ease }}
    >
      <p
        ref={ref}
        className={`font-display font-medium leading-none tracking-[-0.03em] text-navy-900 whitespace-nowrap ${
          stat.nonNumeric
            ? "flex min-h-[1em] items-center text-[clamp(1.25rem,2.4vw,2.1rem)] [font-size-adjust:none] sm:min-h-[clamp(1.6rem,3.8vw,3.2rem)]"
            : "text-[clamp(1.6rem,3.8vw,3.2rem)]"
        }`}
      >
        {/* non-breaking hyphens keep values like END-TO-END on one line */}
        <span className="text-aurora">{stat.nonNumeric ? display.replace(/-/g, "\u2011") : display}</span>
      </p>
      <p className="mt-4 max-w-[12rem] font-display text-[0.9rem] font-medium leading-snug text-navy-900 sm:text-base">
        {stat.label}
      </p>
      {stat.caption ? <p className="mt-1 text-sm text-slate-ink">{stat.caption}</p> : null}
      {stat.placeholder ? <span className="sr-only">(figure to be confirmed)</span> : null}
    </motion.div>
  );
}
