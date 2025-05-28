import { getProjects } from "@/api/projects";
import ProjectCard from "./ProjectCard";

export const Projects = async () => {
  const projects = await getProjects();
  return (
      <section id="work" className="relative px-6 md:pl-48 md:pr-24 pb-24">
        <h1 className="text-3xl md:text-4xl text-stone-100 font-display py-24">Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => {
            return <ProjectCard key={project.name} project={project} />;
          })}
        </div>
      </section>
  )
}
