import { Stack, Typography } from "@mui/joy";

export default function Home() {
  return (
    <Stack position="relative" margin="auto" maxWidth="md">
      <Typography
        fontSize={{ xs: 32, md: 64 }}
        marginTop={22}
        fontFamily="Unbounded"
      >
        Hi, I am Ashwin
      </Typography>
      <Typography level="body-lg" color="neutral" fontFamily="Unbounded">
        A web developer and a tech enthusiast
      </Typography>
    </Stack>
  );
}
