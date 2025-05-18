"use client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MailIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function Intro() {
  return (
    <section className="h-[100vh] px-6 md:px-24">
      <div className="space-y-4 pt-40">
        <h1 className="text-6xl text-stone-100 font-display">
          Hi, I am Ashwin
        </h1>
        <h3 className="text-md font-display text-stone-400">
          Software Engineer
        </h3>
      </div>
      <div className="flex gap-4 items-center mt-40">
        <span className="text-stone-300 font-display text-sm">Say Hi 👋</span>
        <Link href="mailto:ashwin200113@gmail.com" passHref>
          <Button variant="link" size="icon">
            <MailIcon />
          </Button>
        </Link>
        <Link href="https://www.github.com/ashwincreates" target="_blank" passHref>
          <Button variant="link" size="icon">
            <FontAwesomeIcon icon={faGithub} />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Intro;
