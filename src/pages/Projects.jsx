import ProjectCard from "../components/Card.jsx";

const projects = [
    {
        title: "Website Portofolio",
        description: "Website portofolio personal menggunakan React dan Tailwind CSS.",
        tech: ["React", "Tailwind", "Vite"],
        link: "",
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
];

export default function Projects() {
    return (
        <section className="min-h-screen bg-black px-8 py-16">
            <h1 className="text-4xl font-bold text-white mb-10">
                Projects
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
