"use client";
import { animate } from "@/utils/clientUtils";
import { ShinyText } from "./ShinyText";
import { motion } from "motion/react";
import Slideshow from "./SlideShow";

function Featured() {
  return (
    <motion.section
      {...animate(9)}
      id="featured"
      className="px-6 space-y-10 max-w-6xl m-auto"
    >
      <Slideshow
        images={["/diamond3.png", "/diamond1.png"]}
      />
      <div className="max-w-4xl m-auto space-x-10 flex items-start justify-between">
        <div>
          <ShinyText className="text-2xl font-display">Lustre</ShinyText>
          <p className="text-lg text-slate-500 pt-4">
            An interactive 3D jewellery showcase that captures light, motion,
            and craftsmanship — built with Three.js and precision rendering.
          </p>
        </div>
        <div>{/* More items here */}</div>
      </div>
    </motion.section>
  );
}

export default Featured;
