"use client";

import { motion } from "framer-motion";
import { MessageSquareShare, BrainCircuit, Gem } from "lucide-react";
import GlassCard from "./ui/GlassCard";

const cards = [
  {
    title: "STAKE BELL",
    icon: MessageSquareShare,
    glow: "from-brandBlue to-brandBlue/0",
    body: "Users stake BELL tokens to activate their communication access. Staking replaces subscriptions and aligns access directly with network participation.",
  },
  {
    title: "UNLOCK MESSAGING + EMAIL",
    icon: BrainCircuit,
    glow: "from-brandViolet to-brandViolet/0",
    body: "Once staked, users unlock encrypted messaging, private email, and verified identity tied to wallet credentials and on-chain account state.",
  },
  {
    title: "EARN NETWORK PRIORITY",
    icon: Gem,
    glow: "from-brandTeal to-brandTeal/0",
    body: "Higher stake increases delivery priority, reputation, and visibility across integrated applications, improving network quality and response reliability.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-15" />
      <div className="relative">
      <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">How It Works</h2>
      <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-white/60">
        Teleport uses a staking-powered model where communication access is earned through BELL.
        The system combines secure messaging, private identity, and stake-based priority into one protocol flow.
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
