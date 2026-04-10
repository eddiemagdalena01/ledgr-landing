'use client';

import { useLang } from '@/components/LanguageProvider';

export default function SocialProof() {
  const { t } = useLang();

  return (
    <section className="py-20 px-4 bg-primary">
      <h2 className="font-display text-3xl font-bold text-white text-center mb-16">
        {t.socialProof.heading}
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-12 mb-16">
        {t.socialProof.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-4xl font-bold text-accent">{stat.value}</p>
            <p className="text-white/60 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 mb-16 max-w-[1100px] mx-auto" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {t.socialProof.testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-white/10 rounded-2xl p-8 border border-white/20"
          >
            <p className="font-display text-5xl text-accent leading-none mb-4">&ldquo;</p>
            <p className="text-white text-lg leading-relaxed">{testimonial.quote}</p>
            <p className="font-semibold text-white mt-6">{testimonial.name}</p>
            <p className="text-white/50 text-sm mt-1">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
