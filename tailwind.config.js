/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {

      fontFamily: {
        sans: 'Poppins, sans-serif'
      },

      colors: {
        Primary: {
          100: '#00B37E',
          200: '#121214',
          300: '#fff',
          400: '#75757570',
          500: '#E1E1E6',
          600: '#df4d31'
        },
        Google: {
          100: '#319d5a',
          200: '#fab000',
          300: '#f63832'
        }

      },

    },

  },
  plugins: [],
}