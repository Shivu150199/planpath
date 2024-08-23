/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#603AC8',
        dark_gray:'#494747',
        light_gray:'#8A8A8A',
        dark_violet:'#31225C' // Example of a custom primary color
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}