export default function About() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Git",
        "Python",
    ];

    return (
        <section className="min-h-screen bg-black px-4 md:px-8 py-16 pt-28 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>

            <p className="max-w-2xl text-gray-300 mb-10 leading-relaxed">
                Saya adalah seorang frontend developer yang fokus membangun antarmuka
                website modern, responsif, dan mudah digunakan. Saya terbiasa menggunakan
                React JS dan Tailwind CSS dalam pengembangan web.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Skills</h2>

            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-gray-800 rounded-lg text-sm"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}
