"use client";

import { motion } from "framer-motion";
import { MessageSquareShare, BrainCircuit, Gem } from "lucide-react";
import GlassCard from "./ui/GlassCard";

const cards = [
  {
    title: "COMMUNICATE",
    icon: MessageSquareShare,
    glow: "from-brandBlue to-brandBlue/0",
    body: "Message across any integrated DeFi app. Interaction metadata — response consistency, conversation depth, reciprocity, and trust stability — is captured and stored in MongoDB Atlas. No message content. Privacy first.",
  },
  {
    title: "SCORE",
    icon: BrainCircuit,
    glow: "from-brandViolet to-brandViolet/0",
    body: "Your scoring engine processes interaction metadata and writes your reputation to a smart contract on a custom Avalanche subnet. Tamper-proof. Portable. Verifiable by any integrated app.",
  },
  {
    title: "EARN & GOVERN",
    icon: Gem,
    glow: "from-brandTeal to-brandTeal/0",
    body: "Integrated apps pay a micro-fee in TELE to query your score. Better communication earns higher scores. Higher scores unlock better experiences and safer interaction filters across the DeFi ecosystem.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-15" />
      <div className="relative">
      <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">How It Works</h2>
      <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-white/60">
        Teleport converts communication quality into composable reputation infrastructure.
        The result is a safer internet-native trust layer where users can proactively avoid
        counterparties who repeatedly exhibit harmful or non-reciprocal behavior.
      </p>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="h-full"
            >
              <GlassCard topGlowClassName={card.glow} className="h-full">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
                  0{idx + 1}
                </span>
                <Icon className="h-5 w-5 text-white/70" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-wide">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/65">{card.body}</p>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
