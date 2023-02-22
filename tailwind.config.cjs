/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/src/assets/the-scrape.min.jpeg')"
      },
      fontFamily: {
        'bungee-shade': "'Bungee Shade', cursive"
      }
    },
  },
  plugins: [],
}
