"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Venture } from "@/content/site";
import { ArrowUpRight } from "./Icons";
import { duration, ease, stagger, viewOnce } from "@/lib/motion";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function VentureCard({ venture, index }: { venture: Venture; index: number }) {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  const y = reduce ? 0 : mobile ? 12 : 24;

  return (
    <motion.article
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewOnce}
      transition={{ duration: duration.cardIn, delay: index * stagger.cards, ease }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white luminous-border transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[5px] hover:shadow-[0_24px_50px_-28px_rgba(22,40,90,0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-mist">
        <Image
          src={venture.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[55%] opacity-90 transition duration-500 group-hover:translate-y-[-4%] group-hover:opacity-100"
        >
          <Image
            src="/accent-aurora-wave-02.png"
            alt=""
            fill
            sizes="25vw"
            className="object-cover object-bottom opacity-70 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>
        <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 p-2 shadow-sm backdrop-blur-md">
          <Image src={venture.emblem} alt="" width={80} height={80} className="h-8 w-8 object-contain" />
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em]" style={{ color: venture.accent }}>
          {venture.category}
        </p>
        <h3 className="mt-2 font-display text-2xl font-medium uppercase tracking-tight text-navy-900">{venture.name}</h3>
        <p className="mt-3 flex-1 pr-10 text-[0.98rem] leading-relaxed text-slate-ink">{venture.description}</p>
        <a
          href={venture.href}
          className="absolute bottom-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-mist text-navy-800 transition duration-[250ms] group-hover:translate-x-[3px] group-hover:translate-y-[-3px] group-hover:bg-navy-900 group-hover:text-white"
          aria-label={`Learn more about ${venture.name}`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}
