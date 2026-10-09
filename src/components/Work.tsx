import { projects, workSection } from "@/content/site";
import SectionHeading from "./SectionHeading";
import ProjectGrid from "./ProjectGrid";

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="section-pad relative bg-white">
      <div className="container-wide">
        <SectionHeading eyebrow={workSection.eyebrow} title={workSection.title} id="work-heading" />
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
