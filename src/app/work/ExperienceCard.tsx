import React from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  link: string;
}

function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
  link,
}: ExperienceCardProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 ">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"></div>

        <div className="z-10 sm:col-span-6">
          <JobTitle title={title} company={company} link={link} />
          <div className="block md:hidden">
            <TimePeriod period={period} company={company} />
          </div>
          <p className="mt-2 text-sm leading-normal text-neutral-700 dark:text-neutral-400">
            {description}
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((tech) => (
              <TechnologyBadge key={tech} tech={tech} />
            ))}
          </ul>
        </div>
        <div className="hidden md:block md:col-start-8">
          <TimePeriod period={period} company={company} />
        </div>
      </div>
    </li>
  );
}

const TechnologyBadge = ({ tech }: { tech: string }) => (
  <li key={tech} className="mr-1.5 mt-2">
    <div className="flex items-center rounded-full bg-lime-200/75 dark:bg-lime-400/20 px-3 py-1 text-xs font-medium leading-5 text-lime-900 dark:text-lime-300 transition-colors duration-200 hover:bg-lime-300 hover:text-neutral-900 dark:hover:bg-lime-300 dark:hover:text-neutral-900">
      {tech}
    </div>
  </li>
);

const TimePeriod = ({
  period,
  company,
}: {
  period: string;
  company: string;
}) => (
  <div
    className="z-10 mb-1 mt-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400 sm:col-span-2"
    aria-label={`time period at ${company}: ${period}`}
  >
    {period}
  </div>
);

const JobTitle = ({
  title,
  company,
  link,
}: {
  title: string;
  company: string;
  link: string;
}) => (
  <h3 className="font-medium leading-snug text-neutral-900 dark:text-neutral-200">
    <div>
      <a
        className="inline-flex items-baseline font-medium leading-tight text-neutral-900 dark:text-neutral-200 "
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${title} at ${company} (opens in a new tab)`}
      >
        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block z-10"></span>
        <span>
          {title} · <span className="inline-block">{company}</span>
        </span>
      </a>
    </div>
  </h3>
);

export default ExperienceCard;
