import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string>("All");

  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section
      id="projects"
      className="relative py-24 bg-linear-to-b from-surface/50 to-surface/80 overflow-hidden"
    >
      {/* Soft glowing background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-[#0ea5a4] via-[#7C3AED] to-blue-500 bg-clip-text text-transparent animate-gradient-x"
        >
          My <span>Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#4b5563] mb-10 max-w-2xl mx-auto"
        >
          A collection of projects I’ve built using modern web technologies.
        </motion.p>

        {/* Filter buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {allTags.map((tag) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2.5 rounded-full border transition-all text-sm font-medium shadow-sm backdrop-blur ${
                activeTag === tag
                  ? "bg-linear-to-r from-[#0ea5a4] to-blue-500 text-white border-transparent shadow-lg"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-white dark:hover:bg-gray-800"
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 8px 30px rgba(99,102,241,0.2)",
                }}
                className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
