/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#052919",
        background: "#f6fefa",
        primary: "#48c68f",
        secondary: "#bbd7f6",
        accent: "#1867ce",
      },

      keyframes: {
        "slide-right-to-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },

      animation: {
        "slide-right-to-left": "slide-right-to-left 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
