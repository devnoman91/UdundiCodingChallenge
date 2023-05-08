/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "public/*{html,js}"
  ],
  theme: {
    
    extend: {
      screens: {
        'sm': '576px',
        'md': '960px',
        'lg': '1440px',
      },
      colors:
      {
        'siteColor': '#611818',
        'siteColor2': '#282828',
        'siteColor3': '#979797',
        'siteColor4': '#611818',
        'siteColor5': '#A36754'
      },
      fontFamily: {
        'lato': ['"Lato"', 'sans-serif'],
        'didot': ['"Didot"', 'sans-serif']
      },
      fontSize:{
        'h1': '224px',
        'largeP': '25px',
        'h2': '66px',
        'normalP': '18px'
      },
      width:{
        '28': '28.7%',
        '71': '71.3%',
        '235': '235px',
        '580': '580px',
        '43': '43px'
      },
      height:{
        '55': '55px',
        '43': '43px'
      },
      padding:{
        '232': '232px',
        '72': '72px',
        '66': '66px',
        '78': '78px',
        '26': '26px',
        '150': '150px'
      },
      margin:{
        't-23': '23px',
        'r-23': '23px',
      },
      letterSpacing:{
        '1.69286': '1.69286px',
        '0.35':'0.35px'
      },
      lineHeight:{
        '280': 'inherit'
      }
    },
  },
  plugins: [],
}

