import { getLocalProjects } from "@/lib/markdown";
import ProjectCard from "./ProjectCard";

export const Projects = async () => {
  const projects = getLocalProjects();
  return (
    <section id="work" className="relative px-6 py-24 max-w-6xl m-auto space-y-16">
      <div className="flex items-center gap-4">
        <span className="font-pixel text-primary text-xl">&gt;&gt;</span>
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-5xl text-foreground font-display font-bold tracking-tight">
            PROJECT SHOWCASE
          </h2>
          <span className="font-sans text-xs text-muted-foreground uppercase tracking-widest font-semibold mt-1">
            PROVEN SOLUTIONS // CREATED FOR VALUE
          </span>
        </div>
        <div className="h-[2px] bg-border flex-grow" />
      </div>

      <div className="grid grid-cols-1 gap-16">
        {projects.map((project) => {
          return <ProjectCard key={project.title} project={project} />;
        })}
      </div>
    </section>
  );
};
