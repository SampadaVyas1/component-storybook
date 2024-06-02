import { Ref } from 'react';

export type TextareaProps = JSX.IntrinsicElements['textarea'];

export interface ITextarea extends TextareaProps {
  error?: boolean;
  resize?: boolean;
  ref?: Ref<HTMLTextAreaElement>;
}
