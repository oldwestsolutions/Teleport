"use client";

import { motion } from "framer-motion";
import FloatingMesh from "./ui/FloatingMesh";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="grid-bg absolute inset-0 z-0" />
      <div className="absolute inset-0 z-10 opacity-90">
        <FloatingMesh />
      </div>
      <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gradient text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          The Communication Layer for DeFi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mt-6 max-w-3xl text-lg text-white/50 sm:text-xl"
        >
          One score. Every app. Powered by Avalanche and MongoDB.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#developers"
            className="rounded-full border border-white/60 px-7 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
          >
            Read the Docs
          </a>
          <a
            href="#footer"
            className="rounded-full bg-gradient-to-r from-brandBlue to-brandViolet px-7 py-3 text-sm font-medium shadow-[0_0_35px_rgba(0,71,255,0.3)] transition hover:shadow-[0_0_45px_rgba(123,47,255,0.45)]"
          >
            Get Early Access
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: [0.4, 1, 0.4], y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 z-20 h-10 w-6 -translate-x-1/2 rounded-full border border-white/30"
      >
        <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-white/70" />
      </motion.div>
    </section>
  );
}
