import { ITypography } from '../Typography/ITypography';

export interface IProgressIndicator {
  progress: number;
  progressColor?: string;
  progressBgColor?: string;
  hideTooltip?: boolean;
  tooltipPlacement?: 'Top' | 'Bottom';
  tooltipOnHover?: boolean;
  hideText?: boolean;
  textPlacement?: 'Right' | 'Bottom';
  className?: string;
  tooltipProps?: {
    container?: JSX.IntrinsicElements['span'];
    typographyProps?: ITypography;
  };
  progressTextProps?: ITypography;
}
