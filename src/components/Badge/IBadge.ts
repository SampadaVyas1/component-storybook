import { ITypography } from '../Typography/ITypography';

type div = JSX.IntrinsicElements['div'];

export interface IBadge extends div {
  color?: string;
  typographyProps?: ITypography;
  badgeContent?: string | undefined;
}
