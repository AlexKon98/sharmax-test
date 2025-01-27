/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens: {
        'lg-custom': '1000px'
      },
      fontFamily: {
        helveticaLight: ['"Helvetica Neue Light"', 'sans-serif'],
        sfProMedium: ['"SF Pro Text Medium"', 'sans-serif'],
        sfProSemibold: ['"SF Pro Text Semibold"', 'sans-serif']
      },
    },
  }
}

