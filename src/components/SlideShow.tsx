"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slideshow({ slides }: { slides: { image: string }[] }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((i) => (i + 1) % slides.length);
  const prevSlide = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <Card className="relative w-full max-w-4xl mx-auto overflow-hidden bg-slate-900 border-slate-800 shadow-lg rounded-2xl aspect-video">
      <CardContent className="p-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src={slides[index].image}
              className="w-full aspect-video object-cover opacity-90"
            />
          </motion.div>
        </AnimatePresence>
      </CardContent>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-slate-800/60 hover:bg-slate-700/80 transition"
        >
          <ChevronLeft className="w-5 h-5 text-slate-200" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-slate-800/60 hover:bg-slate-700/80 transition"
        >
          <ChevronRight className="w-5 h-5 text-slate-200" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-0 w-full flex justify-center gap-1">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-10 h-0.5 cursor-pointer transition ${
              i === index ? "bg-slate-300" : "bg-slate-600"
            }`}
          />
        ))}
      </div>
    </Card>
  );
}
