export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-black/40 px-6 py-14 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl gap-10 text-sm text-white/55 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-base font-semibold text-white/90">teleport.services</p>
          <p className="mt-3 max-w-md leading-relaxed">
            A native OldWest.net product building the communication trust layer for DeFi.
            Teleport helps users communicate safely across the internet, control who reaches them,
            and avoid interactions with counterparties that repeatedly exhibit harmful behavior.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">Protocol</p>
          <ul className="mt-3 space-y-2">
            <li><a href="#developers" className="transition hover:text-white">Developer SDK</a></li>
            <li><a href="#" className="transition hover:text-white">Scoring Methodology</a></li>
            <li><a href="#" className="transition hover:text-white">Security Model</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">Company</p>
          <ul className="mt-3 space-y-2">
            <li><a href="https://oldwest.net" className="transition hover:text-white">OldWest.net</a></li>
            <li><a href="#" className="transition hover:text-white">About</a></li>
            <li><a href="#" className="transition hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">Legal</p>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="transition hover:text-white">Privacy</a></li>
            <li><a href="#" className="transition hover:text-white">Terms</a></li>
            <li><a href="#" className="transition hover:text-white">Risk Notice</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Teleport by OldWest. All rights reserved.</p>
        <p>Built for transparent, behavior-aware internet communication.</p>
      </div>
    </footer>
  );
}
