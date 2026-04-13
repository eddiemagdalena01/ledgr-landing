export default function Footer() {
  return (
    <footer className="bg-slate-100 w-full border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="text-xl font-bold text-blue-900 mb-6">
            The Authoritative Plumber
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Defining the standard of plumbing excellence through architectural integrity
            and proactive care.
          </p>
        </div>

        <div>
          <h5 className="text-xs uppercase tracking-widest text-blue-900 font-bold mb-6">
            Services
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                className="text-slate-500 hover:underline hover:text-blue-800 transition-colors"
                href="#"
              >
                Residential Services
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 hover:underline hover:text-blue-800 transition-colors"
                href="#"
              >
                Commercial Plumbing
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 hover:underline hover:text-blue-800 transition-colors"
                href="#"
              >
                Emergency Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-xs uppercase tracking-widest text-blue-900 font-bold mb-6">
            Company
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                className="text-slate-500 hover:underline hover:text-blue-800 transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 hover:underline hover:text-blue-800 transition-colors"
                href="#"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-200">
        <p className="text-slate-500 text-xs text-center">
          © 2024 The Authoritative Plumber. Structural Integrity Guaranteed.
        </p>
      </div>
    </footer>
  );
}
