import useInView from "../hooks/useInView";
import Avatar from "../components/Avatar";
import { FaCode, FaProjectDiagram, FaGraduationCap } from "react-icons/fa";

const skills = [
  { name: "HTML5 / CSS3", level: 90 },
  { name: "JavaScript (ES6+)", level: 85 },
  { name: "React JS", level: 80 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Artificial Intelligence", level: 80 },
  { name: "Python", level: 75 },
  { name: "Git & GitHub", level: 75 },
  { name: "Astro", level: 70 },
];

const highlights = [
  {
    icon: FaCode,
    number: "8+",
    title: "Proyek Selesai",
    desc: "Aplikasi Web & AI Desktop",
  },
  {
    icon: FaProjectDiagram,
    number: "6+",
    title: "Teknologi Utama",
    desc: "React, AI, Tailwind, Python, dll",
  },
  {
    icon: FaGraduationCap,
    number: "100%",
    title: "Komitmen Belajar",
    desc: "Teknologi Web Modern & AI",
  },
];

export default function About() {
  const [titleRef, titleVis] = useInView();
  const [bioRef, bioVis] = useInView();
  const [skillsRef, skillsVis] = useInView();

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-24 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-24 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Title */}
        <div
          ref={titleRef}
          className={`transition-all duration-700 mb-12 ${
            titleVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3 font-heading">
            About
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Tentang Saya
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center mb-16">
          {/* Bio + Avatar */}
          <div
            ref={bioRef}
            className={`md:col-span-3 flex flex-col sm:flex-row items-center sm:items-start gap-8 transition-all duration-700 delay-200 ${
              bioVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Avatar width={240} height={290} className="shrink-0 mb-4 sm:mb-0" />
            <div className="space-y-4 text-center sm:text-left">
              <p className="text-muted text-base leading-relaxed">
                Saya adalah seorang <strong className="text-gray-100 font-semibold">Frontend Developer</strong> yang berdedikasi membangun antarmuka website modern, responsif, dan performan. Berbekal keahlian di ekosistem <strong className="text-accent">React JS</strong>, <strong className="text-accent">Tailwind CSS</strong>, dan integrasi <strong className="text-accent">Artificial Intelligence</strong>, saya merancang pengalaman pengguna yang interaktif.
              </p>
              <p className="text-muted text-base leading-relaxed">
                Selain pengembangkan web, saya juga berpengalaman mengeksplorasi bahasa <strong className="text-gray-100 font-semibold">Python</strong> untuk aplikasi desktop AI (Groq API) dan pemrosesan Komputer Visi (*Mediapipe & OpenCV*).
              </p>
              <p className="text-muted text-base leading-relaxed">
                Saya selalu bersemangat mempelajari teknologi baru, mengikuti best practices pengembangan perangkat lunak, dan siap berkontribusi dalam proyek-proyek yang menantang.
              </p>
            </div>
          </div>

          {/* Skills Bar */}
          <div
            ref={skillsRef}
            className={`md:col-span-2 bg-base-800/40 border border-base-600/50 p-6 rounded-2xl transition-all duration-700 delay-400 ${
              skillsVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="font-heading font-semibold text-lg mb-6 text-gray-200">
              Keahlian Utama
            </h3>
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-muted text-xs font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-base-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent via-amber-400 to-amber-500 transition-all duration-1000 ease-out"
                      style={{
                        width: skillsVis ? `${skill.level}%` : "0%",
                        transitionDelay: `${i * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Stat Grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-base-600/40 bg-base-800/30 flex items-center gap-5 hover:border-accent/30 transition-all"
              >
                <div className="p-4 rounded-xl bg-accent/10 text-accent shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <span className="text-2xl font-bold font-heading text-gray-100 block">
                    {item.number}
                  </span>
                  <span className="text-sm font-semibold text-gray-300 block">
                    {item.title}
                  </span>
                  <span className="text-xs text-muted block">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
