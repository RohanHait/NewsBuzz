/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex :{
        '2': '2 2 0%',
      },
      colors :{
        'mirage': {
          '50': '#f0f7fe',
          '100': '#deecfb',
          '200': '#c4e0f9',
          '300': '#9cccf4',
          '400': '#6dafed',
          '500': '#4b90e6',
          '600': '#3674da',
          '700': '#2d60c8',
          '800': '#2a4fa3',
          '900': '#274481',
          '950': '#0f172a',
      },
      
      },
      keyframes :{
        'ext-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .3 },
        }
      },
      animation : {
        'ext-pulse': 'ext-pulse 2.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

