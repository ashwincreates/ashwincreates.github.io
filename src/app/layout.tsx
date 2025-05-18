import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import "./index.css";
import Footer from "@/components/Footer";
import Frost from "@/components/Frost";

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
    <html lang="en" className="dark">
      <body>
        <Frost />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
