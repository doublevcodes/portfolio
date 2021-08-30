const colors = require("tailwindcss/colors")

const config = {
	// Enables the JIT compiler to increase performance
  // Further information at https://tailwindcss.com/docs/just-in-time-mode#enabling-jit-mode
  mode: 'jit',

  // Which files to optimise for production by purging extraneous modifiers
  // See https://tailwindcss.com/docs/optimizing-for-production for details
  purge: {
    content: [
      './src/**/*.{html,svelte,js,ts}'
    ]
  },

  // No presets are used as this is a full configuration
  // Information presets at https://tailwindcss.com/docs/presets
  presets: [],

  // Enables us to add a `dark` class which will enable dark
  // mode for itself and all children nodes
  // To learn more visit https://tailwindcss.com/docs/dark-mode
  darkMode: 'class',

  theme: {

    // Custom more verbose and Bulma-like responsiveness helpers
    // Bulma responsiveness helpers for reference are over at:
    // https://bulma.io/documentation/overview/responsiveness/
    screens: {
      mobile: '43rem',
      tablet: '62rem',
      desktop: '82rem',
      widescreen: '96rem',
    },

    // This colour theme has been chose to align with the
    // Atom One colour theme where:
    // https://raw.githubusercontent.com/joshdick/onedark.vim/main/img/color_reference.png
    // └──> is the dark mode specification
    // and
    // <light theme link will go here>
    // └──> is the light mode specification
    // More on this at https://tailwindcss.com/docs/customizing-colors
    colors: {

      // Built-in utility colours that are worth keeping
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,

      primary: {
        DEFAULT: '#282C34',
        light: colors.black,
        dark: '#282C34'
      },

      secondary: {
        DEFAULT: '#ABB2BF',
        light: colors.black,
        dark: '#ABB2BF'
      },

      red: {
        DEFAULT: '#E06C75',
        light: colors.black,
        dark: '#E06C75'
      },

      orange: {
        DEFAULT: '#D19A66',
        light: colors.black,
        dark: '#D19A66'
      },

      yellow: {
        DEFAULT: '#E5C07B',
        light: colors.black,
        dark: '#E5C07B'
      },

      green: {
        DEFAULT: '#98C379',
        light: colors.black,
        dark: '#98C379'
      },

      blue: {
        DEFAULT: '#61AFEF',
        light: colors.black,
        dark: '#61AFEF'
      },

      purple: {
        DEFAULT: '#C678DD',
        light: colors.black,
        dark: '#C678DD'
      },

      teal: {
        DEFAULT: '#56B6C2',
        light: colors.black,
        dark: '#56B6C2'
      }
    },

    // Default spacing that was provided by TailwindCSS has
    // been retained but standardise to use rem instead of px
    // Learn more at https://tailwindcss.com/docs/customizing-spacing
    spacing: {
      px : '0.063rem',
      0  : '0.000rem',
      0.5: '0.125rem',
      1  : '0.250rem',
      1.5: '0.375rem',
      2  : '0.500rem',
      2.5: '0.625rem',
      3  : '0.750rem',
      3.5: '0.875rem',
      4  : '1.000rem',
      5  : '1.250rem',
      6  : '1.500rem',
      7  : '1.750rem',
      8  : '2.000rem',
      9  : '2.250rem',
      10 : '2.500rem',
      11 : '2.750rem',
      12 : '3.000rem',
      14 : '3.500rem',
      16 : '4.000rem',
      20 : '5.000rem',
      24 : '6.000rem',
      28 : '7.000rem',
      32 : '8.000rem',
      36 : '9.000rem',
      40 : '10.000rem',
      44 : '11.000rem',
      48 : '12.000rem',
      52 : '13.000rem',
      56 : '14.000rem',
      60 : '15.000rem',
      64 : '16.000rem',
      72 : '18.000rem',
      80 : '20.000rem',
      96 : '24.000rem',
    },

    // The default animations provided by TailwindCSS
    // This can be extended on if need be at a later date
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
    },

    // Background modifiers as default in TailwindCSS,
    // These are currently untouched
    backdropBlur:       (theme) => theme('blur'),
    backdropBrightness: (theme) => theme('brightness'),
    backdropContrast:   (theme) => theme('contrast'),
    backdropGrayscale:  (theme) => theme('grayscale'),
    backdropHueRotate:  (theme) => theme('hueRotate'),
    backdropInvert:     (theme) => theme('invert'),
    backdropOpacity:    (theme) => theme('opacity'),
    backdropSaturate:   (theme) => theme('saturate'),
    backdropSepia:      (theme) => theme('sepia'),
    backgroundColor:    (theme) => theme('colors'),
    backgroundOpacity:  (theme) => theme('opacity'),

    // Background images modifiers are set to default by TailwindCSS
    // but have been renamed to be more verbose
    backgroundImage: {
      'none'                    : 'none',
      'gradient-to-top'         : 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-top-right'   : 'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-right'       : 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-bottom-right': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-bottom'      : 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bottom-left' : 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-left'        : 'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-top-left'    : 'linear-gradient(to top left, var(--tw-gradient-stops))',
    },
    
    // Just like the background image modifiers, these position classes
    // have been renamed but their values kept the same
    backgroundPosition: {
      'top'         : 'top',
      'top-right'   : 'top right',
      'right'       : 'right',
      'bottom-right': 'bottom right',
      'bottom'      : 'bottom',
      'bottom-left' : 'bottom left',
      'left'        : 'left',
      'top-left'    : 'top left',
      'center'      : 'center'
    },

    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },

    blur: {
      DEFAULT: '0.5rem',
      0: '0',
      none: '0',
      small: '0.25rem',
      medium: '0.75rem',
      large: '1rem',
      'x-large': '1.5rem',
      '2x-large': '2.5rem',
      '3x-large': '4rem',
    },

    brightness: {
      0: '0.00',
      50: '0.50',
      75: '0.75',
      90: '0.90',
      95: '0.95',
      100: '1.00',
      105: '1.05',
      110: '1.10',
      125: '1.25',
      150: '1.50',
      200: '2.00',
    },

    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor'),
    }),

    borderOpacity: (theme) => theme('opacity'),
    
    borderRadius: {
      DEFAULT: '0.25rem',
      none: '0.000rem',
      small: '0.125rem',
      medium: '0.375rem',
      large: '0.500rem',
      'x-large': '0.750rem',
      '2x-large': '1.000rem',
      '3x-large': '1.500rem',
      full: '9999.000px',
    },

    borderWidth: {
      DEFAULT: '0.0625rem',
      0: '0.000rem',
      2: '0.125rem',
      4: '0.250rem',
      8: '0.500rem',
    },

    boxShadow: {
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      small: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      large: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'x-large': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2x-large': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },

    caretColor: (theme) => theme('colors'),

    contrast: {
      0: '0.00',
      50: '0.50',
      75: '0.75',
      100: '1.00',
      125: '1.25',
      150: '1.50',
      200: '2.00',
    },

    container: {},

    content: {
      none: 'none',
    },

    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      help: 'help',
      'not-allowed': 'not-allowed',
    },

    divideColor: (theme) => theme('borderColor'),
    divideOpacity: (theme) => theme('borderOpacity'),
    divideWidth: (theme) => theme('borderWidth'),

    dropShadow: {
      DEFAULT: ['0 1px 2px rgba(0, 0, 0, 0.1)', '0 1px 1px rgba(0, 0, 0, 0.06)'],
      small: '0 1px 1px rgba(0,0,0,0.05)',
      medium: ['0 4px 3px rgba(0, 0, 0, 0.07)', '0 2px 2px rgba(0, 0, 0, 0.06)'],
      large: ['0 10px 8px rgba(0, 0, 0, 0.04)', '0 4px 3px rgba(0, 0, 0, 0.1)'],
      'x-large': ['0 20px 13px rgba(0, 0, 0, 0.03)', '0 8px 5px rgba(0, 0, 0, 0.08)'],
      '2x-large': '0 25px 25px rgba(0, 0, 0, 0.15)',
      none: '0 0 #000000',
    },

    fill: {
      current: 'currentColor'
    },

    grayscale: {
      0: '0',
      DEFAULT: '100%',
    },

    hueRotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-60': '-60deg',
      '-30': '-30deg',
      '-15': '-15deg',
      0: '0deg',
      15: '15deg',
      30: '30deg',
      60: '60deg',
      90: '90deg',
      180: '180deg',
    },

    invert: {
      0: '0',
      DEFAULT: '100%',
    },

    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },

    flexGrow: {
      0: '0',
      DEFAULT: '1',
    },

    flexShrink: {
      0: '0',
      DEFAULT: '1',
    },

    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },

    fontSize: {
      'x-small': ['0.75rem', { lineHeight: '1rem' }],
      small: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      large: ['1.125rem', { lineHeight: '1.75rem' }],
      'x-large': ['1.25rem', { lineHeight: '1.75rem' }],
      '2x-large': ['1.5rem', { lineHeight: '2rem' }],
      '3x-large': ['1.875rem', { lineHeight: '2.25rem' }],
      '4x-large': ['2.25rem', { lineHeight: '2.5rem' }],
      '5x-large': ['3rem', { lineHeight: '1' }],
      '6x-large': ['3.75rem', { lineHeight: '1' }],
      '7x-large': ['4.5rem', { lineHeight: '1' }],
      '8x-large': ['6rem', { lineHeight: '1' }],
      '9x-large': ['8rem', { lineHeight: '1' }],
    },

    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },

    gap: (theme) => theme('spacing'),

    gradientColorStops: (theme) => theme('colors'),

    gridAutoColumns: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },

    gridAutoRows: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },

    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      'span-full': '1 / -1',
    },

    gridColumnEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },

    gridColumnStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },

    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-full': '1 / -1',
    },

    gridRowStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },

    gridRowEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },

    gridTemplateColumns: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
    },

    gridTemplateRows: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
    },

    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/20': '5vh',
      '9/10': '95vh',
      full: '100%',
      screen: '100vh',
    }),

    inset: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
      '-full': '-100%',
    }),

    keyframes: {
      spin: {
        to: {
          transform: 'rotate(360deg)',
        },
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(2)',
          opacity: '0',
        },
      },
      pulse: {
        '50%': {
          opacity: '.5',
        },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
    },

    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },

    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },

    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },

    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),

    maxHeight: (theme) => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),

    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      0: '0rem',
      'x-small': '20rem',
      small: '24rem',
      medium: '28rem',
      large: '32rem',
      'x-large': '36rem',
      '2x-large': '42rem',
      '3x-large': '48rem',
      '4x-large': '56rem',
      '5x-large': '64rem',
      '6x-large': '72rem',
      '7x-large': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      ...breakpoints(theme('screens')),
    }),

    minHeight: {
      0: '0px',
      full: '100%',
      screen: '100vh',
    },

    minWidth: {
      0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
    },

    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },

    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      95: '0.95',
      100: '1',
    },

    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },

    outline: {
      none: ['2px solid transparent', '2px'],
      white: ['2px dotted white', '2px'],
      black: ['2px dotted black', '2px'],
    },

    padding: (theme) => theme('spacing'),

    placeholderColor: (theme) => theme('colors'),
    placeholderOpacity: (theme) => theme('opacity'),

    ringColor: (theme) => ({
      DEFAULT: theme('colors.blue.500', '#3b82f6'),
      ...theme('colors'),
    }),

    ringOffsetColor: (theme) => theme('colors'),

    ringOffsetWidth: {
      0: '0.0000rem',
      1: '0.0625rem',
      2: '0.1250rem',
      4: '0.2500rem',
      8: '0.5000rem',
    },

    ringOpacity: (theme) => ({
      DEFAULT: '0.5',
      ...theme('opacity'),
    }),

    ringWidth: {
      DEFAULT: '3px',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },

    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      45: '45deg',
      90: '90deg',
      180: '180deg',
    },

    saturate: {
      0: '0',
      50: '.5',
      100: '1',
      150: '1.5',
      200: '2',
    },

    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
    },

    sepia: {
      0: '0',
      DEFAULT: '100%',
    },

    skew: {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
    },

    space: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),

    stroke: {
      current: 'currentColor',
    },

    strokeWidth: {
      0: '0',
      1: '1',
      2: '2',
    },

    textColor: (theme) => theme('colors'),
    textOpacity: (theme) => theme('opacity'),

    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },

    transitionDelay: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },

    transitionDuration: {
      DEFAULT: '150ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },

    transitionProperty: {
      none: 'none',
      all: 'all',
      DEFAULT:
        'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },

    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },

    translate: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
      '-full': '-100%',
    }),

    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
    }),

    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
    },
  },

  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled',
  ],

  variants: {
    accessibility: ['responsive', 'focus-within', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    animation: ['responsive'],
    appearance: ['responsive'],
    backdropBlur: ['responsive'],
    backdropBrightness: ['responsive'],
    backdropContrast: ['responsive'],
    backdropFilter: ['responsive'],
    backdropGrayscale: ['responsive'],
    backdropHueRotate: ['responsive'],
    backdropInvert: ['responsive'],
    backdropOpacity: ['responsive'],
    backdropSaturate: ['responsive'],
    backdropSepia: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundBlendMode: ['responsive'],
    backgroundClip: ['responsive'],
    backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    backgroundImage: ['responsive'],
    backgroundOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    backgroundOrigin: ['responsive'],
    blur: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    borderOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxDecorationBreak: ['responsive'],
    boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    boxSizing: ['responsive'],
    brightness: ['responsive'],
    clear: ['responsive'],
    container: ['responsive'],
    contrast: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    divideColor: ['responsive', 'dark'],
    divideOpacity: ['responsive', 'dark'],
    divideStyle: ['responsive'],
    divideWidth: ['responsive'],
    dropShadow: ['responsive'],
    fill: ['responsive'],
    filter: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontWeight: ['responsive'],
    gap: ['responsive'],
    gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
    grayscale: ['responsive'],
    gridAutoColumns: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridAutoRows: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridColumnStart: ['responsive'],
    gridRow: ['responsive'],
    gridRowEnd: ['responsive'],
    gridRowStart: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridTemplateRows: ['responsive'],
    height: ['responsive'],
    hueRotate: ['responsive'],
    inset: ['responsive'],
    invert: ['responsive'],
    isolation: ['responsive'],
    justifyContent: ['responsive'],
    justifyItems: ['responsive'],
    justifySelf: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    mixBlendMode: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus-within', 'focus'],
    overflow: ['responsive'],
    overscrollBehavior: ['responsive'],
    padding: ['responsive'],
    placeContent: ['responsive'],
    placeItems: ['responsive'],
    placeSelf: ['responsive'],
    placeholderColor: ['responsive', 'dark', 'focus'],
    placeholderOpacity: ['responsive', 'dark', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
    ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
    ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
    ringOpacity: ['responsive', 'dark', 'focus-within', 'focus'],
    ringWidth: ['responsive', 'focus-within', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    saturate: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    sepia: ['responsive'],
    skew: ['responsive', 'hover', 'focus'],
    space: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    textOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    textOverflow: ['responsive'],
    textTransform: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    transitionDelay: ['responsive'],
    transitionDuration: ['responsive'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    translate: ['responsive', 'hover', 'focus'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive', 'focus-within', 'focus'],
  },
  extends: {
    theme: {
      extend: {
        backgroundImage: (theme) => ({
          "construction": "url(/public/topography.svg)"
        })
      }
    }
  },
  plugins: [],
};

module.exports = config;
