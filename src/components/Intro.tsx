"use client"
import { Container, Stack, Typography } from "@mui/joy";

function Intro() {
  return <Container component='section' sx={{ paddingY: 22 }} >
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