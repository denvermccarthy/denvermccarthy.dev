"use client";
import React, { PropsWithChildren } from "react";
import ExperienceSection from "./work/ExperienceSection";
import { Element } from "react-scroll";
import { useInViewHashUpdater } from "@/hooks/useInViewHashUpdater";
import Image from "next/image";
import profilePic from "../../public/me.png";

function HomePageText({ children }: PropsWithChildren) {
  return <p className="my-2 py-2">{children}</p>;
}

function HeroText() {
  return (
    <div className="lg:w-2/3 flex flex-col justify-center">
      <header className="">
        <h1 className="text-5xl sm:text-6xl my-2">Denver McCarthy</h1>
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
    <div className="mx-auto mt-24 flex gap-6 w-full max-w-screen-lg px-12 xl:max-w-screen-xl">
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

function Layout({ children }: PropsWithChildren<{ activeSection: string }>) {
  return (
    <div className="mx-auto w-full max-w-screen-lg px-12 xl:max-w-screen-xl">
      {children}
    </div>
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
      <section id={name} className="min-h-svh mt-36" ref={ref}>
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
