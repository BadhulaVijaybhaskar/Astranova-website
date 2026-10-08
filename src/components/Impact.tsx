import Image from "next/image";
import { impactSection, stats } from "@/content/site";
import StatItem from "./StatItem";
import Reveal from "./Reveal";

export default function Impact() {
  return (
    <section aria-labelledby="impact-heading" className="section-pad relative">
      <div className="container-wide">
        <div className="relative isolate overflow-hidden rounded-[2.25rem] luminous-border">
          <Image
            src="/background-impact-section.png"
            alt=""
            fill
            sizes="(max-width: 1360px) 100vw, 1360px"
            className="-z-20 object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-white/78 via-white/58 to-white/82" />
          <div className="px-6 pt-14 text-center sm:px-10 sm:pt-16">
            <Reveal y={16}>
              <p className="eyebrow flex items-center justify-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-electric via-cyan-aurora to-coral" />
                {impactSection.eyebrow}
              </p>
              <h2
                id="impact-heading"
                className="mx-auto mt-4 max-w-2xl font-display text-[clamp(1.9rem,3.8vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em] text-navy-900 text-balance"
              >
                <span className="block">{impactSection.titleLine1}</span>
                <span className="block">{impactSection.titleLine2}</span>
              </h2>
            </Reveal>
          </div>
          <div className="mx-4 mb-4 mt-10 grid grid-cols-2 divide-navy-900/[0.08] rounded-[1.75rem] bg-white/70 backdrop-blur-md sm:mx-8 sm:mb-8 lg:grid-cols-4 lg:divide-x">
            {stats.map((s) => (
              <div key={s.label}>
                <StatItem stat={s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
