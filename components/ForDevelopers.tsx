"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ForDevelopers() {
  return (
    <section id="developers" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-15" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] p-10 backdrop-blur-md"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-white/45">Use Cases + Trust</p>
        <h3 className="mt-4 text-3xl font-semibold">Built for Real Communication Workloads</h3>
        <p className="mt-4 max-w-4xl text-white/65">
          Teleport is designed for secure communication at ecosystem scale, from business messaging
          to private email routing. Offered by Old West Solutions, the protocol combines non-custodial
          staking, privacy-first transport, and identity-aware filtering to keep network participation reliable.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Secure Business Communication</p>
            <p className="mt-2 text-sm text-white/68">Stake-gated channels for teams that require verified counterparties.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Spam-Resistant Contact Systems</p>
            <p className="mt-2 text-sm text-white/68">Stake requirements reduce unsolicited low-quality inbound traffic.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Web3 Identity Messaging</p>
            <p className="mt-2 text-sm text-white/68">Wallet-linked identity and reputation improve trust in interactions.</p>
          </div>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Private Email Infrastructure</p>
            <p className="mt-2 text-sm text-white/68">
              Wallet-tied private email for user-owned identity routing and secure service delivery across integrations.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">AI + GPU Coordination</p>
            <p className="mt-2 text-sm text-white/68">
              Optional stake-gated coordination channels for AI agents and distributed compute operations.
            </p>
          </div>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Non-Custodial Design</p>
            <p className="mt-2 text-sm text-white/68">Users control their funds and stake state at all times.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Security Model</p>
            <p className="mt-2 text-sm text-white/68">Privacy-first communication on secure infrastructure with no spam by default.</p>
          </div>
        </div>
        <a
          href="#"
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-white/40 hover:bg-white/10"
        >
          Explore Old West Integration Docs
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}
