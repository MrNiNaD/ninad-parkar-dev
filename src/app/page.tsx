import About from "@/component/About";
import Header from "@/component/Header";
import Project from "@/component/Project";
import Skills from "@/component/Skills";
import Title from "@/component/Title";
import Work from "@/component/Work";

export default function Home() {
  return (
    <>
      <Header />
      <Title />
      <About />
      <Skills />
      <Project />
      <Work />
    </>
  );
}
