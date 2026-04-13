'use client';

export default function Hero() {
  return (
    <section
      className="relative min-h-[819px] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #001433 0%, #002046 50%, #1b365d 100%)' }}
    >
      {/* Background depth elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #aec7f7 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #aec7f7 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: copy */}
        <div className="space-y-8">
          <span
            className="inline-block text-xs uppercase tracking-[0.15em] font-bold px-4 py-1.5 rounded-md"
            style={{
              color: '#fe771b',
              background: 'rgba(254,119,27,0.12)',
              border: '1px solid rgba(254,119,27,0.2)',
            }}
          >
            PREVENTATIVE PROTECTION
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-white">
            Protect your home before a small plumbing issue turns into major
            water damage.
          </h1>

          <p className="text-xl leading-relaxed max-w-xl" style={{ color: '#aec7f7' }}>
            Gain peace of mind with our professional architectural approach to
            plumbing maintenance. No more emergencies, just structural integrity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="text-white px-10 py-5 rounded-lg text-lg font-bold shadow-2xl active:scale-95 transition-all cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #fe771b, #c45a0a)',
                boxShadow: '0 20px 40px rgba(254,119,27,0.25)',
              }}
            >
              Join Our Membership
            </button>
            <button
              className="px-10 py-5 rounded-lg text-lg font-bold transition-colors cursor-pointer"
              style={{
                color: '#aec7f7',
                background: 'rgba(174,199,247,0.08)',
                border: '1px solid rgba(174,199,247,0.2)',
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  'rgba(174,199,247,0.15)';
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  'rgba(174,199,247,0.08)';
              }}
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative group">
          <div
            className="absolute -inset-4 rounded-3xl blur-2xl transition-all duration-500"
            style={{ background: 'rgba(174,199,247,0.08)' }}
          />
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]"
            style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Professional plumber inspecting high-end architectural systems"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ filter: 'grayscale(0.1) brightness(0.9)' }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuZsD9UjnKquGRnWKNckTc1Q6e-52YY7RY-vv2MK6wB5Lzt9oOxz1bMSj-syk-CP_RuRL0VwuS_r11mqbtisbDWjRP1hi19pjfXa7rzy_krX45Nbi9CuLY9e8VTuUTzCc1W8vc4BXr3YZWd1ISfgvzxWMrWAsfl3GcYKcB9cnV3rkKJgLIx9afR17SIeR_kcq3zsFSNisQR_P2sgUwv_uOu_0mso93Dktsk-Xdb-upbFC_jr373MxnPmf2jWPkixTVbUzNlooGjTY"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
