import styled from 'styled-components';
import { TypographyVariants } from './Typography.types';
import { getTypographyVariantStyle } from './Typography.utils';

export const Header1 = styled.h1`
  ${getTypographyVariantStyle(TypographyVariants.Header1)}
`;
export const Header2 = styled.h2`
  ${getTypographyVariantStyle(TypographyVariants.Header2)}
`;
export const Header3 = styled.h3`
  ${getTypographyVariantStyle(TypographyVariants.Header3)}
`;
export const Header4 = styled.h4`
  ${getTypographyVariantStyle(TypographyVariants.Header4)}
`;
export const Header5 = styled.h5`
  ${getTypographyVariantStyle(TypographyVariants.Header5)}
`;
export const Header6 = styled.h6`
  ${getTypographyVariantStyle(TypographyVariants.Header6)}
`;
export const Subtitle1 = styled.p`
  ${getTypographyVariantStyle(TypographyVariants.Subtitle1)}
`;
export const Subtitle2 = styled.p`
  ${getTypographyVariantStyle(TypographyVariants.Subtitle2)}
`;
export const Body1 = styled.span`
  ${getTypographyVariantStyle(TypographyVariants.Body1)}
`;
export const Body2 = styled.span`
  ${getTypographyVariantStyle(TypographyVariants.Body2)}
`;
