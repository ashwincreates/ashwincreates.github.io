import { Card, Container, Stack, Typography } from "@mui/joy";

export default function Home() {
  return (
    <>
      <Container component='section' sx={{paddingTop: 22, paddingBottom: 36}}>
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
      <Container component='section'>
      </Container>
    </>
  );
}
