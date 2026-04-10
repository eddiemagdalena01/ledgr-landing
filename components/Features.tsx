'use client';

import { useLang } from '@/components/LanguageProvider';

export default function Features() {
  const { t } = useLang();

  return (
    <section className="py-20 px-4 bg-surface">
      <h2 className="font-display text-3xl font-bold text-primary mb-12 text-center">
        {t.features.heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
        {t.features.items.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl">
              {item.icon}
            </div>
            <h3 className="font-display text-xl font-semibold text-primary mt-4">
              {item.title}
            </h3>
            <p className="text-muted text-base mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
