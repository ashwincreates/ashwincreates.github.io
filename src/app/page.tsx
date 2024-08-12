"use client"
import { SkillCard } from "@/components/SkillCard";
import { Box, Card, Container, Grid, Stack, Step, StepIndicator, Stepper, Typography } from "@mui/joy";
import { AngularOriginal, FlutterOriginal, GoOriginal, HaskellOriginal, JavaOriginal, NodejsOriginal, PythonOriginal, ReactOriginal, RustOriginal, TypescriptOriginal } from "devicons-react";

export default function Home() {
  return (
    <>
      <Container component='section' sx={{ paddingTop: 22, height: '100vh' }}>
        <Stack position="relative">
          <Typography
            display={'inline'}
            fontSize={{ xs: 36, sm: 52, md: 64 }}
            fontFamily="Unbounded"
          >
            Hi, I am Ashwin
          </Typography>
          <Typography level="body-lg" color="neutral" fontFamily="Unbounded">
            A web developer and a tech enthusiast
          </Typography>
        </Stack>
      </Container>
      <Container component='section' sx={{ paddingTop: 22, height: '100vh' }}>
        <Grid sx={{ margin: 'auto' }} md={8} container gap={4} justifyContent='center'>
          <SkillCard title="typescript"><TypescriptOriginal size={46}/></SkillCard>
          <SkillCard title="flutter"><FlutterOriginal size={46}/></SkillCard>
          <SkillCard title="react"><ReactOriginal size={46}/></SkillCard>
          <SkillCard title="nodejs"><NodejsOriginal size={46}/></SkillCard>
          <SkillCard title="go"><GoOriginal size={46}/></SkillCard>
          <SkillCard title="angular"><AngularOriginal size={46}/></SkillCard>
          <SkillCard title="java"><JavaOriginal size={46}/></SkillCard>
          <SkillCard title="python"><PythonOriginal size={46}/></SkillCard>
          <SkillCard title="haskell"><HaskellOriginal size={46}/></SkillCard>
          <SkillCard title="rust"><RustOriginal size={46}/></SkillCard>
        </Grid>
      </Container>
      <Container maxWidth='md' component='section' sx={{ paddingTop: 22, height: '100vh' }}>
        <Stepper>
          <Step indicator={<StepIndicator/>} orientation='vertical'>
            Internship at Enquero
            <Typography level='body-xs'>Mar 2023 - July 2023</Typography>
          </Step>
          <Step indicator={<StepIndicator/>} orientation='vertical'>
            SDE Enquero
            <Typography level='body-xs'>July 2023 - present</Typography>
          </Step>
        </Stepper>
      </Container>
    </>
  );
}

