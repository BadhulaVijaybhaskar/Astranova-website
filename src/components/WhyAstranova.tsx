"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { principles, whySection } from "@/content/site";
import { duration, ease, stagger, viewOnce } from "@/lib/motion";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function WhyAstranova() {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: "0px 0px -20% 0px" });

  return (
    <section id="about" aria-labelledby="why-heading" className="section-pad relative overflow-clip bg-mist/40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-ivory via-sky-pale/40 to-ivory" />

      <div className="container-wide grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <motion.p
            className="eyebrow flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewOnce}
            transition={{ duration: 0.5, ease }}
          >
            <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-electric via-cyan-aurora to-coral" />
            {whySection.eyebrow}
          </motion.p>
          <motion.h2
            id="why-heading"
            className="mt-5 font-display text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.06] tracking-[-0.025em] text-navy-900 text-balance"
            initial={{ opacity: 0, y: reduce ? 0 : mobile ? 10 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewOnce}
            transition={{ duration: duration.heading, delay: 0.06, ease }}
          >
            <span className="block">{whySection.titleLine1}</span>
            <span className="block">{whySection.titleLine2}</span>
          </motion.h2>
          <motion.p
            className="mt-8 max-w-md text-[1.08rem] leading-relaxed text-slate-ink text-pretty"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewOnce}
            transition={{ duration: 0.55, delay: 0.16, ease }}
          >
            {whySection.brandStatement}
          </motion.p>
        </div>

        <div className="relative lg:col-span-7" ref={lineRef}>
          {/* Spec: one thin aurora connector drawing left→right via scaleX (1–1.5s) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-0 h-[3px] overflow-hidden rounded-full"
          >
            <div
              className={`h-full w-full origin-left bg-gradient-to-r from-electric via-cyan-aurora to-coral ${
                lineInView
                  ? reduce
                    ? "opacity-90 scale-x-100"
                    : "animate-grow-line-x"
                  : "scale-x-0 opacity-0"
              }`}
              style={{ animationDuration: `${duration.whyLine}s` }}
            />
          </div>
          {/* Soft vertical guide aligning the numbered circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-10 left-[1.85rem] top-8 w-px bg-gradient-to-b from-electric/40 via-cyan-aurora/30 to-coral/40 sm:left-[2.1rem]"
          />

          <ol className="relative mt-3 space-y-5 lg:mt-5 lg:pt-2">
            {principles.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: reduce ? 0 : mobile ? 8 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewOnce}
                transition={{ duration: 0.55, delay: i * stagger.why, ease }}
              >
                <article className="relative grid grid-cols-[3.5rem_1fr] gap-4 rounded-3xl bg-white/80 p-5 luminous-border sm:grid-cols-[4rem_1fr] sm:gap-5 sm:p-6">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-navy-900/5 sm:h-11 sm:w-11">
                    <span className="text-aurora font-display text-sm font-semibold tracking-[0.08em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium tracking-tight text-navy-900 sm:text-xl">{p.title}</h3>
                    <p className="mt-1.5 text-[0.98rem] leading-relaxed text-slate-ink">{p.description}</p>
                  </div>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
