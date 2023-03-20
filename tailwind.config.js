/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(-90px)" },
        },
        title: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        slide: {
          "100%": {
            top: "-200px",
          },
        },
        typewriter: {
          "40%, 60%": {
            left: "100%",
          },
          "100%": {
            left: "0",
          },
        },
      },
      animation: {
        move: "move 3s ease-in-out infinite alternate-reverse",
        title: "title 5s ease infinite",
        slide: "slide 20000ms steps(4) infinite",
        typewriter: "typewriter 5s steps(38) infinite",
      },
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      xxs: "350px",
      xs: "500px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
