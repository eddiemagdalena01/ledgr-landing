export default function FinalCTA() {
  return (
    <section className="py-32 bg-surface-container-low relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 opacity-50" />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="bg-surface-container-lowest p-12 lg:p-20 rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center gap-12 border border-outline-variant/10">
          <div className="lg:w-2/3 space-y-6">
            <h2 className="text-4xl font-extrabold text-primary leading-tight">
              Protect your home before a small plumbing issue turns into major water
              damage.
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Your membership includes smart water monitoring support, priority service, an
              annual plumbing wellness check, leak-prevention testing, and preferred repair
              pricing.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-12 py-6 rounded-lg text-xl font-bold shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all cursor-pointer">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
