import { overlayPositions } from '../../hooks/useOverlayPosition';
import { ICheckboxIcons } from '../Checkbox/ICheckbox';

export interface IDropdownOption {
  id: string | number;
  label: string;
  disabled?: boolean;
}

export type dropdownPositions = Omit<
  overlayPositions,
  | 'Left'
  | 'Right'
  | 'BottomLeft'
  | 'BottomLeft'
  | 'BottomRight'
  | 'TopLeft'
  | 'TopRight'
  | 'LeftTop'
  | 'LeftBottom'
  | 'RightTop'
  | 'RightBottom'
>;

export interface IDropdown {
  isMulti?: boolean;
  options: IDropdownOption[];
  displayOptionLimit?: number;
  chipsLimit?: number;
  placeholder?: string;
  value?: IDropdownOption[] | IDropdownOption;
  showSelectAll?: boolean;
  disabled?: boolean;
  hasTooltip?: boolean;
  containerProps?: JSX.IntrinsicElements['div'];
  inputProps?: Omit<JSX.IntrinsicElements['input'], 'onChange' | 'onFocus'>;
  inputContainerProps?: Omit<JSX.IntrinsicElements['div'], 'onClick' | 'onChange'>;
  defaultPosition?: dropdownPositions;
  optionContainerProps?: JSX.IntrinsicElements['div'];
  dropdownItemClassName?: string;
  tooltipClassName?: string;
  checkboxIconProps?: ICheckboxIcons;
  renderSelectedValue?: (
    selectedOption: IDropdownOption,
    handleUnselect?: (option: IDropdownOption, event: React.MouseEvent) => void
  ) => React.ReactNode;
  renderDropdownOption?: (
    option: IDropdownOption,
    optionElementRef: (ref: HTMLDivElement) => void,
    onOptionSelect: (option: IDropdownOption) => void
  ) => React.ReactNode;
  onChange?: (selectedOption: IDropdownOption | IDropdownOption[]) => void;
  onSearch?: (searchString: string) => IDropdownOption[];
}
