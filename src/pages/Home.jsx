export default function Home() {
    return (
        // <section className="min-h-screen bg-black flex flex-col justify-center items-start px-8 py-16">

        //     <div className="max-w-3xl z-10">
        //         <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        //             Hi, saya <span className="text-indigo-400">M. Taufik Hidayat</span>
        //         </h1>

        //         <h2 className="text-2xl text-gray-400 mb-6">
        //             Frontend Developer | React & Tailwind
        //         </h2>

        //         <p className="text-gray-300 mb-8 leading-relaxed">
        //             Saya membangun website modern, responsif, dan mudah digunakan
        //             menggunakan React JS dan Tailwind CSS.
        //         </p>

        //         <div className="flex gap-4">
        //             <a
        //                 href="/projects"
        //                 className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
        //             >
        //                 Lihat Project
        //             </a>
        //             <a
        //                 href="/contact"
        //                 className="px-6 py-3 border border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500 hover:text-white transition"
        //             >
        //                 Contact Saya (LinkedIn)
        //             </a>
        //         </div>
        //     </div>
        // </section>
        <section className="relative min-h-screen flex items-center bg-black px-8 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -right-40 w-[700px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>

            <div className="relative max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                    Hi, saya <span className="text-indigo-400">M. Taufik Hidayat</span>
                </h1>

                <h2 className="text-2xl text-gray-400 mb-6">
                    Frontend Developer | React & Tailwind
                </h2>

                <p className="text-gray-300 mb-8 leading-relaxed">
                    Saya membangun website modern, responsif, dan mudah digunakan
                    menggunakan React JS dan Tailwind CSS.
                </p>

                <div className="flex gap-4">
                    <a
                        href="/projects"
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
