"use client";
import { usePathname, useRouter } from "next/navigation";
import { Bars2Icon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Button } from "./ui/button";

function NavMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={{ backdropFilter: "blur(4px)", position: "fixed" }}>
        <div className="flex items-center h-[64px]">
          <Button onClick={() => setOpen((o) => !o)}>
            <Bars2Icon height={18} />
          </Button>
        </div>
      </div>
    </>
  );
}

export default NavMenu;
