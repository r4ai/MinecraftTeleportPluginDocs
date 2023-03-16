/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx,mdx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        craft: {
          100: '#c6c6c6',
          600: '#8b8b8b',
        },
      },
      gridTemplateColumns: {
        recipe: '1fr 1fr 1fr',
        craft: 'auto 1fr auto',
      },
      gridTemplateRows: {
        recipe: '1fr 1fr 1fr',
        craft: 'auto 1fr',
      },
      fontFamily: {
        silkscreen: ['var(--font-silkscreen)'],
        dotgothic: ['var(--font-dotgothic16)'],
      },
    },
  },
  darkMode: 'class',
  daisyui: {
    themes: ['light', 'dark'], // cupcake: light theme
  },
  plugins: [require('daisyui')],
};
