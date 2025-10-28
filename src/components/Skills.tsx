import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-linear-to-br from-[#F8FAFC] via-[#F0FDFA] to-[#E0F2F1] text-gray-800 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title with shimmer gradient */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-14 bg-linear-to-r from-[#0EA5A4] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent animate-gradient-x"
        >
          My Skills
        </motion.h2>

        {/* Skill Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
