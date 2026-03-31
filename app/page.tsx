import Footer from "@/components/Footer";
import ForDevelopers from "@/components/ForDevelopers";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ScoringMetrics from "@/components/ScoringMetrics";
import TechStack from "@/components/TechStack";
import TeleToken from "@/components/TeleToken";
import WhatIsTeleport from "@/components/WhatIsTeleport";

export default function Home() {
  return (
    <main className="overflow-hidden bg-bg text-whiteish">
      <Hero />
      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-15" />
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] to-white/[0.015] p-8 backdrop-blur-md">
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">Why Teleport Exists</p>
          <p className="mt-4 max-w-5xl text-base leading-relaxed text-white/68">
            DeFi is global, fast, and permissionless, but communication quality still determines trust.
            Teleport introduces a shared protocol layer where users can safely coordinate across communities,
            define interaction boundaries, and confidently avoid participants who repeatedly exhibit spam,
            abuse, manipulation, or low-reciprocity behavior. This is infrastructure for human trust, not
            another closed platform.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-white/45">Safer Discovery</p>
              <p className="mt-2 text-sm text-white/68">Identify counterparties with consistent, respectful communication habits.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-white/45">Portable Reputation</p>
              <p className="mt-2 text-sm text-white/68">Carry communication trust context between integrated DeFi experiences.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-white/45">User Agency</p>
              <p className="mt-2 text-sm text-white/68">Set who can reach you and filter participants who violate your standards.</p>
            </div>
          </div>
        </div>
      </section>
      <WhatIsTeleport />
      <HowItWorks />
      <TechStack />
      <TeleToken />
      <ScoringMetrics />
      <ForDevelopers />
      <Footer />
    </main>
  );
}
