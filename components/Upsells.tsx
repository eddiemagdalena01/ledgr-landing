const upsells = [
  {
    icon: 'water_drop',
    title: 'Water heater services',
    description: 'Optimization and descaling to extend lifespan.',
  },
  {
    icon: 'compress',
    title: 'PRV replacement',
    description: 'Pressure Reducing Valve installation for system safety.',
  },
  {
    icon: 'settings_input_component',
    title: 'Smart Auto-Shutoff',
    description: 'Automatic protection when leaks are detected.',
  },
  {
    icon: 'kitchen',
    title: 'Filtration Systems',
    description: 'Whole-home water purification installations.',
  },
];

export default function Upsells() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-primary">
              Smart ways to enhance your protection
            </h2>
            <p className="text-on-surface-variant mt-2">
              Professional upgrades to complement your membership.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upsells.map((item) => (
            <div
              key={item.title}
              className="bg-surface-container p-8 rounded-xl border-b-4 border-primary"
            >
              <span className="material-symbols-outlined text-3xl text-primary mb-4 block">
                {item.icon}
              </span>
              <h4 className="font-bold text-primary mb-2">{item.title}</h4>
              <p className="text-sm text-on-surface-variant">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
