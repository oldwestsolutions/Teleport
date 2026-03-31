"use client";

import { motion } from "framer-motion";

const metrics = [
  { title: "Account Activation", value: "Stake BELL", detail: "Users stake BELL to activate communication accounts and unlock protocol access." },
  { title: "Access Dependency", value: "Unstake = Off", detail: "Unstaking removes active access to messaging, email, and priority network services." },
  { title: "Tier Progression", value: "More Stake, More Access", detail: "Higher stake unlocks additional features, limits, and delivery priority." },
  { title: "App Participation", value: "Apps Can Stake", detail: "Applications can also stake BELL to integrate messaging and network services." },
];

export default function ScoringMetrics() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-15" />
      <div className="relative">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-semibold"
      >
        Staking Model
      </motion.h3>
      <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-white/60">
        Teleport access is stake-based by design. Communication services are activated by BELL stake,
        and access tiers scale with participation rather than recurring subscriptions.
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
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-white/45">Predictable Access Rules</p>
          <p className="mt-2 text-sm text-white/68">
            Access state is transparent, deterministic, and based on verifiable staking conditions.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-white/45">Aligned Incentives</p>
          <p className="mt-2 text-sm text-white/68">
            Stake-backed participation helps reduce spam and strengthens long-term network utility.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
