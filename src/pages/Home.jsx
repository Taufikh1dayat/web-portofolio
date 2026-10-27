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
    let intervalId;
    const startDelay = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 30);
    }, 300);

    return () => {
      clearTimeout(startDelay);
      clearInterval(intervalId);
    };
  }, [subVis]);

  const prefixPart = displayedText.slice(0, prefixText.length);
  const highlightPart =
    displayedText.length > prefixText.length
      ? displayedText.slice(prefixText.length)
      : "";

  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-16">
      <div className="relative max-w-7xl mx-auto px-5 md:px-10 min-h-[calc(100vh-7rem)] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Avatar Card */}
        <div className="shrink-0">
          <Avatar width={280} height={340} />
        </div>

        {/* Text Area */}
        <div className="max-w-2xl text-center lg:text-left">
          {/* Brutalist Stickers / Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-white bg-neo-lime text-black text-xs font-mono font-black uppercase shadow-brutal-sm">
              <span className="w-2 h-2 bg-black inline-block animate-ping" />
              AVAILABLE FOR HIRE
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 px-3 py-1 border-2 border-white bg-neo-yellow text-black text-xs font-mono font-black uppercase shadow-brutal-sm hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
            >
              <FaAward size={13} />
              DICODING CERTIFIED
            </Link>
          </div>

          <div
            ref={titleRef}
            className={`transition-all duration-500 ${
              titleVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="inline-block px-2.5 py-0.5 border border-white/60 bg-black text-neo-yellow font-mono text-xs font-bold uppercase tracking-wider mb-3">
              // ROLE: FRONTEND DEVELOPER
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-4">
              HI, SAYA <br />
              <span className="inline-block bg-white text-black px-2 py-0.5 mt-2 border-2 border-black shadow-[4px_4px_0px_#FFE600] max-w-full truncate">
                M. TAUFIK HIDAYAT
              </span>
            </h1>
          </div>

          <div
            ref={subRef}
            className={`transition-all duration-500 delay-100 mt-4 ${
              subVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="p-4 border-2 border-white/80 bg-base-800 shadow-brutal-sm font-mono text-sm leading-relaxed text-gray-200">
              <span className="text-neo-yellow font-bold mr-2">&gt;</span>
              <span>{prefixPart}</span>
              {highlightPart && (
                <span className="bg-neo-yellow text-black px-1 font-bold">
                  {highlightPart}
                </span>
              )}
              <span className="inline-block w-2 h-4 ml-1 bg-neo-yellow align-middle animate-pulse" />
            </div>
          </div>

          <div
            ref={ctaRef}
            className={`transition-all duration-500 delay-200 mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start ${
              ctaVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              to="/projects"
              className="w-full sm:w-auto text-center px-6 py-3 border-2 border-white bg-neo-yellow text-black font-heading font-black text-xs uppercase tracking-wider shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              [ LIHAT PROJECT ]
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center px-6 py-3 border-2 border-white bg-black text-white font-heading font-black text-xs uppercase tracking-wider shadow-brutal hover:bg-white hover:text-black hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              [ HUBUNGI SAYA ]
            </Link>

            <div className="flex items-center gap-2 pt-2 sm:pt-0">
              <a
                href="https://github.com/Taufikh1dayat"
                target="_blank"
                rel="noreferrer"
                className="p-3 border-2 border-white bg-base-800 text-white hover:bg-neo-yellow hover:text-black shadow-brutal-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/m-taufik-hidayat-051541240"
                target="_blank"
                rel="noreferrer"
                className="p-3 border-2 border-white bg-base-800 text-white hover:bg-neo-yellow hover:text-black shadow-brutal-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:dayattaufik078@gmail.com"
                className="p-3 border-2 border-white bg-base-800 text-white hover:bg-neo-yellow hover:text-black shadow-brutal-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
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
