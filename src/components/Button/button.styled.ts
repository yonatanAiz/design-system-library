import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';

enum BUTTON_SIZE {
  LARGE = '1.6rem',
  MEDIUM = '1.4rem',
  SMALL = '1.2rem',
}

enum BUTTON_LETTER_SPACING {
  MEDIUM = '1px',
  SMALL = '1.5px',
}

const disabledButtonStyled = css`
  cursor: not-allowed;
  background-color: var(--gray-300);
  color: var(--gray-700);
  border: none;
`;

const containedStyled = {
  primary: css`
    background-color: ${(props) => props.theme.colors.primary[500]};
    color: ${(props) => props.theme.colors.white};

    &:hover {
      background-color: ${(props) => props.theme.colors.primary[400]};
    }

    &:active {
      background-color: ${(props) => props.theme.colors.primary[600]};
    }
  `,
  secondary: css`
    background-color: ${(props) => props.theme.colors.secondary[500]};
    color: ${(props) => props.theme.colors.black};

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary[400]};
    }

    &:active {
      background-color: ${(props) => props.theme.colors.secondary[600]};
    }
  `,

  danger: css`
    background-color: ${(props) => props.theme.colors.error[500]};
    color: ${(props) => props.theme.colors.white};

    &:hover {
      background-color: ${(props) => props.theme.colors.error[400]};
    }

    &:active {
      background-color: ${(props) => props.theme.colors.error[600]};
    }
  `,
};

const outlinedStyled = {
  primary: css`
    border: 1px solid ${(props) => props.theme.colors.primary[500]};
    color: ${(props) => props.theme.colors.primary[500]};

    &:hover {
      border: 1px solid ${(props) => props.theme.colors.primary[400]};
      color: ${(props) => props.theme.colors.primary[400]};
    }

    &:active {
      border: 1px solid ${(props) => props.theme.colors.primary[600]};
      color: ${(props) => props.theme.colors.primary[600]};
    }
  `,
  secondary: css`
    border: 1px solid ${(props) => props.theme.colors.secondary[500]};
    color: ${(props) => props.theme.colors.secondary[500]};
    &:hover {
      border: 1px solid ${(props) => props.theme.colors.secondary[400]};
      color: ${(props) => props.theme.colors.secondary[400]};
    }

    &:active {
      border: 1px solid ${(props) => props.theme.colors.secondary[600]};
      color: ${(props) => props.theme.colors.secondary[600]};
    }
  `,
  danger: css`
    border: 1px solid ${(props) => props.theme.colors.error[500]};
    color: ${(props) => props.theme.colors.error[500]};
    &:hover {
      border: 1px solid ${(props) => props.theme.colors.error[400]};
      color: ${(props) => props.theme.colors.error[400]};
    }

    &:active {
      border: 1px solid ${(props) => props.theme.colors.error[600]};
      color: ${(props) => props.theme.colors.error[600]};
    }
  `,
};

const textStyled = {
  primary: css`
    color: ${(props) => props.theme.colors.primary[600]};
    &:hover {
      color: ${(props) => props.theme.colors.primary[500]};
    }
    &:active {
      color: ${(props) => props.theme.colors.primary[700]};
    }
  `,
  secondary: css`
    color: ${(props) => props.theme.colors.secondary[600]};
    &:hover {
      color: ${(props) => props.theme.colors.secondary[500]};
    }
    &:active {
      color: ${(props) => props.theme.colors.secondary[700]};
    }
  `,
  danger: css`
    color: ${(props) => props.theme.colors.error[600]};
    &:hover {
      color: ${(props) => props.theme.colors.error[500]};
    }
    &:active {
      color: ${(props) => props.theme.colors.error[700]};
    }
  `,
};

export const Button = styled.button<
  Pick<ButtonProps, 'variant' | 'color' | 'icon'>
>`
  padding: 0.75rem 1.6rem;
  border-radius: 8px;
  cursor: pointer;

  font-family: ${(props) => props.theme.fontFamily[2]};
  font-weight: ${(props) => props.theme.fontWeight[3]};
  font-size: ${BUTTON_SIZE.MEDIUM};
  letter-spacing: ${BUTTON_LETTER_SPACING.MEDIUM};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${({ disabled, variant = 'contained', color = 'primary' }) => {
    if (disabled) {
      return disabledButtonStyled;
    }

    if (variant === 'contained') {
      return css`
        border: none;
        ${containedStyled[color]}
      `;
    }

    if (variant === 'outlined') {
      return css`
        border-width: 1px;
        background: none;
        ${outlinedStyled[color]}
      `;
    }

    if (variant === 'text') {
      return css`
        border: none;
        background: none;
        ${textStyled[color]}
      `;
    }

    return css``;
  }}
`;
