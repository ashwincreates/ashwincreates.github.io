import { Project } from "@/types/Projects";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { Link2 } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}
function ProjectCard(props: ProjectCardProps) {
  const { project } = props;
  return (
    <Card>
      <CardContent className="p-0">
        <CardHeader className="p-0 m-3 rounded-lg overflow-hidden">
          <Image
            height={600}
            width={900}
            alt={project.name}
            src={project.imageUrl}
          />
        </CardHeader>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <h3 className="capitalize text-md font-display text-slate-300">
          {project.name}
        </h3>
        <p className="text-sm text-slate-500">{project.description}</p>
        <div className="flex justify-between gap-4 self-stretch mt-4">
          <div className="flex gap-2 flex-wrap">
            {project.topics
              .filter((t) => t !== "showcase")
              .map((topic) => (
                <div
                  key={topic}
                  className="border w-min-content border-slate-500 text-slate-500 rounded-full px-3 h-[1.8rem] align-middle flex items-center text-xs leading-0"
                >
                  {topic}
                </div>
              ))}
          </div>
          <Link target="_blank" href={project.url} className="justify-self-end">
            <Button variant="outline" size="icon">
              <Link2 height={18} />
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
