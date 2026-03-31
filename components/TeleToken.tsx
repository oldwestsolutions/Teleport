"use client";

import { motion } from "framer-motion";

export default function TeleToken() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-15" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-md"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-white/45">Token Utility</p>
        <h3 className="mt-4 text-3xl font-semibold">BELL Powers the Network</h3>
        <p className="mt-4 max-w-4xl text-white/65">
          BELL is the native access token of Teleport. It powers communication access, delivery
          priority, and application-level integrations across the decentralized network.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Utility</p>
            <p className="mt-2 text-sm text-white/70">Stake BELL to access messaging and private email services.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Service Tiering</p>
            <p className="mt-2 text-sm text-white/70">Unlock higher limits, premium features, and priority delivery.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Integrations</p>
            <p className="mt-2 text-sm text-white/70">Power communication integrations across apps and services.</p>
          </div>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Network Growth</p>
            <p className="mt-2 text-sm text-white/70">
              Staking aligns users and applications around long-term ecosystem utility and quality.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Access Economics</p>
            <p className="mt-2 text-sm text-white/70">
              BELL ties resource access directly to stake, replacing recurring subscription models.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
