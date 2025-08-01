// src/components/Hero.jsx
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center text-white px-6 bg-transparent relative z-10"
    >
      {/* Left: Profile Photo */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-10 md:mb-8 md:mr-16 mt-24 lg:mt-0"
      >
        <img
          src="/assets/my_photo.png"
          alt="Hasibul Hossain"
          className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-white object-cover shadow-lg"
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center lg:text-left max-w-xl"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Hi, I'm Hasibul Hossain
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium mb-6 text-indigo-400">
          I’m a{" "}
          <span className="text-white font-bold">
            <Typewriter
              words={[
                "Web Developer",
                "Frontend Developer",
                "MERN Stack Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p className="text-gray-300">
          Passionate about crafting beautiful and functional web experiences
          using React, Tailwind CSS, and modern web technologies.
        </p>
        <div className="md:hidden inline-block mt-6">
          <a
            href="/assets/Hasibul Hossain's Resume.pdf"
            download
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
