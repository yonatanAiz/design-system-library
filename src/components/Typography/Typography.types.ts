export enum TypographyVariants {
  Header1 = 'Header1',
  Header2 = 'Header2',
  Header3 = 'Header3',
  Header4 = 'Header4',
  Header5 = 'Header5',
  Header6 = 'Header6',
  Body1 = 'Body1',
  Body2 = 'Body2',
  Subtitle1 = 'Subtitle1',
  Subtitle2 = 'Subtitle2',
}

export interface TypographyProps {
  variant?: TypographyVariants;
  children: React.ReactNode;
  className?: string;
}
