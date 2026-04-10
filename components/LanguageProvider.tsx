'use client';

import { createContext, useContext, useState } from 'react';
import { content, type Lang } from '@/lib/content';

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof content[Lang];
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider');
  return ctx;
}
