"use client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MailIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { animate } from "@/utils/clientUtils";

function Intro() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center items-center px-6 pt-36 pb-16">
      {/* Background scanline/grid micro-decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-30" />
      
      <div className="w-full max-w-4xl border border-border bg-card/30 backdrop-blur-md p-6 md:p-12 relative shadow-2xl">
        {/* Terminal Window Header Decoration */}
        <div className="absolute top-0 left-0 right-0 h-9 border-b border-border bg-muted/40 flex items-center px-4 justify-between">
          <div className="flex gap-2 items-center">
            <span className="size-2.5 bg-rose-500/50 rounded-full" />
            <span className="size-2.5 bg-amber-500/50 rounded-full" />
            <span className="size-2.5 bg-emerald-500/50 rounded-full" />
            <span className="text-[11px] font-pixel text-muted-foreground ml-2 tracking-widest">SYSTEM_INITIALIZATION.sh</span>
          </div>
          <span className="text-[10px] font-pixel text-muted-foreground/60">[v1.0.5]</span>
        </div>

        {/* Content */}
        <div className="pt-8 space-y-10">
          <div className="space-y-4">
            <motion.div 
              {...animate(0)}
              className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 px-3 py-1 text-primary"
            >
              <TerminalIcon className="size-4 shrink-0" />
              <span className="font-pixel text-xs tracking-widest uppercase">PORTFOLIO PROTOCOL: READY</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground tracking-tight font-extrabold">
              <motion.span {...animate(1)} className="block">ASHWIN SHARMA</motion.span>
            </h1>
            
            <p className="font-pixel text-xl md:text-3xl text-primary/90 tracking-wide">
              <motion.span {...animate(2)}>&gt; FULL-STACK ENGINEER &amp; SYSTEMS CREATOR</motion.span>
            </p>
          </div>

          <motion.div 
            {...animate(3)}
            className="max-w-2xl border-l-2 border-primary/40 pl-6 py-2 text-muted-foreground text-sm md:text-base leading-relaxed font-sans"
          >
            <p className="italic">
              &ldquo;Simplicity is the ultimate sophistication. Standardized components, beautifully integrated.&rdquo;
            </p>
          </motion.div>

          <motion.div 
            {...animate(4)}
            className="pt-4 flex flex-wrap gap-4 items-center"
          >
            <span className="font-pixel text-muted-foreground text-xs uppercase tracking-widest mr-2">Connect:</span>
            
            <Link href="mailto:ashwin200113@gmail.com" passHref target="_blank">
              <span className="font-pixel text-sm text-foreground hover:text-primary transition-all duration-200 border border-border hover:border-primary/40 bg-secondary/30 hover:bg-primary/5 px-4 py-2 flex items-center gap-2 cursor-pointer shadow-sm">
                <MailIcon className="size-4 text-primary" />
                [ EMAIL ]
              </span>
            </Link>

            <Link href="https://www.github.com/ashwincreates" passHref target="_blank">
              <span className="font-pixel text-sm text-foreground hover:text-primary transition-all duration-200 border border-border hover:border-primary/40 bg-secondary/30 hover:bg-primary/5 px-4 py-2 flex items-center gap-2 cursor-pointer shadow-sm">
                <FontAwesomeIcon icon={faGithub} className="size-4 text-primary" />
                [ GITHUB ]
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
