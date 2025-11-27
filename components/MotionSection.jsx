"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export default function MotionSection({
  children,
  delay = 0,
  className = "",
}) {
  return (
    <motion.section
      className={clsx(className)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1], // spring-ish cubic
      }}
    >
      {children}
    </motion.section>
  );
}
