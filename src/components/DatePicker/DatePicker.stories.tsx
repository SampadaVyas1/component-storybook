import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import DatePicker from './DatePicker';
import CalendarIcon from '../../icons/CalendarIcon';
import styles from './DatePicker.module.scss';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  args: {
    onChange: action('onchange'),
    onDateRangeSelected: action('onDateRangeSelected')
  }
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {}
};

export const WithTriggerElement: Story = {
  args: {
    TriggerComponent: (props) => (
      <div {...props}>
        <CalendarIcon />
      </div>
    )
  }
};

export const DateRangePicker: Story = {
  args: {
    variant: 'RangePicker',
    startDate: new Date('Fri Dec 08 2023 00:00:00 GMT+0530 (India Standard Time)'),
    endDate: new Date('Sat Dec 30 2023 00:00:00 GMT+0530 (India Standard Time)')
  }
};

export const DateRangePickerWithoutPreFilledValues: Story = {
  args: {
    variant: 'RangePicker'
  }
};

export const CustomStyling: Story = {
  args: {
    variant: 'RangePicker',
    className: styles.userDefinedClass
  }
};
