import React from "react";
import type { Skill } from "../data/skills";
import { motion } from "framer-motion";

interface Props {
  skill: Skill;
}

const SkillCard: React.FC<Props> = ({ skill }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{
        scale: 1.08,
        // rotate: 1,
        boxShadow: "0px 6px 30px rgba(124,58,237,0.25)",
      }}
      className="relative group p-0.5 rounded-2xl bg-linear-to-tr from-[#0EA5A4] via-[#7C3AED] to-[#EC4899] shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Inner Card */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center h-full transition-all duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
        {/* Icon */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300"
        >
          {skill.icon}
        </motion.div>

        {/* Skill Name */}
        <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-lg group-hover:text-[#7C3AED] transition-colors">
          {skill.name}
        </h4>

        {/* Level Tag */}
        <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-300 bg-gray-100/60 dark:bg-gray-800/60 px-3 py-1 rounded-full">
          {skill.level}
        </p>
      </div>

      {/* Soft Animated Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-linear-to-tr from-[#0EA5A4] to-[#7C3AED] opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default SkillCard;
