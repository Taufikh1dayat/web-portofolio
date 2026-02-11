import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavbarRoot() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const menu = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] bg-black/80 backdrop-blur border-b border-white/10">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-white font-semibold">
                    Taufik.
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-gray-300">
                    {menu.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`hover:text-white transition ${location.pathname === item.path
                                ? "text-indigo-400"
                                : ""
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-2xl p-2 rounded-md hover:bg-white/10 transition"
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96" : "max-h-0"
                    }`}
            >
                <div className="bg-black/90 px-6 py-6 space-y-6 border-t border-white/10">
                    {menu.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className={`block text-lg transition ${location.pathname === item.path
                                ? "text-indigo-400"
                                : "text-gray-300 hover:text-white"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
