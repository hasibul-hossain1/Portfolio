import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useState } from "react";

const projects = [
  {
    title: "Hobby Hub",
    image: "/assets/hobbyhub.png",
    description:
      "A responsive full-stack web application built with the MERN stack that allows users to create and join hobby groups.",
    live: "https://hobbyhub0.netlify.app",
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
      "A portfolio website showcasing my skills, experience, and projects with smooth animations and theme customizations.",
    live: "https://flow-bite.netlify.app",
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
  {
    title: "Get Halal Jobs",
    image: "/assets/gethalaljobs.png",
    description:
      "An eCommerce platform with user authentication, product management, and real-time cart updates.",
    live: "https://gethalaljobs.netlify.app",
    source: [
      {
        name: "client",
        href: "https://github.com/hasibul-hossain1/Halal-Jobs",
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
            <div key={project.title} className="tooltip" data-tip="click on image to zoom">
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
                  <p className="text-gray-300 text-sm mb-6">
                    {project.description}
                  </p>

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
                              className=" hover:bg-gray-900 transition text-sm"
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
          width: 1600, // change to real image size if known
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
