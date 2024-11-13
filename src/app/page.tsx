"use client"
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="md:ml-[96px] relative">
      <Intro/>
      <Skills/>
      <Experience/>
    </main>
  );
}