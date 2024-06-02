import { ITypography } from '../Typography/ITypography';

export interface ITabs {
  tabs: {
    id: number | string;
    title: React.ReactNode;
    disabled?: boolean;
  }[];
  activeTabId: number | string;
  onChange: (tabId: number | string) => void;
  className?: string;
  activeClassName?: string;
  tabButtonProps?: {
    container?: JSX.IntrinsicElements['button'];
    typographyProps?: ITypography;
    activeButtonClass?: string;
  };
}
