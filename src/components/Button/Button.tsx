import React from 'react';
import * as S from './button.styled';
import { ButtonProps } from './Button.types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'contained',
      color = 'primary',
      type = 'button',
      icon,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <S.Button
        {...props}
        ref={ref}
        type={type}
        color={color}
        variant={variant}
      >
        {icon ? <span data-testid="button-icon-prefix">{icon}</span> : null}
        {children}
      </S.Button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
