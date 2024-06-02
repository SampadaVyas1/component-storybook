import React, { Ref } from 'react';

type inputProps = JSX.IntrinsicElements['input'];

export interface ICheckbox extends inputProps {
  intermediate?: boolean;
  icons?: ICheckboxIcons;
  ref?: Ref<HTMLInputElement>;
}

type checkboxIconType = React.FC<Omit<ICheckbox, 'icons'>>;

export interface ICheckboxIcons {
  Checked?: checkboxIconType;
  Unchecked?: checkboxIconType;
  Intermediate?: checkboxIconType;
}
