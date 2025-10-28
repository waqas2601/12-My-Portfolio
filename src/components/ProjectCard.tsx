import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(14,165,233,0.3)] transition-all duration-500 group"
    >
      {/* === Image + Overlay Container === */}
      <div className="relative w-full h-56 overflow-hidden">
        {/* === Image === */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* === Overlay === */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 flex flex-col justify-end p-6 
             bg-linear-to-t from-white/70 via-white/40 to-transparent 
             backdrop-blur-md 
             opacity-0 translate-y-6 
             group-hover:opacity-100 group-hover:translate-y-0 
             transition-all duration-700 ease-out rounded-t-2xl"
        >
          {/* Title */}
          {/* <h3 className="text-xl font-bold bg-linear-to-r from-[#0EA5A4] to-[#7C3AED] bg-clip-text text-transparent mb-2">
            {project.title}
          </h3> */}

          {/* Description */}
          <p className="text-gray-800 text-sm mb-3 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-white/70 text-gray-800 border border-white/50 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-sm font-medium text-white bg-[#0EA5A4] px-4 py-2 rounded-xl hover:bg-[#0EA5A4]/90 transition-all duration-300 shadow-md"
            >
              <ExternalLink size={16} /> Live
            </motion.a>

            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-sm font-medium text-[#0EA5A4] border border-[#0EA5A4]/40 px-4 py-2 rounded-xl hover:bg-[#0EA5A4]/10 transition-all duration-300"
            >
              <Github size={16} /> Code
            </motion.a>
          </div>
        </div>
      </div>

      {/* === Bottom Section (Visible Always) === */}
      <div className="p-5 text-left">
        <h3 className="text-lg font-semibold text-[#7C3AED] group-hover:text-[#0EA5A4] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mt-1 line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* === Animated Gradient Border === */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[3px] group-hover:border-gradient-to-r from-[#0EA5A4] to-[#7C3AED] transition-all duration-500 pointer-events-none"></div>
    </motion.div>
  );
};

export default ProjectCard;
