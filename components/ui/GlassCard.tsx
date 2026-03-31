"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  topGlowClassName?: string;
} & HTMLMotionProps<"div">;

export default function GlassCard({
  children,
  className = "",
  topGlowClassName = "from-brandBlue/80 to-transparent",
  ...rest
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md ${className}`}
      {...rest}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${topGlowClassName}`}
      />
      {children}
    </motion.div>
  );
}
