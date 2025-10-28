import React from "react";
import { motion } from "framer-motion";
import { Github, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-black/80 text-gray-300 border-t border-white/10 backdrop-blur-lg overflow-hidden">
      {/* === Background Gradient Glow === */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0EA5A4]/20 via-transparent to-[#7C3AED]/20 blur-2xl -z-10" />

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* === Left: Logo & Bio === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold bg-linear-to-r from-[#0EA5A4] to-[#7C3AED] bg-clip-text text-transparent mb-3">
            M. Waqas
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Passionate Web Developer crafting smooth, interactive, and beautiful
            digital experiences. Always learning, always building.
          </p>
        </motion.div>

        {/* === Middle: Quick Links === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#0EA5A4] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* === Right: Contact Info & Socials === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold mb-4 text-white">
            Get in Touch
          </h4>

          <div className="flex flex-col space-y-3">
            <a
              href="tel:+923001234567"
              className="flex items-center justify-center md:justify-start gap-2 hover:text-[#0EA5A4] transition-colors"
            >
              <Phone size={16} /> +92 348 0949799
            </a>
            <a
              href="mailto:waqas.dev@gmail.com"
              className="flex items-center justify-center md:justify-start gap-2 hover:text-[#7C3AED] transition-colors"
            >
              <Mail size={16} /> mw2601005@gmail.com
            </a>
            <a
              href="https://github.com/waqas2601"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-2 hover:text-[#0EA5A4] transition-colors"
            >
              <Github size={16} /> GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>

      {/* === Bottom Line === */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="border-t border-white/10 text-center py-4 text-sm text-gray-500"
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">M. Waqas</span>. All rights
          reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
