import { services, servicesSection } from "@/content/site";
import SectionHeading from "./SectionHeading";
import ServiceItem from "./ServiceItem";
import Reveal from "./Reveal";

function spanFor(i: number, total: number) {
  if (i === total - 1) return "sm:col-span-2 lg:col-span-3";
  if (i === total - 2) return "lg:col-span-3";
  return "lg:col-span-2";
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-pad relative bg-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow={servicesSection.eyebrow}
          title={
            <>
              <span className="block">{servicesSection.titleLine1}</span>
              <span className="block">{servicesSection.titleLine2}</span>
            </>
          }
          copy={servicesSection.copy}
          id="services-heading"
          align="center"
        />
        <Reveal delay={0.08} y={16} className="mt-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-navy-900/[0.06] bg-white p-2 sm:p-3">
            <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5">
              {services.map((s, i) => (
                <li key={s.id} className={`xl:col-span-1 ${spanFor(i, services.length)}`}>
                  <ServiceItem service={s} index={i} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
