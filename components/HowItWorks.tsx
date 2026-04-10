'use client';

import { useLang } from '@/components/LanguageProvider';

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section className="py-20 px-4 bg-white">
      <h2 className="font-display text-3xl font-bold text-primary mb-12 text-center">
        {t.howItWorks.heading}
      </h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-[1100px] mx-auto mt-12 relative">
        {t.howItWorks.steps.map((step, index) => {
          const isLast = index === t.howItWorks.steps.length - 1;
          return (
            <div
              key={step.step}
              className={`relative flex-1 ${!isLast ? 'after:content-[""] after:hidden md:after:block after:absolute after:top-4 after:left-full after:w-8 after:border-t-2 after:border-dashed after:border-accent/30' : ''}`}
            >
              <span className="font-display text-8xl font-bold text-accent/10 absolute -top-4 -left-2 select-none leading-none">
                {step.step}
              </span>
              <div className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center mb-4 relative z-10">
                {step.step}
              </div>
              <h3 className="font-display text-xl font-semibold text-primary relative z-10">
                {step.title}
              </h3>
              <p className="text-muted text-base mt-2 leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
