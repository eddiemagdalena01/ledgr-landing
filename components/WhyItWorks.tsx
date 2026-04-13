export default function WhyItWorks() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-primary mb-6">Built for Reliability</h2>
          <p className="text-lg text-on-surface-variant">
            We believe plumbing should be an invisible, flawless system. Our membership is
            designed to eliminate the &lsquo;surprise&rsquo; from home ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-lowest p-10 rounded-xl space-y-4">
            <span className="material-symbols-outlined text-4xl text-primary">
              security
            </span>
            <h3 className="text-xl font-bold text-primary">Structural Integrity</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Early detection prevents catastrophic structural failures. We treat your
              home&rsquo;s water system like the vital infrastructure it is.
            </p>
          </div>

          <div className="bg-surface-container-lowest p-10 rounded-xl space-y-4">
            <span className="material-symbols-outlined text-4xl text-primary">
              analytics
            </span>
            <h3 className="text-xl font-bold text-primary">Precision Monitoring</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Data-driven insights through app support and annual report cards ensure
              you&rsquo;re never guessing about your home&rsquo;s health.
            </p>
          </div>

          <div className="bg-surface-container-lowest p-10 rounded-xl space-y-4">
            <span className="material-symbols-outlined text-4xl text-primary">
              verified
            </span>
            <h3 className="text-xl font-bold text-primary">Expert Governance</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Member-only priority service means you have a master-level team on standby,
              ready to protect your investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
