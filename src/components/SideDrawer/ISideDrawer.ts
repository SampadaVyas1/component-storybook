export type Position = 'Left' | 'Right';

export interface ISideDrawer {
  open: boolean;
  children: React.ReactNode;
  contentWrapperProps?: Omit<JSX.IntrinsicElements['div'], 'onClick'>;
  backdropStyles?: React.CSSProperties;
  position?: Position;
  onRequestClose?: () => void;
}
