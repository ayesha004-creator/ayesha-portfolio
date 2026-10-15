/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { brand: "#1E40AF", navy: "#0F172A", sky: { accent: "#38BDF8" }, light: "#F8FAFC", card: "#1E293B" },
      fontFamily: {
        heading: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: { xl: "12px" },
      boxShadow: { soft: "0 4px 20px -4px rgba(15,23,42,0.10)" },
    },
  },
  plugins: [],
};
