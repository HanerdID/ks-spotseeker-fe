/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "640px",
        // => @media (min-width: 640px) { ... }
        lg: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
};
