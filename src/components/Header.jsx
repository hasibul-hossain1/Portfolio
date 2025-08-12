import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaRegCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";

const menuItems = [
  { name: "Home", href: "#home", x: -120, y: -200 },
  { name: "About", href: "#about", x: -120, y: -150 },
  { name: "Skills", href: "#skills", x: -120, y: -100 },
  { name: "Projects", href: "#projects", x: -120, y: -50 },
  { name: "Contact", href: "#contact", x: -120, y: 0 },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const linkRefs = useRef({});
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Scroll listener to update active menu item
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let item of menuItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(item.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update underline position on active change or resize
  useEffect(() => {
    const updateUnderline = () => {
      const currentRef = linkRefs.current[active];
      if (currentRef) {
        setUnderlineStyle({
          left: currentRef.offsetLeft,
          width: currentRef.offsetWidth,
        });
      } else {
        // If no ref, hide underline
        setUnderlineStyle({ left: 0, width: 0 });
      }
    };

    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [active]);

  const handleClick = (name) => {
    setActive(name);
    closeMenu();
  };

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
        <nav className="hidden md:flex relative space-x-6 text-sm font-medium">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleClick(item.name)}
              ref={(el) => (linkRefs.current[item.name] = el)}
              className="relative z-10 px-1 py-2 cursor-pointer hover:text-indigo-400 transition"
            >
              {item.name}
            </a>
          ))}

          {/* Animated underline */}
          <motion.div
            layout
            className="absolute bottom-0 h-0.5 bg-indigo-400 rounded"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
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
        <motion.div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="fixed bottom-6 right-6 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50"
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaRegCircleXmark className="text-red-500" size={25} />
            ) : (
              <FaRegCircle size={25} />
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu Staggered */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed bottom-6 right-6 w-12 h-12 md:hidden">
            {menuItems.map((item, index) => {
              const { x, y } = item;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleClick(item.name)}
                  className={`absolute top-0 left-0 w-28 h-10 rounded-md flex items-center justify-center text-white text-xs transition-colors duration-300 ${
                    active === item.name ? "bg-indigo-800" : "bg-indigo-600"
                  }`}
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{ scale: 1, x, y }}
                  exit={{ scale: 0, x: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.1,
                  }}
                >
                  {item.name}
                </motion.a>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
