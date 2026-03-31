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
        <p className="mt-4 max-w-4xl text-white/65">
          Integrate Teleport through lightweight SDK endpoints and begin querying portable
          on-chain communication scores across your app surfaces in minutes. OldWest designed
          the stack to fit existing DeFi UX without forcing product teams to rebuild their
          messaging stack or user model.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Fast Integration</p>
            <p className="mt-2 text-sm text-white/68">Simple score-read API and webhook-based updates.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Policy Controls</p>
            <p className="mt-2 text-sm text-white/68">App-defined thresholds for gating, routing, and moderation actions.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Portable Reputation</p>
            <p className="mt-2 text-sm text-white/68">One interoperable score across all integrated DeFi environments.</p>
          </div>
        </div>
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
