import { Project } from "@/types/Projects";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}
function ProjectCard(props: ProjectCardProps) {
  const { project } = props;
  return (
    <Card>
      <CardContent className="p-0">
        <CardHeader className="p-0 m-3 rounded-lg overflow-hidden">
          <Image height={600} width={900} alt={project.name} src={project.imageUrl} />
        </CardHeader>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <h3 className="capitalize text-md font-display text-stone-300">
          {project.name}
        </h3>
        <p className="text-sm text-stone-500">{project.description}</p>
        <div className="flex justify-between gap-4 self-stretch mt-4">
          <div className="flex gap-2">
            {project.topics
              .filter((t) => t !== "showcase")
              .map((topic) => (
                <span key={topic} className="border border-stone-500 text-stone-500 rounded-full px-3 h-[1.8rem] align-middle flex items-center text-xs leading-0">{topic}</span>
              ))}
          </div>
          <Link target="_blank" href={project.url} className="justify-self-end">
            <Button variant='outline' size='icon'>
              <ArrowTopRightOnSquareIcon height={18} />
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
