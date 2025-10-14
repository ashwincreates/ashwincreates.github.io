"use client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MailIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { animate } from "@/utils/clientUtils";

function Intro() {
  return (
    <section className="relative h-[100vh] px-6 md:px-48 md:pr-24">
      <div className="space-y-8 max-w-5xl m-auto pt-48 text-center">
        <h1 className="text-2xl md:text-5xl text-slate-100 font-display">
          <motion.span {...animate(0)}>Crafting </motion.span>
          <motion.span {...animate(1)}>the next </motion.span>
          <motion.span {...animate(2)}>generation of </motion.span>
          <br />
          <motion.span {...animate(3)}> AI-driven applications.</motion.span>
        </h1>
        <h3 className="text-sm md:text-lg max-w-2xl m-auto font-display text-slate-400">
          <motion.span {...animate(4)}>I’m Ashwin Sharma, </motion.span>
          <motion.span {...animate(5)}>
            a full-stack engineer blending{" "}
          </motion.span>
          <motion.span {...animate(6)}>React, TypeScript and AI </motion.span>
          <motion.span {...animate(7)}>
            to build smart, scalable solutions.
          </motion.span>
        </h3>
      </div>
      <motion.div
        {...animate(8)}
        className="flex gap-4 items-center mt-40 justify-center"
      >
        <span className="text-slate-300 font-display text-sm">Say Hi 👋</span>
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
      </motion.div>
    </section>
  );
}

export default Intro;
