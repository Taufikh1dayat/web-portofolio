import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const menu = [
  { name: "// HOME", path: "/" },
  { name: "// ABOUT", path: "/about" },
  { name: "// PROJECTS", path: "/projects" },
  { name: "// CONTACT", path: "/contact" },
];

export default function NavbarRoot() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-200 border-b-2 border-white ${
        scrolled ? "bg-base-900 shadow-[0_4px_0_0_#FFE600]" : "bg-base-900/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 group"
        >
          <span className="px-3 py-1 bg-neo-yellow text-black font-heading font-black text-sm tracking-wider uppercase border-2 border-white shadow-brutal-sm group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-brutal transition-all">
            TAUFIK.DEV
          </span>
          <span className="hidden sm:inline-block font-mono text-xs text-neo-lime font-bold">
            [SYS::ONLINE]
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {menu.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3.5 py-1.5 font-mono text-xs font-bold uppercase transition-all ${
                  active
                    ? "bg-white text-black border-2 border-white shadow-brutal-yellow translate-x-[-2px] translate-y-[-2px]"
                    : "border-2 border-transparent text-gray-300 hover:border-white hover:text-white hover:bg-base-800"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 border-2 border-white bg-base-800 text-white shadow-brutal-sm flex items-center justify-center active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="font-mono font-bold text-sm">
            {open ? "[X]" : "[=]"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-t-2 border-white bg-base-900 p-5 space-y-2">
          {menu.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 font-mono text-xs font-bold uppercase border-2 transition-all ${
                  active
                    ? "bg-neo-yellow text-black border-white shadow-brutal-sm"
                    : "border-white/30 text-gray-300 hover:border-white hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}