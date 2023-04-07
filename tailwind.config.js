/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      
      'lg': {'max': '1030px'},
      // => @media (max-width: 1030px) { ... }
      
      'md': {'max': '930px'},
      // => @media (max-width: 930px) { ... }
      
      'sm': {'max': '710px'},
      // => @media (max-width: 710px) { ... }
      
      'xl': {'max': '530px'},
      // => @media (max-width: 530px) { ... }

      'xs': {'max': '410px'},
      // => @media (max-width: 410px) { ... }

      'fx': {'max': '330px'},
      // => @media (max-width: 330px) { ... }
    },
    extend: {},
  },
  plugins: [],
}


