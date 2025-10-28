import React, { useState, useEffect, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, XCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        "service_8m7ezxm", // service ID
        "template_ooiywux", // template ID
        form,
        "O687xvIcs8oskT2Ja" // public key
      )
      .then(
        () => {
          setStatus("success");
          setForm({ name: "", email: "", message: "" });
        },
        () => setStatus("error")
      )
      .finally(() => setLoading(false));
  };

  // Auto-hide toast after 4s
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section
      id="contact"
      className="relative py-24 bg-linear-to-b from-[#0EA5A4]/10 via-transparent to-[#7C3AED]/10 overflow-hidden"
    >
      {/* === Background Glow === */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-linear-to-r from-[#0EA5A4] via-[#7C3AED] to-[#0EA5A4]" />

      {/* === Toast Notifications === */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className={`fixed top-5 right-5 flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg text-white z-50 backdrop-blur-md ${
              status === "success"
                ? "bg-linear-to-r from-green-500 to-emerald-600"
                : "bg-linear-to-r from-red-500 to-pink-600"
            }`}
          >
            {status === "success" ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              <XCircle className="w-5 h-5" />
            )}
            <span>
              {status === "success"
                ? "Message sent successfully!"
                : "Failed to send message. Please try again."}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === Main Section === */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-3"
        >
          Let’s{" "}
          <span className="bg-linear-to-r from-[#0EA5A4] to-[#7C3AED] bg-clip-text text-transparent">
            Connect
          </span>
        </motion.h2>
        <p className="text-gray-500 max-w-md mx-auto mb-12">
          Have a project idea, collaboration, or just want to say hi? I’d love
          to hear from you.
        </p>

        {/* === Contact Card === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-2xl rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl p-8"
        >
          {/* Floating Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-linear-to-r from-[#0EA5A4] to-[#7C3AED] p-4 rounded-full shadow-lg"
          >
            <Mail className="w-6 h-6 text-white" />
          </motion.div>

          {/* === Form === */}
          <form onSubmit={handleSubmit} className="grid gap-5 text-left mt-6">
            {["name", "email"].map((field) => (
              <motion.input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Your ${field === "name" ? "Name" : "Email"}`}
                value={form[field as "name" | "email"]}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.01 }}
                className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/25 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:border-[#0EA5A4] focus:ring-2 focus:ring-[#0EA5A4]/40 transition-all duration-300 shadow-inner"
              />
            ))}

            <motion.textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              whileFocus={{ scale: 1.01 }}
              className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/25 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/40 transition-all duration-300 shadow-inner"
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-[#0EA5A4] to-[#7C3AED] text-white font-semibold py-3 mt-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.4)]"
            >
              <span>{loading ? "Sending..." : "Send Message"}</span>
              {!loading && <Send size={18} />}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
