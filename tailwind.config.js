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
        primary: '#FF0000',
        secondary: '#AF0404',
        black: '#252525',
        grey: '#414141'
      },
      
      boxShadow: {
        center: '10px 35px 600px -15px rgba(22, 333, 0, 0.3)'
      }
    },
  },
  plugins: [],
}

