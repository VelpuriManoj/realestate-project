/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#FAF8F4",
        surface: "#FFFFFF",
        ink: "#1E1B18",
        stone: "#8C8377",
        "stone-light": "#B7AFA2",
        line: "#E4DED4",
        accent: {
          DEFAULT: "#2F4A3D",
          light: "#4A6B58",
          dark: "#1D2F27",
          tint: "#EEF2ED",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        content: "1320px",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "3px",
        md: "4px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
