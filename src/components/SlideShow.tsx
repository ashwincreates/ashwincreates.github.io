"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideshowProps {
  images: string[];
}

export default function Slideshow({ images }: SlideshowProps) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full min-h-[250px] lg:min-h-full overflow-hidden bg-black/50 aspect-video lg:aspect-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[index]}
            className="w-full h-full object-cover transition-transform duration-700 filter saturate-[0.8] hover:scale-102"
            alt={`Slide ${index + 1}`}
          />
        </motion.div>
      </AnimatePresence>



      {/* Retro Navigation Arrows */}
      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-4 flex justify-between px-4 z-20 pointer-events-auto">
          <button
            onClick={prevSlide}
            className="font-pixel text-base text-foreground hover:text-primary transition-all duration-200 border border-border bg-black/80 px-2 py-1 cursor-pointer flex items-center gap-1 select-none"
          >
            <ChevronLeft className="size-4 text-primary" />
            <span>[ PREV ]</span>
          </button>
          
          <button
            onClick={nextSlide}
            className="font-pixel text-base text-foreground hover:text-primary transition-all duration-200 border border-border bg-black/80 px-2 py-1 cursor-pointer flex items-center gap-1 select-none"
          >
            <span>[ NEXT ]</span>
            <ChevronRight className="size-4 text-primary" />
          </button>
        </div>
      )}

      {/* Custom Retro Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 flex gap-1.5 z-20">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIndex(i);
              }}
              className={`size-2 border border-border/80 cursor-pointer transition-all duration-200 ${
                i === index ? "bg-primary border-primary" : "bg-black/40 hover:bg-white/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
