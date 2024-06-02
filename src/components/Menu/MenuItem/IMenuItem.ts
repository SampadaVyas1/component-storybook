import { ReactNode } from 'react';
import { ITypography } from '../../Typography/ITypography';

export interface IMenuItem {
  id: string;
  content: ReactNode;
  onClick?: (id: string) => void;
  disabled?: boolean;
  typographyProps?: ITypography;
  menuItemClassName?: string;
}
