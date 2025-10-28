// tailwind.config.cjs
module.exports = {
  darkMode: "class", // 🌙 enable dark mode via class
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5A4",
        secondary: "#7C3AED",
        surface: "#FFFFFF",
        bg: "#F8FAFC",
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
