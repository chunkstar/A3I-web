import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">AgentAnchor</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a>
              <a href="#community" className="text-gray-300 hover:text-white transition">Community</a>
              <a
                href="https://github.com/agentanchor/agentanchor"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950/20 to-gray-950" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm">
            Open Source AI Governance Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The AI Governance<br />
            <span className="gradient-text">Operating System</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Building trust between humans and AI agents through transparent governance,
            earned autonomy, and immutable accountability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/agentanchor/agentanchor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl font-semibold text-lg transition transform hover:scale-105 glow"
            >
              View on GitHub
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold text-lg transition"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-indigo-400">7</div>
              <div className="text-gray-500">Governance Layers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">6</div>
              <div className="text-gray-500">Trust Tiers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400">100%</div>
              <div className="text-gray-500">Transparent</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Problem</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              AI agents are becoming increasingly autonomous, but there's no standard way to govern them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔒', title: 'Trust', desc: 'No way to verify agent reliability before use' },
              { icon: '👁️', title: 'Visibility', desc: 'Decisions made in black boxes, no audit trail' },
              { icon: '🎮', title: 'Control', desc: 'All-or-nothing autonomy with no middle ground' },
              { icon: '🔄', title: 'Recovery', desc: 'No system for handling agent failures' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Principles</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              AgentAnchor is built on principles that put humans in control while enabling AI agents to earn autonomy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '⚖️',
                title: 'Trust is Earned, Not Given',
                desc: 'Every agent starts at Trust Score 0. Through consistent, verified good behavior, agents earn autonomy. Bad decisions reduce trust.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: '📝',
                title: 'Every Decision is Recorded',
                desc: 'The Observer system creates an immutable audit trail of every agent action. Nothing is hidden. Everything is verifiable.',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: '🛡️',
                title: 'Humans Stay in Control',
                desc: 'The Council governance system ensures high-risk decisions require human approval. Humans always have override power.',
                color: 'from-orange-500 to-red-500',
              },
              {
                icon: '🔍',
                title: 'Transparency by Default',
                desc: 'Agent training, decision history, and trust scores are visible. Consumers can verify before they trust.',
                color: 'from-green-500 to-emerald-500',
              },
            ].map((feature, i) => (
              <div key={i} className="group relative p-8 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition`} />
                <div className="relative">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-lg">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Seven Layers</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive governance stack that ensures AI agents operate safely and transparently.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { layer: 'Human', purpose: 'Ultimate authority', feature: 'Walk-away rights, emergency override', color: 'bg-red-500' },
              { layer: 'Council', purpose: 'Governance decisions', feature: 'Multi-validator consensus', color: 'bg-orange-500' },
              { layer: 'Validators', purpose: 'Risk assessment', feature: 'Tribunal of specialized agents', color: 'bg-yellow-500' },
              { layer: 'Academy', purpose: 'Agent training', feature: 'Curriculum-based learning', color: 'bg-green-500' },
              { layer: 'Truth Chain', purpose: 'Immutable records', feature: 'Blockchain-anchored verification', color: 'bg-cyan-500' },
              { layer: 'Observer', purpose: 'Audit & monitoring', feature: 'Complete isolation for integrity', color: 'bg-blue-500' },
              { layer: 'Workers', purpose: 'Your AI agents', feature: 'Earn trust through behavior', color: 'bg-purple-500' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className={`w-3 h-12 ${item.color} rounded-full`} />
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-lg">{item.layer}</span>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-400">{item.purpose}</span>
                  </div>
                  <div className="text-sm text-gray-500">{item.feature}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Score Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trust Score System</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Agents earn trust through verified good behavior. Trust decays over time - it must be continuously earned.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { tier: 'Untrusted', score: '0-199', color: 'bg-gray-600' },
              { tier: 'Provisional', score: '200-399', color: 'bg-yellow-600' },
              { tier: 'Established', score: '400-599', color: 'bg-blue-600' },
              { tier: 'Trusted', score: '600-799', color: 'bg-green-600' },
              { tier: 'Verified', score: '800-899', color: 'bg-purple-600' },
              { tier: 'Certified', score: '900-1000', color: 'bg-indigo-600' },
            ].map((item, i) => (
              <div key={i} className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className={`w-full h-2 ${item.color} rounded-full mb-3`} />
                <div className="font-semibold">{item.tier}</div>
                <div className="text-sm text-gray-500">{item.score}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 bg-gradient-to-b from-gray-900/50 to-gray-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Community</h2>
          <p className="text-xl text-gray-400 mb-10">
            AgentAnchor is open source because AI governance is too important to be controlled by any single company.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <a
              href="https://github.com/agentanchor/agentanchor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-gray-600 transition group"
            >
              <div className="text-3xl mb-3">💻</div>
              <div className="font-semibold mb-1">Contribute Code</div>
              <div className="text-sm text-gray-500">PRs welcome</div>
            </a>
            <a
              href="https://discord.gg/agentanchor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-gray-600 transition group"
            >
              <div className="text-3xl mb-3">💬</div>
              <div className="font-semibold mb-1">Join Discord</div>
              <div className="text-sm text-gray-500">Chat with us</div>
            </a>
            <a
              href="https://twitter.com/agentanchor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-gray-600 transition group"
            >
              <div className="text-3xl mb-3">🐦</div>
              <div className="font-semibold mb-1">Follow Updates</div>
              <div className="text-sm text-gray-500">@agentanchor</div>
            </a>
          </div>

          <a
            href="https://github.com/agentanchor/agentanchor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl font-semibold text-lg transition transform hover:scale-105 glow"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            Star on GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">AgentAnchor</span>
            </div>

            <div className="flex items-center gap-6 text-gray-400">
              <a href="https://github.com/agentanchor/agentanchor" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
              <a href="https://discord.gg/agentanchor" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Discord</a>
              <a href="https://twitter.com/agentanchor" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter</a>
              <a href="mailto:hello@agentanchorai.com" className="hover:text-white transition">Contact</a>
            </div>

            <div className="text-gray-500 text-sm">
              MIT License
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            Building trust in AI, one verified decision at a time.
          </div>
        </div>
      </footer>
    </main>
  )
}
