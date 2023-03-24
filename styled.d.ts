// styled.d.ts
import 'styled-components';
import { Theme } from './src/style/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Theme['colors'];
    typography: Theme['typography'];
  }
}
