import React from "react";
import ExperienceCard from "./ExperienceCard";
import { WORK_EXPERIENCES } from "@/constants/work";

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-svh mb-16 md:mb-24 lg:mb-36 "
      aria-label="Work experience"
    >
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
