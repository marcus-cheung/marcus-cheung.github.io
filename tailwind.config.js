/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts}"],
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
        Cascadia: ['CascadiaCode', "sans-serif"]
      }
    },
  },
  plugins: [],
}