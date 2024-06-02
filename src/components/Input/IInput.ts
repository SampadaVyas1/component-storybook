import { ReactNode, Ref } from 'react';

export type InputProps = JSX.IntrinsicElements['input'];

export interface IInputProps extends InputProps {
  error?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  containerProps?: JSX.IntrinsicElements['div'];
  ref?: Ref<HTMLInputElement>;
}
