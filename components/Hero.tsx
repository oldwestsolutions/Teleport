"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Users } from "lucide-react";
import FloatingMesh from "./ui/FloatingMesh";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);
  const meshScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="grid-bg absolute inset-0 z-0" />
      <motion.div style={{ scale: meshScale }} className="absolute inset-0 z-10 opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,71,255,0.22),transparent_55%)]" />
        <FloatingMesh />
      </motion.div>
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 mx-auto flex max-w-6xl flex-col items-center text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-5 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/65"
        >
          Native OldWest.net Product
        </motion.p>
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
          className="mt-6 max-w-4xl text-lg leading-relaxed text-white/60 sm:text-xl"
        >
          teleport.services is built by OldWest to make internet communication safer and more intentional.
          One score. Every app. Powered by Avalanche and MongoDB so users can build trusted circles, control who
          they interact with, and avoid repeat bad actors that exhibit harmful behavior patterns.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="mt-7 grid w-full max-w-3xl gap-3 text-left sm:grid-cols-2"
        >
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <ShieldCheck className="mb-2 h-4 w-4 text-brandTeal" />
            <p className="text-sm text-white/75">Behavior-aware safety controls across integrated DeFi communities.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <Users className="mb-2 h-4 w-4 text-brandBlue" />
            <p className="text-sm text-white/75">Portable reputation to help users find reciprocal, respectful counterparties.</p>
          </div>
        </motion.div>
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
      </motion.div>
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
