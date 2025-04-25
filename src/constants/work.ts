interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  link: string;
}
export const WORK_EXPERIENCES: WorkExperience[] = [
  // {
  //   title: "Software Engineer",
  //   company: "Interaptiv Media",
  //   period: "October 2024 — Present",
  //   description:
  //     "Currently, I'm leading the architecture and development of a SaaS product on the HubSpot Marketplace, including implementing a secure OAuth flow with token storage and selecting a scalable technology stack to align with business goals.",
  //   technologies: ["TypeScript", "React", "Node.js", "Express", "HubSpot"],
  //   link: "https://www.interaptiv.com",
  // },
  {
    title: "Software Engineer",
    company: "Pop Art",
    period: "October 2022 — February 2024",
    description:
      "Developed a reusable rendering engine for dynamic form components, accelerating custom client form development by 3-5x. Upgraded runtimes and resolved package deprecations across 10+ backend services. Refactored critical analytics service, reducing time-to-load for large datasets from 10s to under 1.5s. Led React Native application upgrades across 10 minor versions.",
    technologies: ["React", "React Native", "Node.js", "AWS", "TypeScript"],
    link: "https://bamsales.io",
  },
];
