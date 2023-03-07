import styles from './typography.module.css';
import { TypographyVariant } from './Typography.types';

export const elementMapper: Record<
  TypographyVariant,
  keyof JSX.IntrinsicElements
> = {
  body1: 'div',
  body2: 'div',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'p',
  subtitle2: 'p',
};

export const classMapper: Record<TypographyVariant, string> = {
  body1: styles.body1,
  body2: styles.body2,
  h1: styles.header1,
  h2: styles.header2,
  h3: styles.header3,
  h4: styles.header4,
  h5: styles.header5,
  h6: styles.header6,
  subtitle1: styles.subtitle1,
  subtitle2: styles.subtitle2,
};
