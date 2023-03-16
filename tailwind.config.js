/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx,mdx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  daisyui: {
    themes: ['light', 'dark'], // cupcake: light theme
  },
  plugins: [require('daisyui')],
};
