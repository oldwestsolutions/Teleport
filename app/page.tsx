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
            Access to trusted communication infrastructure should be earned through participation, not sold through
            subscriptions. Teleport uses BELL staking to activate secure messaging, private email, and network services,
            creating a decentralized communication layer with stronger quality and lower spam. As an Old West Solutions
            product, Teleport is built for direct integration into partner applications and network services.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-white/45">Stake-Based Access</p>
              <p className="mt-2 text-sm text-white/68">Users stake BELL to activate communication capabilities across the network.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-white/45">Premium Utility</p>
              <p className="mt-2 text-sm text-white/68">Messaging, email, and priority routing scale with stake participation.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-white/45">Network Growth</p>
              <p className="mt-2 text-sm text-white/68">A shared token model aligns users, apps, and ecosystem expansion.</p>
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
