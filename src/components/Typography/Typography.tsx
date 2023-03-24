import React from 'react';
import { TypographyProps, TypographyVariants } from './Typography.types';
import * as S from './Typography.styled';

const Typography = ({
  variant = TypographyVariants.Body1,
  ...rest
}: TypographyProps) => {
  const Comp = S[variant as keyof typeof S];
  return <Comp data-testid={`${variant}-typography`} {...rest} />;
};

export default Typography;
