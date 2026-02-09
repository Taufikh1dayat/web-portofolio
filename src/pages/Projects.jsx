import ProjectCard from "../components/Card.jsx";

const projects = [
    {
        title: "Website Portofolio",
        description: "Website portofolio personal menggunakan React dan Tailwind CSS.",
        tech: ["React", "Tailwind", "Vite"],
        link: "https://web-portofolio-two-rouge.vercel.app/",
    },
    {
        title: "Skripsi Assistant AI Dekstop App",
        description: "Aplikasi desktop berbasis AI untuk membantu pembuatan skripsi.",
        tech: ["Pyhton", "Tkinter", "Groq API", "sqlite", "matplotlib", "reportlab", "requests"],
        link: "https://github.com/Taufikh1dayat/skripsi-assistant-ai",
    },
    {
        title: "Face and Hand Detector with Drawing Feature",
        description: "Aplikasi desktop berbasis AI untuk mendeteksi wajah dan tangan serta fitur menggambar.",
        tech: ["Python", "OpenCV", "Mediapipe"],
        link: "https://github.com/Taufikh1dayat/faceRecognition",
    },
    {
        title: "Website Kedai Kopi",
        description: "Website kedai kopi menggunakan HTML, CSS, dan Vanilla JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/Taufikh1dayat/kedai-kopi-kelayu/tree/main/Kedai-Kopi-Kelayu",
    },
    {
        title: "To-do List App",
        description: "Aplikasi to-do list sederhana menggunakan HTML, CSS, dan Vanilla JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/Taufikh1dayat/To-do-list",
    },
    {
        title: "Cuaca App",
        description: "Website pemantau cuaca sederhana menggunakan HTML, CSS, dan Vanilla JavaScript. Data cuaca diambil dari OpenWeather API.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/Taufikh1dayat/cuaca",
    },
];

export default function Projects() {
    return (
        <section className="min-h-screen bg-black px-4 md:px-8 py-16 pt-28">
            <h1 className="text-4xl font-bold text-white mb-10">
                Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
