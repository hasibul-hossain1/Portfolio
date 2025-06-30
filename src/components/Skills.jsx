// src/components/Skills.jsx
import { motion } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  // SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiJavascript,
  SiFirebase,
  SiTailwindcss,
  SiGit,
  SiHtml5,
  SiCss3,
  SiReactquery,
  SiJsonwebtokens, // JWT icon added
} from "react-icons/si";

const skills = [
  { name: "MongoDB", icon: <SiMongodb size={32} className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress size={32} className="text-white" /> },
  { name: "React.js", icon: <SiReact size={32} className="text-cyan-400" /> },
  // { name: "Next.js", icon: <SiNextdotjs size={32} className="text-white" /> },
  { name: "Redux RTK", icon: <SiRedux size={32} className="text-purple-400" /> },
  { name: "TanStack Query", icon: <SiReactquery size={32} className="text-pink-400" /> },
  { name: "Node.js", icon: <SiNodedotjs size={32} className="text-green-600" /> },
  { name: "JavaScript", icon: <SiJavascript size={32} className="text-yellow-400" /> },
  { name: "Firebase", icon: <SiFirebase size={32} className="text-yellow-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-sky-400" /> },
  { name: "Git", icon: <SiGit size={32} className="text-orange-500" /> },
  {
    name: "HTML & CSS",
    icon: (
      <div className="flex gap-2">
        <SiHtml5 size={28} className="text-orange-600" />
        <SiCss3 size={28} className="text-blue-400" />
      </div>
    ),
  },
  { name: "JWT", icon: <SiJsonwebtokens size={32} className="text-indigo-400" /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 1,
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-transparent text-white relative z-10"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center justify-center space-y-3"
            >
              {skill.icon}
              <p className="text-base font-medium text-white">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
