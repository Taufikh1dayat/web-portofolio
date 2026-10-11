import { useState } from "react";
import ProjectCard from "../components/Card.jsx";
import useInView from "../hooks/useInView";

const projects = [
  {
    title: "Gym Management System",
    description: "Sistem manajemen klub kebugaran full-stack dengan 4 Role Multi-Dashboard (Admin, Staff, Trainer, Member), terminal check-in barcode, kartu digital, dan booking kelas.",
    category: "Web Application",
    tech: ["React", "TypeScript", "Tailwind", "Node.js", "Express", "Prisma", "MySQL"],
    link: "https://github.com/Taufikh1dayat/gymManagement",
    image: null,
  },
  {
    title: "Web Analytics Platform",
    description: "Platform analitik web modern interaktif untuk memantau pengunjung, visualisasi metrik real-time, dan insight performa situs.",
    category: "Web Application",
    tech: ["React", "Tailwind", "JavaScript", "Chart.js"],
    link: "https://github.com/Taufikh1dayat/web_analytics",
    image: null,
  },
  {
    title: "Modern Blog",
    description: "Blog personal modern dengan performa tinggi, dibangun menggunakan Astro dan MDX.",
    category: "Web Application",
    tech: ["Astro", "MDX", "TypeScript", "CSS", "JavaScript"],
    link: "https://modern-blog-taufikdev.vercel.app/",
    image: null,
  },
  {
    title: "Website Portofolio",
    description: "Website portofolio personal interaktif menggunakan React 19 dan Tailwind CSS v3.",
    category: "Web Application",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://web-portofolio-two-rouge.vercel.app/",
    image: null,
  },
  {
    title: "Skripsi Assistant AI Desktop App",
    description: "Aplikasi desktop berbasis AI dengan Groq API untuk membantu penyusunan dan analisa skripsi.",
    category: "AI & Desktop",
    tech: ["Python", "Tkinter", "Groq API", "Sqlite", "Matplotlib", "ReportLab"],
    link: "https://github.com/Taufikh1dayat/skripsi-assistant-ai",
    image: null,
  },
  {
    title: "Face & Hand Detector",
    description: "Deteksi wajah dan tangan real-time dengan gesture tracking & fitur menggambar kanvas.",
    category: "Computer Vision",
    tech: ["Python", "OpenCV", "Mediapipe"],
    link: "https://github.com/Taufikh1dayat/faceRecognition",
    image: null,
  },
  {
    title: "Website Kedai Kopi",
    description: "Landing page modern dan responsif untuk kedai kopi dengan animasi JS murni.",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Taufikh1dayat/kedai-kopi-kelayu/tree/main/Kedai-Kopi-Kelayu",
    image: null,
  },
  {
    title: "To-do List App",
    description: "Aplikasi manajemen tugas/to-do list sederhana dengan persistent storage & CRUD lengkap.",
    category: "Web Application",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Taufikh1dayat/To-do-list",
    image: null,
  },
  {
    title: "Cuaca App",
    description: "Aplikasi pemantau prakiraan cuaca real-time yang terhubung ke OpenWeather API.",
    category: "Web Application",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Taufikh1dayat/cuaca",
    image: null,
  },
];

const techColors = {
  "React": "from-sky-500 to-blue-600",
  "Tailwind": "from-cyan-400 to-teal-500",
  "Vite": "from-purple-500 to-pink-500",
  "Node.js": "from-emerald-500 to-green-700",
  "Express": "from-gray-500 to-slate-700",
  "Prisma": "from-teal-400 to-cyan-600",
  "MySQL": "from-blue-600 to-cyan-700",
  "Python": "from-blue-500 to-indigo-600",
  "Tkinter": "from-gray-400 to-gray-600",
  "Groq API": "from-emerald-400 to-green-600",
  "Sqlite": "from-blue-400 to-blue-700",
  "Matplotlib": "from-orange-400 to-red-500",
  "ReportLab": "from-red-400 to-rose-600",
  "OpenCV": "from-green-400 to-emerald-600",
  "Mediapipe": "from-teal-400 to-cyan-600",
  "HTML": "from-orange-400 to-red-500",
  "CSS": "from-blue-400 to-indigo-500",
  "Astro": "from-orange-500 to-violet-600",
  "MDX": "from-cyan-400 to-blue-500",
  "TypeScript": "from-blue-500 to-indigo-600",
  "JavaScript": "from-yellow-400 to-amber-500",
  "Chart.js": "from-rose-500 to-amber-500",
  "Git": "from-red-500 to-orange-600",
};

const categories = ["Semua", "Web Application", "AI & Desktop", "Computer Vision", "Frontend"];

export default function Projects() {
  const [titleRef, titleVis] = useInView();
  const [gridRef, gridVis] = useInView();
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -right-24 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -left-24 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[120px]" />
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
          className={`transition-all duration-700 mb-8 ${
            titleVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3 font-heading">
            Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Projects & Karya
          </h2>
          <p className="text-muted mt-2 text-sm max-w-xl">
            Kumpulan proyek pengembangan web, aplikasi desktop berbasis AI, dan komputasi visi yang telah saya bangun.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-accent text-base-900 font-semibold shadow-md shadow-accent/20"
                  : "bg-base-800/80 text-muted hover:text-gray-200 border border-base-600/50 hover:bg-base-700/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-100 ${
            gridVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              techColors={techColors}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
