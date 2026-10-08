import { ventures, venturesSection } from "@/content/site";
import SectionHeading from "./SectionHeading";
import VentureCard from "./VentureCard";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";

export default function Ventures() {
  return (
    <section id="ventures" aria-labelledby="ventures-heading" className="section-pad relative overflow-hidden bg-mist/50">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-aurora/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-violet-aurora/10 blur-3xl" />

      <div className="container-wide">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={venturesSection.eyebrow}
            title={
              <>
                <span className="block">{venturesSection.titleLine1}</span>
                <span className="block">{venturesSection.titleLine2}</span>
              </>
            }
            copy={venturesSection.copy}
            id="ventures-heading"
            className="max-w-2xl"
          />
          <Reveal delay={0.12} y={12} className="shrink-0">
            <a
              href={venturesSection.cta.href}
              className="inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-5 py-3 font-display text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-navy-800 shadow-sm transition hover:border-navy-900/20"
            >
              {venturesSection.cta.label} <ArrowRight />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {ventures.map((v, i) => (
            <VentureCard key={v.id} venture={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
