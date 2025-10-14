import Experience from "@/components/Experience";
import Featured from "@/components/Featured";
import Intro from "@/components/Intro";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";

export default async function Home() {
  return (
    <main className="relative">
      <Intro />
      <Featured />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
