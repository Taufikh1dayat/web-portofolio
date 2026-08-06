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

const certificates = [
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
];

export default function About() {
  const [titleRef, titleVis] = useInView();
  const [bioRef, bioVis] = useInView();
  const [skillsRef, skillsVis] = useInView();
  const [certRef, certVis] = useInView();

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
                Selain pengembangan web, saya juga berpengalaman mengeksplorasi bahasa <strong className="text-gray-100 font-semibold">Python</strong> pemrosesan data real-time scraping, dan analisa otomatis cyberbullying dengan melatih algoritma agar bisa mengetahui mana yang salah dan benar, lalu menambahkan LLM untuk analisa lebih tertata dan mendalam.
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
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
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

        {/* Sertifikasi & Kredensial Section */}
        <div
          ref={certRef}
          className={`transition-all duration-700 delay-200 ${
            certVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="font-heading text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
            <span className="p-2 rounded-xl bg-accent/10 text-accent">
              <FaAward size={22} />
            </span>
            Sertifikasi & Kredensial Resmi
          </h3>

          <div className="space-y-5">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="p-6 md:p-8 rounded-2xl border border-base-600/50 bg-base-800/40 backdrop-blur-sm hover:border-accent/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-amber-600/10 border border-accent/30 text-accent shrink-0">
                    <FaCertificate size={32} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                        <FaCheckCircle size={10} /> Terverifikasi Resmi
                      </span>
                      <span className="text-xs text-muted font-mono">{cert.issuer}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-accent/10 text-accent border border-accent/20">
                        {cert.badge}
                      </span>
                    </div>
                    <h4 className="font-heading text-xl font-semibold text-gray-100">
                      {cert.title}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed max-w-2xl">
                      {cert.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-base-600/40">
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-base-700/80 hover:bg-base-600 text-gray-200 text-xs font-semibold flex items-center justify-center gap-2 border border-base-600/60 transition-all"
                  >
                    <FaFilePdf size={14} className="text-red-400" />
                    Lihat PDF
                  </a>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-light text-base-900 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-accent/20"
                  >
                    <FaExternalLinkAlt size={12} />
                    Verifikasi Official
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
