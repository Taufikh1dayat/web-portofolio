import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-base-600/50 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} M. Taufik Hidayat
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:dayattaufik078@gmail.com"
            className="text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </a>
          <a
            href="https://github.com/Taufikh1dayat"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/m-taufik-hidayat-051541240"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
