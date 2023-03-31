import React from 'react';
import Button from './Button';
import { buttonDriver } from '../../drivers';
import { ButtonProps } from './Button.types';
import { DesignSystemProvider } from '../../style/DesignSystemProvider';
import { theme } from '../../style/theme';
import { renderWithTheme } from '../../utils/test/renderWithTheme';

const TEXT_CONTENT = 'Click me';

const renderButton = (props?: ButtonProps) =>
  renderWithTheme(
    <DesignSystemProvider>
      <Button {...props}>{TEXT_CONTENT}</Button>
    </DesignSystemProvider>,
  );

describe('Button', () => {
  it('should render', () => {
    renderButton();
    expect(buttonDriver.getButton()).toBeInTheDocument();
  });

  it('should render primary contained by default', () => {
    renderButton();
    expect(buttonDriver.getButton()).toHaveStyle({
      backgroundColor: theme.colors.primary[500],
    });
  });

  it('should render secondary outlined', () => {
    renderButton({ variant: 'outlined', color: 'secondary' });
    expect(buttonDriver.getButton()).toHaveStyle({
      color: theme.colors.secondary[500],
    });
  });

  it('should render danger text', () => {
    renderButton({ variant: 'text', color: 'danger' });
    expect(buttonDriver.getButton()).toHaveStyle({
      color: theme.colors.error[600],
    });
  });

  it('should render with icon', () => {
    renderButton({ icon: <span>Icon</span> });
    expect(buttonDriver.getIconInButton()).toBeInTheDocument();
  });

  it('should invoke onClick', () => {
    const onClick = jest.fn();
    renderButton({ onClick });
    buttonDriver.clickOnButton();
    expect(onClick).toHaveBeenCalled();
  });
});
