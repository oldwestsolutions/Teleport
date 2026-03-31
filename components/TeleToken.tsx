"use client";

import { motion } from "framer-motion";

export default function TeleToken() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-md"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-white/45">TELE Token</p>
        <h3 className="mt-4 text-3xl font-semibold">Economic Primitive for Safer Communication</h3>
        <p className="mt-4 max-w-4xl text-white/65">
          TELE powers score queries, subnet gas, and governance across integrated DeFi applications.
          It aligns users, apps, and protocol operators around one shared objective: reward constructive
          behavior and reduce harmful communication patterns at internet scale.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Utility</p>
            <p className="mt-2 text-sm text-white/70">Micro-fees for score reads and reputation checks.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Security</p>
            <p className="mt-2 text-sm text-white/70">Discourages spam interactions and low-quality behavior loops.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Governance</p>
            <p className="mt-2 text-sm text-white/70">Community stewards scoring weights and protocol policy upgrades.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
