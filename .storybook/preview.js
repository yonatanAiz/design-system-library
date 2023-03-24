// .storybook/preview.js
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import {  createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme, DesignSystemProvider,GlobalStyles } from '../src/style';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    theme: theme,
  },
  defaultTheme: 'theme',
  Provider: ThemeProvider,
  GlobalStyles,
})];