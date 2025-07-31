import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-black text-white shadow-lg z-40"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Name */}
        <div className="text-xl font-bold text-indigo-400">Hasibul Hossain</div>

        {/* Center: Nav Links (Desktop only) */}
        <nav className="space-x-6 text-sm font-medium hidden md:flex">
          <a href="#home" className="hover:text-indigo-400 transition">Home</a>
          <a href="#about" className="hover:text-indigo-400 transition">About</a>
          <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
          <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
          <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
        </nav>

        {/* Right: Resume Button (Hidden on small screens) */}
        <div className="hidden md:block">
          <a
            href="/assets/Hasibul Hossain's Resume.pdf"
            download
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            <FaDownload /> Download Resume
          </a>
        </div>

        {/* Hamburger menu (Mobile only) */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl md:hidden"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu Slide-in */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-black shadow-lg p-6 z-50 md:hidden"
          >
            {/* Close button inside sidebar */}
            <div className="flex justify-end mb-6">
              <button onClick={closeMenu} className="text-white text-2xl mr-auto">
                <FaTimes />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 text-lg font-medium">
              <a onClick={closeMenu} href="#home" className="hover:text-indigo-400">Home</a>
              <a onClick={closeMenu} href="#about" className="hover:text-indigo-400">About</a>
              <a onClick={closeMenu} href="#skills" className="hover:text-indigo-400">Skills</a>
              <a onClick={closeMenu} href="#projects" className="hover:text-indigo-400">Projects</a>
              <a onClick={closeMenu} href="#contact" className="hover:text-indigo-400">Contact</a>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
