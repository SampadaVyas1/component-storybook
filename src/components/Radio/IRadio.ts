import { InputHTMLAttributes, Ref } from 'react';
import { IIcon } from '../../utils/svg/interface';

type radioContainerPropsTypes = Omit<JSX.IntrinsicElements['div'], 'onClick' | 'ref'>;

export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  CheckedIcon?: IIcon;
  UncheckedIcon?: IIcon;
  radioContainerProps?: radioContainerPropsTypes;
  ref?: Ref<HTMLInputElement>;
}
