// .storybook/preview.js
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import {  createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../src/style/theme';

import '../src/style/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
const GlobalStyles = createGlobalStyle`

`;


export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    theme: theme,
  },
  defaultTheme: 'theme',
  Provider: ThemeProvider,
  GlobalStyles,
})];