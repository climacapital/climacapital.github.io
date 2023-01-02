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
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1140px',
      '2xl': '1400px',
    },

    colors: {
      transparent:    'transparent',
      current:        'currentColor',
      white:          '#fff',
      black:          '#27251F',

      // Define color space here
      light: {
        primary:    '#27251F',
        secondary:  '#0092D1',
        tertiary:   '',
        accent:     '#0092D1',
        highlight:  '',
        background: '#EDF9FC',
        border:     '#ECECEC',
      },

      // Define tints and shades here
      blue: {
        100:     '#EDF9FC',
        300:     '#A5DAEF',
        500:     '#7DC5E5',
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
        '0.5':  '4px',
        '0.75': '6px',
        '1':    '8px',
        '2':    '16px',
        '3':    '24px',
        '4':    '32px',
        '5':    '40px',
        '6':    '48px',
        '7':    '56px',
        '8':    '64px',
        '9':    '72px',
        '10':   '80px',
        '11':   '88px',
        '12':   '96px'
      },

      // Reset your font sizes here with your font scale (1.125x base 19px)
      fontSize: {
        '2xs':  '0.834rem',
        xs:     '0.938rem',
        sm:     '1.056rem',
        base:   '1.188rem',
        xl:     '1.336rem',
        '2xl':  '1.503rem',

        // In this theme, we skip the scale to larger sizes
        '3xl':  '2.407rem',
        '4xl':  '3.428rem',
        '5xl':  '3.856rem',
        '6xl':  '4.338rem',
        '7xl':  '4.88rem',
      },

      boxShadow: {
        'nav-mobile': '0 2px 12px rgba(26, 45, 60, 0.15)',
      },
      height: {
        'home-header': '720px',
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
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
