"use client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MailIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function Intro() {
  return (
    <section className="relative h-[100vh] px-6 md:px-48 md:pr-24">
      <div className="space-y-8 max-w-5xl m-auto pt-48 text-center">
        <h1 className="text-2xl md:text-5xl text-stone-100 font-display">
          Crafting the next generation of <br /> AI-driven applications.
        </h1>
        <h3 className="text-sm md:text-lg max-w-2xl m-auto font-display text-stone-400">
          I’m Ashwin Sharma, a full-stack engineer blending React, TypeScript,
          and AI to build smart, scalable solutions.
        </h3>
      </div>
      <div className="flex gap-4 items-center mt-40 justify-center">
        <span className="text-stone-300 font-display text-sm">Say Hi 👋</span>
        <Link href="mailto:ashwin200113@gmail.com" passHref>
          <Button variant="link" size="icon">
            <MailIcon />
          </Button>
        </Link>
        <Link
          href="https://www.github.com/ashwincreates"
          target="_blank"
          passHref
        >
          <Button variant="link" size="icon">
            <FontAwesomeIcon icon={faGithub} />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Intro;
