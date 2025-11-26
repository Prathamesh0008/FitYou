"use client";

import { useEffect } from "react";

export default function ThemeClientInit() {
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return null;
}
