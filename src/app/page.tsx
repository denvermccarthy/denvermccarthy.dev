"use client";
import React, { PropsWithChildren, useState } from "react";
import Footer from "@/components/ui/footer";
import ExperienceSection from "./work/ExperienceSection";
import ProjectSection from "./work/ProjectSection";
import AboutSection from "./about/AboutSection";

function HomePageText({ children }: PropsWithChildren) {
  return <p className="my-2 py-2">{children}</p>;
}

function HeroText() {
  return (
    <div className="md:w-3/5 lg:w-1/2 mt-12 ">
      <header className="">
        <h1 className="text-5xl sm:text-6xl my-2">Denver McCarthy</h1>
        <h2 className="text-lg sm:text-xl my-0">Full Stack Engineer</h2>
        <HomePageText>
          I&apos;m interested in designing and building robust, maintainable,
          and performant software solutions. I specialize in the Javascript
          ecosystem, leveraging tools like react and node.js to develop
          full-stack applications for the web and mobile devices.
        </HomePageText>
        <HomePageText>
          This project is in active development, check back soon for more
          features!
        </HomePageText>
      </header>
    </div>
  );
}

function HeroImage() {
  return <div className="lg:w-1/2"></div>;
}

function Hero() {
  return (
    <div className="min-h-[70vh] lg:flex lg:flex-col  lg:justify-between lg:py-12 xl:py-48 ">
      <HeroText />
      <HeroImage />
    </div>
  );
}

export default function Home() {
  return (
    <div className="">
      <div className="w-10/12 px-6 lg:w-screen lg:flex lg:justify-center">
        <div className="lg:max-w-7xl">
          <Hero />
          <ExperienceSection />
          {/* <ProjectSection /> */}
          {/* <AboutSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
