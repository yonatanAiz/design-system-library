import React from 'react';
import { render } from '@testing-library/react';
import Typography from './Typography';
import { DesignSystemProvider } from '../../style';
import { TypographyProps, TypographyVariants } from './Typography.types';

const typographyVariantHTMLElementMap: Record<TypographyVariants, string> = {
  [TypographyVariants.Header1]: 'H1',
  [TypographyVariants.Header2]: 'H2',
  [TypographyVariants.Header3]: 'H3',
  [TypographyVariants.Header4]: 'H4',
  [TypographyVariants.Header5]: 'H5',
  [TypographyVariants.Header6]: 'H6',
  [TypographyVariants.Body1]: 'SPAN',
  [TypographyVariants.Body2]: 'SPAN',
  [TypographyVariants.Subtitle1]: 'P',
  [TypographyVariants.Subtitle2]: 'P',
};

const renderTypography = (props: TypographyProps) => {
  const { getByTestId } = render(
    <DesignSystemProvider>
      <Typography {...props} />
    </DesignSystemProvider>,
  );

  return getByTestId(`${props.variant}-typography`);
};

describe('Typography', () => {
  it.each(Object.keys(TypographyVariants))(
    'should render %s variant',
    (variant) => {
      const typography = renderTypography({
        variant: variant as TypographyVariants,
        children:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur',
      });

      expect(typography.tagName).toEqual(
        typographyVariantHTMLElementMap[variant as TypographyVariants],
      );
    },
  );
});
