"use client";

import { MotionProps } from "framer-motion";

export const isClient = () => typeof window !== "undefined";

export const animate = (seq: number): MotionProps => {
  return {
    transition: {
      ease: "easeIn",
      duration: 0.5 + 0.1 * seq,
    },
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
  };
};
