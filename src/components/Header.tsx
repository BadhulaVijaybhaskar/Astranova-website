"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navigation } from "@/content/site";
import { ArrowRight } from "./Icons";
import { duration, ease } from "@/lib/motion";

/**
 * Header height: layout uses fixed --header-h so hero padding never jumps (no CLS).
 * On scroll past ~50px the visual bar shortens 4–6px via padding/height transition
 * on the fixed header only (out of document flow).
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReady(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navigation.map((n) => n.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = () => Array.from(drawerRef.current?.querySelectorAll<HTMLElement>("a,button") ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab") {
        const f = focusables();
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0, y: -8 }}
      animate={ready || reduce ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: duration.headerIn, ease }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color,backdrop-filter,height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled || open
          ? "border-white/70 bg-white/88 shadow-[0_8px_28px_-18px_rgba(22,40,90,0.35)] backdrop-blur-xl"
          : "border-transparent bg-white/45 backdrop-blur-md"
      }`}
      style={{ height: scrolled ? "var(--header-h-scrolled)" : "var(--header-h)" }}
    >
      <div className="container-wide flex h-full items-center justify-between gap-6">
        <a href="#home" className="relative flex shrink-0 items-center" aria-label="Astranova, back to top">
          <Image
            src="/astranova-logo-wordmark.png"
            alt="Astranova"
            width={1850}
            height={375}
            priority
            sizes="200px"
            className={`w-auto object-contain transition-[height] duration-300 ${scrolled ? "h-7 sm:h-8" : "h-8 sm:h-9"}`}
          />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`group relative rounded-full px-3 py-2 text-[0.92rem] font-medium transition-colors duration-200 xl:px-4 ${
                      isActive ? "text-navy-900" : "text-slate-ink hover:text-navy-900"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-0.5 h-[2px] origin-center rounded-full bg-gradient-to-r from-electric via-cyan-aurora to-violet-aurora transition-transform duration-200 xl:inset-x-4 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn-aurora hidden whitespace-nowrap rounded-full px-5 py-3 font-display text-[0.75rem] font-semibold uppercase tracking-[0.14em] sm:inline-flex xl:px-6"
          >
            Build what&apos;s next <span className="btn-arrow"><ArrowRight /></span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/10 bg-white/70 text-navy-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="relative block h-3.5 w-5">
              <span className={`absolute left-0 top-0 h-[1.6px] w-5 rounded bg-current transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[6px] h-[1.6px] w-5 rounded bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[12px] h-[1.6px] w-5 rounded bg-current transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
            className="absolute inset-x-0 top-full h-[calc(100svh-var(--header-h))] overflow-y-auto border-t border-white/80 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-violet-aurora/15 blur-3xl" />
            <nav aria-label="Mobile" className="container-wide relative py-8">
              <ul className="flex flex-col">
                {navigation.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.04 * i + 0.05, duration: 0.35, ease }}
                    className="border-b border-navy-900/[0.07]"
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active === item.href ? "location" : undefined}
                      className="flex items-center justify-between py-5 font-display text-2xl font-medium tracking-tight text-navy-900"
                    >
                      {item.label}
                      <ArrowRight className="h-5 w-5 text-slate-soft" />
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-aurora mt-10 flex w-full items-center justify-center rounded-full px-6 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em]"
              >
                Build what&apos;s next <span className="btn-arrow"><ArrowRight /></span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
