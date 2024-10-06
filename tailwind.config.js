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
        'kb-yellow-4':"#FFFBE7",
        'kb-yellow-5':"#FBE9C8",
        'kb-yellow-6':"#E1CD9F",
        "kb-yellow-7":"#FFDB20",


        'kb-brown-1':"#535046",
        'kb-brown-2':"#5F584E",
        'kb-brown-3':"#897552",
        'kb-brown-4':"#563A3A",

        'kb-gray-1':"#85888B",     
        'kb-gray-2':"#B8B8BC",
        'kb-gray-3':"#BDBDBD",
        'nav-color':"#FFE89A",
        'font-color' :"#27272a",

        'kb-pink-1':"#FBB3B3",
        'kb-pink-2':"#FBDFFF",
        'kb-pink-3':"#FFC2AF",
        'kb-pink-4':"#FF40B3",

        'kb-blue-1':"#BBE4E7",
        'kb-blue-2':"#D6E0F8",
        "kb-blue-3":"#4E4ECD",

        'kb-green-1':"#DBF2BB"
       
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
