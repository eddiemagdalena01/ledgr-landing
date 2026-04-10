'use client';

import { useLang } from '@/components/LanguageProvider';

export default function Hero() {
  const { t } = useLang();

  const [line1, line2] = t.hero.headline.split(/\.(.+)/).filter(Boolean).map((s) => s.trim());

  const handleCTA = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 blur-3xl rounded-full -z-10" />
      <div className="max-w-[1100px] mx-auto text-center">
        <h1 className="font-display text-3xl md:text-6xl font-bold text-primary leading-tight">
          {line1}.
          <br />
          {line2}
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-xl mx-auto mt-4">
          {t.hero.subheadline}
        </p>
        <button
          onClick={handleCTA}
          className="bg-accent hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl mt-8 inline-block transition-colors"
        >
          {t.hero.cta}
        </button>
      </div>
    </section>
  );
}
