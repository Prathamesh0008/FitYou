"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimatedButton({
  href,
  children,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors";

  const styles =
    variant === "primary"
      ? "bg-sky-600 text-white px-6 py-2.5 shadow-lg shadow-sky-300/40 hover:bg-sky-700"
      : "border border-sky-200 bg-sky-50 text-sky-800 px-5 py-2 hover:bg-sky-100";

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      <Link href={href} className={`${base} ${styles}`}>
        {children}
      </Link>
    </motion.div>
  );
}
