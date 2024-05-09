/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#091140",
        secondary: "#FAAD29",
        socialIcon: "#1B2243",
        tertiary: "#F6F9FC",
        unique: "#88918B",
        special: "#FAAD29",
        yellow: "#FAAD29",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
