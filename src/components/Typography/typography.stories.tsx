import React from 'react';
import Typography from './Typography';
import { TypographyVariants } from './Typography.types';

export default {
  title: 'Atoms/Typography',
  component: Typography,
};

export const TypographyStory = () => {
  return (
    <>
      {Object.keys(TypographyVariants).map((variant) => (
        <Typography key={variant} variant={variant as TypographyVariants}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        </Typography>
      ))}
    </>
  );
};
