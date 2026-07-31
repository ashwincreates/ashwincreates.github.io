"use client";

import { MotionProps } from "framer-motion";

export const isClient = () => typeof window !== "undefined";

export const animate = (seq: number): MotionProps => {
  return {
    transition: {
      ease: [0.16, 1, 0.3, 1], // Ultra-premium custom cubic-bezier ease-out
      duration: 0.5 + 0.08 * seq,
    },
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
  };
};
