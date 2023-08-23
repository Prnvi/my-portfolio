/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      'xxs': "240px",
      // => @media (min-width: 250px) { ... }
      'xs':"300px",
      's': "420px",
      // => @media (min-width: 430px) { ... }
      'sm': "640px",
      // => @media (min-width: 640px) { ... }
      'md': "768px",
      // => @media (min-width: 768px) { ... }
      'lg': "1024px",
      // => @media (min-width: 1024px) { ... }
      'xl': "1280px",
      // => @media (min-width: 1280px) { ... }
      'xxl': "1536px",
      // => @media (min-width: 1536px) { ... }
      '4xl': "2000px",
      // => @media (min-width: 1536px) { ... }
  },
  fontSize: {
    'xs': '0.7rem',
    's': '0.8rem',
    'sm': '0.9rem',
    'base': '1rem',
    'lg':'1.15rem',
    'xl': '1.40rem',
    '2xl': '1.563rem',
    '3xl': '1.953rem',
    '4xl': '2.441rem',
    '5xl': '3.052rem',
  },

    extend: {
      fontFamily:{
        'Poppins':['Poppins'],
      }
    },
  },
  plugins: [],
}
