const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary:{
        lightest:'#ECE1D6',
        light: '#DACCBE',
        DEFAULT: '#9D7958',
        dark: '#5b4733',
        darkest:'#342A1D'
      },
      Contrast:{
        dark: '#262626',
        light: '#c2c1bf'
      },
      White:{
        ghost: '#F8F8FF',
        DEFAULT: '#FFFFFF',
        powder: 'FEFEFA',
        floral: '#FFFAFO'
      },
      gray: colors.trueGray,
      bluegray: colors.blueGray,
      red: colors.red,
      green: colors.emerald,
      blue: colors.blue
    },
 
    extend:{
      height:{
        '104': '26rem',
        '120': '28rem',
        '136': '32rem',
        'max': '46.5rem'
      },
      maxHeight:{
        '104': '26rem',
        '120': '28rem',
        '136': '32rem',
        '140': '38rem',
        '144': '44rem',
        'max': '50rem'
      },
      maxWidth:{
        '1/3': '33.3%',
        '1/2': '48%'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
       'auto-fit': 'repeat(auto-fit, minmax(1fr, 2fr))',
    }


  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  },
  plugins: [],
}
}
//https://coolors.co/ece1d6-daccbe-9d7958-5b4733-fea82f