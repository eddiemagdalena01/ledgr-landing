'use client';

import { useState } from 'react';
import { useLang } from '@/components/LanguageProvider';

type Status = 'idle' | 'loading' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WaitlistForm() {
  const { t } = useLang();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !EMAIL_RE.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        const data = await res.json();
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="waitlist" className="py-20 px-4 bg-surface">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="font-display text-3xl font-bold text-primary text-center">
          {t.waitlist.heading}
        </h2>
        <p className="text-muted text-center mt-4 mb-8">{t.waitlist.subheading}</p>

        {status === 'success' ? (
          <p className="text-accent font-semibold text-center text-lg">
            {t.waitlist.successMessage}
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder={t.waitlist.placeholder}
                className="w-full flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent text-primary placeholder:text-muted"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto bg-accent hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
                ) : (
                  t.waitlist.button
                )}
              </button>
            </div>
            {status === 'error' && errorMsg && (
              <p className="text-red-500 text-sm text-center mt-2">{errorMsg}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
