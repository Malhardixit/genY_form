/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        genY: {
          50: "#FF264D",
        },
      },
    },
  },
  plugins: [],
};
