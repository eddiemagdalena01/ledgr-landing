export default function MembershipTiers() {
  return (
    <section className="py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-8 text-center mb-20">
        <h2 className="text-4xl font-bold text-on-primary mb-4">
          Choose Your Level of Protection
        </h2>
        <p className="text-on-primary-container text-lg">
          Scalable protection plans designed for every type of property.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Monitor Plan */}
        <div className="bg-primary-container/50 backdrop-blur-md p-10 rounded-2xl border border-primary-fixed-dim/10 text-on-primary flex flex-col">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Basic Monitor Plan</h3>
            <p className="text-on-primary-container text-sm">
              Essential monitoring for modern homes.
            </p>
          </div>
          <ul className="space-y-4 mb-12 flex-grow">
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary-fixed-dim">
                check_circle
              </span>
              App support
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary-fixed-dim">
                check_circle
              </span>
              Leak alert response
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary-fixed-dim">
                check_circle
              </span>
              Annual wellness check
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary-fixed-dim">
                check_circle
              </span>
              Member pricing
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary-fixed-dim">
                check_circle
              </span>
              Priority scheduling
            </li>
          </ul>
          <button className="w-full py-4 bg-surface-container-lowest text-primary font-bold rounded-lg hover:bg-primary-fixed transition-colors cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Protection Plan — Best Seller */}
        <div className="relative bg-surface-container-lowest p-10 rounded-2xl border-4 border-tertiary-container text-primary flex flex-col scale-105 shadow-2xl">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-tertiary-container text-on-tertiary-container px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap">
            Best Seller
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Protection Plan</h3>
            <p className="text-on-surface-variant text-sm">
              Comprehensive preventative coverage.
            </p>
          </div>
          <ul className="space-y-4 mb-12 flex-grow">
            <li className="flex items-center gap-3 text-sm font-semibold">
              Everything in Basic +
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-tertiary-container">
                check_circle
              </span>
              Pressure test
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-tertiary-container">
                check_circle
              </span>
              Toilet leak testing
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-tertiary-container">
                check_circle
              </span>
              Report card
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-tertiary-container">
                check_circle
              </span>
              Waived dispatch fee
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-tertiary-container">
                check_circle
              </span>
              Maintenance credit
            </li>
          </ul>
          <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-lg shadow-xl active:scale-95 transition-all cursor-pointer">
            Protect My Home
          </button>
        </div>

        {/* Premium Protection */}
        <div className="bg-primary-container/50 backdrop-blur-md p-10 rounded-2xl border border-primary-fixed-dim/10 text-on-primary flex flex-col">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Premium Protection</h3>
            <p className="text-on-primary-container text-sm">
              Ultimate care for discerning owners.
            </p>
          </div>
          <ul className="space-y-4 mb-12 flex-grow">
            <li className="flex items-center gap-3 text-sm font-semibold">
              Everything in Protection +
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary-fixed-dim">
                check_circle
              </span>
              Auto shutoff support
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary-fixed-dim">
                check_circle
              </span>
              Faster priority
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary-fixed-dim">
                check_circle
              </span>
              Water heater inspection
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary-fixed-dim">
                check_circle
              </span>
              Discounted drain service
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary-fixed-dim">
                check_circle
              </span>
              Semiannual checkups
            </li>
          </ul>
          <button className="w-full py-4 bg-surface-container-lowest text-primary font-bold rounded-lg hover:bg-primary-fixed transition-colors cursor-pointer">
            Select Premium
          </button>
        </div>
      </div>
    </section>
  );
}
