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
        // yellow: "#FAAD29",
        ash: "#E0E6E233",
        primary: "#091140",
        secondary: "#FAAD29",
        socialIcon: "#1B2243",
        "text-color": "#88918B",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        "3xl": "18px 10px 20px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
