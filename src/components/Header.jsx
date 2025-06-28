// src/components/Header.jsx
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-black text-white shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Name */}
        <div className="text-xl font-bold text-indigo-400">Hasibul Hossain</div>

        {/* Center: Nav Links */}
        <nav className="space-x-6 text-sm font-medium hidden md:flex">
          <a href="#home" className="hover:text-indigo-400 transition">Home</a>
          <a href="#about" className="hover:text-indigo-400 transition">About</a>
          <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
          <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
          <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
        </nav>

        {/* Right: Resume Button */}
        <div>
          <a
            href="/assets/resume.pdf" // replace with your file path
            download
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
