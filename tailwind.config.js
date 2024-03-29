/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    colors: {
      primary: "#563314",    
      secondary: "#000000",   
      accent: "#FEB273",  
      background: "#FEFAE0",   
    },

    screens: {
      'monitor': {'min': '2000px'},       // 1600px and beyond
      'laptop': {'max': '1440px'},        // 1250px up to 1440px
      'laptop-s': {'max': '1250px'},      // 1024px up to 1250px
      'tablet': {'max': '1024px'},        // 768px up to 1024px
      'tablet-s': {'max': '768px'},       // 480px up to 768px
      'mobile': {'max': '650px'},         // 340px up to 480px
      'mobile-s': {'max': '480px'},       // 0px up to 340px
      'mobile-xs': {'max': '420px'},       // 0px up to 340px
    },


    fontWeight: {
      thin:     '300',
      normal:   '400',
      medium:   '500',
      semibold: '600',
      bold:     '700',
      thick:    '800',
    },

    extend: {
      animation:
      {
        topCover: "opening 1.8s ease-in-out forwards 1.8s",
        bottomCover: "opening 1.5s ease-in-out forwards 2s",
        welcome: "translate 2.2s ease-in-out forwards .4s",
        to: "translate 1.8s ease-in-out forwards .8s",
      },

      keyframes:
      {
        opening: {
          "0%": {opacity: "1"},
          "70%": {transform: "translateX(110vw)", opacity: "1"},
          "100%": {transform: "translateX(110vw)", opacity: "0"},
        },

        translate: {
          '0%': {opacity: '0', scale:"1"},
          '20%': {opacity: '1', scale:"1.1"},
          '75%': {opacity: '1', scale:"1.1"},
          '90%': {opacity: '0', scale:"1.1"},
          '100%': {opacity: '0', scale:"1.1", visibility: "hidden" },
        },

      },
    },
  },
  plugins: [],
};
