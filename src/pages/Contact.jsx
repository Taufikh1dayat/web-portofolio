import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-950 px-8 py-20 text-white">
            <div className="max-w-3xl">
                <h1 className="text-4xl font-bold mb-6">Contact</h1>

                <p className="text-gray-300 mb-10">
                    Tertarik bekerja sama atau ingin berdiskusi?
                    Silakan hubungi saya melalui salah satu platform di bawah ini.
                </p>

                <div className="space-y-5">
                    {/* Email */}
                    <a
                        href="mailto:dayattaufik078@gmail.com"
                        className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-indigo-500 transition"
                    >
                        <FaEnvelope className="text-2xl text-indigo-400" />
                        <span>dayattaufik078@gmail.com</span>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/Taufikh1dayat"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-indigo-500 transition"
                    >
                        <FaGithub className="text-2xl text-indigo-400" />
                        <span>github.com/Taufikh1dayat</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/m-taufik-hidayat-051541240"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-indigo-500 transition"
                    >
                        <FaLinkedin className="text-2xl text-indigo-400" />
                        <span>linkedin.com/in/usernamekamu</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
