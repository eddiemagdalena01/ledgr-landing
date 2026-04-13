const services = [
  {
    title: 'Annual wellness check',
    description:
      'A comprehensive top-to-bottom inspection of your entire plumbing infrastructure.',
  },
  {
    title: 'App setup',
    description:
      'Professional configuration of your smart water monitoring systems for real-time alerts.',
  },
  {
    title: 'Priority service',
    description:
      'Jump to the front of the line for all scheduled appointments and unforeseen needs.',
  },
  {
    title: 'Water heater safety inspection',
    description:
      'Critical safety check to ensure your water heater is operating efficiently and safely.',
  },
  {
    title: 'Toilet leak dye test',
    description:
      'Detection of silent leaks that can waste thousands of gallons of water per year.',
  },
  {
    title: 'Pressure check',
    description:
      'Testing for high water pressure that can stress pipes and cause premature fixture failure.',
  },
  {
    title: 'Shutoff valve tagging',
    description:
      'Clearly identifying all main and local shutoff valves for emergency preparedness.',
  },
  {
    title: 'Member-only visual leak review',
    description:
      'Specialized review focused on identifying hard-to-spot visual indicators of pipe fatigue.',
  },
  {
    title: 'Annual plumbing report card',
    description:
      'A detailed health report of your home\u2019s system with professional recommendations.',
  },
  {
    title: 'Small repair credit',
    description:
      'An annual credit applicable toward any necessary maintenance or repairs found during inspection.',
  },
];

export default function IrresistibleStack() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Sticky sidebar */}
          <div className="lg:w-1/3 sticky top-32">
            <span className="uppercase tracking-widest text-primary font-bold text-sm">
              The Core Benefits
            </span>
            <h2 className="text-4xl font-bold text-primary mt-4 mb-8">
              The &lsquo;Irresistible&rsquo; Stack
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              A comprehensive list of high-value services included to keep your plumbing
              system in peak condition year-round.
            </p>
            <div className="mt-12 p-8 rounded-xl border" style={{ background: 'rgba(93,37,0,0.05)', borderColor: 'rgba(93,37,0,0.1)' }}>
              <p className="text-tertiary font-bold italic">
                &ldquo;An ounce of prevention is worth a gallon of water damage
                prevention.&rdquo;
              </p>
            </div>
          </div>

          {/* 10-service grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-surface-container-low p-8 rounded-lg hover:bg-surface-container-high transition-colors"
              >
                <h4 className="font-bold text-primary mb-2">{service.title}</h4>
                <p className="text-sm text-on-surface-variant">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
