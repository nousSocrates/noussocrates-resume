import Hero from "../components/sections/Hero";
import { MainContainer } from "../components/layout/MainContainer";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";

export default function Home() {
  return (
    <>
      {/* FULL WIDTH */}
      <Hero />
      {/* CONSTRAINED CONTENT */}
      <MainContainer>
        <Skills />
        <Projects />
        < Experience/>
      </MainContainer>
    </>
  );
}
