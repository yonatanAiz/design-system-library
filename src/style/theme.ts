export const theme = {
  colors: {
    primary: {
      300: '#b388ff',
      400: '#791aff',
      500: '#6200ee',
      600: '#3700b3',
      700: '#280087',
    },
    secondary: {
      300: '#04ffe8',
      400: '#03f2dc',
      500: '#03dac6',
      600: '#018786',
      700: '#015f62',
    },
    error: {
      300: '#e30029',
      400: '#c90025',
      500: '#b00020',
      600: '#7f0000',
      700: '#5a0000',
    },
    black: '#000000',
    white: '#ffffff',
    gray: {
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  fontFamily: {
    1: "'Roboto', sans-serif",
    2: "'Heebo', sans-serif",
  },
  fontWeight: {
    1: '300',
    2: '400',
    3: '500',
  },

  spaceBetweenLetters: {
    1: '0.15%',
    2: '0.05%',
    3: '0',
    4: '0.25%',
    5: '0.1%',
    6: '0.5%',
    7: '0.25%',
  },
};

/* Font sizes */
//   fontSizeHeading1: '9.6rem',
//   fontSizeHeading2: '6rem',
//   fontSizeHeading3: '4.8rem',
//   fontSizeHeading4: '3.4rem',
//   fontSizeHeading5: '2.4rem',
//   fontSizeHeading6: '2rem',
//   fontSizeSubtitle1: '1.6rem',
//   fontSizeSubtitle2: '1.4rem',
//   fontSizeBody1: '1.6rem',
//   fontSizeBody2: '1.4rem',

//   letterspacingbuttonmedium: '1px',
//   letterspacingbuttonsmall: '1.5px',

export type Theme = typeof theme;
