"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-10 h-64 w-64 rounded-full bg-sky-300/30 blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl"
        animate={{ x: [0, -30, 10, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-6rem] left-1/3 h-80 w-80 rounded-full bg-emerald-300/25 blur-3xl"
        animate={{ y: [0, -30, 10, 0], x: [0, 20, -15, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
