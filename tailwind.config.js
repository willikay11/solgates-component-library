/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'aot',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '50px': '50px'
      },
      boxShadow: {
        'base': '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
      },
    },
    borderRadius: {
      DEFAULT: '5px',
    },
  },
  variants: {},
  plugins: [],
}
