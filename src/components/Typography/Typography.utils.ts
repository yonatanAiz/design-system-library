import { css } from 'styled-components';
import { TypographyVariants } from './Typography.types';

export enum FONT_SIZE {
  HEADING1 = '9.6rem',
  HEADING2 = '6rem',
  HEADING3 = '4.8rem',
  HEADING4 = '3.4rem',
  HEADING5 = '2.4rem',
  HEADING6 = '2rem',
  SUBTITLE1 = '1.6rem',
  SUBTITLE2 = '1.4rem',
  BODY1 = '1.6rem',
  BODY2 = '1.4rem',
}

export enum LetterSpacing {
  HEADING1 = '0.15%',
  HEADING2 = '-0.05%',
  HEADING3 = '0',
  HEADING4 = '0.25%',
  HEADING5 = '0',
  HEADING6 = '0.15%',
  SUBTITLE1 = '0.15%',
  SUBTITLE2 = '0.1%',
  BODY1 = '0.5%',
  BODY2 = '0.25%',
}

const heading1 = css`
  font-family: ${({ theme }) => theme.typography.fontFamily[1]};
  font-size: ${FONT_SIZE.HEADING1};
  font-weight: ${({ theme }) => theme.typography.fontWeight[1]};
  letter-spacing: ${LetterSpacing.HEADING1};
`;

const heading2 = css`
  font-family: ${({ theme }) => theme.typography.fontFamily[1]};
  font-size: ${FONT_SIZE.HEADING2};
  font-weight: ${({ theme }) => theme.typography.fontWeight[1]};
  letter-spacing: ${LetterSpacing.HEADING2};
`;

const heading3 = css`
  font-family: ${({ theme }) => theme.typography.fontFamily[1]};
  font-size: ${FONT_SIZE.HEADING3};
  font-weight: ${({ theme }) => theme.typography.fontWeight[2]};
  letter-spacing: ${LetterSpacing.HEADING3};
`;

const heading4 = css`
  font-family: ${({ theme }) => theme.typography.fontFamily[1]};
  font-size: ${FONT_SIZE.HEADING4};
  font-weight: ${({ theme }) => theme.typography.fontWeight[2]};
  letter-spacing: ${LetterSpacing.HEADING4};
`;

const heading5 = css`
  font-family: ${({ theme }) => theme.typography.fontFamily[1]};
  font-size: ${FONT_SIZE.HEADING5};
  font-weight: ${({ theme }) => theme.typography.fontWeight[2]};
  letter-spacing: ${LetterSpacing.HEADING5};
`;

const heading6 = css`
  font-family: ${({ theme }) => theme.typography.fontFamily[1]};
  font-size: ${FONT_SIZE.HEADING6};
  font-weight: ${({ theme }) => theme.typography.fontWeight[3]};
  letter-spacing: ${LetterSpacing.HEADING6};
`;

const subtitle1 = css`
  font-family: ${({ theme }) => theme.typography.fontFamily[1]};
  font-size: ${FONT_SIZE.SUBTITLE1};
  font-weight: ${({ theme }) => theme.typography.fontWeight[2]};
  letter-spacing: ${LetterSpacing.SUBTITLE1};
`;

const subtitle2 = css`
  font-family: ${({ theme }) => theme.typography.fontFamily[1]};
  font-size: ${FONT_SIZE.SUBTITLE2};
  font-weight: ${({ theme }) => theme.typography.fontWeight[3]};
  letter-spacing: ${LetterSpacing.SUBTITLE2};
`;

const body1 = css`
  font-family: ${({ theme }) => theme.typography.fontFamily[2]};
  font-size: ${FONT_SIZE.BODY1};
  font-weight: ${({ theme }) => theme.typography.fontWeight[2]};
  letter-spacing: ${LetterSpacing.BODY1};
`;

const body2 = css`
  font-family: ${({ theme }) => theme.typography.fontFamily[2]};
  font-size: ${FONT_SIZE.BODY2};
  font-weight: ${({ theme }) => theme.typography.fontWeight[2]};
  letter-spacing: ${LetterSpacing.BODY2};
`;

export const getTypographyVariantStyle = (variant: TypographyVariants) => {
  const variantsMap: Record<TypographyVariants, ReturnType<typeof css>> = {
    Header1: heading1,
    Header2: heading2,
    Header3: heading3,
    Header4: heading4,
    Header5: heading5,
    Header6: heading6,
    Body1: body1,
    Body2: body2,
    Subtitle1: subtitle1,
    Subtitle2: subtitle2,
  };

  return variantsMap[variant] || body1;
};
