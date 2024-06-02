import { ILoader } from '../Loader/ILoader';
import { ITypography } from '../Typography/ITypography';

export interface IPageLoader {
  show: boolean;
  loaderProps?: ILoader;
  backdropStyles?: React.CSSProperties;
  text?: string;
  textPosition?: 'Top' | 'Bottom' | 'Right' | 'Left';
  typographyProps?: ITypography;
}
