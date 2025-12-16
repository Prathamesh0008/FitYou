"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const role = document.cookie
      .split("; ")
      .find(r => r.startsWith("fityou_role="))
      ?.split("=")[1];

    if (role !== "admin") router.replace("/");
  }, []);

  return <>{children}</>;
}
