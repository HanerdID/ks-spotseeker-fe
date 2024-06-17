/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
};
