type DatePickerProps = Omit<JSX.IntrinsicElements['input'], 'onChange'>;

export interface IDatePicker extends DatePickerProps {
  variant?: 'RangePicker' | 'DatePicker';
  className?: string;
  date?: Date;
  onChange?: (date: Date | null) => void;
  TriggerComponent?: React.FC<{
    type?: string;
    readOnly?: boolean;
    value?: string;
    onClick?: () => void;
  }>;
  onDateRangeSelected: (startDate: Date, endDate: Date) => void;
  startDate?: Date;
  endDate?: Date;
}
