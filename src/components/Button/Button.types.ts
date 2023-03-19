export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'danger';
  icon?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
}
