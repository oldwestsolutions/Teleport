"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const blocks = [
  {
    title: "MongoDB Atlas",
    accent: "shadow-[0_0_24px_rgba(16,185,129,0.35)]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-emerald-400" fill="currentColor">
        <path d="M12.6 2.3c-.2-.3-.7-.3-.9 0-3.1 4.6-4.3 8.5-3.7 11.8.5 2.7 2.1 4.8 3.9 6.5.2.2.6.2.8 0 1.9-1.8 3.5-3.8 4-6.5.6-3.3-.6-7.2-3.7-11.8Z" />
        <path d="M12.1 5.5v15.7" stroke="currentColor" strokeWidth="1.4" fill="none" />
      </svg>
    ),
    items: [
      "Document-based storage for message metadata and scoring analytics",
      "No message content stored — privacy by design",
      "Flexible schema scales as apps integrate",
      "Real-time analytics pipeline feeding the scoring engine",
    ],
  },
  {
    title: "Custom Avalanche Subnet",
    accent: "shadow-[0_0_24px_rgba(248,113,113,0.35)]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-red-400" fill="currentColor">
        <path d="M12 3.5 5.5 15h13L12 3.5Z" />
        <path d="M8.8 17.2h6.4l-3.2 5.3-3.2-5.3Z" />
      </svg>
    ),
    items: [
      "EVM-compatible subnet purpose-built for communication scoring",
      "TELE as native gas and governance token",
      "Full control over transaction fees — near zero cost per score update",
      "On-chain reputation verifiable by any integrated DeFi",
    ],
  },
];

export default function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
        Built on the Best Infrastructure
      </h2>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {blocks.map((block, i) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            whileHover={{ rotateX: 2, rotateY: i === 0 ? 2 : -2, y: -4 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 ${block.accent}`}
            >
              {block.icon}
            </div>
            <h3 className="mt-6 text-2xl font-semibold">{block.title}</h3>
            <ul className="mt-7 space-y-4">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70">
                  <Check className="mt-0.5 h-4 w-4 text-brandTeal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
