import Nav from "@/components/ui/Nav";
import RevealObserver from "@/components/ui/RevealObserver";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Projects from "@/components/sections/Projects";
import Writing from "@/components/sections/Writing";
import Build from "@/components/sections/Build";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <div id="top" />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Projects />
        <Writing />
        <Build />
        <Contact />
      </main>
      <RevealObserver />
    </>
  );
}
