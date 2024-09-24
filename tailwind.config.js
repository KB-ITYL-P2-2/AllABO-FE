/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        'kb-color-1' : "#F4BF42", /**primary color */
        'kb-color-2':"#F6CE46",
        'kb-color-3':"#5F584E", /**kb-dark-gray*/
        'kb-color-4':"#535046",
        'kb-color-5':"#897552",
        'kb-color-6':"#85888B",      
        'nav-color':"#FFE89A",
        'font-color' :"#27272a",
       
      },
    },
  },
  plugins: [],
};
