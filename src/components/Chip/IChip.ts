import { SVGProps } from '../../icons/interfaces';

type div = Omit<JSX.IntrinsicElements['div'], 'onClick'>;

export interface IChip extends div {
  isRemovable?: boolean;
  variant?: 'Rounded' | 'Circular';
  subVariant?: 'Outlined' | 'Filled';
  disabled?: boolean;
  onRemoveIconClick?: (event: React.MouseEvent) => void;
  RemoveIcon?: React.FC<SVGProps>;
  active?: boolean;
  onActive?: (isActive: boolean) => void;
}
