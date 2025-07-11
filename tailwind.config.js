
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      main: '#00abf0',
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2c2523",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15d1e9",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#fb9718",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",
    },
    keyframes: {
      textGradient: {
        '0%, 10%, 100%': { backgroundPosition: '-33rem 0' },
        '65%, 85%': { backgroundPosition: '0 0' },
      },
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(40px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      textGradient: 'textGradient 6s linear infinite',
      fadeInUp: 'fadeInUp 1s ease-out forwards',
      'spin-slow': 'spin 8s linear infinite',
    },
  },
},

  plugins: [],
}
