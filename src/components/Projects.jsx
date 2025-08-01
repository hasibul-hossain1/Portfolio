import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaStripe,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiJsonwebtokens,
  SiReactquery,
  SiFormik,
  SiMongoose,
  SiCloudinary,
} from "react-icons/si";
import { useState } from "react";

// Project data with icons
const projects = [
  {
    title: "pawdopt",
    image: "/assets/pawdopt.png",
    description: `Pawdopt connects rescue pets with loving homes, letting users browse, adopt, and support through donation campaigns.`,
    live: "https://pawdopt1.netlify.app",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "React Query", icon: <SiReactquery className="text-rose-500" /> },
      { name: "Formik", icon: <SiFormik className="text-indigo-500" /> },
      { name: "Mongoose", icon: <SiMongoose className="text-red-600" /> },
      { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" /> },
      { name: "Stripe", icon: <FaStripe className="text-indigo-400" /> },
    ],
    source: [
      {
        name: "client",
        href: "https://github.com/hasibul-hossain1/Pawdopt-Client",
      },
      {
        name: "server",
        href: "https://github.com/hasibul-hossain1/Pawdopt-server",
      }
    ],
  },
  {
    title: "Hobby Hub",
    image: "/assets/hobbyhub.png",
    description:
      "A responsive full-stack web application built with the MERN stack that allows users to create and join hobby groups.",
    live: "https://hobbyhub0.netlify.app",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "Nodejs", icon: <FaNodeJs className="text-green-400" /> },
    ],
    source: [
      {
        name: "client",
        href: "https://github.com/hasibul-hossain1/Hobby-Hub-client",
      },
      {
        name: "server",
        href: "https://github.com/hasibul-hossain1/Hobby-Hub-Server",
      },
    ],
  },
  {
    title: "Bite Flow",
    image: "/assets/biteflow.png",
    description:
      "Bite Flow streamlines restaurant operations by allowing users to manage menus, reservations, staff, and customer interactions.",
    live: "https://biteflow.netlify.app/",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-400" />,
      },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      {
        name: "JWT",
        icon: (
          <SiJsonwebtokens className="text-indigo-400 bg-indigo-500/10 border border-indigo-500/20" />
        ),
      },
    ],
    source: [
      {
        name: "client",
        href: "https://github.com/hasibul-hossain1/BiteFlow-client",
      },
      {
        name: "server",
        href: "https://github.com/hasibul-hossain1/BiteFlow-server",
      },
    ],
  },
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(0);

  const openLightbox = (index) => {
    setSelectedSlide(index);
    setOpen(true);
  };

  return (
    <section id="projects" className="py-20 px-6 text-white relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="tooltip tooltip-secondary"
              data-tip="Click image to zoom"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden backdrop-blur-md flex flex-col"
              >
                {/* Project Image */}
                <div
                  className="h-48 bg-gray-900 cursor-zoom-in group relative"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-top object-cover transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 px-2 py-1 text-xs bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-sm"
                      >
                        {tech.icon}
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-4 mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition text-sm"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <div className="dropdown dropdown-top">
                      <div
                        tabIndex={0}
                        role="button"
                        className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-900 transition text-sm"
                      >
                        <FaGithub /> View Source
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-gray-800 rounded-box z-1 w-52 p-2 shadow-sm"
                      >
                        {project.source.map((item, index) => (
                          <li key={index}>
                            <a
                              className="hover:bg-gray-900 transition text-sm"
                              rel="noopener noreferrer"
                              href={item.href}
                              target="_blank"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={selectedSlide}
        plugins={[Zoom]}
        slides={projects.map((p) => ({
          src: p.image,
          width: 1600,
          height: 900,
        }))}
        zoom={{
          maxZoomPixelRatio: 5,
          doubleClickMaxStops: 5,
        }}
        render={{
          slide: ({ slide, rect }) => (
            <img
              src={slide.src}
              style={{ ...rect, objectFit: "contain" }}
              className="rounded-xl shadow-2xl"
              alt="Project Screenshot"
            />
          ),
        }}
      />
    </section>
  );
};

export default Projects;
