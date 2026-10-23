
"use client";

import { useState } from "react";

export default function Home() {
  const [activeToast, setActiveToast] = useState<string | null>(null);
  const [firewallStatus, setFirewallStatus] = useState("ONLINE");
  const [blockedCount, setBlockedCount] = useState(1482);
  const [isBlocking, setIsBlocking] = useState(false);

  const showToast = (message: string) => {
    setActiveToast(message);
    setTimeout(() => setActiveToast(null), 3500);
  };

  const triggerFirewallSpike = () => {
    if (isBlocking) return;

    setIsBlocking(true);
    setFirewallStatus("PURGING THREATS");

    setTimeout(() => {
      setBlockedCount((prev) => prev + Math.floor(Math.random() * 25) + 10);
      setFirewallStatus("ACTIVE SHIELD");
      setIsBlocking(false);
      showToast("Firewall successfully neutralized hostile traffic spike!");
    }, 1200);
  };

  const cardHover =
    "rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-blue-500/50 hover:bg-blue-500/[0.04] hover:shadow-xl hover:shadow-blue-950/30";

  const navLink =
    "inline-block transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-400";

  return (
    <main className="min-h-screen bg-[#070b17] font-sans text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
      {/* Notification Toast */}
      {activeToast && (
        <div
          role="status"
          className="fixed bottom-6 right-6 z-50 flex max-w-[calc(100vw-3rem)] items-center gap-3 rounded-2xl border border-blue-500/30 bg-[#0b1329]/95 px-5 py-4 shadow-2xl backdrop-blur-xl"
        >
          <div className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-cyan-400" />
          <p className="text-sm font-medium text-slate-200">{activeToast}</p>
        </div>
      )}

      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#070b17]/90 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-600/20 text-xs font-extrabold tracking-wider text-cyan-300 shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-blue-600/40">
              GCD
            </div>
            <div>
              <h1 className="font-bold leading-tight tracking-tight text-white">
                Gannon Cyber Defense Club
              </h1>
              <span className="font-mono text-xs text-blue-400">
                Gannon University
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#home" className={navLink}>
              Home
            </a>
            <a href="#about" className={navLink}>
              About
            </a>
            <a href="#threats" className={navLink}>
              Threats
            </a>
            <a
              href="#ihack"
              className="inline-block font-semibold text-cyan-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-300"
            >
              iHack
            </a>
          </div>

          <a
            href="#threats"
            className="shrink-0 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 sm:px-5"
          >
            Threat Dashboard
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative scroll-mt-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

        {/* Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
          {/* Left Side: Hero Text */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 font-mono text-xs text-blue-300 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              GANNON UNIVERSITY // CYBER DEFENSE
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Defending the{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Digital Frontier.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Build real-world cybersecurity skills, explore emerging threats,
              and represent Gannon University through hands-on labs,
              collaborative projects, and collegiate cyber competitions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#threats"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
              >
                Explore Threat Dashboard
              </a>

              <a
                href="#about"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/5"
              >
                About the Club
              </a>
            </div>

            <p className="mt-6 font-mono text-xs tracking-widest text-slate-500">
              LEARN. DEFEND. COMPETE.
            </p>
          </div>

          {/* Right Side: Interactive Dashboard */}
          <div
            id="threats"
            className="scroll-mt-28 rounded-3xl border border-blue-500/20 bg-[#0b1329]/90 p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-blue-950/50 sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-mono text-xs tracking-widest text-blue-400">
                  THREAT MONITOR
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">
                  Security Operations Overview
                </h3>
              </div>

              <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 font-mono text-xs text-amber-300">
                DEMO MODE
              </span>
            </div>

            {/* Dashboard Status Cards */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30">
                <p className="font-mono text-xs text-slate-400">
                  FIREWALL STATUS
                </p>
                <p className="mt-3 break-words text-lg font-bold text-green-400">
                  {firewallStatus}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <p className="font-mono text-xs text-slate-400">
                  BLOCKED PACKETS
                </p>
                <p className="mt-3 text-2xl font-bold text-cyan-400">
                  {blockedCount.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Firewall Action Simulation */}
            <div className="mt-5 rounded-2xl border border-blue-500/20 bg-blue-950/20 p-4 transition-colors duration-300 hover:border-blue-400/40">
              <p className="font-semibold text-white">
                Interactive Firewall Demo
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Simulate a traffic spike and watch the dashboard update. This
                is a demonstration, not a connection to a real firewall.
              </p>

              <button
                onClick={triggerFirewallSpike}
                disabled={isBlocking}
                className="mt-4 w-full rounded-xl bg-blue-600 px-4 py-3 font-mono text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isBlocking ? "Purging..." : "Simulate Defense"}
              </button>
            </div>

            <p className="mt-4 font-mono text-[10px] text-slate-500">
              SYSTEM STATUS: SIMULATED TELEMETRY // NOT LIVE SECURITY DATA
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="scroll-mt-20 border-t border-white/10 bg-[#04070e] py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="font-mono text-xs tracking-[0.25em] text-blue-400">
              WHO WE ARE
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              About Gannon Cyber Defense
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              We equip students with practical skills in defensive security,
              cryptography, malware analysis, and ethical hacking to excel in
              modern cyber operations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Hands-on Labs */}
            <div className={cardHover}>
              <div className="mb-4 font-mono text-sm font-bold tracking-widest text-cyan-400">
                LABS //
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                Hands-on Labs
              </h3>
              <p className="font-sans text-sm leading-relaxed text-slate-400">
                Weekly CTF practice sessions, vulnerability patching workshops,
                and real-world network hardening exercises.
              </p>
            </div>

            {/* Campus Events */}
            <div className={cardHover}>
              <div className="mb-4 font-mono text-sm font-bold tracking-widest text-cyan-400">
                EVENTS //
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                Campus Events
              </h3>
              <p className="font-sans text-sm leading-relaxed text-slate-400">
                Discover cybersecurity workshops, club meetings, collaborative
                activities, and campus events that encourage student
                engagement.
              </p>
            </div>

            {/* Industry Networking */}
            <div className={cardHover}>
              <div className="mb-4 font-mono text-sm font-bold tracking-widest text-cyan-400">
                NETWORK //
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                Industry Networking
              </h3>
              <p className="font-sans text-sm leading-relaxed text-slate-400">
                Connect with security engineers, recruiters, and alumni leading
                enterprise security teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events and iHack Section */}
      <section
        id="ihack"
        className="scroll-mt-20 border-t border-white/10 bg-[#04070e] py-20"
      >
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <p className="font-mono text-xs tracking-[0.25em] text-cyan-400">
              EVENTS AND COMPETITIONS
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Get Involved
            </h2>
          </div>

          {/* iHack Showcase */}
          <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 to-blue-950/20 p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-950/40 sm:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

            <span className="relative rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs text-cyan-300">
              CYBERSECURITY COMPETITION
            </span>

            <h3 className="relative mt-5 text-3xl font-extrabold text-white">
              Gannon iHack
            </h3>

            <p className="relative mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
              Learn about Gannon iHack and cybersecurity-related activities.
              Explore opportunities to develop technical skills, solve
              security challenges, and connect with the cybersecurity
              community.
            </p>

            <div className="relative mt-8 grid gap-6 border-t border-white/10 pt-6 font-mono text-sm text-slate-300 sm:grid-cols-2">
              <div>
                <p className="text-xs tracking-widest text-slate-500">
                  SCHEDULE
                </p>
                <p className="mt-2 font-bold text-white">Fall 2026</p>
              </div>

              <div>
                <p className="text-xs tracking-widest text-slate-500">
                  COMPETITION FORMAT
                </p>
                <p className="mt-2 font-bold text-white">
                  Jeopardy and Attack-Defense
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-white/10 bg-[#03060d]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-6 py-12 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="px-6 py-4 text-center transition-transform duration-300 hover:-translate-y-1">
            <p className="font-mono text-4xl font-extrabold text-white">01</p>
            <p className="mt-2 text-sm text-slate-400">
              Gannon Cyber Defense Club
            </p>
          </div>

          <div className="px-6 py-4 text-center transition-transform duration-300 hover:-translate-y-1">
            <p className="font-mono text-4xl font-extrabold text-cyan-400">
              ∞
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Opportunities to Learn
            </p>
          </div>

          <div className="px-6 py-4 text-center transition-transform duration-300 hover:-translate-y-1">
            <p className="font-mono text-4xl font-extrabold text-blue-400">
              24/7
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Threat Monitoring and Defense
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#020408] px-6 py-8 text-center font-mono text-xs text-slate-500">
        <p>
          © 2026 Gannon University Cyber Defense Club. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
