import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id") || "home";
        }
      });

      setActiveSection(current);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close sidebar on click
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "backdrop-blur-lg bg-white/70 shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* === Logo === */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollTo("home")}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {/* Circular Logo */}
          <motion.div
            className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-linear-to-br from-[#0EA5A4] to-[#7C3AED] shadow-lg overflow-hidden"
            whileHover={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Shiny overlay */}
            <span className="absolute inset-0 bg-white/20 blur-md opacity-60"></span>

            {/* Inner Glow */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent mix-blend-overlay"></div>

            {/* Text */}
            <span className="relative z-10 text-white text-lg font-extrabold tracking-tight drop-shadow-sm">
              MW
            </span>

            {/* Sparkle Animation */}
            <motion.span
              className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full shadow-sm"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.8, 1.4, 0.8],
                y: [-1, 0, -1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Name */}
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide bg-linear-to-r from-[#0EA5A4] to-[#7C3AED] bg-clip-text text-transparent">
            Waqas
          </h1>
        </motion.div>

        {/* === Desktop Nav === */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`transition-colors cursor-pointer font-semibold ${
                activeSection === link.id
                  ? "text-teal-600"
                  : "text-gray-700 hover:text-teal-600"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* === Mobile Menu Button === */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 cursor-pointer"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === Sidebar (Mobile Nav) === */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80 }}
            className="fixed top-0 right-0 w-64 h-screen bg-white/90 backdrop-blur-xl shadow-xl p-6 z-40 md:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-[#7C3AED]">Menu</h2>
              <button
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-lg font-semibold text-left ${
                    activeSection === link.id
                      ? "text-[#0EA5A4]"
                      : "text-gray-700 hover:text-[#0EA5A4]"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
