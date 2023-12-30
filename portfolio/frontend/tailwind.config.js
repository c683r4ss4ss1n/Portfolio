/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
  theme: {
    extend: {
        fontFamily: {
            'CBRT': ['CBRT', 'sans-serif'],
          },
    },
  },
  plugins: [],
}

