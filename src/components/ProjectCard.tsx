"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/content/site";
import { ArrowUpRight } from "./Icons";
import { duration, ease, viewOnce } from "@/lib/motion";
import { useIsMobile } from "@/hooks/useIsMobile";

const tints = [
  "from-sky-pale via-white to-cyan-aurora/20",
  "from-violet-aurora/15 via-white to-sky-pale",
  "from-coral/15 via-ivory to-amber-glow/15",
  "from-electric/10 via-white to-violet-aurora/15",
];

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  const Wrapper = project.href ? motion.a : motion.div;
  const y = reduce ? 0 : mobile ? 10 : 20;

  return (
    <motion.article
      className="group h-full"
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewOnce}
      transition={{ duration: duration.workIn, delay: index * 0.07, ease }}
    >
      <Wrapper
        {...(project.href ? { href: project.href } : {})}
        className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white luminous-border transition duration-300 hover:-translate-y-1"
      >
        <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${tints[index % tints.length]}`}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <>
              <Image
                src="/accent-aurora-wave-02.png"
                alt=""
                width={1337}
                height={191}
                className="absolute bottom-8 left-1/2 w-[150%] max-w-none -translate-x-1/2 opacity-80 transition duration-500 group-hover:translate-x-[-48%]"
              />
              <Image
                src="/astranova-logo-symbol-trimmed.png"
                alt=""
                width={120}
                height={127}
                className="absolute left-1/2 top-1/2 h-16 w-auto -translate-x-1/2 -translate-y-1/2 object-contain opacity-80 sm:h-20"
              />
            </>
          )}
          {project.placeholder ? (
            <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-ink backdrop-blur">
              Coming soon
            </span>
          ) : null}
        </div>
        <div className="relative flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-soft transition-colors duration-300 group-hover:text-electric">
            {project.industry} <span aria-hidden="true">·</span> {project.service}
          </p>
          <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-navy-900">{project.title}</h3>
          <span
            aria-hidden="true"
            className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-mist text-navy-800 transition duration-300 group-hover:translate-x-1 group-hover:bg-navy-900 group-hover:text-white"
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Wrapper>
    </motion.article>
  );
}
