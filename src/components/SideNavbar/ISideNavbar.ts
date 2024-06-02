import { ReactNode } from 'react';
import { ISideNavbarItem } from './SideNavbarItem/ISideNavbarItem';
import { ITypography } from '../Typography/ITypography';

export interface ISideNavbar {
  header: ReactNode;
  sideNavbarItems: ISideNavbarItem[];
  selectedId: string;
  onItemClick: (id: string) => void;
  footerContent?: ReactNode;
  lowerPanelItems?: ISideNavbarItem[];
  sideNavbarItemProps?: {
    container?: JSX.IntrinsicElements['div'];
    typographyProps?: ITypography;
  };
  classNames?: {
    sideNavBarContainerClassName?: string;
    mainContainerClassName?: string;
    supportingContainerClassName?: string;
    footerContainerClassName?: string;
  };
}
