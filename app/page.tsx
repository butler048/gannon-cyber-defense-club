export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b17] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-white px-6 py-4 text-gray-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl">
              🛡️
            </div>

            <div>
              <h1 className="font-bold leading-none">
                Gannon Cyber Defense Club
              </h1>
              
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#" className="transition hover:text-blue-600">
              Home
            </a>
            <a href="#" className="transition hover:text-blue-600">
              About
            </a>
            <a href="#" className="transition hover:text-blue-600">
              Events
            </a>
            <a href="#" className="transition hover:text-blue-600">
              Resources
            </a>
            <a href="#" className="transition hover:text-blue-600">
              iHack
            </a>
          </div>

          <a
            href="#threats"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Threat Dashboard
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        
        {/* Background glow */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
          
          {/* Left side */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Gannon University Cyber Defense Club
            </div>

            <h2 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Defending.
              <br />
              <span className="text-blue-400">Learning.</span>
              <br />
              Building.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              Welcome to Gannon University's CyberDefense Club!
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#threats"
                className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-500"
              >
                Explore Threats →
              </a>

              <a
                href="#about"
                className="rounded-full border border-white/20 px-7 py-3.5 font-semibold transition hover:bg-white/10"
              >
                Learn About Us
              </a>
            </div>

            {/* Features */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
              <span>✓ Hands-On Learning</span>
              <span>✓ Industry Events</span>
              <span>✓ Real Projects</span>
            </div>
          </div>

          {/* Threat Dashboard Preview */}
          <div id="threats" className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">
                    CYBERSECURITY
                  </p>
                  <h3 className="mt-1 text-xl font-bold">
                    Threat Intelligence
                  </h3>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1.5 text-xs text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  LIVE
                </div>
              </div>

              {/* Threat cards */}
              <div className="space-y-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">CVE</p>
                      <p className="mt-1 font-medium">
                        Critical Vulnerability
                      </p>
                    </div>

                    <span className="rounded-lg bg-red-500/10 px-3 py-1 text-sm font-semibold text-red-400">
                      9.8
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">CVE</p>
                      <p className="mt-1 font-medium">
                        High Severity Vulnerability
                      </p>
                    </div>

                    <span className="rounded-lg bg-orange-500/10 px-3 py-1 text-sm font-semibold text-orange-400">
                      8.6
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">THREAT LEVEL</p>
                      <p className="mt-1 font-medium">
                        Monitoring Active Threats
                      </p>
                    </div>

                    <span className="rounded-lg bg-yellow-500/10 px-3 py-1 text-sm font-semibold text-yellow-400">
                      HIGH
                    </span>
                  </div>
                </div>
              </div>

              {/* Dashboard button */}
              <button className="mt-5 w-full rounded-xl border border-blue-400/30 bg-blue-500/10 py-3 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20">
                View Threat Dashboard →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-6 py-12 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          
          <div className="px-6 py-4 text-center">
            <p className="text-4xl font-bold">01</p>
            <p className="mt-2 text-sm text-gray-500">
              Cyber Defense Club
            </p>
          </div>

          <div className="px-6 py-4 text-center">
            <p className="text-4xl font-bold">∞</p>
            <p className="mt-2 text-sm text-gray-500">
              Opportunities to Learn
            </p>
          </div>

          <div className="px-6 py-4 text-center">
            <p className="text-4xl font-bold">24/7</p>
            <p className="mt-2 text-sm text-gray-500">
              Cyber Threats Evolving
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}