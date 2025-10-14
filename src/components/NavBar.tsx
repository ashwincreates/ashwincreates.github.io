"use client";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import NavLink from "next/link";
import { routes } from "../routes";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

function NavBar() {
  const pathname = usePathname();
  const [isTop, setIsTop] = useState(true);
  const scroll = useScroll();

  useMotionValueEvent(scroll.scrollYProgress, "change", (prev) => {
    setIsTop(prev > 0 ? false : true);
  });

  return (
    <nav
      className={cn(
        "bg-none md:bg-black top-4 left-4 right-4 md:right-[unset] md:left-[50%] md:translate-x-[-50%] fixed rounded-md z-10 overflow-hidden md:backdrop-blur-sm shadow-sm",
        !isTop && "bg-slate-900",
      )}
    >
      <ul className={cn("px-4 py-2 flex gap-6 items-center")}>
        <li className="size-5">
          <Link href="/">
            <Logo />
          </Link>
        </li>
        {routes.map((item) => {
          return (
            <NavLink
              key={item.title}
              className="hidden md:block"
              style={{ textDecoration: "none" }}
              target={
                item.type === "link"
                  ? item.route.startsWith("http")
                    ? "_blank"
                    : undefined
                  : undefined
              }
              href={item.route}
            >
              <h4
                className={cn(
                  "text-slate-300 hover:text-slate-50 font-display text-xs",
                  pathname.includes(item.route) ? "text-slate-50" : "",
                )}
                style={{
                  lineHeight: 0,
                }}
              >
                {item.title}
              </h4>
            </NavLink>
          );
        })}
        <Sheet>
          <SheetTrigger className="md:hidden text-slate-300">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent
            side="top"
            className="border-slate-700 flex flex-col gap-4 p-4"
          >
            <NavLink style={{ textDecoration: "none" }} href={"/"}>
              <SheetClose>
                <h4
                  className={cn(
                    "text-slate-400 hover:text-slate-50 font-display text-lg",
                    pathname == "/" ? "text-slate-50" : "",
                  )}
                >
                  Home
                </h4>
              </SheetClose>
            </NavLink>
            {routes.map((item) => {
              return (
                <NavLink
                  key={item.title}
                  style={{ textDecoration: "none" }}
                  target={
                    item.type === "link"
                      ? item.route.startsWith("http")
                        ? "_blank"
                        : undefined
                      : undefined
                  }
                  href={item.route}
                >
                  <SheetClose>
                    <h4
                      className={cn(
                        "text-slate-400 hover:text-slate-50 font-display text-lg",
                        pathname.includes(item.route) ? "text-slate-50" : "",
                      )}
                    >
                      {item.title}
                    </h4>
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
