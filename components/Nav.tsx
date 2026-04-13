export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-xl shadow-primary/5">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight text-primary">
          The Authoritative Plumber
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-primary font-bold border-b-2 border-primary transition-colors duration-200"
            href="#"
          >
            Services
          </a>
          <a
            className="text-slate-600 font-medium hover:text-blue-700 transition-colors"
            href="#"
          >
            Memberships
          </a>
          <a
            className="text-slate-600 font-medium hover:text-blue-700 transition-colors"
            href="#"
          >
            Service Area
          </a>
          <a
            className="text-slate-600 font-medium hover:text-blue-700 transition-colors"
            href="#"
          >
            About
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            className="hidden lg:block text-primary font-semibold hover:text-blue-700 transition-colors"
            href="tel:1-800-PLUMB"
          >
            Call 1-800-PLUMB
          </a>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-semibold active:scale-95 transition-all shadow-lg shadow-primary/10 cursor-pointer">
            Become a Member
          </button>
        </div>
      </div>
    </nav>
  );
}
