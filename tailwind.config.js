/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    borderRadius: {
      DEFAULT: '5px',
    },
    margin: {
      '50': '50px'
    },
  },
  variants: {},
  plugins: [],
}
