import { Link } from "react-router-dom";

export default function NavbarRoot() {
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/60 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
                <h1 className="text-white font-bold text-lg">
                    M. Taufik Hidayat
                </h1>

                <div className="hidden md:flex gap-6 text-gray-300">
                    <Link to="/" className="hover:text-white">Home</Link>
                    <Link to="/about" className="hover:text-white">About</Link>
                    <Link to="/projects" className="hover:text-white">Projects</Link>
                    <Link to="/contact" className="hover:text-white">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
