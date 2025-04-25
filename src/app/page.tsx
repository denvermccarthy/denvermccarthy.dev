"use client";
import React, { PropsWithChildren } from "react";
import ExperienceSection from "./work/ExperienceSection";
import { Link, Element } from "react-scroll";
import { useInViewHashUpdater } from "@/hooks/useInViewHashUpdater";
import Image from "next/image";
import profilePic from "../../public/me.png";

function HomePageText({ children }: PropsWithChildren) {
  return <p className="my-2 py-2">{children}</p>;
}

function HeroText() {
  return (
    <div className="lg:w-2/3 lg:max-w-2xl p-6">
      <header className="">
        <h1 className=" text-5xl sm:text-6xl my-2">Denver McCarthy</h1>
        <h2 className="text-lg sm:text-xl my-0">Full Stack Engineer</h2>
        <HomePageText>
          I&apos;m interested in designing and building robust, maintainable,
          and performant software solutions. I specialize in the Javascript
          ecosystem, leveraging tools like react and node.js to develop
          full-stack applications for the web and mobile devices.
        </HomePageText>
      </header>
    </div>
  );
}

function Hero() {
  return (
    <div className="min-h-[80svh] w-full flex justify-center items-center gap-6">
      <HeroText />
      <div className="hidden lg:max-w-xs lg:block">
        <Image
          alt="An image of me standing by a river"
          src={profilePic}
          objectFit="contain"
          width={500}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

function Layout({
  children,
  activeSection,
}: PropsWithChildren<{ activeSection: string }>) {
  const SECTIONS = [
    "bio",
    "experience",
    // "projects",
    // "writing",
    //  "contact"
  ];

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-10/12 px-6 md:grid md:grid-cols-4 md:gap-12">
        <Nav sections={SECTIONS} activeSection={activeSection} />

        {children}
      </div>
    </div>
  );
}

function Nav({
  sections,
  activeSection,
}: {
  sections: string[];
  activeSection: string;
}) {
  return (
    <div className="hidden py-24 w-full xl:flex justify-center md:justify-normal lg:col-span-1 ">
      <nav>
        <ul className="md:sticky md:top-[33vh]">
          {sections.map((name) => (
            <NavItem key={name} name={name} isActive={activeSection === name} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

/* TODO: Make this a layout component, figure out a way to scroll */
type NavItemProps = { name: string; isActive: boolean };

function NavItem({ name, isActive }: NavItemProps) {
  return (
    <li className="py-4 text-2xl font-medium">
      <Link
        to={name}
        smooth
        offset={-125}
        duration={750}
        className={`relative hover:font-semibold transition-all duration-500 group motion-reduce:transition-none ${
          isActive ? "font-extrabold" : ""
        }`}
        aria-label={`Navigate to ${name}`}
      >
        {name}
        <span
          className="absolute left-0 bottom-[-6px] w-full h-0 bg-[var(--foreground)] opacity-0 transition-all duration-500 ease-in-out group-hover:h-[3px] group-hover:opacity-100 motion-reduce:transition-none"
          aria-hidden="true"
        ></span>
      </Link>
    </li>
  );
}

function Section({
  name,
  children,
  setActiveSection,
}: PropsWithChildren<{
  name: string;
  setActiveSection: (name: string) => void;
}>) {
  const { ref } = useInViewHashUpdater({
    id: name,
    onUpdate: setActiveSection,
  });
  return (
    <Element name={name}>
      <section id={name} className="min-h-svh" ref={ref}>
        <h2 className="text-2xl font-semibold pb-8">{name}</h2>
        {children}
      </section>
    </Element>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = React.useState("bio");

  return (
    <>
      <Element name="bio">
        <Hero />
      </Element>
      <Layout activeSection={activeSection}>
        <div
          className="md:col-start-2 md:col-span-3 *:mb-16"
          id="scroll-container"
        >
          <Section name="experience" setActiveSection={setActiveSection}>
            <ExperienceSection />
          </Section>
          {/* <Section name="projects" setActiveSection={setActiveSection} /> */}
          {/* <Section name="writing" setActiveSection={setActiveSection} /> */}
          {/* <Section name="contact" setActiveSection={setActiveSection}></Section> */}
        </div>
      </Layout>{" "}
    </>
  );
}
