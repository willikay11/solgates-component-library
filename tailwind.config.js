/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors
    },
    extend: {
      margin: {
        '50px': '50px'
      },
    },
    borderRadius: {
      DEFAULT: '5px',
    },
  },
  variants: {},
  plugins: [],
}
