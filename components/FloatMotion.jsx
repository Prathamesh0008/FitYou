"use client";
import { motion } from "framer-motion";

export default function FloatMotion({ children, intensity = 15 }) {
  return (
    <motion.div
      animate={{
        y: [0, -intensity, 0],
        x: [0, intensity / 3, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
