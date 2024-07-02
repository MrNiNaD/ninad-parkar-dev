import AOSWrapper from "@/component/AOSWrapper";
import About from "@/component/About";
import Contact from "@/component/Contact";
import Header from "@/component/Header";
import Project from "@/component/Project";
import Title from "@/component/Title";
import Work from "@/component/Work";

export default function Home() {
  return (
    <AOSWrapper>
      <Header />
      <Title />
      <About />
      <Project />
      <Work />
      <Contact />
    </AOSWrapper>
  );
}
