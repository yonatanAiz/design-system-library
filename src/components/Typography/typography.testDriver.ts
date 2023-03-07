import { screen, SelectorMatcherOptions } from '@testing-library/react';

export const typographyDriver = {
  getTypography: (textContent: string, options?: SelectorMatcherOptions) => {
    return screen.getByText(textContent, options);
  },
};
