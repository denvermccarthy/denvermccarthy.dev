"use client";
import React, { PropsWithChildren } from "react";
import Footer from "@/components/ui/footer";
import ExperienceSection from "./work/ExperienceSection";
// import ProjectSection from "./work/ProjectSection";
// import AboutSection from "./about/AboutSection";

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
    <div className="mb-16 md:mb-36 lg:flex lg:flex-col  lg:justify-between lg:py-12 xl:py-48 lg:mb-0">
      <HeroText />
      <HeroImage />
    </div>
  );
}

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-10/12 px-6 ">
        <div className="lg:max-w-7xl">{children}</div>
      </div>
    </div>
  );
}

function Nav() {
  const NAV_ITEMS = ["experience", "projects", "bio", "contact", "writing"];

  return (
    <div className="h-screen w-full flex">
      <div className="h-1/6"></div>
      <nav>
        <div className="h-1/6"></div>
        <ul>
          {NAV_ITEMS.map((name) => (
            <NavItem key={name} name={name} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

type NavItemProps = { name: string };

function NavItem({ name }: NavItemProps) {
  return <li className="py-4 text-2xl font-medium">{name.toUpperCase()}</li>;
}

export default function Home() {
  return (
    <Layout>
      <Nav />
    </Layout>
  );
}
