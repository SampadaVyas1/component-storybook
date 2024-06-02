export interface IAlert {
  variant: 'Default' | 'Success' | 'Error' | 'Warning';
  layout?: 'Relative' | 'Fixed';
  position?:
    | 'TopLeft'
    | 'TopCenter'
    | 'TopRight'
    | 'Left'
    | 'Right'
    | 'BottomLeft'
    | 'BottomCenter'
    | 'BottomRight';
  title?: React.ReactNode;
  content?: React.ReactNode;
  actions?: React.ReactNode;
  alertIcon?: React.ReactNode;
  hideAlertIcon?: boolean;
  hideCloseButton?: boolean;
  className?: string;
  onClose?: () => void;
}
