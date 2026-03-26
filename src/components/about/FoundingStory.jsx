export default function FoundingStory() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-brand-teal font-semibold text-sm uppercase tracking-widest mb-4">
              Our story
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-brand-navy tracking-tight leading-tight mb-6">
              Built by practitioners,
              for practitioners.
            </h1>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Auriga AI was founded after watching too many organisations
                deploy AI systems without any governance scaffolding — and then
                scramble when things went wrong. We saw the same story play out
                again and again: capable teams, good intentions, and no
                framework to catch the gaps.
              </p>
              <p>
                We built Auriga AI to change that. Our team brings together
                expertise in AI policy, enterprise risk management, and public
                sector governance to deliver frameworks that are practical,
                audit-ready, and genuinely embedded — not just filed away.
              </p>
              <p>
                The name Auriga comes from the constellation of the charioteer
                — the driver who keeps fast-moving systems under control. That&apos;s
                exactly what we do for your AI.
              </p>
            </div>
          </div>

          {/* Decorative block (no images) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-brand-teal rounded-2xl translate-x-4 translate-y-4" />
              <div className="relative bg-brand-navy rounded-2xl p-10 text-white z-10">
                <div className="text-6xl font-black text-brand-teal mb-2">α</div>
                <p className="text-lg font-bold mb-1">Auriga</p>
                <p className="text-blue-200 text-sm mb-8">The Charioteer</p>
                <div className="space-y-3 text-sm text-blue-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-teal" />
                    Founded in Australia
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-teal" />
                    Public & private sector expertise
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-teal" />
                    Regulation-first approach
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
