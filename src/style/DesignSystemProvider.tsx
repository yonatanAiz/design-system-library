import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

interface DesignSystemProviderProps {
  children: React.ReactNode;
}

export const DesignSystemProvider = ({
  children,
}: DesignSystemProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
