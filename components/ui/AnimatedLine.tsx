"use client";

import { motion } from "framer-motion";

type AnimatedLineProps = {
  d: string;
};

export default function AnimatedLine({ d }: AnimatedLineProps) {
  return (
    <motion.path
      d={d}
      stroke="rgba(255,255,255,0.5)"
      strokeWidth="2"
      fill="transparent"
      initial={{ pathLength: 0, opacity: 0.3 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.25, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.6 }}
    />
  );
}
