import { ReactNode } from 'react';
import { ITypography } from '../../Typography/ITypography';

export interface ISideNavbarItem {
  id: string;
  item: ReactNode;
  onItemClick?: (id: string) => void;
  disabled?: boolean;
  disabledClassName?: string;
  selectedId?: string;
  sideNavbarItemProps?: {
    container?: JSX.IntrinsicElements['div'];
    typographyProps?: ITypography;
  };
}
