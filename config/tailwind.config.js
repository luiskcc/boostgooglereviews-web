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
        'w-9': '36px',
        'w-10': '40px',
        'w-11': '44px',
        'w-10': '10px',
        'w-8': '8px',
        'w-16': '16px',
        'w-24': '24px',
        'w-32': '32px',
        'w-48': '48px',
        'w-64': '64px',
      },
      height: {
        'h-9': '36px',
        'h-10': '40px',
        'h-11': '44px',
        'h-10': '10px',
        'h-8': '8px',
        'h-16': '16px',
        'h-24': '24px',
        'h-32': '32px',
        'h-48': '48px',
        'h-64': '64px',
      },
      colors: {
        'space-black': '#18181b', // Example hex code for a "space black" color
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
