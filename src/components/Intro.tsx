"use client"
import { Container, Stack, Typography } from "@mui/joy";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Intro() {
  const ref = useRef(null!)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  return <Container ref={ref} style={{ opacity: opacity }} component={motion.section} sx={{ paddingY: 22 }} >
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
  </Container>;
}

export default Intro;