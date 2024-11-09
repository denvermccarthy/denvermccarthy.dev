import React, { PropsWithChildren } from "react";
import Footer from "@/components/footer";

function HomePageText({ children }: PropsWithChildren) {
  return <p className="py-2 my-2">{children}</p>;
}

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:flex-grow lg:justify-between lg:gap-4">
        <header className="lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
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
      <Footer />
    </div>
  );
}
