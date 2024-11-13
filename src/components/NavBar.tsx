"use client";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";
import NavLink from "next/link";
import { routes } from "../routes";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

function NavBar() {
  const pathname = usePathname();
  const [isTop, setIsTop] = useState(true)
  const scroll = useScroll()

  useMotionValueEvent(scroll.scrollYProgress, 'change', (prev) => {
    setIsTop(prev > 0 ? false: true)
  })

  return (
    <nav className={cn("bg-none md:bg-stone-900/60 fixed top-4 right-4 md:bottom-4 left-4 rounded-md  md:w-[64px] z-10 overflow-hidden", !isTop && "bg-stone-900/60")}>
      <ul className={cn("px-3 py-2 md:p-2 justify-between md:justify-start flex md:flex-col gap-6 items-center", !isTop && "backdrop-blur-sm")}>
        <li className="mb-2 mt-1 md:my-2">
          <a href="/">
            <Logo />
          </a>
        </li>
        {routes.map((item) => {
          return (
            <NavLink
              className="hidden md:block"
              style={{ textDecoration: "none" }}
              target={item.type === "link" ? "_blank" : undefined}
              href={item.route}
            >
              <h4
                className={cn(
                  "text-stone-400 hover:text-stone-50 font-display text-xs",
                  pathname.includes(item.route) ? "text-stone-50" : ""
                )}
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                  lineHeight: 0,
                }}
              >
                {item.title}
              </h4>
            </NavLink>
          );
        })}
        <Sheet>
          <SheetTrigger className="md:hidden text-stone-300">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent
            side="top"
            className="border-stone-700 flex flex-col gap-4"
          >
                <NavLink
                  style={{ textDecoration: "none" }}
                  href={'/'}
                >
                  <SheetClose>
                    <h4
                      className={cn(
                        "text-stone-400 hover:text-stone-50 font-display text-lg",
                        pathname == '/' ? "text-stone-50" : ""
                      )}
                    >
                      Home
                    </h4>
                  </SheetClose>
                </NavLink>
            {routes.map((item) => {
              return (
                <NavLink
                  style={{ textDecoration: "none" }}
                  target={item.type === "link" ? "_blank" : undefined}
                  href={item.route}
                >
                  <SheetClose>
                    <h4
                      className={cn(
                        "text-stone-400 hover:text-stone-50 font-display text-lg",
                        pathname.includes(item.route) ? "text-stone-50" : ""
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
