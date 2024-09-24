/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        'primary-color' : "#F4BF42",
        'nav-color':"#FFE89A",
        'kb-dark-gray' : "#5F584E",
        'font-color' :"#27272a",
        'hover-color':"#ffffff",
        'kb-color-6':"#85888B"
      },
    },
  },
  plugins: [],
};
