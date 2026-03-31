"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ForDevelopers() {
  return (
    <section id="developers" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] p-10 backdrop-blur-md"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-white/45">For Developers</p>
        <h3 className="mt-4 text-3xl font-semibold">Drop-In SDK. Instant Reputation Intelligence.</h3>
        <p className="mt-4 max-w-3xl text-white/65">
          Integrate Teleport with a few endpoints and start querying portable on-chain
          communication scores across your DeFi product surfaces.
        </p>
        <a
          href="#"
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-white/40 hover:bg-white/10"
        >
          Explore Developer Docs
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}
