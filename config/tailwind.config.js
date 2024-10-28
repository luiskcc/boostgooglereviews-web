const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      width: {
        'custom-size-1': '300px',
        'custom-size-2': '400px',
      },
      colors: {
        'space-black': '#0B0C10', // Example hex code for a "space black" color
      },
      heigh: {
        'custom-size-1': '200px',
        'custom-size-2': '300px',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
