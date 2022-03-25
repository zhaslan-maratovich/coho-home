module.exports = {
  purge: ['./assets/**/*.html', './assets/**/*.js'],
  darkMode: false,
  theme: {
    screens: {
      md: '768px',
      lg: '1024px',
      '2xl': '1920px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        500: '#130E0C',
        700: '#0D0704',
        900: '#000000',
      },
      white: '#FFFFFF',
      orange: {
        200: '#EFE5DE',
      },
      gray: {
        100: '#F6F6F6',
        200: '#F3F3F3',
        300: '#E8E8E8',
        400: '#E2E2E2',
        500: '#C4C4C4',
        600: '#B0B0B0',
        700: '#828282',
        800: '#5C5C5C',
        850: '#4F4F4F',
        900: '#333333',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    fontSize: {
      6: '6px',
      8: '8px',
      9: '9px',
      10: '10px',
      11: '11px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      25: '25px',
      35: '35px',
    },
    extend: {
      spacing: {
        15: '3.75rem'
      },
      boxShadow: ({ theme }) => ({
        underline: '0 1px 0 0 ' + theme('colors.dark')
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
