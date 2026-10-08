"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { company, footer, ventures } from "@/content/site";
import { ArrowRight, SocialIcon } from "./Icons";
import { duration, ease, viewOnce } from "@/lib/motion";

export default function Footer() {
  const [joined, setJoined] = useState(false);
  const year = new Date().getFullYear();
  function onSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect to newsletter provider
    setJoined(true);
  }

  return (
    <motion.footer
      className="relative isolate overflow-hidden border-t border-white bg-gradient-to-b from-mist to-sky-pale/70 pt-16 sm:pt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewOnce}
      transition={{ duration: duration.footer, ease }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/accent-aurora-wave-02.png"
          alt=""
          width={1337}
          height={191}
          className="absolute -right-40 bottom-24 w-[70rem] max-w-none opacity-45 animate-aurora-drift"
        />
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-aurora/10 blur-3xl" />
      </div>

      <div className="container-wide">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-12 lg:gap-10">
          <div className="col-span-2 lg:col-span-4">
            <Image
              src="/astranova-logo-primary.png"
              alt={company.name}
              width={2172}
              height={724}
              sizes="280px"
              className="-ml-3 h-auto w-60 object-contain sm:w-64"
            />
            <p className="mt-5 font-display text-[clamp(1.4rem,2.5vw,1.85rem)] font-medium leading-[1.15] tracking-[-0.02em] text-navy-900">
              <span className="block">{footer.statementLine1}</span>
              <span className="block text-aurora">{footer.statementLine2}</span>
            </p>
            <ul className="mt-6 flex gap-2" aria-label="Social media">
              {footer.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={`Astranova on ${s.label}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 bg-white/70 text-navy-800 transition hover:-translate-y-0.5 hover:border-electric/30 hover:text-electric"
                  >
                    <SocialIcon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className="eyebrow">Navigate</h2>
            <ul className="mt-5 space-y-3">
              {footer.companyLinks.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="footer-link text-[0.95rem] text-navy-800">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="eyebrow">Ventures</h2>
            <ul className="mt-5 space-y-3">
              {ventures.map((v) => (
                <li key={v.id}>
                  <a href="#ventures" className="footer-link text-[0.95rem] text-navy-800">
                    {v.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-4">
            <h2 className="eyebrow">{footer.newsletter.title}</h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-slate-ink">{footer.newsletter.copy}</p>
            <form onSubmit={onSubscribe} className="mt-5">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex items-center gap-2 rounded-full border border-navy-900/10 bg-white/80 p-1.5 pl-5 transition duration-[180ms] focus-within:border-electric/40 focus-within:ring-4 focus-within:ring-cyan-aurora/15">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 bg-transparent text-[0.95rem] text-navy-900 placeholder:text-slate-soft focus:outline-none"
                />
                <button type="submit" aria-label="Subscribe" className="btn-aurora inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full !px-0">
                  <span className="btn-arrow"><ArrowRight /></span>
                </button>
              </div>
              <p className="mt-3 min-h-5 text-xs text-slate-soft" aria-live="polite">
                {joined ? "Thank you. Newsletter sign-ups open soon." : ""}
              </p>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-navy-900/[0.08] py-8 text-sm text-slate-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}
          </p>
          <ul className="flex gap-5">
            {footer.legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="footer-link transition hover:text-navy-800">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.footer>
  );
}
