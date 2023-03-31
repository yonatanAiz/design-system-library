import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { DesignSystemProvider } from '../../style';

export const renderWithTheme = (
  ui: React.ReactElement,
  options?: RenderOptions,
) => {
  return render(<DesignSystemProvider>{ui}</DesignSystemProvider>, options);
};
