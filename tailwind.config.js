/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/Assets/Background-blur.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      backgroundImage: {
        'Image': "url('./src/Assets/Images/wallpaper.jpg') "
      },
      colors: {
        white: {
          100: '#ffffff61',
          200: '#ffffff'
        },
        black: {
          100: '#00000062'
        }
  
      },
    },
  },
  plugins: [],
}