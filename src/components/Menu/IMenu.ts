import { ReactNode } from 'react';
import { IMenuItem } from './MenuItem/IMenuItem';
import { IButton } from '../Button/IButton';

type buttonComponentPropsType = Omit<IButton, 'variant'>;

export interface IMenu extends buttonComponentPropsType {
  menuItems: IMenuItem[];
  TriggerElement: ReactNode;
  triggerElementClassName?: string;
  menuPosition:
    | 'BottomLeft'
    | 'BottomRight'
    | 'TopLeft'
    | 'TopRight'
    | 'LeftTop'
    | 'LeftBottom'
    | 'RightTop'
    | 'RightBottom';
  onMenuItemClick: (id: string) => void;
  menuItemClassName?: string;
}
