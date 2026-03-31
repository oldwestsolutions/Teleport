"use client";

import { motion } from "framer-motion";

const metrics = [
  { title: "Response Consistency", value: "97.2%", detail: "Stability of follow-through and timely replies over time." },
  { title: "Conversation Depth", value: "8.4x", detail: "Quality-weighted engagement beyond one-off low-effort interactions." },
  { title: "Reciprocity Index", value: "93/100", detail: "Mutual participation score measuring balanced value exchange." },
  { title: "Boundary Respect", value: "95/100", detail: "Signal for honoring consent, limits, and user safety preferences." },
];

export default function ScoringMetrics() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-semibold"
      >
        Scoring Metrics
      </motion.h3>
      <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-white/60">
        Scores are not vanity numbers. They help users and apps identify reliable counterparties,
        reduce exposure to abusive patterns, and preserve control over who can initiate interaction.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, idx) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-sm text-white/55">{metric.title}</p>
            <p className="mt-3 text-2xl font-semibold text-brandTeal">{metric.value}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/62">{metric.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
