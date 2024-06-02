type buttonProps = JSX.IntrinsicElements['button'];

type variantType = 'Primary' | 'Secondary' | 'Tertiary' | 'Outlined' | 'Tab' | 'Split';

export interface IButton extends buttonProps {
  variant: variantType;
  size?: 'Large' | 'Medium' | 'Small' | 'X-Small';
  isActive?: boolean;
}
