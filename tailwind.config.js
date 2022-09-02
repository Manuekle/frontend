/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ligth and dark colors
        dark: {
          100: '#171717'
        },
        light: {
          100: '#FAF3F3',
          200: '#CEE5D0',
          300: '#A7BBC7',
          400: '#DA7F8F'
        },
        url: {
          100: '#C94E4E',
          200: '#62A388'
        }
      },
      backgroundColor: {
        dark: {
          100: '#242529',
          200: '#323337'
        },
        light: {
          100: '#FAF3F3',
          200: '#F7EDDB',
          300: '#FBF8F1'
        }
      },
      borderColor: {
        dark: '#35373B',
        light: '#181818'
      }
    }
  },
  plugins: []
};
