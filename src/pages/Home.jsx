export default function Home() {
    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-indigo-950 px-4 md:px-8 pt-28">
            {/* Glow background */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -right-40 w-[700px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Hi, saya <span className="text-indigo-400">M. Taufik Hidayat</span>
                </h1>

                <h2 className="text-lg md:text-2xl text-gray-400 mb-6">
                    Frontend Developer | React & Tailwind
                </h2>

                <p className="text-gray-300 mb-8 leading-relaxed">
                    Saya membangun website modern, responsif, dan mudah digunakan
                    menggunakan React JS dan Tailwind CSS.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="/Projects"
                        className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                    >
                        Lihat Project
                    </a>
                    <a
                        href="/contact"
                        className="px-6 py-3 border border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500 hover:text-white transition"
                    >
                        Contact Saya (LinkedIn)
                    </a>
                </div>
            </div>
        </section>
    );
}
