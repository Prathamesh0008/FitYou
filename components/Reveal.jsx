"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={
        inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 60 }
      }
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
    >
      {children}
    </motion.div>
  );
}
