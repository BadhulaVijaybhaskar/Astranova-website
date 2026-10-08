"use client";

import Image, { getImageProps } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { company, hero } from "@/content/site";
import { ArrowRight } from "./Icons";
import { duration, ease, stagger } from "@/lib/motion";
import { useIsMobile } from "@/hooks/useIsMobile";

const ALT = "Futuristic glass-domed city rising above the clouds beneath a soft aurora sky";

export default function Hero() {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Subtle parallax desktop only; city/mountains stay stable (image itself doesn't shift layers)
  const yBg = useTransform(scrollYProgress, [0, 1], reduce || mobile ? [0, 0] : [0, 40]);
  const playHref = company.brandFilmUrl ?? hero.secondaryCta.href;

  const common = { alt: ALT, sizes: "100vw", priority: true } as const;
  const { props: { srcSet: desktopSrcSet } } = getImageProps({ ...common, src: "/astranova-hero-desktop.png", width: 1672, height: 941, quality: 82 });
  const { props: { srcSet: mobileSrcSet, ...mobileImg } } = getImageProps({ ...common, src: "/astranova-hero-mobile.png", width: 941, height: 1672, quality: 80 });

  const lineY = reduce ? 0 : 24;

  return (
    <section
      id="home"
      ref={ref}
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[min(100svh,920px)] flex-col overflow-hidden pt-[var(--header-h)]"
    >
      {/* Hero image: scale 1.03 → 1 over 1.5–2s */}
      <motion.div
        className="absolute inset-0 -z-20 overflow-hidden"
        style={{ y: yBg }}
        initial={reduce ? false : { scale: 1.03 }}
        animate={{ scale: 1 }}
        transition={{ duration: duration.heroImage, ease }}
      >
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
          <source media="(max-width: 767px)" srcSet={mobileSrcSet} />
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img {...mobileImg} className="h-full w-full object-cover object-[50%_70%] md:object-[70%_45%]" />
        </picture>
      </motion.div>

      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/60 to-transparent md:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-white/95 via-white/72 to-white/5 md:block" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/75 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
        {/* Aurora drift accent — desktop CSS animation */}
        <Image
          src="/accent-aurora-wave-01.png"
          alt=""
          width={931}
          height={608}
          className="pointer-events-none absolute -left-40 top-24 hidden w-[42rem] max-w-none opacity-35 mix-blend-multiply md:block animate-aurora-drift"
        />
      </div>

      {/* Giant Aurora A watermark: opacity 0→0.10–0.12, scale 0.97→1, then float ≤4px (desktop only) */}
      {!mobile ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 top-28 z-0 hidden lg:block xl:right-8"
          initial={reduce ? { opacity: 0.11, scale: 1 } : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 0.11, scale: 1 }}
          transition={{ duration: duration.watermarkIn, ease }}
        >
          <div className={reduce ? "" : "animate-watermark-float"}>
            <Image
              src="/astranova-logo-symbol-trimmed.png"
              alt=""
              width={520}
              height={552}
              className="h-[min(52vh,420px)] w-auto object-contain"
              priority
            />
          </div>
        </motion.div>
      ) : null}

      <div className="container-wide relative z-10 flex flex-1 flex-col justify-center pb-20 pt-14 md:pb-28 md:pt-20">
        <div className="max-w-[40rem]">
          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.7rem,6.6vw,5.6rem)] font-medium uppercase leading-[0.98] tracking-[-0.035em] text-navy-900"
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: lineY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.heroLine, ease }}
            >
              {hero.titleLine1}
            </motion.span>
            <motion.span
              className="mt-2 inline-block text-aurora animate-shimmer pb-1"
              initial={{ opacity: 0, y: lineY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.heroLine, delay: stagger.heroLines, ease }}
            >
              {hero.titleLine2}
            </motion.span>
          </h1>

          <motion.p
            className="mt-7 max-w-[30rem] text-[1.06rem] leading-relaxed text-navy-700 text-pretty sm:text-lg"
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: stagger.heroLines + duration.heroBodyDelay,
              ease,
            }}
          >
            {hero.copy}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-5"
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: stagger.heroLines + duration.heroBodyDelay + 0.08,
              ease,
            }}
          >
            <a
              href={hero.primaryCta.href}
              className="btn-aurora rounded-full px-7 py-4 font-display text-[0.78rem] font-semibold uppercase tracking-[0.14em]"
            >
              {hero.primaryCta.label} <span className="btn-arrow"><ArrowRight /></span>
            </a>

            <a
              href={playHref}
              className="group inline-flex items-center gap-3 rounded-full py-1 pr-2 font-display text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-navy-800"
            >
              <span className="relative inline-flex h-14 w-14 items-center justify-center">
                <span aria-hidden="true" className="absolute inset-0 rounded-full bg-gradient-to-br from-electric/40 via-cyan-aurora/30 to-coral/40 opacity-60 blur-md transition duration-500 group-hover:opacity-100" />
                <Image
                  src="/icon-play-button.png"
                  alt=""
                  width={112}
                  height={112}
                  className="relative h-14 w-14 object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </span>
              <span className="underline-offset-8 group-hover:underline">{hero.secondaryCta.label}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
