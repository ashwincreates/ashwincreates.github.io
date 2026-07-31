"use client";

import { MarkdownProject } from "@/lib/markdown";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ExternalLinkIcon, TrendingUpIcon, FileCodeIcon } from "lucide-react";
import Slideshow from "./SlideShow";

interface ProjectCardProps {
  project: MarkdownProject;
}

function ProjectCard(props: ProjectCardProps) {
  const { project } = props;
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  // Esc-key close listener for ease of navigation
  useEffect(() => {
    if (!isOverlayOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOverlayOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOverlayOpen]);

  return (
    <div className="border border-border bg-card/15 hover:border-primary/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-2xl relative group">
      
      {/* Interactive Visual Panel Cover - Column Span 5 */}
      <div 
        onClick={() => setIsOverlayOpen(true)}
        className="lg:col-span-5 relative aspect-video lg:aspect-auto min-h-[250px] lg:min-h-full overflow-hidden bg-black/50 border-b lg:border-b-0 lg:border-r border-border cursor-pointer group/cover"
      >
        {project.images[0] && (
          <Image
            fill
            className="object-cover transition-transform duration-700 group-hover/cover:scale-105 filter saturate-[0.8] group-hover/cover:saturate-100"
            alt={project.title}
            src={project.images[0]}
            unoptimized
          />
        )}
        
        {/* Launch Overlay Prompt on Hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/cover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <span className="font-pixel text-base text-primary border border-primary/40 bg-black/80 px-4 py-2.5 shadow-lg tracking-wider animate-pulse select-none">
            [ LAUNCH_GALLERY_CONSOLE ]
          </span>
        </div>
        
        {/* Subtle Matrix Dot Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.18)_1.5px,transparent_1.5px)] bg-[size:5px_5px] pointer-events-none" />
        
        {/* Tech Label Tag */}
        <div className="absolute top-4 left-4 bg-black/80 border border-border/60 px-2.5 py-1 font-pixel text-xs tracking-wider uppercase z-10 select-none">
          SYS_DEMO_VIEW_0{project.order}
        </div>
      </div>

      {/* Specifications Console - Column Span 7 */}
      <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between space-y-8">
        <div className="space-y-4">
          {/* Metadata Row */}
          <div className="flex items-center justify-between border-b border-border/40 pb-3">
            <span className="font-pixel text-xs text-muted-foreground uppercase tracking-wider">
              SPECIFICATION // STABLE_RELEASE
            </span>
            <span className="font-sans text-[11px] text-primary/90 tracking-widest font-bold bg-primary/5 px-2 py-0.5 border border-primary/15">
              [ ENTERPRISE_READY ]
            </span>
          </div>

          {/* Titles */}
          <div className="space-y-1">
            <h3 className="text-2xl md:text-4xl font-display font-black text-foreground tracking-tight">
              {project.title}
            </h3>
            <p className="font-pixel text-base md:text-lg text-primary/80 tracking-wide uppercase">
              {project.subtitle}
            </p>
          </div>

          {/* Description Pitch */}
          <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">
            {project.content}
          </p>

          {/* Highlighted B2B Business Impact Section */}
          {project.impact && (
            <div className="border border-primary/20 bg-primary/[0.02] p-4 flex gap-4 items-start shadow-inner">
              <TrendingUpIcon className="size-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-pixel text-xs text-muted-foreground block tracking-wider uppercase">
                  PROJECTED BUSINESS IMPACT / ROI:
                </span>
                <span className="font-sans text-sm md:text-base text-primary font-semibold tracking-wide">
                  {project.impact}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Action Blocks & Tags */}
        <div className="space-y-6 pt-4 border-t border-border/40">
          {/* Tech Spec Chips */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-sans text-[11px] font-semibold text-foreground/90 border border-border bg-secondary/50 px-2.5 py-1 uppercase tracking-wider"
              >
                [{tag}]
              </span>
            ))}
          </div>

          {/* Double Link Command Triggers */}
          <div className="flex flex-wrap gap-4 pt-2">
            {project.demoUrl && (
              <Link target="_blank" href={project.demoUrl} className="inline-block">
                <span className="font-pixel text-base text-foreground hover:text-primary transition-all duration-200 border border-primary/20 hover:border-primary/50 bg-primary/5 hover:bg-primary/10 px-4 py-2.5 flex items-center gap-2 cursor-pointer shadow-md">
                  <ExternalLinkIcon className="size-4 text-primary" />
                  [ LAUNCH_PRODUCT_DEMO ]
                </span>
              </Link>
            )}

            {project.githubUrl && (
              <Link target="_blank" href={project.githubUrl} className="inline-block">
                <span className="font-pixel text-base text-muted-foreground hover:text-foreground transition-all duration-200 border border-border hover:border-border/60 bg-secondary/20 hover:bg-secondary/40 px-4 py-2.5 flex items-center gap-2 cursor-pointer shadow-sm">
                  <FileCodeIcon className="size-4 text-muted-foreground" />
                  [ STUDY_REPOSITORY ]
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Conditionally Render Pop-Out Console Gallery Overlay */}
      {isOverlayOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4 md:p-8 animate-fade-in">
          {/* Main Modal Console Box */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="border border-border bg-card w-full max-w-5xl h-fit md:h-[80vh] flex flex-col justify-between shadow-2xl relative"
          >
            {/* Window title bar */}
            <div className="flex items-center justify-between border-b border-border bg-black/60 px-4 py-3 select-none">
              <div className="flex items-center gap-2.5">
                <span className="size-2 bg-primary animate-pulse" />
                <span className="font-pixel text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
                  SYS_GALLERY_VIEW_CONSOLE_V2 // {project.title}
                </span>
              </div>
              
              <button 
                onClick={() => setIsOverlayOpen(false)}
                className="font-pixel text-xs md:text-sm text-muted-foreground hover:text-destructive border border-border hover:border-destructive/40 bg-secondary/30 px-2.5 py-1.5 cursor-pointer transition-all duration-150"
              >
                [ CLOSE_CONSOLE ]
              </button>
            </div>

            {/* Render large-scale slideshow */}
            <div className="flex-grow relative overflow-hidden bg-black/40 min-h-[300px] md:min-h-0">
              <Slideshow images={project.images} />
            </div>

            {/* Window footer */}
            <div className="border-t border-border bg-black/40 px-4 py-2.5 flex items-center justify-between text-muted-foreground font-pixel text-[10px] md:text-xs tracking-widest uppercase select-none">
              <span>TOTAL_ASSETS_MOUNT_0{project.images.length}</span>
              <span>PRESS_ESC_OR_CLICK_CLOSE_TO_EXIT</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default ProjectCard;
