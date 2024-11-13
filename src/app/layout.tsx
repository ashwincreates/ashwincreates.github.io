import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import "./index.css";
import NavMenu from "@/components/NavMenu";
import { CopyrightIcon } from "lucide-react";
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
      <body
        className="bg-stone-950"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #27272a 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      >
        <NavBar/>
        <Frost/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
