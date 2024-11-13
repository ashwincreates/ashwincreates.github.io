import { getProjects } from "@/api/projects";
import ProjectCard from "@/components/ProjectCard";

export default async function Projects() {
  const projects = await getProjects();
  return (
    <main className="md:ml-[96px] relative px-4 md:px-24">
      <h1 className="text-6xl text-stone-100 font-display my-36">Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </main>
  );
}
