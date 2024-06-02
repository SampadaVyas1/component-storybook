import { ReactNode } from 'react';
import { SVGProps } from '../../icons/interfaces';

type dialogProps = JSX.IntrinsicElements['dialog'];
export interface IModal extends dialogProps {
  open: boolean;
  children: ReactNode;
  header?: ReactNode;
  hideCloseButton?: boolean;
  disablePortal?: boolean;
  attachedNode?: HTMLElement;
  keepMounted?: boolean;
  className?: string;
  backdropStyles?: React.CSSProperties;
  closeIconProps?: SVGProps;
  mainContainerProps?: JSX.IntrinsicElements['div'];
  headerContainerProps?: JSX.IntrinsicElements['div'];
  bodyContainerProps?: JSX.IntrinsicElements['div'];
  disableBackdropClose?: boolean;
  onClose?: () => void;
}
