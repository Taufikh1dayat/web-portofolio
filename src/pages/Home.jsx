import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaAward } from "react-icons/fa";
import Avatar from "../components/Avatar";
import useInView from "../hooks/useInView";

const prefixText = "Saya membangun website modern, responsif, dan mudah digunakan — fokus di ";
const highlightText = "React & Tailwind CSS.";
const fullText = prefixText + highlightText;

export default function Home() {
  const [titleRef, titleVis] = useInView();
  const [subRef, subVis] = useInView();
  const [ctaRef, ctaVis] = useInView();

  const [displayedText, setDisplayedText] = useState("");
  const hasTyped = useRef(false);

  useEffect(() => {
    if (!subVis || hasTyped.current) return;
    hasTyped.current = true;

    let currentIndex = 0;
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    }, 300);

    return () => clearTimeout(startDelay);
  }, [subVis]);

  const prefixPart = displayedText.slice(0, prefixText.length);
  const highlightPart =
    displayedText.length > prefixText.length
      ? displayedText.slice(prefixText.length)
      : "";

  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      {/* Background atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px]" />
        {/* Grid overlay halus */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 min-h-[calc(100vh-7rem)] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* Avatar Portrait Card */}
        <div className="shrink-0 animate-fade-in">
          <Avatar width={280} height={340} />
        </div>

        {/* Text */}
        <div className="max-w-2xl text-center lg:text-left">
          {/* Badges Container */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for work / freelance
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-medium hover:bg-amber-500/20 hover:border-amber-500/50 active:scale-[0.98] transition-all"
            >
              <FaAward size={13} className="text-accent" />
              Dicoding Certified
            </Link>
          </div>

          <div
            ref={titleRef}
            className={`transition-all duration-700 delay-100 ${
              titleVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3 font-heading">
              Frontend Developer
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Hi, saya{" "}
              <span className="text-gradient">M. Taufik Hidayat</span>
            </h1>
          </div>

          <div
            ref={subRef}
            className={`transition-all duration-700 delay-300 mt-6 ${
              subVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-muted text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 min-h-[3.5rem]">
              <span>{prefixPart}</span>
              {highlightPart && (
                <span className="text-gray-100 font-semibold text-accent/90">
                  {highlightPart}
                </span>
              )}
              <span className="inline-block w-[2px] h-[1.15em] ml-1 bg-accent align-middle animate-pulse" />
            </p>
          </div>

          <div
            ref={ctaRef}
            className={`transition-all duration-700 delay-500 mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start ${
              ctaVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              to="/projects"
              className="w-full sm:w-auto text-center px-6 py-3 bg-accent text-base-900 font-semibold rounded-xl hover:bg-accent-light transition-all duration-200 active:scale-[0.97]"
            >
              Lihat Project
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center px-6 py-3 border border-accent/40 text-accent font-medium rounded-xl hover:bg-accent/10 transition-all duration-200 active:scale-[0.97]"
            >
              Hubungi Saya
            </Link>
            <div className="flex items-center gap-3 ml-0 sm:ml-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-base-600/40 w-full sm:w-auto justify-center">
              <a
                href="https://github.com/Taufikh1dayat"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-base-800/80 border border-base-600/50 text-muted hover:text-accent hover:border-accent/40 transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/m-taufik-hidayat-051541240"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-base-800/80 border border-base-600/50 text-muted hover:text-accent hover:border-accent/40 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:dayattaufik078@gmail.com"
                className="p-3 rounded-xl bg-base-800/80 border border-base-600/50 text-muted hover:text-accent hover:border-accent/40 transition-all"
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
