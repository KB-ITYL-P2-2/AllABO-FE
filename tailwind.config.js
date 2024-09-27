/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      colors: {
        'kb-yellow-1' : "#F4BF42", 
        'kb-yellow-2':"#F6CE46",
        'kb-yellow-3':"#FAE6A2",
        'kb-brown-1':"#535046",
        'kb-brown-2':"#5F584E",
        'kb-brown-3':"#897552",
        'kb-brown-4':"#563A3A",

        'kb-gray-1':"#85888B",     
        'kb-gray-2':"#B8B8BC",
        'nav-color':"#FFE89A",
        'font-color' :"#27272a",
       
      },
      keyframes:{},
      screens:{
        laptop: "1537px"
      },
      transitionProperty: {
        'height' : 'height'
      },
    },
  },
  plugins: [],
};
