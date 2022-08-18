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
          100: '#EEEEEE'
        }
      },
      backgroundColor: {
        dark: {
          100: '#151516',
          200: '#1D1D1F'
        },
        light: {
          100: '#F5F5F7',
          200: '#FFFFFF'
        }
      },
      borderColor: {
        dark: '#35373B',
        light: '#fff601'
      }
    }
  },
  plugins: []
};
