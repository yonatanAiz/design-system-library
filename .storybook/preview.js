import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';
import { theme,GlobalStyles } from '../src/style';


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