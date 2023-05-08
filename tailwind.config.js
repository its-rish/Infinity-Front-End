/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'trans-right':{
          '0% , 100%':{ transform: 'translateY(20px)'},
          '40%':{transform:'translateY(0)'}
        }
      },
      animation:{
        'trans-right':'trans-right 4s ease-in-out infinite'
      }

    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}

