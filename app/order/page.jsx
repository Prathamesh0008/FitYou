//FitYou\app\order\page.jsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OrderStart() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/order/address");
  }, []);
  return null;
}

