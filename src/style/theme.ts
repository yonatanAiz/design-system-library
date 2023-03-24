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
  typography: {
    fontFamily: {
      1: "'Roboto', sans-serif",
      2: "'Heebo', sans-serif",
    },
    fontWeight: {
      1: '300',
      2: '400',
      3: '500',
    },
  },
};

export type Theme = typeof theme;
