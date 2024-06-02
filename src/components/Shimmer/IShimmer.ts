type shimmerProps = Omit<JSX.IntrinsicElements['div'], 'onClick' | 'onChange'>;
type variants = 'Circular' | 'Rectangular' | 'Rounded';

export interface IShimmer extends shimmerProps {
  width?: string;
  height?: string;
  variant?: variants;
}
