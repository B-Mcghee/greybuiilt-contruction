module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary:{
        light: '#DACCBE',
        DEFAULT: '#9D7958',
        dark: '#5b4733',
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
      }
    }, 
    extend:{
      maxHeight:{
        '104': '26rem',
        '120': '28rem',
        '136': '32rem',
        'max': '50rem'
      }
    }


  },
  variants: {
          extend: {
      }
  },
  plugins: [],
}
