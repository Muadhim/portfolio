/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008170',
        secondary: '#005B41',
        black: '#0F0F0F',
        grey: '#232D3F'
      },
      
      boxShadow: {
        "bottom-primary": '0 -30px 40px 10px #005B41'
      }
    },
  },
  plugins: [],
}

