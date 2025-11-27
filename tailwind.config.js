module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        laila: ["var(--font-laila)"],   // ✅ REGISTER FONT
      },
    },
  },
  plugins: [],
};
