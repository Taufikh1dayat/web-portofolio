import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t-2 border-white bg-base-900 mt-24">
      {/* Running Marquee Ticker */}
      <div className="border-b-2 border-white bg-neo-yellow text-black py-1.5 overflow-hidden">
        <div className="font-mono font-black text-[10px] uppercase tracking-wider whitespace-nowrap animate-marquee">
          ★ REACT 19 • ⚡ TAILWIND CSS • ▲ BRUTALISM UI • ● AVAILABLE FOR WORK • ★ REACT 19 • ⚡ TAILWIND CSS • ▲ BRUTALISM UI • ● AVAILABLE FOR WORK
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-gray-300">
          [© {new Date().getFullYear()}] <span className="text-white font-bold">M. TAUFIK HIDAYAT</span> — BUILT WITH REACT & VITE
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:dayattaufik078@gmail.com"
            className="p-2.5 border-2 border-white bg-black text-white hover:bg-neo-yellow hover:text-black shadow-brutal-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            aria-label="Email"
          >
            <FaEnvelope size={16} />
          </a>
          <a
            href="https://github.com/Taufikh1dayat"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 border-2 border-white bg-black text-white hover:bg-neo-yellow hover:text-black shadow-brutal-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/m-taufik-hidayat-051541240"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 border-2 border-white bg-black text-white hover:bg-neo-yellow hover:text-black shadow-brutal-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
