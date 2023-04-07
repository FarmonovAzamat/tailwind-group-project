/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "xs":"380px",
      // => @media (min-width: 380px) { ... }
      'sm': '520px',
      // => @media (min-width: 640px) { ... }
       'mmd': '768px',
      // => @media (min-width: 1024px) { ... }
      
      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }

       '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xxl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'xlg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'x1lg': {'max': '984px'},
      // => @media (max-width: 1023px) { ... }

      'xmd': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'xsm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'xxs': {'max': '380px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

