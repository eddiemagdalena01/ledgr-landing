'use client';

import { useLang } from '@/components/LanguageProvider';

export default function Nav() {
  const { lang, setLang, t } = useLang();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1100px] mx-auto px-4 flex items-center justify-between h-16 md:h-18">
        <span className="font-display text-xl font-bold text-primary">
          {t.nav.logo}
        </span>
        <div className="flex items-center gap-1">
          {(['en', 'es'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                lang === l
                  ? 'bg-accent text-white'
                  : 'text-muted hover:text-primary'
              }`}
            >
              {l === 'en' ? t.nav.toggleEN : t.nav.toggleES}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
