import { getProjects } from "@/api/projects";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";

export default async function Home() {
  const projects = await getProjects();
  return (
    <main className="md:ml-[96px] relative">
      <Intro />
      <section id="work" className="relative px-6 md:px-24 pb-24">
        <h1 className="text-4xl text-stone-100 font-display py-24">Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => {
            return <ProjectCard key={project.name} project={project} />;
          })}
        </div>
      </section>
      <Skills />
      <Experience />
    </main>
  );
}
