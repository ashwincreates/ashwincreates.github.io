"use client"
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import { Stack, Typography } from "@mui/joy";

export default function Home() {
  return (
    <>
      <Intro/>
      <Skills/>
      <Experience/>
      <Stack direction='row' justifyContent='center' padding={1}>
        <Typography color='neutral' level='body-xs'>ashwincreates, 2024</Typography>
      </Stack>
    </>
  );
}