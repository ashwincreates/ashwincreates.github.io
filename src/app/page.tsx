import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";

export default async function Home() {
  return (
    <main className="relative">
      <Intro />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
