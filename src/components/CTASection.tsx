"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cta } from "@/content/site";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";
import AddressLink from "./AddressLink";
import { ease } from "@/lib/motion";

/**
 * CTA + contact form (front-end only).
 * Submit validates, then opens a mailto with the composed message.
 * Swap handleSubmit for an API route / form service when ready (see README).
 */
export default function CTASection() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const reduce = useReducedMotion();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Please fill in name, email and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const subject = `Enquiry from ${name}${company ? ` (${company})` : ""}`;
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\n\n${message}`;
    window.location.href = `mailto:${cta.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    form.reset();
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-pad relative">
      <div className="container-wide">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white via-sky-pale/70 to-white px-6 py-14 luminous-border sm:px-12 sm:py-16 lg:px-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[26rem] w-[26rem] rounded-full bg-violet-aurora/15 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-[24rem] w-[24rem] rounded-full bg-cyan-aurora/15 blur-3xl" />
          <Image
            src="/accent-aurora-wave-03.png"
            alt=""
            width={609}
            height={579}
            className="pointer-events-none absolute -right-8 top-0 -z-10 w-64 opacity-50 sm:w-80"
          />

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start">
            <Reveal y={18} className="lg:col-span-5">
              <h2
                id="contact-heading"
                className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-medium uppercase leading-[1.02] tracking-[-0.03em] text-navy-900 text-balance"
              >
                <span className="text-aurora">{cta.title}</span>
              </h2>
              <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-slate-ink text-pretty">
                {cta.copy}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={cta.primary.href}
                  className="btn-aurora rounded-full px-7 py-4 font-display text-[0.78rem] font-semibold uppercase tracking-[0.14em]"
                >
                  {cta.primary.label} <span className="btn-arrow"><ArrowRight /></span>
                </a>
                <a
                  href={cta.secondary.href}
                  className="inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white/80 px-7 py-4 font-display text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-navy-800 transition hover:border-navy-900/20"
                >
                  {cta.secondary.label}
                </a>
              </div>
              <AddressLink className="mt-8" />
            </Reveal>

            <Reveal delay={0.1} y={16} className="lg:col-span-7">
              <div className="glass rounded-[1.75rem] p-5 sm:p-7">
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="ok"
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45, ease }}
                      className="flex min-h-[280px] flex-col items-center justify-center text-center"
                      role="status"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-electric/15 to-cyan-aurora/20 text-electric">
                        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
                          <path d="M5 12.5 10 17.5 19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p className="mt-5 font-display text-xl font-medium text-navy-900">{cta.formSuccess}</p>
                      <button
                        type="button"
                        className="mt-6 text-sm font-medium text-electric underline-offset-4 hover:underline"
                        onClick={() => setSent(false)}
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      noValidate
                      initial={false}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                      aria-describedby={error ? "form-error" : "form-note"}
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span className="form-label">Name</span>
                          <input name="name" required autoComplete="name" className="form-field" placeholder="Your name" />
                        </label>
                        <label className="block">
                          <span className="form-label">Email</span>
                          <input name="email" type="email" required autoComplete="email" className="form-field" placeholder="you@company.com" />
                        </label>
                      </div>
                      <label className="block">
                        <span className="form-label">Company <span className="font-normal text-slate-soft">(optional)</span></span>
                        <input name="company" autoComplete="organization" className="form-field" placeholder="Company name" />
                      </label>
                      <label className="block">
                        <span className="form-label">Message</span>
                        <textarea name="message" required rows={4} className="form-field resize-y" placeholder="What are you looking to build?" />
                      </label>
                      {error ? (
                        <p id="form-error" className="text-sm text-coral" role="alert">
                          {error}
                        </p>
                      ) : (
                        <p id="form-note" className="text-xs text-slate-soft">
                          Submitting opens your email app with your message prefilled.
                        </p>
                      )}
                      <button
                        type="submit"
                        className="btn-aurora mt-2 w-full justify-center rounded-full px-7 py-4 font-display text-[0.8rem] font-semibold uppercase tracking-[0.14em] sm:w-auto"
                      >
                        Send message <span className="btn-arrow"><ArrowRight /></span>
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
