/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': {'max': '468px'},
      'sm': {'max': '640px'},
      'md': {'max': '768px'},
      'lg': {'max': '1024px'},
    },
    extend: {},
  },
  plugins: [],
}

