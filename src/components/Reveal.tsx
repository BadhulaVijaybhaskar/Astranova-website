"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { ease, viewOnce } from "@/lib/motion";
import { useIsMobile } from "@/hooks/useIsMobile";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  /** Desktop Y offset in px (capped on mobile). Default 24. */
  y?: number;
  duration?: number;
};

/**
 * Viewport reveal (once). Transform + opacity only.
 * Mobile: smaller Y. Reduced motion: fade only / instant final.
 */
export default function Reveal({ delay = 0, y = 24, duration = 0.65, children, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  const travel = mobile ? Math.min(y, 12) : y;

  if (reduce) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewOnce}
        transition={{ duration: 0.35, delay: delay * 0.3 }}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: travel }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewOnce}
      transition={{ duration, delay, ease }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
