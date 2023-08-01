/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/views/*.blade.php",
    "./resources/views/**/*.blade.php",
    "./resources/views/**/**/*.blade.php",
    "./resources/views/include/**/*.blade.php",
    "./resources/views/web/*.blade.php",
    "./public/js/*.js",
    "./resources/**/*.js"
  ],
  theme: {
    screens: {
      "ssm":'300px',
      
      "smd":'350px',

      "slg":'400px',
      
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {

    },
  },
  plugins: [
    require('tailwind-capitalize-first-letter'),
  ],
}
