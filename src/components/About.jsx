// src/components/About.jsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-transparent text-white relative z-10"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* Card-style text box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Hey there! I'm <span className="text-white font-semibold">Hasibul Hossain</span>, a passionate and creative <span className="text-indigo-400 font-semibold">MERN Stack Developer</span> from Bangladesh.
            I specialize in crafting modern, fast, and responsive web applications using <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Node.js</span>, and <span className="text-white font-semibold">Tailwind CSS</span>.
          </p>

          <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed">
            I love building elegant user interfaces and turning ideas into real-world digital solutions.
            With a strong focus on performance, clean code, and seamless user experiences, I’m constantly exploring the latest in web technologies to sharpen my skills and deliver impactful results.
          </p>

          <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed">
            When I'm not coding, you'll find me exploring design inspiration, learning new tech, or contributing to developer communities.
            Let’s build something amazing together!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
