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
