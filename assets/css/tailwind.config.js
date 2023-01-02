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

    fontFamily: {
      'body':     ['"Hanken Grotesk"', ...defaultTheme.fontFamily.sans ],
      'display':  ['"Hanken Grotesk"', ...defaultTheme.fontFamily.sans ],
      'special':  ['"Hanken Grotesk"', ...defaultTheme.fontFamily.sans ],
    },

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

      eco: {
        DEFAULT:  '#21b281',
        50:       '#f4fbf9',
        100:      '#e9f7f2',
        200:      '#c8ece0',
        300:      '#a6e0cd',
        400:      '#64c9a7',
        500:      '#21b281',
        600:      '#1ea074',
        700:      '#198661',
        800:      '#146b4d',
        900:      '#10573f'
      },

      gold: {
        DEFAULT:  '#FFC129',
        50:       '#fffcf4',
        100:      '#fff9ea',
        200:      '#fff0ca',
        300:      '#ffe6a9',
        400:      '#ffd469',
        500:      '#ffc129',
        600:      '#e6ae25',
        700:      '#bf911f',
        800:      '#997419',
        900:      '#7d5f14'
      },

      sky: {
        DEFAULT:   '#FFC129',
        50:        '#f5fdff',
        100:       '#ecfbfe',
        200:       '#cff6fd',
        300:       '#b2f0fc',
        400:       '#79e4fa',
        500:       '#3fd9f8',
        600:       '#39c3df',
        700:       '#2fa3ba',
        800:       '#268295',
        900:       '#1f6a7a'
      },

      neutral: {
        DEFAULT:   '#586b7e',
        50:        '#f7f8f9',
        100:       '#eef0f2',
        200:       '#d5dadf',
        300:       '#bcc4cb',
        400:       '#8a97a5',
        500:       '#586b7e',
        600:       '#4f6071',
        700:       '#42505f',
        800:       '#35404c',
        900:       '#2b343e'
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
      sm:     '576px',
      md:     '768px',
      lg:     '992px',
      xl:     '1140px',
      '2xl':  '1440px',
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
        'extra-tight': '0.935',
        'menu-main':   '4.88rem',
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
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ]
}
