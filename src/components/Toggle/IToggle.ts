type toggleContainerProps = Omit<JSX.IntrinsicElements['div'], 'onClick'>;
type InputProps = Omit<JSX.IntrinsicElements['input'], 'onChange'>;

export interface IToggle extends InputProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  toggleSize?: 'Small' | 'Large';
  onChange: (isSelected) => void;
  renderTrack?: (isChecked: boolean) => React.ReactNode;
  renderThumb?: (isChecked: boolean) => React.ReactNode;
  toggleThumbProps?: toggleContainerProps;
  toggleTrackProps?: toggleContainerProps;
}
