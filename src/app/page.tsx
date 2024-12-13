import React, { PropsWithChildren } from "react";
import Footer from "@/components/footer";

function HomePageText({ children }: PropsWithChildren) {
  return <p className="py-2 my-2">{children}</p>;
}

function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Interaptiv Media",
      period: "October 2024 — Present",
      description:
        "Currently, I'm leading the architecture and development of a SaaS product on the HubSpot Marketplace, including implementing a secure OAuth flow with token storage and selecting a scalable technology stack to align with business goals.",
      technologies: ["TypeScript", "React", "Node.js", "Express", "HubSpot"],
      link: "https://www.interaptiv.com",
    },
    {
      title: "Software Engineer",
      company: "Pop Art",
      period: "October 2022 — February 2024",
      description:
        "Developed a reusable rendering engine for dynamic form components, accelerating custom client form development by 3-5x. Upgraded runtimes and resolved package deprecations across 10+ backend services. Refactored critical analytics service, reducing time-to-load for large datasets from 10s to under 1.5s. Led React Native application upgrades across 10 minor versions.",
      technologies: ["React", "React Native", "Node.js", "AWS", "TypeScript"],
      link: "https://bamsales.io",
    },
    // Add more experiences as needed
  ];

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 ">
        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-200">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
  link,
}: any) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-100 dark:lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-lg"></div>

        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-neutral-900 dark:text-neutral-200">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-neutral-900 dark:text-neutral-200 hover:text-lime-600 dark:hover:text-lime-300 focus-visible:text-lime-600 dark:focus-visible:text-lime-300 group/link text-base transition-colors duration-200"
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${title} at ${company} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {title} · <span className="inline-block">{company}</span>
                </span>
              </a>
            </div>
          </h3>
          <div
            className="block md:hidden z-10 mb-1 mt-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400 sm:col-span-2"
            aria-label={`time period at ${company}: ${period}`}
          >
            {period}
          </div>
          <p className="mt-2 text-sm leading-normal text-neutral-700 dark:text-neutral-400">
            {description}
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((tech: string) => (
              <li key={tech} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-lime-400/10 dark:bg-lime-400/20 px-3 py-1 text-xs font-medium leading-5 text-lime-500 dark:text-lime-300 transition-colors duration-200 hover:bg-lime-300 hover:text-neutral-900 dark:hover:bg-lime-300 dark:hover:text-neutral-900">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="hidden md:block z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400 sm:col-span-2"
          aria-label={`time period at ${company}: ${period}`}
        >
          {period}
        </div>
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:flex-grow lg:justify-between lg:gap-4 ">
        <header className="lg:flex lg:max-h-screen max-w-md lg:flex-col lg:justify-between lg:py-24">
          <h1 className="text-6xl lg:my-2">Denver McCarthy</h1>
          <h2 className="text-xl my-2 py-1 lg:my-0">Full Stack Engineer</h2>
          <HomePageText>
            I&apos;m passionate about designing and building robust,
            maintainable, and performant software solutions. I specialize in the
            Javascript ecosystem, leveraging tools like react and node.js to
            develop full-stack applications for the web and mobile devices.
          </HomePageText>
          <HomePageText>
            This project is in active development, check back soon for more
            features!
          </HomePageText>
        </header>
      </div>
      <div className="pt-12 lg:pt-24">
        <ExperienceSection />
      </div>

      <Footer />
    </div>
  );
}
