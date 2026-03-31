"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./ui/AnimatedLine";

const nodes = [
  { id: "wallet", label: "User Wallet", x: 20, y: 35 },
  { id: "mongo", label: "MongoDB Atlas", x: 160, y: 35 },
  { id: "engine", label: "Scoring Engine", x: 300, y: 35 },
  { id: "avax", label: "Avalanche Subnet", x: 20, y: 130 },
  { id: "apps", label: "DeFi Apps", x: 160, y: 130 },
  { id: "tele", label: "TELE Fee", x: 300, y: 130 },
];

export default function WhatIsTeleport() {
  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-6 py-28 lg:grid-cols-2 lg:gap-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/45">What is Teleport</p>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          A Protocol. Not Just an App.
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65">
          teleport.services is a communication scoring layer across DeFi applications.
          MongoDB Atlas captures interaction metadata, while an Avalanche subnet stores
          portable reputation on-chain. Apps integrate through an SDK and pay TELE to
          query scores in real time.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
      >
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
    </section>
  );
}
