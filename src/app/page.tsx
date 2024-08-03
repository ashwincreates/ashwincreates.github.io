import { Container, Stack, Typography } from "@mui/joy";

export default function Home() {
  return (
    <>
      <Container component='section' sx={{ height: '100vh' }}>
        <Stack position="relative">
          <Typography
            display={'inline'}
            fontSize={{ xs: 36, sm: 52, md: 64 }}
            marginTop={22}
            fontFamily="Unbounded"
          >
            Hi, I am Ashwin
          </Typography>
          <Typography level="body-lg" color="neutral" fontFamily="Unbounded">
            A web developer and a tech enthusiast
          </Typography>
        </Stack>
      </Container>
      <Container component='section' sx={{ height: '100vh' }}>
        Skills
      </Container>
    </>
  );
}
