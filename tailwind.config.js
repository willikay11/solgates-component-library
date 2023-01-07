/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'aot',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
