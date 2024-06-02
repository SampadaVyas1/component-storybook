import { MouseEventHandler, ReactNode } from 'react';

export interface INavbar {
  logoIcon: ReactNode;
  navbarLinks: ReactNode;
  navbarActionItems?: ReactNode;
  onLogoClick?: MouseEventHandler;
  className?: string;
  sideDrawerPosition: 'Left' | 'Right';
}
