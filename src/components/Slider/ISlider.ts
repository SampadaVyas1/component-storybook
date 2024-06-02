export interface IRangeValue {
  min: number;
  max: number;
}

export type display = 'Top' | 'Bottom';

export interface ISlider {
  min?: number;
  max?: number;
  value?: number | IRangeValue;
  step?: number;
  isOptionSlider?: boolean;
  isRangeSlider?: boolean;
  display?: display;
  disabled?: boolean;
  sliderThumbProps?: JSX.IntrinsicElements['div'];
  sliderTrackProps?: JSX.IntrinsicElements['div'];
  filledTrackProps?: JSX.IntrinsicElements['div'];
  valueContainerProps?: JSX.IntrinsicElements['div'];
  onChange?: (value: number | IRangeValue) => void;
  ariaLabel?: string;
}
