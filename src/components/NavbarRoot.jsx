import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-black border-b border-gray-800">
            <h1 className="text-xl font-bold text-white">M. Taufik Hidayat</h1>

            <div className="flex gap-6 text-gray-300">
                <Link to="/" className="hover:text-white">Home</Link>
                <Link to="/about" className="hover:text-white">About</Link>
                <Link to="/projects" className="hover:text-white">Projects</Link>
                <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
        </nav>
    );
}
