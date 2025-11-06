import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-lg tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
            MyPortfolio
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#projects"
            className="inline-flex items-center rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            View Work
          </a>
        </div>

        <button
          aria-label="Toggle Menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-gray-900"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              View Work
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
