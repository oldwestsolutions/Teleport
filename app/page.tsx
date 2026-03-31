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
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] to-white/[0.015] p-8 backdrop-blur-md">
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">Why Teleport Exists</p>
          <p className="mt-4 max-w-5xl text-base leading-relaxed text-white/68">
            DeFi is global, fast, and permissionless, but communication quality still determines trust.
            Teleport introduces a shared protocol layer where users can safely coordinate across communities,
            define interaction boundaries, and confidently avoid participants who repeatedly exhibit spam,
            abuse, manipulation, or low-reciprocity behavior. This is infrastructure for human trust, not
            another closed platform.
          </p>
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
