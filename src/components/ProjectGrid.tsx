"use client";

import { motion } from "framer-motion";
import type { Project } from "@/content/site";
import ProjectCard from "./ProjectCard";
import { viewOnce } from "@/lib/motion";

/**
 * The list owns the in-view trigger so every card reveals once, together with a
 * small stagger. This matters on mobile, where cards 3–4 sit off-screen inside the
 * horizontal swipe rail and would otherwise stay hidden until swiped.
 */
export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={viewOnce}
      className="-mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4"
    >
      {projects.map((p, i) => (
        <li key={p.id} className="w-[78%] shrink-0 snap-start md:w-auto">
          <ProjectCard project={p} index={i} />
        </li>
      ))}
    </motion.ul>
  );
}
