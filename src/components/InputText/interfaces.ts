import { ReactNode } from 'react';

type InputProps = JSX.IntrinsicElements['input'];

export interface IInputText extends InputProps {
  error?: boolean;
  fullWidth?: boolean;
  SVGIcon?: ReactNode | undefined;
}
