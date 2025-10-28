import React from "react";
import { motion } from "framer-motion";
import ProfileImg from "../assets/profile.jpeg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-linear-to-br from-[#F8FAFC] via-[#F0FDFA] to-[#E0F2F1] text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* === Left: Image with glowing gradient border === */}
        <motion.div
          className="relative flex-1 flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* 🔹 Outer gradient glow wrapper */}
          <motion.div
            animate={{
              rotate: [0, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative p-[3px] rounded-3xl bg-linear-to-tr from-[#0EA5A4] via-[#7C3AED] to-[#EC4899] animate-gradient-x"
          >
            {/* Profile Image */}
            <motion.img
              src={ProfileImg}
              alt="M. Waqas"
              className="relative w-64 h-80 object-cover rounded-[1.3rem] shadow-xl border-4 border-white z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Subtle background blur glow */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-[#0EA5A4] to-[#7C3AED] blur-3xl opacity-30"></div>
          </motion.div>
        </motion.div>

        {/* === Right: Text === */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-[#0EA5A4] to-[#7C3AED] bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            I’m a passionate{" "}
            <span className="text-teal-600 font-semibold">
              Frontend Developer
            </span>{" "}
            who loves building clean, responsive, and dynamic web interfaces. My
            focus is on crafting modern UIs using{" "}
            <span className="text-teal-500 font-medium">
              React, TypeScript, and Tailwind CSS
            </span>{" "}
            to deliver smooth, fast, and visually appealing solutions.
          </p>

          <p className="text-gray-600 leading-relaxed">
            I believe that great design isn’t just about looks — it’s about
            creating experiences that feel natural, engaging, and inspiring.
          </p>

          {/* Animated Button */}
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(14,165,164,0.7)",
            }}
            className="inline-block mt-8 bg-[#0ea5a4] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
