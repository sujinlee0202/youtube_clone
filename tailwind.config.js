/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: '#FF0000'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}