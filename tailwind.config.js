/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#fff",
          text: "#121212",
          accent: "#007c59",
        },
        dark: {
          background: "#121212",
          text: "#E2E8F0",
          accent: "#00a571",
        },
        yellow: "#fde047",
      },
      backgroundImage: {
        "light-gradient":
          "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(0, 124, 89, 0.05) 100%)",
        "dark-gradient":
          "linear-gradient(135deg, rgba(18, 18, 18, 1) 0%, rgba(22, 32, 28, 1) 100%)",
      },
    },
  },
  plugins: [],
};
