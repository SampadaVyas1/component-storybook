type HeadingProps = JSX.IntrinsicElements['h1'];
export interface IHeading extends HeadingProps {
  className?: string;
  variant: 'H1' | 'H2' | 'H3' | 'H4' | 'H5';
}
