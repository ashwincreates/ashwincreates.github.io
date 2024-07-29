"use client";

import { useColorScheme } from "@mui/joy";
import Image from "next/image";
import { useEffect, useState } from "react";

function Logo() {
  const { mode, systemMode } = useColorScheme();
  const [image, setImage] = useState("logo.svg");
  useEffect(() => {
    if (mode === "dark" || systemMode === "dark") {
      setImage("/logo.svg");
    } else {
      setImage("/dark_logo.svg");
    }
  }, [mode, systemMode]);
  return <Image src={image} width={30} height={30} alt="logo" />;
}

export default Logo;
