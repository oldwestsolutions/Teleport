"use client";

import { motion } from "framer-motion";

export default function TeleToken() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-md"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-white/45">TELE Token</p>
        <h3 className="mt-4 text-3xl font-semibold">Economic Primitive for Communication</h3>
        <p className="mx-auto mt-4 max-w-3xl text-white/65">
          TELE powers score queries, subnet gas, and protocol governance across integrated
          DeFi applications.
        </p>
      </motion.div>
    </section>
  );
}
