import useInView from "../hooks/useInView";
import Avatar from "../components/Avatar";
import {
  FaCode,
  FaProjectDiagram,
  FaGraduationCap,
  FaAward,
  FaCertificate,
  FaFilePdf,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

const skills = [
  { name: "HTML5 / CSS3", level: 90 },
  { name: "JavaScript (ES6+)", level: 85 },
  { name: "React JS", level: 80 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Artificial Intelligence", level: 80 },
  { name: "Python", level: 75 },
  { name: "Git & GitHub", level: 80 },
  { name: "Machine Learning", level: 70 },
];

const highlights = [
  {
    icon: FaCode,
    number: "9+",
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

const certificates = [
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    badge: "Artificial Intelligence",
    description: "Sertifikasi kelulusan resmi dalam kurikulum Artificial Intelligence dari Dicoding Indonesia. Membuktikan pemahaman komprehensif terkait dasar-dasar AI, konsep Machine Learning, dan Deep Learning.",
    pdf: "/ai_sertificate.pdf",
    link: "https://www.dicoding.com/certificates/4EXGJ9ME1XRL",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    badge: "Web Development",
    description: "Sertifikasi kelulusan resmi dalam kurikulum pengembangan web dari Dicoding Indonesia. Membuktikan penguasaan standar dasar HTML5, CSS3, layouting responsif, dan best practices pembuatan website modern.",
    pdf: "/sertifikat_course.pdf",
    link: "https://www.dicoding.com/certificates/L4PQ51747ZO1",
  },
  {
    title: "Memulai Pemrograman Dengan Python",
    issuer: "Dicoding Indonesia",
    badge: "Python & AI",
    description: "Sertifikasi kelulusan resmi pemrograman Python dari Dicoding Indonesia. Membuktikan penguasaan logika dasar, tipe data, struktur kontrol alur, dan fungsi Python untuk pemrosesan data & pengembangan AI.",
    pdf: "/sertifikat_course_python.pdf",
    link: "https://www.dicoding.com/certificates/RVZK0DVLEZD5",
  },
  {
    title: "Belajar Dasar Literasi Keuangan",
    issuer: "Dicoding Indonesia",
    badge: "Financial Literacy",
    description: "Sertifikasi kelulusan resmi pemahaman literasi keuangan dari Dicoding Indonesia. Membuktikan pemahaman fondasi pengelolaan finansial dasar, perencanaan anggaran, dan manajemen risiko.",
    pdf: "/sertifikat_course_financial_literacy.pdf",
    link: "https://www.dicoding.com/certificates/07Z6QK9QRZQR",
  },
];

export default function About() {
  const [titleRef, titleVis] = useInView();
  const [bioRef, bioVis] = useInView();
  const [skillsRef, skillsVis] = useInView();
  const [certRef, certVis] = useInView();

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
        {/* Title */}
        <div
          ref={titleRef}
          className={`transition-all duration-500 mb-10 ${
            titleVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-block px-2.5 py-0.5 border border-white/60 bg-black text-neo-yellow font-mono text-xs font-bold uppercase tracking-wider mb-2">
            // PROFILE &amp; CREDENTIALS
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white">
            TENTANG SAYA
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start mb-16">
          {/* Bio + Avatar */}
          <div
            ref={bioRef}
            className={`md:col-span-3 border-2 border-white bg-base-800 p-6 sm:p-8 shadow-brutal flex flex-col sm:flex-row items-center sm:items-start gap-8 transition-all duration-500 delay-100 ${
              bioVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Avatar width={220} height={260} className="shrink-0 mb-2 sm:mb-0" />
            <div className="space-y-4 text-center sm:text-left font-space">
              <div className="inline-block px-2 py-0.5 border border-white bg-black font-mono text-xs text-neo-lime font-bold">
                STATUS: READY_TO_WORK
              </div>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Saya adalah seorang <strong className="text-white font-black bg-white/10 px-1">Frontend Developer</strong> yang berfokus membangun antarmuka website modern, responsif, dan berperforma tinggi dengan ekosistem <strong className="text-neo-yellow font-black">React JS</strong>, <strong className="text-neo-yellow font-black">Tailwind CSS</strong>, dan integrasi <strong className="text-neo-cyan font-black">AI</strong>.
              </p>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Selain pengembangan web, saya juga berpengalaman mengeksplorasi bahasa <strong className="text-white font-black">Python</strong>, scraping data real-time, dan fine-tuning LLM untuk analisa mendalam.
              </p>
            </div>
          </div>

          {/* Skills Bar */}
          <div
            ref={skillsRef}
            className={`md:col-span-2 border-2 border-white bg-base-800 p-6 shadow-brutal transition-all duration-500 delay-200 ${
              skillsVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="bg-white text-black px-3 py-1 -mt-6 -mx-6 mb-5 border-b-2 border-white font-mono text-xs font-black uppercase tracking-wider flex items-center justify-between">
              <span>// SKILL_METRICS.JSON</span>
              <span>[OK]</span>
            </div>
            <div className="space-y-3.5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-neo-yellow">{skill.level}%</span>
                  </div>
                  <div className="h-3 border-2 border-white bg-base-900 overflow-hidden">
                    <div
                      className="h-full bg-neo-yellow transition-all duration-700 ease-out"
                      style={{
                        width: skillsVis ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Stat Grid */}
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 border-2 border-white bg-base-800 shadow-brutal-sm flex items-center gap-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal transition-all"
              >
                <div className="p-3 border-2 border-white bg-neo-yellow text-black shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <span className="text-2xl font-black font-heading text-white block">
                    {item.number}
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-200 block uppercase">
                    {item.title}
                  </span>
                  <span className="text-[11px] font-mono text-muted block">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sertifikasi & Kredensial Section */}
        <div
          ref={certRef}
          className={`transition-all duration-500 delay-100 ${
            certVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="p-2 border-2 border-white bg-neo-lime text-black font-black">
              <FaAward size={20} />
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white">
              SERTIFIKASI &amp; KREDENSIAL RESMI
            </h3>
          </div>

          <div className="space-y-5">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="border-2 border-white bg-base-800 shadow-brutal-yellow transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Certificate Window Header on Mobile */}
                <div className="flex-1 p-5 sm:p-6 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-black px-2.5 py-0.5 border border-black bg-neo-lime text-black inline-flex items-center gap-1">
                      <FaCheckCircle size={10} /> RESMI TERVERIFIKASI
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 border border-white bg-black text-neo-yellow">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-muted">
                      // {cert.issuer}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-heading text-lg sm:text-xl font-black text-white leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed max-w-3xl font-body mt-1">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-5 sm:p-6 lg:border-l-2 lg:border-white flex sm:flex-row lg:flex-col gap-3 shrink-0 bg-base-900/60 border-t-2 sm:border-t-0 border-white/60">
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-4 py-2 border-2 border-white bg-black text-white text-xs font-mono font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-black shadow-brutal-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                  >
                    <FaFilePdf size={13} className="text-red-400" />
                    [ PDF ]
                  </a>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-4 py-2 border-2 border-white bg-neo-yellow text-black text-xs font-mono font-black flex items-center justify-center gap-2 shadow-brutal-sm hover:bg-white active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                  >
                    <FaExternalLinkAlt size={11} />
                    [ VERIFIKASI ]
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
