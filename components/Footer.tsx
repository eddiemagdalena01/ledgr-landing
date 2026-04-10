'use client';

import { useLang } from '@/components/LanguageProvider';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-primary py-10 px-4">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-3">
        <span className="font-display text-white font-bold text-xl">{t.nav.logo}</span>
        <p className="text-white/40 text-sm">{t.footer.copy}</p>
      </div>
    </footer>
  );
}
