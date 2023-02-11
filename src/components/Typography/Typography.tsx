import React from 'react';
import classnames from 'classnames';
import { classMapper, elementMapper } from './Typography.utils';
import {
  NonHeadingProps,
  PartialTypographyProps,
  TypographyProps,
  TypographyVariant,
} from './Typography.types';

const TypographyBase = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant, children, className, as, ...props }, ref) => {
    return React.createElement(
      as || elementMapper[variant],
      {
        ...props,
        ref,
        className: classnames(classMapper[variant], className),
      },
      children,
    );
  },
);

TypographyBase.displayName = 'TypographyBase';

const typographyForwardRefHeadingFactory = (
  variant: TypographyVariant,
  displayName: string,
): React.ForwardRefExoticComponent<
  PartialTypographyProps & React.RefAttributes<HTMLHeadingElement>
> => {
  const Component = React.forwardRef<
    HTMLHeadingElement,
    PartialTypographyProps
  >((props, ref) => {
    return <TypographyBase variant={variant} {...props} ref={ref} />;
  });

  Component.displayName = displayName;

  return Component;
};

const Header1 = typographyForwardRefHeadingFactory('h1', 'Header1');
const Header2 = typographyForwardRefHeadingFactory('h2', 'Header2');
const Header3 = typographyForwardRefHeadingFactory('h3', 'Header3');
const Header4 = typographyForwardRefHeadingFactory('h4', 'Header4');
const Header5 = typographyForwardRefHeadingFactory('h5', 'Header5');
const Header6 = typographyForwardRefHeadingFactory('h6', 'Header6');

const typographyForwardRefNonHeadingFactory = (
  variant: TypographyVariant,
  displayName: string,
): React.ForwardRefExoticComponent<
  NonHeadingProps & React.RefAttributes<HTMLElement>
> => {
  const Component = React.forwardRef<HTMLElement, NonHeadingProps>(
    ({ as = 'p', ...props }, ref) => {
      return <TypographyBase variant={variant} as={as} {...props} ref={ref} />;
    },
  );

  Component.displayName = displayName;

  return Component;
};

const Body1 = typographyForwardRefNonHeadingFactory('body1', 'Body1');
const Body2 = typographyForwardRefNonHeadingFactory('body2', 'Body2');
const Subtitle1 = typographyForwardRefNonHeadingFactory(
  'subtitle1',
  'Subtitle1',
);
const Subtitle2 = typographyForwardRefNonHeadingFactory(
  'subtitle2',
  'Subtitle2',
);

const Typography = {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  Body1,
  Body2,
  Subtitle1,
  Subtitle2,
};

export default Typography;
