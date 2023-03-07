export type TypographyVariant =
  | 'body1'
  | 'body2'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2';

export interface TypographyProps {
  className?: string;
  variant: TypographyVariant;
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'div' | 'span';
}

export type PartialTypographyProps = Omit<TypographyProps, 'variant' | 'as'>;

export type NonHeadingProps = PartialTypographyProps & {
  as?: 'div' | 'p' | 'span';
};
