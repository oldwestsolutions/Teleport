"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./ui/AnimatedLine";

const nodes = [
  { id: "wallet", label: "User Wallet", x: 20, y: 35 },
  { id: "mongo", label: "Stake BELL", x: 160, y: 35 },
  { id: "engine", label: "Access Engine", x: 300, y: 35 },
  { id: "avax", label: "Identity + Reputation", x: 20, y: 130 },
  { id: "apps", label: "Messaging + Email", x: 160, y: 130 },
  { id: "tele", label: "Network Priority", x: 300, y: 130 },
];

export default function WhatIsTeleport() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative grid gap-16 lg:grid-cols-2 lg:gap-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/45">Decentralized Communication Network</p>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          A Protocol. Not Just an App.
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65">
          teleport.services is a staking-powered communication and messaging protocol.
          Users stake BELL to activate secure messaging, private email, and network services
          without relying on subscription billing.
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/58">
          As an Old West Solutions integrated product, Teleport combines decentralized identity,
          stake-based access, and reputation signals so users and applications can communicate with
          higher trust and stronger control over who can reach them.
        </p>
        <ul className="mt-7 space-y-3 text-sm text-white/70">
          <li>- Stake-based access replaces subscriptions and improves network quality.</li>
          <li>- Premium messaging and private email are unlocked through BELL participation.</li>
          <li>- Decentralized identity and reputation are portable across Old West integrated applications.</li>
        </ul>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Stake-Gated Access</p>
            <p className="mt-2 text-sm text-white/68">
              Access to messaging, email, and service tiers is unlocked through active BELL stake.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Network Effects</p>
            <p className="mt-2 text-sm text-white/68">
              As more users and apps stake BELL, network trust, utility, and routing quality increase.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/45">Protocol Data Flow</p>
        <svg viewBox="0 0 440 190" className="h-full w-full">
          <AnimatedLine d="M 110 55 L 160 55" />
          <AnimatedLine d="M 250 55 L 300 55" />
          <AnimatedLine d="M 350 70 L 350 120 L 300 150" />
          <AnimatedLine d="M 110 150 L 160 150" />
          <AnimatedLine d="M 250 150 L 300 150" />
          <AnimatedLine d="M 90 70 L 90 120 L 20 150" />
          {nodes.map((node) => (
            <g key={node.id}>
              <rect
                x={node.x}
                y={node.y}
                width="120"
                height="40"
                rx="12"
                fill="rgba(255,255,255,0.05)"
                stroke="rgba(255,255,255,0.16)"
              />
              <text
                x={node.x + 60}
                y={node.y + 24}
                textAnchor="middle"
                fill="rgba(245,245,247,0.9)"
                style={{ fontSize: "12px", fontFamily: "var(--font-inter), sans-serif" }}
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </motion.div>
      </div>
    </section>
  );
}
