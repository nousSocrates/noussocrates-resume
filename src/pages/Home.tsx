import Hero from "../components/sections/Hero";
import { MainContainer } from "../components/layout/MainContainer";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/contact";

export default function Home() {
  return (
    <>
      {/* FULL WIDTH */}
      <Hero />
      {/* CONSTRAINED CONTENT */}
      <MainContainer>
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </MainContainer>
    </>
  );
}
