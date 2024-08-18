"use client"
import { Container, Stack, Typography, Grid } from "@mui/joy";
import { TypescriptOriginal, FlutterOriginal, ReactOriginal, NodejsOriginal, GoOriginal, AngularOriginal, JavaOriginal, PythonOriginal, HaskellOriginal, RustOriginal } from "devicons-react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SkillCard } from "./SkillCard";
import { isClient } from "@/utils/clientUtils";

const skills = [
    { title: 'typescript', Icon: TypescriptOriginal },
    { title: 'flutter', Icon: FlutterOriginal },
    { title: 'react', Icon: ReactOriginal },
    { title: 'nodejs', Icon: NodejsOriginal },
    { title: 'go', Icon: GoOriginal },
    { title: 'angular', Icon: AngularOriginal },
    { title: 'python', Icon: PythonOriginal },
    { title: 'haskell', Icon: HaskellOriginal },
    { title: 'rust', Icon: RustOriginal },
]

function Skills() {
    const ref = useRef(null!)

    const [height, setHeight] = useState(0)

    useEffect(() => {
           setHeight(window.innerHeight)
    }, [])

    const { scrollYProgress } = useScroll({ target: ref, offset: ["center end", "start start"] })

    return <Container ref={ref} component='section' style={{ height: height}}>
        <Stack alignItems={'center'} gap={12} paddingTop={12}>
            <Typography style={{opacity: scrollYProgress}} component={motion.div} level='title-md' color='neutral'>Stuff that I work with</Typography>
            <Grid sx={{ margin: 'auto' }} md={8} container gap={4} justifyContent='center'>
                {skills.map(({ title, Icon }, index) => <SkillCard key={title} index={index} length={skills.length} progress={scrollYProgress} title={title}><Icon size={46} /></SkillCard>)}
            </Grid>
        </Stack>
    </Container>;
}

export default Skills;