import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import useInView from "../hooks/useInView";

export default function Home() {
  const [titleRef, titleVis] = useInView();
  const [subRef, subVis] = useInView();
  const [ctaRef, ctaVis] = useInView();

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
        {/* Avatar */}
        <div className="shrink-0 animate-fade-in">
          <Avatar name="TH" size={180} />
        </div>

        {/* Text */}
        <div className="max-w-2xl text-center lg:text-left">
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
            <p className="text-muted text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Saya membangun website modern, responsif, dan mudah digunakan —
              fokus di React & Tailwind CSS.
            </p>
          </div>

          <div
            ref={ctaRef}
            className={`transition-all duration-700 delay-500 mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${
              ctaVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              to="/projects"
              className="px-6 py-3 bg-accent text-base-900 font-semibold rounded-xl hover:bg-accent-light transition-all duration-200 active:scale-[0.97]"
            >
              Lihat Project
            </Link>
            <a
              href="https://linkedin.com/in/m-taufik-hidayat-051541240"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-accent/40 text-accent font-medium rounded-xl hover:bg-accent/10 transition-all duration-200 active:scale-[0.97]"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
