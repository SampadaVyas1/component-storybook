type ParagraphProps = JSX.IntrinsicElements['p'];

export interface IParagraph extends ParagraphProps {
  className?: string;
  variant: 'Light' | 'Regular' | 'Medium' | 'Bold';
}
