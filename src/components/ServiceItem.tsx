"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Service } from "@/content/site";
import { duration, ease, stagger, viewOnce } from "@/lib/motion";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function ServiceItem({ service, index }: { service: Service; index: number }) {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();

  return (
    <motion.article
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: mobile ? 1 : 0.92, y: mobile ? 8 : 0 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={viewOnce}
      transition={{ duration: duration.serviceIn, delay: index * stagger.services, ease }}
      className="group relative flex h-full flex-col items-start rounded-3xl p-6 text-left sm:p-7"
    >
      <div className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-gradient-to-br from-sky-pale via-white to-violet-aurora/15 transition-transform duration-300 group-hover:-translate-y-[3px] group-hover:scale-[1.03]">
        <div aria-hidden="true" className="absolute inset-0 rounded-full bg-gradient-to-br from-electric/15 via-cyan-aurora/10 to-coral/10 opacity-0 blur-md transition duration-300 group-hover:opacity-100" />
        <Image src={service.icon} alt="" width={96} height={96} className="relative h-11 w-11 object-contain" />
      </div>
      <span aria-hidden="true" className="absolute right-6 top-6 font-display text-xs font-semibold tracking-[0.2em] text-slate-soft/70">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-6 font-display text-lg font-medium tracking-tight text-navy-900 sm:text-xl">{service.title}</h3>
      <p className="mt-2 text-[0.78rem] font-medium tracking-wide text-slate-soft">
        {service.tags.join(" • ")}
      </p>
    </motion.article>
  );
}
