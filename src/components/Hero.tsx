import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-[#F8FAFC] to-[#E0F2F1] text-gray-900"
    >
      {/* === Glowing Background Orb (lighter on mobile) === */}
      <motion.div
        animate={
          !isMobile
            ? { scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }
            : { opacity: 0.4 }
        }
        transition={
          !isMobile ? { duration: 6, repeat: Infinity, ease: "easeInOut" } : {}
        }
        className="absolute -top-10 -right-10 w-48 h-48 md:w-96 md:h-96 bg-linear-to-tr from-[#0EA5A4] via-[#7C3AED] to-[#EC4899] rounded-full blur-2xl md:blur-[100px] opacity-40"
      />

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* === Left: Text === */}
        <motion.div
          className="flex-1 text-center md:text-left will-change-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-bold text-teal-600 mb-2 tracking-wide">
            Hi, I’m
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 bg-linear-to-r from-[#0EA5A4] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent animate-gradient-x">
            M. Waqas
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
            I'm a{" "}
            <span className="text-teal-600">
              <Typewriter
                words={[
                  "Front-End Developer",
                  "Web Designer",
                  "React Enthusiast",
                  "UI Crafter",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={isMobile ? 50 : 70}
                deleteSpeed={isMobile ? 30 : 40}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-gray-600 max-w-lg mb-8">
            I build modern, responsive, and delightful web experiences using
            React, Tailwind, and smooth animations that bring designs to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.08 }}
              className="bg-[#0ea5a4] text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08 }}
              className="border border-teal-500 px-6 py-3 rounded-xl text-teal-600 font-medium hover:bg-teal-50 transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* === Right: Image === */}
        <motion.div
          className="flex-1 flex justify-center will-change-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={!isMobile ? { y: [0, -10, 0] } : {}}
            transition={
              !isMobile
                ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                : {}
            }
            className="relative"
          >
            <img
              src="/abstract-dev.svg"
              alt="Developer Illustration"
              className="w-64 sm:w-80 md:w-96 object-contain drop-shadow-2xl relative z-10"
            />

            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-[#0EA5A4] to-[#7C3AED] blur-xl md:blur-3xl opacity-30"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
