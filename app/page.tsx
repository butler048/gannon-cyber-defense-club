"use client";

import { useState } from "react";

export default function Home() {
  // Threat Dashboard State
  const [threatFilter, setThreatFilter] = useState("ALL");
  const [activeToast, setActiveToast] = useState<string | null>(null);

  // Firewall Simulation State
  const [firewallStatus, setFirewallStatus] = useState("ONLINE");
  const [blockedCount, setBlockedCount] = useState(1482);
  const [isBlocking, setIsBlocking] = useState(false);

  const showToast = (message: string) => {
    setActiveToast(message);
    setTimeout(() => setActiveToast(null), 3500);
  };

  const triggerFirewallSpike = () => {
    setIsBlocking(true);
    setFirewallStatus("PURGING THREATS");
    setTimeout(() => {
      setBlockedCount((prev) => prev + Math.floor(Math.random() * 25) + 10);
      setFirewallStatus("ACTIVE SHIELD");
      setIsBlocking(false);
      showToast("🛡️ Firewall successfully neutralized hostile traffic spike!");
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#070b17] text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased">
      
      {/* Notification Toast */}
      {activeToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-blue-500/30 bg-[#0b1329]/95 px-5 py-4 shadow-2xl backdrop-blur-xl animate-bounce">
          <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping" />
          <p className="text-sm font-medium text-slate-200">{activeToast}</p>
        </div>
      )}

      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#070b17]/90 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl shadow-lg shadow-blue-500/30">
              🛡️
            </div>
            <div>
              <h1 className="font-bold leading-none tracking-tight text-white">
                Gannon Cyber Defense Club
              </h1>
              <span className="text-xs font-mono text-blue-400">Gannon University</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#" className="transition hover:text-blue-400">Home</a>
            <a href="#about" className="transition hover:text-blue-400">About</a>
            <a href="#threats" className="transition hover:text-blue-400">Threats</a>
            <a href="#ihack" className="transition hover:text-cyan-400 font-semibold">iHack</a>
            <a href="#events" className="transition hover:text-blue-400">Events</a>
          </div>

          <a
            href="#threats"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/30 transition hover:bg-blue-500 hover:scale-105"
          >
            Threat Dashboard
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          
          {/* Left side */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-mono text-blue-300 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              Gannon University Cyber Defense Club
            </div>

            <h2 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              Defending.{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Learning.
              </span>{' '}
              <br />
              Building.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Welcome to the frontline of cybersecurity at Gannon University. Master ethical hacking, malware analysis, and incident response through hands-on simulations.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#threats"
                className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 hover:scale-105"
              >
                Explore Threats →
              </a>

              <a
                href="#about"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-slate-200 backdrop-blur-md transition hover:bg-white/10 hover:border-white/40"
              >
                Learn About Us
              </a>
            </div>

            {/* Features */}
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-slate-400 font-mono">
              <span className="flex items-center gap-2">✓ Hands-On Learning</span>
              <span className="flex items-center gap-2">✓ Industry Events</span>
              <span className="flex items-center gap-2">✓ Campus Events</span>
            </div>
          </div>

          {/* Interactive Threat Dashboard Preview */}
          <div id="threats" className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-2xl">
              
              {/* Header */}
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-mono text-slate-400 tracking-wider">
                    CYBERSECURITY INTELLIGENCE
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    Threat Dashboard
                  </h3>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5 text-xs font-mono text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  LIVE
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2 mb-4 font-mono text-xs">
                {["ALL", "CRITICAL", "HIGH", "ALERTS"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setThreatFilter(tab)}
                    className={`px-3 py-1.5 rounded-lg border transition ${
                      threatFilter === tab
                        ? "bg-blue-600 border-blue-500 text-white font-bold"
                        : "border-white/10 bg-black/20 text-slate-400 hover:bg-white/5"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Threat cards */}
              <div className="space-y-3 font-mono">
                {(threatFilter === "ALL" || threatFilter === "CRITICAL") && (
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-blue-500/40">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500">CVE-2026-0982</p>
                        <p className="mt-1 font-medium text-slate-200">
                          Critical Kernel Vulnerability
                        </p>
                      </div>
                      <span className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-400">
                        9.8
                      </span>
                    </div>
                  </div>
                )}

                {(threatFilter === "ALL" || threatFilter === "HIGH") && (
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-blue-500/40">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500">CVE-2026-4412</p>
                        <p className="mt-1 font-medium text-slate-200">
                          High Severity Remote RCE
                        </p>
                      </div>
                      <span className="rounded-lg border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400">
                        8.6
                      </span>
                    </div>
                  </div>
                )}

                {(threatFilter === "ALL" || threatFilter === "ALERTS") && (
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-blue-500/40">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500">THREAT LEVEL</p>
                        <p className="mt-1 font-medium text-slate-200">
                          Active Botnet Probing
                        </p>
                      </div>
                      <span className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-bold text-yellow-400">
                        HIGH
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Firewall Action Simulation */}
              <div className="mt-5 rounded-2xl border border-blue-500/20 bg-blue-950/20 p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-blue-300">Firewall Status: <span className="text-green-400 font-bold">{firewallStatus}</span></p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">Blocked Packets: {blockedCount}</p>
                </div>
                <button
                  onClick={triggerFirewallSpike}
                  disabled={isBlocking}
                  className="rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2 text-xs font-mono font-bold text-white transition disabled:opacity-50"
                >
                  {isBlocking ? "Purging..." : "Simulate Defense"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-white/10 bg-[#04070e] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white">
              About Gannon Cyber Defense
            </h2>
            <p className="mt-4 text-slate-400">
              We equip students with practical skills in defensive security, cryptography, malware analysis, and ethical hacking to excel in modern cyber operations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 font-mono">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-blue-500/40">
              <h3 className="text-lg font-bold text-white mb-2">Hands-on Labs</h3>
              <p className="text-sm text-slate-400 font-sans leading-relaxed">
                Weekly CTF practice sessions, vulnerability patching workshops, and real-world network hardening exercises.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-blue-500/40">
              <h3 className="text-lg font-bold text-white mb-2">Campus Events</h3>
              <p className="text-sm text-slate-400 font-sans leading-relaxed">
                Come stop by and enjoy many different campus events hosted by us.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-blue-500/40">
              <h3 className="text-lg font-bold text-white mb-2">Industry Networking</h3>
              <p className="text-sm text-slate-400 font-sans leading-relaxed">
                Connect with security engineers, recruiters, and alumni leading top enterprise security teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* iHack Section */}
      <section id="ihack" className="border-t border-white/10 bg-[#070b17] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 to-blue-950/20 p-8 md:p-12">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-300">
              ANNUAL EVENT
            </span>
            <h3 className="text-3xl font-extrabold text-white mt-4">iHack </h3>
            <p className="mt-3 text-slate-400 text-sm md:text-base leading-relaxed">
              Gannon University  Institute for Health and Cyber Knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="border-t border-white/10 bg-[#04070e] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-blue-400 tracking-wider">CALENDAR</span>
            <h3 className="text-3xl font-bold mt-1 text-white">Upcoming Events</h3>
            <p className="text-sm text-slate-400 mt-2">Join us for hands-on learning and collaborative team exercises.</p>
          </div>

          <div className="space-y-4 font-mono">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex items-center justify-between">
              <div>
                <span className="text-xs text-blue-400">APR 12, 2026 // 6:00 PM</span>
                <h4 className="text-base font-bold text-white mt-0.5">Intro to Wireshark Packet Analysis</h4>
              </div>
              <button onClick={() => showToast("Successfully RSVP'd for Wireshark Workshop!")} className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300 hover:bg-blue-500/20 transition">
                RSVP
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex items-center justify-between">
              <div>
                <span className="text-xs text-blue-400">APR 26, 2026 // 5:00 PM</span>
                <h4 className="text-base font-bold text-white mt-0.5">Collegiate Cyber Defense Simulation</h4>
              </div>
              <button onClick={() => showToast("Successfully RSVP'd for CCDC Prep!")} className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300 hover:bg-blue-500/20 transition">
                RSVP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-white/10 bg-[#03060d]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-6 py-12 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="px-6 py-4 text-center">
            <p className="text-4xl font-extrabold font-mono text-white">01</p>
            <p className="mt-2 text-sm text-slate-400">Gannon Cyber Defense Club</p>
          </div>
          <div className="px-6 py-4 text-center">
            <p className="text-4xl font-extrabold font-mono text-cyan-400">∞</p>
            <p className="mt-2 text-sm text-slate-400">Opportunities to Learn</p>
          </div>
          <div className="px-6 py-4 text-center">
            <p className="text-4xl font-extrabold font-mono text-blue-400">24/7</p>
            <p className="mt-2 text-sm text-slate-400">Threat Monitoring & Defense</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#020408] py-8 text-center text-xs font-mono text-slate-500">
        <p>© 2026 Gannon University Cyber Defense Club. All rights reserved.</p>
      </footer>
    </main>
  );
}