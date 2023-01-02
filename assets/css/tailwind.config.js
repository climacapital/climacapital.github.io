const themeDir = __dirname + '/../../';
const defaultTheme = require('tailwindcss/defaultTheme')
const enablePurge = (process.env.HUGO_ENVIRONMENT === 'production' ? true : false)

module.exports = {
  purge: {
    enabled: enablePurge,
    content: [themeDir + '/**/*.html'],
    options: {
      keyframes: true,
    },
  },
  theme: {

    colors: {

      //Set background and border color
      "th-bg":         'var(--color-bg)',
      "th-border":     'var(--color-border)',

      //Wells are used when you need to denote a state
      "th-well":       'var(--color-well)',

      //Body fonts
      "th-primary":    'var(--color-primary)',

      //Headings or dividers
      "th-secondary":  'var(--color-secondary)',

      //Use for links
      "th-accent": {
        'light':  'var(--color-accent)',
        DEFAULT:  'var(--color-accent)',
        'dark':   'var(--color-accent)',
      },

      //Use to highlight something
      "th-highlight":  'var(--color-highlight)',

      "th-error": {
        DEFAULT:  '',
      },
      "th-alert": {
        DEFAULT:  '',
      },
      "th-info": {
        DEFAULT:  '',
      },
      "th-success": {
        DEFAULT:  '',
      },

      transparent:    'transparent',
      white:          '#fff',
      black:          '#27251F',

      // Define tints and shades here
      blue: {
        100:     '#EDF9FC',
        300:     '#A5DAEF',
        DEFAULT: '#0092D1',
        700:     '#0070A0',
        900:     '#004F72',
      },
      neutral: {
        100:     '#ECECEC',
        300:     '#97999B',
        DEFAULT: '#27251F',
      },

      // Define functional colors here
      alert: {
        300:      '#FBDAD2',
        DEFAULT:  '#F2836A',
      },
      info: {
        DEFAULT:  '#F2836A',
      },

    },

    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1140px',
      '2xl': '1440px',
    },

    fontFamily: {
      sans: [...defaultTheme.fontFamily.sans],
    },
    extend: {
      maxWidth: {
        '1/2': '50%',
      },

      padding: {
        'fluid-video': '56.25%',
      },

      // Reset your padding scale here
      padding: {
        '0.5':  '0.25rem',
        '1':    '0.5rem',
        '2':    '1rem',
        '3':    '1.5rem',
        '4':    '2.0rem',
        '5':    '2.5rem',
        '6':    '3rem',
        '7':    '3.5rem',
        '8':    '4rem',
        '9':    '4.5rem',
        '10':   '5rem',
        '11':   '5.5rem',
        '12':   '6rem',
      },

      // Reset your margin scale here
      margin: {
        '1':  '0.25rem',
        '2':    '0.5rem',
        '3':    '1rem',
        '4':    '1.5rem',
        '5':    '2rem',
        '6':    '2.5rem',
        '7':    '3rem',
        '8':    '3.5rem',
        '9':    '4rem',
        '10':    '4.5rem',
        '11':   '5rem',
        '12':   '5.5rem',
        '13':   '6rem',
      },


      // Reset your font sizes here with your font scale (1.125x base 19px)
      fontSize: {
        '2xs':  '0.834rem',
        xs:     '0.938rem',
        sm:     '1.056rem',
        base:   '1.188rem',
        xl:     '1.336rem',
        '2xl':  '1.503rem',
        '3xl':  '2.407rem',
        '4xl':  '3.428rem',
        '5xl':  '3.856rem',
        '6xl':  '4.338rem',
        '7xl':  '4.88rem',
      },

      lineHeight: {
        "menu": "3.428rem"
      },
      zIndex: {
        '60': '60',
      }
    },
  },
  variants: {
    extend: {}
  },
  corePlugins: {
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
