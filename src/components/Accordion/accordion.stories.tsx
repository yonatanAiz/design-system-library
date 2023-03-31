import React from 'react';
import Accordion, { AccordionItem } from './Accordion';
import { Typography, TypographyVariants } from '../Typography';
import { Meta } from '@storybook/react';

export default {
  title: 'Atoms/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem },
} as Meta;

export const Default = () => (
  <Accordion>
    {Array.from({ length: 3 }).map((_, index) => (
      <AccordionItem
        key={index}
        renderTitle={(isExpanded) => (
          <Typography>
            {isExpanded ? `Close Item ${index + 1}` : `Open Item ${index + 1}`}
          </Typography>
        )}
      >
        <Typography variant={TypographyVariants.Body2}>
          Accordion content {index + 1}
        </Typography>
      </AccordionItem>
    ))}
  </Accordion>
);
