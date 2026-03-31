"use client";

import { motion } from "framer-motion";
import { MessageSquareShare, BrainCircuit, Gem } from "lucide-react";
import type { MouseEvent } from "react";
import { useState } from "react";
import GlassCard from "./ui/GlassCard";

const cards = [
  {
    title: "COMMUNICATE",
    icon: MessageSquareShare,
    glow: "from-brandBlue to-brandBlue/0",
    body: "Message across any integrated DeFi app. Interaction metadata — response consistency, conversation depth, reciprocity — is captured and stored in MongoDB Atlas. No message content. Privacy first.",
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
    body: "Integrated apps pay a micro-fee in TELE to query your score. Better communication earns higher scores. Higher scores unlock better experiences across the entire DeFi ecosystem.",
  },
];

function TiltCard({
  children,
  delay,
  topGlowClassName,
}: {
  children: React.ReactNode;
  delay: number;
  topGlowClassName: string;
}) {
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setRot({ x: (0.5 - py) * 8, y: (px - 0.5) * 8 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay }}
      onMouseMove={handleMove}
      onMouseLeave={() => setRot({ x: 0, y: 0 })}
      style={{ perspective: 1000 }}
    >
      <motion.div animate={{ rotateX: rot.x, rotateY: rot.y }} transition={{ duration: 0.2 }}>
        <GlassCard topGlowClassName={topGlowClassName}>{children}</GlassCard>
      </motion.div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">How It Works</h2>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <TiltCard key={card.title} delay={idx * 0.1} topGlowClassName={card.glow}>
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
                  0{idx + 1}
                </span>
                <Icon className="h-5 w-5 text-white/70" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-wide">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/65">{card.body}</p>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
