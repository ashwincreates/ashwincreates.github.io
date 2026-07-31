"use client";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import NavLink from "next/link";
import { routes } from "../routes";
import { cn } from "@/lib/utils";
import { MenuIcon, TerminalIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { useState, useEffect } from "react";

function NavBar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("#work");

  // Scroll Spy Observer to track currently active page section
  useEffect(() => {
    const sections = ["work", "skills", "experience"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        {
          rootMargin: "-20% 0px -50% 0px", // triggers when section is in main focus
          threshold: 0,
        }
      );
      
      observer.observe(el);
      return { observer, el };
    });

    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveSection(window.location.hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav
      className={cn(
        "border border-border bg-card/70 top-4 left-4 right-4 md:right-[unset] md:left-[50%] md:translate-x-[-50%] fixed rounded-none z-50 overflow-hidden backdrop-blur-md shadow-2xl w-auto",
      )}
    >
      <ul className={cn("px-4 py-2.5 flex gap-8 items-center list-none")}>
        <li className="size-6 flex items-center justify-center shrink-0">
          <Link href="/" className="hover:scale-105 transition-transform duration-200">
            <Logo />
          </Link>
        </li>
        
        {routes.map((item) => {
          const isActive = activeSection === item.route;
          return (
            <NavLink
              key={item.title}
              className="hidden md:block"
              style={{ textDecoration: "none" }}
              onClick={() => setActiveSection(item.route)}
              target={
                item.type === "link"
                  ? item.route.startsWith("http")
                    ? "_blank"
                    : undefined
                  : undefined
              }
              href={item.route}
            >
              <span
                className={cn(
                  "font-pixel text-lg tracking-widest transition-all duration-200 px-3 py-1 flex items-center gap-1.5 cursor-pointer select-none",
                  isActive 
                    ? "text-primary border border-primary/20 bg-primary/5" 
                    : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border/60 hover:bg-secondary/40"
                )}
              >
                {isActive ? `[ ${item.title.toUpperCase()} ]` : item.title.toUpperCase()}
              </span>
            </NavLink>
          );
        })}

        <Sheet>
          <SheetTrigger className="md:hidden text-muted-foreground hover:text-foreground cursor-pointer p-1">
            <MenuIcon className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="top"
            className="border-b border-border bg-card/95 backdrop-blur-lg flex flex-col gap-5 p-6 rounded-none"
          >
            <div className="flex items-center gap-2 pb-3 border-b border-border">
              <TerminalIcon className="size-4 text-primary" />
              <span className="font-pixel text-xs tracking-wider text-muted-foreground uppercase">MENU_NAVIGATION.cfg</span>
            </div>
            
            <NavLink style={{ textDecoration: "none" }} href={"/"}>
              <SheetClose className="w-full text-left">
                <span
                  className={cn(
                    "font-pixel text-xl tracking-wider block py-2 text-muted-foreground hover:text-foreground",
                    pathname === "/" ? "text-primary" : ""
                  )}
                >
                  {pathname === "/" ? "> HOME" : "  HOME"}
                </span>
              </SheetClose>
            </NavLink>
            
            {routes.map((item) => {
              const isActive = activeSection === item.route;
              return (
                <NavLink
                  key={item.title}
                  style={{ textDecoration: "none" }}
                  onClick={() => setActiveSection(item.route)}
                  target={
                    item.type === "link"
                      ? item.route.startsWith("http")
                        ? "_blank"
                        : undefined
                      : undefined
                  }
                  href={item.route}
                >
                  <SheetClose className="w-full text-left">
                    <span
                      className={cn(
                        "font-pixel text-xl tracking-wider block py-2",
                        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {isActive ? `> ${item.title.toUpperCase()}` : `  ${item.title.toUpperCase()}`}
                    </span>
                  </SheetClose>
                </NavLink>
              );
            })}
          </SheetContent>
        </Sheet>
      </ul>
    </nav>
  );
}

export default NavBar;
