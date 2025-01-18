import React from "react";
import ExperienceCard from "./ExperienceCard";
import { WORK_EXPERIENCES } from "@/constants/work";

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4  px-6 py-5 backdrop-blur md:-mx-12 md:px-12 ">
        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-200">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {WORK_EXPERIENCES.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ExperienceSection;
