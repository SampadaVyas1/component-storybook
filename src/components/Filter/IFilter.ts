import React, { ReactNode } from 'react';
import { ICheckboxIcons } from '../Checkbox/ICheckbox';

export type position = 'BottomLeft' | 'BottomRight';

export type triggerProps = Omit<JSX.IntrinsicElements['button'], 'onClick'>;
export interface IOption {
  id: number | string;
  title: string;
  backendId?: string;
  navOptionId?: string;
}

export interface INavOption {
  id: number | string;
  title: ReactNode;
  disabled?: boolean | undefined;
}

export type IOpenFilterEventTriggers =
  | 'onApply'
  | 'onTriggerElement'
  | 'onCrossButtonClick'
  | 'onReset'
  | 'onBackdropClick';

export interface IFilter {
  navOptions: INavOption[];
  filterOptions: IOption[];
  isBackdropCloseEnabled?: boolean;
  appliedFilterOptions?: IOption[];
  triggerElementProps?: triggerProps;
  TriggerElement?: ReactNode;
  values?: IOption[];
  selectedNavOptionId?: string | number;
  appliedFiltersCount?: number;
  position?: position;
  loading?: boolean;
  error?: boolean;
  isFilterOpen?: boolean;
  className?: string;
  resetButtonProps?: triggerProps;
  applyButtonProps?: triggerProps;
  checkboxIconProps?: ICheckboxIcons;
  handleIsFilterOpen?: (isOpenFilter: boolean, eventTrigger?: IOpenFilterEventTriggers) => void;
  onSearch?: (searchValue: string) => void;
  onNavOptionChange?: (id: number | string) => void;
  onApply?: (values: IOption[]) => void;
  onReset?: (values: IOption[], appliedFilterOptions: IOption[]) => void;
  renderBadgeContent?: (appliedFilterCount: number) => React.ReactNode;
  renderCheckbox?: (id: string, checkboxItem: IOption) => React.ReactNode;
  onRetry?: () => void;
}
