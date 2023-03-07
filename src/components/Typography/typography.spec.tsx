import React from 'react';
import { render } from '@testing-library/react';
import Typography from './Typography';
import { typographyDriver } from './typography.testDriver';
import { classMapper } from './Typography.utils';

describe('Typography', () => {
  const notHeadingCases = [
    {
      componentName: 'Body1',
      tagName: 'P',
      className: classMapper['body1'],
    },
    {
      componentName: 'Body2',
      tagName: 'P',
      className: classMapper['body2'],
    },
    {
      componentName: 'Subtitle1',
      tagName: 'P',
      className: classMapper['subtitle1'],
    },
    {
      componentName: 'Subtitle2',
      tagName: 'P',
      className: classMapper['subtitle2'],
    },
  ];
  const cases = [
    {
      componentName: 'Header1',
      tagName: 'H1',
      className: classMapper['h1'],
    },
    {
      componentName: 'Header2',
      tagName: 'H2',
      className: classMapper['h2'],
    },
    {
      componentName: 'Header3',
      tagName: 'H3',
      className: classMapper['h3'],
    },
    {
      componentName: 'Header4',
      tagName: 'H4',
      className: classMapper['h4'],
    },
    {
      componentName: 'Header5',
      tagName: 'H5',
      className: classMapper['h5'],
    },
    {
      componentName: 'Header6',
      tagName: 'H6',
      className: classMapper['h6'],
    },
    ...notHeadingCases,
  ];

  it.each(cases)('should render $componentName', (testCase) => {
    const { componentName, tagName, className } = testCase;
    const Component = Typography[componentName as keyof typeof Typography];
    render(<Component>{componentName}</Component>);
    const typography = typographyDriver.getTypography(componentName);
    expect(typography).toBeInTheDocument();
    expect(typography.tagName).toBe(tagName);
    expect(typography).toHaveClass(className);
  });

  it.each(notHeadingCases)(
    'should render $componentName as other tag',
    (testCase) => {
      const { componentName } = testCase;
      const Component = Typography[componentName as keyof typeof Typography];
      render(<Component as="span">{componentName}</Component>);
      const typography = typographyDriver.getTypography(componentName);
      expect(typography.tagName).toBe('SPAN');
    },
  );
});
