import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
import NavBar from "@/components/NavBar";
import "./index.css";
import { Container } from "@mui/joy";
import NavMenu from "@/components/NavMenu";

export const metadata: Metadata = {
  title: "Ashwin Sharma",
  description: "web portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "joy" }}>
          <NavMenu/>
          <NavBar />
          <Container sx={{ marginLeft: { sm: "64px", md: undefined}, width: { sm: 'calc(100% - 64px)' }, margin: { lg: 'auto' } }}>{children}</Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
