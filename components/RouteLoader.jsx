"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "./Loading";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  return loading ? <Loading /> : null;
}
