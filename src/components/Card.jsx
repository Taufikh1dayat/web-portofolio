export default function ProjectCard({ title, description, tech, link }) {
    return (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-indigo-500 transition">
            <h2 className="text-2xl font-semibold text-white mb-3">
                {title}
            </h2>

            <p className="text-gray-400 mb-4">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {tech.map((item, index) => (
                    <span
                        key={index}
                        className="text-sm px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                    >
                        {item}
                    </span>
                ))}
            </div>

            <a
                href={link}
                className="text-indigo-400 hover:underline"
            >
                Lihat Project →
            </a>
        </div>
    );
}
