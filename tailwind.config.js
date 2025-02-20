/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,tsx,ts}'],
  theme: {
    extend: {
      colors: {
        monty: {
          red: '#cc4c0c',
          blue: '#04848c',
          cyan: '#cefefa'
        },
        backgroundSize: {
          full: '100%'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
        incon: ['Inconsolata', 'sans-serif']
      },

    },
  },
  plugins: [],
}