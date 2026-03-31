"use client";

import { motion } from "framer-motion";

const metrics = [
  { title: "Response Consistency", value: "97.2%" },
  { title: "Conversation Depth", value: "8.4x" },
  { title: "Reciprocity Index", value: "93/100" },
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
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {metrics.map((metric, idx) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center"
          >
            <p className="text-sm text-white/55">{metric.title}</p>
            <p className="mt-3 text-2xl font-semibold text-brandTeal">{metric.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
