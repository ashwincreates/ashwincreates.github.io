import { getProjects } from "@/api/projects";
import ProjectCard from "@/components/Card";
import ProjectGrid from "@/components/ProjectGrid";
import { Grid, Stack, Typography } from "@mui/joy";

export default async function Projects() {
  const projects = await getProjects();
  return <Stack>
    <Typography
      fontSize={{ xs: 56, md: 64 }}
      marginTop={22}
      marginBottom={11}
      fontFamily="Unbounded"
    >Projects</Typography>
    <ProjectGrid projects={projects}/>
  </Stack>
}
