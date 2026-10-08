import { projects, workSection } from "@/content/site";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="section-pad relative bg-white">
      <div className="container-wide">
        <SectionHeading eyebrow={workSection.eyebrow} title={workSection.title} id="work-heading" />
        <ul className="-mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4">
          {projects.map((p, i) => (
            <li key={p.id} className="w-[78%] shrink-0 snap-start md:w-auto">
              <ProjectCard project={p} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
