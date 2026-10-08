"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { duration, ease, viewOnce } from "@/lib/motion";
import { useIsMobile } from "@/hooks/useIsMobile";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
  id?: string;
  className?: string;
  as?: "h2" | "h3";
};

export default function SectionHeading({ eyebrow, title, copy, align = "left", id, className = "", as = "h2" }: Props) {
  const Tag = as;
  const centered = align === "center";
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  const y = reduce ? 0 : mobile ? 10 : 18;

  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow ? (
        <motion.p
          className={`eyebrow flex items-center gap-3 ${centered ? "justify-center" : ""}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewOnce}
          transition={{ duration: 0.5, ease }}
        >
          <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-electric via-cyan-aurora to-coral" />
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewOnce}
        transition={{ duration: duration.heading, delay: 0.06, ease }}
      >
        <Tag
          id={id}
          className="mt-5 font-display text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.06] tracking-[-0.025em] text-navy-900 text-balance"
        >
          {title}
        </Tag>
      </motion.div>
      {copy ? (
        <motion.p
          className="mt-5 text-[1.05rem] leading-relaxed text-slate-ink text-pretty"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewOnce}
          transition={{ duration: 0.55, delay: 0.16, ease }}
        >
          {copy}
        </motion.p>
      ) : null}
    </div>
  );
}
