export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Product Managers &amp; Engineering Leads
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-notify stakeholders of{" "}
          <span className="text-[#58a6ff]">relevant changes</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect your changelog sources, let AI parse the changes, and automatically ping the right people — no manual updates, no missed releases.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $18/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">
          GitHub releases, manual uploads, email &amp; Slack notifications
        </p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🔗", title: "Connect Sources", desc: "GitHub releases or manual changelog uploads" },
          { icon: "🤖", title: "AI Parsing", desc: "Automatically categorise and summarise changes" },
          { icon: "📣", title: "Smart Notify", desc: "Route updates to stakeholders by interest profile" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$18</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-2 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited stakeholder profiles",
              "GitHub + manual changelog sources",
              "AI-powered change parsing",
              "Email &amp; Slack notifications",
              "Webhook-based processing",
              "Simple management dashboard"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does stakeholder matching work?",
              a: "Each stakeholder has an interest profile (keywords, teams, product areas). When a changelog is parsed, AI extracts relevant tags and routes notifications only to matching stakeholders."
            },
            {
              q: "Which changelog sources are supported?",
              a: "GitHub Releases via webhook and manual file uploads (Markdown or plain text). More integrations are on the roadmap."
            },
            {
              q: "Can I customise the notification format?",
              a: "Yes. You can configure per-stakeholder templates for both email and Slack, including summary length and which change categories to include."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Changelog Stakeholder Auto-Notifier. All rights reserved.
      </footer>
    </main>
  );
}
